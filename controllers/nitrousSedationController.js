const NitrousSedationPage = require('../models/NitrousSedationPage');

// Get nitrous sedation page data
exports.getNitrousSedationPage = async (req, res) => {
  try {
    let pageData = await NitrousSedationPage.findOne();

    if (!pageData) {
      // Create default data if none exists
      pageData = new NitrousSedationPage({
        hero: {
          badge: 'ANXIETY RELIEF',
          title: 'Nitrous Sedation',
          description: 'Feel comfortable and relaxed during your dental visit. Nitrous oxide (laughing gas) is a safe, gentle option for patients with dental anxiety.',
          primaryButton: {
            text: 'Request an Appointment',
            style: 'purple'
          },
          secondaryButton: {
            text: 'Learn More',
            style: 'blue-outline'
          },
          image: '/assets/service8/Gemini_Generated_Image_7k76iv7k76iv7k76.png'
        },
        whatIsNitrous: {
          title: 'What is Nitrous Oxide?',
          subtitle: 'A safe, proven method to help nervous patients relax during dental care',
          benefits: [{
            icon: 'Wind',
            title: 'Safe & Effective',
            description: 'FDA-approved sedative used for decades in dental and medical offices worldwide',
            color: 'purple'
          }, {
            icon: 'Smile',
            title: 'Relaxing Feel',
            description: 'Creates a calm, euphoric sensation - patients remain conscious and in control',
            color: 'amber'
          }, {
            icon: 'Clock',
            title: 'Quick Recovery',
            description: 'Wears off within minutes - you can return to normal activities right away',
            color: 'emerald'
          }]
        },
        whoBenefits: {
          title: 'Who Benefits from Nitrous?',
          subtitle: 'Ideal for patients with various concerns about dental care',
          benefits: [{
            title: 'Anxious Patients',
            description: 'Help overcome fear of the dentist and make visits more comfortable',
            color: 'purple'
          }, {
            title: 'Sensitive Patients',
            description: 'Reduce discomfort sensitivity and gag reflex during procedures',
            color: 'blue'
          }, {
            title: 'Complex Procedures',
            description: 'Make longer appointments feel shorter and more tolerable',
            color: 'amber'
          }, {
            title: 'Children & Teens',
            description: 'Help young patients build positive associations with dental care',
            color: 'emerald'
          }],
          image: '/assets/service8/Gemini_Generated_Image_7k76iv7k76iv7k76 (1).png'
        },
        howItWorks: {
          title: 'How Nitrous Sedation Works',
          subtitle: 'A simple, non-invasive process for maximum comfort',
          steps: [{
            number: 1,
            title: 'Nasal Mask',
            description: 'Comfortable mask placed over your nose delivers gas',
            color: 'purple'
          }, {
            number: 2,
            title: 'Gentle Mix',
            description: 'Nitrous mixed with oxygen starts working within seconds',
            color: 'blue'
          }, {
            number: 3,
            title: 'Relax & Enjoy',
            description: 'Feel calm and relaxed while we complete your procedure',
            color: 'amber'
          }, {
            number: 4,
            title: 'Quick Recovery',
            description: 'Effects wear off within minutes when we switch to oxygen',
            color: 'emerald'
          }],
          image: '/assets/service8/Gemini_Generated_Image_7k76iv7k76iv7k76 (2).png'
        },
        effectsSafety: {
          title: 'What to Expect During Sedation',
          whatYoullFeel: {
            icon: 'Heart',
            title: 'What You\'ll Feel',
            effects: [
              'Warm, tingly sensation throughout your body',
              'Euphoric, relaxed feeling (the "laughing gas" effect)',
              'Time passes quickly - procedures feel shorter',
              'Remain awake and aware throughout',
              'Can respond to instructions and communicate'
            ],
            color: 'purple'
          },
          safetyReversibility: {
            icon: 'AlertCircle',
            title: 'Safety & Reversibility',
            points: [
              'Completely reversible - effects wear off immediately',
              'No risk of overdose - we monitor you constantly',
              'No side effects for most patients',
              'Used successfully for 100+ years',
              'We screen for medical conditions beforehand'
            ],
            color: 'blue'
          }
        },
        appointmentPrep: {
          title: 'Appointment Preparation',
          sections: [{
            title: 'Before Your Appointment',
            items: [
              'Eat a light meal 1-2 hours before (empty stomach better)',
              'Avoid alcohol 24 hours before',
              'Tell us about any medications you take',
              'Wear comfortable, loose clothing',
              'Arrive 10-15 minutes early to relax'
            ],
            color: 'purple'
          }, {
            title: 'During Your Appointment',
            items: [
              'Relax while we do our work',
              'Raise your hand if you need a break',
              'Breathe normally through your nose',
              'We adjust the gas level as needed',
              'Stay as comfortable as possible'
            ],
            color: 'blue'
          }, {
            title: 'After Your Appointment',
            items: [
              'Effects wear off completely within minutes',
              'You can drive yourself home',
              'Resume normal activities immediately',
              'Eat soft foods if your mouth is numb',
              'No restrictions on work or exercise'
            ],
            color: 'amber'
          }, {
            title: 'Common Questions',
            items: [
              'Will I remember? Yes - you\'ll be aware throughout',
              'Is it safe? Yes - very safe with proper monitoring',
              'Can I use it? Suitable for most people - we\'ll discuss your history',
              'Can kids use it? Yes - excellent option for anxious children'
            ],
            color: 'emerald'
          }]
        },
        eligibility: {
          title: 'Is Nitrous Right for You?',
          safeFor: {
            icon: 'CheckCircle',
            title: 'Generally Safe For:',
            conditions: [
              'Healthy patients of all ages',
              'Anxiety or nervous patients',
              'Those with sensitive teeth/gag reflex',
              'Patients needing longer procedures',
              'Children and adolescents',
              'Pregnant women (in 2nd/3rd trimester)'
            ],
            color: 'emerald'
          },
          notSuitable: {
            icon: 'AlertCircle',
            title: 'May Not Be Suitable:',
            conditions: [
              'Severe respiratory conditions',
              'Uncontrolled high blood pressure',
              'Recent drug or alcohol abuse',
              'Certain psychological conditions',
              'First trimester pregnancy',
              'Active vitamin B12 deficiency'
            ],
            color: 'red'
          },
          note: {
            text: 'Have questions about whether nitrous sedation is right for you? We\'ll do a full medical history and discuss all options.',
            button: {
              text: 'Request an Appointment',
              style: 'purple'
            }
          }
        },
        cta: {
          title: 'Make Your Appointment Comfortable',
          subtitle: 'Experience dental care without anxiety. Ask about nitrous sedation at your next visit.',
          button: {
            text: 'Request an Appointment',
            style: 'blue'
          }
        }
      });
      await pageData.save();
    }

    res.json(pageData);
  } catch (error) {
    console.error('Error fetching nitrous sedation page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update nitrous sedation page data
exports.updateNitrousSedationPage = async (req, res) => {
  try {
    const updateData = req.body;
    let pageData = await NitrousSedationPage.findOne();

    if (!pageData) {
      pageData = new NitrousSedationPage(updateData);
    } else {
      Object.assign(pageData, updateData);
    }

    await pageData.save();
    res.json(pageData);
  } catch (error) {
    console.error('Error updating nitrous sedation page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update specific section
exports.updateNitrousSedationSection = async (req, res) => {
  try {
    const { section } = req.params;
    const updateData = req.body;

    const updateObject = {};
    updateObject[section] = updateData;

    let pageData = await NitrousSedationPage.findOneAndUpdate(
      {},
      updateObject,
      { new: true, upsert: true }
    );

    res.json(pageData);
  } catch (error) {
    console.error('Error updating nitrous sedation section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Reset to default data
exports.resetNitrousSedationPage = async (req, res) => {
  try {
    await NitrousSedationPage.deleteMany({});
    res.json({ message: 'Nitrous sedation page reset successfully' });
  } catch (error) {
    console.error('Error resetting nitrous sedation page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};