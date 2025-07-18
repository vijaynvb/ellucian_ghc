// User model with in-memory storage
// This file defines the User model structure and provides methods for CRUD operations
// Uses an array to store users instead of a database

class User {
  constructor(name, email, password) {
    this.id = Date.now().toString(); // Simple ID generation using timestamp
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = new Date().toISOString();
  }
}

// In-memory storage for users (array)
let users = [
  new User('John Doe', 'john@example.com', 'password123'),
  new User('Jane Smith', 'jane@example.com', 'password456'),
  new User('Bob Johnson', 'bob@example.com', 'password789')
];

// User operations
const UserModel = {
  // Get all users
  getAllUsers: () => {
    return users;
  },

  // Get user by ID
  getUserById: (id) => {
    return users.find(user => user.id === id);
  },

  // Create new user
  createUser: (userData) => {
    const newUser = new User(userData.name, userData.email, userData.password);
    users.push(newUser);
    return newUser;
  },

  // Update user by ID
  updateUser: (id, userData) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...userData };
      return users[userIndex];
    }
    return null;
  },

  // Delete user by ID
  deleteUser: (id) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      const deletedUser = users[userIndex];
      users.splice(userIndex, 1);
      return deletedUser;
    }
    return null;
  },

  // Check if email already exists
  emailExists: (email) => {
    return users.some(user => user.email === email);
  }
};

module.exports = UserModel;
