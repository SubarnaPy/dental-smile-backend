const mongoose = require('mongoose');
const ServiceTemplate = require('../models/ServiceTemplate');
require('dotenv').config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Generate unique IDs
const generateId = () => new mongoose.Types.ObjectId().toString();

// Improved default styles with better spacing and visual appeal
const improvedStyles = {
  hero: {
    padding: '4rem 1.5rem',
    textAlign: 'center',
    minHeight: '480px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overlay: { color: 'rgba(15,23,42,0.45)', opacity: 0.45 }
  },
  imageText: { padding: '3rem 1.5rem', objectFit: 'cover', gap: '2rem' },
  iconGrid: { padding: '3rem 1.5rem', gap: '1.5rem' },
  numberedList: { padding: '3rem 1.5rem', gap: '1.5rem' },
  timeline: { padding: '3rem 1.5rem', gap: '1.5rem' },
  cta: { padding: '3rem 1.5rem', textAlign: 'center' },
  ctaWithBackground: { padding: '4rem 1.5rem', textAlign: 'center', minHeight: '320px' },
  stats: { padding: '3rem 1.5rem', gap: '1.5rem' },
  testimonials: { padding: '3rem 1.5rem', gap: '1.5rem' },
  faq: { padding: '3rem 1.5rem', gap: '1rem' },
  pricing: { padding: '3rem 1.5rem', gap: '1.5rem' },
  featureDetail: { padding: '3rem 1.5rem', gap: '2rem' },
  comparison: { padding: '3rem 1.5rem', gap: '1.5rem' },
  checklist: { padding: '3rem 1.5rem', gap: '1rem' },
  videoSection: { padding: '3rem 1.5rem' },
  gallery: { padding: '3rem 1.5rem', gap: '1rem' },
  team: { padding: '3rem 1.5rem', gap: '1.5rem' },
  logoCloud: { padding: '2.5rem 1.5rem', gap: '2rem' },
  newsletter: { padding: '3rem 1.5rem', textAlign: 'center' },
  splitContent: { padding: '3rem 1.5rem', gap: '2rem' }
};

