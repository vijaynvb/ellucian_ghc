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