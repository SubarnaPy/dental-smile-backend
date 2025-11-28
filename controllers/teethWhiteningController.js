const TeethWhiteningPage = require('../models/TeethWhiteningPage');

// Get teeth whitening page data
exports.getTeethWhiteningPage = async (req, res) => {
  try {
    let pageData = await TeethWhiteningPage.findOne();

    if (!pageData) {
      // Create default data if none exists
      pageData = new TeethWhiteningPage({
        hero: {
          title: "Professional Teeth Whitening",
          subtitle: "Transform your smile with safe, effective whitening treatments at Smile Health Dental",
          backgroundImage: "/api/placeholder/1200/600",
          ctaText: "Schedule Consultation",
          ctaLink: "/contact"
        },
        whyChooseProfessional: {
          title: "Why Choose Professional Whitening?",
          subtitle: "Experience the difference that professional dental care makes",
          benefits: [
            {
              title: "Safe & Effective",
              description: "FDA-approved whitening agents supervised by dental professionals",
              icon: "Shield"
            },
            {
              title: "Faster Results",
              description: "Achieve dramatic results in just one office visit",
              icon: "Zap"
            },
            {
              title: "Longer Lasting",
              description: "Results that maintain their brilliance for up to a year",
              icon: "Clock"
            },
            {
              title: "Customized Treatment",
              description: "Personalized approach based on your unique dental needs",
              icon: "User"
            },
            {
              title: "Minimized Sensitivity",
              description: "Advanced techniques reduce tooth sensitivity during treatment",
              icon: "Heart"
            },
            {
              title: "Expert Supervision",
              description: "Dr. Dhaliwal ensures optimal results and safety",
              icon: "Stethoscope"
            }
          ]
        },
        advancedTechnology: {
          title: "Advanced Whitening Technology",
          subtitle: "Comfortable, lasting results with laser dentistry techniques",
          features: [
            {
              title: "Laser-Assisted Whitening",
              description: "Enhances precision and minimizes common side effects like tooth sensitivity",
              color: "#2563eb"
            },
            {
              title: "Quick Treatment",
              description: "Laser activation shortens treatment time and limits exposure of whitening agents",
              color: "#ea580c"
            },
            {
              title: "Excellent Results",
              description: "Advanced technology delivers whitening while maintaining tooth integrity",
              color: "#10b981"
            }
          ],
          image: "/api/placeholder/600/400"
        },
        professionalVsStore: {
          title: "Professional vs Store-Bought",
          subtitle: "Benefits beyond what over-the-counter products can achieve",
          professional: {
            title: "Professional Whitening",
            advantages: [
              "Higher-quality materials",
              "More noticeable difference",
              "Fewer sessions needed",
              "Personalized to sensitivity",
              "Dental supervision",
              "Reduced side effects"
            ]
          },
          storeBought: {
            title: "Store-Bought Options",
            disadvantages: [
              "Lower-quality materials",
              "Less noticeable results",
              "Many sessions required",
              "One-size-fits-all approach",
              "No professional guidance",
              "Higher risk of sensitivity"
            ]
          }
        },
        resultsDuration: {
          title: "How Long Do Results Last?",
          description: "With optimal oral hygiene, professional teeth whitening results can be maintained for up to a year or longer.",
          image: "/api/placeholder/800/400",
          maintenance: {
            title: "Maintain Your Results",
            tips: [
              "Limit coffee, tea, and wine consumption",
              "Brush twice daily with whitening toothpaste",
              "Regular dental cleanings every 6 months",
              "Avoid tobacco products",
              "Use a straw for staining beverages"
            ]
          },
          touchUp: {
            title: "Touch-Up Options",
            description: "At Smile Health Dental, we can discuss maintenance options, including occasional touch-ups, to keep your smile bright over time."
          }
        },
        faq: {
          title: "Common Questions",
          questions: [
            {
              question: "Is teeth whitening safe?",
              answer: "Yes, professional teeth whitening is safe when supervised by Dr. Dhaliwal. We use advanced technology to protect your enamel and minimize sensitivity."
            },
            {
              question: "Will whitening cause sensitivity?",
              answer: "Some patients experience mild sensitivity, but our laser-assisted whitening minimizes this. We personalize treatment to your enamel's sensitivity level."
            },
            {
              question: "How white will my teeth get?",
              answer: "Results vary by individual, but most patients see teeth 3-8 shades whiter. Dr. Dhaliwal will discuss realistic expectations during your consultation."
            },
            {
              question: "How long does Zoom whitening take?",
              answer: "In-office Zoom whitening typically takes about 60-90 minutes for a complete treatment, delivering immediate results in one session."
            },
            {
              question: "Can I whiten if I have crowns or veneers?",
              answer: "Whitening only affects natural teeth. If you have restorations, Dr. Dhaliwal will discuss options to ensure a uniform, beautiful smile."
            }
          ]
        },
        cta: {
          title: "Request Your Whitening Consultation",
          subtitle: "Located at 888 Meadowlands Dr, Ottawa, ON. Smile Health Dental is your local choice for professional teeth whitening. Dr. Dhaliwal and her team are here to help you discover which whitening solution best suits your needs.",
          primaryButtonText: "Request an Appointment",
          secondaryButtonText: "Call Us Today"
        }
      });
      await pageData.save();
    }

    res.json(pageData);
  } catch (error) {
    console.error('Error fetching teeth whitening page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update teeth whitening page data
exports.updateTeethWhiteningPage = async (req, res) => {
  try {
    const updateData = req.body;
    let pageData = await TeethWhiteningPage.findOne();

    if (pageData) {
      Object.assign(pageData, updateData);
      await pageData.save();
    } else {
      pageData = new TeethWhiteningPage(updateData);
      await pageData.save();
    }

    res.json(pageData);
  } catch (error) {
    console.error('Error updating teeth whitening page:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update specific section
exports.updateTeethWhiteningSection = async (req, res) => {
  try {
    const { section } = req.params;
    const updateData = req.body;

    const pageData = await TeethWhiteningPage.findOne();
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
    console.error('Error updating teeth whitening section:', error);
    res.status(500).json({ message: 'Server error' });
  }
};