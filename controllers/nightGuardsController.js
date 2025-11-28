const NightGuardsPage = require('../models/NightGuardsPage');

// Get night guards page data
exports.getNightGuardsPage = async (req, res) => {
  try {
    let pageData = await NightGuardsPage.findOne();

    if (!pageData) {
      // Create default data if none exists
      pageData = new NightGuardsPage({
        hero: {
          badge: 'TEETH PROTECTION',
          title: 'Night Guards',
          description: 'Custom-fitted night guards protect your teeth and jaw from grinding and clenching damage while you sleep. Wake up refreshed, not sore.',
          primaryButton: {
            text: 'Get Your Night Guard',
            style: 'indigo'
          },
          secondaryButton: {
            text: 'Learn More',
            style: 'blue-outline'
          },
          image: '/assets/service9/Gemini_Generated_Image_kjxnqykjxnqykjxn.png'
        },
        bruxismClenching: {
          title: 'Do You Grind Your Teeth?',
          subtitle: 'Up to 40% of people suffer from bruxism (teeth grinding) during sleep',
          benefits: [{
            icon: 'Moon',
            title: 'Common Problem',
            description: 'Bruxism affects millions - often unknowingly during sleep',
            color: 'indigo'
          }, {
            icon: 'Heart',
            title: 'Serious Damage',
            description: 'Can cause enamel wear, cracks, and painful jaw disorders',
            color: 'red'
          }, {
            icon: 'Shield',
            title: 'Easy Solution',
            description: 'Night guards prevent damage and improve sleep quality',
            color: 'emerald'
          }],
          signsOfGrinding: {
            title: 'Signs You May Be Grinding',
            symptoms: [
              'Morning jaw pain or soreness',
              'Headaches upon waking',
              'Worn or flattened teeth',
              'Cracked or chipped teeth',
              'Ear pain or ringing',
              'Receding gums',
              'Partner mentions grinding sounds',
              'Facial or jaw pain'
            ],
            color: 'red'
          }
        },
        damagePrevention: {
          title: 'Prevent Costly Damage',
          subtitle: 'Grinding can cause over $20,000 in dental damage - a night guard costs a fraction of that',
          damageFromGrinding: {
            title: 'Damage from Grinding',
            damages: [
              'Enamel erosion and wear',
              'Tooth cracks and fractures',
              'Broken crowns and bridges',
              'Worn-down teeth requiring crowns',
              'Temporomandibular joint (TMJ) disorders',
              'Gum recession and bone loss'
            ],
            color: 'red'
          },
          nightGuardBenefits: {
            title: 'Night Guard Benefits',
            benefits: [
              'Prevents all grinding damage',
              'Reduces jaw pain and headaches',
              'Improves sleep quality',
              'Protects investment in dental work',
              'Affordable preventive solution',
              'Lasts 5+ years'
            ],
            color: 'emerald'
          },
          image: '/assets/service9/Gemini_Generated_Image_kjxnqykjxnqykjxn (1).png'
        },
        guardTypes: {
          title: 'Night Guard Options',
          subtitle: 'We offer custom and quality ready-made options',
          options: [{
            icon: 'Award',
            title: 'Custom Guards',
            description: 'Made specifically for your mouth from dental impressions',
            features: [
              'Perfect fit',
              'Maximum comfort',
              'Best protection',
              'Durable 5-7 years',
              'Most effective'
            ],
            pricing: '$250-$500',
            color: 'indigo'
          }, {
            icon: 'Shield',
            title: 'Thin & Comfortable',
            description: 'Flexible material for all-night comfort and breathing',
            features: [
              'Thinner design',
              'Easy to wear',
              'Better breathing',
              'Lasts 3-5 years',
              'Popular choice'
            ],
            pricing: 'Recommended',
            color: 'blue',
            recommended: true
          }, {
            icon: 'Zap',
            title: 'Heavy Duty',
            description: 'Thicker, more rigid for severe grinding',
            features: [
              'Maximum durability',
              'Heavy grinders',
              'Extra protection',
              'Lasts 7-10 years',
              'Most resistant'
            ],
            pricing: '$350-$600',
            color: 'amber'
          }]
        },
        customGuardProcess: {
          title: 'Getting Your Custom Night Guard',
          subtitle: 'Quick, easy process for a perfect fit',
          steps: [{
            number: 1,
            title: 'Examination',
            description: 'Assess your teeth and jaw for grinding damage',
            color: 'indigo'
          }, {
            number: 2,
            title: 'Impressions',
            description: 'Take dental molds for precise customization',
            color: 'blue'
          }, {
            number: 3,
            title: 'Lab Creation',
            description: 'Guard is custom-made to exact specifications',
            color: 'orange'
          }, {
            number: 4,
            title: 'Fitting',
            description: 'Final fit and adjustment for comfort',
            color: 'emerald'
          }],
          image: '/assets/service9/Gemini_Generated_Image_ppekw5ppekw5ppek.png'
        },
        careMaintenance: {
          title: 'Night Guard Care',
          sections: [{
            title: 'Daily Cleaning',
            tips: [
              'Rinse with lukewarm water after each use',
              'Clean with soft toothbrush and mild soap',
              'Never use hot water (can warp material)',
              'Allow to air dry on clean surface'
            ],
            color: 'indigo'
          }, {
            title: 'Storage',
            tips: [
              'Store in provided protective case',
              'Keep in cool, dry place',
              'Avoid prolonged sun exposure',
              'Never wrap in tissue (can be lost)'
            ],
            color: 'blue'
          }, {
            title: 'Maintenance Tips',
            tips: [
              'Inspect for cracks or damage monthly',
              'Avoid chewing on the guard',
              'Don\'t eat or drink while wearing',
              'Replace every 5-7 years or as needed'
            ],
            color: 'orange'
          }, {
            title: 'Sleep Better',
            tips: [
              'Wear every night consistently',
              'Takes 1-2 weeks to adjust',
              'Most people sleep better within days',
              'Wake without jaw pain or headaches'
            ],
            color: 'emerald'
          }]
        },
        faq: {
          title: 'Common Questions',
          questions: [{
            question: 'Will I get used to wearing it?',
            answer: 'Yes, most patients adjust within 1-2 weeks. Initially, it feels foreign, but comfort improves with regular use. Better than waking with jaw pain!',
            color: 'indigo'
          }, {
            question: 'Will it affect my speech?',
            answer: 'Minimal impact. Some slight thickness, but most people adapt quickly. No one else will notice during normal conversation.',
            color: 'blue'
          }, {
            question: 'Can I travel with it?',
            answer: 'Absolutely. Keep it in its protective case during travel. It\'s lightweight and portable - perfect for vacations or business trips.',
            color: 'orange'
          }, {
            question: 'How long do they last?',
            answer: 'Custom guards typically last 5-7 years. Durability depends on severity of grinding. We\'ll monitor wear at check-ups and replace as needed.',
            color: 'emerald'
          }, {
            question: 'Does insurance cover it?',
            answer: 'Many insurance plans cover part of the cost as a preventive measure. We\'ll verify your coverage and handle billing. Ask about our payment plans too!',
            color: 'rose'
          }]
        },
        cta: {
          title: 'Sleep Peacefully',
          subtitle: 'Stop grinding damage before it starts. Get a custom night guard and wake up without jaw pain or headaches.',
          primaryButton: {
            text: 'Get Your Night Guard',
            style: 'orange'
          },
          secondaryButton: {
            text: 'Ask About Options',
            style: 'white-outline'
          }
        }
      });
      await pageData.save();
    }

    res.json(pageData);
  } catch (error) {
    console.error('Error fetching night guards page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update night guards page data
exports.updateNightGuardsPage = async (req, res) => {
  try {
    const updateData = req.body;
    let pageData = await NightGuardsPage.findOne();

    if (!pageData) {
      pageData = new NightGuardsPage(updateData);
    } else {
      Object.assign(pageData, updateData);
    }

    await pageData.save();
    res.json(pageData);
  } catch (error) {
    console.error('Error updating night guards page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update specific section
exports.updateNightGuardsSection = async (req, res) => {
  try {
    const { section } = req.params;
    const updateData = req.body;

    const updateObject = {};
    updateObject[section] = updateData;

    let pageData = await NightGuardsPage.findOneAndUpdate(
      {},
      updateObject,
      { new: true, upsert: true }
    );

    res.json(pageData);
  } catch (error) {
    console.error('Error updating night guards section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Reset to default data
exports.resetNightGuardsPage = async (req, res) => {
  try {
    await NightGuardsPage.deleteMany({});
    res.json({ message: 'Night guards page reset successfully' });
  } catch (error) {
    console.error('Error resetting night guards page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};