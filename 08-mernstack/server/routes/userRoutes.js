// User routes for handling CRUD operations
// This file defines all the REST API endpoints for user management
// Routes: GET, POST, PUT, DELETE for /api/users

const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');

// GET /api/users - Get all users
router.get('/', (req, res) => {
  try {
    const users = UserModel.getAllUsers();
    res.json({
      success: true,
      data: users,
      message: 'Users retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving users',
      error: error.message
    });
  }
});

// GET /api/users/:id - Get user by ID
router.get('/:id', (req, res) => {
  try {
    const user = UserModel.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    res.json({
      success: true,
      data: user,
      message: 'User retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving user',
      error: error.message
    });
  }
});

// POST /api/users - Create new user
router.post('/', (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and password are required'
      });
    }

    // Check if email already exists
    if (UserModel.emailExists(email)) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists'
      });
    }

    const newUser = UserModel.createUser({ name, email, password });
    res.status(201).json({
      success: true,
      data: newUser,
      message: 'User created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating user',
      error: error.message
    });
  }
});

// PUT /api/users/:id - Update user by ID
router.put('/:id', (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userId = req.params.id;

    // Check if user exists
    const existingUser = UserModel.getUserById(userId);
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Check if email already exists (excluding current user)
    if (email && email !== existingUser.email && UserModel.emailExists(email)) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists'
      });
    }

    const updatedUser = UserModel.updateUser(userId, { name, email, password });
    res.json({
      success: true,
      data: updatedUser,
      message: 'User updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating user',
      error: error.message
    });
  }
});

// DELETE /api/users/:id - Delete user by ID
router.delete('/:id', (req, res) => {
  try {
    const deletedUser = UserModel.deleteUser(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    res.json({
      success: true,
      data: deletedUser,
      message: 'User deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting user',
      error: error.message
    });
  }
});

module.exports = router;
