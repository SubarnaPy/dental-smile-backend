const mongoose = require('mongoose');

const dentalExamsSchema = new mongoose.Schema({
  // General fields
  title: {
    type: String,
    required: true,
    trim: true,
    default: 'Dental Exams & Cleanings'
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    default: 'dental-exams-cleanings'
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  seo: {
    metaTitle: {
      type: String,
      default: 'Dental Exams & Cleanings | Bright Smile Dental'
    },
    metaDescription: {
      type: String,
      default: 'Regular dental exams and cleanings are the foundation of excellent oral health. Our comprehensive preventive care helps detect problems early and keeps your smile healthy.'
    },
    keywords: [{
      type: String,
      default: ['dental exam', 'dental cleaning', 'preventive care', 'oral health', 'dental checkup']
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
      default: 'PREVENTIVE CARE'
    },
    title: {
      type: String,
      default: 'Dental Exams & Cleanings'
    },
    description: {
      type: String,
      default: 'Regular dental exams and cleanings are the foundation of excellent oral health. Our comprehensive preventive care helps detect problems early and keeps your smile healthy and beautiful.'
    },
    image: {
      type: String,
      default: '/assets/service2/Gemini_Generated_Image_d71h8cd71h8cd71h.png'
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

  whyExamsMatter: {
    title: {
      type: String,
      default: 'Why Regular Exams Matter'
    },
    description: {
      type: String,
      default: 'Prevention is always better than treatment. Regular dental visits can save you time, money, and health issues down the road.'
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

  examProcess: {
    title: {
      type: String,
      default: 'Our Comprehensive Exam Process'
    },
    description: {
      type: String,
      default: 'A thorough evaluation using advanced technology and professional expertise'
    },
    image: {
      type: String,
      default: '/assets/service2/Gemini_Generated_Image_7k38mu7k38mu7k38.png'
    },
    steps: [{
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

  examFrequency: {
    title: {
      type: String,
      default: 'How Often Should You Get Exams?'
    },
    description: {
      type: String,
      default: 'The ideal frequency depends on your individual oral health status'
    },
    options: [{
      icon: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      frequency: {
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
      },
      highlighted: {
        type: Boolean,
        default: false
      }
    }]
  },

  whatToExpect: {
    title: {
      type: String,
      default: 'What to Expect During Your Visit'
    },
    backgroundImage: {
      type: String,
      default: '/assets/service2/Gemini_Generated_Image_nv0tnpnv0tnpnv0t.png'
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

  cta: {
    title: {
      type: String,
      default: 'Keep Your Smile Healthy'
    },
    description: {
      type: String,
      default: 'Request an Appointment for your dental exam and cleaning today and start your journey to optimal oral health.'
    },
    backgroundImage: {
      type: String,
      default: '/assets/service2/Gemini_Generated_Image_p5sq99p5sq99p5sq.png'
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
dentalExamsSchema.pre('save', function(next) {
  if (this.isModified('status') && this.status === 'published' && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  next();
});

// Indexes
dentalExamsSchema.index({ status: 1, createdAt: -1 });
dentalExamsSchema.index({ publishedAt: -1 });

module.exports = mongoose.model('DentalExamsPage', dentalExamsSchema);