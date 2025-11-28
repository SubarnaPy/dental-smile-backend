const express = require('express');
const router = express.Router();
const dentalSealsController = require('../controllers/dentalSealsController');
const { auth } = require('../middleware/auth');

// Public routes
router.get('/', dentalSealsController.getDentalSealsPage);

// Protected routes (require authentication)
router.put('/', auth, dentalSealsController.updateDentalSealsPage);
router.put('/:section', auth, dentalSealsController.updateDentalSealsSection);
router.delete('/reset', auth, dentalSealsController.resetDentalSealsPage);

module.exports = router;