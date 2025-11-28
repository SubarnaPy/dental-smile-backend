const DentalCrownsPage = require('../models/DentalCrownsPage');

// Get dental crowns page data
exports.getDentalCrownsPage = async (req, res) => {
  try {
    let pageData = await DentalCrownsPage.findOne();
    
    if (!pageData) {
      // Create default data if none exists
      pageData = new DentalCrownsPage({
        hero: {
          badge: 'RESTORATIVE DENTISTRY',
          title: 'Dental Crowns',
          description: 'Dr. Avneet Dhaliwal offers custom dental crowns in Ottawa for patients who need a long-lasting solution to restore damaged or weakened teeth. Crowns improve appearance and reinforce tooth structure.',
          primaryButton: {
            text: 'Request an Appointment',
            style: 'orange'
          },
          secondaryButton: {
            text: 'Learn More',
            style: 'blue-outline'
          },
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop',
          imageAlt: 'Dental Crown'
        },
        crownsInOttawa: {
          title: 'Dental Crowns in Ottawa',
          subtitle: 'A versatile and durable option that provides full coverage and protection',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=400&fit=crop',
          imageAlt: 'Dental Crown Procedure',
          features: [{
            icon: 'Shield',
            iconColor: 'amber',
            title: 'Full Protection',
            description: 'Crowns provide complete coverage, protecting damaged teeth and allowing natural function'
          }, {
            icon: 'Award',
            iconColor: 'blue',
            title: 'Long-Lasting',
            description: 'With proper care, dental crowns can last many years, providing durable restoration'
          }, {
            icon: 'Sparkles',
            iconColor: 'orange',
            title: 'Natural Appearance',
            description: 'Custom-made to match your natural teeth for a seamless, beautiful smile'
          }]
        },
        whenYouNeedCrown: {
          title: 'When You Need a Crown',
          subtitle: 'Crowns are especially helpful for teeth that are too damaged for fillings',
          commonReasons: {
            title: 'Common Reasons',
            items: ['Tooth too damaged for a filling', 'After root canal treatment', 'Significant tooth decay', 'Cracked or broken teeth', 'Severely worn teeth', 'To support dental bridges']
          },
          keyBenefits: {
            title: 'Key Benefits',
            items: ['Reinforces tooth structure', 'Restores natural function', 'Improves tooth appearance', 'Prevents further damage', 'Comfortable fit', 'Personalized approach']
          }
        },
        typesOfCrowns: {
          title: 'Types of Dental Crowns',
          subtitle: 'Various crown options including porcelain, ceramic, and metal',
          images: [{
            src: 'https://images.unsplash.com/photo-1609840114035-3c981407e31f?w=400&h=300&fit=crop',
            alt: 'Porcelain Crown'
          }, {
            src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop',
            alt: 'Crown Placement'
          }],
          crownTypes: [{
            icon: 'Crown',
            iconColor: 'amber',
            title: 'Porcelain Crowns',
            description: 'Famous for natural appearance, closely matching existing tooth color',
            features: ['Natural appearance', 'Color-matched', 'Ideal for front teeth', 'Biocompatible']
          }, {
            icon: 'Crown',
            iconColor: 'blue',
            title: 'Ceramic Crowns',
            description: 'Excellent aesthetics with strength for both front and back teeth',
            features: ['Metal-free option', 'Natural translucency', 'Stain resistant', 'Durable material']
          }, {
            icon: 'Crown',
            iconColor: 'gray',
            title: 'Metal Crowns',
            description: 'Robust and long-lasting solution for posterior teeth with heavy chewing',
            features: ['Maximum strength', 'Highly durable', 'Best for molars', 'Long lifespan']
          }]
        },
        crownProcess: {
          title: 'The Crown Process',
          subtitle: 'Personalized approach ensuring comfortable fit and effective function',
          steps: [{
            number: 1,
            numberColor: 'amber',
            title: 'Examination',
            description: 'Assess tooth damage and determine if crown is the best solution'
          }, {
            number: 2,
            numberColor: 'blue',
            title: 'Preparation',
            description: 'Tooth is shaped and impressions taken for custom crown'
          }, {
            number: 3,
            numberColor: 'orange',
            title: 'Fabrication',
            description: 'Custom crown created in dental lab to exact specifications'
          }, {
            number: 4,
            numberColor: 'green',
            title: 'Placement',
            description: 'Crown is fitted, adjusted, and permanently cemented'
          }]
        },
        careAfterCrown: {
          title: 'Care & Eating After Getting a Crown',
          image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=400&fit=crop',
          imageAlt: 'Dental Care',
          careTips: [{
            title: 'Initial Care',
            description: 'Refrain from consuming hard or sticky foods for the initial post-operative period to allow the crown to settle securely.',
            borderColor: 'amber'
          }, {
            title: 'Long-Term Care',
            description: 'Over time, return to normal diet. Be mindful of biting hard items as they can put excess stress on the crown.',
            borderColor: 'blue'
          }, {
            title: 'Maintenance',
            description: 'Regular brushing, flossing, and dental check-ups are key to maintaining crown quality and protecting the underlying tooth.',
            borderColor: 'orange'
          }],
          patientImage: 'https://images.unsplash.com/photo-1606811951618-4486d14f3f99?w=500&h=500&fit=crop',
          patientImageAlt: 'Happy Patient'
        },
        crownsAndBridges: {
          title: 'Crowns & Bridges',
          description: 'Individuals with more missing teeth can also opt for dental bridges. Both bridges and crowns, when cared for properly, last for many years and provide excellent restoration.',
          comparison: [{
            title: 'Dental Crowns',
            description: 'Cover and protect individual damaged teeth, restoring function and appearance'
          }, {
            title: 'Dental Bridges',
            description: 'Replace missing teeth using crowns on adjacent teeth as anchors'
          }]
        },
        faq: {
          title: 'Common Questions',
          questions: [{
            question: 'What are crowns made of?',
            answer: 'Crowns can be made from porcelain, ceramic, or metal. Porcelain and ceramic offer natural appearance, while metal provides maximum strength for back teeth.'
          }, {
            question: 'How long do dental crowns last?',
            answer: 'With proper care, dental crowns typically last 10-15 years or longer. Regular dental check-ups and good oral hygiene help maximize their lifespan.'
          }, {
            question: 'Are crowns suitable for children?',
            answer: 'Yes, especially in cases of severe decay on primary teeth. They provide protection and prevent further dental issues until permanent teeth emerge.'
          }, {
            question: 'Is eating after getting a crown comfortable?',
            answer: 'Yes, patients often find eating comfortable thanks to the crown\'s sturdy design. The crown functions like a natural tooth once properly placed.'
          }, {
            question: 'How do I care for my crown?',
            answer: 'Brush twice daily, floss regularly, avoid hard foods, and visit your dentist every 6 months. Treat your crown like a natural tooth for best results.'
          }]
        },
        cta: {
          title: 'Visit Our Dental Office in Nepean',
          subtitle: 'Located at 888 Meadowlands Dr, Ottawa, ON. If you\'re considering teeth capped to restore your smile, our team at Smile Health Dental is here to help.',
          primaryButton: {
            text: 'Request an Appointment',
            style: 'white-on-amber'
          },
          secondaryButton: {
            text: 'Learn More',
            style: 'white-outline'
          }
        }
      });
      await pageData.save();
    }
    
    res.json(pageData);
  } catch (error) {
    console.error('Error fetching dental crowns page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update hero section
exports.updateHero = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalCrownsPage.findOneAndUpdate(
      {},
      { $set: { hero: updates } },
      { new: true, upsert: true }
    );
    res.json(pageData.hero);
  } catch (error) {
    console.error('Error updating hero section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update crowns in Ottawa section
exports.updateCrownsInOttawa = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalCrownsPage.findOneAndUpdate(
      {},
      { $set: { crownsInOttawa: updates } },
      { new: true, upsert: true }
    );
    res.json(pageData.crownsInOttawa);
  } catch (error) {
    console.error('Error updating crowns in Ottawa section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update when you need crown section
exports.updateWhenYouNeedCrown = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalCrownsPage.findOneAndUpdate(
      {},
      { $set: { whenYouNeedCrown: updates } },
      { new: true, upsert: true }
    );
    res.json(pageData.whenYouNeedCrown);
  } catch (error) {
    console.error('Error updating when you need crown section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update types of crowns section
exports.updateTypesOfCrowns = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalCrownsPage.findOneAndUpdate(
      {},
      { $set: { typesOfCrowns: updates } },
      { new: true, upsert: true }
    );
    res.json(pageData.typesOfCrowns);
  } catch (error) {
    console.error('Error updating types of crowns section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update crown process section
exports.updateCrownProcess = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalCrownsPage.findOneAndUpdate(
      {},
      { $set: { crownProcess: updates } },
      { new: true, upsert: true }
    );
    res.json(pageData.crownProcess);
  } catch (error) {
    console.error('Error updating crown process section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update care after crown section
exports.updateCareAfterCrown = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalCrownsPage.findOneAndUpdate(
      {},
      { $set: { careAfterCrown: updates } },
      { new: true, upsert: true }
    );
    res.json(pageData.careAfterCrown);
  } catch (error) {
    console.error('Error updating care after crown section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update crowns and bridges section
exports.updateCrownsAndBridges = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalCrownsPage.findOneAndUpdate(
      {},
      { $set: { crownsAndBridges: updates } },
      { new: true, upsert: true }
    );
    res.json(pageData.crownsAndBridges);
  } catch (error) {
    console.error('Error updating crowns and bridges section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update FAQ section
exports.updateFaq = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalCrownsPage.findOneAndUpdate(
      {},
      { $set: { faq: updates } },
      { new: true, upsert: true }
    );
    res.json(pageData.faq);
  } catch (error) {
    console.error('Error updating FAQ section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update CTA section
exports.updateCta = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalCrownsPage.findOneAndUpdate(
      {},
      { $set: { cta: updates } },
      { new: true, upsert: true }
    );
    res.json(pageData.cta);
  } catch (error) {
    console.error('Error updating CTA section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};