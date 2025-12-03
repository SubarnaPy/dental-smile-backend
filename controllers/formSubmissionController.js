const FormSubmission = require('../models/FormSubmission');

// Submit a form
exports.submitForm = async (req, res) => {
  console.log('\n=== FORM SUBMISSION REQUEST ===');
  console.log('Request body:', JSON.stringify(req.body, null, 2));
  console.log('IP Address:', req.ip || req.connection.remoteAddress);
  console.log('User Agent:', req.get('user-agent'));
  
  try {
    const { formType, formData } = req.body;

    console.log('Form Type:', formType);
    console.log('Form Data:', JSON.stringify(formData, null, 2));

    if (!formType || !formData) {
      console.log('❌ Validation failed: Missing formType or formData');
      return res.status(400).json({
        success: false,
        message: 'Form type and form data are required'
      });
    }

    console.log('✓ Validation passed, creating submission...');
    
    const submission = new FormSubmission({
      formType,
      formData,
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('user-agent')
    });

    console.log('✓ Submission object created, saving to database...');
    await submission.save();
    console.log('✅ Submission saved successfully! ID:', submission._id);

    res.status(201).json({
      success: true,
      message: 'Form submitted successfully',
      data: submission
    });
  } catch (error) {
    console.error('❌ Form submission error:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({
      success: false,
      message: 'Failed to submit form',
      error: error.message
    });
  }
};

// Get all form submissions (Admin only)
exports.getAllSubmissions = async (req, res) => {
  try {
    const { formType, status, page = 1, limit = 20 } = req.query;
    
    const query = {};
    if (formType) query.formType = formType;
    if (status) query.status = status;

    const submissions = await FormSubmission.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('assignedTo', 'name email');

    const count = await FormSubmission.countDocuments(query);

    res.json({
      success: true,
      data: submissions,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count
    });
  } catch (error) {
    console.error('Get submissions error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch submissions',
      error: error.message
    });
  }
};

// Get single submission
exports.getSubmission = async (req, res) => {
  try {
    const submission = await FormSubmission.findById(req.params.id)
      .populate('assignedTo', 'name email');

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }

    res.json({
      success: true,
      data: submission
    });
  } catch (error) {
    console.error('Get submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch submission',
      error: error.message
    });
  }
};

// Update submission status
exports.updateSubmission = async (req, res) => {
  try {
    const { status, notes, assignedTo } = req.body;

    const submission = await FormSubmission.findByIdAndUpdate(
      req.params.id,
      { status, notes, assignedTo },
      { new: true, runValidators: true }
    ).populate('assignedTo', 'name email');

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }

    res.json({
      success: true,
      message: 'Submission updated successfully',
      data: submission
    });
  } catch (error) {
    console.error('Update submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update submission',
      error: error.message
    });
  }
};

// Delete submission
exports.deleteSubmission = async (req, res) => {
  try {
    const submission = await FormSubmission.findByIdAndDelete(req.params.id);

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }

    res.json({
      success: true,
      message: 'Submission deleted successfully'
    });
  } catch (error) {
    console.error('Delete submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete submission',
      error: error.message
    });
  }
};
