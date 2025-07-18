provider "aws" {
  region = "us-east-1"
}

# Cognito User Pool
resource "aws_cognito_user_pool" "user_pool" {
  name = "example-user-pool"
}

resource "aws_cognito_user_pool_client" "user_pool_client" {
  name         = "example-user-pool-client"
  user_pool_id = aws_cognito_user_pool.user_pool.id
}

# Amplify App
resource "aws_amplify_app" "amplify_app" {
  name = "example-amplify-app"
  repository = "https://github.com/your-repo/your-app" # Update with your repo
}

# Lambda Function
resource "aws_iam_role" "lambda_role" {
  name = "lambda-exec-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

resource "aws_lambda_function" "lambda" {
  function_name = "example-lambda"
  role          = aws_iam_role.lambda_role.arn
  handler       = "index.handler"
  runtime       = "nodejs18.x"
  filename      = "lambda_function_payload.zip" # Upload your code
  source_code_hash = filebase64sha256("lambda_function_payload.zip")
}

# DynamoDB Table
resource "aws_dynamodb_table" "table" {
  name           = "example-table"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "id"

  attribute {
    name = "id"
    type = "S"
  }
}

# AppSync GraphQL API
resource "aws_appsync_graphql_api" "graphql_api" {
  name                = "example-graphql-api"
  authentication_type = "AMAZON_COGNITO_USER_POOLS"

  user_pool_config {
    user_pool_id = aws_cognito_user_pool.user_pool.id
    aws_region   = "us-east-1"
    default_action = "ALLOW"
  }
}

resource "aws_appsync_datasource" "dynamodb" {
  api_id = aws_appsync_graphql_api.graphql_api.id
  name   = "DynamoDBTable"
  type   = "AMAZON_DYNAMODB"

  dynamodb_config {
    table_name = aws_dynamodb_table.table.name
    aws_region = "us-east-1"
  }

  service_role_arn = aws_iam_role.lambda_role.arn
}

resource "aws_appsync_datasource" "lambda" {
  api_id = aws_appsync_graphql_api.graphql_api.id
  name   = "LambdaFunction"
  type   = "AWS_LAMBDA"

  lambda_config {
    function_arn = aws_lambda_function.lambda.arn
  }

  service_role_arn = aws_iam_role.lambda_role.arn
}

# (Optional) Add GraphQL schema, resolvers, and other resources as needed.