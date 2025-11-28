const express = require('express');
const router = express.Router();
const partialDenturesController = require('../controllers/partialDenturesController');
const { auth } = require('../middleware/auth');

// Public routes
router.get('/', partialDenturesController.getPartialDenturesPage);

// Protected routes (require authentication)
router.put('/', auth, partialDenturesController.updatePartialDenturesPage);
router.put('/:section', auth, partialDenturesController.updatePartialDenturesSection);

module.exports = router;