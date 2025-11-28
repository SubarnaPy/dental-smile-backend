const DentalSealsPage = require('../models/DentalSealsPage');

// Get dental sealants page data
exports.getDentalSealsPage = async (req, res) => {
  try {
    let pageData = await DentalSealsPage.findOne();

    if (!pageData) {
      // Create default data if none exists
      pageData = new DentalSealsPage({
        hero: {
          badge: 'PREVENTIVE PROTECTION',
          title: 'Dental Sealants',
          description: 'Protective shields for your back teeth. Dental sealants prevent cavities from forming in the deep grooves where a toothbrush can\'t reach.',
          primaryButton: {
            text: 'Request an Appointment',
            style: 'emerald'
          },
          secondaryButton: {
            text: 'Learn More',
            style: 'blue-outline'
          },
          image: '/assets/service7/Gemini_Generated_Image_vly5o7vly5o7vly5.png'
        },
        whySealantsMatter: {
          title: 'Why Dental Sealants?',
          subtitle: 'Sealants are one of the most effective ways to prevent back tooth cavities',
          benefits: [{
            icon: 'Shield',
            title: '99% Protection',
            description: 'Sealants reduce cavity risk in sealed surfaces by nearly 99% for up to 10 years',
            color: 'emerald'
          }, {
            icon: 'Zap',
            title: 'Quick Application',
            description: 'Simple, painless procedure takes just minutes with no drilling or anesthetic needed',
            color: 'amber'
          }, {
            icon: 'Heart',
            title: 'Child-Friendly',
            description: 'Perfect for kids - helps establish lifelong cavity prevention habits early',
            color: 'red'
          }]
        },
        whoBenefits: {
          title: 'Who Should Get Sealants?',
          subtitle: 'Sealants benefit children, teens, and adults at risk for cavities',
          groups: [{
            title: 'Children & Teens',
            description: 'Ages 6-18 benefit most from sealants on newly erupted permanent teeth',
            benefits: [
              'New molars are most cavity-prone',
              'Establishes healthy habits early',
              '80% reduction in cavities',
              'FDA recommended for all kids'
            ],
            color: 'emerald'
          }, {
            title: 'Adults',
            description: 'Cavity-prone adults can benefit from sealants on back teeth',
            benefits: [
              'History of cavities',
              'Deep grooves in molars',
              'Limited flossing access',
              'Dry mouth conditions'
            ],
            color: 'blue'
          }],
          image: '/assets/service7/Gemini_Generated_Image_vly5o7vly5o7vly5 (1).png'
        },
        howSealantsWork: {
          title: 'How Dental Sealants Work',
          subtitle: 'A physical barrier that prevents food and bacteria from collecting in tooth grooves',
          steps: [{
            number: 1,
            title: 'Clean',
            description: 'Tooth surface is thoroughly cleaned and dried',
            color: 'emerald'
          }, {
            number: 2,
            title: 'Prepare',
            description: 'Special solution prepares the tooth surface for bonding',
            color: 'blue'
          }, {
            number: 3,
            title: 'Apply',
            description: 'Liquid sealant material is painted onto grooves and chewing surfaces',
            color: 'amber'
          }, {
            number: 4,
            title: 'Harden',
            description: 'UV light hardens the sealant into a protective shield',
            color: 'red'
          }],
          image: '/assets/service7/Gemini_Generated_Image_vly5o7vly5o7vly5 (2).png'
        },
        whatToExpect: {
          title: 'What to Expect During Application',
          expectations: [{
            title: 'Duration',
            description: 'Application takes 15-30 minutes total. Quick enough to do during a regular cleaning visit',
            color: 'emerald'
          }, {
            title: 'No Anesthetic Needed',
            description: 'Completely painless procedure - no needle or drilling. Kids especially appreciate the comfort',
            color: 'blue'
          }, {
            title: 'Immediate Results',
            description: 'Protection begins immediately. No recovery time - eat and drink normally right away',
            color: 'amber'
          }, {
            title: 'Invisible Protection',
            description: 'Sealants are clear or tooth-colored and invisible. Doesn\'t affect appearance or feel',
            color: 'red'
          }]
        },
        effectivenessDurability: {
          title: 'Long-Lasting Protection',
          protectionTimeline: {
            icon: 'Award',
            title: 'Protection Timeline',
            items: [{
              timeframe: '1-2 Years',
              description: 'Check for wear during regular visits'
            }, {
              timeframe: '3-5 Years',
              description: 'May begin to wear; still providing protection'
            }, {
              timeframe: 'Up to 10 Years',
              description: 'Some sealants last this long with proper care'
            }, {
              timeframe: 'Reapplication',
              description: 'We\'ll replace worn sealants as needed'
            }],
            color: 'emerald'
          },
          stats: {
            icon: 'Clock',
            title: 'Cavity Prevention Stats',
            metrics: [{
              label: 'Cavity Reduction',
              percentage: 90,
              description: '80-90% reduction on sealed surfaces',
              color: 'green'
            }, {
              label: 'Cost Savings',
              percentage: 75,
              description: 'Costs less than treating a cavity',
              color: 'blue'
            }, {
              label: 'Effectiveness',
              percentage: 99,
              description: '99% effective in preventing cavities',
              color: 'orange'
            }],
            color: 'emerald'
          }
        },
        careTips: {
          title: 'Caring for Your Sealants',
          tips: [{
            title: 'Maintain Good Habits',
            items: [
              'Brush teeth twice daily',
              'Floss between teeth daily',
              'Limit sugary foods and drinks',
              'Use fluoride mouthwash'
            ],
            color: 'emerald'
          }, {
            title: 'Normal Activities',
            items: [
              'Eat and drink normally',
              'Chew gum (sugar-free)',
              'Brush with normal toothbrush',
              'Use mouthwash'
            ],
            color: 'blue'
          }, {
            title: 'Regular Monitoring',
            items: [
              'Visit us every 6 months for check-ups',
              'We monitor sealant wear and integrity',
              'Professional cleaning maintains effectiveness',
              'Replacement is simple if needed'
            ],
            color: 'amber'
          }]
        },
        cta: {
          title: 'Protect Your Smile',
          subtitle: 'Dental sealants are an easy, affordable way to prevent cavities for years to come. Request an Appointment today.',
          button: {
            text: 'Get Dental Sealants',
            style: 'blue'
          }
        }
      });
      await pageData.save();
    }

    res.json(pageData);
  } catch (error) {
    console.error('Error fetching dental sealants page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update dental sealants page data
exports.updateDentalSealsPage = async (req, res) => {
  try {
    const updateData = req.body;
    let pageData = await DentalSealsPage.findOne();

    if (!pageData) {
      pageData = new DentalSealsPage(updateData);
    } else {
      Object.assign(pageData, updateData);
    }

    await pageData.save();
    res.json(pageData);
  } catch (error) {
    console.error('Error updating dental sealants page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update specific section
exports.updateDentalSealsSection = async (req, res) => {
  try {
    const { section } = req.params;
    const updateData = req.body;

    const updateObject = {};
    updateObject[section] = updateData;

    let pageData = await DentalSealsPage.findOneAndUpdate(
      {},
      updateObject,
      { new: true, upsert: true }
    );

    res.json(pageData);
  } catch (error) {
    console.error('Error updating dental sealants section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Reset to default data
exports.resetDentalSealsPage = async (req, res) => {
  try {
    await DentalSealsPage.deleteMany({});
    res.json({ message: 'Dental sealants page reset successfully' });
  } catch (error) {
    console.error('Error resetting dental sealants page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};