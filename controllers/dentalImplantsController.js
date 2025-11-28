const DentalImplantsPage = require('../models/DentalImplantsPage');

// Get dental implants page data
exports.getDentalImplantsPage = async (req, res) => {
  try {
    let pageData = await DentalImplantsPage.findOne();

    if (!pageData) {
      // Create default data if none exists
      pageData = new DentalImplantsPage({
        hero: {
          badge: 'RESTORATIVE DENTISTRY',
          title: 'Dental Implants in Ottawa',
          description: 'At Smile Health Dental, Dr. Avneet Dhaliwal offers dental implant services to restore functionality and aesthetics for patients experiencing tooth loss. Dental implants are an ideal tooth loss replacement solution, using a titanium post embedded in the jawbone to replicate the anatomic root form of a natural dentition.',
          primaryButton: {
            text: 'Request an Appointment',
            style: 'teal'
          },
          secondaryButton: {
            text: 'Learn More',
            style: 'blue-outline'
          },
          image: '/assets/service1/placeholder1.png',
          imageAlt: 'Dental Implant'
        },
        implantsInOttawa: {
          title: 'Dental Implants in Ottawa',
          subtitle: 'A permanent solution that provides stability and confidence for tooth replacement',
          features: [{
            icon: 'Shield',
            iconColor: 'amber',
            title: 'Osseointegration',
            description: 'Titanium post fuses with jawbone for permanent stability'
          }, {
            icon: 'Award',
            iconColor: 'blue',
            title: 'Bone Preservation',
            description: 'Prevents bone loss and maintains facial structure'
          }, {
            icon: 'Sparkles',
            iconColor: 'orange',
            title: 'Natural Appearance',
            description: 'Custom crown provides seamless, natural-looking results'
          }]
        },
        whyChooseImplants: {
          title: 'Why Choose Dental Implants?',
          subtitle: 'For those searching for dental implants near me, dental implants present several benefits over traditional options like dentures or bridges.',
          keyAdvantages: {
            title: 'Key Advantages',
            items: ['Superior stability and confidence', 'Maintains jawbone density', 'Prevents facial structure changes', 'No alterations to neighboring teeth', 'Long-lasting, durable solution']
          },
          versatileApplications: {
            title: 'Versatile Applications',
            items: ['Single tooth replacement', 'Multiple teeth restoration', 'Full-arch replacement', 'Support for dentures']
          }
        },
        allOnFour: {
          title: 'Options for Full-Arch Replacement: All-on-Four Implants',
          subtitle: 'For patients with multiple missing teeth or full-arch tooth loss, all-on-four implants offer a streamlined and effective option.',
          features: [{
            number: '4',
            numberColor: 'green',
            title: 'Four Implants',
            description: 'Strategically positioned for maximum support'
          }, {
            number: 'Full',
            numberColor: 'blue',
            title: 'Full Arch',
            description: 'Complete restoration in one procedure'
          }, {
            number: 'Fast',
            numberColor: 'orange',
            title: 'Faster Recovery',
            description: 'Reduced treatment time and cost'
          }, {
            number: 'Stable',
            numberColor: 'purple',
            title: 'Superior Stability',
            description: 'Better than traditional dentures'
          }]
        },
        implantsForSeniors: {
          title: 'Dental Implants for Seniors',
          subtitle: 'Dental implants are also a great choice for older adults. Implants for seniors provide long-lasting comfort and ease of maintenance.',
          features: [{
            icon: 'Clock',
            iconColor: 'blue',
            title: 'Long-Lasting Comfort',
            description: 'Superior retention and stability compared to conventional dentures'
          }, {
            icon: 'Award',
            iconColor: 'orange',
            title: 'Enhanced Quality of Life',
            description: 'Enjoy a maximized variety of foods and speak confidently'
          }, {
            icon: 'Shield',
            iconColor: 'green',
            title: 'Bone Health Maintenance',
            description: 'Critical for seniors as bone loss can occur more rapidly following tooth loss'
          }]
        },
        faq: {
          title: 'Frequently Asked Questions',
          subtitle: 'Common questions about dental implants answered by Dr. Avneet Dhaliwal',
          questions: [{
            question: 'How long do dental implants last?',
            answer: 'With proper care and maintenance, dental implants can last 15-25 years or longer. The titanium post itself can last a lifetime, while the crown may need replacement after 10-15 years depending on oral hygiene and wear.'
          }, {
            question: 'Are implants suitable for replacing multiple teeth?',
            answer: 'Yes, dental implants are excellent for replacing multiple teeth. Options include individual implants for each missing tooth, implant-supported bridges, or full-arch solutions like All-on-Four for complete upper or lower restorations.'
          }, {
            question: 'Is the procedure painful?',
            answer: 'Dental implant procedures are performed under local anesthesia, so patients typically experience minimal discomfort during the procedure. Post-operative discomfort is usually mild and can be managed with prescribed pain medication and proper care.'
          }]
        },
        cta: {
          title: 'Visit Your Trusted Dental Clinic Nepean for Implant Solutions',
          subtitle: 'For high-quality dental implants in Ottawa, visit Smile Health Dental at 888 Meadowlands Dr, Ottawa, ON K2C 3R2, Canada. Our team, led by Dr. Avneet Dhaliwal, is committed to delivering customized implant care, helping you achieve optimal function and aesthetics.',
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
    console.error('Error fetching dental implants page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update hero section
exports.updateHero = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalImplantsPage.findOneAndUpdate(
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

// Update implants in Ottawa section
exports.updateImplantsInOttawa = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalImplantsPage.findOneAndUpdate(
      {},
      { $set: { implantsInOttawa: updates } },
      { new: true, upsert: true }
    );
    res.json(pageData.implantsInOttawa);
  } catch (error) {
    console.error('Error updating implants in Ottawa section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update why choose implants section
exports.updateWhyChooseImplants = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalImplantsPage.findOneAndUpdate(
      {},
      { $set: { whyChooseImplants: updates } },
      { new: true, upsert: true }
    );
    res.json(pageData.whyChooseImplants);
  } catch (error) {
    console.error('Error updating why choose implants section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update all-on-four section
exports.updateAllOnFour = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalImplantsPage.findOneAndUpdate(
      {},
      { $set: { allOnFour: updates } },
      { new: true, upsert: true }
    );
    res.json(pageData.allOnFour);
  } catch (error) {
    console.error('Error updating all-on-four section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update implants for seniors section
exports.updateImplantsForSeniors = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalImplantsPage.findOneAndUpdate(
      {},
      { $set: { implantsForSeniors: updates } },
      { new: true, upsert: true }
    );
    res.json(pageData.implantsForSeniors);
  } catch (error) {
    console.error('Error updating implants for seniors section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update FAQ section
exports.updateFaq = async (req, res) => {
  try {
    const updates = req.body;
    const pageData = await DentalImplantsPage.findOneAndUpdate(
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
    const pageData = await DentalImplantsPage.findOneAndUpdate(
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