// Beautiful, improved templates
const beautifulTemplates = [
  // ============================================================================
  // HERO SECTIONS - Improved with better content and styling
  // ============================================================================
  {
    name: "Modern Hero with Badge",
    description: "Clean hero with badge, compelling headline, and dual CTAs",
    category: "Hero Sections",
    content: [{
      id: generateId(),
      type: "hero",
      data: {
        title: "Transform Your Smile with Expert Care",
        subtitle: "Experience personalized dental treatments using advanced technology. Our compassionate team ensures your comfort while delivering exceptional results that last.",
        buttonText: "Schedule Consultation",
        buttonLink: "#contact",
        secondaryButtonText: "View Services",
        secondaryButtonLink: "#services",
        badge: "TRUSTED BY 5,000+ PATIENTS",
        textAlign: "center"
      },
      style: improvedStyles.hero
    }],
    tags: ["hero", "modern", "badge"],
    isActive: true
  },
  {
    name: "Hero with Side Image",
    description: "Professional hero with text on left and image on right",
    category: "Hero Sections",
    content: [{
      id: generateId(),
      type: "imageText",
      data: {
        heading: "Your Partner in Dental Excellence",
        content: "We combine years of expertise with cutting-edge technology to provide comprehensive dental care. From routine checkups to complex procedures, trust us with your smile.",
        imageUrl: "/placeholder.svg",
        imagePosition: "right",
        buttonText: "Book Your Visit",
        buttonLink: "#contact",
        backgroundColor: "bg-slate-50"
      },
      style: { ...improvedStyles.imageText, padding: '4rem 1.5rem' }
    }],
    tags: ["hero", "image", "professional"],
    isActive: true
  },
  {
    name: "Hero with Statistics",
    description: "Impactful hero combining headline with key statistics",
    category: "Hero Sections",
    content: [
      {
        id: generateId(),
        type: "hero",
        data: {
          title: "Excellence in Every Smile",
          subtitle: "Join thousands of satisfied patients who trust us with their dental health. Our commitment to quality care has made us a leading choice for families.",
          buttonText: "Get Started Today",
          buttonLink: "#contact",
          textAlign: "center"
        },
        style: { ...improvedStyles.hero, minHeight: '380px', padding: '3rem 1.5rem' }
      },
      {
        id: generateId(),
        type: "stats",
        data: {
          items: [
            { value: "15+", label: "Years Experience", iconColor: "text-slate-700" },
            { value: "5,000+", label: "Happy Patients", iconColor: "text-slate-700" },
            { value: "98%", label: "Satisfaction Rate", iconColor: "text-slate-700" },
            { value: "24/7", label: "Emergency Care", iconColor: "text-slate-700" }
          ]
        },
        style: { ...improvedStyles.stats, padding: '2rem 1.5rem', backgroundColor: '#f8fafc' }
      }
    ],
    tags: ["hero", "stats", "impactful"],
    isActive: true
  },

  // ============================================================================
  // FEATURE SECTIONS - Enhanced with better descriptions
  // ============================================================================
  {
    name: "3-Column Benefits Grid",
    description: "Showcase three key benefits with icons and descriptions",
    category: "Feature Sections",
    content: [{
      id: generateId(),
      type: "iconGrid",
      data: {
        heading: "Why Patients Choose Us",
        description: "We're committed to providing exceptional care that puts your comfort and health first",
        columns: 3,
        items: [
          {
            icon: "shield",
            title: "Safe & Comfortable",
            description: "State-of-the-art sterilization and gentle techniques ensure your safety and comfort throughout every procedure",
            iconColor: "text-slate-600"
          },
          {
            icon: "award",
            title: "Expert Team",
            description: "Our experienced professionals stay current with the latest advancements to deliver the best possible outcomes",
            iconColor: "text-slate-600"
          },
          {
            icon: "heart",
            title: "Patient-Centered Care",
            description: "We listen to your concerns and create personalized treatment plans that fit your unique needs and goals",
            iconColor: "text-slate-600"
          }
        ]
      },
      style: improvedStyles.iconGrid
    }],
    tags: ["features", "benefits", "3-column"],
    isActive: true
  },
  {
    name: "4-Column Service Features",
    description: "Display four service highlights in a clean grid",
    category: "Feature Sections",
    content: [{
      id: generateId(),
      type: "iconGrid",
      data: {
        heading: "Comprehensive Dental Services",
        description: "From preventive care to advanced treatments, we offer everything you need for optimal oral health",
        columns: 4,
        items: [
          {
            icon: "check",
            title: "Preventive Care",
            description: "Regular checkups and cleanings to maintain your healthy smile",
            iconColor: "text-slate-600"
          },
          {
            icon: "zap",
            title: "Restorative Dentistry",
            description: "Fillings, crowns, and bridges to restore damaged teeth",
            iconColor: "text-slate-600"
          },
          {
            icon: "star",
            title: "Cosmetic Treatments",
            description: "Whitening, veneers, and smile makeovers for your best look",
            iconColor: "text-slate-600"
          },
          {
            icon: "users",
            title: "Family Dentistry",
            description: "Caring for patients of all ages in a welcoming environment",
            iconColor: "text-slate-600"
          }
        ]
      },
      style: improvedStyles.iconGrid
    }],
    tags: ["features", "services", "4-column"],
    isActive: true
  },
  {
    name: "Feature Detail with Checklist",
    description: "Detailed feature section with image and benefit checklist",
    category: "Feature Sections",
    content: [{
      id: generateId(),
      type: "featureDetail",
      data: {
        heading: "Advanced Digital Technology",
        content: "Our practice utilizes the latest digital imaging and treatment planning technology to provide precise diagnoses and optimal treatment outcomes.",
        imageUrl: "/placeholder.svg",
        imagePosition: "left",
        features: [
          "Digital X-rays with 90% less radiation exposure",
          "Intraoral cameras for detailed visualization",
          "3D imaging for accurate treatment planning",
          "Same-day crowns with CAD/CAM technology",
          "Electronic records for seamless care coordination"
        ]
      },
      style: improvedStyles.featureDetail
    }],
    tags: ["features", "technology", "checklist"],
    isActive: true
  },

  // ============================================================================
  // CONTENT SECTIONS - Image + Text combinations
  // ============================================================================
  {
    name: "About Section - Image Left",
    description: "Professional about section with image on left side",
    category: "Content Sections",
    content: [{
      id: generateId(),
      type: "imageText",
      data: {
        heading: "Dedicated to Your Dental Health",
        content: "For over a decade, we've been helping patients achieve and maintain beautiful, healthy smiles. Our approach combines clinical excellence with genuine compassion, ensuring every visit is comfortable and productive. We believe in building lasting relationships with our patients through trust, transparency, and exceptional care.",
        imageUrl: "/placeholder.svg",
        imagePosition: "left",
        buttonText: "Meet Our Team",
        buttonLink: "#team",
        backgroundColor: "bg-white"
      },
      style: improvedStyles.imageText
    }],
    tags: ["content", "about", "image-left"],
    isActive: true
  },
  {
    name: "Service Overview - Image Right",
    description: "Service description with supporting image on right",
    category: "Content Sections",
    content: [{
      id: generateId(),
      type: "imageText",
      data: {
        heading: "Comprehensive Treatment Options",
        content: "Whether you need routine maintenance or complex restorative work, our skilled team provides a full range of dental services under one roof. We take time to explain your options and help you make informed decisions about your care. Your comfort and satisfaction are our top priorities.",
        imageUrl: "/placeholder.svg",
        imagePosition: "right",
        buttonText: "Explore Services",
        buttonLink: "#services",
        backgroundColor: "bg-slate-50"
      },
      style: improvedStyles.imageText
    }],
    tags: ["content", "services", "image-right"],
    isActive: true
  },
  {
    name: "Mission Statement Section",
    description: "Compelling mission statement with visual support",
    category: "Content Sections",
    content: [{
      id: generateId(),
      type: "imageText",
      data: {
        heading: "Our Commitment to Excellence",
        content: "We're driven by a simple mission: to provide the highest quality dental care in a warm, welcoming environment. Every member of our team shares this commitment, from our front desk staff to our clinical professionals. We continuously invest in training and technology to ensure you receive the best possible care.",
        imageUrl: "/placeholder.svg",
        imagePosition: "left",
        backgroundColor: "bg-white"
      },
      style: improvedStyles.imageText
    }],
    tags: ["content", "mission", "about"],
    isActive: true
  },

  // ============================================================================
  // PROCESS & TIMELINE SECTIONS
  // ============================================================================
  {
    name: "Treatment Process Steps",
    description: "Clear step-by-step treatment process with numbered items",
    category: "Process Sections",
    content: [{
      id: generateId(),
      type: "numberedList",
      data: {
        heading: "Your Treatment Journey",
        description: "We make every step of your dental care clear and comfortable",
        imageUrl: "/placeholder.svg",
        imagePosition: "right",
        items: [
          {
            title: "Initial Consultation",
            description: "We'll discuss your concerns, review your dental history, and perform a comprehensive examination",
            iconColor: "bg-slate-600 text-white"
          },
          {
            title: "Personalized Treatment Plan",
            description: "Based on our findings, we'll create a customized plan that addresses your specific needs and goals",
            iconColor: "bg-slate-600 text-white"
          },
          {
            title: "Expert Treatment",
            description: "Our skilled team delivers your treatment with precision, using advanced techniques for optimal results",
            iconColor: "bg-slate-600 text-white"
          },
          {
            title: "Follow-Up Care",
            description: "We provide detailed aftercare instructions and schedule follow-up visits to ensure lasting success",
            iconColor: "bg-slate-600 text-white"
          }
        ]
      },
      style: improvedStyles.numberedList
    }],
    tags: ["process", "steps", "treatment"],
    isActive: true
  },
  {
    name: "Vertical Timeline",
    description: "Professional timeline showing process or history",
    category: "Process Sections",
    content: [{
      id: generateId(),
      type: "timeline",
      data: {
        heading: "What to Expect During Your Visit",
        items: [
          {
            title: "Warm Welcome",
            description: "Our friendly staff greets you and ensures all paperwork is complete. We'll answer any questions before your appointment begins.",
            iconColor: "bg-slate-600 text-white"
          },
          {
            title: "Thorough Examination",
            description: "Your dentist performs a comprehensive evaluation, including digital X-rays if needed, to assess your oral health.",
            iconColor: "bg-slate-600 text-white"
          },
          {
            title: "Discussion & Planning",
            description: "We review findings with you, explain any concerns, and discuss treatment options in terms you can understand.",
            iconColor: "bg-slate-600 text-white"
          },
          {
            title: "Treatment & Next Steps",
            description: "If treatment is needed, we proceed with your approval. Before you leave, we schedule any follow-up appointments.",
            iconColor: "bg-slate-600 text-white"
          }
        ]
      },
      style: improvedStyles.timeline
    }],
    tags: ["timeline", "process", "visit"],
    isActive: true
  },

  // ============================================================================
  // CTA SECTIONS - Compelling calls to action
  // ============================================================================
  {
    name: "Simple CTA Banner",
    description: "Clean call-to-action with heading and button",
    category: "Call to Action",
    content: [{
      id: generateId(),
      type: "cta",
      data: {
        heading: "Ready to Transform Your Smile?",
        description: "Schedule your consultation today and take the first step toward the healthy, beautiful smile you deserve.",
        buttonText: "Book Appointment",
        buttonLink: "#contact",
        backgroundColor: "bg-slate-100"
      },
      style: improvedStyles.cta
    }],
    tags: ["cta", "simple", "booking"],
    isActive: true
  },
  {
    name: "CTA with Background Image",
    description: "Impactful CTA with background image and overlay",
    category: "Call to Action",
    content: [{
      id: generateId(),
      type: "ctaWithBackground",
      data: {
        heading: "Your Best Smile Awaits",
        description: "Don't wait to achieve the smile you've always wanted. Our team is ready to help you reach your dental health goals.",
        buttonText: "Schedule Now",
        buttonLink: "#contact",
        backgroundImage: "/placeholder.svg",
        overlay: true
      },
      style: improvedStyles.ctaWithBackground
    }],
    tags: ["cta", "background", "impactful"],
    isActive: true
  },
  {
    name: "Emergency CTA",
    description: "Urgent call-to-action for emergency services",
    category: "Call to Action",
    content: [{
      id: generateId(),
      type: "cta",
      data: {
        heading: "Dental Emergency? We're Here to Help",
        description: "Don't suffer through dental pain. Contact us immediately for prompt, professional emergency care. Same-day appointments available.",
        buttonText: "Call Now: (555) 123-4567",
        buttonLink: "tel:5551234567",
        backgroundColor: "bg-slate-700"
      },
      style: { ...improvedStyles.cta, color: '#ffffff' }
    }],
    tags: ["cta", "emergency", "urgent"],
    isActive: true
  },

  // ============================================================================
  // STATISTICS SECTIONS
  // ============================================================================
  {
    name: "Impact Statistics",
    description: "Showcase key metrics and achievements",
    category: "Statistics",
    content: [{
      id: generateId(),
      type: "stats",
      data: {
        heading: "Our Track Record of Excellence",
        items: [
          { value: "15,000+", label: "Patients Served", iconColor: "text-slate-700" },
          { value: "99%", label: "Patient Satisfaction", iconColor: "text-slate-700" },
          { value: "20+", label: "Years of Experience", iconColor: "text-slate-700" },
          { value: "50,000+", label: "Procedures Completed", iconColor: "text-slate-700" }
        ]
      },
      style: improvedStyles.stats
    }],
    tags: ["stats", "metrics", "achievements"],
    isActive: true
  },
  {
    name: "Compact Statistics Row",
    description: "Horizontal statistics display for quick impact",
    category: "Statistics",
    content: [{
      id: generateId(),
      type: "stats",
      data: {
        items: [
          { value: "4.9★", label: "Google Rating", iconColor: "text-slate-700" },
          { value: "500+", label: "5-Star Reviews", iconColor: "text-slate-700" },
          { value: "Same Day", label: "Emergency Care", iconColor: "text-slate-700" },
          { value: "0%", label: "Financing Available", iconColor: "text-slate-700" }
        ]
      },
      style: { ...improvedStyles.stats, padding: '2rem 1.5rem', backgroundColor: '#f1f5f9' }
    }],
    tags: ["stats", "compact", "ratings"],
    isActive: true
  },

  // ============================================================================
  // TESTIMONIALS SECTIONS
  // ============================================================================
  {
    name: "Patient Testimonials Grid",
    description: "Three-column grid of patient reviews",
    category: "Testimonials",
    content: [{
      id: generateId(),
      type: "testimonials",
      data: {
        heading: "What Our Patients Say",
        layout: "grid",
        items: [
          {
            name: "Sarah M.",
            quote: "The entire team made me feel comfortable from the moment I walked in. My dental anxiety is gone, and my smile has never looked better!",
            role: "Patient since 2019",
            rating: 5
          },
          {
            name: "James R.",
            quote: "Professional, thorough, and genuinely caring. They took time to explain everything and made sure I understood my treatment options.",
            role: "Patient since 2020",
            rating: 5
          },
          {
            name: "Maria L.",
            quote: "Best dental experience I've ever had. The office is modern, the staff is friendly, and the results speak for themselves.",
            role: "Patient since 2021",
            rating: 5
          }
        ]
      },
      style: improvedStyles.testimonials
    }],
    tags: ["testimonials", "reviews", "grid"],
    isActive: true
  },
  {
    name: "Featured Testimonial",
    description: "Single highlighted patient testimonial",
    category: "Testimonials",
    content: [{
      id: generateId(),
      type: "testimonials",
      data: {
        heading: "Patient Success Story",
        layout: "featured",
        items: [
          {
            name: "David K.",
            quote: "After years of avoiding the dentist, I finally found a practice where I feel truly cared for. The team's patience and expertise transformed not just my smile, but my entire outlook on dental care. I actually look forward to my appointments now!",
            role: "Smile Makeover Patient",
            rating: 5
          }
        ]
      },
      style: improvedStyles.testimonials
    }],
    tags: ["testimonials", "featured", "story"],
    isActive: true
  },

  // ============================================================================
  // FAQ SECTIONS
  // ============================================================================
  {
    name: "General FAQ",
    description: "Common questions and answers accordion",
    category: "FAQ",
    content: [{
      id: generateId(),
      type: "faq",
      data: {
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "What should I expect during my first visit?",
            answer: "Your first visit includes a comprehensive examination, digital X-rays, and a discussion of your dental health goals. We'll create a personalized treatment plan and answer all your questions. Plan for about 60-90 minutes."
          },
          {
            question: "Do you accept dental insurance?",
            answer: "Yes, we accept most major dental insurance plans. Our team will help verify your coverage and maximize your benefits. We also offer flexible payment options for uninsured patients."
          },
          {
            question: "How often should I visit the dentist?",
            answer: "We recommend checkups and cleanings every six months for most patients. However, some individuals may benefit from more frequent visits based on their specific oral health needs."
          },
          {
            question: "What if I have dental anxiety?",
            answer: "We understand dental anxiety is common and offer various comfort options including sedation dentistry, noise-canceling headphones, and a gentle, patient approach. Your comfort is our priority."
          },
          {
            question: "Do you offer emergency dental services?",
            answer: "Yes, we provide same-day emergency appointments for urgent dental issues. If you're experiencing severe pain, swelling, or trauma, call us immediately and we'll fit you in as soon as possible."
          }
        ]
      },
      style: improvedStyles.faq
    }],
    tags: ["faq", "questions", "general"],
    isActive: true
  },
  {
    name: "Treatment-Specific FAQ",
    description: "FAQ focused on specific treatment questions",
    category: "FAQ",
    content: [{
      id: generateId(),
      type: "faq",
      data: {
        heading: "Treatment Questions Answered",
        items: [
          {
            question: "How long does the treatment take?",
            answer: "Treatment duration varies based on complexity. Simple procedures may take 30-60 minutes, while comprehensive treatments may require multiple visits over several weeks. We'll provide a detailed timeline during your consultation."
          },
          {
            question: "Will the procedure be painful?",
            answer: "We use modern anesthetics and gentle techniques to ensure your comfort. Most patients report minimal to no discomfort during procedures. We also offer sedation options for those who prefer additional relaxation."
          },
          {
            question: "What is the recovery time?",
            answer: "Recovery varies by procedure. Many patients return to normal activities the same day, while more complex treatments may require a few days of rest. We provide detailed aftercare instructions for optimal healing."
          },
          {
            question: "How long will the results last?",
            answer: "With proper care and regular maintenance, most dental work lasts many years. We'll teach you how to care for your treatment and schedule appropriate follow-up visits to ensure lasting results."
          }
        ]
      },
      style: improvedStyles.faq
    }],
    tags: ["faq", "treatment", "procedure"],
    isActive: true
  },

  // ============================================================================
  // PRICING SECTIONS
  // ============================================================================
  {
    name: "Service Pricing Tiers",
    description: "Three-tier pricing display for services",
    category: "Pricing",
    content: [{
      id: generateId(),
      type: "pricing",
      data: {
        heading: "Transparent Pricing",
        plans: [
          {
            name: "Essential Care",
            price: "$99",
            period: "/visit",
            features: [
              "Comprehensive Exam",
              "Digital X-Rays",
              "Professional Cleaning",
              "Oral Cancer Screening",
              "Treatment Planning"
            ],
            buttonText: "Book Now",
            highlighted: false
          },
          {
            name: "Complete Care",
            price: "$199",
            period: "/visit",
            features: [
              "Everything in Essential",
              "Deep Cleaning",
              "Fluoride Treatment",
              "Custom Mouthguard",
              "Priority Scheduling",
              "Extended Warranty"
            ],
            buttonText: "Most Popular",
            highlighted: true
          },
          {
            name: "Premium Care",
            price: "$349",
            period: "/visit",
            features: [
              "Everything in Complete",
              "Teeth Whitening",
              "Emergency Priority",
              "Cosmetic Consultation",
              "Lifetime Adjustments",
              "VIP Scheduling"
            ],
            buttonText: "Get Started",
            highlighted: false
          }
        ]
      },
      style: improvedStyles.pricing
    }],
    tags: ["pricing", "tiers", "services"],
    isActive: true
  },

  // ============================================================================
  // TECHNOLOGY SECTIONS
  // ============================================================================
  {
    name: "Technology Showcase",
    description: "Highlight advanced technology and equipment",
    category: "Technology",
    content: [{
      id: generateId(),
      type: "iconGrid",
      data: {
        heading: "Advanced Technology for Better Care",
        description: "We invest in the latest dental technology to provide you with safer, more comfortable, and more effective treatments",
        columns: 3,
        items: [
          {
            icon: "eye",
            title: "Digital Imaging",
            description: "High-resolution digital X-rays and 3D scans provide detailed views with minimal radiation exposure for accurate diagnosis",
            iconColor: "text-slate-600"
          },
          {
            icon: "zap",
            title: "Laser Dentistry",
            description: "Precise laser treatments for gum therapy and cavity detection mean less discomfort and faster healing times",
            iconColor: "text-slate-600"
          },
          {
            icon: "shield",
            title: "Sterilization Systems",
            description: "Hospital-grade sterilization protocols ensure the highest standards of safety and infection control",
            iconColor: "text-slate-600"
          }
        ]
      },
      style: improvedStyles.iconGrid
    }],
    tags: ["technology", "equipment", "modern"],
    isActive: true
  },
  {
    name: "Technology Detail Section",
    description: "Detailed technology feature with benefits list",
    category: "Technology",
    content: [{
      id: generateId(),
      type: "featureDetail",
      data: {
        heading: "Digital X-Ray Technology",
        content: "Our digital X-ray system represents a significant advancement over traditional film X-rays, providing clearer images with substantially less radiation exposure.",
        imageUrl: "/placeholder.svg",
        imagePosition: "left",
        features: [
          "90% less radiation than traditional X-rays",
          "Instant image display for immediate review",
          "Enhanced detail for accurate diagnosis",
          "Easy sharing with specialists when needed",
          "Environmentally friendly - no chemical processing"
        ]
      },
      style: improvedStyles.featureDetail
    }],
    tags: ["technology", "xray", "digital"],
    isActive: true
  },

  // ============================================================================
  // FULL PAGE TEMPLATES - Complete page layouts
  // ============================================================================
  {
    name: "Complete Service Page",
    description: "Full service page with hero, features, process, testimonials, and CTA",
    category: "Full Pages",
    content: [
      {
        id: generateId(),
        type: "hero",
        data: {
          title: "Professional Dental Care",
          subtitle: "Experience comprehensive dental services delivered with expertise and compassion. Our team is dedicated to helping you achieve optimal oral health.",
          buttonText: "Schedule Consultation",
          buttonLink: "#contact",
          badge: "TRUSTED CARE",
          textAlign: "center"
        },
        style: improvedStyles.hero
      },
      {
        id: generateId(),
        type: "iconGrid",
        data: {
          heading: "Why Choose This Treatment",
          description: "Discover the benefits of our professional approach to dental care",
          columns: 3,
          items: [
            {
              icon: "shield",
              title: "Safe & Effective",
              description: "Proven techniques and materials ensure reliable, long-lasting results",
              iconColor: "text-slate-600"
            },
            {
              icon: "heart",
              title: "Comfortable Experience",
              description: "Gentle approach and modern amenities for a stress-free visit",
              iconColor: "text-slate-600"
            },
            {
              icon: "award",
              title: "Expert Care",
              description: "Skilled professionals with years of specialized experience",
              iconColor: "text-slate-600"
            }
          ]
        },
        style: improvedStyles.iconGrid
      },
      {
        id: generateId(),
        type: "numberedList",
        data: {
          heading: "Treatment Process",
          description: "A clear path to your best smile",
          imageUrl: "/placeholder.svg",
          imagePosition: "right",
          items: [
            {
              title: "Consultation",
              description: "Comprehensive evaluation and personalized treatment planning",
              iconColor: "bg-slate-600 text-white"
            },
            {
              title: "Preparation",
              description: "Careful preparation ensures optimal treatment outcomes",
              iconColor: "bg-slate-600 text-white"
            },
            {
              title: "Treatment",
              description: "Expert care using advanced techniques and technology",
              iconColor: "bg-slate-600 text-white"
            },
            {
              title: "Follow-Up",
              description: "Ongoing support and maintenance for lasting results",
              iconColor: "bg-slate-600 text-white"
            }
          ]
        },
        style: improvedStyles.numberedList
      },
      {
        id: generateId(),
        type: "testimonials",
        data: {
          heading: "Patient Experiences",
          layout: "grid",
          items: [
            {
              name: "Jennifer S.",
              quote: "The results exceeded my expectations. Professional, caring, and thorough from start to finish.",
              role: "Verified Patient",
              rating: 5
            },
            {
              name: "Michael T.",
              quote: "Finally found a dental practice that truly listens. The treatment was comfortable and the results are amazing.",
              role: "Verified Patient",
              rating: 5
            },
            {
              name: "Lisa R.",
              quote: "Exceptional care and attention to detail. I recommend them to everyone I know.",
              role: "Verified Patient",
              rating: 5
            }
          ]
        },
        style: improvedStyles.testimonials
      },
      {
        id: generateId(),
        type: "ctaWithBackground",
        data: {
          heading: "Ready to Get Started?",
          description: "Take the first step toward better dental health. Schedule your consultation today.",
          buttonText: "Book Your Appointment",
          buttonLink: "#contact",
          backgroundImage: "/placeholder.svg",
          overlay: true
        },
        style: improvedStyles.ctaWithBackground
      }
    ],
    tags: ["full-page", "service", "complete"],
    isActive: true
  },

  {
    name: "About Us Page",
    description: "Complete about page with story, values, team, and achievements",
    category: "Full Pages",
    content: [
      {
        id: generateId(),
        type: "hero",
        data: {
          title: "About Our Practice",
          subtitle: "Dedicated to exceptional dental care and building lasting relationships with our patients since 2005",
          textAlign: "center"
        },
        style: { ...improvedStyles.hero, minHeight: '380px' }
      },
      {
        id: generateId(),
        type: "imageText",
        data: {
          heading: "Our Story",
          content: "Founded with a vision to provide compassionate, high-quality dental care, our practice has grown into a trusted healthcare destination for families throughout the community. We believe that everyone deserves access to excellent dental care in a welcoming environment. Our commitment to continuous learning and investment in advanced technology ensures our patients receive the best possible treatment outcomes.",
          imageUrl: "/placeholder.svg",
          imagePosition: "right",
          backgroundColor: "bg-white"
        },
        style: improvedStyles.imageText
      },
      {
        id: generateId(),
        type: "stats",
        data: {
          heading: "Our Impact",
          items: [
            { value: "18+", label: "Years Serving Community", iconColor: "text-slate-700" },
            { value: "25,000+", label: "Patients Treated", iconColor: "text-slate-700" },
            { value: "12", label: "Team Members", iconColor: "text-slate-700" },
            { value: "99%", label: "Would Recommend", iconColor: "text-slate-700" }
          ]
        },
        style: { ...improvedStyles.stats, backgroundColor: '#f8fafc' }
      },
      {
        id: generateId(),
        type: "iconGrid",
        data: {
          heading: "Our Core Values",
          description: "The principles that guide everything we do",
          columns: 3,
          items: [
            {
              icon: "heart",
              title: "Compassion",
              description: "We treat every patient with kindness, empathy, and respect",
              iconColor: "text-slate-600"
            },
            {
              icon: "award",
              title: "Excellence",
              description: "We strive for the highest standards in clinical care and service",
              iconColor: "text-slate-600"
            },
            {
              icon: "users",
              title: "Community",
              description: "We're committed to giving back and supporting our neighbors",
              iconColor: "text-slate-600"
            }
          ]
        },
        style: improvedStyles.iconGrid
      },
      {
        id: generateId(),
        type: "cta",
        data: {
          heading: "Join Our Family of Patients",
          description: "Experience the difference of truly personalized dental care",
          buttonText: "Schedule Your Visit",
          buttonLink: "#contact",
          backgroundColor: "bg-slate-100"
        },
        style: improvedStyles.cta
      }
    ],
    tags: ["full-page", "about", "practice"],
    isActive: true
  },
  {
    name: "Contact Page",
    description: "Contact page with information and call-to-action",
    category: "Full Pages",
    content: [
      {
        id: generateId(),
        type: "hero",
        data: {
          title: "Get In Touch",
          subtitle: "We're here to answer your questions and help you schedule your visit",
          textAlign: "center"
        },
        style: { ...improvedStyles.hero, minHeight: '320px' }
      },
      {
        id: generateId(),
        type: "iconGrid",
        data: {
          heading: "Contact Information",
          columns: 3,
          items: [
            {
              icon: "phone",
              title: "Phone",
              description: "(555) 123-4567",
              iconColor: "text-slate-600"
            },
            {
              icon: "mail",
              title: "Email",
              description: "info@dentalcare.com",
              iconColor: "text-slate-600"
            },
            {
              icon: "map-pin",
              title: "Location",
              description: "123 Main Street, Suite 100, City, State 12345",
              iconColor: "text-slate-600"
            }
          ]
        },
        style: improvedStyles.iconGrid
      },
      {
        id: generateId(),
        type: "iconGrid",
        data: {
          heading: "Office Hours",
          columns: 2,
          items: [
            {
              icon: "clock",
              title: "Weekdays",
              description: "Monday - Friday: 8:00 AM - 6:00 PM",
              iconColor: "text-slate-600"
            },
            {
              icon: "clock",
              title: "Weekends",
              description: "Saturday: 9:00 AM - 2:00 PM | Sunday: Closed",
              iconColor: "text-slate-600"
            }
          ]
        },
        style: { ...improvedStyles.iconGrid, backgroundColor: '#f8fafc' }
      },
      {
        id: generateId(),
        type: "cta",
        data: {
          heading: "Ready to Schedule?",
          description: "Book your appointment online or give us a call",
          buttonText: "Book Online",
          buttonLink: "#booking",
          backgroundColor: "bg-slate-700"
        },
        style: { ...improvedStyles.cta, color: '#ffffff' }
      }
    ],
    tags: ["full-page", "contact", "information"],
    isActive: true
  },

  // ============================================================================
  // NEW TEMPLATE TYPES - Additional variety
  // ============================================================================
  {
    name: "Before & After Showcase",
    description: "Display treatment results with before/after comparison",
    category: "Gallery",
    content: [
      {
        id: generateId(),
        type: "imageText",
        data: {
          heading: "Real Results, Real Patients",
          content: "See the transformative results our patients have achieved. Every smile tells a story of renewed confidence and improved oral health. These results represent our commitment to excellence and personalized care.",
          imageUrl: "/placeholder.svg",
          imagePosition: "right",
          buttonText: "View More Results",
          buttonLink: "#gallery",
          backgroundColor: "bg-white"
        },
        style: improvedStyles.imageText
      },
      {
        id: generateId(),
        type: "testimonials",
        data: {
          heading: "Patient Transformations",
          layout: "grid",
          items: [
            {
              name: "Complete Smile Makeover",
              quote: "Veneers, whitening, and alignment correction combined to create a stunning, natural-looking smile",
              role: "Treatment Duration: 3 months",
              rating: 5
            },
            {
              name: "Dental Implant Restoration",
              quote: "Single tooth replacement that blends seamlessly with natural teeth for a complete smile",
              role: "Treatment Duration: 4 months",
              rating: 5
            },
            {
              name: "Invisalign Treatment",
              quote: "Straightened teeth without traditional braces, achieving beautiful alignment discreetly",
              role: "Treatment Duration: 12 months",
              rating: 5
            }
          ]
        },
        style: improvedStyles.testimonials
      }
    ],
    tags: ["gallery", "before-after", "results"],
    isActive: true
  },
  {
    name: "Insurance & Payment Info",
    description: "Clear information about insurance and payment options",
    category: "Information",
    content: [
      {
        id: generateId(),
        type: "iconGrid",
        data: {
          heading: "Insurance & Payment Options",
          description: "We make quality dental care accessible with flexible payment solutions",
          columns: 3,
          items: [
            {
              icon: "shield",
              title: "Insurance Accepted",
              description: "We work with most major dental insurance providers and will help maximize your benefits",
              iconColor: "text-slate-600"
            },
            {
              icon: "check",
              title: "Flexible Financing",
              description: "Interest-free payment plans available to fit your budget and make treatment affordable",
              iconColor: "text-slate-600"
            },
            {
              icon: "heart",
              title: "Membership Plan",
              description: "No insurance? Our in-house membership plan offers significant savings on all services",
              iconColor: "text-slate-600"
            }
          ]
        },
        style: improvedStyles.iconGrid
      },
      {
        id: generateId(),
        type: "faq",
        data: {
          heading: "Payment Questions",
          items: [
            {
              question: "What insurance plans do you accept?",
              answer: "We accept most major dental insurance plans including Delta Dental, Cigna, Aetna, MetLife, and many others. Contact us to verify your specific coverage."
            },
            {
              question: "Do you offer payment plans?",
              answer: "Yes! We offer interest-free financing through CareCredit and in-house payment plans for qualifying treatments. Our team will help you find the best option."
            },
            {
              question: "What if I don't have insurance?",
              answer: "We offer a membership plan that provides significant discounts on all services. We also accept all major credit cards and offer flexible payment arrangements."
            }
          ]
        },
        style: improvedStyles.faq
      }
    ],
    tags: ["information", "insurance", "payment"],
    isActive: true
  },

  {
    name: "Emergency Services Section",
    description: "Urgent care information with clear call-to-action",
    category: "Emergency",
    content: [
      {
        id: generateId(),
        type: "hero",
        data: {
          title: "Emergency Dental Care",
          subtitle: "Dental emergencies don't wait, and neither do we. Same-day appointments available for urgent dental needs.",
          buttonText: "Call Now: (555) 123-4567",
          buttonLink: "tel:5551234567",
          badge: "AVAILABLE 24/7",
          textAlign: "center"
        },
        style: { ...improvedStyles.hero, backgroundColor: '#334155' }
      },
      {
        id: generateId(),
        type: "iconGrid",
        data: {
          heading: "Common Dental Emergencies",
          description: "If you're experiencing any of these issues, contact us immediately",
          columns: 4,
          items: [
            {
              icon: "zap",
              title: "Severe Toothache",
              description: "Persistent pain that doesn't respond to over-the-counter medication",
              iconColor: "text-slate-600"
            },
            {
              icon: "shield",
              title: "Broken Tooth",
              description: "Chipped, cracked, or fractured teeth from injury or accident",
              iconColor: "text-slate-600"
            },
            {
              icon: "heart",
              title: "Knocked-Out Tooth",
              description: "Time-sensitive emergency - quick action can save your tooth",
              iconColor: "text-slate-600"
            },
            {
              icon: "activity",
              title: "Swelling or Abscess",
              description: "Facial swelling or signs of infection requiring immediate care",
              iconColor: "text-slate-600"
            }
          ]
        },
        style: improvedStyles.iconGrid
      },
      {
        id: generateId(),
        type: "timeline",
        data: {
          heading: "What to Do in a Dental Emergency",
          items: [
            {
              title: "Stay Calm",
              description: "Take a deep breath. Most dental emergencies can be successfully treated when addressed promptly.",
              iconColor: "bg-slate-600 text-white"
            },
            {
              title: "Call Us Immediately",
              description: "Contact our emergency line. We'll provide guidance and schedule you for the earliest available appointment.",
              iconColor: "bg-slate-600 text-white"
            },
            {
              title: "Follow Instructions",
              description: "Our team will give you specific instructions to manage your situation until you can be seen.",
              iconColor: "bg-slate-600 text-white"
            },
            {
              title: "Get Treatment",
              description: "We'll provide prompt, effective treatment to relieve your pain and address the underlying issue.",
              iconColor: "bg-slate-600 text-white"
            }
          ]
        },
        style: improvedStyles.timeline
      }
    ],
    tags: ["emergency", "urgent", "24-7"],
    isActive: true
  },
  {
    name: "Team Introduction",
    description: "Introduce your dental team with profiles",
    category: "Team",
    content: [
      {
        id: generateId(),
        type: "hero",
        data: {
          title: "Meet Our Team",
          subtitle: "Dedicated professionals committed to your dental health and comfort",
          textAlign: "center"
        },
        style: { ...improvedStyles.hero, minHeight: '320px' }
      },
      {
        id: generateId(),
        type: "iconGrid",
        data: {
          heading: "Our Dental Professionals",
          description: "A team of experienced, caring individuals ready to serve you",
          columns: 3,
          items: [
            {
              icon: "award",
              title: "Dr. Sarah Johnson",
              description: "Lead Dentist with 15+ years of experience specializing in cosmetic and restorative dentistry",
              iconColor: "text-slate-600"
            },
            {
              icon: "award",
              title: "Dr. Michael Chen",
              description: "Associate Dentist focusing on family dentistry and pediatric care",
              iconColor: "text-slate-600"
            },
            {
              icon: "heart",
              title: "Emily Rodriguez",
              description: "Dental Hygienist dedicated to preventive care and patient education",
              iconColor: "text-slate-600"
            }
          ]
        },
        style: improvedStyles.iconGrid
      },
      {
        id: generateId(),
        type: "imageText",
        data: {
          heading: "Why Our Team Stands Out",
          content: "Our team combines extensive training with genuine compassion. We believe in treating patients like family, taking time to listen to concerns and explain treatment options clearly. Continuous education keeps us at the forefront of dental advances, ensuring you receive the most effective, comfortable care available.",
          imageUrl: "/placeholder.svg",
          imagePosition: "right",
          backgroundColor: "bg-slate-50"
        },
        style: improvedStyles.imageText
      }
    ],
    tags: ["team", "staff", "doctors"],
    isActive: true
  },

  {
    name: "New Patient Welcome",
    description: "Welcome section for new patients with what to expect",
    category: "Information",
    content: [
      {
        id: generateId(),
        type: "hero",
        data: {
          title: "Welcome New Patients",
          subtitle: "We're excited to meet you! Here's everything you need to know for your first visit.",
          buttonText: "Download New Patient Forms",
          buttonLink: "#forms",
          textAlign: "center"
        },
        style: { ...improvedStyles.hero, minHeight: '380px' }
      },
      {
        id: generateId(),
        type: "timeline",
        data: {
          heading: "Your First Visit",
          items: [
            {
              title: "Arrive 15 Minutes Early",
              description: "This gives you time to complete any remaining paperwork and settle in comfortably.",
              iconColor: "bg-slate-600 text-white"
            },
            {
              title: "Meet Your Care Team",
              description: "Our friendly staff will introduce themselves and answer any questions you have.",
              iconColor: "bg-slate-600 text-white"
            },
            {
              title: "Comprehensive Examination",
              description: "Your dentist will perform a thorough evaluation including digital X-rays and oral cancer screening.",
              iconColor: "bg-slate-600 text-white"
            },
            {
              title: "Personalized Treatment Plan",
              description: "We'll discuss findings and create a customized plan tailored to your needs and goals.",
              iconColor: "bg-slate-600 text-white"
            }
          ]
        },
        style: improvedStyles.timeline
      },
      {
        id: generateId(),
        type: "iconGrid",
        data: {
          heading: "What to Bring",
          columns: 4,
          items: [
            {
              icon: "check",
              title: "Photo ID",
              description: "Valid driver's license or government-issued ID",
              iconColor: "text-slate-600"
            },
            {
              icon: "check",
              title: "Insurance Card",
              description: "Current dental insurance information",
              iconColor: "text-slate-600"
            },
            {
              icon: "check",
              title: "Medical History",
              description: "List of medications and health conditions",
              iconColor: "text-slate-600"
            },
            {
              icon: "check",
              title: "Questions",
              description: "Any concerns you'd like to discuss",
              iconColor: "text-slate-600"
            }
          ]
        },
        style: { ...improvedStyles.iconGrid, backgroundColor: '#f8fafc' }
      }
    ],
    tags: ["new-patient", "welcome", "first-visit"],
    isActive: true
  },
  {
    name: "Comfort & Amenities",
    description: "Showcase patient comfort features and amenities",
    category: "Information",
    content: [
      {
        id: generateId(),
        type: "imageText",
        data: {
          heading: "Your Comfort Is Our Priority",
          content: "We've designed every aspect of our practice with your comfort in mind. From our welcoming reception area to our state-of-the-art treatment rooms, you'll experience dental care in a relaxing, spa-like environment.",
          imageUrl: "/placeholder.svg",
          imagePosition: "left",
          backgroundColor: "bg-white"
        },
        style: improvedStyles.imageText
      },
      {
        id: generateId(),
        type: "iconGrid",
        data: {
          heading: "Patient Amenities",
          description: "Little touches that make a big difference",
          columns: 4,
          items: [
            {
              icon: "heart",
              title: "Sedation Options",
              description: "Nitrous oxide and oral sedation for anxious patients",
              iconColor: "text-slate-600"
            },
            {
              icon: "eye",
              title: "Entertainment",
              description: "TVs and headphones to help you relax during treatment",
              iconColor: "text-slate-600"
            },
            {
              icon: "shield",
              title: "Comfort Items",
              description: "Blankets, pillows, and neck support for your comfort",
              iconColor: "text-slate-600"
            },
            {
              icon: "star",
              title: "Refreshments",
              description: "Complimentary beverages in our comfortable waiting area",
              iconColor: "text-slate-600"
            }
          ]
        },
        style: improvedStyles.iconGrid
      }
    ],
    tags: ["comfort", "amenities", "relaxation"],
    isActive: true
  },

  {
    name: "Service Comparison",
    description: "Compare treatment options side by side",
    category: "Information",
    content: [
      {
        id: generateId(),
        type: "iconGrid",
        data: {
          heading: "Treatment Options Compared",
          description: "Understanding your choices helps you make informed decisions about your care",
          columns: 3,
          items: [
            {
              icon: "star",
              title: "Option A: Conservative",
              description: "Minimal intervention approach focusing on preservation. Best for early-stage issues. Lower cost, shorter treatment time.",
              iconColor: "text-slate-600"
            },
            {
              icon: "award",
              title: "Option B: Comprehensive",
              description: "Complete treatment addressing all concerns. Best for moderate issues. Balanced cost and results.",
              iconColor: "text-slate-600"
            },
            {
              icon: "zap",
              title: "Option C: Premium",
              description: "Advanced techniques and materials for optimal results. Best for complex cases. Highest quality outcomes.",
              iconColor: "text-slate-600"
            }
          ]
        },
        style: improvedStyles.iconGrid
      },
      {
        id: generateId(),
        type: "faq",
        data: {
          heading: "Choosing the Right Option",
          items: [
            {
              question: "How do I know which option is right for me?",
              answer: "During your consultation, we'll evaluate your specific situation and discuss the pros and cons of each approach. We'll help you understand which option best fits your needs, goals, and budget."
            },
            {
              question: "Can I change my treatment plan later?",
              answer: "Yes, treatment plans can often be adjusted as we progress. We'll keep you informed and involved in decisions throughout your care."
            }
          ]
        },
        style: improvedStyles.faq
      }
    ],
    tags: ["comparison", "options", "treatment"],
    isActive: true
  },
  {
    name: "Dental Tips & Education",
    description: "Educational content about oral health",
    category: "Education",
    content: [
      {
        id: generateId(),
        type: "iconGrid",
        data: {
          heading: "Oral Health Tips",
          description: "Simple habits for a healthier smile",
          columns: 4,
          items: [
            {
              icon: "check",
              title: "Brush Twice Daily",
              description: "Use fluoride toothpaste and brush for at least two minutes each time",
              iconColor: "text-slate-600"
            },
            {
              icon: "check",
              title: "Floss Daily",
              description: "Clean between teeth where your brush can't reach",
              iconColor: "text-slate-600"
            },
            {
              icon: "check",
              title: "Limit Sugar",
              description: "Reduce sugary snacks and drinks that feed harmful bacteria",
              iconColor: "text-slate-600"
            },
            {
              icon: "check",
              title: "Regular Checkups",
              description: "Visit us every six months for professional cleaning and examination",
              iconColor: "text-slate-600"
            }
          ]
        },
        style: improvedStyles.iconGrid
      },
      {
        id: generateId(),
        type: "faq",
        data: {
          heading: "Common Questions About Oral Health",
          items: [
            {
              question: "How often should I replace my toothbrush?",
              answer: "Replace your toothbrush every 3-4 months, or sooner if the bristles are frayed. A worn toothbrush won't clean your teeth effectively."
            },
            {
              question: "Is mouthwash necessary?",
              answer: "While not essential, therapeutic mouthwash can help reduce plaque, prevent gingivitis, and freshen breath. Ask us for recommendations based on your needs."
            },
            {
              question: "What foods are good for my teeth?",
              answer: "Crunchy fruits and vegetables, dairy products, and foods high in calcium and phosphorus support dental health. Water is the best beverage choice."
            }
          ]
        },
        style: improvedStyles.faq
      }
    ],
    tags: ["education", "tips", "oral-health"],
    isActive: true
  },

  {
    name: "Specialty Service Detail",
    description: "Detailed page for a specific specialty service",
    category: "Service Pages",
    content: [
      {
        id: generateId(),
        type: "hero",
        data: {
          title: "Cosmetic Dentistry",
          subtitle: "Transform your smile with our comprehensive cosmetic dental services. From subtle enhancements to complete makeovers, we help you achieve the smile you've always wanted.",
          buttonText: "Schedule Consultation",
          buttonLink: "#contact",
          badge: "SMILE TRANSFORMATION",
          textAlign: "center"
        },
        style: improvedStyles.hero
      },
      {
        id: generateId(),
        type: "imageText",
        data: {
          heading: "What Is Cosmetic Dentistry?",
          content: "Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile. While traditional dentistry addresses oral health issues, cosmetic procedures enhance aesthetics while often improving function as well. Our approach combines artistry with dental science to create natural-looking results that complement your unique features.",
          imageUrl: "/placeholder.svg",
          imagePosition: "right",
          backgroundColor: "bg-white"
        },
        style: improvedStyles.imageText
      },
      {
        id: generateId(),
        type: "iconGrid",
        data: {
          heading: "Our Cosmetic Services",
          description: "Comprehensive options to enhance your smile",
          columns: 3,
          items: [
            {
              icon: "star",
              title: "Teeth Whitening",
              description: "Professional whitening treatments that deliver dramatic results safely and effectively",
              iconColor: "text-slate-600"
            },
            {
              icon: "shield",
              title: "Porcelain Veneers",
              description: "Custom-crafted shells that transform the appearance of your front teeth",
              iconColor: "text-slate-600"
            },
            {
              icon: "heart",
              title: "Dental Bonding",
              description: "Quick, affordable solution for chips, gaps, and discoloration",
              iconColor: "text-slate-600"
            },
            {
              icon: "award",
              title: "Smile Makeovers",
              description: "Comprehensive treatment plans combining multiple procedures for total transformation",
              iconColor: "text-slate-600"
            },
            {
              icon: "check",
              title: "Gum Contouring",
              description: "Reshape your gum line for a more balanced, attractive smile",
              iconColor: "text-slate-600"
            },
            {
              icon: "zap",
              title: "Clear Aligners",
              description: "Straighten teeth discreetly without traditional metal braces",
              iconColor: "text-slate-600"
            }
          ]
        },
        style: improvedStyles.iconGrid
      },
      {
        id: generateId(),
        type: "featureDetail",
        data: {
          heading: "The Cosmetic Consultation",
          content: "Your journey to a beautiful smile begins with a comprehensive consultation. We'll discuss your goals, evaluate your oral health, and create a customized treatment plan.",
          imageUrl: "/placeholder.svg",
          imagePosition: "left",
          features: [
            "Digital smile preview to visualize potential results",
            "Detailed discussion of treatment options and timelines",
            "Transparent pricing with financing options available",
            "Before and after photos of similar cases",
            "Personalized recommendations based on your unique needs"
          ]
        },
        style: improvedStyles.featureDetail
      },
      {
        id: generateId(),
        type: "testimonials",
        data: {
          heading: "Smile Transformations",
          layout: "grid",
          items: [
            {
              name: "Amanda K.",
              quote: "My veneers look so natural - people can't believe they're not my real teeth. The confidence boost has been incredible!",
              role: "Veneer Patient",
              rating: 5
            },
            {
              name: "Robert M.",
              quote: "The whitening results exceeded my expectations. My smile is brighter than it's been in years.",
              role: "Whitening Patient",
              rating: 5
            },
            {
              name: "Christina L.",
              quote: "From consultation to final result, the entire experience was exceptional. I finally love my smile!",
              role: "Smile Makeover Patient",
              rating: 5
            }
          ]
        },
        style: improvedStyles.testimonials
      },
      {
        id: generateId(),
        type: "ctaWithBackground",
        data: {
          heading: "Ready for Your Smile Transformation?",
          description: "Schedule your cosmetic consultation and discover what's possible for your smile.",
          buttonText: "Book Consultation",
          buttonLink: "#contact",
          backgroundImage: "/placeholder.svg",
          overlay: true
        },
        style: improvedStyles.ctaWithBackground
      }
    ],
    tags: ["service", "cosmetic", "detailed"],
    isActive: true
  },

  {
    name: "Preventive Care Page",
    description: "Complete preventive dentistry service page",
    category: "Service Pages",
    content: [
      {
        id: generateId(),
        type: "hero",
        data: {
          title: "Preventive Dental Care",
          subtitle: "The foundation of a healthy smile. Regular checkups and cleanings help prevent problems before they start, saving you time, money, and discomfort.",
          buttonText: "Schedule Checkup",
          buttonLink: "#contact",
          badge: "FOUNDATION OF HEALTH",
          textAlign: "center"
        },
        style: improvedStyles.hero
      },
      {
        id: generateId(),
        type: "iconGrid",
        data: {
          heading: "Why Prevention Matters",
          description: "Investing in preventive care pays dividends for your oral and overall health",
          columns: 3,
          items: [
            {
              icon: "shield",
              title: "Catch Problems Early",
              description: "Regular exams detect issues when they're small and easier to treat",
              iconColor: "text-slate-600"
            },
            {
              icon: "heart",
              title: "Protect Overall Health",
              description: "Oral health is linked to heart disease, diabetes, and other conditions",
              iconColor: "text-slate-600"
            },
            {
              icon: "check",
              title: "Save Money",
              description: "Prevention costs far less than treating advanced dental problems",
              iconColor: "text-slate-600"
            }
          ]
        },
        style: improvedStyles.iconGrid
      },
      {
        id: generateId(),
        type: "numberedList",
        data: {
          heading: "Our Preventive Services",
          description: "Comprehensive care to keep your smile healthy",
          imageUrl: "/placeholder.svg",
          imagePosition: "right",
          items: [
            {
              title: "Comprehensive Examinations",
              description: "Thorough evaluation of teeth, gums, bite, and oral tissues to assess your overall dental health",
              iconColor: "bg-slate-600 text-white"
            },
            {
              title: "Professional Cleanings",
              description: "Remove plaque and tartar buildup that brushing and flossing can't reach",
              iconColor: "bg-slate-600 text-white"
            },
            {
              title: "Digital X-Rays",
              description: "Low-radiation imaging to detect hidden problems between teeth and below the gum line",
              iconColor: "bg-slate-600 text-white"
            },
            {
              title: "Oral Cancer Screening",
              description: "Early detection screening included with every exam for your peace of mind",
              iconColor: "bg-slate-600 text-white"
            },
            {
              title: "Fluoride Treatments",
              description: "Strengthen enamel and protect against decay with professional fluoride application",
              iconColor: "bg-slate-600 text-white"
            }
          ]
        },
        style: improvedStyles.numberedList
      },
      {
        id: generateId(),
        type: "faq",
        data: {
          heading: "Preventive Care Questions",
          items: [
            {
              question: "How often should I have a dental checkup?",
              answer: "Most patients benefit from checkups every six months. However, some individuals may need more frequent visits based on their oral health status. We'll recommend a schedule that's right for you."
            },
            {
              question: "What happens during a professional cleaning?",
              answer: "Our hygienist removes plaque and tartar, polishes your teeth, and provides personalized oral hygiene instruction. We also check for signs of gum disease and other issues."
            },
            {
              question: "Are dental X-rays safe?",
              answer: "Yes, our digital X-rays use up to 90% less radiation than traditional film X-rays. We only take X-rays when necessary for diagnosis and treatment planning."
            }
          ]
        },
        style: improvedStyles.faq
      },
      {
        id: generateId(),
        type: "cta",
        data: {
          heading: "Due for a Checkup?",
          description: "Don't wait until you have a problem. Schedule your preventive care appointment today.",
          buttonText: "Book Your Visit",
          buttonLink: "#contact",
          backgroundColor: "bg-slate-100"
        },
        style: improvedStyles.cta
      }
    ],
    tags: ["service", "preventive", "checkup"],
    isActive: true
  },

  {
    name: "Restorative Dentistry Page",
    description: "Complete restorative dentistry service page",
    category: "Service Pages",
    content: [
      {
        id: generateId(),
        type: "hero",
        data: {
          title: "Restorative Dentistry",
          subtitle: "Repair, restore, and rebuild your smile. Our restorative treatments bring damaged or missing teeth back to full function and natural appearance.",
          buttonText: "Explore Options",
          buttonLink: "#services",
          badge: "RESTORE YOUR SMILE",
          textAlign: "center"
        },
        style: improvedStyles.hero
      },
      {
        id: generateId(),
        type: "iconGrid",
        data: {
          heading: "Restorative Solutions",
          description: "Comprehensive treatments to address any dental concern",
          columns: 3,
          items: [
            {
              icon: "shield",
              title: "Dental Fillings",
              description: "Tooth-colored composite fillings that blend seamlessly with your natural teeth",
              iconColor: "text-slate-600"
            },
            {
              icon: "award",
              title: "Dental Crowns",
              description: "Custom caps that restore strength and appearance to damaged teeth",
              iconColor: "text-slate-600"
            },
            {
              icon: "heart",
              title: "Dental Bridges",
              description: "Replace missing teeth with natural-looking fixed restorations",
              iconColor: "text-slate-600"
            },
            {
              icon: "zap",
              title: "Dental Implants",
              description: "Permanent tooth replacement that looks, feels, and functions like natural teeth",
              iconColor: "text-slate-600"
            },
            {
              icon: "check",
              title: "Root Canal Therapy",
              description: "Save infected teeth and eliminate pain with gentle endodontic treatment",
              iconColor: "text-slate-600"
            },
            {
              icon: "star",
              title: "Dentures",
              description: "Full and partial dentures to restore your complete smile",
              iconColor: "text-slate-600"
            }
          ]
        },
        style: improvedStyles.iconGrid
      },
      {
        id: generateId(),
        type: "featureDetail",
        data: {
          heading: "Modern Materials & Techniques",
          content: "Today's restorative dentistry offers solutions that are stronger, more natural-looking, and longer-lasting than ever before.",
          imageUrl: "/placeholder.svg",
          imagePosition: "left",
          features: [
            "Tooth-colored materials that match your natural teeth",
            "Digital impressions for precise, comfortable fittings",
            "Same-day crowns with CAD/CAM technology",
            "Biocompatible materials for optimal healing",
            "Minimally invasive techniques that preserve tooth structure"
          ]
        },
        style: improvedStyles.featureDetail
      },
      {
        id: generateId(),
        type: "timeline",
        data: {
          heading: "The Restoration Process",
          items: [
            {
              title: "Evaluation",
              description: "Comprehensive examination to assess damage and determine the best treatment approach",
              iconColor: "bg-slate-600 text-white"
            },
            {
              title: "Treatment Planning",
              description: "Detailed discussion of options, timeline, and costs so you can make informed decisions",
              iconColor: "bg-slate-600 text-white"
            },
            {
              title: "Preparation",
              description: "Gentle preparation of the tooth or area to receive the restoration",
              iconColor: "bg-slate-600 text-white"
            },
            {
              title: "Restoration",
              description: "Precise placement of your custom restoration for optimal fit and function",
              iconColor: "bg-slate-600 text-white"
            },
            {
              title: "Follow-Up",
              description: "Ensure proper healing and make any necessary adjustments for your comfort",
              iconColor: "bg-slate-600 text-white"
            }
          ]
        },
        style: improvedStyles.timeline
      },
      {
        id: generateId(),
        type: "ctaWithBackground",
        data: {
          heading: "Ready to Restore Your Smile?",
          description: "Schedule a consultation to discuss your restorative options.",
          buttonText: "Book Consultation",
          buttonLink: "#contact",
          backgroundImage: "/placeholder.svg",
          overlay: true
        },
        style: improvedStyles.ctaWithBackground
      }
    ],
    tags: ["service", "restorative", "repair"],
    isActive: true
  },

  {
    name: "Family Dentistry Page",
    description: "Family-focused dental services page",
    category: "Service Pages",
    content: [
      {
        id: generateId(),
        type: "hero",
        data: {
          title: "Family Dentistry",
          subtitle: "Comprehensive dental care for every member of your family, from toddlers to grandparents. One convenient location for all your family's dental needs.",
          buttonText: "Schedule Family Visit",
          buttonLink: "#contact",
          badge: "ALL AGES WELCOME",
          textAlign: "center"
        },
        style: improvedStyles.hero
      },
      {
        id: generateId(),
        type: "iconGrid",
        data: {
          heading: "Care for Every Age",
          description: "Specialized attention for each stage of life",
          columns: 4,
          items: [
            {
              icon: "heart",
              title: "Children",
              description: "Gentle, fun visits that build positive dental habits early",
              iconColor: "text-slate-600"
            },
            {
              icon: "users",
              title: "Teens",
              description: "Orthodontics, sports guards, and wisdom teeth management",
              iconColor: "text-slate-600"
            },
            {
              icon: "award",
              title: "Adults",
              description: "Preventive care, cosmetic options, and restorative treatments",
              iconColor: "text-slate-600"
            },
            {
              icon: "shield",
              title: "Seniors",
              description: "Specialized care addressing age-related dental concerns",
              iconColor: "text-slate-600"
            }
          ]
        },
        style: improvedStyles.iconGrid
      },
      {
        id: generateId(),
        type: "imageText",
        data: {
          heading: "A Welcoming Environment for All",
          content: "We understand that visiting the dentist can be stressful for some family members. That's why we've created a warm, welcoming environment where everyone feels comfortable. Our patient, friendly team takes extra time with anxious patients and makes dental visits a positive experience for children.",
          imageUrl: "/placeholder.svg",
          imagePosition: "right",
          backgroundColor: "bg-slate-50"
        },
        style: improvedStyles.imageText
      },
      {
        id: generateId(),
        type: "featureDetail",
        data: {
          heading: "Convenience for Busy Families",
          content: "We make it easy to keep your whole family's dental health on track.",
          imageUrl: "/placeholder.svg",
          imagePosition: "left",
          features: [
            "Back-to-back appointments for multiple family members",
            "Early morning and evening hours available",
            "Online scheduling and appointment reminders",
            "Family-friendly waiting area with activities for kids",
            "Flexible payment options and family discounts"
          ]
        },
        style: improvedStyles.featureDetail
      },
      {
        id: generateId(),
        type: "testimonials",
        data: {
          heading: "Families Love Us",
          layout: "grid",
          items: [
            {
              name: "The Martinez Family",
              quote: "Finding a dentist that's great with our kids AND provides excellent care for us adults has been a game-changer. We actually look forward to our visits!",
              role: "Patients since 2018",
              rating: 5
            },
            {
              name: "The Thompson Family",
              quote: "The convenience of scheduling all our appointments together saves so much time. And the staff remembers all our names!",
              role: "Patients since 2020",
              rating: 5
            }
          ]
        },
        style: improvedStyles.testimonials
      },
      {
        id: generateId(),
        type: "cta",
        data: {
          heading: "Bring Your Whole Family",
          description: "Schedule appointments for the whole family and experience the convenience of comprehensive care under one roof.",
          buttonText: "Book Family Appointments",
          buttonLink: "#contact",
          backgroundColor: "bg-slate-100"
        },
        style: improvedStyles.cta
      }
    ],
    tags: ["service", "family", "all-ages"],
    isActive: true
  },

  {
    name: "Sedation Dentistry Page",
    description: "Sedation options for anxious patients",
    category: "Service Pages",
    content: [
      {
        id: generateId(),
        type: "hero",
        data: {
          title: "Sedation Dentistry",
          subtitle: "Relax through your dental treatment. Our sedation options help anxious patients receive the care they need in complete comfort.",
          buttonText: "Learn About Options",
          buttonLink: "#options",
          badge: "ANXIETY-FREE DENTISTRY",
          textAlign: "center"
        },
        style: improvedStyles.hero
      },
      {
        id: generateId(),
        type: "imageText",
        data: {
          heading: "Dental Anxiety Is Common",
          content: "If the thought of visiting the dentist makes you nervous, you're not alone. Millions of people experience dental anxiety, and many avoid necessary care as a result. Sedation dentistry allows you to receive treatment while feeling calm and relaxed, often with little or no memory of the procedure.",
          imageUrl: "/placeholder.svg",
          imagePosition: "right",
          backgroundColor: "bg-white"
        },
        style: improvedStyles.imageText
      },
      {
        id: generateId(),
        type: "iconGrid",
        data: {
          heading: "Sedation Options",
          description: "We offer multiple levels of sedation to match your needs",
          columns: 3,
          items: [
            {
              icon: "heart",
              title: "Nitrous Oxide",
              description: "Mild sedation that helps you relax while remaining fully conscious. Effects wear off quickly after treatment.",
              iconColor: "text-slate-600"
            },
            {
              icon: "shield",
              title: "Oral Sedation",
              description: "Moderate sedation via pill taken before your appointment. You'll feel drowsy but can still respond to instructions.",
              iconColor: "text-slate-600"
            },
            {
              icon: "zap",
              title: "IV Sedation",
              description: "Deep sedation for extensive procedures or severe anxiety. You'll have little to no memory of treatment.",
              iconColor: "text-slate-600"
            }
          ]
        },
        style: improvedStyles.iconGrid
      },
      {
        id: generateId(),
        type: "featureDetail",
        data: {
          heading: "Is Sedation Right for You?",
          content: "Sedation dentistry may be ideal if you experience any of the following:",
          imageUrl: "/placeholder.svg",
          imagePosition: "left",
          features: [
            "Dental anxiety or fear that prevents you from seeking care",
            "Sensitive gag reflex that makes treatment uncomfortable",
            "Difficulty getting numb with local anesthesia",
            "Need for extensive dental work in fewer appointments",
            "Physical conditions that make sitting still difficult"
          ]
        },
        style: improvedStyles.featureDetail
      },
      {
        id: generateId(),
        type: "faq",
        data: {
          heading: "Sedation Questions",
          items: [
            {
              question: "Is sedation dentistry safe?",
              answer: "Yes, when administered by trained professionals. We carefully review your medical history and monitor you throughout the procedure to ensure your safety."
            },
            {
              question: "Will I be unconscious?",
              answer: "It depends on the level of sedation. With nitrous oxide and oral sedation, you remain conscious but deeply relaxed. IV sedation may result in a sleep-like state."
            },
            {
              question: "How long do the effects last?",
              answer: "Nitrous oxide wears off within minutes. Oral and IV sedation effects can last several hours, so you'll need someone to drive you home."
            }
          ]
        },
        style: improvedStyles.faq
      },
      {
        id: generateId(),
        type: "cta",
        data: {
          heading: "Don't Let Fear Hold You Back",
          description: "Schedule a consultation to discuss which sedation option is right for you.",
          buttonText: "Schedule Consultation",
          buttonLink: "#contact",
          backgroundColor: "bg-slate-100"
        },
        style: improvedStyles.cta
      }
    ],
    tags: ["service", "sedation", "anxiety"],
    isActive: true
  },
  {
    name: "Simple Text Section",
    description: "Clean text content section for detailed information",
    category: "Content Sections",
    content: [{
      id: generateId(),
      type: "imageText",
      data: {
        heading: "Understanding Your Treatment",
        content: "Every patient's situation is unique, and we take time to ensure you fully understand your treatment options. During your consultation, we'll explain the procedure in detail, discuss expected outcomes, and answer all your questions. Our goal is for you to feel confident and informed about your dental care decisions. We believe that educated patients make the best choices for their oral health.",
        imageUrl: "/placeholder.svg",
        imagePosition: "left",
        backgroundColor: "bg-white"
      },
      style: improvedStyles.imageText
    }],
    tags: ["content", "text", "information"],
    isActive: true
  },
  {
    name: "Dual CTA Section",
    description: "Two call-to-action options side by side",
    category: "Call to Action",
    content: [{
      id: generateId(),
      type: "iconGrid",
      data: {
        heading: "Ready to Take the Next Step?",
        description: "Choose the option that works best for you",
        columns: 2,
        items: [
          {
            icon: "phone",
            title: "Call Us Now",
            description: "Speak directly with our friendly team at (555) 123-4567. We're here to answer your questions and schedule your visit.",
            iconColor: "text-slate-600"
          },
          {
            icon: "calendar",
            title: "Book Online",
            description: "Schedule your appointment anytime using our convenient online booking system. Choose the date and time that works for you.",
            iconColor: "text-slate-600"
          }
        ]
      },
      style: { ...improvedStyles.iconGrid, backgroundColor: '#f8fafc' }
    }],
    tags: ["cta", "dual", "contact"],
    isActive: true
  }
];


