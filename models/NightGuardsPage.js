const mongoose = require('mongoose');

const nightGuardsPageSchema = new mongoose.Schema({
  hero: {
    badge: { type: String, default: 'TEETH PROTECTION' },
    title: { type: String, default: 'Night Guards' },
    description: { type: String, default: 'Custom-fitted night guards protect your teeth and jaw from grinding and clenching damage while you sleep. Wake up refreshed, not sore.' },
    primaryButton: {
      text: { type: String, default: 'Get Your Night Guard' },
      style: { type: String, default: 'indigo' }
    },
    secondaryButton: {
      text: { type: String, default: 'Learn More' },
      style: { type: String, default: 'blue-outline' }
    },
    image: { type: String, default: '/assets/service9/Gemini_Generated_Image_kjxnqykjxnqykjxn.png' }
  },
  bruxismClenching: {
    title: { type: String, default: 'Do You Grind Your Teeth?' },
    subtitle: { type: String, default: 'Up to 40% of people suffer from bruxism (teeth grinding) during sleep' },
    benefits: [{
      icon: { type: String, default: 'Moon' },
      title: { type: String, default: 'Common Problem' },
      description: { type: String, default: 'Bruxism affects millions - often unknowingly during sleep' },
      color: { type: String, default: 'indigo' }
    }, {
      icon: { type: String, default: 'Heart' },
      title: { type: String, default: 'Serious Damage' },
      description: { type: String, default: 'Can cause enamel wear, cracks, and painful jaw disorders' },
      color: { type: String, default: 'red' }
    }, {
      icon: { type: String, default: 'Shield' },
      title: { type: String, default: 'Easy Solution' },
      description: { type: String, default: 'Night guards prevent damage and improve sleep quality' },
      color: { type: String, default: 'emerald' }
    }],
    signsOfGrinding: {
      title: { type: String, default: 'Signs You May Be Grinding' },
      symptoms: [{ type: String }],
      color: { type: String, default: 'red' }
    }
  },
  damagePrevention: {
    title: { type: String, default: 'Prevent Costly Damage' },
    subtitle: { type: String, default: 'Grinding can cause over $20,000 in dental damage - a night guard costs a fraction of that' },
    damageFromGrinding: {
      title: { type: String, default: 'Damage from Grinding' },
      damages: [{ type: String }],
      color: { type: String, default: 'red' }
    },
    nightGuardBenefits: {
      title: { type: String, default: 'Night Guard Benefits' },
      benefits: [{ type: String }],
      color: { type: String, default: 'emerald' }
    },
    image: { type: String, default: '/assets/service9/Gemini_Generated_Image_kjxnqykjxnqykjxn (1).png' }
  },
  guardTypes: {
    title: { type: String, default: 'Night Guard Options' },
    subtitle: { type: String, default: 'We offer custom and quality ready-made options' },
    options: [{
      icon: { type: String },
      title: { type: String },
      description: { type: String },
      features: [{ type: String }],
      pricing: { type: String },
      color: { type: String },
      recommended: { type: Boolean, default: false }
    }]
  },
  customGuardProcess: {
    title: { type: String, default: 'Getting Your Custom Night Guard' },
    subtitle: { type: String, default: 'Quick, easy process for a perfect fit' },
    steps: [{
      number: { type: Number },
      title: { type: String },
      description: { type: String },
      color: { type: String }
    }],
    image: { type: String, default: '/assets/service9/Gemini_Generated_Image_ppekw5ppekw5ppek.png' }
  },
  careMaintenance: {
    title: { type: String, default: 'Night Guard Care' },
    sections: [{
      title: { type: String },
      tips: [{ type: String }],
      color: { type: String }
    }]
  },
  faq: {
    title: { type: String, default: 'Common Questions' },
    questions: [{
      question: { type: String },
      answer: { type: String },
      color: { type: String }
    }]
  },
  cta: {
    title: { type: String, default: 'Sleep Peacefully' },
    subtitle: { type: String, default: 'Stop grinding damage before it starts. Get a custom night guard and wake up without jaw pain or headaches.' },
    primaryButton: {
      text: { type: String, default: 'Get Your Night Guard' },
      style: { type: String, default: 'orange' }
    },
    secondaryButton: {
      text: { type: String, default: 'Ask About Options' },
      style: { type: String, default: 'white-outline' }
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('NightGuardsPage', nightGuardsPageSchema);