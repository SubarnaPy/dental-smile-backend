const express = require('express');
const router = express.Router();
const teethWhiteningController = require('../controllers/teethWhiteningController');
const { auth } = require('../middleware/auth');

// Public routes
router.get('/', teethWhiteningController.getTeethWhiteningPage);

// Admin routes (protected)
router.put('/', auth, teethWhiteningController.updateTeethWhiteningPage);
router.put('/:section', auth, teethWhiteningController.updateTeethWhiteningSection);

module.exports = router;