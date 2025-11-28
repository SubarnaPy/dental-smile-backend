const express = require('express');
const router = express.Router();
const tmjConsultController = require('../controllers/tmjConsultController');
const { auth } = require('../middleware/auth');

// Public routes
router.get('/', tmjConsultController.getTMJConsultPage);

// Protected routes (require authentication)
router.put('/', auth, tmjConsultController.updateTMJConsultPage);
router.put('/:section', auth, tmjConsultController.updateTMJConsultSection);

module.exports = router;