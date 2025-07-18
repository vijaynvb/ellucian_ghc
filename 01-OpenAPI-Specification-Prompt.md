// Prompt for GitHub Copilot to Generate MERN application

Generate only the OpenAPI specification 3.0 file (YAML or JSON) describing the backend API endpoints TODO this application:

1. Backend: 
   - Built with Node.js and Express.js
   - Connect to MongoDB using Mongoose
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

4. Include .env file support for MongoDB URI and port configuration

5. Add comments to explain each part for beginners