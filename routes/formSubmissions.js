const express = require('express');
const router = express.Router();
const formSubmissionController = require('../controllers/formSubmissionController');
const { auth, authorize } = require('../middleware/auth');

// Public route - submit form
router.post('/submit', formSubmissionController.submitForm);

// Protected routes - admin only
router.get('/', auth, authorize('admin'), formSubmissionController.getAllSubmissions);
router.get('/:id', auth, authorize('admin'), formSubmissionController.getSubmission);
router.put('/:id', auth, authorize('admin'), formSubmissionController.updateSubmission);
router.delete('/:id', auth, authorize('admin'), formSubmissionController.deleteSubmission);

module.exports = router;
