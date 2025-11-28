const mongoose = require('mongoose');

const dentalImplantsPageSchema = new mongoose.Schema({
  hero: {
    badge: { type: String, default: 'RESTORATIVE DENTISTRY' },
    title: { type: String, default: 'Dental Implants in Ottawa' },
    description: { type: String, default: 'At Smile Health Dental, Dr. Avneet Dhaliwal offers dental implant services to restore functionality and aesthetics for patients experiencing tooth loss. Dental implants are an ideal tooth loss replacement solution, using a titanium post embedded in the jawbone to replicate the anatomic root form of a natural dentition.' },
    primaryButton: {
      text: { type: String, default: 'Request an Appointment' },
      style: { type: String, default: 'teal' }
    },
    secondaryButton: {
      text: { type: String, default: 'Learn More' },
      style: { type: String, default: 'blue-outline' }
    },
    image: { type: String, default: '/assets/service1/placeholder1.png' },
    imageAlt: { type: String, default: 'Dental Implant' }
  },
  implantsInOttawa: {
    title: { type: String, default: 'Dental Implants in Ottawa' },
    subtitle: { type: String, default: 'A permanent solution that provides stability and confidence for tooth replacement' },
    features: [{
      icon: { type: String, default: 'Shield' },
      iconColor: { type: String, default: 'amber' },
      title: { type: String, default: 'Osseointegration' },
      description: { type: String, default: 'Titanium post fuses with jawbone for permanent stability' }
    }, {
      icon: { type: String, default: 'Award' },
      iconColor: { type: String, default: 'blue' },
      title: { type: String, default: 'Bone Preservation' },
      description: { type: String, default: 'Prevents bone loss and maintains facial structure' }
    }, {
      icon: { type: String, default: 'Sparkles' },
      iconColor: { type: String, default: 'orange' },
      title: { type: String, default: 'Natural Appearance' },
      description: { type: String, default: 'Custom crown provides seamless, natural-looking results' }
    }]
  },
  whyChooseImplants: {
    title: { type: String, default: 'Why Choose Dental Implants?' },
    subtitle: { type: String, default: 'For those searching for dental implants near me, dental implants present several benefits over traditional options like dentures or bridges.' },
    keyAdvantages: {
      title: { type: String, default: 'Key Advantages' },
      items: [{ type: String, default: 'Superior stability and confidence' }, { type: String, default: 'Maintains jawbone density' }, { type: String, default: 'Prevents facial structure changes' }, { type: String, default: 'No alterations to neighboring teeth' }, { type: String, default: 'Long-lasting, durable solution' }]
    },
    versatileApplications: {
      title: { type: String, default: 'Versatile Applications' },
      items: [{ type: String, default: 'Single tooth replacement' }, { type: String, default: 'Multiple teeth restoration' }, { type: String, default: 'Full-arch replacement' }, { type: String, default: 'Support for dentures' }]
    }
  },
  allOnFour: {
    title: { type: String, default: 'Options for Full-Arch Replacement: All-on-Four Implants' },
    subtitle: { type: String, default: 'For patients with multiple missing teeth or full-arch tooth loss, all-on-four implants offer a streamlined and effective option.' },
    features: [{
      number: { type: String, default: '4' },
      numberColor: { type: String, default: 'green' },
      title: { type: String, default: 'Four Implants' },
      description: { type: String, default: 'Strategically positioned for maximum support' }
    }, {
      number: { type: String, default: 'Full' },
      numberColor: { type: String, default: 'blue' },
      title: { type: String, default: 'Full Arch' },
      description: { type: String, default: 'Complete restoration in one procedure' }
    }, {
      number: { type: String, default: 'Fast' },
      numberColor: { type: String, default: 'orange' },
      title: { type: String, default: 'Faster Recovery' },
      description: { type: String, default: 'Reduced treatment time and cost' }
    }, {
      number: { type: String, default: 'Stable' },
      numberColor: { type: String, default: 'purple' },
      title: { type: String, default: 'Superior Stability' },
      description: { type: String, default: 'Better than traditional dentures' }
    }]
  },
  implantsForSeniors: {
    title: { type: String, default: 'Dental Implants for Seniors' },
    subtitle: { type: String, default: 'Dental implants are also a great choice for older adults. Implants for seniors provide long-lasting comfort and ease of maintenance.' },
    features: [{
      icon: { type: String, default: 'Clock' },
      iconColor: { type: String, default: 'blue' },
      title: { type: String, default: 'Long-Lasting Comfort' },
      description: { type: String, default: 'Superior retention and stability compared to conventional dentures' }
    }, {
      icon: { type: String, default: 'Award' },
      iconColor: { type: String, default: 'orange' },
      title: { type: String, default: 'Enhanced Quality of Life' },
      description: { type: String, default: 'Enjoy a maximized variety of foods and speak confidently' }
    }, {
      icon: { type: String, default: 'Shield' },
      iconColor: { type: String, default: 'green' },
      title: { type: String, default: 'Bone Health Maintenance' },
      description: { type: String, default: 'Critical for seniors as bone loss can occur more rapidly following tooth loss' }
    }]
  },
  faq: {
    title: { type: String, default: 'Frequently Asked Questions' },
    subtitle: { type: String, default: 'Common questions about dental implants answered by Dr. Avneet Dhaliwal' },
    questions: [{
      question: { type: String, default: 'How long do dental implants last?' },
      answer: { type: String, default: 'With proper care and maintenance, dental implants can last 15-25 years or longer. The titanium post itself can last a lifetime, while the crown may need replacement after 10-15 years depending on oral hygiene and wear.' }
    }, {
      question: { type: String, default: 'Are implants suitable for replacing multiple teeth?' },
      answer: { type: String, default: 'Yes, dental implants are excellent for replacing multiple teeth. Options include individual implants for each missing tooth, implant-supported bridges, or full-arch solutions like All-on-Four for complete upper or lower restorations.' }
    }, {
      question: { type: String, default: 'Is the procedure painful?' },
      answer: { type: String, default: 'Dental implant procedures are performed under local anesthesia, so patients typically experience minimal discomfort during the procedure. Post-operative discomfort is usually mild and can be managed with prescribed pain medication and proper care.' }
    }]
  },
  cta: {
    title: { type: String, default: 'Visit Your Trusted Dental Clinic Nepean for Implant Solutions' },
    subtitle: { type: String, default: 'For high-quality dental implants in Ottawa, visit Smile Health Dental at 888 Meadowlands Dr, Ottawa, ON K2C 3R2, Canada. Our team, led by Dr. Avneet Dhaliwal, is committed to delivering customized implant care, helping you achieve optimal function and aesthetics.' },
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

module.exports = mongoose.model('DentalImplantsPage', dentalImplantsPageSchema);