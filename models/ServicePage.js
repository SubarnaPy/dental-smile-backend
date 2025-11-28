const mongoose = require('mongoose');

const servicePageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceCategory",
  },
  categoryLegacy: {
    type: String,
    trim: true
  },
  image: {
    type: String
  },
  previewImage: {
    type: String
  },
  content: {
    type: mongoose.Schema.Types.Mixed
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  seo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String],
    canonicalUrl: String,
    ogImage: String
  },
  themeTokens: {
    type: mongoose.Schema.Types.Mixed
  },
  // Page-level styling (padding/margin, background, etc.)
  pageStyle: {
    type: mongoose.Schema.Types.Mixed
  },
  publishedAt: {
    type: Date
  },
  viewCount: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

// Create slug from title before saving
servicePageSchema.pre('save', function(next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  }
  next();
});

// Set publishedAt when status changes to published
servicePageSchema.pre('save', function(next) {
  if (this.isModified('status') && this.status === 'published' && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  next();
});

// Indexes
servicePageSchema.index({ title: 'text', description: 'text' });
servicePageSchema.index({ status: 1, createdAt: -1 });
servicePageSchema.index({ category: 1 });
servicePageSchema.index({ publishedAt: -1 });

module.exports = mongoose.model('ServicePage', servicePageSchema);