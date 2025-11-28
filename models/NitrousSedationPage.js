const mongoose = require('mongoose');

const nitrousSedationPageSchema = new mongoose.Schema({
  hero: {
    badge: { type: String, default: 'ANXIETY RELIEF' },
    title: { type: String, default: 'Nitrous Sedation' },
    description: { type: String, default: 'Feel comfortable and relaxed during your dental visit. Nitrous oxide (laughing gas) is a safe, gentle option for patients with dental anxiety.' },
    primaryButton: {
      text: { type: String, default: 'Request an Appointment' },
      style: { type: String, default: 'purple' }
    },
    secondaryButton: {
      text: { type: String, default: 'Learn More' },
      style: { type: String, default: 'blue-outline' }
    },
    image: { type: String, default: '/assets/service8/Gemini_Generated_Image_7k76iv7k76iv7k76.png' }
  },
  whatIsNitrous: {
    title: { type: String, default: 'What is Nitrous Oxide?' },
    subtitle: { type: String, default: 'A safe, proven method to help nervous patients relax during dental care' },
    benefits: [{
      icon: { type: String, default: 'Wind' },
      title: { type: String, default: 'Safe & Effective' },
      description: { type: String, default: 'FDA-approved sedative used for decades in dental and medical offices worldwide' },
      color: { type: String, default: 'purple' }
    }, {
      icon: { type: String, default: 'Smile' },
      title: { type: String, default: 'Relaxing Feel' },
      description: { type: String, default: 'Creates a calm, euphoric sensation - patients remain conscious and in control' },
      color: { type: String, default: 'amber' }
    }, {
      icon: { type: String, default: 'Clock' },
      title: { type: String, default: 'Quick Recovery' },
      description: { type: String, default: 'Wears off within minutes - you can return to normal activities right away' },
      color: { type: String, default: 'emerald' }
    }]
  },
  whoBenefits: {
    title: { type: String, default: 'Who Benefits from Nitrous?' },
    subtitle: { type: String, default: 'Ideal for patients with various concerns about dental care' },
    benefits: [{
      title: { type: String, default: 'Anxious Patients' },
      description: { type: String, default: 'Help overcome fear of the dentist and make visits more comfortable' },
      color: { type: String, default: 'purple' }
    }, {
      title: { type: String, default: 'Sensitive Patients' },
      description: { type: String, default: 'Reduce discomfort sensitivity and gag reflex during procedures' },
      color: { type: String, default: 'blue' }
    }, {
      title: { type: String, default: 'Complex Procedures' },
      description: { type: String, default: 'Make longer appointments feel shorter and more tolerable' },
      color: { type: String, default: 'amber' }
    }, {
      title: { type: String, default: 'Children & Teens' },
      description: { type: String, default: 'Help young patients build positive associations with dental care' },
      color: { type: String, default: 'emerald' }
    }],
    image: { type: String, default: '/assets/service8/Gemini_Generated_Image_7k76iv7k76iv7k76 (1).png' }
  },
  howItWorks: {
    title: { type: String, default: 'How Nitrous Sedation Works' },
    subtitle: { type: String, default: 'A simple, non-invasive process for maximum comfort' },
    steps: [{
      number: { type: Number },
      title: { type: String },
      description: { type: String },
      color: { type: String }
    }],
    image: { type: String, default: '/assets/service8/Gemini_Generated_Image_7k76iv7k76iv7k76 (2).png' }
  },
  effectsSafety: {
    title: { type: String, default: 'What to Expect During Sedation' },
    whatYoullFeel: {
      icon: { type: String, default: 'Heart' },
      title: { type: String, default: 'What You\'ll Feel' },
      effects: [{ type: String }],
      color: { type: String, default: 'purple' }
    },
    safetyReversibility: {
      icon: { type: String, default: 'AlertCircle' },
      title: { type: String, default: 'Safety & Reversibility' },
      points: [{ type: String }],
      color: { type: String, default: 'blue' }
    }
  },
  appointmentPrep: {
    title: { type: String, default: 'Appointment Preparation' },
    sections: [{
      title: { type: String },
      items: [{ type: String }],
      color: { type: String }
    }]
  },
  eligibility: {
    title: { type: String, default: 'Is Nitrous Right for You?' },
    safeFor: {
      icon: { type: String, default: 'CheckCircle' },
      title: { type: String, default: 'Generally Safe For:' },
      conditions: [{ type: String }],
      color: { type: String, default: 'emerald' }
    },
    notSuitable: {
      icon: { type: String, default: 'AlertCircle' },
      title: { type: String, default: 'May Not Be Suitable:' },
      conditions: [{ type: String }],
      color: { type: String, default: 'red' }
    },
    note: {
      text: { type: String, default: 'Have questions about whether nitrous sedation is right for you? We\'ll do a full medical history and discuss all options.' },
      button: {
        text: { type: String, default: 'Request an Appointment' },
        style: { type: String, default: 'purple' }
      }
    }
  },
  cta: {
    title: { type: String, default: 'Make Your Appointment Comfortable' },
    subtitle: { type: String, default: 'Experience dental care without anxiety. Ask about nitrous sedation at your next visit.' },
    button: {
      text: { type: String, default: 'Request an Appointment' },
      style: { type: String, default: 'blue' }
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('NitrousSedationPage', nitrousSedationPageSchema);