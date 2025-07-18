# MERN Stack User Management Application

A full-stack MERN (MongoDB, Express, React, Node.js) application for user management with in-memory storage instead of MongoDB. This application provides a complete CRUD interface for managing users.

## Features

- **Backend**: Node.js with Express.js
- **Frontend**: React with React Router
- **Storage**: In-memory storage using arrays (no database required)
- **Styling**: Bootstrap for responsive design
- **API**: RESTful API endpoints for user operations

## Project Structure

```
mern-user-management/
├── server/                 # Backend (Node.js + Express)
│   ├── models/
│   │   └── User.js        # User model with in-memory storage
│   ├── routes/
│   │   └── userRoutes.js  # API routes for user operations
│   ├── server.js          # Main server file
│   └── package.json       # Server dependencies
├── client/                 # Frontend (React)
│   ├── public/
│   │   └── index.html     # Main HTML file
│   ├── src/
│   │   ├── components/
│   │   │   ├── UserList.js    # Display all users
│   │   │   ├── UserForm.js    # Add new user form
│   │   │   └── EditUser.js    # Edit user form
│   │   ├── App.js         # Main App component with routing
│   │   ├── App.css        # App styles
│   │   ├── index.js       # React entry point
│   │   └── index.css      # Global styles
│   └── package.json       # Client dependencies
└── package.json           # Root package.json with scripts
```

## API Endpoints

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user by ID
- `DELETE /api/users/:id` - Delete user by ID

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation Steps

1. **Clone or download the project**
   ```bash
   cd 04-mernstack
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install all dependencies (server + client)**
   ```bash
   npm run install-all
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both the backend server (port 5000) and React development server (port 3000) concurrently.

### Alternative: Run servers separately

1. **Start the backend server**
   ```bash
   npm run server
   ```

2. **Start the frontend (in a new terminal)**
   ```bash
   npm run client
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. You'll see the user management interface with sample users
3. Use the navigation to:
   - View all users on the home page
   - Add new users using the "Add User" link
   - Edit existing users by clicking the "Edit" button
   - Delete users by clicking the "Delete" button

## Sample Data

The application comes pre-loaded with sample users:
- John Doe (john@example.com)
- Jane Smith (jane@example.com)
- Bob Johnson (bob@example.com)

## Features Explained

### Backend Features
- **Express.js Server**: RESTful API with proper error handling
- **CORS Enabled**: Allows frontend to communicate with backend
- **In-Memory Storage**: Uses arrays instead of database for simplicity
- **Input Validation**: Validates user data before processing
- **Middleware**: Body parser for handling JSON requests

### Frontend Features
- **React Router**: Navigation between different pages
- **Bootstrap Styling**: Responsive and modern UI
- **Axios Integration**: HTTP client for API calls
- **Form Validation**: Client-side validation for user inputs
- **Loading States**: Shows loading indicators during API calls
- **Error Handling**: Displays user-friendly error messages

## Development Notes

- **No Database Required**: The application uses in-memory storage, so no database setup is needed
- **Data Persistence**: Data is lost when the server restarts (by design)
- **Bootstrap CDN**: Styling is loaded from CDN for simplicity
- **Proxy Configuration**: React dev server proxies API calls to Express server

## Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run server` - Start only the backend server
- `npm run client` - Start only the frontend
- `npm run install-all` - Install dependencies for both server and client
- `npm run build` - Build the React app for production

## Technologies Used

### Backend
- Node.js
- Express.js
- CORS
- Body-parser

### Frontend
- React
- React Router DOM
- Axios
- Bootstrap (CDN)

### Development Tools
- Concurrently (for running multiple scripts)
- Nodemon (for backend development)

## Learning Objectives

This application demonstrates:
- Full-stack development with MERN stack
- RESTful API design and implementation
- React components and state management
- Client-server communication
- CRUD operations
- Form handling and validation
- Responsive web design with Bootstrap
- Project organization and structure

## Troubleshooting

1. **Port already in use**: Make sure ports 3000 and 5000 are available
2. **CORS issues**: The backend is configured to accept requests from all origins
3. **API not responding**: Check if the backend server is running on port 5000
4. **Frontend not loading**: Ensure React dev server is running on port 3000

## Next Steps

To extend this application, you could:
- Add user authentication
- Implement persistent storage (MongoDB, PostgreSQL)
- Add more user fields (phone, address, etc.)
- Implement user roles and permissions
- Add pagination for large user lists
- Add search and filter functionality
- Implement file upload for user avatars
- Add email validation and verification
