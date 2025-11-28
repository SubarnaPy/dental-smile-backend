const mongoose = require('mongoose');

const emergencyDentistrySchema = new mongoose.Schema({
  // General fields
  title: {
    type: String,
    required: true,
    trim: true,
    default: 'Emergency Dentistry'
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    default: 'emergency-dentistry'
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  seo: {
    metaTitle: {
      type: String,
      default: 'Emergency Dentistry | Bright Smile Dental'
    },
    metaDescription: {
      type: String,
      default: 'When unexpected dental pain or injury strikes, immediate care is essential. Our experienced team provides prompt, compassionate emergency dental services.'
    },
    keywords: [{
      type: String,
      default: ['emergency dentistry', 'dental emergency', 'tooth pain', 'broken tooth', 'dental injury']
    }],
    canonicalUrl: String,
    ogImage: String
  },
  publishedAt: {
    type: Date
  },
  viewCount: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  // Page-specific content sections
  hero: {
    badge: {
      type: String,
      default: 'EMERGENCY CARE'
    },
    title: {
      type: String,
      default: 'Emergency Dentistry'
    },
    description: {
      type: String,
      default: 'When unexpected dental pain or injury strikes, immediate care is essential. Our experienced team provides prompt, compassionate emergency dental services for urgent situations like severe pain, broken teeth, and dental injuries.'
    },
    image: {
      type: String,
      default: '/assets/service1/placeholder1.png'
    },
    ctaButtons: [{
      text: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      style: {
        type: String,
        enum: ['primary', 'secondary'],
        default: 'primary'
      }
    }]
  },

  whyMatters: {
    title: {
      type: String,
      default: 'Why Emergency Care Matters'
    },
    description: {
      type: String,
      default: 'Dental emergencies require immediate attention to relieve pain and prevent serious complications.'
    },
    cards: [{
      icon: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: '#5FC1D7'
      }
    }]
  },

  commonEmergencies: {
    title: {
      type: String,
      default: 'Common Dental Emergencies We Treat'
    },
    description: {
      type: String,
      default: 'Our emergency dental clinic treats various urgent issues to relieve pain and prevent complications.'
    },
    image: {
      type: String,
      default: '/assets/service1/placeholder2.png'
    },
    items: [{
      number: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: '#5FC1D7'
      }
    }]
  },

  whatToExpect: {
    title: {
      type: String,
      default: 'What to Expect During Your Visit'
    },
    image: {
      type: String,
      default: '/assets/service1/placeholder6.png'
    },
    items: [{
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      style: {
        type: String,
        enum: ['blue', 'orange', 'green', 'yellow'],
        default: 'blue'
      }
    }]
  },

  firstAidTips: {
    title: {
      type: String,
      default: 'First Aid Before Your Visit'
    },
    tips: [{
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      style: {
        type: String,
        enum: ['blue', 'orange', 'green', 'yellow'],
        default: 'blue'
      }
    }]
  },

  cta: {
    title: {
      type: String,
      default: 'Need Emergency Dental Care?'
    },
    description: {
      type: String,
      default: 'Don\'t suffer through dental pain. Contact us immediately for prompt, professional emergency dental care.'
    },
    backgroundImage: {
      type: String,
      default: '/assets/service1/placeholder4.png'
    },
    button: {
      text: {
        type: String,
        default: 'Call for Emergency Care'
      },
      style: {
        type: String,
        default: 'primary'
      }
    }
  }
}, {
  timestamps: true
});

// Set publishedAt when status changes to published
emergencyDentistrySchema.pre('save', function(next) {
  if (this.isModified('status') && this.status === 'published' && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  next();
});

// Indexes
emergencyDentistrySchema.index({ status: 1, createdAt: -1 });
emergencyDentistrySchema.index({ publishedAt: -1 });

module.exports = mongoose.model('EmergencyDentistryPage', emergencyDentistrySchema);