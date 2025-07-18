# SDLC Flow: Building a MERN Stack Application with GitHub Copilot

This document outlines a comprehensive Software Development Life Cycle (SDLC) flow for building a full-stack MERN application using GitHub Copilot assistance. The flow demonstrates how to go from initial requirements to deployment infrastructure.

## Overview

This SDLC flow covers the complete journey of building a MERN (MongoDB, Express.js, React, Node.js) stack application with in-memory storage, including:

- **Planning & Design**: Creating ER diagrams
- **Development**: Backend and frontend implementation
- **Testing**: Unit testing with Jest
- **Database Design**: SQL implementations (Oracle & PostgreSQL)
- **CI/CD**: GitHub Actions workflow
- **Infrastructure**: Terraform configuration for Azure deployment

## Step 1: Application Requirements & Boilerplate Generation

**Objective**: Generate a full-stack MERN application boilerplate with comprehensive features.

**GitHub Copilot Prompt use this as a context**

Add in a text file or markdown file:

```
Generate a full-stack MERN application boilerplate with the following features:

1. Backend:
   - Built with Node.js and Express.js
   - Use in-memory storage (e.g., an array) instead of a database like MongoDB
   - Define a sample "User" model with fields: name, email, password
   - Expose REST API endpoints to create, fetch, update, and delete users (`/api/users`)
   - Enable CORS and use body-parser middleware

2. Frontend:
   - Built with React and React Router
   - Create a simple UI to perform CRUD operations on users
   - Use Axios to call backend APIs
   - Use basic Bootstrap or TailwindCSS for styling

3. Project Structure:
   - Backend in `server/` folder
   - Frontend React app in `client/` folder
   - Include `package.json` scripts to start both frontend and backend with one command using concurrently

4. No external database configuration needed—application should run independently with in-memory storage

5. Add comments to explain each part for beginners
```

---

## Step 2: Data Modeling & ER Diagram

**Objective**: Create a visual representation of the data model using Mermaid ER diagrams.

- Install `Mermaid chart` extension from VS Code Marketplace.

**GitHub Copilot Prompt:**

```
@mermaid-chart
Generate a Mermaid ER diagram for a single entity called User .

Requirements:

Use valid Mermaid ER diagram syntax only.
Show the data types for each field.
Do not include tooltips, click events, or any unsupported syntax.
Optionally, use the style directive to visually highlight the entity.
The output should be ready to copy and paste into a Mermaid renderer without errors.
```

---

## Step 3: Backend Class Implementation

**Objective**: Convert the ER diagram into JavaScript class definitions for backend implementation.

**GitHub Copilot Prompt:**

```
Using the ER diagram for the previously described MERN application:

Generate class definitions in JavaScript.
Include a class for the User entity.
Define attributes: name, email, password.
Implement basic in-memory logic for common CRUD operations: create(), update(), delete(), fetchAll(), fetchById().
Add appropriate comments to explain each method.
Output the result as a single file named: User.js
```

---

## Step 4: Unit Testing Implementation

**Objective**: Write comprehensive unit test cases for the User class using Jest.

**GitHub Copilot Prompt:**

```
Write unit test cases for the User class from the MERN application using a test framework like Jest.

Requirements:

Test all CRUD methods: create(), fetchAll(), fetchById(), update(), delete()
Include edge cases:
Missing required fields (e.g., name or email)
Invalid email format
Duplicate email on create
Update or delete non-existent user
Use in-memory storage for isolation
Add clear comments explaining what each test case does
Output the result as a single file named: User.test.j
```

---

## Step 5: Oracle SQL Implementation

**Objective**: Generate equivalent Oracle SQL statements for the User entity.

**GitHub Copilot Prompt:**

```
Generate equivalent Oracle SQL statements for the User entity with the following:

DDL (Data Definition Language):

Create a users table with fields:
id (number, primary key, auto-increment)
name (VARCHAR2)
email (VARCHAR2, unique, not null)
password (VARCHAR2, not null)
Add necessary constraints:
Primary key on id
Unique constraint on email
NOT NULL constraints where appropriate
Use a sequence and trigger for auto-incrementing id (Oracle standard)
DML (Data Manipulation Language):

Insert at least 3 sample users
Provide sample UPDATE statement (e.g., update name/password for a user by ID)
Provide sample DELETE statement (e.g., delete a user by email)
Output everything in a single SQL script file named: user_oracle.sql
```

---

## Step 6: PostgreSQL Migration

**Objective**: Convert Oracle SQL statements to PostgreSQL-compatible syntax.

**GitHub Copilot Prompt:**

```
Convert the Oracle SQL statements from Oracle SQL Statements to equivalent PostgreSQL SQL statements.

Requirements:

Ensure compatibility with PostgreSQL-specific syntax and features
Replace Oracle-specific data types (e.g., VARCHAR2, NUMBER) with PostgreSQL types (VARCHAR, INTEGER, etc.)
Replace SEQUENCE + TRIGGER approach with SERIAL or GENERATED BY DEFAULT AS IDENTITY for auto-incrementing primary keys
Translate constraints: PRIMARY KEY, UNIQUE, NOT NULL
Include DDL (table creation) and DML (insert/update/delete) statements
Output only PostgreSQL-compatible SQL
```

---

## Step 7: CI/CD Pipeline Setup

**Objective**: Create a GitHub Actions workflow for continuous integration and deployment.

**GitHub Copilot Prompt:**

```
Create a GitHub Actions workflow YAML file for CI/CD of a MERN stack application using in-memory storage (no database).

Requirements:

Name: ci-cd.yml inside .github/workflows/

Workflow Steps:

Checkout the repository
Use a matrix strategy to test against multiple Node.js versions (e.g., 16.x, 18.x, 20.x)
Set up Node.js for both client (client/) and server (server/)
Install dependencies using npm install
Run tests (if available) in both frontend and backend
Build both client and server
Deploy step (can be mock or commented for actual deployment integration)
Additional Requirements:

Use concurrently or separate commands to handle client/server
Do not include any database configuration like MONGODB_URI
Use caching to speed up builds where possible
Include use of GitHub secrets only if required for deployment
Output:

A complete and working GitHub Actions workflow YAML file compatible with a MERN app that uses in-memory backend logic
```

---

## Step 8: Infrastructure as Code (Terraform)

**Objective**: Write a complete Terraform configuration to provision Azure resources for the MERN stack application.

**GitHub Copilot Prompt:**

```
Write a complete Terraform configuration to provision the following Azure resources for a MERN stack application using in-memory backend (no external database):

Requirements:
Azure Resources to Provision:

A Resource Group
An Azure App Service and App Service Plan for hosting the Node.js backend
An Azure Static Web App (or Storage Account + Static Website Hosting) for serving the React frontend
Configuration Expectations:

Use variable definitions (variables.tf) for values like resource group name, location, app names, etc.
Include a terraform.tfvars example file with sample values
Provide meaningful outputs.tf for things like frontend URL and backend URL
Use locals or naming conventions for resource naming consistency
Extra Considerations:

Ensure compatibility with Azure provider and latest Terraform syntax
Add tags to all resources
Do not include Cosmos DB or any database-related resources
Make sure App Service has Node.js runtime version configured
Output:

Full Terraform configuration with:
main.tf
variables.tf
terraform.tfvars (example values)
outputs.tf
```

---