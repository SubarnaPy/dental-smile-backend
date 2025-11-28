const mongoose = require('mongoose');

// Sub-schema for subsections
const SubsectionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: mongoose.Schema.Types.Mixed, default: {} },
  enabled: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Main section schema
const SectionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true }, // 'hero', 'features', 'content', 'faq', 'cta', etc.
  enabled: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
  content: { type: mongoose.Schema.Types.Mixed, default: {} },
  subsections: [SubsectionSchema],
  style: { type: mongoose.Schema.Types.Mixed, default: {} },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const dentalVeneersPageSchema = new mongoose.Schema({
  pageTitle: { type: String, default: 'Dental Veneers' },
  pageSlug: { type: String, default: 'dental-veneers' },
  metaDescription: { type: String, default: 'Professional dental veneers services in Ottawa' },
  status: { type: String, enum: ['draft', 'published', 'archived'], default: 'published' },
  sections: [SectionSchema],
  globalStyles: { type: mongoose.Schema.Types.Mixed, default: {} },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Indexes
dentalVeneersPageSchema.index({ pageSlug: 1 });
dentalVeneersPageSchema.index({ status: 1 });

// Pre-save middleware to update timestamps
dentalVeneersPageSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Static method to get published page
dentalVeneersPageSchema.statics.getPublished = function() {
  return this.findOne({ status: 'published' });
};

// Instance method to get enabled sections
dentalVeneersPageSchema.methods.getEnabledSections = function() {
  return this.sections
    .filter(section => section.enabled)
    .sort((a, b) => a.order - b.order)
    .map(section => ({
      ...section.toObject(),
      subsections: section.subsections
        .filter(sub => sub.enabled)
        .sort((a, b) => a.order - b.order)
    }));
};

module.exports = mongoose.model('DentalVeneersPage', dentalVeneersPageSchema);

