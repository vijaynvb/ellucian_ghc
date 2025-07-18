// User.js
// This class represents a User entity and provides in-memory CRUD operations.

class User {
  // Static array to store all users in memory
  static users = [];
  static nextId = 1;

  /**
   * Create a new User instance
   * @param {string} name - The user's name
   * @param {string} email - The user's email
   * @param {string} password - The user's password
   */
  constructor(name, email, password) {
    this.id = User.nextId++;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  /**
   * Create and add a new user to the in-memory array
   * @param {object} data - { name, email, password }
   * @returns {User} The created user
   */
  static create(data) {
    const user = new User(data.name, data.email, data.password);
    User.users.push(user);
    return user;
  }

  /**
   * Update an existing user by ID
   * @param {number} id - User ID
   * @param {object} data - Fields to update
   * @returns {User|null} The updated user or null if not found
   */
  static update(id, data) {
    const user = User.users.find(u => u.id === id);
    if (!user) return null;
    if (data.name !== undefined) user.name = data.name;
    if (data.email !== undefined) user.email = data.email;
    if (data.password !== undefined) user.password = data.password;
    return user;
  }

  /**
   * Delete a user by ID
   * @param {number} id - User ID
   * @returns {boolean} True if deleted, false if not found
   */
  static delete(id) {
    const index = User.users.findIndex(u => u.id === id);
    if (index === -1) return false;
    User.users.splice(index, 1);
    return true;
  }

  /**
   * Fetch all users
   * @returns {User[]} Array of all users
   */
  static fetchAll() {
    return User.users;
  }

  /**
   * Fetch a user by ID
   * @param {number} id - User ID
   * @returns {User|null} The user or null if not found
   */
  static fetchById(id) {
    return User.users.find(u => u.id === id) || null;
  }
}

// Export the User class for use in other modules
module.exports = User;
