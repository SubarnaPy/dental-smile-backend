const mongoose = require('mongoose');

const dentalCrownsPageSchema = new mongoose.Schema({
  hero: {
    badge: { type: String, default: 'RESTORATIVE DENTISTRY' },
    title: { type: String, default: 'Dental Crowns' },
    description: { type: String, default: 'Dr. Avneet Dhaliwal offers custom dental crowns in Ottawa for patients who need a long-lasting solution to restore damaged or weakened teeth. Crowns improve appearance and reinforce tooth structure.' },
    primaryButton: {
      text: { type: String, default: 'Request an Appointment' },
      style: { type: String, default: 'orange' }
    },
    secondaryButton: {
      text: { type: String, default: 'Learn More' },
      style: { type: String, default: 'blue-outline' }
    },
    image: { type: String, default: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop' },
    imageAlt: { type: String, default: 'Dental Crown' }
  },
  crownsInOttawa: {
    title: { type: String, default: 'Dental Crowns in Ottawa' },
    subtitle: { type: String, default: 'A versatile and durable option that provides full coverage and protection' },
    image: { type: String, default: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=400&fit=crop' },
    imageAlt: { type: String, default: 'Dental Crown Procedure' },
    features: [{
      icon: { type: String, default: 'Shield' },
      iconColor: { type: String, default: 'amber' },
      title: { type: String, default: 'Full Protection' },
      description: { type: String, default: 'Crowns provide complete coverage, protecting damaged teeth and allowing natural function' }
    }, {
      icon: { type: String, default: 'Award' },
      iconColor: { type: String, default: 'blue' },
      title: { type: String, default: 'Long-Lasting' },
      description: { type: String, default: 'With proper care, dental crowns can last many years, providing durable restoration' }
    }, {
      icon: { type: String, default: 'Sparkles' },
      iconColor: { type: String, default: 'orange' },
      title: { type: String, default: 'Natural Appearance' },
      description: { type: String, default: 'Custom-made to match your natural teeth for a seamless, beautiful smile' }
    }]
  },
  whenYouNeedCrown: {
    title: { type: String, default: 'When You Need a Crown' },
    subtitle: { type: String, default: 'Crowns are especially helpful for teeth that are too damaged for fillings' },
    commonReasons: {
      title: { type: String, default: 'Common Reasons' },
      items: [{ type: String, default: 'Tooth too damaged for a filling' }, { type: String, default: 'After root canal treatment' }, { type: String, default: 'Significant tooth decay' }, { type: String, default: 'Cracked or broken teeth' }, { type: String, default: 'Severely worn teeth' }, { type: String, default: 'To support dental bridges' }]
    },
    keyBenefits: {
      title: { type: String, default: 'Key Benefits' },
      items: [{ type: String, default: 'Reinforces tooth structure' }, { type: String, default: 'Restores natural function' }, { type: String, default: 'Improves tooth appearance' }, { type: String, default: 'Prevents further damage' }, { type: String, default: 'Comfortable fit' }, { type: String, default: 'Personalized approach' }]
    }
  },
  typesOfCrowns: {
    title: { type: String, default: 'Types of Dental Crowns' },
    subtitle: { type: String, default: 'Various crown options including porcelain, ceramic, and metal' },
    images: [{
      src: { type: String, default: 'https://images.unsplash.com/photo-1609840114035-3c981407e31f?w=400&h=300&fit=crop' },
      alt: { type: String, default: 'Porcelain Crown' }
    }, {
      src: { type: String, default: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop' },
      alt: { type: String, default: 'Crown Placement' }
    }],
    crownTypes: [{
      icon: { type: String, default: 'Crown' },
      iconColor: { type: String, default: 'amber' },
      title: { type: String, default: 'Porcelain Crowns' },
      description: { type: String, default: 'Famous for natural appearance, closely matching existing tooth color' },
      features: [{ type: String, default: 'Natural appearance' }, { type: String, default: 'Color-matched' }, { type: String, default: 'Ideal for front teeth' }, { type: String, default: 'Biocompatible' }]
    }, {
      icon: { type: String, default: 'Crown' },
      iconColor: { type: String, default: 'blue' },
      title: { type: String, default: 'Ceramic Crowns' },
      description: { type: String, default: 'Excellent aesthetics with strength for both front and back teeth' },
      features: [{ type: String, default: 'Metal-free option' }, { type: String, default: 'Natural translucency' }, { type: String, default: 'Stain resistant' }, { type: String, default: 'Durable material' }]
    }, {
      icon: { type: String, default: 'Crown' },
      iconColor: { type: String, default: 'gray' },
      title: { type: String, default: 'Metal Crowns' },
      description: { type: String, default: 'Robust and long-lasting solution for posterior teeth with heavy chewing' },
      features: [{ type: String, default: 'Maximum strength' }, { type: String, default: 'Highly durable' }, { type: String, default: 'Best for molars' }, { type: String, default: 'Long lifespan' }]
    }]
  },
  crownProcess: {
    title: { type: String, default: 'The Crown Process' },
    subtitle: { type: String, default: 'Personalized approach ensuring comfortable fit and effective function' },
    steps: [{
      number: { type: Number, default: 1 },
      numberColor: { type: String, default: 'amber' },
      title: { type: String, default: 'Examination' },
      description: { type: String, default: 'Assess tooth damage and determine if crown is the best solution' }
    }, {
      number: { type: Number, default: 2 },
      numberColor: { type: String, default: 'blue' },
      title: { type: String, default: 'Preparation' },
      description: { type: String, default: 'Tooth is shaped and impressions taken for custom crown' }
    }, {
      number: { type: Number, default: 3 },
      numberColor: { type: String, default: 'orange' },
      title: { type: String, default: 'Fabrication' },
      description: { type: String, default: 'Custom crown created in dental lab to exact specifications' }
    }, {
      number: { type: Number, default: 4 },
      numberColor: { type: String, default: 'green' },
      title: { type: String, default: 'Placement' },
      description: { type: String, default: 'Crown is fitted, adjusted, and permanently cemented' }
    }]
  },
  careAfterCrown: {
    title: { type: String, default: 'Care & Eating After Getting a Crown' },
    image: { type: String, default: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=400&fit=crop' },
    imageAlt: { type: String, default: 'Dental Care' },
    careTips: [{
      title: { type: String, default: 'Initial Care' },
      description: { type: String, default: 'Refrain from consuming hard or sticky foods for the initial post-operative period to allow the crown to settle securely.' },
      borderColor: { type: String, default: 'amber' }
    }, {
      title: { type: String, default: 'Long-Term Care' },
      description: { type: String, default: 'Over time, return to normal diet. Be mindful of biting hard items as they can put excess stress on the crown.' },
      borderColor: { type: String, default: 'blue' }
    }, {
      title: { type: String, default: 'Maintenance' },
      description: { type: String, default: 'Regular brushing, flossing, and dental check-ups are key to maintaining crown quality and protecting the underlying tooth.' },
      borderColor: { type: String, default: 'orange' }
    }],
    patientImage: { type: String, default: 'https://images.unsplash.com/photo-1606811951618-4486d14f3f99?w=500&h=500&fit=crop' },
    patientImageAlt: { type: String, default: 'Happy Patient' }
  },
  crownsAndBridges: {
    title: { type: String, default: 'Crowns & Bridges' },
    description: { type: String, default: 'Individuals with more missing teeth can also opt for dental bridges. Both bridges and crowns, when cared for properly, last for many years and provide excellent restoration.' },
    comparison: [{
      title: { type: String, default: 'Dental Crowns' },
      description: { type: String, default: 'Cover and protect individual damaged teeth, restoring function and appearance' }
    }, {
      title: { type: String, default: 'Dental Bridges' },
      description: { type: String, default: 'Replace missing teeth using crowns on adjacent teeth as anchors' }
    }]
  },
  faq: {
    title: { type: String, default: 'Common Questions' },
    questions: [{
      question: { type: String, default: 'What are crowns made of?' },
      answer: { type: String, default: 'Crowns can be made from porcelain, ceramic, or metal. Porcelain and ceramic offer natural appearance, while metal provides maximum strength for back teeth.' }
    }, {
      question: { type: String, default: 'How long do dental crowns last?' },
      answer: { type: String, default: 'With proper care, dental crowns typically last 10-15 years or longer. Regular dental check-ups and good oral hygiene help maximize their lifespan.' }
    }, {
      question: { type: String, default: 'Are crowns suitable for children?' },
      answer: { type: String, default: 'Yes, especially in cases of severe decay on primary teeth. They provide protection and prevent further dental issues until permanent teeth emerge.' }
    }, {
      question: { type: String, default: 'Is eating after getting a crown comfortable?' },
      answer: { type: String, default: 'Yes, patients often find eating comfortable thanks to the crown\'s sturdy design. The crown functions like a natural tooth once properly placed.' }
    }, {
      question: { type: String, default: 'How do I care for my crown?' },
      answer: { type: String, default: 'Brush twice daily, floss regularly, avoid hard foods, and visit your dentist every 6 months. Treat your crown like a natural tooth for best results.' }
    }]
  },
  cta: {
    title: { type: String, default: 'Visit Our Dental Office in Nepean' },
    subtitle: { type: String, default: 'Located at 888 Meadowlands Dr, Ottawa, ON. If you\'re considering teeth capped to restore your smile, our team at Smile Health Dental is here to help.' },
    primaryButton: {
      text: { type: String, default: 'Request an Appointment' },
      style: { type: String, default: 'white-on-amber' }
    },
    secondaryButton: {
      text: { type: String, default: 'Learn More' },
      style: { type: String, default: 'white-outline' }
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('DentalCrownsPage', dentalCrownsPageSchema);