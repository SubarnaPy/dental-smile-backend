const mongoose = require('mongoose');

const dentalSealsPageSchema = new mongoose.Schema({
  hero: {
    badge: { type: String, default: 'PREVENTIVE PROTECTION' },
    title: { type: String, default: 'Dental Sealants' },
    description: { type: String, default: 'Protective shields for your back teeth. Dental sealants prevent cavities from forming in the deep grooves where a toothbrush can\'t reach.' },
    primaryButton: {
      text: { type: String, default: 'Request an Appointment' },
      style: { type: String, default: 'emerald' }
    },
    secondaryButton: {
      text: { type: String, default: 'Learn More' },
      style: { type: String, default: 'blue-outline' }
    },
    image: { type: String, default: '/assets/service7/Gemini_Generated_Image_vly5o7vly5o7vly5.png' }
  },
  whySealantsMatter: {
    title: { type: String, default: 'Why Dental Sealants?' },
    subtitle: { type: String, default: 'Sealants are one of the most effective ways to prevent back tooth cavities' },
    benefits: [{
      icon: { type: String, default: 'Shield' },
      title: { type: String, default: '99% Protection' },
      description: { type: String, default: 'Sealants reduce cavity risk in sealed surfaces by nearly 99% for up to 10 years' },
      color: { type: String, default: 'emerald' }
    }, {
      icon: { type: String, default: 'Zap' },
      title: { type: String, default: 'Quick Application' },
      description: { type: String, default: 'Simple, painless procedure takes just minutes with no drilling or anesthetic needed' },
      color: { type: String, default: 'amber' }
    }, {
      icon: { type: String, default: 'Heart' },
      title: { type: String, default: 'Child-Friendly' },
      description: { type: String, default: 'Perfect for kids - helps establish lifelong cavity prevention habits early' },
      color: { type: String, default: 'red' }
    }]
  },
  whoBenefits: {
    title: { type: String, default: 'Who Should Get Sealants?' },
    subtitle: { type: String, default: 'Sealants benefit children, teens, and adults at risk for cavities' },
    groups: [{
      title: { type: String, default: 'Children & Teens' },
      description: { type: String, default: 'Ages 6-18 benefit most from sealants on newly erupted permanent teeth' },
      benefits: [{ type: String }],
      color: { type: String, default: 'emerald' }
    }, {
      title: { type: String, default: 'Adults' },
      description: { type: String, default: 'Cavity-prone adults can benefit from sealants on back teeth' },
      benefits: [{ type: String }],
      color: { type: String, default: 'blue' }
    }],
    image: { type: String, default: '/assets/service7/Gemini_Generated_Image_vly5o7vly5o7vly5 (1).png' }
  },
  howSealantsWork: {
    title: { type: String, default: 'How Dental Sealants Work' },
    subtitle: { type: String, default: 'A physical barrier that prevents food and bacteria from collecting in tooth grooves' },
    steps: [{
      number: { type: Number },
      title: { type: String },
      description: { type: String },
      color: { type: String }
    }],
    image: { type: String, default: '/assets/service7/Gemini_Generated_Image_vly5o7vly5o7vly5 (2).png' }
  },
  whatToExpect: {
    title: { type: String, default: 'What to Expect During Application' },
    expectations: [{
      title: { type: String },
      description: { type: String },
      color: { type: String }
    }]
  },
  effectivenessDurability: {
    title: { type: String, default: 'Long-Lasting Protection' },
    protectionTimeline: {
      icon: { type: String, default: 'Award' },
      title: { type: String, default: 'Protection Timeline' },
      items: [{
        timeframe: { type: String },
        description: { type: String }
      }],
      color: { type: String, default: 'emerald' }
    },
    stats: {
      icon: { type: String, default: 'Clock' },
      title: { type: String, default: 'Cavity Prevention Stats' },
      metrics: [{
        label: { type: String },
        percentage: { type: Number },
        description: { type: String },
        color: { type: String }
      }],
      color: { type: String, default: 'emerald' }
    }
  },
  careTips: {
    title: { type: String, default: 'Caring for Your Sealants' },
    tips: [{
      title: { type: String },
      items: [{ type: String }],
      color: { type: String }
    }]
  },
  cta: {
    title: { type: String, default: 'Protect Your Smile' },
    subtitle: { type: String, default: 'Dental sealants are an easy, affordable way to prevent cavities for years to come. Request an Appointment today.' },
    button: {
      text: { type: String, default: 'Get Dental Sealants' },
      style: { type: String, default: 'blue' }
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('DentalSealsPage', dentalSealsPageSchema);