// Main function to update templates
const updateTemplates = async () => {
  try {
    await connectDB();
    
    console.log('Starting template update...');
    console.log(`Total new templates to add: ${beautifulTemplates.length}`);
    
    // Option 1: Clear existing templates and add new ones
    // Uncomment the next line if you want to replace all templates
    // await ServiceTemplate.deleteMany({});
    
    // Option 2: Update existing templates by name or add new ones
    let updated = 0;
    let created = 0;
    
    for (const template of beautifulTemplates) {
      const existingTemplate = await ServiceTemplate.findOne({ name: template.name });
      
      if (existingTemplate) {
        // Update existing template
        await ServiceTemplate.findByIdAndUpdate(existingTemplate._id, {
          ...template,
          updatedAt: new Date()
        });
        updated++;
        console.log(`Updated: ${template.name}`);
      } else {
        // Create new template
        await ServiceTemplate.create(template);
        created++;
        console.log(`Created: ${template.name}`);
      }
    }
    
    console.log('\n========================================');
    console.log('Template update complete!');
    console.log(`Templates updated: ${updated}`);
    console.log(`Templates created: ${created}`);
    console.log(`Total templates in database: ${await ServiceTemplate.countDocuments()}`);
    console.log('========================================\n');
    
    // List all templates by category
    const categories = await ServiceTemplate.distinct('category');
    console.log('Templates by category:');
    for (const category of categories) {
      const count = await ServiceTemplate.countDocuments({ category });
      console.log(`  ${category}: ${count}`);
    }
    
    process.exit(0);
  } catch (error) {
    console.error('Error updating templates:', error);
    process.exit(1);
  }
};

// Run the update
updateTemplates();
