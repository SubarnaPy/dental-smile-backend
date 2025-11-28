const express = require('express');
const router = express.Router();
const nitrousSedationController = require('../controllers/nitrousSedationController');
const { auth } = require('../middleware/auth');

// Public routes
router.get('/', nitrousSedationController.getNitrousSedationPage);

// Protected routes (require authentication)
router.put('/', auth, nitrousSedationController.updateNitrousSedationPage);
router.put('/:section', auth, nitrousSedationController.updateNitrousSedationSection);
router.delete('/reset', auth, nitrousSedationController.resetNitrousSedationPage);

module.exports = router;