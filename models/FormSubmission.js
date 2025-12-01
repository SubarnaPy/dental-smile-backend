const mongoose = require('mongoose');

const formSubmissionSchema = new mongoose.Schema({
  formType: {
    type: String,
    required: true,
    enum: ['emergency', 'new-patient', 'contact', 'appointment'],
    trim: true
  },
  formData: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'scheduled', 'completed', 'cancelled'],
    default: 'new'
  },
  notes: {
    type: String,
    trim: true
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  ipAddress: {
    type: String
  },
  userAgent: {
    type: String
  }
}, {
  timestamps: true
});

// Indexes
formSubmissionSchema.index({ formType: 1 });
formSubmissionSchema.index({ status: 1 });
formSubmissionSchema.index({ createdAt: -1 });
formSubmissionSchema.index({ 'formData.email': 1 });

module.exports = mongoose.model('FormSubmission', formSubmissionSchema);
