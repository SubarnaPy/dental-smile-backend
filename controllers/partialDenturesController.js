const PartialDenturesPage = require('../models/PartialDenturesPage');

// Get partial dentures page data
exports.getPartialDenturesPage = async (req, res) => {
  try {
    let pageData = await PartialDenturesPage.findOne();

    if (!pageData) {
      // Create default data if none exists
      pageData = new PartialDenturesPage({
        hero: {
          badge: 'RESTORATIVE DENTISTRY',
          title: 'Partial Dentures in Ottawa',
          description: 'At Smile Health Dental, Dr. Avneet Dhaliwal offers a variety of denture options to restore functionality and aesthetics for those with missing teeth. Dentures are custom-crafted to fit comfortably and look natural, helping patients regain confidence in their smiles.',
          primaryButton: {
            text: 'Request an Appointment',
            style: 'teal'
          },
          secondaryButton: {
            text: 'Learn More',
            style: 'outline'
          },
          image: '/api/placeholder/800/600'
        },
        partialDenturesInOttawa: {
          title: 'Partial Dentures in Ottawa',
          subtitle: 'A removable solution that provides comfort and natural appearance for patients with some remaining teeth',
          benefits: [
            {
              icon: 'Shield',
              title: 'Custom Fit',
              description: 'Precisely crafted to fit comfortably with your remaining natural teeth',
              color: 'amber'
            },
            {
              icon: 'Award',
              title: 'Natural Appearance',
              description: 'Designed to blend seamlessly with your natural teeth and smile',
              color: 'blue'
            },
            {
              icon: 'Sparkles',
              title: 'Improved Function',
              description: 'Restores ability to chew, speak, and smile with confidence',
              color: 'orange'
            }
          ]
        },
        dentureTypes: {
          title: 'Types of Dentures We Provide',
          subtitle: 'If you\'re searching for a denture near me, our Ottawa clinic offers complete and partial dentures tailored to your needs.',
          options: [
            {
              title: 'Partial Dentures',
              description: 'Ideal for patients with some remaining natural teeth. Partial dentures fit comfortably alongside existing teeth, providing a balanced and natural appearance while restoring functionality.',
              features: [
                'Removable for easy cleaning',
                'Preserves remaining natural teeth',
                'Cost-effective solution'
              ],
              color: 'blue'
            },
            {
              title: 'Complete Dentures',
              description: 'Perfect for those who have lost all their teeth in one or both arches. Complete dentures provide total tooth replacement while supporting proper jaw alignment and facial structure.',
              features: [
                'Full arch replacement',
                'Can be implant-supported for stability',
                'Restores facial structure'
              ],
              color: 'orange'
            }
          ]
        },
        comprehensiveServices: {
          title: 'Comprehensive Denture Services',
          subtitle: 'Smile Health Dental provides complete denture care, from initial fitting to ongoing maintenance and repairs.',
          services: [
            {
              icon: 'Fit',
              title: 'Custom Fitting',
              description: 'Precise measurements and adjustments for optimal comfort',
              color: 'blue'
            },
            {
              icon: 'Repair',
              title: 'Repairs & Maintenance',
              description: 'Professional repairs and relining when needed',
              color: 'orange'
            },
            {
              icon: 'Check',
              title: 'Regular Check-ups',
              description: 'Monitoring fit and function over time',
              color: 'emerald'
            },
            {
              icon: 'Extract',
              title: 'Tooth Extractions',
              description: 'Smooth transition to dentures when necessary',
              color: 'purple'
            }
          ]
        },
        benefits: {
          title: 'Benefits of Partial Dentures',
          subtitle: 'Partial dentures offer numerous advantages for patients with some remaining natural teeth.',
          benefits: [
            {
              icon: 'Smile',
              title: 'Restored Confidence',
              description: 'Fill gaps in your smile and speak with confidence, knowing your teeth look natural and complete.',
              color: 'blue'
            },
            {
              icon: 'Clock',
              title: 'Improved Functionality',
              description: 'Better chewing ability and speech clarity, allowing you to enjoy your favorite foods again.',
              color: 'orange'
            },
            {
              icon: 'Shield',
              title: 'Bone Health Support',
              description: 'Helps maintain proper jaw alignment and prevents remaining teeth from shifting out of position.',
              color: 'emerald'
            }
          ]
        },
        faq: {
          title: 'Frequently Asked Questions',
          subtitle: 'Common questions about partial dentures answered by Dr. Avneet Dhaliwal',
          questions: [
            {
              question: 'How often should dentures be replaced?',
              answer: 'Dentures typically last 5-10 years with proper care, though they may need adjustments or relining during that time. Regular dental check-ups will help determine when replacement is necessary due to wear or changes in your mouth.',
              color: 'indigo'
            },
            {
              question: 'Can I eat normally with dentures?',
              answer: 'Yes, with proper adjustment and practice, you can eat most foods normally with dentures. Start with soft foods and gradually work up to harder foods. Some foods like sticky candies or very hard items may still be challenging.',
              color: 'blue'
            },
            {
              question: 'Are partial dentures removable?',
              answer: 'Yes, partial dentures are removable. This allows for easy cleaning and maintenance. You should remove them at night and soak them in a denture cleaning solution. Regular removal also gives your gums a chance to rest.',
              color: 'orange'
            }
          ]
        },
        cta: {
          title: 'Contact Your Trusted Dental Clinic Nepean for Denture Care',
          subtitle: 'For quality dentures in Ottawa, visit Smile Health Dental at 888 Meadowlands Dr, Ottawa, ON K2C 3R2, Canada. Our experienced team, led by Dr. Avneet Dhaliwal, is dedicated to helping you find the right denture solutions to restore comfort and functionality.',
          phone: '437-913-9288',
          address: '888 Meadowlands Dr, Ottawa, ON K2C 3R2',
          primaryButton: {
            text: 'Schedule a Consultation',
            style: 'white'
          },
          secondaryButton: {
            text: 'Contact Us',
            style: 'outline'
          }
        }
      });
      await pageData.save();
    }

    res.json(pageData);
  } catch (error) {
    console.error('Error fetching partial dentures page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update partial dentures page data
exports.updatePartialDenturesPage = async (req, res) => {
  try {
    const updatedData = req.body;
    let pageData = await PartialDenturesPage.findOne();

    if (pageData) {
      pageData = await PartialDenturesPage.findOneAndUpdate({}, updatedData, { new: true });
    } else {
      pageData = new PartialDenturesPage(updatedData);
      await pageData.save();
    }

    res.json(pageData);
  } catch (error) {
    console.error('Error updating partial dentures page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update specific section
exports.updatePartialDenturesSection = async (req, res) => {
  try {
    const { section } = req.params;
    const updateData = req.body;

    const updateObject = {};
    updateObject[section] = updateData;

    let pageData = await PartialDenturesPage.findOneAndUpdate(
      {},
      updateObject,
      { new: true, upsert: true }
    );

    res.json(pageData);
  } catch (error) {
    console.error('Error updating partial dentures section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};