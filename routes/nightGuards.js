const express = require('express');
const router = express.Router();
const nightGuardsController = require('../controllers/nightGuardsController');
const { auth } = require('../middleware/auth');

// Public routes
router.get('/', nightGuardsController.getNightGuardsPage);

// Protected routes (require authentication)
router.put('/', auth, nightGuardsController.updateNightGuardsPage);
router.put('/:section', auth, nightGuardsController.updateNightGuardsSection);
router.delete('/reset', auth, nightGuardsController.resetNightGuardsPage);

module.exports = router;