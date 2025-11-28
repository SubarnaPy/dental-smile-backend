const express = require('express');
const router = express.Router();
const dentalBondingController = require('../controllers/dentalBondingController');
const { auth } = require('../middleware/auth');

// Public routes
router.get('/', dentalBondingController.getDentalBondingPage);

// Admin routes (protected)
router.put('/', auth, dentalBondingController.updateDentalBondingPage);
router.put('/:section', auth, dentalBondingController.updateDentalBondingSection);

module.exports = router;