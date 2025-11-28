const DentalBondingPage = require('../models/DentalBondingPage');

// Get dental bonding page data
exports.getDentalBondingPage = async (req, res) => {
  try {
    let pageData = await DentalBondingPage.findOne();

    if (!pageData) {
      // Create default data if none exists
      pageData = new DentalBondingPage({
        hero: {
          badge: 'COSMETIC DENTISTRY',
          title: 'Dental Bonding',
          description: 'Dr. Avneet Dhaliwal offers composite bonding to restore and enhance your smile. This minimally invasive procedure addresses chipped or cracked teeth, discolored teeth, and small gaps using light-cured composite resin.',
          primaryButton: {
            text: 'Request an Appointment',
            style: 'teal'
          },
          secondaryButton: {
            text: 'Learn More',
            style: 'blue-outline'
          },
          image: '/images/dental-bonding-hero.jpg',
          imageAlt: 'Dental Bonding Procedure'
        },
        bondingInOttawa: {
          title: 'Composite Bonding in Ottawa',
          subtitle: 'A fast and reliable solution for common dental imperfections with natural-looking results',
          features: [
            {
              icon: 'Sparkles',
              iconColor: 'purple',
              title: 'Minimally Invasive',
              description: 'Light-cured composite resin restores tooth structure with minimal preparation required'
            },
            {
              icon: 'Clock',
              iconColor: 'blue',
              title: 'One Appointment',
              description: 'Typically requires only one visit - resume normal activities immediately'
            },
            {
              icon: 'Award',
              iconColor: 'orange',
              title: 'Natural Look',
              description: 'Composite resin matches your tooth color perfectly for seamless results'
            }
          ]
        },
        advantagesOfBonding: {
          title: 'Advantages of Dental Bonding',
          subtitle: 'Excellent versatility for tooth restoration with conservative treatment approach',
          whatWeCanFix: {
            title: 'What We Can Fix',
            items: [
              'Chipped or cracked teeth',
              'Discolored teeth',
              'Small gaps between teeth',
              'Cavity tooth decay',
              'Minor cosmetic imperfections',
              'Teeth needing capping for protection'
            ]
          },
          keyBenefits: {
            title: 'Key Benefits',
            items: [
              'Minimal tooth preparation required',
              'Preserves natural tooth structure',
              'Conservative treatment option',
              'Can serve as interim restoration',
              'Non-invasive procedure',
              'Comfortable experience'
            ]
          }
        },
        bondingProcess: {
          title: 'The Bonding Process',
          subtitle: 'Simple, painless procedure with stunning results',
          images: {
            tools: '/images/dental-tools.jpg',
            procedure: '/images/dental-procedure.jpg'
          },
          steps: [
            {
              number: '1',
              numberColor: 'purple',
              title: 'Preparation',
              description: 'Tooth surface is lightly etched and conditioning liquid applied'
            },
            {
              number: '2',
              numberColor: 'blue',
              title: 'Color Match',
              description: 'Select composite resin shade that matches your natural teeth'
            },
            {
              number: '3',
              numberColor: 'orange',
              title: 'Application',
              description: 'Resin is applied, molded, and smoothed to desired shape'
            },
            {
              number: '4',
              numberColor: 'green',
              title: 'Curing',
              description: 'UV light hardens material, then polished to shine'
            }
          ]
        },
        expectations: {
          title: 'What to Expect During & After',
          image: '/images/bonding-treatment.jpg',
          duringTreatment: {
            title: 'During Treatment',
            description: 'Typically requires only one appointment. Dr. Dhaliwal ensures personalized care to achieve optimal results with minimal discomfort.',
            borderColor: 'purple'
          },
          afterTreatment: {
            title: 'After Treatment',
            description: 'Resume normal activities immediately. The resin material is highly durable, allowing you to eat and drink as usual right away.',
            borderColor: 'blue'
          },
          careTips: {
            title: 'Important Care Tips',
            description: 'Avoid biting into hard foods with bonded teeth to maintain longevity. The material is durable but benefits from gentle care.',
            borderColor: 'orange'
          }
        },
        caringForBondedTeeth: {
          title: 'Caring for Bonded Teeth',
          image: '/images/dental-care.jpg',
          dailyCare: {
            title: 'Daily Care',
            items: [
              'Brush twice daily with soft-bristled toothbrush',
              'Floss daily around bonded teeth',
              'Use non-abrasive toothpaste',
              'Rinse with fluoride mouthwash'
            ],
            borderColor: 'purple'
          },
          thingsToAvoid: {
            title: 'Things to Avoid',
            items: [
              'Biting fingernails or pens',
              'Chewing ice or hard candy',
              'Opening packages with teeth',
              'Excessive coffee, tea, or red wine (can stain)'
            ],
            borderColor: 'blue'
          },
          regularCheckups: {
            title: 'Regular Check-ups',
            items: [
              'Visit every 6 months for professional cleaning',
              'We\'ll check bonding integrity during exams',
              'Touch-ups or repairs done as needed',
              'Polishing keeps bonding looking new'
            ],
            borderColor: 'orange'
          }
        },
        bondingVsOptions: {
          title: 'Bonding vs. Other Options',
          subtitle: 'Understanding your cosmetic dentistry choices',
          options: [
            {
              icon: 'Shield',
              iconColor: 'purple',
              title: 'Dental Bonding',
              features: [
                '✓ Most affordable option',
                '✓ One visit completion',
                '✓ Minimal tooth alteration',
                '✓ Lasts 3-10 years',
                '✓ Easily repaired'
              ],
              bestFor: 'Best for minor repairs',
              isHighlighted: true
            },
            {
              icon: 'Heart',
              iconColor: 'blue',
              title: 'Veneers',
              features: [
                '✓ More durable',
                '✓ Stain resistant',
                '✓ Lasts 10-15 years',
                '✓ Higher cost',
                '✓ Requires tooth prep'
              ],
              bestFor: 'Best for full smile makeover',
              isHighlighted: false
            },
            {
              icon: 'Award',
              iconColor: 'orange',
              title: 'Crowns',
              features: [
                '✓ Maximum durability',
                '✓ Full tooth coverage',
                '✓ Lasts 15-20 years',
                '✓ Most expensive',
                '✓ Multiple visits'
              ],
              bestFor: 'Best for damaged teeth',
              isHighlighted: false
            }
          ]
        },
        faq: {
          title: 'Common Questions',
          questions: [
            {
              question: 'How long does composite bonding last?',
              answer: 'With proper care, composite bonding typically lasts 3-10 years. Longevity depends on oral hygiene habits and avoiding hard foods with bonded teeth.'
            },
            {
              question: 'Can bonding fix minor gaps between teeth?',
              answer: 'Yes, composite bonding is excellent for closing small gaps between teeth. It provides a natural-looking solution without orthodontic treatment.'
            },
            {
              question: 'Is the bonding material stain-resistant?',
              answer: 'The composite resin is relatively stain-resistant but can discolor over time from coffee, tea, or smoking. Regular cleanings help maintain appearance.'
            },
            {
              question: 'Can bonding be used as a temporary solution?',
              answer: 'Yes, bonding can serve as an interim restoration for patients considering veneers or crowns down the line, providing flexibility in treatment planning.'
            },
            {
              question: 'Is bonding right for me?',
              answer: 'Bonding is ideal for minor cosmetic improvements and repairs. Dr. Dhaliwal will assess your needs and recommend the best treatment option during consultation.'
            }
          ]
        },
        cta: {
          title: 'Visit Smile Health Dental for Quality Bonding',
          subtitle: 'Located at 888 Meadowlands Dr, Ottawa, ON. Dr. Dhaliwal is dedicated to helping patients enhance their smiles with safe, reliable, and aesthetically pleasing solutions.',
          primaryButton: {
            text: 'Request an Appointment',
            style: 'teal'
          },
          secondaryButton: {
            text: 'Call Us Today',
            style: 'white-outline'
          }
        }
      });

      await pageData.save();
    }

    res.json(pageData);
  } catch (error) {
    console.error('Error fetching dental bonding page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update dental bonding page data
exports.updateDentalBondingPage = async (req, res) => {
  try {
    const updateData = req.body;
    let pageData = await DentalBondingPage.findOne();

    if (pageData) {
      Object.assign(pageData, updateData);
      await pageData.save();
    } else {
      pageData = new DentalBondingPage(updateData);
      await pageData.save();
    }

    res.json(pageData);
  } catch (error) {
    console.error('Error updating dental bonding page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update specific section
exports.updateDentalBondingSection = async (req, res) => {
  try {
    const { section } = req.params;
    const updateData = req.body;

    const pageData = await DentalBondingPage.findOne();
    if (!pageData) {
      return res.status(404).json({ message: 'Page data not found' });
    }

    pageData[section] = { ...pageData[section], ...updateData };
    await pageData.save();

    res.json(pageData);
  } catch (error) {
    console.error('Error updating dental bonding section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};