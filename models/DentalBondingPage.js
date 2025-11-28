const mongoose = require('mongoose');

const dentalBondingPageSchema = new mongoose.Schema({
  hero: {
    badge: { type: String, default: 'COSMETIC DENTISTRY' },
    title: { type: String, default: 'Dental Bonding' },
    description: { type: String, default: 'Dr. Avneet Dhaliwal offers composite bonding to restore and enhance your smile. This minimally invasive procedure addresses chipped or cracked teeth, discolored teeth, and small gaps using light-cured composite resin.' },
    primaryButton: {
      text: { type: String, default: 'Request an Appointment' },
      style: { type: String, default: 'teal' }
    },
    secondaryButton: {
      text: { type: String, default: 'Learn More' },
      style: { type: String, default: 'blue-outline' }
    },
    image: { type: String, default: '/images/dental-bonding-hero.jpg' },
    imageAlt: { type: String, default: 'Dental Bonding Procedure' }
  },
  bondingInOttawa: {
    title: { type: String, default: 'Composite Bonding in Ottawa' },
    subtitle: { type: String, default: 'A fast and reliable solution for common dental imperfections with natural-looking results' },
    features: [{
      icon: { type: String, default: 'Sparkles' },
      iconColor: { type: String, default: 'purple' },
      title: { type: String, default: 'Minimally Invasive' },
      description: { type: String, default: 'Light-cured composite resin restores tooth structure with minimal preparation required' }
    }]
  },
  advantagesOfBonding: {
    title: { type: String, default: 'Advantages of Dental Bonding' },
    subtitle: { type: String, default: 'Excellent versatility for tooth restoration with conservative treatment approach' },
    whatWeCanFix: {
      title: { type: String, default: 'What We Can Fix' },
      items: [{ type: String }]
    },
    keyBenefits: {
      title: { type: String, default: 'Key Benefits' },
      items: [{ type: String }]
    }
  },
  bondingProcess: {
    title: { type: String, default: 'The Bonding Process' },
    subtitle: { type: String, default: 'Simple, painless procedure with stunning results' },
    images: {
      tools: { type: String, default: '/images/dental-tools.jpg' },
      procedure: { type: String, default: '/images/dental-procedure.jpg' }
    },
    steps: [{
      number: { type: String, default: '1' },
      numberColor: { type: String, default: 'purple' },
      title: { type: String, default: 'Preparation' },
      description: { type: String, default: 'Tooth surface is lightly etched and conditioning liquid applied' }
    }]
  },
  expectations: {
    title: { type: String, default: 'What to Expect During & After' },
    image: { type: String, default: '/images/bonding-treatment.jpg' },
    duringTreatment: {
      title: { type: String, default: 'During Treatment' },
      description: { type: String, default: 'Typically requires only one appointment. Dr. Dhaliwal ensures personalized care to achieve optimal results with minimal discomfort.' },
      borderColor: { type: String, default: 'purple' }
    },
    afterTreatment: {
      title: { type: String, default: 'After Treatment' },
      description: { type: String, default: 'Resume normal activities immediately. The resin material is highly durable, allowing you to eat and drink as usual right away.' },
      borderColor: { type: String, default: 'blue' }
    },
    careTips: {
      title: { type: String, default: 'Important Care Tips' },
      description: { type: String, default: 'Avoid biting into hard foods with bonded teeth to maintain longevity. The material is durable but benefits from gentle care.' },
      borderColor: { type: String, default: 'orange' }
    }
  },
  caringForBondedTeeth: {
    title: { type: String, default: 'Caring for Bonded Teeth' },
    image: { type: String, default: '/images/dental-care.jpg' },
    dailyCare: {
      title: { type: String, default: 'Daily Care' },
      items: [{ type: String }],
      borderColor: { type: String, default: 'purple' }
    },
    thingsToAvoid: {
      title: { type: String, default: 'Things to Avoid' },
      items: [{ type: String }],
      borderColor: { type: String, default: 'blue' }
    },
    regularCheckups: {
      title: { type: String, default: 'Regular Check-ups' },
      items: [{ type: String }],
      borderColor: { type: String, default: 'orange' }
    }
  },
  bondingVsOptions: {
    title: { type: String, default: 'Bonding vs. Other Options' },
    subtitle: { type: String, default: 'Understanding your cosmetic dentistry choices' },
    options: [{
      icon: { type: String, default: 'Shield' },
      iconColor: { type: String, default: 'purple' },
      title: { type: String, default: 'Dental Bonding' },
      features: [{ type: String }],
      bestFor: { type: String, default: 'Best for minor repairs' },
      isHighlighted: { type: Boolean, default: true }
    }]
  },
  faq: {
    title: { type: String, default: 'Common Questions' },
    questions: [{
      question: { type: String, default: 'How long does composite bonding last?' },
      answer: { type: String, default: 'With proper care, composite bonding typically lasts 3-10 years. Longevity depends on oral hygiene habits and avoiding hard foods with bonded teeth.' }
    }]
  },
  cta: {
    title: { type: String, default: 'Visit Smile Health Dental for Quality Bonding' },
    subtitle: { type: String, default: 'Located at 888 Meadowlands Dr, Ottawa, ON. Dr. Dhaliwal is dedicated to helping patients enhance their smiles with safe, reliable, and aesthetically pleasing solutions.' },
    primaryButton: {
      text: { type: String, default: 'Request an Appointment' },
      style: { type: String, default: 'teal' }
    },
    secondaryButton: {
      text: { type: String, default: 'Call Us Today' },
      style: { type: String, default: 'white-outline' }
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('DentalBondingPage', dentalBondingPageSchema);