const mongoose = require('mongoose');

const dentalFillingsPageSchema = new mongoose.Schema({
  hero: {
    badge: { type: String, default: 'CAVITY TREATMENT' },
    title: { type: String, default: 'Dental Fillings' },
    description: { type: String, default: 'We restore decayed teeth with beautiful, durable fillings that look and feel natural. Our modern materials blend seamlessly with your tooth color.' },
    primaryButton: {
      text: { type: String, default: 'Request an Appointment' },
      style: { type: String, default: 'primary' }
    },
    secondaryButton: {
      text: { type: String, default: 'Learn More' },
      style: { type: String, default: 'outline' }
    },
    image: { type: String, default: '/assets/service6/Gemini_Generated_Image_5tshzr5tshzr5tsh.png' }
  },
  whyImportant: {
    title: { type: String, default: 'Why Fillings Are Important' },
    subtitle: { type: String, default: 'Prompt cavity treatment prevents further damage and preserves your natural tooth' },
    benefits: [{
      icon: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      color: { type: String, required: true }
    }]
  },
  fillingOptions: {
    title: { type: String, default: 'Our Filling Options' },
    subtitle: { type: String, default: 'We use the latest materials for durable, beautiful restorations' },
    image: { type: String, default: '/assets/service6/Gemini_Generated_Image_5tshzr5tshzr5tsh (1).png' },
    materials: [{
      title: { type: String, required: true },
      description: { type: String, required: true },
      features: [{ type: String, required: true }],
      color: { type: String, required: true }
    }]
  },
  fillingProcess: {
    title: { type: String, default: 'The Filling Process' },
    subtitle: { type: String, default: 'Quick, comfortable restoration of your tooth' },
    steps: [{
      number: { type: Number, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      color: { type: String, required: true }
    }]
  },
  costComparison: {
    title: { type: String, default: 'Cost vs. Consequences' },
    subtitle: { type: String, default: 'Early filling treatment saves money and protects your teeth' },
    comparisons: [{
      icon: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      points: [{ type: String, required: true }],
      color: { type: String, required: true },
      isPositive: { type: Boolean, default: false }
    }]
  },
  careAfter: {
    title: { type: String, default: 'Care After Your Filling' },
    instructions: [{
      title: { type: String, required: true },
      description: { type: String, required: true },
      color: { type: String, required: true }
    }]
  },
  prevention: {
    title: { type: String, default: 'Prevent Future Cavities' },
    sections: [{
      icon: { type: String, required: true },
      title: { type: String, required: true },
      items: [{ type: String, required: true }],
      color: { type: String, required: true }
    }]
  },
  cta: {
    title: { type: String, default: 'Restore Your Smile' },
    description: { type: String, default: 'Don\'t let cavities get worse. Request an Appointment for your filling today and maintain a healthy, beautiful smile.' },
    button: {
      text: { type: String, default: 'Request an Appointment' },
      style: { type: String, default: 'primary' }
    }
  }
}, {
  timestamps: true
});

// Default data
const defaultData = {
  hero: {
    badge: 'CAVITY TREATMENT',
    title: 'Dental Fillings',
    description: 'We restore decayed teeth with beautiful, durable fillings that look and feel natural. Our modern materials blend seamlessly with your tooth color.',
    primaryButton: {
      text: 'Request an Appointment',
      style: 'primary'
    },
    secondaryButton: {
      text: 'Learn More',
      style: 'outline'
    },
    image: '/assets/service6/Gemini_Generated_Image_5tshzr5tshzr5tsh.png'
  },
  whyImportant: {
    title: 'Why Fillings Are Important',
    subtitle: 'Prompt cavity treatment prevents further damage and preserves your natural tooth',
    benefits: [
      {
        icon: 'Shield',
        title: 'Stop Decay',
        description: 'Fillings remove decay and prevent it from spreading deeper into the tooth',
        color: '#5FC1D7'
      },
      {
        icon: 'Smile',
        title: 'Restore Function',
        description: 'Return your tooth to full chewing and biting ability',
        color: '#27A8E0'
      },
      {
        icon: 'Smile',
        title: 'Aesthetic Appeal',
        description: 'Tooth-colored fillings blend naturally with your smile',
        color: '#10b981'
      }
    ]
  },
  fillingOptions: {
    title: 'Our Filling Options',
    subtitle: 'We use the latest materials for durable, beautiful restorations',
    image: '/assets/service6/Gemini_Generated_Image_5tshzr5tshzr5tsh (1).png',
    materials: [
      {
        title: 'Composite Resin',
        description: 'Most popular option - tooth-colored and durable',
        features: [
          'Matches natural tooth color',
          'Bonds directly to tooth',
          'Long-lasting durability',
          'No metal content'
        ],
        color: '#5FC1D7'
      },
      {
        title: 'Glass Ionomer',
        description: 'Fluoride-releasing option, good for kids',
        features: [
          'Releases fluoride for protection',
          'Great for primary teeth',
          'Moderate durability',
          'Budget-friendly'
        ],
        color: '#27A8E0'
      }
    ]
  },
  fillingProcess: {
    title: 'The Filling Process',
    subtitle: 'Quick, comfortable restoration of your tooth',
    steps: [
      {
        number: 1,
        title: 'Examination',
        description: 'Identify the cavity and determine its size and location',
        color: '#5FC1D7'
      },
      {
        number: 2,
        title: 'Numbing',
        description: 'Local anesthetic ensures comfortable, painless treatment',
        color: '#27A8E0'
      },
      {
        number: 3,
        title: 'Removal',
        description: 'Carefully remove decay using specialized instruments',
        color: '#10b981'
      },
      {
        number: 4,
        title: 'Filling',
        description: 'Apply and shape filling material to restore tooth',
        color: '#f59e0b'
      }
    ]
  },
  costComparison: {
    title: 'Cost vs. Consequences',
    subtitle: 'Early filling treatment saves money and protects your teeth',
    comparisons: [
      {
        icon: 'CheckCircle',
        title: 'Early Treatment',
        description: 'Simple filling treatment is affordable and prevents complications',
        points: [
          'Single filling: moderate cost',
          'Quick procedure: 30 minutes',
          'Prevents root canals',
          'Prevents extractions'
        ],
        color: '#10b981',
        isPositive: true
      },
      {
        icon: 'Clock',
        title: 'Delayed Treatment',
        description: 'Ignoring cavities leads to expensive and complex procedures',
        points: [
          'Deep decay: root canal needed',
          'Infection: extraction required',
          'Replacement: implants/bridge',
          'Total cost: 5-10x higher'
        ],
        color: '#ef4444',
        isPositive: false
      }
    ]
  },
  careAfter: {
    title: 'Care After Your Filling',
    instructions: [
      {
        title: 'First 24 Hours',
        description: 'Avoid hard, sticky foods. Numbness may last 2-4 hours - be careful not to bite your cheek',
        color: '#5FC1D7'
      },
      {
        title: 'Sensitivity Management',
        description: 'Mild sensitivity is normal and usually resolves within a few days. Use sensitivity toothpaste if needed',
        color: '#27A8E0'
      },
      {
        title: 'Regular Maintenance',
        description: 'Brush twice daily, floss regularly, and visit us every 6 months to prevent new cavities',
        color: '#10b981'
      },
      {
        title: 'Longevity',
        description: 'Composite fillings typically last 5-10 years. We\'ll monitor them during check-ups',
        color: '#f59e0b'
      }
    ]
  },
  prevention: {
    title: 'Prevent Future Cavities',
    sections: [
      {
        icon: 'Shield',
        title: 'Daily Habits',
        items: [
          'Brush twice daily with fluoride toothpaste',
          'Floss daily to remove food and plaque',
          'Limit sugary snacks and drinks',
          'Use mouthwash for extra protection'
        ],
        color: '#5FC1D7'
      },
      {
        icon: 'Award',
        title: 'Professional Care',
        items: [
          'Biannual exams and cleanings',
          'Fluoride treatments for extra protection',
          'Dental sealants on back teeth',
          'Early detection of problem areas'
        ],
        color: '#27A8E0'
      }
    ]
  },
  cta: {
    title: 'Restore Your Smile',
    description: 'Don\'t let cavities get worse. Request an Appointment for your filling today and maintain a healthy, beautiful smile.',
    button: {
      text: 'Request an Appointment',
      style: 'primary'
    }
  }
};

dentalFillingsPageSchema.statics.getDefaultData = function() {
  return defaultData;
};

module.exports = mongoose.model('DentalFillingsPage', dentalFillingsPageSchema);