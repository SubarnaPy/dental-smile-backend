const express = require('express');
const router = express.Router();
const formSubmissionController = require('../controllers/formSubmissionController');
const { protect, authorize } = require('../middleware/auth');

// Public route - submit form
router.post('/submit', formSubmissionController.submitForm);

// Protected routes - admin only
router.get('/', protect, authorize('admin'), formSubmissionController.getAllSubmissions);
router.get('/:id', protect, authorize('admin'), formSubmissionController.getSubmission);
router.put('/:id', protect, authorize('admin'), formSubmissionController.updateSubmission);
router.delete('/:id', protect, authorize('admin'), formSubmissionController.deleteSubmission);

module.exports = router;
