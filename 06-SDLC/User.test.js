// User.test.js
// Jest unit tests for the User class CRUD operations and edge cases.

const User = require('../User');

describe('User Class CRUD Operations', () => {
  // Reset in-memory storage before each test for isolation
  beforeEach(() => {
    User.users = [];
    User.nextId = 1;
  });

  // Helper to validate email format
  function isValidEmail(email) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }

  test('should create a user with valid fields', () => {
    const user = User.create({ name: 'Alice', email: 'alice@example.com', password: 'pass123' });
    expect(user).toHaveProperty('id', 1);
    expect(user).toHaveProperty('name', 'Alice');
    expect(user).toHaveProperty('email', 'alice@example.com');
    expect(User.users.length).toBe(1);
  });

  test('should fetch all users', () => {
    User.create({ name: 'A', email: 'a@example.com', password: 'a' });
    User.create({ name: 'B', email: 'b@example.com', password: 'b' });
    const users = User.fetchAll();
    expect(users.length).toBe(2);
  });

  test('should fetch a user by ID', () => {
    const user = User.create({ name: 'A', email: 'a@example.com', password: 'a' });
    const fetched = User.fetchById(user.id);
    expect(fetched).toEqual(user);
  });

  test('should return null for non-existent user by ID', () => {
    expect(User.fetchById(999)).toBeNull();
  });

  test('should update an existing user', () => {
    const user = User.create({ name: 'A', email: 'a@example.com', password: 'a' });
    const updated = User.update(user.id, { name: 'A2', email: 'a2@example.com' });
    expect(updated.name).toBe('A2');
    expect(updated.email).toBe('a2@example.com');
  });

  test('should return null when updating non-existent user', () => {
    expect(User.update(999, { name: 'X' })).toBeNull();
  });

  test('should delete an existing user', () => {
    const user = User.create({ name: 'A', email: 'a@example.com', password: 'a' });
    const result = User.delete(user.id);
    expect(result).toBe(true);
    expect(User.users.length).toBe(0);
  });

  test('should return false when deleting non-existent user', () => {
    expect(User.delete(999)).toBe(false);
  });

  // Edge case: Missing required fields
  test('should not create user if name is missing', () => {
    expect(() => User.create({ email: 'a@example.com', password: 'a' })).toThrow();
  });

  test('should not create user if email is missing', () => {
    expect(() => User.create({ name: 'A', password: 'a' })).toThrow();
  });

  // Edge case: Invalid email format
  test('should not create user with invalid email format', () => {
    expect(() => User.create({ name: 'A', email: 'invalid-email', password: 'a' })).toThrow();
  });

  // Edge case: Duplicate email on create
  test('should not allow duplicate email on create', () => {
    User.create({ name: 'A', email: 'dup@example.com', password: 'a' });
    expect(() => User.create({ name: 'B', email: 'dup@example.com', password: 'b' })).toThrow();
  });
});

// Note: To make these tests pass, you may need to add validation logic to the User class for required fields, email format, and duplicate emails.
