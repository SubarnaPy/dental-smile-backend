const mongoose = require('mongoose');

const familyDentistrySchema = new mongoose.Schema({
  // General fields
  title: {
    type: String,
    required: true,
    trim: true,
    default: 'Family Dentistry'
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    default: 'family-dentistry'
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  seo: {
    metaTitle: {
      type: String,
      default: 'Family Dentistry | Bright Smile Dental'
    },
    metaDescription: {
      type: String,
      default: 'From young children to seniors, we provide comprehensive dental care for your entire family. Our welcoming environment and patient-centered approach make us the perfect choice for family dental health.'
    },
    keywords: [{
      type: String,
      default: ['family dentistry', 'pediatric dentistry', 'senior dentistry', 'comprehensive dental care', 'family dental']
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
      default: 'FOR ALL AGES'
    },
    title: {
      type: String,
      default: 'Family Dentistry'
    },
    description: {
      type: String,
      default: 'From young children to seniors, we provide comprehensive dental care for your entire family. Our welcoming environment and patient-centered approach make us the perfect choice for family dental health.'
    },
    image: {
      type: String,
      default: '/assets/service3/Gemini_Generated_Image_cla59acla59acla5.png'
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

  whyChooseFamily: {
    title: {
      type: String,
      default: 'Why Choose Family Dentistry?'
    },
    description: {
      type: String,
      default: 'One dentist for your entire family means consistency, convenience, and comprehensive care'
    },
    benefits: [{
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

  careForAges: {
    title: {
      type: String,
      default: 'Care for Every Age'
    },
    description: {
      type: String,
      default: 'Specialized attention for each stage of your family\'s dental development'
    },
    image: {
      type: String,
      default: '/assets/service3/Gemini_Generated_Image_cla59acla59acla5 (1).png'
    },
    ageGroups: [{
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

  familyServices: {
    title: {
      type: String,
      default: 'Complete Family Services'
    },
    description: {
      type: String,
      default: 'A full range of dental services under one roof for your entire family'
    },
    serviceCategories: [{
      icon: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      services: [{
        type: String,
        required: true
      }],
      color: {
        type: String,
        default: '#5FC1D7'
      }
    }]
  },

  familyTips: {
    title: {
      type: String,
      default: 'Tips for Family Dental Health'
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
      default: 'Your Family\'s Smile Matters'
    },
    description: {
      type: String,
      default: 'Bring your entire family to us for comprehensive, compassionate dental care that keeps everyone smiling.'
    },
    backgroundImage: {
      type: String,
      default: '/assets/service3/Gemini_Generated_Image_cy48omcy48omcy48.png'
    },
    button: {
      text: {
        type: String,
        default: 'Request an Appointment'
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
familyDentistrySchema.pre('save', function(next) {
  if (this.isModified('status') && this.status === 'published' && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  next();
});

// Indexes
familyDentistrySchema.index({ status: 1, createdAt: -1 });
familyDentistrySchema.index({ publishedAt: -1 });

module.exports = mongoose.model('FamilyDentistryPage', familyDentistrySchema);