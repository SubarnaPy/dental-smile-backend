const express = require('express');
const router = express.Router();
const rootCanalTherapyController = require('../controllers/rootCanalTherapyController');
const { auth } = require('../middleware/auth');

// Public routes
router.get('/', rootCanalTherapyController.getRootCanalTherapyPage);

// Admin routes (protected)
router.put('/', auth, rootCanalTherapyController.updateRootCanalTherapyPage);
router.put('/:section', auth, rootCanalTherapyController.updateRootCanalTherapySection);

module.exports = router;