const mongoose = require('mongoose');

const partialDenturesPageSchema = new mongoose.Schema({
  hero: {
    badge: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    primaryButton: {
      text: { type: String, required: true },
      style: { type: String, required: true }
    },
    secondaryButton: {
      text: { type: String, required: true },
      style: { type: String, required: true }
    },
    image: { type: String, required: true }
  },
  partialDenturesInOttawa: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    benefits: [{
      icon: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      color: { type: String, required: true }
    }]
  },
  dentureTypes: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    options: [{
      title: { type: String, required: true },
      description: { type: String, required: true },
      features: [{ type: String, required: true }],
      color: { type: String, required: true }
    }]
  },
  comprehensiveServices: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    services: [{
      icon: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      color: { type: String, required: true }
    }]
  },
  benefits: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    benefits: [{
      icon: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      color: { type: String, required: true }
    }]
  },
  faq: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    questions: [{
      question: { type: String, required: true },
      answer: { type: String, required: true },
      color: { type: String, required: true }
    }]
  },
  cta: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    primaryButton: {
      text: { type: String, required: true },
      style: { type: String, required: true }
    },
    secondaryButton: {
      text: { type: String, required: true },
      style: { type: String, required: true }
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('PartialDenturesPage', partialDenturesPageSchema);