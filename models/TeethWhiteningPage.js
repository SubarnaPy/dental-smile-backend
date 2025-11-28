const mongoose = require('mongoose');

const teethWhiteningPageSchema = new mongoose.Schema({
  hero: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    backgroundImage: { type: String, required: true },
    ctaText: { type: String, required: true },
    ctaLink: { type: String, required: true }
  },
  whyChooseProfessional: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    benefits: [{
      title: { type: String, required: true },
      description: { type: String, required: true },
      icon: { type: String, required: true }
    }]
  },
  advancedTechnology: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    features: [{
      title: { type: String, required: true },
      description: { type: String, required: true },
      color: { type: String, required: true }
    }],
    image: { type: String, required: true }
  },
  professionalVsStore: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    professional: {
      title: { type: String, required: true },
      advantages: [{ type: String, required: true }]
    },
    storeBought: {
      title: { type: String, required: true },
      disadvantages: [{ type: String, required: true }]
    }
  },
  resultsDuration: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    maintenance: {
      title: { type: String, required: true },
      tips: [{ type: String, required: true }]
    },
    touchUp: {
      title: { type: String, required: true },
      description: { type: String, required: true }
    }
  },
  faq: {
    title: { type: String, required: true },
    questions: [{
      question: { type: String, required: true },
      answer: { type: String, required: true }
    }]
  },
  cta: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    primaryButtonText: { type: String, required: true },
    secondaryButtonText: { type: String, required: true }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('TeethWhiteningPage', teethWhiteningPageSchema);