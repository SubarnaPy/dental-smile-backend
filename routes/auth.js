const express = require('express');
const { body } = require('express-validator');
const { auth, authorize } = require('../middleware/auth');
const { authLimiter } = require('../middleware/rateLimit');
const {
  register,
  login,
  getMe,
  updateProfile,
  changePassword
} = require('../controllers/authController');

const router = express.Router();

// Validation rules
const registerValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
  body('name').optional().trim().isLength({ min: 2 })
];

const loginValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').exists()
];

const updateProfileValidation = [
  body('email').optional().isEmail().normalizeEmail(),
  body('name').optional().trim().isLength({ min: 2 })
];

const changePasswordValidation = [
  body('currentPassword').exists(),
  body('newPassword').isLength({ min: 6 })
];

// Public routes
router.post('/register', authLimiter, registerValidation, register);
router.post('/login', authLimiter, loginValidation, login);

// Protected routes
router.get('/me', auth, getMe);
router.put('/profile', auth, updateProfileValidation, updateProfile);
router.put('/change-password', auth, changePasswordValidation, changePassword);

module.exports = router;