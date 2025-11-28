const mongoose = require('mongoose');

const toothExtractionsPageSchema = new mongoose.Schema({
  hero: {
    badge: { type: String, default: 'TOOTH REMOVAL' },
    title: { type: String, default: 'Tooth Extractions' },
    description: { type: String, default: 'When a tooth cannot be saved, our gentle extraction procedure ensures minimal discomfort and promotes rapid healing. We discuss all options before recommending extraction.' },
    primaryButton: {
      text: { type: String, default: 'Request an Appointment' },
      style: { type: String, default: 'teal' }
    },
    secondaryButton: {
      text: { type: String, default: 'Learn More' },
      style: { type: String, default: 'outline' }
    },
    image: { type: String, default: '/assets/service5/Gemini_Generated_Image_pw3zpnpw3zpnpw3z.png' }
  },
  whenNecessary: {
    title: { type: String, default: 'When Is Extraction Necessary?' },
    subtitle: { type: String, default: 'Extraction is typically a last resort when the tooth cannot be saved' },
    reasons: [{
      icon: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      color: { type: String, required: true }
    }]
  },
  extractionProcess: {
    title: { type: String, default: 'Our Gentle Extraction Process' },
    subtitle: { type: String, default: 'Minimizing discomfort and promoting optimal healing' },
    image: { type: String, default: '/assets/service5/Gemini_Generated_Image_pw3zpnpw3zpnpw3z (1).png' },
    steps: [{
      number: { type: Number, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      color: { type: String, required: true }
    }]
  },
  whatToExpect: {
    title: { type: String, default: 'What to Expect' },
    subtitle: { type: String, default: 'Understanding the extraction experience helps you prepare and recover' },
    sections: [{
      icon: { type: String, required: true },
      title: { type: String, required: true },
      items: [{ type: String, required: true }],
      color: { type: String, required: true }
    }]
  },
  recoveryTips: {
    title: { type: String, default: 'Recovery Care Instructions' },
    tips: [{
      title: { type: String, required: true },
      description: { type: String, required: true },
      color: { type: String, required: true }
    }]
  },
  replacementOptions: {
    title: { type: String, default: 'Tooth Replacement Options' },
    subtitle: { type: String, default: 'We can help restore your smile after an extraction' },
    options: [{
      icon: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      features: [{ type: String, required: true }],
      color: { type: String, required: true }
    }]
  },
  cta: {
    title: { type: String, default: 'Let\'s Discuss Your Options' },
    description: { type: String, default: 'Request an Appointment to explore all treatment options before deciding on extraction.' },
    button: {
      text: { type: String, default: 'Request an Appointment' },
      style: { type: String, default: 'teal' }
    }
  }
}, {
  timestamps: true
});

// Default data
const defaultData = {
  hero: {
    badge: 'TOOTH REMOVAL',
    title: 'Tooth Extractions',
    description: 'When a tooth cannot be saved, our gentle extraction procedure ensures minimal discomfort and promotes rapid healing. We discuss all options before recommending extraction.',
    primaryButton: {
      text: 'Request an Appointment',
      style: 'teal'
    },
    secondaryButton: {
      text: 'Learn More',
      style: 'outline'
    },
    image: '/assets/service5/Gemini_Generated_Image_pw3zpnpw3zpnpw3z.png'
  },
  whenNecessary: {
    title: 'When Is Extraction Necessary?',
    subtitle: 'Extraction is typically a last resort when the tooth cannot be saved',
    reasons: [
      {
        icon: 'AlertCircle',
        title: 'Severe Decay',
        description: 'Tooth damage is too extensive for filling or crown restoration',
        color: '#5FC1D7'
      },
      {
        icon: 'AlertCircle',
        title: 'Advanced Gum Disease',
        description: 'Tooth is too loose due to severe periodontal disease',
        color: '#27A8E0'
      },
      {
        icon: 'AlertCircle',
        title: 'Traumatic Injury',
        description: 'Tooth is fractured beyond repair from accidents or trauma',
        color: '#10b981'
      },
      {
        icon: 'AlertCircle',
        title: 'Infections',
        description: 'Uncontrollable infections or abscesses around the tooth',
        color: '#f59e0b'
      },
      {
        icon: 'AlertCircle',
        title: 'Orthodontic Reasons',
        description: 'Tooth extraction needed to create space for proper alignment',
        color: '#5FC1D7'
      },
      {
        icon: 'AlertCircle',
        title: 'Impacted Teeth',
        description: 'Impacted wisdom teeth or other teeth unable to erupt normally',
        color: '#27A8E0'
      }
    ]
  },
  extractionProcess: {
    title: 'Our Gentle Extraction Process',
    subtitle: 'Minimizing discomfort and promoting optimal healing',
    image: '/assets/service5/Gemini_Generated_Image_pw3zpnpw3zpnpw3z (1).png',
    steps: [
      {
        number: 1,
        title: 'Complete Examination',
        description: 'X-rays and assessment to plan the safest extraction method',
        color: '#5FC1D7'
      },
      {
        number: 2,
        title: 'Local Anesthesia',
        description: 'Numbing of the area ensures you feel no pain during the procedure',
        color: '#27A8E0'
      },
      {
        number: 3,
        title: 'Gentle Removal',
        description: 'Careful technique to extract the tooth with minimal trauma',
        color: '#10b981'
      },
      {
        number: 4,
        title: 'Healing Care',
        description: 'Post-operative instructions for optimal healing and comfort',
        color: '#f59e0b'
      }
    ]
  },
  whatToExpect: {
    title: 'What to Expect',
    subtitle: 'Understanding the extraction experience helps you prepare and recover',
    sections: [
      {
        icon: 'Clock',
        title: 'During the Procedure',
        items: [
          'You\'ll feel pressure but no pain',
          'May hear sounds and feel vibrations',
          'Procedure typically takes 20-40 minutes',
          'You remain awake and aware throughout'
        ],
        color: '#5FC1D7'
      },
      {
        icon: 'Shield',
        title: 'After the Procedure',
        items: [
          'Mild to moderate soreness for 3-7 days',
          'Swelling peaks at 24-48 hours',
          'Avoid strenuous activity for several days',
          'Follow post-op instructions carefully'
        ],
        color: '#27A8E0'
      }
    ]
  },
  recoveryTips: {
    title: 'Recovery Care Instructions',
    tips: [
      {
        title: 'First 24 Hours',
        description: 'Rest, apply ice, bite on gauze, keep head elevated, avoid rinsing and spitting forcefully',
        color: '#5FC1D7'
      },
      {
        title: 'Diet & Nutrition',
        description: 'Soft, cool foods; avoid hot, hard, crunchy, or spicy foods for several days',
        color: '#27A8E0'
      },
      {
        title: 'Pain Management',
        description: 'Take prescribed or recommended pain medication as directed; apply warm compresses after 48 hours',
        color: '#10b981'
      },
      {
        title: 'Activity Restrictions',
        description: 'No smoking, drinking through straws, or strenuous exercise for at least one week',
        color: '#f59e0b'
      }
    ]
  },
  replacementOptions: {
    title: 'Tooth Replacement Options',
    subtitle: 'We can help restore your smile after an extraction',
    options: [
      {
        icon: 'Award',
        title: 'Dental Implants',
        description: 'Permanent replacement that looks and functions like a natural tooth',
        features: [
          'Longest-lasting option',
          'Prevents bone loss',
          'Durable and reliable'
        ],
        color: '#5FC1D7'
      },
      {
        icon: 'Award',
        title: 'Dental Bridge',
        description: 'Fixed restoration supported by adjacent teeth',
        features: [
          'Faster process than implants',
          'Natural appearance',
          'Good functionality'
        ],
        color: '#27A8E0'
      },
      {
        icon: 'Award',
        title: 'Partial Denture',
        description: 'Removable replacement for one or multiple teeth',
        features: [
          'Most affordable option',
          'Easy to clean',
          'Adjustable if needed'
        ],
        color: '#10b981'
      }
    ]
  },
  cta: {
    title: 'Let\'s Discuss Your Options',
    description: 'Request an Appointment to explore all treatment options before deciding on extraction.',
    button: {
      text: 'Request an Appointment',
      style: 'teal'
    }
  }
};

toothExtractionsPageSchema.statics.getDefaultData = function() {
  return defaultData;
};

module.exports = mongoose.model('ToothExtractionsPage', toothExtractionsPageSchema);