const mongoose = require('mongoose');

const serviceTemplateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    trim: true
  },
  content: {
    type: mongoose.Schema.Types.Mixed
  },
  previewImage: {
    type: String
  },
  thumbnailUrl: {
    type: String
  },
  themeTokens: {
    type: mongoose.Schema.Types.Mixed
  },
  isPremium: {
    type: Boolean,
    default: false
  },
  usageCount: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  tags: [{
    type: String,
    trim: true
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Indexes
serviceTemplateSchema.index({ name: 'text', description: 'text' });
serviceTemplateSchema.index({ category: 1 });
serviceTemplateSchema.index({ isPremium: 1 });
serviceTemplateSchema.index({ usageCount: -1 });
serviceTemplateSchema.index({ createdAt: -1 });

module.exports = mongoose.model('ServiceTemplate', serviceTemplateSchema);