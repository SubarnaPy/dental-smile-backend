const mongoose = require('mongoose');

const rootCanalTherapyPageSchema = new mongoose.Schema({
  hero: {
    category: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    primaryButtonText: { type: String, required: true },
    secondaryButtonText: { type: String, required: true },
    image: { type: String, required: true }
  },
  whyChoose: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    benefits: [{
      title: { type: String, required: true },
      description: { type: String, required: true },
      icon: { type: String, required: true },
      color: { type: String, required: true }
    }]
  },
  whenYouNeed: {
    title: { type: String, required: true },
    symptoms: [{
      title: { type: String, required: true },
      description: { type: String, required: true }
    }],
    image: { type: String, required: true }
  },
  treatmentProcess: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    steps: [{
      title: { type: String, required: true },
      description: { type: String, required: true },
      number: { type: Number, required: true }
    }]
  },
  technology: {
    title: { type: String, required: true },
    technologies: [{
      title: { type: String, required: true },
      description: { type: String, required: true },
      icon: { type: String, required: true }
    }],
    image: { type: String, required: true }
  },
  aftercare: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    immediateCare: {
      title: { type: String, required: true },
      tips: [{ type: String, required: true }]
    },
    longTermCare: {
      title: { type: String, required: true },
      tips: [{ type: String, required: true }]
    }
  },
  faq: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    questions: [{
      question: { type: String, required: true },
      answer: { type: String, required: true }
    }]
  },
  cta: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    primaryButtonText: { type: String, required: true },
    secondaryButtonText: { type: String, required: true },
    location: { type: String, required: true },
    availability: { type: String, required: true }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('RootCanalTherapyPage', rootCanalTherapyPageSchema);