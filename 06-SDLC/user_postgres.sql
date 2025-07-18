-- user_postgres.sql
-- DDL: Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- DML: Insert sample users
INSERT INTO users (name, email, password) VALUES ('Alice Smith', 'alice@example.com', 'alicepass');
INSERT INTO users (name, email, password) VALUES ('Bob Johnson', 'bob@example.com', 'bobpass');
INSERT INTO users (name, email, password) VALUES ('Charlie Brown', 'charlie@example.com', 'charliepass');

-- Sample UPDATE: Update name and password for user with id = 2
UPDATE users SET name = 'Robert Johnson', password = 'newbobpass' WHERE id = 2;

-- Sample DELETE: Delete user by email
DELETE FROM users WHERE email = 'alice@example.com';
