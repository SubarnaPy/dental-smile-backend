const mongoose = require('mongoose');

const kidsDentistryPageSchema = new mongoose.Schema({
  hero: {
    badge: { type: String, default: 'PEDIATRIC CARE' },
    title: { type: String, default: 'Kids Dentistry' },
    description: { type: String, default: 'We make dental visits fun and comfortable for children! Our gentle, patient-friendly approach helps kids develop positive dental habits for life.' },
    primaryButton: {
      text: { type: String, default: 'Request an Appointment' },
      style: { type: String, default: 'primary' }
    },
    secondaryButton: {
      text: { type: String, default: 'Learn More' },
      style: { type: String, default: 'outline' }
    },
    image: { type: String, default: '/assets/service4/Gemini_Generated_Image_3qsvb83qsvb83qsv.png' }
  },
  whyMatters: {
    title: { type: String, default: 'Why Kids Dentistry Matters' },
    subtitle: { type: String, default: 'Early dental care sets the foundation for a lifetime of healthy smiles' },
    cards: [{
      icon: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      color: { type: String, required: true }
    }]
  },
  kidFriendlyApproach: {
    title: { type: String, default: 'Our Kid-Friendly Approach' },
    subtitle: { type: String, default: 'Making dental visits fun, comfortable, and anxiety-free for children' },
    image: { type: String, default: '/assets/service4/Gemini_Generated_Image_3qsvb83qsvb83qsv (1).png' },
    approaches: [{
      icon: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      color: { type: String, required: true }
    }]
  },
  services: {
    title: { type: String, default: 'Services for Children' },
    subtitle: { type: String, default: 'Comprehensive dental care designed for young smiles' },
    categories: [{
      icon: { type: String, required: true },
      title: { type: String, required: true },
      services: [{ type: String, required: true }],
      color: { type: String, required: true }
    }]
  },
  milestones: {
    title: { type: String, default: 'Dental Milestones by Age' },
    ageGroups: [{
      title: { type: String, required: true },
      description: { type: String, required: true },
      color: { type: String, required: true }
    }]
  },
  cta: {
    title: { type: String, default: 'Start Your Child\'s Smile Journey' },
    description: { type: String, default: 'Give your child the gift of healthy teeth and a positive relationship with dental care.' },
    button: {
      text: { type: String, default: 'Request an Appointment' },
      style: { type: String, default: 'teal' }
    },
    backgroundImage: { type: String, default: '/assets/service4/Gemini_Generated_Image_3qsvb83qsvb83qsv.png' }
  }
}, {
  timestamps: true
});

// Default data
const defaultData = {
  hero: {
    badge: 'PEDIATRIC CARE',
    title: 'Kids Dentistry',
    description: 'We make dental visits fun and comfortable for children! Our gentle, patient-friendly approach helps kids develop positive dental habits for life.',
    primaryButton: {
      text: 'Request an Appointment',
      style: 'primary'
    },
    secondaryButton: {
      text: 'Learn More',
      style: 'outline'
    },
    image: '/assets/service4/Gemini_Generated_Image_3qsvb83qsvb83qsv.png'
  },
  whyMatters: {
    title: 'Why Kids Dentistry Matters',
    subtitle: 'Early dental care sets the foundation for a lifetime of healthy smiles',
    cards: [
      {
        icon: 'Heart',
        title: 'Healthy Growth',
        description: 'Proper dental care ensures healthy development of permanent teeth and jaw structure',
        color: '#5FC1D7'
      },
      {
        icon: 'Shield',
        title: 'Cavity Prevention',
        description: 'Early prevention is easier and less expensive than treating problems later',
        color: '#27A8E0'
      },
      {
        icon: 'Smile',
        title: 'Confidence Building',
        description: 'Healthy teeth help kids feel confident and enjoy social activities',
        color: '#10b981'
      }
    ]
  },
  kidFriendlyApproach: {
    title: 'Our Kid-Friendly Approach',
    subtitle: 'Making dental visits fun, comfortable, and anxiety-free for children',
    image: '/assets/service4/Gemini_Generated_Image_3qsvb83qsvb83qsv (1).png',
    approaches: [
      {
        icon: 'Star',
        title: 'Gentle Techniques',
        description: 'We use soft-spoken, patient communication and gentle handling',
        color: '#5FC1D7'
      },
      {
        icon: 'Star',
        title: 'Fun Environment',
        description: 'Bright, welcoming office with child-friendly décor and entertainment',
        color: '#27A8E0'
      },
      {
        icon: 'Star',
        title: 'Positive Reinforcement',
        description: 'Praise and rewards for brave dental behavior',
        color: '#10b981'
      },
      {
        icon: 'Star',
        title: 'Parent Involvement',
        description: 'Parents stay close by during visits for comfort and support',
        color: '#f59e0b'
      }
    ]
  },
  services: {
    title: 'Services for Children',
    subtitle: 'Comprehensive dental care designed for young smiles',
    categories: [
      {
        icon: 'CheckCircle',
        title: 'Preventive Care',
        services: [
          'First visits (starting at age 2)',
          'Regular exams and cleanings',
          'Fluoride treatments',
          'Dental sealants'
        ],
        color: '#5FC1D7'
      },
      {
        icon: 'CheckCircle',
        title: 'Education & Habit Formation',
        services: [
          'Brushing and flossing instruction',
          'Dietary counseling',
          'Thumb-sucking intervention',
          'Habit correction'
        ],
        color: '#27A8E0'
      },
      {
        icon: 'CheckCircle',
        title: 'Treatment Services',
        services: [
          'Cavity fillings',
          'Emergency care',
          'Tooth extraction when needed',
          'Space maintenance'
        ],
        color: '#10b981'
      },
      {
        icon: 'CheckCircle',
        title: 'Special Needs',
        services: [
          'Anxious patient management',
          'Gentle sedation options',
          'Special accommodations',
          'Behavioral guidance'
        ],
        color: '#f59e0b'
      }
    ]
  },
  milestones: {
    title: 'Dental Milestones by Age',
    ageGroups: [
      {
        title: 'Ages 0-2: Baby Teeth Emerge',
        description: 'First visit when first tooth appears. Clean gums daily and prevent cavities',
        color: '#5FC1D7'
      },
      {
        title: 'Ages 3-5: Primary Dentition',
        description: 'All 20 baby teeth have erupted. Focus on cavity prevention and proper brushing',
        color: '#27A8E0'
      },
      {
        title: 'Ages 6-12: Mixed Dentition',
        description: 'Baby teeth fall out and permanent teeth erupt. Monitor for orthodontic issues',
        color: '#10b981'
      },
      {
        title: 'Ages 13+: Permanent Teeth',
        description: 'All permanent teeth have erupted. Establish lifelong healthy habits',
        color: '#f59e0b'
      }
    ]
  },
  cta: {
    title: 'Start Your Child\'s Smile Journey',
    description: 'Give your child the gift of healthy teeth and a positive relationship with dental care.',
    button: {
      text: 'Request an Appointment',
      style: 'teal'
    },
    backgroundImage: '/assets/service4/Gemini_Generated_Image_3qsvb83qsvb83qsv.png'
  }
};

kidsDentistryPageSchema.statics.getDefaultData = function() {
  return defaultData;
};

module.exports = mongoose.model('KidsDentistryPage', kidsDentistryPageSchema);