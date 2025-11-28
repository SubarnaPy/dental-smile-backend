const mongoose = require('mongoose');

const dentalBridgesPageSchema = new mongoose.Schema({
  hero: {
    badge: { type: String, default: 'RESTORATIVE DENTISTRY' },
    title: { type: String, default: 'Dental Bridges in Ottawa' },
    description: { type: String, default: 'Restore Your Smile and Functionality. At Smile Health Dental in Ottawa, Dr. Avneet Dhaliwal provides reliable solutions for tooth replacement, including dental bridges. Designed to replace missing teeth, a dental bridge improves appearance and functionality.' },
    primaryButton: {
      text: { type: String, default: 'Request an Appointment' },
      style: { type: String, default: 'teal' }
    },
    secondaryButton: {
      text: { type: String, default: 'Learn More' },
      style: { type: String, default: 'blue-outline' }
    },
    image: { type: String, default: '/assets/service1/placeholder1.png' },
    imageAlt: { type: String, default: 'Dental Bridge' }
  },
  bridgesInOttawa: {
    title: { type: String, default: 'Dental Bridges in Ottawa' },
    subtitle: { type: String, default: 'A versatile and durable option that provides full coverage and protection for missing teeth' },
    features: [{
      icon: { type: String, default: 'Shield' },
      iconColor: { type: String, default: 'amber' },
      title: { type: String, default: 'Restore Functionality' },
      description: { type: String, default: 'Bridges allow for restored bite function, easier chewing, and improved speech clarity' }
    }, {
      icon: { type: String, default: 'Award' },
      iconColor: { type: String, default: 'blue' },
      title: { type: String, default: 'Prevent Shifting' },
      description: { type: String, default: 'Prevents remaining teeth from shifting out of place, maintaining overall oral structure' }
    }, {
      icon: { type: String, default: 'Sparkles' },
      iconColor: { type: String, default: 'orange' },
      title: { type: String, default: 'Natural Appearance' },
      description: { type: String, default: 'Custom-made to match your natural teeth for a seamless, beautiful smile' }
    }]
  },
  bridgeVarieties: {
    title: { type: String, default: 'Different Varieties of Dental Bridges' },
    subtitle: { type: String, default: 'Dental bridges in Ottawa come in several types: traditional, cantilever, and implant-supported ones. Each type serves different needs based on the extent of edentulism and the quality of the supporting dentition.' },
    types: [{
      icon: { type: String, default: 'Link' },
      iconColor: { type: String, default: 'blue' },
      title: { type: String, default: 'Traditional Bridges' },
      description: { type: String, default: 'The most common type, supported by crowns on adjacent teeth. Ideal for replacing one or more missing teeth.' }
    }, {
      icon: { type: String, default: 'Link' },
      iconColor: { type: String, default: 'orange' },
      title: { type: String, default: 'Cantilever Bridges' },
      description: { type: String, default: 'Supported by a crown on only one side. Used when there are adjacent teeth on only one side of the gap.' }
    }, {
      icon: { type: String, default: 'Link' },
      iconColor: { type: String, default: 'green' },
      title: { type: String, default: 'Implant-Supported Bridges' },
      description: { type: String, default: 'Supported by dental implants rather than natural teeth. Provides excellent stability and preserves bone.' }
    }]
  },
  bridgeProcess: {
    title: { type: String, default: 'The Dental Bridge Process' },
    subtitle: { type: String, default: 'The process begins with a thorough dental exam and cleaning to ensure optimal oral health and remove decay or plaque. Once placed, bridges typically have a recovery time of about one to two weeks.' },
    steps: [{
      number: { type: Number, default: 1 },
      numberColor: { type: String, default: 'blue' },
      title: { type: String, default: 'Consultation' },
      description: { type: String, default: 'Thorough exam and treatment planning' }
    }, {
      number: { type: Number, default: 2 },
      numberColor: { type: String, default: 'orange' },
      title: { type: String, default: 'Preparation' },
      description: { type: String, default: 'Adjacent teeth prepared for crowns' }
    }, {
      number: { type: Number, default: 3 },
      numberColor: { type: String, default: 'green' },
      title: { type: String, default: 'Temporary Bridge' },
      description: { type: String, default: 'Temporary bridge placed while permanent is made' }
    }, {
      number: { type: Number, default: 4 },
      numberColor: { type: String, default: 'purple' },
      title: { type: String, default: 'Final Placement' },
      description: { type: String, default: 'Permanent bridge cemented in place' }
    }]
  },
  longLastingResults: {
    title: { type: String, default: 'Long-Lasting Results with the Right Care' },
    subtitle: { type: String, default: 'Dental bridges can offer years of function and aesthetic benefits with proper maintenance. Dr. Dhaliwal emphasizes the importance of oral hygiene in supporting the longevity of your bridge.' },
    maintenanceTips: {
      title: { type: String, default: 'Maintenance Tips' },
      items: [{ type: String, default: 'Brush twice daily with fluoride toothpaste' }, { type: String, default: 'Floss daily, including under the bridge' }, { type: String, default: 'Use interdental brushes for hard-to-reach areas' }, { type: String, default: 'Visit dentist regularly for check-ups' }]
    },
    longevityFactors: {
      title: { type: String, default: 'Longevity Factors' },
      items: [{ type: String, default: 'Proper oral hygiene habits' }, { type: String, default: 'Regular dental visits' }, { type: String, default: 'Avoiding hard foods that could damage the bridge' }, { type: String, default: 'Maintaining healthy supporting teeth' }]
    }
  },
  faq: {
    title: { type: String, default: 'Frequently Asked Questions' },
    subtitle: { type: String, default: 'Common questions about dental bridges answered by Dr. Avneet Dhaliwal' },
    questions: [{
      question: { type: String, default: 'How long does a dental bridge last?' },
      answer: { type: String, default: 'With proper care and maintenance, dental bridges can last 10-15 years or longer. Regular dental check-ups and good oral hygiene are essential for maximizing the lifespan of your bridge.' }
    }, {
      question: { type: String, default: 'What are the main benefits of a dental bridge?' },
      answer: { type: String, default: 'Dental bridges restore your ability to chew and speak properly, maintain the shape of your face, and prevent remaining teeth from shifting. They also improve your smile\'s appearance and boost your confidence.' }
    }, {
      question: { type: String, default: 'Does getting a bridge require multiple visits?' },
      answer: { type: String, default: 'Yes, the dental bridge process typically requires 2-3 visits. The first visit involves consultation and preparation, the second for taking impressions and placing a temporary bridge, and the final visit for placing the permanent bridge.' }
    }]
  },
  cta: {
    title: { type: String, default: 'Visit Our Nepean Dentist at Smile Health Dental' },
    subtitle: { type: String, default: 'Located at 888 Meadowlands Dr, Ottawa, ON K2C 3R2, Canada. Dr. Dhaliwal and her team are dedicated to providing patients with effective dental solutions, like bridges, to enhance oral health and overall well-being.' },
    phone: { type: String, default: '437-913-9288' },
    address: { type: String, default: '888 Meadowlands Dr, Ottawa, ON K2C 3R2' },
    primaryButton: {
      text: { type: String, default: 'Schedule a Consultation' },
      style: { type: String, default: 'white-on-amber' }
    },
    secondaryButton: {
      text: { type: String, default: 'Contact Us' },
      style: { type: String, default: 'white-outline' }
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('DentalBridgesPage', dentalBridgesPageSchema);