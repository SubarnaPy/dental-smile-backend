const DentalBridgesPage = require('../models/DentalBridgesPage');

// Get dental bridges page data
exports.getDentalBridgesPage = async (req, res) => {
  try {
    let pageData = await DentalBridgesPage.findOne();

    if (!pageData) {
      // Create default data if none exists
      pageData = new DentalBridgesPage({
        hero: {
          badge: 'RESTORATIVE DENTISTRY',
          title: 'Dental Bridges in Ottawa',
          description: 'Restore Your Smile and Functionality. At Smile Health Dental in Ottawa, Dr. Avneet Dhaliwal provides reliable solutions for tooth replacement, including dental bridges. Designed to replace missing teeth, a dental bridge improves appearance and functionality.',
          primaryButton: {
            text: 'Request an Appointment',
            style: 'teal'
          },
          secondaryButton: {
            text: 'Learn More',
            style: 'blue-outline'
          },
          image: '/assets/service1/placeholder1.png',
          imageAlt: 'Dental Bridge'
        },
        bridgesInOttawa: {
          title: 'Dental Bridges in Ottawa',
          subtitle: 'A versatile and durable option that provides full coverage and protection for missing teeth',
          features: [{
            icon: 'Shield',
            iconColor: 'amber',
            title: 'Restore Functionality',
            description: 'Bridges allow for restored bite function, easier chewing, and improved speech clarity'
          }, {
            icon: 'Award',
            iconColor: 'blue',
            title: 'Prevent Shifting',
            description: 'Prevents remaining teeth from shifting out of place, maintaining overall oral structure'
          }, {
            icon: 'Sparkles',
            iconColor: 'orange',
            title: 'Natural Appearance',
            description: 'Custom-made to match your natural teeth for a seamless, beautiful smile'
          }]
        },
        bridgeVarieties: {
          title: 'Different Varieties of Dental Bridges',
          subtitle: 'Dental bridges in Ottawa come in several types: traditional, cantilever, and implant-supported ones. Each type serves different needs based on the extent of edentulism and the quality of the supporting dentition.',
          types: [{
            icon: 'Link',
            iconColor: 'blue',
            title: 'Traditional Bridges',
            description: 'The most common type, supported by crowns on adjacent teeth. Ideal for replacing one or more missing teeth.'
          }, {
            icon: 'Link',
            iconColor: 'orange',
            title: 'Cantilever Bridges',
            description: 'Supported by a crown on only one side. Used when there are adjacent teeth on only one side of the gap.'
          }, {
            icon: 'Link',
            iconColor: 'green',
            title: 'Implant-Supported Bridges',
            description: 'Supported by dental implants rather than natural teeth. Provides excellent stability and preserves bone.'
          }]
        },
        bridgeProcess: {
          title: 'The Dental Bridge Process',
          subtitle: 'The process begins with a thorough dental exam and cleaning to ensure optimal oral health and remove decay or plaque. Once placed, bridges typically have a recovery time of about one to two weeks.',
          steps: [{
            number: 1,
            numberColor: 'blue',
            title: 'Consultation',
            description: 'Thorough exam and treatment planning'
          }, {
            number: 2,
            numberColor: 'orange',
            title: 'Preparation',
            description: 'Adjacent teeth prepared for crowns'
          }, {
            number: 3,
            numberColor: 'green',
            title: 'Temporary Bridge',
            description: 'Temporary bridge placed while permanent is made'
          }, {
            number: 4,
            numberColor: 'purple',
            title: 'Final Placement',
            description: 'Permanent bridge cemented in place'
          }]
        },
        longLastingResults: {
          title: 'Long-Lasting Results with the Right Care',
          subtitle: 'Dental bridges can offer years of function and aesthetic benefits with proper maintenance. Dr. Dhaliwal emphasizes the importance of oral hygiene in supporting the longevity of your bridge.',
          maintenanceTips: {
            title: 'Maintenance Tips',
            items: ['Brush twice daily with fluoride toothpaste', 'Floss daily, including under the bridge', 'Use interdental brushes for hard-to-reach areas', 'Visit dentist regularly for check-ups']
          },
          longevityFactors: {
            title: 'Longevity Factors',
            items: ['Proper oral hygiene habits', 'Regular dental visits', 'Avoiding hard foods that could damage the bridge', 'Maintaining healthy supporting teeth']
          }
        },
        faq: {
          title: 'Frequently Asked Questions',
          subtitle: 'Common questions about dental bridges answered by Dr. Avneet Dhaliwal',
          questions: [{
            question: 'How long does a dental bridge last?',
            answer: 'With proper care and maintenance, dental bridges can last 10-15 years or longer. Regular dental check-ups and good oral hygiene are essential for maximizing the lifespan of your bridge.'
          }, {
            question: 'What are the main benefits of a dental bridge?',
            answer: 'Dental bridges restore your ability to chew and speak properly, maintain the shape of your face, and prevent remaining teeth from shifting. They also improve your smile\'s appearance and boost your confidence.'
          }, {
            question: 'Does getting a bridge require multiple visits?',
            answer: 'Yes, the dental bridge process typically requires 2-3 visits. The first visit involves consultation and preparation, the second for taking impressions and placing a temporary bridge, and the final visit for placing the permanent bridge.'
          }]
        },
        cta: {
          title: 'Visit Our Nepean Dentist at Smile Health Dental',
          subtitle: 'Located at 888 Meadowlands Dr, Ottawa, ON K2C 3R2, Canada. Dr. Dhaliwal and her team are dedicated to providing patients with effective dental solutions, like bridges, to enhance oral health and overall well-being.',
          phone: '437-913-9288',
          address: '888 Meadowlands Dr, Ottawa, ON K2C 3R2',
          primaryButton: {
            text: 'Schedule a Consultation',
            style: 'white-on-amber'
          },
          secondaryButton: {
            text: 'Contact Us',
            style: 'white-outline'
          }
        }
      });
      await pageData.save();
    }

    res.json(pageData);
  } catch (error) {
    console.error('Error fetching dental bridges page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update hero section
exports.updateHero = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalBridgesPage.findOneAndUpdate(
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

// Update bridges in Ottawa section
exports.updateBridgesInOttawa = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalBridgesPage.findOneAndUpdate(
      {},
      { $set: { bridgesInOttawa: updates } },
      { new: true, upsert: true }
    );
    res.json(pageData.bridgesInOttawa);
  } catch (error) {
    console.error('Error updating bridges in Ottawa section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update bridge varieties section
exports.updateBridgeVarieties = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalBridgesPage.findOneAndUpdate(
      {},
      { $set: { bridgeVarieties: updates } },
      { new: true, upsert: true }
    );
    res.json(pageData.bridgeVarieties);
  } catch (error) {
    console.error('Error updating bridge varieties section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update bridge process section
exports.updateBridgeProcess = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalBridgesPage.findOneAndUpdate(
      {},
      { $set: { bridgeProcess: updates } },
      { new: true, upsert: true }
    );
    res.json(pageData.bridgeProcess);
  } catch (error) {
    console.error('Error updating bridge process section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update long-lasting results section
exports.updateLongLastingResults = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalBridgesPage.findOneAndUpdate(
      {},
      { $set: { longLastingResults: updates } },
      { new: true, upsert: true }
    );
    res.json(pageData.longLastingResults);
  } catch (error) {
    console.error('Error updating long-lasting results section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update FAQ section
exports.updateFaq = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalBridgesPage.findOneAndUpdate(
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
    const pageData = await DentalBridgesPage.findOneAndUpdate(
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