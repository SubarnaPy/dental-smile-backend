const RootCanalTherapyPage = require('../models/RootCanalTherapyPage');

// Get root canal therapy page data
exports.getRootCanalTherapyPage = async (req, res) => {
  try {
    let pageData = await RootCanalTherapyPage.findOne();

    if (!pageData) {
      // Create default data if none exists
      pageData = new RootCanalTherapyPage({
        hero: {
          category: "RESTORATIVE DENTISTRY",
          title: "Root Canal Therapy in Ottawa",
          subtitle: "Save Your Natural Tooth with Advanced Endodontic Treatment. At Smile Health Dental in Ottawa, Dr. Avneet Dhaliwal specializes in root canal therapy to relieve pain and preserve your natural teeth. Modern techniques and technology ensure comfortable, effective treatment.",
          primaryButtonText: "Request an Appointment",
          secondaryButtonText: "Learn More",
          image: "/api/placeholder/600/400"
        },
        whyChoose: {
          title: "Why Choose Root Canal Therapy?",
          subtitle: "Root canal therapy is often the best way to save a severely damaged or infected tooth, avoiding extraction and maintaining your natural smile.",
          benefits: [
            {
              title: "Save Your Natural Tooth",
              description: "Preserve your natural tooth structure and avoid the need for artificial replacements like implants or bridges.",
              icon: "Shield",
              color: "#5FC1D7"
            },
            {
              title: "Pain Relief",
              description: "Eliminate tooth pain and discomfort caused by infection or inflammation of the dental pulp.",
              icon: "Zap",
              color: "#27A8E0"
            },
            {
              title: "Prevent Further Issues",
              description: "Stop the spread of infection and prevent complications like abscesses or bone loss.",
              icon: "Heart",
              color: "#10b981"
            }
          ]
        },
        whenYouNeed: {
          title: "When Do You Need a Root Canal?",
          symptoms: [
            {
              title: "Severe Tooth Pain",
              description: "Persistent, intense pain that may worsen with chewing or temperature changes."
            },
            {
              title: "Prolonged Sensitivity",
              description: "Extended sensitivity to hot or cold that lingers after the stimulus is removed."
            },
            {
              title: "Swelling and Infection",
              description: "Swelling in the gums, face, or neck, or signs of infection like fever."
            },
            {
              title: "Darkened Tooth",
              description: "A tooth that has become discolored due to internal damage or infection."
            },
            {
              title: "Cracked or Chipped Tooth",
              description: "Deep cracks or chips that expose the pulp chamber to bacteria."
            }
          ],
          image: "/api/placeholder/600/400"
        },
        treatmentProcess: {
          title: "The Root Canal Process",
          subtitle: "Our modern approach to root canal therapy ensures comfort and precision throughout the treatment.",
          steps: [
            {
              title: "Diagnosis & Preparation",
              description: "We examine your tooth and take X-rays to assess the extent of damage and plan the treatment.",
              number: 1
            },
            {
              title: "Access & Cleaning",
              description: "We create an opening to access the pulp chamber and carefully remove infected tissue.",
              number: 2
            },
            {
              title: "Shaping & Filling",
              description: "The root canals are shaped and filled with a biocompatible material to seal the space.",
              number: 3
            },
            {
              title: "Restoration",
              description: "The tooth is restored with a crown or filling to protect it and restore full function.",
              number: 4
            }
          ]
        },
        technology: {
          title: "Advanced Technology for Better Results",
          technologies: [
            {
              title: "Digital X-Rays",
              description: "Precise imaging to accurately diagnose and treat root canal issues.",
              icon: "Stethoscope"
            },
            {
              title: "Rotary Endodontics",
              description: "Advanced rotary instruments for more efficient and comfortable cleaning.",
              icon: "Activity"
            },
            {
              title: "Apex Locators",
              description: "Electronic devices that precisely measure root canal length for optimal treatment.",
              icon: "Award"
            },
            {
              title: "Sedation Options",
              description: "Various sedation methods available to ensure your comfort during treatment.",
              icon: "Sparkles"
            }
          ],
          image: "/api/placeholder/600/400"
        },
        aftercare: {
          title: "Root Canal Aftercare",
          subtitle: "Proper care after your root canal treatment ensures optimal healing and long-term success.",
          immediateCare: {
            title: "Immediate Aftercare",
            tips: [
              "Avoid chewing on the treated tooth until fully restored",
              "Take prescribed medications as directed",
              "Apply ice packs if swelling occurs",
              "Maintain excellent oral hygiene"
            ]
          },
          longTermCare: {
            title: "Long-term Care",
            tips: [
              "Continue regular dental check-ups",
              "Practice good oral hygiene daily",
              "Wear a mouthguard if you grind your teeth",
              "Maintain a healthy diet and lifestyle"
            ]
          }
        },
        faq: {
          title: "Frequently Asked Questions",
          subtitle: "Common questions about root canal therapy",
          questions: [
            {
              question: "Is root canal treatment painful?",
              answer: "Modern root canal therapy is no more painful than getting a regular filling. We use local anesthesia and sedation options to ensure your comfort throughout the procedure."
            },
            {
              question: "How long does a root canal take?",
              answer: "Most root canal treatments can be completed in 1-2 appointments, depending on the complexity of the case. Front teeth typically take less time than molars."
            },
            {
              question: "What are the alternatives to root canal therapy?",
              answer: "The main alternative is tooth extraction followed by replacement with an implant, bridge, or denture. However, saving your natural tooth is usually the best option when possible."
            },
            {
              question: "How successful are root canals?",
              answer: "Root canal therapy has a success rate of over 95% when performed by experienced dentists using modern techniques and properly cared for afterward."
            },
            {
              question: "Will my tooth look different after a root canal?",
              answer: "The treated tooth will look normal, though it may need a crown for protection and optimal appearance. The crown will be matched to your natural tooth color."
            }
          ]
        },
        cta: {
          title: "Don't Let Tooth Pain Ruin Your Day",
          subtitle: "Contact Smile Health Dental today to schedule your root canal consultation. We'll help relieve your pain and save your natural tooth.",
          primaryButtonText: "Call 437-913-9288",
          secondaryButtonText: "Request Appointment",
          location: "Ottawa Location",
          availability: "Emergency Appointments Available"
        }
      });
      await pageData.save();
    }

    res.json(pageData);
  } catch (error) {
    console.error('Error fetching root canal therapy page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update root canal therapy page data
exports.updateRootCanalTherapyPage = async (req, res) => {
  try {
    const updateData = req.body;
    let pageData = await RootCanalTherapyPage.findOne();

    if (pageData) {
      Object.assign(pageData, updateData);
      await pageData.save();
    } else {
      pageData = new RootCanalTherapyPage(updateData);
      await pageData.save();
    }

    res.json(pageData);
  } catch (error) {
    console.error('Error updating root canal therapy page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update specific section
exports.updateRootCanalTherapySection = async (req, res) => {
  try {
    const { section } = req.params;
    const updateData = req.body;

    const pageData = await RootCanalTherapyPage.findOne();
    if (!pageData) {
      return res.status(404).json({ message: 'Page data not found' });
    }

    if (!(section in pageData)) {
      return res.status(400).json({ message: 'Invalid section' });
    }

    pageData[section] = { ...pageData[section], ...updateData };
    await pageData.save();

    res.json(pageData[section]);
  } catch (error) {
    console.error('Error updating root canal therapy section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};