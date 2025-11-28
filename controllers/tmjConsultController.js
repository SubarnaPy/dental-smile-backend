const TMJConsultPage = require('../models/TMJConsultPage');

// Get TMJ consult page data
exports.getTMJConsultPage = async (req, res) => {
  try {
    let pageData = await TMJConsultPage.findOne();

    if (!pageData) {
      // Create default data if none exists
      pageData = new TMJConsultPage({
        hero: {
          badge: 'RESTORATIVE DENTISTRY',
          title: 'TMJ Consult in Ottawa',
          description: 'At Smile Health Dental in Ottawa, Dr. Avneet Dhaliwal offers comprehensive care for patients experiencing temporomandibular joint disorder (TMD), providing practical solutions to alleviate jaw pain, limited movement, and discomfort.',
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
        understandingTMJ: {
          title: 'Understanding TMJ Disorders',
          subtitle: 'TMJ disorders may develop from a variety of causes, such as inflammation of the joint, teeth grinding, stress, or injury. Dr. Dhaliwal uses a range of therapeutic techniques to address these issues.',
          benefits: [
            {
              icon: 'Shield',
              title: 'Pain Relief',
              description: 'Alleviate jaw pain and discomfort through targeted treatments',
              color: 'amber'
            },
            {
              icon: 'Award',
              title: 'Improved Function',
              description: 'Restore normal jaw movement and functionality',
              color: 'blue'
            },
            {
              icon: 'Sparkles',
              title: 'Better Quality of Life',
              description: 'Enhanced ability to eat, speak, and perform daily activities',
              color: 'orange'
            }
          ]
        },
        treatmentOptions: {
          title: 'Personalized TMJ Treatment Options',
          subtitle: 'Smile Health Dental offers personalized TMJ treatment options designed to address each patient\'s unique symptoms and diagnosis.',
          categories: [
            {
              title: 'Non-Invasive Treatments',
              treatments: [
                'Custom-made occlusal splints',
                'Physical therapy exercises',
                'Stress management techniques',
                'Posture correction guidance'
              ],
              color: 'blue'
            },
            {
              title: 'Lifestyle Support',
              treatments: [
                'Patient education on TMJ health',
                'Relaxation techniques',
                'Sleep quality improvement',
                'Dietary recommendations'
              ],
              color: 'orange'
            }
          ]
        },
        treatmentBenefits: {
          title: 'Benefits of Seeking TMJ Treatment',
          subtitle: 'Prompt treatment for TMJ disorders reduces pain and improves overall jaw functionality and quality of life.',
          benefits: [
            {
              icon: 'Pain',
              title: 'Reduced Pain',
              description: 'Significant decrease in jaw pain and discomfort',
              color: 'blue'
            },
            {
              icon: 'Function',
              title: 'Better Function',
              description: 'Improved ability to chew, speak, and yawn',
              color: 'orange'
            },
            {
              icon: 'Sleep',
              title: 'Better Sleep',
              description: 'Reduced nighttime grinding and improved rest',
              color: 'emerald'
            },
            {
              icon: 'Quality',
              title: 'Quality of Life',
              description: 'Enhanced daily comfort and well-being',
              color: 'purple'
            }
          ]
        },
        treatmentApproach: {
          title: 'Our TMJ Treatment Approach',
          subtitle: 'For individuals seeking a TMJ Consult in Ottawa, Smile Health Dental provides a compassionate and professional environment where patient comfort and personalized care are the priorities.',
          approaches: [
            {
              icon: 'Activity',
              title: 'Comprehensive Assessment',
              description: 'Thorough evaluation of your TMJ symptoms, medical history, and lifestyle factors to determine the best treatment approach.',
              color: 'blue'
            },
            {
              icon: 'Clock',
              title: 'Conservative Care First',
              description: 'Starting with non-invasive treatments and lifestyle modifications before considering more advanced interventions.',
              color: 'orange'
            },
            {
              icon: 'Shield',
              title: 'Long-Term Management',
              description: 'Focus on sustainable solutions and patient education to prevent symptom recurrence and maintain joint health.',
              color: 'emerald'
            }
          ]
        },
        faq: {
          title: 'Frequently Asked Questions',
          subtitle: 'Common questions about TMJ treatment answered by Dr. Avneet Dhaliwal',
          questions: [
            {
              question: 'What causes temporomandibular joint disorder?',
              answer: 'TMJ disorders can be caused by various factors including teeth grinding or clenching, stress, injury to the jaw, arthritis, or misalignment of the teeth or jaw. Each patient\'s situation is unique and requires individual assessment.',
              color: 'indigo'
            },
            {
              question: 'How long does TMJ treatment take?',
              answer: 'Treatment duration varies depending on the severity of symptoms and individual response to therapy. Many patients experience significant improvement within a few weeks to months with consistent treatment and lifestyle modifications.',
              color: 'blue'
            },
            {
              question: 'Can TMJ disorders affect sleep?',
              answer: 'Yes, TMJ disorders can significantly impact sleep quality. Nighttime teeth grinding (bruxism) associated with TMJ can cause disrupted sleep patterns, morning headaches, and daytime fatigue. Treatment often includes addressing sleep-related habits.',
              color: 'orange'
            }
          ]
        },
        cta: {
          title: 'Visit Our Dental Office in Nepean',
          subtitle: 'At Smile Health Dental, conveniently located at 888 Meadowlands Dr, Ottawa, ON K2C 3R2, Dr. Dhaliwal and her team are committed to assisting patients in managing TMJ discomfort through tailored and efficient care.',
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
    console.error('Error fetching TMJ consult page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update TMJ consult page data
exports.updateTMJConsultPage = async (req, res) => {
  try {
    const updatedData = req.body;
    let pageData = await TMJConsultPage.findOne();

    if (pageData) {
      pageData = await TMJConsultPage.findOneAndUpdate({}, updatedData, { new: true });
    } else {
      pageData = new TMJConsultPage(updatedData);
      await pageData.save();
    }

    res.json(pageData);
  } catch (error) {
    console.error('Error updating TMJ consult page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update specific section
exports.updateTMJConsultSection = async (req, res) => {
  try {
    const { section } = req.params;
    const updateData = req.body;

    const updateObject = {};
    updateObject[section] = updateData;

    let pageData = await TMJConsultPage.findOneAndUpdate(
      {},
      updateObject,
      { new: true, upsert: true }
    );

    res.json(pageData);
  } catch (error) {
    console.error('Error updating TMJ consult section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};