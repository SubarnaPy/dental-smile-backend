/**
 * Comprehensive Seed Script for All 19 Static Service Pages
 * This script populates MongoDB with complete service page data
 * matching the frontend static pages structure
 *
 * Usage: node scripts/seedAllStaticServices.js
 * With overwrite: node scripts/seedAllStaticServices.js --overwrite
 */

const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const StaticServicePage = require("../models/StaticServicePage");

// MongoDB connection - Use MONGO_URI from .env (or MONGODB_URI as fallback)
const MONGODB_URI =
  process.env.MONGO_URI ||
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/dental-smile";

// Check for command line arguments
const args = process.argv.slice(2);
const OVERWRITE = args.includes("--overwrite");

// ============================================================================
// ALL 19 SERVICE PAGES DATA
// ============================================================================

const allServicePagesData = [
  // 1. EMERGENCY DENTISTRY
  {
    serviceKey: "emergency-dentistry",
    title: "Emergency Dentistry",
    displayName: "Emergency Dentistry",
    slug: "emergency-dentistry",
    category: "emergency",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#ef4444",
    },
    hero: {
      enabled: true,
      category: "EMERGENCY CARE",
      categoryColor: "#3b82f6",
      title: "Emergency Dentistry",
      description:
        "When unexpected dental pain or injury strikes, immediate care is essential. Our experienced team provides prompt, compassionate emergency dental services for urgent situations like severe pain, broken teeth, and dental injuries.",
      primaryButtonText: "Call for Emergency Care",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/service1/placeholder1.png",
      heroImageAlt: "Emergency Dental Care",
      gradientFrom: "#eff6ff",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "Why Emergency Care Matters",
      subtitle:
        "Dental emergencies require immediate attention to relieve pain and prevent serious complications.",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "Shield",
          iconColor: "#5FC1D7",
          title: "Immediate Relief",
          description:
            "Get fast pain relief and emergency treatment when you need it most",
          order: 1,
        },
        {
          icon: "Heart",
          iconColor: "#27A8E0",
          title: "Prevent Complications",
          description:
            "Prompt treatment prevents infections from spreading and causing serious health issues",
          order: 2,
        },
        {
          icon: "Zap",
          iconColor: "#10b981",
          title: "Save Your Teeth",
          description:
            "Quick action can save a knocked-out tooth or prevent permanent damage to your smile",
          order: 3,
        },
      ],
    },
    features: {
      enabled: true,
      title: "Common Dental Emergencies We Treat",
      subtitle:
        "Our emergency dental clinic treats various urgent issues to relieve pain and prevent complications.",
      backgroundColor: "#ffffff",
      image: "/assets/service1/placeholder2.png",
      imageAlt: "Emergency Dental Treatment",
      imagePosition: "left",
      items: [
        {
          icon: "AlertCircle",
          iconColor: "#5FC1D7",
          title: "Severe Toothache & Abscesses",
          description:
            "Persistent pain or infection requiring immediate treatment to prevent spread",
          order: 1,
        },
        {
          icon: "AlertTriangle",
          iconColor: "#27A8E0",
          title: "Broken or Cracked Teeth",
          description:
            "Damage from accidents requiring urgent restoration and protection",
          order: 2,
        },
        {
          icon: "Zap",
          iconColor: "#10b981",
          title: "Knocked-Out Teeth",
          description:
            "Rapid treatment can save your tooth when acted upon immediately",
          order: 3,
        },
        {
          icon: "Tool",
          iconColor: "#f59e0b",
          title: "Lost Fillings & Crowns",
          description:
            "Quick replacement to restore protection and prevent further damage",
          order: 4,
        },
      ],
    },
    whatToExpect: {
      enabled: true,
      title: "What to Expect During Your Visit",
      backgroundColor: "#f9fafb",
      image: "/assets/service1/placeholder6.png",
      imageAlt: "Emergency Dental Visit",
      items: [
        {
          title: "Quick Assessment",
          borderColor: "#5FC1D7",
          backgroundColor: "#eff6ff",
          items: [
            "We prioritize immediate evaluation and pain relief for all emergency cases",
          ],
          order: 1,
        },
        {
          title: "Effective Treatment",
          borderColor: "#27A8E0",
          backgroundColor: "#fff7ed",
          items: [
            "Fast and effective treatment using advanced technology and proven techniques",
          ],
          order: 2,
        },
        {
          title: "Expert Care",
          borderColor: "#10b981",
          backgroundColor: "#f0fdf4",
          items: [
            "Dr. Dhaliwal provides compassionate and professional emergency dental care",
          ],
          order: 3,
        },
        {
          title: "Follow-up Plan",
          borderColor: "#f59e0b",
          backgroundColor: "#fefce8",
          items: [
            "Receive comprehensive care instructions and a plan for any ongoing treatment",
          ],
          order: 4,
        },
      ],
    },
    tips: {
      enabled: true,
      title: "First Aid Before Your Visit",
      backgroundColor: "#ffffff",
      sections: [
        {
          title: "For Tooth Pain",
          borderColor: "#5FC1D7",
          backgroundColor: "#eff6ff",
          items: [
            "Rinse with warm salt water",
            "Take pain reliever",
            "Apply cold compress to cheek",
          ],
          order: 1,
        },
        {
          title: "For Knocked Out Tooth",
          borderColor: "#27A8E0",
          backgroundColor: "#fff7ed",
          items: [
            "Handle by crown not root",
            "Rinse with milk or saline",
            "Place in milk and bring it immediately",
          ],
          order: 2,
        },
        {
          title: "For Cracked Tooth",
          borderColor: "#10b981",
          backgroundColor: "#f0fdf4",
          items: [
            "Rinse with warm water",
            "Apply cold compress",
            "Avoid chewing on that side",
          ],
          order: 3,
        },
        {
          title: "For Bleeding Gums",
          borderColor: "#f59e0b",
          backgroundColor: "#fefce8",
          items: [
            "Apply gentle pressure with gauze",
            "Rinse with salt water",
            "Control bleeding before arrival",
          ],
          order: 4,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Frequently Asked Questions",
      backgroundColor: "#f9fafb",
      faqs: [
        {
          question: "What qualifies as a dental emergency?",
          answer:
            "Severe pain, knocked-out teeth, broken teeth, uncontrollable bleeding, swelling, or signs of infection require immediate attention.",
          order: 1,
        },
        {
          question: "How quickly can I be seen?",
          answer:
            "We prioritize emergency cases and aim to see patients the same day whenever possible.",
          order: 2,
        },
        {
          question: "What should I do if a tooth is knocked out?",
          answer:
            "Handle the tooth by the crown, rinse gently, try to place it back in the socket or keep it in milk, and get to us immediately.",
          order: 3,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Need Emergency Dental Care?",
      description:
        "Don't suffer through dental pain. Contact us immediately for prompt, professional emergency dental care.",
      backgroundImage: "/assets/service1/placeholder4.png",
      primaryButtonText: "Call for Emergency Care",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      phone: "(613) 555-0123",
      address: "Ottawa, ON",
      showContactInfo: true,
    },
    sectionOrder: [
      "hero",
      "benefits",
      "features",
      "whatToExpect",
      "tips",
      "faq",
      "cta",
    ],
    seo: {
      metaTitle: "Emergency Dentistry Ottawa | Same-Day Emergency Dental Care",
      metaDescription:
        "Need emergency dental care in Ottawa? Our experienced team provides prompt treatment for dental emergencies including severe pain, broken teeth, and injuries.",
      metaKeywords: [
        "emergency dentistry",
        "emergency dental care",
        "Ottawa dentist",
        "dental emergency",
        "toothache",
        "broken tooth",
      ],
    },
  },

  // 2. DENTAL EXAMS & CLEANINGS
  {
    serviceKey: "dental-exams-cleanings",
    title: "Dental Exams & Cleanings",
    displayName: "Dental Exams & Cleanings",
    slug: "dental-exams-cleanings",
    category: "preventive",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#10b981",
    },
    hero: {
      enabled: true,
      category: "PREVENTIVE CARE",
      categoryColor: "#5FC1D7",
      title: "Dental Exams & Cleanings",
      description:
        "Regular dental exams and cleanings are the foundation of excellent oral health. Our comprehensive preventive care helps detect problems early and keeps your smile healthy and beautiful.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/service2/exam.png",
      heroImageAlt: "Dental Exam",
      gradientFrom: "#eff6ff",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "Why Regular Exams Matter",
      subtitle:
        "Prevention is always better than treatment. Regular dental visits can save you time, money, and health issues down the road.",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "Shield",
          iconColor: "#5FC1D7",
          title: "Early Detection",
          description:
            "Catch cavities, gum disease, and other problems before they become serious and expensive to treat",
          order: 1,
        },
        {
          icon: "Heart",
          iconColor: "#27A8E0",
          title: "Overall Health",
          description:
            "Oral health is connected to your overall well-being. Regular cleanings help prevent serious health issues",
          order: 2,
        },
        {
          icon: "Sparkles",
          iconColor: "#10b981",
          title: "Beautiful Smile",
          description:
            "Professional cleanings remove stains and tartar buildup, leaving your teeth bright and beautiful",
          order: 3,
        },
      ],
    },
    process: {
      enabled: true,
      title: "Our Comprehensive Exam Process",
      subtitle:
        "A thorough evaluation using advanced technology and professional expertise",
      backgroundColor: "#ffffff",
      image: "/assets/service2/hero.png",
      imageAlt: "Dental Examination",
      steps: [
        {
          stepNumber: 1,
          title: "Digital X-rays",
          description:
            "Advanced imaging to detect cavities, bone loss, and other issues not visible to the naked eye",
          icon: "Scan",
          iconColor: "#5FC1D7",
          order: 1,
        },
        {
          stepNumber: 2,
          title: "Oral Health Assessment",
          description:
            "Complete examination of teeth, gums, tongue, and oral tissues for signs of disease",
          icon: "Search",
          iconColor: "#27A8E0",
          order: 2,
        },
        {
          stepNumber: 3,
          title: "Professional Cleaning",
          description:
            "Removal of plaque and tartar buildup with specialized instruments",
          icon: "Sparkles",
          iconColor: "#10b981",
          order: 3,
        },
        {
          stepNumber: 4,
          title: "Personalized Recommendations",
          description:
            "Custom care plan and preventive strategies tailored to your needs",
          icon: "FileText",
          iconColor: "#f59e0b",
          order: 4,
        },
      ],
    },
    types: {
      enabled: true,
      title: "How Often Should You Get Exams?",
      subtitle:
        "The ideal frequency depends on your individual oral health status",
      backgroundColor: "#f9fafb",
      types: [
        {
          title: "Healthy Teeth",
          description:
            "Twice per year - Regular visits every 6 months for those with good oral health",
          icon: "Smile",
          iconColor: "#5FC1D7",
          features: ["Every 6 months", "Routine cleaning", "Standard checkup"],
          order: 1,
        },
        {
          title: "Gum Disease Risk",
          description:
            "3-4 times per year - More frequent visits if you have a history of gum disease",
          icon: "Check",
          iconColor: "#27A8E0",
          features: [
            "Every 3-4 months",
            "Deep cleaning",
            "Periodontal monitoring",
          ],
          isRecommended: true,
          order: 2,
        },
        {
          title: "Special Situations",
          description:
            "As recommended - More frequent if you have active cavities or serious conditions",
          icon: "Zap",
          iconColor: "#10b981",
          features: [
            "Custom schedule",
            "Targeted treatment",
            "Close monitoring",
          ],
          order: 3,
        },
      ],
    },
    whatToExpect: {
      enabled: true,
      title: "What to Expect During Your Visit",
      backgroundColor: "#ffffff",
      items: [
        {
          title: "Comfortable Environment",
          borderColor: "#5FC1D7",
          backgroundColor: "#eff6ff",
          items: [
            "Our office is designed for maximum comfort with modern equipment and a caring staff",
          ],
          order: 1,
        },
        {
          title: "Gentle Techniques",
          borderColor: "#27A8E0",
          backgroundColor: "#fff7ed",
          items: [
            "We use gentle, pain-free cleaning methods and advanced technology for your comfort",
          ],
          order: 2,
        },
        {
          title: "Education & Discussion",
          borderColor: "#10b981",
          backgroundColor: "#f0fdf4",
          items: [
            "Dr. Dhaliwal will discuss findings and answer all your questions about your oral health",
          ],
          order: 3,
        },
        {
          title: "Personalized Care Plan",
          borderColor: "#f59e0b",
          backgroundColor: "#fefce8",
          items: [
            "Receive a customized care plan with tips for maintaining excellent oral health at home",
          ],
          order: 4,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Frequently Asked Questions",
      backgroundColor: "#f9fafb",
      faqs: [
        {
          question: "How often should I get a dental cleaning?",
          answer:
            "Most people benefit from cleanings every 6 months, but some may need them more frequently based on their oral health.",
          order: 1,
        },
        {
          question: "Are dental cleanings painful?",
          answer:
            "Professional cleanings should not be painful. We use gentle techniques and can provide numbing if needed.",
          order: 2,
        },
        {
          question: "What happens during a dental exam?",
          answer:
            "We examine your teeth, gums, and mouth for problems, take X-rays if needed, and provide a professional cleaning.",
          order: 3,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Keep Your Smile Healthy",
      description:
        "Request an Appointment for your dental exam and cleaning today and start your journey to optimal oral health.",
      backgroundImage: "/assets/service2/extra.png",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      phone: "(613) 555-0123",
      address: "Ottawa, ON",
      showContactInfo: true,
    },
    sectionOrder: [
      "hero",
      "benefits",
      "process",
      "types",
      "whatToExpect",
      "faq",
      "cta",
    ],
    seo: {
      metaTitle: "Dental Exams & Cleanings Ottawa | Preventive Dental Care",
      metaDescription:
        "Regular dental exams and professional cleanings in Ottawa. Early detection of dental problems and comprehensive preventive care for your whole family.",
      metaKeywords: [
        "dental exam",
        "dental cleaning",
        "preventive care",
        "Ottawa dentist",
        "teeth cleaning",
      ],
    },
  },

  // 3. FAMILY DENTISTRY
  {
    serviceKey: "family-dentistry",
    title: "Family Dentistry",
    displayName: "Family Dentistry",
    slug: "family-dentistry",
    category: "preventive",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#10b981",
    },
    hero: {
      enabled: true,
      category: "FOR ALL AGES",
      categoryColor: "#5FC1D7",
      title: "Family Dentistry",
      description:
        "From young children to seniors, we provide comprehensive dental care for your entire family. Our welcoming environment and patient-centered approach make us the perfect choice for family dental health.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/service3/Gemini_Generated_Image_cla59acla59acla5.png",
      heroImageAlt: "Family Dentistry",
      gradientFrom: "#faf5ff",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "Why Choose Family Dentistry?",
      subtitle:
        "One dentist for your entire family means consistency, convenience, and comprehensive care",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "Users",
          iconColor: "#5FC1D7",
          title: "Simplified Scheduling",
          description:
            "Request appointments for the whole family at convenient times, often on the same day",
          order: 1,
        },
        {
          icon: "Heart",
          iconColor: "#27A8E0",
          title: "Personalized Care",
          description:
            "Each family member receives care tailored to their individual needs and concerns",
          order: 2,
        },
        {
          icon: "Shield",
          iconColor: "#10b981",
          title: "Complete Records",
          description:
            "All your family's dental histories in one place for coordinated, comprehensive care",
          order: 3,
        },
        {
          icon: "Smile",
          iconColor: "#f59e0b",
          title: "Preventive Focus",
          description:
            "Emphasis on prevention for all ages to ensure everyone maintains healthy smiles",
          order: 4,
        },
        {
          icon: "CheckCircle",
          iconColor: "#5FC1D7",
          title: "Comfortable Environment",
          description:
            "A welcoming atmosphere where children and adults feel at ease",
          order: 5,
        },
        {
          icon: "Award",
          iconColor: "#27A8E0",
          title: "Expert Care",
          description:
            "Highly skilled dentist trained in treating patients of all ages",
          order: 6,
        },
      ],
    },
    ageGroups: {
      enabled: true,
      title: "Care for Every Age",
      subtitle:
        "Specialized attention for each stage of your family's dental development",
      backgroundColor: "#ffffff",
      groups: [
        {
          ageRange: "Ages 2-12",
          title: "Children",
          description:
            "Gentle introduction to dental care, fluoride treatments, sealants, and habit monitoring to ensure healthy permanent teeth development",
          borderColor: "#5FC1D7",
          backgroundColor: "#eff6ff",
          order: 1,
        },
        {
          ageRange: "Ages 13-19",
          title: "Teens",
          description:
            "Preventive care, cavity prevention, orthodontic coordination, and education about healthy habits for lifelong dental wellness",
          borderColor: "#27A8E0",
          backgroundColor: "#fff7ed",
          order: 2,
        },
        {
          ageRange: "Ages 20-64",
          title: "Adults",
          description:
            "Comprehensive care including preventive services, restorative treatments, and cosmetic enhancements",
          borderColor: "#10b981",
          backgroundColor: "#f0fdf4",
          order: 3,
        },
        {
          ageRange: "65+",
          title: "Seniors",
          description:
            "Special attention to age-related issues, dentures, implants, and solutions for dry mouth and other senior concerns",
          borderColor: "#f59e0b",
          backgroundColor: "#fefce8",
          order: 4,
        },
      ],
    },
    serviceList: {
      enabled: true,
      title: "Complete Family Services",
      subtitle:
        "A full range of dental services under one roof for your entire family",
      backgroundColor: "#f9fafb",
      categories: [
        {
          title: "Preventive Care",
          icon: "CheckCircle",
          iconColor: "#5FC1D7",
          items: [
            "Regular exams and cleanings",
            "Digital X-rays",
            "Fluoride treatments for children",
            "Dental sealants",
            "Oral health education",
          ],
          order: 1,
        },
        {
          title: "Restorative Treatment",
          icon: "CheckCircle",
          iconColor: "#27A8E0",
          items: [
            "Fillings for cavities",
            "Crowns and bridges",
            "Root canal therapy",
            "Extractions when needed",
            "Dentures and implants for seniors",
          ],
          order: 2,
        },
        {
          title: "Cosmetic Services",
          icon: "CheckCircle",
          iconColor: "#10b981",
          items: [
            "Teeth whitening",
            "Dental bonding",
            "Veneers",
            "Smile makeovers",
            "Cosmetic contouring",
          ],
          order: 3,
        },
        {
          title: "Specialty Services",
          icon: "CheckCircle",
          iconColor: "#f59e0b",
          items: [
            "Emergency care",
            "Anxiety management",
            "Laser dentistry",
            "Advanced diagnostics",
            "Orthodontic coordination",
          ],
          order: 4,
        },
      ],
    },
    tips: {
      enabled: true,
      title: "Tips for Family Dental Health",
      subtitle: "",
      backgroundColor: "#ffffff",
      sections: [
        {
          title: "Start Early",
          borderColor: "#5FC1D7",
          backgroundColor: "#eff6ff",
          items: [
            "Begin dental visits as soon as teeth appear to establish healthy habits from the start",
          ],
          order: 1,
        },
        {
          title: "Brush Together",
          borderColor: "#27A8E0",
          backgroundColor: "#fff7ed",
          items: [
            "Make it a family routine to brush twice daily with fluoride toothpaste",
          ],
          order: 2,
        },
        {
          title: "Limit Sugar & Soda",
          borderColor: "#10b981",
          backgroundColor: "#f0fdf4",
          items: [
            "Reduce sugary snacks and drinks which contribute to tooth decay in children and adults",
          ],
          order: 3,
        },
        {
          title: "Regular Visits",
          borderColor: "#f59e0b",
          backgroundColor: "#fefce8",
          items: [
            "Visit together twice yearly for preventive care and early problem detection",
          ],
          order: 4,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Frequently Asked Questions",
      backgroundColor: "#f9fafb",
      faqs: [
        {
          question: "At what age should my child first visit the dentist?",
          answer:
            "We recommend the first dental visit by age 1 or within 6 months of the first tooth appearing.",
          order: 1,
        },
        {
          question: "Can our whole family be seen on the same day?",
          answer:
            "Yes! We offer family block appointments to make scheduling convenient for busy families.",
          order: 2,
        },
        {
          question: "Do you treat dental anxiety?",
          answer:
            "Absolutely. We offer gentle techniques and sedation options for patients of all ages who experience dental anxiety.",
          order: 3,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Your Family's Smile Matters",
      description:
        "Bring your entire family to us for comprehensive, compassionate dental care that keeps everyone smiling.",
      backgroundImage:
        "/assets/service3/Gemini_Generated_Image_cy48omcy48omcy48.png",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      phone: "437-913-9288",
      address: "888 Meadowlands Dr, Ottawa, ON K2C 3R2",
      showContactInfo: true,
    },
    sectionOrder: [
      "hero",
      "benefits",
      "ageGroups",
      "serviceList",
      "tips",
      "faq",
      "cta",
    ],
    seo: {
      metaTitle: "Family Dentistry Ottawa | Dental Care for All Ages",
      metaDescription:
        "Comprehensive family dental care in Ottawa for all ages. From children to seniors, we provide personalized dental services in a comfortable environment.",
      metaKeywords: [
        "family dentistry",
        "family dentist",
        "Ottawa dentist",
        "children dentist",
        "dental care all ages",
      ],
    },
  },

  // 4. KIDS DENTISTRY
  {
    serviceKey: "kids-dentistry",
    title: "Kids Dentistry",
    displayName: "Kids Dentistry",
    slug: "kids-dentistry",
    category: "preventive",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#ec4899",
    },
    hero: {
      enabled: true,
      category: "PEDIATRIC CARE",
      categoryColor: "#5FC1D7",
      title: "Kids Dentistry",
      description:
        "We make dental visits fun and comfortable for children! Our gentle, patient-friendly approach helps kids develop positive dental habits for life.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/service4/Gemini_Generated_Image_3qsvb83qsvb83qsv.png",
      heroImageAlt: "Pediatric Dentistry",
      gradientFrom: "#f0f9ff",
      gradientVia: "#eff6ff",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "Why Kids Dentistry Matters",
      subtitle:
        "Early dental care sets the foundation for a lifetime of healthy smiles",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "Heart",
          iconColor: "#5FC1D7",
          title: "Healthy Growth",
          description:
            "Proper dental care ensures healthy development of permanent teeth and jaw structure",
          order: 1,
        },
        {
          icon: "Shield",
          iconColor: "#27A8E0",
          title: "Cavity Prevention",
          description:
            "Early prevention is easier and less expensive than treating problems later",
          order: 2,
        },
        {
          icon: "Smile",
          iconColor: "#10b981",
          title: "Confidence Building",
          description:
            "Healthy teeth help kids feel confident and enjoy social activities",
          order: 3,
        },
      ],
    },
    features: {
      enabled: true,
      title: "Our Kid-Friendly Approach",
      subtitle:
        "Making dental visits fun, comfortable, and anxiety-free for children",
      backgroundColor: "#ffffff",
      image: "/assets/service4/Gemini_Generated_Image_3qsvb83qsvb83qsv (1).png",
      imageAlt: "Kids Friendly Dental Office",
      imagePosition: "left",
      items: [
        {
          icon: "Star",
          iconColor: "#5FC1D7",
          title: "Gentle Techniques",
          description:
            "We use soft-spoken, patient communication and gentle handling",
          order: 1,
        },
        {
          icon: "Star",
          iconColor: "#27A8E0",
          title: "Fun Environment",
          description:
            "Bright, welcoming office with child-friendly décor and entertainment",
          order: 2,
        },
        {
          icon: "Star",
          iconColor: "#10b981",
          title: "Positive Reinforcement",
          description: "Praise and rewards for brave dental behavior",
          order: 3,
        },
        {
          icon: "Star",
          iconColor: "#f59e0b",
          title: "Parent Involvement",
          description:
            "Parents stay close by during visits for comfort and support",
          order: 4,
        },
      ],
    },
    serviceList: {
      enabled: true,
      title: "Services for Children",
      subtitle: "Comprehensive dental care designed for young smiles",
      backgroundColor: "#f9fafb",
      categories: [
        {
          title: "Preventive Care",
          icon: "CheckCircle",
          iconColor: "#5FC1D7",
          items: [
            "First visits (starting at age 2)",
            "Regular exams and cleanings",
            "Fluoride treatments",
            "Dental sealants",
          ],
          order: 1,
        },
        {
          title: "Education & Habit Formation",
          icon: "CheckCircle",
          iconColor: "#27A8E0",
          items: [
            "Brushing and flossing instruction",
            "Dietary counseling",
            "Thumb-sucking intervention",
            "Habit correction",
          ],
          order: 2,
        },
        {
          title: "Treatment Services",
          icon: "CheckCircle",
          iconColor: "#10b981",
          items: [
            "Cavity fillings",
            "Emergency care",
            "Tooth extraction when needed",
            "Space maintenance",
          ],
          order: 3,
        },
        {
          title: "Special Needs",
          icon: "CheckCircle",
          iconColor: "#f59e0b",
          items: [
            "Anxious patient management",
            "Gentle sedation options",
            "Special accommodations",
            "Behavioral guidance",
          ],
          order: 4,
        },
      ],
    },
    ageGroups: {
      enabled: true,
      title: "Dental Milestones by Age",
      subtitle: "",
      backgroundColor: "#ffffff",
      groups: [
        {
          ageRange: "Ages 0-2",
          title: "Baby Teeth Emerge",
          description:
            "First visit when first tooth appears. Clean gums daily and prevent cavities",
          borderColor: "#5FC1D7",
          backgroundColor: "#eff6ff",
          order: 1,
        },
        {
          ageRange: "Ages 3-5",
          title: "Primary Dentition",
          description:
            "All 20 baby teeth have erupted. Focus on cavity prevention and proper brushing",
          borderColor: "#27A8E0",
          backgroundColor: "#fff7ed",
          order: 2,
        },
        {
          ageRange: "Ages 6-12",
          title: "Mixed Dentition",
          description:
            "Baby teeth fall out and permanent teeth erupt. Monitor for orthodontic issues",
          borderColor: "#10b981",
          backgroundColor: "#f0fdf4",
          order: 3,
        },
        {
          ageRange: "Ages 13+",
          title: "Permanent Teeth",
          description:
            "All permanent teeth have erupted. Establish lifelong healthy habits",
          borderColor: "#f59e0b",
          backgroundColor: "#fefce8",
          order: 4,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Parents' Questions",
      backgroundColor: "#f9fafb",
      faqs: [
        {
          question: "When should my child first see a dentist?",
          answer:
            "The first visit should be by age 1 or within 6 months of the first tooth appearing.",
          order: 1,
        },
        {
          question: "How can I prepare my child for their first visit?",
          answer:
            "Keep it positive! Read books about dentist visits, role-play at home, and avoid using scary words.",
          order: 2,
        },
        {
          question: "Are dental X-rays safe for children?",
          answer:
            "Yes, we use digital X-rays which emit very low radiation and are safe for children when needed.",
          order: 3,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Start Your Child's Smile Journey",
      description:
        "Give your child the gift of healthy teeth and a positive relationship with dental care.",
      backgroundImage:
        "/assets/service4/Gemini_Generated_Image_3qsvb83qsvb83qsv.png",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      phone: "437-913-9288",
      address: "888 Meadowlands Dr, Ottawa, ON K2C 3R2",
      showContactInfo: true,
    },
    sectionOrder: [
      "hero",
      "benefits",
      "features",
      "serviceList",
      "ageGroups",
      "faq",
      "cta",
    ],
    seo: {
      metaTitle: "Kids Dentistry Ottawa | Pediatric Dental Care",
      metaDescription:
        "Gentle, kid-friendly dental care in Ottawa. Our pediatric services help children develop healthy habits and positive attitudes about dental visits.",
      metaKeywords: [
        "kids dentistry",
        "pediatric dentist",
        "children dentist",
        "Ottawa",
        "child dental care",
      ],
    },
  },

  // 5. TOOTH EXTRACTIONS
  {
    serviceKey: "tooth-extractions",
    title: "Tooth Extractions",
    displayName: "Tooth Extractions",
    slug: "tooth-extractions",
    category: "restorative",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#f59e0b",
    },
    hero: {
      enabled: true,
      category: "TOOTH REMOVAL",
      categoryColor: "#27A8E0",
      title: "Tooth Extractions",
      description:
        "When a tooth cannot be saved, our gentle extraction procedure ensures minimal discomfort and promotes rapid healing. We discuss all options before recommending extraction.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/service5/Gemini_Generated_Image_pw3zpnpw3zpnpw3z.png",
      heroImageAlt: "Dental Extraction",
      gradientFrom: "#f8fafc",
      gradientVia: "#eff6ff",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "When Is Extraction Necessary?",
      subtitle:
        "Extraction is typically a last resort when the tooth cannot be saved",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "AlertCircle",
          iconColor: "#5FC1D7",
          title: "Severe Decay",
          description:
            "Tooth damage is too extensive for filling or crown restoration",
          order: 1,
        },
        {
          icon: "AlertCircle",
          iconColor: "#27A8E0",
          title: "Advanced Gum Disease",
          description: "Tooth is too loose due to severe periodontal disease",
          order: 2,
        },
        {
          icon: "AlertCircle",
          iconColor: "#10b981",
          title: "Traumatic Injury",
          description:
            "Tooth is fractured beyond repair from accidents or trauma",
          order: 3,
        },
        {
          icon: "AlertCircle",
          iconColor: "#f59e0b",
          title: "Infections",
          description:
            "Uncontrollable infections or abscesses around the tooth",
          order: 4,
        },
        {
          icon: "AlertCircle",
          iconColor: "#5FC1D7",
          title: "Orthodontic Reasons",
          description:
            "Tooth extraction needed to create space for proper alignment",
          order: 5,
        },
        {
          icon: "AlertCircle",
          iconColor: "#27A8E0",
          title: "Impacted Teeth",
          description:
            "Impacted wisdom teeth or other teeth unable to erupt normally",
          order: 6,
        },
      ],
    },
    process: {
      enabled: true,
      title: "Our Gentle Extraction Process",
      subtitle: "Minimizing discomfort and promoting optimal healing",
      backgroundColor: "#ffffff",
      image: "/assets/service5/Gemini_Generated_Image_pw3zpnpw3zpnpw3z (1).png",
      imageAlt: "Dental Extraction Procedure",
      steps: [
        {
          stepNumber: 1,
          title: "Complete Examination",
          description:
            "X-rays and assessment to plan the safest extraction method",
          icon: "Scan",
          iconColor: "#5FC1D7",
          order: 1,
        },
        {
          stepNumber: 2,
          title: "Local Anesthesia",
          description:
            "Numbing of the area ensures you feel no pain during the procedure",
          icon: "Shield",
          iconColor: "#27A8E0",
          order: 2,
        },
        {
          stepNumber: 3,
          title: "Gentle Removal",
          description:
            "Careful technique to extract the tooth with minimal trauma",
          icon: "Hand",
          iconColor: "#10b981",
          order: 3,
        },
        {
          stepNumber: 4,
          title: "Healing Care",
          description:
            "Post-operative instructions for optimal healing and comfort",
          icon: "FileText",
          iconColor: "#f59e0b",
          order: 4,
        },
      ],
    },
    whatToExpect: {
      enabled: true,
      title: "What to Expect",
      subtitle:
        "Understanding the extraction experience helps you prepare and recover",
      backgroundColor: "#f9fafb",
      items: [
        {
          title: "During the Procedure",
          borderColor: "#5FC1D7",
          backgroundColor: "#ffffff",
          icon: "Clock",
          items: [
            "You'll feel pressure but no pain",
            "May hear sounds and feel vibrations",
            "Procedure typically takes 20-40 minutes",
            "You remain awake and aware throughout",
          ],
          order: 1,
        },
        {
          title: "After the Procedure",
          borderColor: "#27A8E0",
          backgroundColor: "#ffffff",
          icon: "Shield",
          items: [
            "Mild to moderate soreness for 3-7 days",
            "Swelling peaks at 24-48 hours",
            "Avoid strenuous activity for several days",
            "Follow post-op instructions carefully",
          ],
          order: 2,
        },
      ],
    },
    aftercare: {
      enabled: true,
      title: "Recovery Care Instructions",
      subtitle: "",
      backgroundColor: "#ffffff",
      sections: [
        {
          title: "First 24 Hours",
          borderColor: "#5FC1D7",
          backgroundColor: "#eff6ff",
          items: [
            "Rest, apply ice, bite on gauze, keep head elevated, avoid rinsing and spitting forcefully",
          ],
          order: 1,
        },
        {
          title: "Diet & Nutrition",
          borderColor: "#27A8E0",
          backgroundColor: "#f0fdfa",
          items: [
            "Soft, cool foods; avoid hot, hard, crunchy, or spicy foods for several days",
          ],
          order: 2,
        },
        {
          title: "Pain Management",
          borderColor: "#10b981",
          backgroundColor: "#f0fdf4",
          items: [
            "Take prescribed or recommended pain medication as directed; apply warm compresses after 48 hours",
          ],
          order: 3,
        },
        {
          title: "Activity Restrictions",
          borderColor: "#f59e0b",
          backgroundColor: "#fefce8",
          items: [
            "No smoking, drinking through straws, or strenuous exercise for at least one week",
          ],
          order: 4,
        },
      ],
    },
    types: {
      enabled: true,
      title: "Tooth Replacement Options",
      subtitle: "We can help restore your smile after an extraction",
      backgroundColor: "#f9fafb",
      types: [
        {
          title: "Dental Implants",
          description:
            "Permanent replacement that looks and functions like a natural tooth",
          icon: "Award",
          iconColor: "#5FC1D7",
          features: [
            "Longest-lasting option",
            "Prevents bone loss",
            "Durable and reliable",
          ],
          order: 1,
        },
        {
          title: "Dental Bridge",
          description: "Fixed restoration supported by adjacent teeth",
          icon: "Award",
          iconColor: "#27A8E0",
          features: [
            "Faster process than implants",
            "Natural appearance",
            "Good functionality",
          ],
          order: 2,
        },
        {
          title: "Partial Denture",
          description: "Removable replacement for one or multiple teeth",
          icon: "Award",
          iconColor: "#10b981",
          features: [
            "Most affordable option",
            "Easy to clean",
            "Adjustable if needed",
          ],
          order: 3,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Frequently Asked Questions",
      backgroundColor: "#ffffff",
      faqs: [
        {
          question: "Is tooth extraction painful?",
          answer:
            "With modern anesthesia, you should feel no pain during the extraction. Some pressure is normal but not painful.",
          order: 1,
        },
        {
          question: "How long does recovery take?",
          answer:
            "Most people feel significantly better within 3-4 days. Complete healing of the socket takes about 1-2 weeks.",
          order: 2,
        },
        {
          question: "What are my options after extraction?",
          answer:
            "We can discuss tooth replacement options including dental implants, bridges, or partial dentures.",
          order: 3,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Let's Discuss Your Options",
      description:
        "Request an Appointment to explore all treatment options before deciding on extraction.",
      gradientFrom: "slate-700",
      gradientVia: "blue-700",
      gradientTo: "cyan-700",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      phone: "437-913-9288",
      address: "888 Meadowlands Dr, Ottawa, ON K2C 3R2",
      showContactInfo: true,
    },
    sectionOrder: [
      "hero",
      "benefits",
      "process",
      "whatToExpect",
      "aftercare",
      "types",
      "faq",
      "cta",
    ],
    seo: {
      metaTitle: "Tooth Extractions Ottawa | Gentle Tooth Removal",
      metaDescription:
        "Gentle, comfortable tooth extractions in Ottawa. Our experienced team ensures minimal discomfort with comprehensive aftercare guidance.",
      metaKeywords: [
        "tooth extraction",
        "tooth removal",
        "Ottawa dentist",
        "wisdom teeth",
        "oral surgery",
      ],
    },
  },

  // 6. DENTAL FILLINGS
  {
    serviceKey: "dental-fillings",
    title: "Dental Fillings",
    displayName: "Dental Fillings",
    slug: "dental-fillings",
    category: "restorative",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#10b981",
    },
    hero: {
      enabled: true,
      category: "CAVITY TREATMENT",
      categoryColor: "#5FC1D7",
      title: "Dental Fillings",
      description:
        "We restore decayed teeth with beautiful, durable fillings that look and feel natural. Our modern materials blend seamlessly with your tooth color.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/service6/Gemini_Generated_Image_5tshzr5tshzr5tsh.png",
      heroImageAlt: "Dental Filling",
      gradientFrom: "#ecfeff",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "Why Fillings Are Important",
      subtitle:
        "Prompt cavity treatment prevents further damage and preserves your natural tooth",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "Shield",
          iconColor: "#5FC1D7",
          title: "Stop Decay",
          description:
            "Fillings remove decay and prevent it from spreading deeper into the tooth",
          order: 1,
        },
        {
          icon: "Smile",
          iconColor: "#27A8E0",
          title: "Restore Function",
          description: "Return your tooth to full chewing and biting ability",
          order: 2,
        },
        {
          icon: "Smile",
          iconColor: "#10b981",
          title: "Aesthetic Appeal",
          description: "Tooth-colored fillings blend naturally with your smile",
          order: 3,
        },
      ],
    },
    types: {
      enabled: true,
      title: "Our Filling Options",
      subtitle:
        "We use the latest materials for durable, beautiful restorations",
      backgroundColor: "#ffffff",
      image: "/assets/service6/Gemini_Generated_Image_5tshzr5tshzr5tsh (1).png",
      imageAlt: "Filling Procedure",
      types: [
        {
          title: "Composite Resin",
          description: "Most popular option - tooth-colored and durable",
          icon: "Sparkles",
          iconColor: "#5FC1D7",
          features: [
            "Matches natural tooth color",
            "Bonds directly to tooth",
            "Long-lasting durability",
            "No metal content",
          ],
          isRecommended: true,
          order: 1,
        },
        {
          title: "Glass Ionomer",
          description: "Fluoride-releasing option, good for kids",
          icon: "Shield",
          iconColor: "#27A8E0",
          features: [
            "Releases fluoride for protection",
            "Great for primary teeth",
            "Moderate durability",
            "Budget-friendly",
          ],
          order: 2,
        },
      ],
    },
    process: {
      enabled: true,
      title: "The Filling Process",
      subtitle: "Quick, comfortable restoration of your tooth",
      backgroundColor: "#f9fafb",
      steps: [
        {
          stepNumber: 1,
          title: "Examination",
          description:
            "Identify the cavity and determine its size and location",
          icon: "Search",
          iconColor: "#5FC1D7",
          order: 1,
        },
        {
          stepNumber: 2,
          title: "Numbing",
          description:
            "Local anesthetic ensures comfortable, painless treatment",
          icon: "Shield",
          iconColor: "#27A8E0",
          order: 2,
        },
        {
          stepNumber: 3,
          title: "Removal",
          description: "Carefully remove decay using specialized instruments",
          icon: "Tool",
          iconColor: "#10b981",
          order: 3,
        },
        {
          stepNumber: 4,
          title: "Filling",
          description: "Apply and shape filling material to restore tooth",
          icon: "Layers",
          iconColor: "#f59e0b",
          order: 4,
        },
      ],
    },
    comparison: {
      enabled: true,
      title: "Cost vs. Consequences",
      subtitle: "Early filling treatment saves money and protects your teeth",
      backgroundColor: "#ffffff",
      comparisons: [
        {
          title: "Early Treatment",
          icon: "CheckCircle",
          iconColor: "#10b981",
          items: [
            "Single filling: moderate cost",
            "Quick procedure: 30 minutes",
            "Prevents root canals",
            "Prevents extractions",
          ],
          isPositive: true,
          order: 1,
        },
        {
          title: "Delayed Treatment",
          icon: "Clock",
          iconColor: "#ef4444",
          items: [
            "Deep decay: root canal needed",
            "Infection: extraction required",
            "Replacement: implants/bridge",
            "Total cost: 5-10x higher",
          ],
          isPositive: false,
          order: 2,
        },
      ],
    },
    aftercare: {
      enabled: true,
      title: "Care After Your Filling",
      subtitle: "",
      backgroundColor: "#f9fafb",
      sections: [
        {
          title: "First 24 Hours",
          borderColor: "#5FC1D7",
          backgroundColor: "#ffffff",
          items: [
            "Avoid hard, sticky foods. Numbness may last 2-4 hours - be careful not to bite your cheek",
          ],
          order: 1,
        },
        {
          title: "Sensitivity Management",
          borderColor: "#27A8E0",
          backgroundColor: "#ffffff",
          items: [
            "Mild sensitivity is normal and usually resolves within a few days. Use sensitivity toothpaste if needed",
          ],
          order: 2,
        },
        {
          title: "Regular Maintenance",
          borderColor: "#10b981",
          backgroundColor: "#ffffff",
          items: [
            "Brush twice daily, floss regularly, and visit us every 6 months to prevent new cavities",
          ],
          order: 3,
        },
        {
          title: "Longevity",
          borderColor: "#f59e0b",
          backgroundColor: "#ffffff",
          items: [
            "Composite fillings typically last 5-10 years. We'll monitor them during check-ups",
          ],
          order: 4,
        },
      ],
    },
    tips: {
      enabled: true,
      title: "Prevent Future Cavities",
      subtitle: "",
      backgroundColor: "#ffffff",
      sections: [
        {
          title: "Daily Habits",
          borderColor: "#5FC1D7",
          backgroundColor: "#eff6ff",
          icon: "Shield",
          items: [
            "Brush twice daily with fluoride toothpaste",
            "Floss daily to remove food and plaque",
            "Limit sugary snacks and drinks",
            "Use mouthwash for extra protection",
          ],
          order: 1,
        },
        {
          title: "Professional Care",
          borderColor: "#27A8E0",
          backgroundColor: "#fff7ed",
          icon: "Award",
          items: [
            "Biannual exams and cleanings",
            "Fluoride treatments for extra protection",
            "Dental sealants on back teeth",
            "Early detection of problem areas",
          ],
          order: 2,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Frequently Asked Questions",
      backgroundColor: "#f9fafb",
      faqs: [
        {
          question: "How long do fillings last?",
          answer:
            "Composite fillings typically last 5-10 years, while amalgam fillings can last 10-15 years with proper care.",
          order: 1,
        },
        {
          question: "Do fillings hurt?",
          answer:
            "The area is numbed before the procedure, so you should feel no pain. Some sensitivity after is normal and temporary.",
          order: 2,
        },
        {
          question: "Can old fillings be replaced?",
          answer:
            "Yes, we can replace old amalgam fillings with tooth-colored composites for a more natural appearance.",
          order: 3,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Restore Your Smile",
      description:
        "Don't let cavities get worse. Request an Appointment for your filling today and maintain a healthy, beautiful smile.",
      gradientFrom: "blue-600",
      gradientTo: "cyan-600",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      phone: "437-913-9288",
      address: "888 Meadowlands Dr, Ottawa, ON K2C 3R2",
      showContactInfo: true,
    },
    sectionOrder: [
      "hero",
      "benefits",
      "types",
      "process",
      "comparison",
      "aftercare",
      "tips",
      "faq",
      "cta",
    ],
    seo: {
      metaTitle: "Dental Fillings Ottawa | Tooth-Colored Composite Fillings",
      metaDescription:
        "Natural-looking dental fillings in Ottawa. We offer tooth-colored composite fillings that restore your teeth while maintaining a beautiful smile.",
      metaKeywords: [
        "dental fillings",
        "tooth colored fillings",
        "composite fillings",
        "Ottawa dentist",
        "cavity treatment",
      ],
    },
  },

  // 7. DENTAL SEALANTS
  {
    serviceKey: "dental-sealants",
    title: "Dental Sealants",
    displayName: "Dental Sealants",
    slug: "dental-sealants",
    category: "preventive",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#10b981",
    },
    hero: {
      enabled: true,
      category: "PREVENTIVE PROTECTION",
      categoryColor: "#10b981",
      title: "Dental Sealants",
      description:
        "Protective shields for your back teeth. Dental sealants prevent cavities from forming in the deep grooves where a toothbrush can't reach.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#10b981",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/service7/Gemini_Generated_Image_vly5o7vly5o7vly5.png",
      heroImageAlt: "Dental Sealants",
      gradientFrom: "#f0f9ff",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "Why Dental Sealants?",
      subtitle:
        "Sealants are one of the most effective ways to prevent back tooth cavities",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "Shield",
          iconColor: "#10b981",
          title: "99% Protection",
          description:
            "Sealants reduce cavity risk in sealed surfaces by nearly 99% for up to 10 years",
          order: 1,
        },
        {
          icon: "Zap",
          iconColor: "#f59e0b",
          title: "Quick Application",
          description:
            "Simple, painless procedure takes just minutes with no drilling or anesthetic needed",
          order: 2,
        },
        {
          icon: "Heart",
          iconColor: "#ef4444",
          title: "Child-Friendly",
          description:
            "Perfect for kids - helps establish lifelong cavity prevention habits early",
          order: 3,
        },
      ],
    },
    types: {
      enabled: true,
      title: "Who Should Get Sealants?",
      subtitle:
        "Sealants benefit children, teens, and adults at risk for cavities",
      backgroundColor: "#ffffff",
      image: "/assets/service7/Gemini_Generated_Image_vly5o7vly5o7vly5 (1).png",
      imageAlt: "Child at Dentist",
      types: [
        {
          title: "Children & Teens",
          description:
            "Ages 6-18 benefit most from sealants on newly erupted permanent teeth",
          icon: "Smile",
          iconColor: "#10b981",
          features: [
            "New molars are most cavity-prone",
            "Establishes healthy habits early",
            "80% reduction in cavities",
            "FDA recommended for all kids",
          ],
          isRecommended: true,
          order: 1,
        },
        {
          title: "Adults",
          description:
            "Cavity-prone adults can benefit from sealants on back teeth",
          icon: "User",
          iconColor: "#5FC1D7",
          features: [
            "History of cavities",
            "Deep grooves in molars",
            "Limited flossing access",
            "Dry mouth conditions",
          ],
          order: 2,
        },
      ],
    },
    process: {
      enabled: true,
      title: "How Dental Sealants Work",
      subtitle:
        "A physical barrier that prevents food and bacteria from collecting in tooth grooves",
      backgroundColor: "#f9fafb",
      image: "/assets/service7/Gemini_Generated_Image_vly5o7vly5o7vly5 (2).png",
      imageAlt: "Sealant Application Process",
      steps: [
        {
          stepNumber: 1,
          title: "Clean",
          description: "Tooth surface is thoroughly cleaned and dried",
          icon: "Sparkles",
          iconColor: "#10b981",
          order: 1,
        },
        {
          stepNumber: 2,
          title: "Prepare",
          description:
            "Special solution prepares the tooth surface for bonding",
          icon: "Droplet",
          iconColor: "#5FC1D7",
          order: 2,
        },
        {
          stepNumber: 3,
          title: "Apply",
          description:
            "Liquid sealant material is painted onto grooves and chewing surfaces",
          icon: "PenTool",
          iconColor: "#f59e0b",
          order: 3,
        },
        {
          stepNumber: 4,
          title: "Harden",
          description: "UV light hardens the sealant into a protective shield",
          icon: "Sun",
          iconColor: "#ef4444",
          order: 4,
        },
      ],
    },
    whatToExpect: {
      enabled: true,
      title: "What to Expect During Application",
      subtitle: "",
      backgroundColor: "#ffffff",
      items: [
        {
          title: "Duration",
          borderColor: "#10b981",
          backgroundColor: "#ffffff",
          items: [
            "Application takes 15-30 minutes total. Quick enough to do during a regular cleaning visit",
          ],
          order: 1,
        },
        {
          title: "No Anesthetic Needed",
          borderColor: "#5FC1D7",
          backgroundColor: "#ffffff",
          items: [
            "Completely painless procedure - no needle or drilling. Kids especially appreciate the comfort",
          ],
          order: 2,
        },
        {
          title: "Immediate Results",
          borderColor: "#f59e0b",
          backgroundColor: "#ffffff",
          items: [
            "Protection begins immediately. No recovery time - eat and drink normally right away",
          ],
          order: 3,
        },
        {
          title: "Invisible Protection",
          borderColor: "#ef4444",
          backgroundColor: "#ffffff",
          items: [
            "Sealants are clear or tooth-colored and invisible. Doesn't affect appearance or feel",
          ],
          order: 4,
        },
      ],
    },
    stats: {
      enabled: true,
      title: "Long-Lasting Protection",
      subtitle: "Dental sealants provide excellent cavity prevention over time",
      backgroundColor: "#f9fafb",
      stats: [
        {
          value: "10+",
          label: "Years of Protection",
          description:
            "With proper care, sealants can last up to 10 years or more",
          color: "#10b981",
          order: 1,
        },
        {
          value: "80-90%",
          label: "Cavity Reduction",
          description:
            "Significant reduction in cavities on sealed tooth surfaces",
          color: "#5FC1D7",
          order: 2,
        },
        {
          value: "99%",
          label: "Effectiveness Rate",
          description:
            "Highly effective in preventing cavities when properly applied",
          color: "#f59e0b",
          order: 3,
        },
        {
          value: "$0",
          label: "Pain & Downtime",
          description: "Completely painless with no recovery time needed",
          color: "#ef4444",
          order: 4,
        },
      ],
    },
    tips: {
      enabled: true,
      title: "Caring for Your Sealants",
      subtitle: "",
      backgroundColor: "#ffffff",
      sections: [
        {
          title: "Maintain Good Habits",
          borderColor: "#10b981",
          backgroundColor: "#f0fdf4",
          items: [
            "Brush teeth twice daily",
            "Floss between teeth daily",
            "Limit sugary foods and drinks",
            "Use fluoride mouthwash",
          ],
          order: 1,
        },
        {
          title: "Normal Activities",
          borderColor: "#5FC1D7",
          backgroundColor: "#eff6ff",
          items: [
            "Eat and drink normally",
            "Chew gum (sugar-free)",
            "Brush with normal toothbrush",
            "Use mouthwash",
          ],
          order: 2,
        },
        {
          title: "Regular Monitoring",
          borderColor: "#f59e0b",
          backgroundColor: "#fff7ed",
          items: [
            "Visit us every 6 months for check-ups",
            "We monitor sealant wear and integrity",
            "Professional cleaning maintains effectiveness",
            "Replacement is simple if needed",
          ],
          order: 3,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Frequently Asked Questions",
      backgroundColor: "#f9fafb",
      faqs: [
        {
          question: "Who should get sealants?",
          answer:
            "Sealants are most commonly applied to children's permanent molars, but adults without decay can benefit too.",
          order: 1,
        },
        {
          question: "Are sealants visible?",
          answer:
            "Sealants are clear or white and virtually invisible once applied.",
          order: 2,
        },
        {
          question: "How long do sealants last?",
          answer:
            "With proper care, sealants can last up to 10 years. We check them at regular visits.",
          order: 3,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Protect Your Smile",
      description:
        "Dental sealants are an easy, affordable way to prevent cavities for years to come. Request an Appointment today.",
      gradientFrom: "slate-700",
      gradientVia: "blue-700",
      gradientTo: "cyan-700",
      primaryButtonText: "Get Dental Sealants",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      phone: "437-913-9288",
      address: "888 Meadowlands Dr, Ottawa, ON K2C 3R2",
      showContactInfo: true,
    },
    sectionOrder: [
      "hero",
      "benefits",
      "types",
      "process",
      "whatToExpect",
      "stats",
      "tips",
      "faq",
      "cta",
    ],
    seo: {
      metaTitle: "Dental Sealants Ottawa | Cavity Prevention",
      metaDescription:
        "Protect teeth from cavities with dental sealants in Ottawa. Quick, painless preventive treatment for children and adults.",
      metaKeywords: [
        "dental sealants",
        "cavity prevention",
        "Ottawa dentist",
        "preventive dentistry",
        "children dental care",
      ],
    },
  },

  // 8. NITROUS SEDATION
  {
    serviceKey: "nitrous-sedation",
    title: "Nitrous Sedation",
    displayName: "Nitrous Sedation",
    slug: "nitrous-sedation",
    category: "specialty",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#27A8E0",
    },
    hero: {
      enabled: true,
      category: "ANXIETY RELIEF",
      categoryColor: "#27A8E0",
      title: "Nitrous Sedation",
      description:
        "Feel comfortable and relaxed during your dental visit. Nitrous oxide (laughing gas) is a safe, gentle option for patients with dental anxiety.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/service8/Gemini_Generated_Image_7k76iv7k76iv7k76.png",
      heroImageAlt: "Relaxed Patient",
      gradientFrom: "#f8fafc",
      gradientVia: "#f0f9ff",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "What is Nitrous Oxide?",
      subtitle:
        "A safe, proven method to help nervous patients relax during dental care",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "Wind",
          iconColor: "#27A8E0",
          title: "Safe & Effective",
          description:
            "FDA-approved sedative used for decades in dental and medical offices worldwide",
          order: 1,
        },
        {
          icon: "Smile",
          iconColor: "#f59e0b",
          title: "Relaxing Feel",
          description:
            "Creates a calm, euphoric sensation - patients remain conscious and in control",
          order: 2,
        },
        {
          icon: "Clock",
          iconColor: "#10b981",
          title: "Quick Recovery",
          description:
            "Wears off within minutes - you can return to normal activities right away",
          order: 3,
        },
      ],
    },
    features: {
      enabled: true,
      title: "Who Benefits from Nitrous?",
      subtitle: "Ideal for patients with various concerns about dental care",
      backgroundColor: "#ffffff",
      image: "/assets/service8/Gemini_Generated_Image_7k76iv7k76iv7k76 (1).png",
      imageAlt: "Comfortable Patient",
      imagePosition: "left",
      items: [
        {
          icon: "Heart",
          iconColor: "#27A8E0",
          title: "Anxious Patients",
          description:
            "Help overcome fear of the dentist and make visits more comfortable",
          order: 1,
        },
        {
          icon: "Shield",
          iconColor: "#5FC1D7",
          title: "Sensitive Patients",
          description:
            "Reduce discomfort sensitivity and gag reflex during procedures",
          order: 2,
        },
        {
          icon: "Clock",
          iconColor: "#f59e0b",
          title: "Complex Procedures",
          description:
            "Make longer appointments feel shorter and more tolerable",
          order: 3,
        },
        {
          icon: "Users",
          iconColor: "#10b981",
          title: "Children & Teens",
          description:
            "Help young patients build positive associations with dental care",
          order: 4,
        },
      ],
    },
    process: {
      enabled: true,
      title: "How Nitrous Sedation Works",
      subtitle: "A simple, non-invasive process for maximum comfort",
      backgroundColor: "#f9fafb",
      image: "/assets/service8/Gemini_Generated_Image_7k76iv7k76iv7k76 (2).png",
      imageAlt: "Dental Procedure",
      steps: [
        {
          stepNumber: 1,
          title: "Nasal Mask",
          description: "Comfortable mask placed over your nose delivers gas",
          icon: "Wind",
          iconColor: "#27A8E0",
          order: 1,
        },
        {
          stepNumber: 2,
          title: "Gentle Mix",
          description:
            "Nitrous mixed with oxygen starts working within seconds",
          icon: "Droplet",
          iconColor: "#5FC1D7",
          order: 2,
        },
        {
          stepNumber: 3,
          title: "Relax & Enjoy",
          description: "Feel calm and relaxed while we complete your procedure",
          icon: "Smile",
          iconColor: "#f59e0b",
          order: 3,
        },
        {
          stepNumber: 4,
          title: "Quick Recovery",
          description:
            "Effects wear off within minutes when we switch to oxygen",
          icon: "Zap",
          iconColor: "#10b981",
          order: 4,
        },
      ],
    },
    whatToExpect: {
      enabled: true,
      title: "What to Expect During Sedation",
      subtitle: "",
      backgroundColor: "#ffffff",
      items: [
        {
          title: "What You'll Feel",
          borderColor: "#27A8E0",
          backgroundColor: "#faf5ff",
          icon: "Heart",
          items: [
            "Warm, tingly sensation throughout your body",
            "Euphoric, relaxed feeling (the 'laughing gas' effect)",
            "Time passes quickly - procedures feel shorter",
            "Remain awake and aware throughout",
            "Can respond to instructions and communicate",
          ],
          order: 1,
        },
        {
          title: "Safety & Reversibility",
          borderColor: "#5FC1D7",
          backgroundColor: "#eff6ff",
          icon: "AlertCircle",
          items: [
            "Completely reversible - effects wear off immediately",
            "No risk of overdose - we monitor you constantly",
            "No side effects for most patients",
            "Used successfully for 100+ years",
            "We screen for medical conditions beforehand",
          ],
          order: 2,
        },
      ],
    },
    tips: {
      enabled: true,
      title: "Appointment Preparation",
      subtitle: "",
      backgroundColor: "#f9fafb",
      sections: [
        {
          title: "Before Your Appointment",
          borderColor: "#27A8E0",
          backgroundColor: "#ffffff",
          items: [
            "Eat a light meal 1-2 hours before (empty stomach better)",
            "Avoid alcohol 24 hours before",
            "Tell us about any medications you take",
            "Wear comfortable, loose clothing",
            "Arrive 10-15 minutes early to relax",
          ],
          order: 1,
        },
        {
          title: "During Your Appointment",
          borderColor: "#5FC1D7",
          backgroundColor: "#ffffff",
          items: [
            "Relax while we do our work",
            "Raise your hand if you need a break",
            "Breathe normally through your nose",
            "We adjust the gas level as needed",
            "Stay as comfortable as possible",
          ],
          order: 2,
        },
        {
          title: "After Your Appointment",
          borderColor: "#f59e0b",
          backgroundColor: "#ffffff",
          items: [
            "Effects wear off completely within minutes",
            "You can drive yourself home",
            "Resume normal activities immediately",
            "Eat soft foods if your mouth is numb",
            "No restrictions on work or exercise",
          ],
          order: 3,
        },
        {
          title: "Common Questions",
          borderColor: "#10b981",
          backgroundColor: "#ffffff",
          items: [
            "Will I remember? Yes - you'll be aware throughout",
            "Is it safe? Yes - very safe with proper monitoring",
            "Can I use it? Suitable for most people - we'll discuss your history",
            "Can kids use it? Yes - excellent option for anxious children",
          ],
          order: 4,
        },
      ],
    },
    comparison: {
      enabled: true,
      title: "Is Nitrous Right for You?",
      subtitle: "",
      backgroundColor: "#ffffff",
      comparisons: [
        {
          title: "Generally Safe For",
          icon: "CheckCircle",
          iconColor: "#10b981",
          items: [
            "Healthy patients of all ages",
            "Anxiety or nervous patients",
            "Those with sensitive teeth/gag reflex",
            "Patients needing longer procedures",
            "Children and adolescents",
            "Pregnant women (in 2nd/3rd trimester)",
          ],
          isPositive: true,
          order: 1,
        },
        {
          title: "May Not Be Suitable",
          icon: "AlertCircle",
          iconColor: "#ef4444",
          items: [
            "Severe respiratory conditions",
            "Uncontrolled high blood pressure",
            "Recent drug or alcohol abuse",
            "Certain psychological conditions",
            "First trimester pregnancy",
            "Active vitamin B12 deficiency",
          ],
          isPositive: false,
          order: 2,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Frequently Asked Questions",
      backgroundColor: "#f9fafb",
      faqs: [
        {
          question: "Is nitrous oxide safe?",
          answer:
            "Yes, nitrous oxide is very safe and has been used in dentistry for over 150 years with an excellent safety record.",
          order: 1,
        },
        {
          question: "Will I be unconscious?",
          answer:
            "No, you remain fully conscious and able to communicate. You'll just feel relaxed and less anxious.",
          order: 2,
        },
        {
          question: "Can I drive after?",
          answer:
            "Yes! Unlike other sedation methods, nitrous wears off within minutes and you can safely drive home.",
          order: 3,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Make Your Appointment Comfortable",
      description:
        "Experience dental care without anxiety. Ask about nitrous sedation at your next visit.",
      gradientFrom: "slate-700",
      gradientVia: "blue-700",
      gradientTo: "sky-700",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      phone: "437-913-9288",
      address: "888 Meadowlands Dr, Ottawa, ON K2C 3R2",
      showContactInfo: true,
    },
    sectionOrder: [
      "hero",
      "benefits",
      "features",
      "process",
      "whatToExpect",
      "tips",
      "comparison",
      "faq",
      "cta",
    ],
    seo: {
      metaTitle: "Nitrous Sedation Ottawa | Laughing Gas Dentistry",
      metaDescription:
        "Comfortable, anxiety-free dental care with nitrous oxide sedation in Ottawa. Safe, gentle relaxation for nervous patients.",
      metaKeywords: [
        "nitrous sedation",
        "laughing gas",
        "sedation dentistry",
        "Ottawa dentist",
        "dental anxiety",
      ],
    },
  },

  // 9. NIGHT GUARDS
  {
    serviceKey: "night-guards",
    title: "Night Guards",
    displayName: "Night Guards",
    slug: "night-guards",
    category: "specialty",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#4f46e5",
    },
    hero: {
      enabled: true,
      category: "TEETH PROTECTION",
      categoryColor: "#4f46e5",
      title: "Night Guards",
      description:
        "Custom-fitted night guards protect your teeth and jaw from grinding and clenching damage while you sleep. Wake up refreshed, not sore.",
      primaryButtonText: "Get Your Night Guard",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#4f46e5",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/service9/Gemini_Generated_Image_kjxnqykjxnqykjxn.png",
      heroImageAlt: "Night Guard",
      gradientFrom: "#f8fafc",
      gradientVia: "#eff6ff",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "Do You Grind Your Teeth?",
      subtitle:
        "Up to 40% of people suffer from bruxism (teeth grinding) during sleep",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "Moon",
          iconColor: "#4f46e5",
          title: "Common Problem",
          description:
            "Bruxism affects millions - often unknowingly during sleep",
          order: 1,
        },
        {
          icon: "Heart",
          iconColor: "#ef4444",
          title: "Serious Damage",
          description:
            "Can cause enamel wear, cracks, and painful jaw disorders",
          order: 2,
        },
        {
          icon: "Shield",
          iconColor: "#10b981",
          title: "Easy Solution",
          description: "Night guards prevent damage and improve sleep quality",
          order: 3,
        },
      ],
    },
    features: {
      enabled: true,
      title: "Signs You May Be Grinding",
      subtitle: "",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "CheckCircle",
          iconColor: "#ef4444",
          title: "Morning jaw pain or soreness",
          description: "",
          order: 1,
        },
        {
          icon: "CheckCircle",
          iconColor: "#ef4444",
          title: "Headaches upon waking",
          description: "",
          order: 2,
        },
        {
          icon: "CheckCircle",
          iconColor: "#ef4444",
          title: "Worn or flattened teeth",
          description: "",
          order: 3,
        },
        {
          icon: "CheckCircle",
          iconColor: "#ef4444",
          title: "Cracked or chipped teeth",
          description: "",
          order: 4,
        },
        {
          icon: "CheckCircle",
          iconColor: "#ef4444",
          title: "Ear pain or ringing",
          description: "",
          order: 5,
        },
        {
          icon: "CheckCircle",
          iconColor: "#ef4444",
          title: "Partner mentions grinding sounds",
          description: "",
          order: 6,
        },
      ],
    },
    comparison: {
      enabled: true,
      title: "Prevent Costly Damage",
      subtitle:
        "Grinding can cause over $20,000 in dental damage - a night guard costs a fraction of that",
      backgroundColor: "#ffffff",
      image: "/assets/service9/Gemini_Generated_Image_kjxnqykjxnqykjxn (1).png",
      imageAlt: "Sleep Comfort",
      comparisons: [
        {
          title: "Damage from Grinding",
          icon: "AlertCircle",
          iconColor: "#ef4444",
          items: [
            "Enamel erosion and wear",
            "Tooth cracks and fractures",
            "Broken crowns and bridges",
            "Worn-down teeth requiring crowns",
            "Temporomandibular joint (TMJ) disorders",
            "Gum recession and bone loss",
          ],
          isPositive: false,
          order: 1,
        },
        {
          title: "Night Guard Benefits",
          icon: "CheckCircle",
          iconColor: "#10b981",
          items: [
            "Prevents all grinding damage",
            "Reduces jaw pain and headaches",
            "Improves sleep quality",
            "Protects investment in dental work",
            "Affordable preventive solution",
            "Lasts 5+ years",
          ],
          isPositive: true,
          order: 2,
        },
      ],
    },
    types: {
      enabled: true,
      title: "Night Guard Options",
      subtitle: "We offer custom and quality ready-made options",
      backgroundColor: "#f9fafb",
      types: [
        {
          title: "Custom Guards",
          description:
            "Made specifically for your mouth from dental impressions",
          icon: "Award",
          iconColor: "#4f46e5",
          features: [
            "Perfect fit",
            "Maximum comfort",
            "Best protection",
            "Durable 5-7 years",
            "Most effective",
          ],
          price: "$250-$500",
          order: 1,
        },
        {
          title: "Thin & Comfortable",
          description: "Flexible material for all-night comfort and breathing",
          icon: "Shield",
          iconColor: "#5FC1D7",
          features: [
            "Thinner design",
            "Easy to wear",
            "Better breathing",
            "Lasts 3-5 years",
            "Popular choice",
          ],
          isRecommended: true,
          order: 2,
        },
        {
          title: "Heavy Duty",
          description: "Thicker, more rigid for severe grinding",
          icon: "Zap",
          iconColor: "#f59e0b",
          features: [
            "Maximum durability",
            "Heavy grinders",
            "Extra protection",
            "Lasts 7-10 years",
            "Most resistant",
          ],
          price: "$350-$600",
          order: 3,
        },
      ],
    },
    process: {
      enabled: true,
      title: "Getting Your Custom Night Guard",
      subtitle: "Quick, easy process for a perfect fit",
      backgroundColor: "#ffffff",
      image: "/assets/service9/Gemini_Generated_Image_ppekw5ppekw5ppek.png",
      imageAlt: "Dental Lab",
      steps: [
        {
          stepNumber: 1,
          title: "Examination",
          description: "Assess your teeth and jaw for grinding damage",
          icon: "Search",
          iconColor: "#4f46e5",
          order: 1,
        },
        {
          stepNumber: 2,
          title: "Impressions",
          description: "Take dental molds for precise customization",
          icon: "Scan",
          iconColor: "#5FC1D7",
          order: 2,
        },
        {
          stepNumber: 3,
          title: "Lab Creation",
          description: "Guard is custom-made to exact specifications",
          icon: "Tool",
          iconColor: "#27A8E0",
          order: 3,
        },
        {
          stepNumber: 4,
          title: "Fitting",
          description: "Final fit and adjustment for comfort",
          icon: "CheckCircle",
          iconColor: "#10b981",
          order: 4,
        },
      ],
    },
    tips: {
      enabled: true,
      title: "Night Guard Care",
      subtitle: "",
      backgroundColor: "#f9fafb",
      sections: [
        {
          title: "Daily Cleaning",
          borderColor: "#4f46e5",
          backgroundColor: "#ffffff",
          items: [
            "Rinse with lukewarm water after each use",
            "Clean with soft toothbrush and mild soap",
            "Never use hot water (can warp material)",
            "Allow to air dry on clean surface",
          ],
          order: 1,
        },
        {
          title: "Storage",
          borderColor: "#5FC1D7",
          backgroundColor: "#ffffff",
          items: [
            "Store in provided protective case",
            "Keep in cool, dry place",
            "Avoid prolonged sun exposure",
            "Never wrap in tissue (can be lost)",
          ],
          order: 2,
        },
        {
          title: "Maintenance Tips",
          borderColor: "#27A8E0",
          backgroundColor: "#ffffff",
          items: [
            "Inspect for cracks or damage monthly",
            "Avoid chewing on the guard",
            "Don't eat or drink while wearing",
            "Replace every 5-7 years or as needed",
          ],
          order: 3,
        },
        {
          title: "Sleep Better",
          borderColor: "#10b981",
          backgroundColor: "#ffffff",
          items: [
            "Wear every night consistently",
            "Takes 1-2 weeks to adjust",
            "Most people sleep better within days",
            "Wake without jaw pain or headaches",
          ],
          order: 4,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Common Questions",
      backgroundColor: "#ffffff",
      faqs: [
        {
          question: "Will I get used to wearing it?",
          answer:
            "Yes, most patients adjust within 1-2 weeks. Initially, it feels foreign, but comfort improves with regular use. Better than waking with jaw pain!",
          order: 1,
        },
        {
          question: "Will it affect my speech?",
          answer:
            "Minimal impact. Some slight thickness, but most people adapt quickly. No one else will notice during normal conversation.",
          order: 2,
        },
        {
          question: "How long do they last?",
          answer:
            "Custom guards typically last 5-7 years. Durability depends on severity of grinding. We'll monitor wear at check-ups and replace as needed.",
          order: 3,
        },
        {
          question: "Does insurance cover it?",
          answer:
            "Many insurance plans cover part of the cost as a preventive measure. We'll verify your coverage and handle billing. Ask about our payment plans too!",
          order: 4,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Sleep Peacefully",
      description:
        "Stop grinding damage before it starts. Get a custom night guard and wake up without jaw pain or headaches.",
      gradientFrom: "slate-700",
      gradientVia: "blue-700",
      gradientTo: "cyan-700",
      primaryButtonText: "Get Your Night Guard",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      secondaryButtonText: "Ask About Options",
      secondaryButtonLink: "/contact",
      phone: "437-913-9288",
      address: "888 Meadowlands Dr, Ottawa, ON K2C 3R2",
      showContactInfo: true,
    },
    sectionOrder: [
      "hero",
      "benefits",
      "features",
      "comparison",
      "types",
      "process",
      "tips",
      "faq",
      "cta",
    ],
    seo: {
      metaTitle: "Night Guards Ottawa | Custom Teeth Grinding Protection",
      metaDescription:
        "Custom night guards in Ottawa to protect against teeth grinding and clenching. Comfortable, durable protection for better sleep.",
      metaKeywords: [
        "night guards",
        "teeth grinding",
        "bruxism",
        "Ottawa dentist",
        "mouth guard",
        "TMJ",
      ],
    },
  },

  // 10. DENTAL BONDING
  {
    serviceKey: "dental-bonding",
    title: "Dental Bonding",
    displayName: "Dental Bonding",
    slug: "dental-bonding",
    category: "cosmetic",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#ec4899",
    },
    hero: {
      enabled: true,
      category: "COSMETIC DENTISTRY",
      categoryColor: "#ec4899",
      title: "Dental Bonding",
      description:
        "Transform your smile quickly and affordably with dental bonding. This versatile treatment repairs chips, closes gaps, and reshapes teeth in just one visit.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/services/dental-bonding-hero.png",
      heroImageAlt: "Dental Bonding",
      gradientFrom: "#fdf2f8",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "Benefits of Dental Bonding",
      subtitle: "A quick, affordable way to enhance your smile",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "Clock",
          iconColor: "#ec4899",
          title: "One-Visit Treatment",
          description: "Transform your smile in a single appointment",
          order: 1,
        },
        {
          icon: "DollarSign",
          iconColor: "#5FC1D7",
          title: "Cost-Effective",
          description: "More affordable than veneers or crowns",
          order: 2,
        },
        {
          icon: "Smile",
          iconColor: "#27A8E0",
          title: "Natural Results",
          description: "Composite is matched perfectly to your tooth color",
          order: 3,
        },
      ],
    },
    features: {
      enabled: true,
      title: "What Bonding Can Fix",
      subtitle: "Versatile solutions for various cosmetic concerns",
      backgroundColor: "#ffffff",
      items: [
        {
          icon: "Tool",
          iconColor: "#ec4899",
          title: "Chipped Teeth",
          description: "Restore broken or chipped teeth to their natural shape",
          order: 1,
        },
        {
          icon: "Maximize",
          iconColor: "#5FC1D7",
          title: "Gaps & Spaces",
          description: "Close small gaps between teeth",
          order: 2,
        },
        {
          icon: "Edit",
          iconColor: "#27A8E0",
          title: "Reshape Teeth",
          description: "Improve the shape of irregular teeth",
          order: 3,
        },
        {
          icon: "Droplet",
          iconColor: "#10b981",
          title: "Discoloration",
          description: "Cover stains that don't respond to whitening",
          order: 4,
        },
      ],
    },
    process: {
      enabled: true,
      title: "The Bonding Process",
      subtitle: "Quick and comfortable procedure",
      backgroundColor: "#f9fafb",
      steps: [
        {
          stepNumber: 1,
          title: "Color Matching",
          description:
            "We select composite resin that matches your natural teeth",
          icon: "Palette",
          iconColor: "#ec4899",
          order: 1,
        },
        {
          stepNumber: 2,
          title: "Surface Preparation",
          description: "The tooth surface is gently roughened for bonding",
          icon: "Layers",
          iconColor: "#5FC1D7",
          order: 2,
        },
        {
          stepNumber: 3,
          title: "Application",
          description: "Composite is applied, shaped, and molded to perfection",
          icon: "PenTool",
          iconColor: "#27A8E0",
          order: 3,
        },
        {
          stepNumber: 4,
          title: "Curing & Polish",
          description:
            "Special light hardens the material, then it's polished smooth",
          icon: "Sparkles",
          iconColor: "#10b981",
          order: 4,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Frequently Asked Questions",
      backgroundColor: "#ffffff",
      faqs: [
        {
          question: "How long does bonding last?",
          answer:
            "With proper care, dental bonding can last 5-10 years before needing touch-ups or replacement.",
          order: 1,
        },
        {
          question: "Is bonding better than veneers?",
          answer:
            "Bonding is less expensive and requires less tooth reduction, but veneers last longer and resist staining better.",
          order: 2,
        },
        {
          question: "Does bonding stain?",
          answer:
            "Composite can stain over time. Avoid coffee, tea, and tobacco, and maintain good oral hygiene.",
          order: 3,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Ready for a Smile Makeover?",
      description:
        "Dental bonding is a quick, affordable way to transform your smile. Schedule a consultation today.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      phone: "(613) 555-0123",
      address: "Ottawa, ON",
      showContactInfo: true,
    },
    sectionOrder: ["hero", "benefits", "features", "process", "faq", "cta"],
    seo: {
      metaTitle: "Dental Bonding Ottawa | Cosmetic Tooth Repair",
      metaDescription:
        "Quick, affordable dental bonding in Ottawa. Repair chips, close gaps, and reshape teeth in just one visit.",
      metaKeywords: [
        "dental bonding",
        "cosmetic dentistry",
        "Ottawa dentist",
        "tooth repair",
        "smile makeover",
      ],
    },
  },

  // 11. DENTAL CROWNS
  {
    serviceKey: "dental-crowns",
    title: "Dental Crowns",
    displayName: "Dental Crowns",
    slug: "dental-crowns",
    category: "restorative",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#d97706",
    },
    hero: {
      enabled: true,
      category: "RESTORATIVE DENTISTRY",
      categoryColor: "#d97706",
      title: "Dental Crowns",
      description:
        "Dr. Avneet Dhaliwal offers custom dental crowns in Ottawa for patients who need a long-lasting solution to restore damaged or weakened teeth. Crowns improve appearance and reinforce tooth structure.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/service3/dental-crowns-hero.png",
      heroImageAlt: "Dental Crown",
      gradientFrom: "#fef3c7",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "Dental Crowns in Ottawa",
      subtitle:
        "A versatile and durable option that provides full coverage and protection",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "Shield",
          iconColor: "#d97706",
          title: "Full Protection",
          description:
            "Crowns provide complete coverage, protecting damaged teeth and allowing natural function",
          order: 1,
        },
        {
          icon: "Award",
          iconColor: "#5FC1D7",
          title: "Long-Lasting",
          description:
            "With proper care, dental crowns can last many years, providing durable restoration",
          order: 2,
        },
        {
          icon: "Sparkles",
          iconColor: "#27A8E0",
          title: "Natural Appearance",
          description:
            "Custom-made to match your natural teeth for a seamless, beautiful smile",
          order: 3,
        },
      ],
    },
    features: {
      enabled: true,
      title: "When You Need a Crown",
      subtitle:
        "Crowns are especially helpful for teeth that are too damaged for fillings",
      backgroundColor: "#ffffff",
      items: [
        {
          icon: "AlertCircle",
          iconColor: "#d97706",
          title: "Severe Decay",
          description: "Tooth too damaged for a filling",
          order: 1,
        },
        {
          icon: "Tool",
          iconColor: "#5FC1D7",
          title: "After Root Canal",
          description: "Protect weakened teeth after root canal treatment",
          order: 2,
        },
        {
          icon: "Zap",
          iconColor: "#27A8E0",
          title: "Cracked Teeth",
          description: "Restore cracked or broken teeth",
          order: 3,
        },
        {
          icon: "Link",
          iconColor: "#10b981",
          title: "Bridge Support",
          description: "Anchor dental bridges securely",
          order: 4,
        },
      ],
    },
    types: {
      enabled: true,
      title: "Types of Dental Crowns",
      subtitle: "Various crown options including porcelain, ceramic, and metal",
      backgroundColor: "#f9fafb",
      types: [
        {
          title: "Porcelain Crowns",
          description:
            "Famous for natural appearance, closely matching existing tooth color",
          icon: "Crown",
          iconColor: "#d97706",
          features: ["Natural appearance", "Color-matched", "Biocompatible"],
          isRecommended: true,
          order: 1,
        },
        {
          title: "Ceramic Crowns",
          description:
            "All-ceramic option ideal for front teeth with excellent aesthetics",
          icon: "Sparkles",
          iconColor: "#5FC1D7",
          features: [
            "Metal-free",
            "Great for front teeth",
            "Natural translucency",
          ],
          order: 2,
        },
        {
          title: "Porcelain-Fused-to-Metal",
          description:
            "Combines strength of metal with aesthetics of porcelain",
          icon: "Shield",
          iconColor: "#27A8E0",
          features: ["Very strong", "Good aesthetics", "Versatile"],
          order: 3,
        },
      ],
    },
    process: {
      enabled: true,
      title: "The Crown Process",
      subtitle: "Typically completed in two visits",
      backgroundColor: "#ffffff",
      steps: [
        {
          stepNumber: 1,
          title: "Consultation & Preparation",
          description:
            "Examination, X-rays, and tooth preparation with impressions taken",
          icon: "Scan",
          iconColor: "#d97706",
          order: 1,
        },
        {
          stepNumber: 2,
          title: "Temporary Crown",
          description:
            "A temporary crown protects your tooth while the permanent one is made",
          icon: "Clock",
          iconColor: "#5FC1D7",
          order: 2,
        },
        {
          stepNumber: 3,
          title: "Crown Fabrication",
          description:
            "Your custom crown is crafted in a dental lab to exact specifications",
          icon: "Tool",
          iconColor: "#27A8E0",
          order: 3,
        },
        {
          stepNumber: 4,
          title: "Permanent Placement",
          description:
            "The permanent crown is fitted, adjusted, and cemented in place",
          icon: "CheckCircle",
          iconColor: "#10b981",
          order: 4,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Frequently Asked Questions",
      backgroundColor: "#f9fafb",
      faqs: [
        {
          question: "How long do dental crowns last?",
          answer:
            "With proper care, dental crowns can last 10-15 years or longer. Good oral hygiene extends their lifespan.",
          order: 1,
        },
        {
          question: "Is getting a crown painful?",
          answer:
            "The procedure is done under local anesthesia, so you should feel no pain. Some sensitivity afterward is normal.",
          order: 2,
        },
        {
          question: "Can I eat normally with a crown?",
          answer:
            "Yes! Once cemented, crowns function like natural teeth. Avoid very hard foods that could damage them.",
          order: 3,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Restore Your Smile with Dental Crowns",
      description:
        "Custom crowns that look and feel like natural teeth. Schedule your consultation today.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      phone: "(613) 555-0123",
      address: "Ottawa, ON",
      showContactInfo: true,
    },
    sectionOrder: [
      "hero",
      "benefits",
      "features",
      "types",
      "process",
      "faq",
      "cta",
    ],
    seo: {
      metaTitle: "Dental Crowns Ottawa | Custom Tooth Restoration",
      metaDescription:
        "Custom dental crowns in Ottawa to restore damaged teeth. Natural-looking, durable crowns that protect and strengthen your smile.",
      metaKeywords: [
        "dental crowns",
        "tooth crown",
        "Ottawa dentist",
        "tooth restoration",
        "porcelain crown",
      ],
    },
  },

  // 12. DENTAL BRIDGES
  {
    serviceKey: "dental-bridges",
    title: "Dental Bridges",
    displayName: "Dental Bridges",
    slug: "dental-bridges",
    category: "restorative",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#0891b2",
    },
    hero: {
      enabled: true,
      category: "RESTORATIVE DENTISTRY",
      categoryColor: "#0891b2",
      title: "Dental Bridges",
      description:
        "Replace missing teeth and restore your complete smile with custom dental bridges. Our bridges look natural and help maintain proper bite alignment.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/services/dental-bridges-hero.png",
      heroImageAlt: "Dental Bridge",
      gradientFrom: "#ecfeff",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "Benefits of Dental Bridges",
      subtitle: "A proven solution for replacing missing teeth",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "Smile",
          iconColor: "#0891b2",
          title: "Complete Smile",
          description:
            "Fill gaps left by missing teeth for a natural-looking smile",
          order: 1,
        },
        {
          icon: "Target",
          iconColor: "#5FC1D7",
          title: "Proper Alignment",
          description: "Prevent remaining teeth from shifting out of position",
          order: 2,
        },
        {
          icon: "Utensils",
          iconColor: "#27A8E0",
          title: "Better Function",
          description: "Restore ability to chew and speak properly",
          order: 3,
        },
      ],
    },
    types: {
      enabled: true,
      title: "Types of Dental Bridges",
      subtitle: "Options to suit different situations",
      backgroundColor: "#ffffff",
      types: [
        {
          title: "Traditional Bridge",
          description:
            "Most common type - anchored by crowns on teeth on either side of the gap",
          icon: "Link",
          iconColor: "#0891b2",
          features: ["Most common", "Very stable", "Natural look"],
          isRecommended: true,
          order: 1,
        },
        {
          title: "Cantilever Bridge",
          description:
            "Anchored on one side only - used when teeth exist on only one side",
          icon: "ArrowRight",
          iconColor: "#5FC1D7",
          features: [
            "One-sided support",
            "Less tooth prep",
            "Specific situations",
          ],
          order: 2,
        },
        {
          title: "Implant-Supported Bridge",
          description: "Secured by dental implants instead of natural teeth",
          icon: "Anchor",
          iconColor: "#27A8E0",
          features: ["No tooth reduction", "Most secure", "Preserves bone"],
          order: 3,
        },
      ],
    },
    process: {
      enabled: true,
      title: "The Bridge Process",
      subtitle: "Usually completed in two to three visits",
      backgroundColor: "#f9fafb",
      steps: [
        {
          stepNumber: 1,
          title: "Evaluation",
          description:
            "Examination of supporting teeth and discussion of options",
          icon: "Search",
          iconColor: "#0891b2",
          order: 1,
        },
        {
          stepNumber: 2,
          title: "Tooth Preparation",
          description: "Anchor teeth are shaped and impressions are taken",
          icon: "Tool",
          iconColor: "#5FC1D7",
          order: 2,
        },
        {
          stepNumber: 3,
          title: "Temporary Bridge",
          description: "A temporary bridge protects prepared teeth",
          icon: "Clock",
          iconColor: "#27A8E0",
          order: 3,
        },
        {
          stepNumber: 4,
          title: "Final Placement",
          description:
            "Custom bridge is fitted, adjusted, and permanently cemented",
          icon: "CheckCircle",
          iconColor: "#10b981",
          order: 4,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Frequently Asked Questions",
      backgroundColor: "#ffffff",
      faqs: [
        {
          question: "How long do bridges last?",
          answer:
            "Dental bridges typically last 5-15 years or longer with good oral hygiene and regular dental visits.",
          order: 1,
        },
        {
          question: "Is a bridge better than an implant?",
          answer:
            "Both are excellent options. Bridges are faster and less invasive, while implants preserve adjacent teeth and bone.",
          order: 2,
        },
        {
          question: "How do I care for my bridge?",
          answer:
            "Brush and floss daily, including under the bridge using floss threaders or a water flosser.",
          order: 3,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Complete Your Smile",
      description:
        "Dental bridges restore function and aesthetics. Schedule a consultation to explore your options.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      phone: "(613) 555-0123",
      address: "Ottawa, ON",
      showContactInfo: true,
    },
    sectionOrder: ["hero", "benefits", "types", "process", "faq", "cta"],
    seo: {
      metaTitle: "Dental Bridges Ottawa | Replace Missing Teeth",
      metaDescription:
        "Custom dental bridges in Ottawa to replace missing teeth. Restore your smile and proper bite with natural-looking bridges.",
      metaKeywords: [
        "dental bridges",
        "missing teeth",
        "Ottawa dentist",
        "tooth replacement",
        "fixed bridge",
      ],
    },
  },

  // 13. DENTAL IMPLANTS
  {
    serviceKey: "dental-implants",
    title: "Dental Implants",
    displayName: "Dental Implants in Ottawa",
    slug: "dental-implants",
    category: "restorative",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#d97706",
    },
    hero: {
      enabled: true,
      category: "RESTORATIVE DENTISTRY",
      categoryColor: "#d97706",
      title: "Dental Implants in Ottawa",
      description:
        "At Smile Health Dental, Dr. Avneet Dhaliwal offers dental implant services to restore functionality and aesthetics for patients experiencing tooth loss. Dental implants are an ideal tooth loss replacement solution, using a titanium post embedded in the jawbone to replicate the anatomic root form of a natural dentition.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#5FC1D7",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/service1/placeholder1.png",
      heroImageAlt: "Dental Implant",
      gradientFrom: "#f8fafc",
      gradientVia: "#eff6ff",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "Dental Implants in Ottawa",
      subtitle:
        "A permanent solution that provides stability and confidence for tooth replacement",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "Shield",
          iconColor: "#d97706",
          title: "Osseointegration",
          description:
            "Titanium post fuses with jawbone for permanent stability",
          order: 1,
        },
        {
          icon: "Award",
          iconColor: "#5FC1D7",
          title: "Bone Preservation",
          description: "Prevents bone loss and maintains facial structure",
          order: 2,
        },
        {
          icon: "Sparkles",
          iconColor: "#27A8E0",
          title: "Natural Appearance",
          description:
            "Custom crown provides seamless, natural-looking results",
          order: 3,
        },
      ],
    },
    features: {
      enabled: true,
      title: "Why Choose Dental Implants?",
      subtitle:
        "For those searching for dental implants near me, dental implants present several benefits over traditional options like dentures or bridges.",
      backgroundColor: "#ffffff",
      items: [
        {
          icon: "CheckCircle",
          iconColor: "#5FC1D7",
          title: "Key Advantages",
          description:
            "Superior stability and confidence, maintains jawbone density, prevents facial structure changes, no alterations to neighboring teeth, long-lasting durable solution",
          order: 1,
        },
        {
          icon: "CheckCircle",
          iconColor: "#27A8E0",
          title: "Versatile Applications",
          description:
            "Single tooth replacement, multiple teeth restoration, full-arch replacement, support for dentures",
          order: 2,
        },
      ],
    },
    allOnFour: {
      enabled: true,
      title: "Options for Full-Arch Replacement: All-on-Four Implants",
      subtitle:
        "For patients with multiple missing teeth or full-arch tooth loss, all-on-four implants offer a streamlined and effective option.",
      backgroundColor: "#f9fafb",
      items: [
        {
          title: "Four Implants",
          description: "Strategically positioned for maximum support",
          icon: "Target",
          iconColor: "#10b981",
          order: 1,
        },
        {
          title: "Full Arch",
          description: "Complete restoration in one procedure",
          icon: "Maximize",
          iconColor: "#5FC1D7",
          order: 2,
        },
        {
          title: "Faster Recovery",
          description: "Reduced treatment time and cost",
          icon: "Clock",
          iconColor: "#27A8E0",
          order: 3,
        },
        {
          title: "Superior Stability",
          description: "Better than traditional dentures",
          icon: "Shield",
          iconColor: "#8b5cf6",
          order: 4,
        },
      ],
    },
    seniors: {
      enabled: true,
      title: "Dental Implants for Seniors",
      subtitle:
        "Dental implants are also a great choice for older adults. Implants for seniors provide long-lasting comfort and ease of maintenance.",
      backgroundColor: "#ffffff",
      items: [
        {
          icon: "Clock",
          iconColor: "#5FC1D7",
          title: "Long-Lasting Comfort",
          description:
            "Superior retention and stability compared to conventional dentures",
          order: 1,
        },
        {
          icon: "Award",
          iconColor: "#27A8E0",
          title: "Enhanced Quality of Life",
          description:
            "Enjoy a maximized variety of foods and speak confidently",
          order: 2,
        },
        {
          icon: "Shield",
          iconColor: "#10b981",
          title: "Bone Health Maintenance",
          description:
            "Critical for seniors as bone loss can occur more rapidly following tooth loss",
          order: 3,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Frequently Asked Questions",
      subtitle:
        "Common questions about dental implants answered by Dr. Avneet Dhaliwal",
      backgroundColor: "#f9fafb",
      faqs: [
        {
          question: "How long do dental implants last?",
          answer:
            "With proper care and maintenance, dental implants can last 15-25 years or longer. The titanium post itself can last a lifetime, while the crown may need replacement after 10-15 years depending on oral hygiene and wear.",
          order: 1,
        },
        {
          question: "Are implants suitable for replacing multiple teeth?",
          answer:
            "Yes, dental implants are excellent for replacing multiple teeth. Options include individual implants for each missing tooth, implant-supported bridges, or full-arch solutions like All-on-Four for complete upper or lower restorations.",
          order: 2,
        },
        {
          question: "Is the procedure painful?",
          answer:
            "Dental implant procedures are performed under local anesthesia, so patients typically experience minimal discomfort during the procedure. Post-operative discomfort is usually mild and can be managed with prescribed pain medication and proper care.",
          order: 3,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Visit Your Trusted Dental Clinic Nepean for Implant Solutions",
      description:
        "For high-quality dental implants in Ottawa, visit Smile Health Dental at 888 Meadowlands Dr, Ottawa, ON K2C 3R2, Canada. Our team, led by Dr. Avneet Dhaliwal, is committed to delivering customized implant care, helping you achieve optimal function and aesthetics.",
      gradientFrom: "#334155",
      gradientVia: "#1d4ed8",
      gradientTo: "#0284c7",
      primaryButtonText: "Schedule a Consultation",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#ffffff",
      secondaryButtonText: "Contact Us",
      secondaryButtonLink: "/contact",
      phone: "437-913-9288",
      address: "888 Meadowlands Dr, Ottawa, ON K2C 3R2",
      showContactInfo: true,
    },
    sectionOrder: [
      "hero",
      "benefits",
      "features",
      "allOnFour",
      "seniors",
      "faq",
      "cta",
    ],
    seo: {
      metaTitle:
        "Dental Implants Ottawa | Permanent Tooth Replacement | Smile Health Dental",
      metaDescription:
        "Dr. Avneet Dhaliwal offers dental implants in Ottawa to restore functionality and aesthetics. Titanium implants for permanent tooth replacement at Smile Health Dental.",
      metaKeywords: [
        "dental implants Ottawa",
        "tooth implant",
        "dental implant surgery",
        "tooth replacement",
        "All-on-Four implants",
        "implants for seniors",
        "Ottawa dentist",
        "Smile Health Dental",
      ],
    },
  },

  // 14. PARTIAL DENTURES
  {
    serviceKey: "partial-dentures",
    title: "Partial Dentures",
    displayName: "Partial Dentures in Ottawa",
    slug: "partial-dentures",
    category: "restorative",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#d97706",
    },
    hero: {
      enabled: true,
      category: "RESTORATIVE DENTISTRY",
      categoryColor: "#d97706",
      title: "Partial Dentures in Ottawa",
      description:
        "At Smile Health Dental, Dr. Avneet Dhaliwal offers a variety of denture options to restore functionality and aesthetics for those with missing teeth. Dentures are custom-crafted to fit comfortably and look natural, helping patients regain confidence in their smiles.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#5FC1D7",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/service1/placeholder1.png",
      heroImageAlt: "Partial Dentures",
      gradientFrom: "#f8fafc",
      gradientVia: "#eff6ff",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "Partial Dentures in Ottawa",
      subtitle:
        "A removable solution that provides comfort and natural appearance for patients with some remaining teeth",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "Shield",
          iconColor: "#d97706",
          title: "Custom Fit",
          description:
            "Precisely crafted to fit comfortably with your remaining natural teeth",
          order: 1,
        },
        {
          icon: "Award",
          iconColor: "#5FC1D7",
          title: "Natural Appearance",
          description:
            "Designed to blend seamlessly with your natural teeth and smile",
          order: 2,
        },
        {
          icon: "Sparkles",
          iconColor: "#27A8E0",
          title: "Improved Function",
          description:
            "Restores ability to chew, speak, and smile with confidence",
          order: 3,
        },
      ],
    },
    types: {
      enabled: true,
      title: "Types of Dentures We Provide",
      subtitle:
        "If you're searching for a denture near me, our Ottawa clinic offers complete and partial dentures tailored to your needs.",
      backgroundColor: "#ffffff",
      types: [
        {
          title: "Partial Dentures",
          description:
            "Ideal for patients with some remaining natural teeth. Partial dentures fit comfortably alongside existing teeth, providing a balanced and natural appearance while restoring functionality.",
          icon: "Smile",
          iconColor: "#5FC1D7",
          features: [
            "Removable for easy cleaning",
            "Preserves remaining natural teeth",
            "Cost-effective solution",
          ],
          order: 1,
        },
        {
          title: "Complete Dentures",
          description:
            "Perfect for those who have lost all their teeth in one or both arches. Complete dentures provide total tooth replacement while supporting proper jaw alignment and facial structure.",
          icon: "Maximize",
          iconColor: "#27A8E0",
          features: [
            "Full arch replacement",
            "Can be implant-supported for stability",
            "Restores facial structure",
          ],
          order: 2,
        },
      ],
    },
    services: {
      enabled: true,
      title: "Comprehensive Denture Services",
      subtitle:
        "Smile Health Dental provides complete denture care, from initial fitting to ongoing maintenance and repairs.",
      backgroundColor: "#f9fafb",
      items: [
        {
          title: "Custom Fitting",
          description:
            "Precise measurements and adjustments for optimal comfort",
          icon: "Target",
          iconColor: "#5FC1D7",
          order: 1,
        },
        {
          title: "Repairs & Maintenance",
          description: "Professional repairs and relining when needed",
          icon: "Tool",
          iconColor: "#27A8E0",
          order: 2,
        },
        {
          title: "Regular Check-ups",
          description: "Monitoring fit and function over time",
          icon: "CheckCircle",
          iconColor: "#10b981",
          order: 3,
        },
        {
          title: "Tooth Extractions",
          description: "Smooth transition to dentures when necessary",
          icon: "Scissors",
          iconColor: "#8b5cf6",
          order: 4,
        },
      ],
    },
    partialBenefits: {
      enabled: true,
      title: "Benefits of Partial Dentures",
      subtitle:
        "Partial dentures offer numerous advantages for patients with some remaining natural teeth.",
      backgroundColor: "#ffffff",
      items: [
        {
          icon: "Smile",
          iconColor: "#5FC1D7",
          title: "Restored Confidence",
          description:
            "Fill gaps in your smile and speak with confidence, knowing your teeth look natural and complete.",
          order: 1,
        },
        {
          icon: "Clock",
          iconColor: "#27A8E0",
          title: "Improved Functionality",
          description:
            "Better chewing ability and speech clarity, allowing you to enjoy your favorite foods again.",
          order: 2,
        },
        {
          icon: "Shield",
          iconColor: "#10b981",
          title: "Bone Health Support",
          description:
            "Helps maintain proper jaw alignment and prevents remaining teeth from shifting out of position.",
          order: 3,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Frequently Asked Questions",
      subtitle:
        "Common questions about partial dentures answered by Dr. Avneet Dhaliwal",
      backgroundColor: "#f9fafb",
      faqs: [
        {
          question: "How often should dentures be replaced?",
          answer:
            "Dentures typically last 5-10 years with proper care, though they may need adjustments or relining during that time. Regular dental check-ups will help determine when replacement is necessary due to wear or changes in your mouth.",
          order: 1,
        },
        {
          question: "Can I eat normally with dentures?",
          answer:
            "Yes, with proper adjustment and practice, you can eat most foods normally with dentures. Start with soft foods and gradually work up to harder foods. Some foods like sticky candies or very hard items may still be challenging.",
          order: 2,
        },
        {
          question: "Are partial dentures removable?",
          answer:
            "Yes, partial dentures are removable. This allows for easy cleaning and maintenance. You should remove them at night and soak them in a denture cleaning solution. Regular removal also gives your gums a chance to rest.",
          order: 3,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Contact Your Trusted Dental Clinic Nepean for Denture Care",
      description:
        "For quality dentures in Ottawa, visit Smile Health Dental at 888 Meadowlands Dr, Ottawa, ON K2C 3R2, Canada. Our experienced team, led by Dr. Avneet Dhaliwal, is dedicated to helping you find the right denture solutions to restore comfort and functionality.",
      gradientFrom: "#334155",
      gradientVia: "#1d4ed8",
      gradientTo: "#0284c7",
      primaryButtonText: "Schedule a Consultation",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#ffffff",
      secondaryButtonText: "Contact Us",
      secondaryButtonLink: "/contact",
      phone: "437-913-9288",
      address: "888 Meadowlands Dr, Ottawa, ON K2C 3R2",
      showContactInfo: true,
    },
    sectionOrder: [
      "hero",
      "benefits",
      "types",
      "services",
      "partialBenefits",
      "faq",
      "cta",
    ],
    seo: {
      metaTitle:
        "Partial Dentures Ottawa | Removable Tooth Replacement | Smile Health Dental",
      metaDescription:
        "Dr. Avneet Dhaliwal offers partial and complete dentures in Ottawa. Custom-crafted dentures to restore functionality and aesthetics at Smile Health Dental.",
      metaKeywords: [
        "partial dentures Ottawa",
        "complete dentures",
        "removable dentures",
        "denture clinic Ottawa",
        "Ottawa dentist",
        "Smile Health Dental",
        "Dr. Avneet Dhaliwal",
      ],
    },
  },

  // 15. TMJ CONSULT
  {
    serviceKey: "tmj-consult",
    title: "TMJ Consult",
    displayName: "TMJ Consult in Ottawa",
    slug: "tmj-consult",
    category: "restorative",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#d97706",
    },
    hero: {
      enabled: true,
      category: "RESTORATIVE DENTISTRY",
      categoryColor: "#d97706",
      title: "TMJ Consult in Ottawa",
      description:
        "At Smile Health Dental in Ottawa, Dr. Avneet Dhaliwal offers comprehensive care for patients experiencing temporomandibular joint disorder (TMD), providing practical solutions to alleviate jaw pain, limited movement, and discomfort.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#5FC1D7",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/service1/placeholder1.png",
      heroImageAlt: "TMJ Consultation",
      gradientFrom: "#f8fafc",
      gradientVia: "#eff6ff",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "Understanding TMJ Disorders",
      subtitle:
        "TMJ disorders may develop from a variety of causes, such as inflammation of the joint, teeth grinding, stress, or injury. Dr. Dhaliwal uses a range of therapeutic techniques to address these issues.",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "Shield",
          iconColor: "#d97706",
          title: "Pain Relief",
          description:
            "Alleviate jaw pain and discomfort through targeted treatments",
          order: 1,
        },
        {
          icon: "Award",
          iconColor: "#5FC1D7",
          title: "Improved Function",
          description: "Restore normal jaw movement and functionality",
          order: 2,
        },
        {
          icon: "Sparkles",
          iconColor: "#27A8E0",
          title: "Better Quality of Life",
          description:
            "Enhanced ability to eat, speak, and perform daily activities",
          order: 3,
        },
      ],
    },
    treatments: {
      enabled: true,
      title: "Personalized TMJ Treatment Options",
      subtitle:
        "Smile Health Dental offers personalized TMJ treatment options designed to address each patient's unique symptoms and diagnosis.",
      backgroundColor: "#ffffff",
      items: [
        {
          title: "Non-Invasive Treatments",
          borderColor: "#5FC1D7",
          backgroundColor: "#eff6ff",
          items: [
            "Custom-made occlusal splints",
            "Physical therapy exercises",
            "Stress management techniques",
            "Posture correction guidance",
          ],
          order: 1,
        },
        {
          title: "Lifestyle Support",
          borderColor: "#27A8E0",
          backgroundColor: "#fff7ed",
          items: [
            "Patient education on TMJ health",
            "Relaxation techniques",
            "Sleep quality improvement",
            "Dietary recommendations",
          ],
          order: 2,
        },
      ],
    },
    treatmentBenefits: {
      enabled: true,
      title: "Benefits of Seeking TMJ Treatment",
      subtitle:
        "Prompt treatment for TMJ disorders reduces pain and improves overall jaw functionality and quality of life.",
      backgroundColor: "#f9fafb",
      items: [
        {
          title: "Reduced Pain",
          description: "Significant decrease in jaw pain and discomfort",
          icon: "Zap",
          iconColor: "#5FC1D7",
          order: 1,
        },
        {
          title: "Better Function",
          description: "Improved ability to chew, speak, and yawn",
          icon: "Activity",
          iconColor: "#27A8E0",
          order: 2,
        },
        {
          title: "Better Sleep",
          description: "Reduced nighttime grinding and improved rest",
          icon: "Moon",
          iconColor: "#10b981",
          order: 3,
        },
        {
          title: "Quality of Life",
          description: "Enhanced daily comfort and well-being",
          icon: "Heart",
          iconColor: "#8b5cf6",
          order: 4,
        },
      ],
    },
    approach: {
      enabled: true,
      title: "Our TMJ Treatment Approach",
      subtitle:
        "For individuals seeking a TMJ Consult in Ottawa, Smile Health Dental provides a compassionate and professional environment where patient comfort and personalized care are the priorities.",
      backgroundColor: "#ffffff",
      items: [
        {
          icon: "Activity",
          iconColor: "#5FC1D7",
          title: "Comprehensive Assessment",
          description:
            "Thorough evaluation of your TMJ symptoms, medical history, and lifestyle factors to determine the best treatment approach.",
          order: 1,
        },
        {
          icon: "Clock",
          iconColor: "#27A8E0",
          title: "Conservative Care First",
          description:
            "Starting with non-invasive treatments and lifestyle modifications before considering more advanced interventions.",
          order: 2,
        },
        {
          icon: "Shield",
          iconColor: "#10b981",
          title: "Long-Term Management",
          description:
            "Focus on sustainable solutions and patient education to prevent symptom recurrence and maintain joint health.",
          order: 3,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Frequently Asked Questions",
      subtitle:
        "Common questions about TMJ treatment answered by Dr. Avneet Dhaliwal",
      backgroundColor: "#f9fafb",
      faqs: [
        {
          question: "What causes temporomandibular joint disorder?",
          answer:
            "TMJ disorders can be caused by various factors including teeth grinding or clenching, stress, injury to the jaw, arthritis, or misalignment of the teeth or jaw. Each patient's situation is unique and requires individual assessment.",
          order: 1,
        },
        {
          question: "How long does TMJ treatment take?",
          answer:
            "Treatment duration varies depending on the severity of symptoms and individual response to therapy. Many patients experience significant improvement within a few weeks to months with consistent treatment and lifestyle modifications.",
          order: 2,
        },
        {
          question: "Can TMJ disorders affect sleep?",
          answer:
            "Yes, TMJ disorders can significantly impact sleep quality. Nighttime teeth grinding (bruxism) associated with TMJ can cause disrupted sleep patterns, morning headaches, and daytime fatigue. Treatment often includes addressing sleep-related habits.",
          order: 3,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Visit Our Dental Office in Nepean",
      description:
        "At Smile Health Dental, conveniently located at 888 Meadowlands Dr, Ottawa, ON K2C 3R2, Dr. Dhaliwal and her team are committed to assisting patients in managing TMJ discomfort through tailored and efficient care.",
      gradientFrom: "#334155",
      gradientVia: "#1d4ed8",
      gradientTo: "#0284c7",
      primaryButtonText: "Schedule a Consultation",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#ffffff",
      secondaryButtonText: "Contact Us",
      secondaryButtonLink: "/contact",
      phone: "437-913-9288",
      address: "888 Meadowlands Dr, Ottawa, ON K2C 3R2",
      showContactInfo: true,
    },
    sectionOrder: [
      "hero",
      "benefits",
      "treatments",
      "treatmentBenefits",
      "approach",
      "faq",
      "cta",
    ],
    seo: {
      metaTitle: "TMJ Consult Ottawa | Jaw Pain Relief | Smile Health Dental",
      metaDescription:
        "Dr. Avneet Dhaliwal offers comprehensive TMJ consultation and treatment in Ottawa. Find relief from jaw pain, TMD symptoms, and discomfort at Smile Health Dental.",
      metaKeywords: [
        "TMJ consult Ottawa",
        "TMJ treatment",
        "jaw pain relief",
        "TMD treatment",
        "temporomandibular joint disorder",
        "Ottawa dentist",
        "Smile Health Dental",
        "Dr. Avneet Dhaliwal",
      ],
    },
  },

  // 16. ROOT CANAL THERAPY
  {
    serviceKey: "root-canal-therapy",
    title: "Root Canal Therapy",
    displayName: "Root Canal Therapy in Ottawa",
    slug: "root-canal-therapy",
    category: "restorative",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#d97706",
    },
    hero: {
      enabled: true,
      category: "RESTORATIVE DENTISTRY",
      categoryColor: "#d97706",
      title: "Root Canal Therapy in Ottawa",
      description:
        "Save Your Natural Tooth with Advanced Endodontic Treatment. At Smile Health Dental in Ottawa, Dr. Avneet Dhaliwal specializes in root canal therapy to relieve pain and preserve your natural teeth. Modern techniques and technology ensure comfortable, effective treatment.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#5FC1D7",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/service1/placeholder1.png",
      heroImageAlt: "Root Canal Therapy",
      gradientFrom: "#f8fafc",
      gradientVia: "#eff6ff",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "Why Choose Root Canal Therapy?",
      subtitle:
        "Root canal therapy is often the best way to save a severely damaged or infected tooth, avoiding extraction and maintaining your natural smile.",
      backgroundColor: "#ffffff",
      items: [
        {
          icon: "Shield",
          iconColor: "#5FC1D7",
          title: "Save Your Natural Tooth",
          description:
            "Preserve your natural tooth structure and avoid the need for artificial replacements like implants or bridges.",
          order: 1,
        },
        {
          icon: "Zap",
          iconColor: "#27A8E0",
          title: "Pain Relief",
          description:
            "Eliminate tooth pain and discomfort caused by infection or inflammation of the dental pulp.",
          order: 2,
        },
        {
          icon: "Heart",
          iconColor: "#10b981",
          title: "Prevent Further Issues",
          description:
            "Stop the spread of infection and prevent complications like abscesses or bone loss.",
          order: 3,
        },
      ],
    },
    whenNeeded: {
      enabled: true,
      title: "When Do You Need a Root Canal?",
      backgroundColor: "#f9fafb",
      image: "/assets/service1/placeholder2.png",
      imageAlt: "Root Canal Treatment Process",
      items: [
        {
          icon: "CheckCircle",
          iconColor: "#5FC1D7",
          title: "Severe Tooth Pain",
          description:
            "Persistent, intense pain that may worsen with chewing or temperature changes.",
          order: 1,
        },
        {
          icon: "CheckCircle",
          iconColor: "#5FC1D7",
          title: "Prolonged Sensitivity",
          description:
            "Extended sensitivity to hot or cold that lingers after the stimulus is removed.",
          order: 2,
        },
        {
          icon: "CheckCircle",
          iconColor: "#5FC1D7",
          title: "Swelling and Infection",
          description:
            "Swelling in the gums, face, or neck, or signs of infection like fever.",
          order: 3,
        },
        {
          icon: "CheckCircle",
          iconColor: "#5FC1D7",
          title: "Darkened Tooth",
          description:
            "A tooth that has become discolored due to internal damage or infection.",
          order: 4,
        },
        {
          icon: "CheckCircle",
          iconColor: "#5FC1D7",
          title: "Cracked or Chipped Tooth",
          description:
            "Deep cracks or chips that expose the pulp chamber to bacteria.",
          order: 5,
        },
      ],
    },
    process: {
      enabled: true,
      title: "The Root Canal Process",
      subtitle:
        "Our modern approach to root canal therapy ensures comfort and precision throughout the treatment.",
      backgroundColor: "#ffffff",
      steps: [
        {
          stepNumber: 1,
          title: "Diagnosis & Preparation",
          description:
            "We examine your tooth and take X-rays to assess the extent of damage and plan the treatment.",
          icon: "Scan",
          iconColor: "#5FC1D7",
          order: 1,
        },
        {
          stepNumber: 2,
          title: "Access & Cleaning",
          description:
            "We create an opening to access the pulp chamber and carefully remove infected tissue.",
          icon: "Tool",
          iconColor: "#5FC1D7",
          order: 2,
        },
        {
          stepNumber: 3,
          title: "Shaping & Filling",
          description:
            "The root canals are shaped and filled with a biocompatible material to seal the space.",
          icon: "Layers",
          iconColor: "#5FC1D7",
          order: 3,
        },
        {
          stepNumber: 4,
          title: "Restoration",
          description:
            "The tooth is restored with a crown or filling to protect it and restore full function.",
          icon: "CheckCircle",
          iconColor: "#5FC1D7",
          order: 4,
        },
      ],
    },
    technology: {
      enabled: true,
      title: "Advanced Technology for Better Results",
      backgroundColor: "#eff6ff",
      image: "/assets/service1/placeholder3.png",
      imageAlt: "Advanced Root Canal Technology",
      items: [
        {
          icon: "Stethoscope",
          iconColor: "#5FC1D7",
          title: "Digital X-Rays",
          description:
            "Precise imaging to accurately diagnose and treat root canal issues.",
          order: 1,
        },
        {
          icon: "Activity",
          iconColor: "#5FC1D7",
          title: "Rotary Endodontics",
          description:
            "Advanced rotary instruments for more efficient and comfortable cleaning.",
          order: 2,
        },
        {
          icon: "Award",
          iconColor: "#5FC1D7",
          title: "Apex Locators",
          description:
            "Electronic devices that precisely measure root canal length for optimal treatment.",
          order: 3,
        },
        {
          icon: "Sparkles",
          iconColor: "#5FC1D7",
          title: "Sedation Options",
          description:
            "Various sedation methods available to ensure your comfort during treatment.",
          order: 4,
        },
      ],
    },
    aftercare: {
      enabled: true,
      title: "Root Canal Aftercare",
      subtitle:
        "Proper care after your root canal treatment ensures optimal healing and long-term success.",
      backgroundColor: "#ffffff",
      sections: [
        {
          title: "Immediate Aftercare",
          borderColor: "#5FC1D7",
          backgroundColor: "#f9fafb",
          items: [
            "Avoid chewing on the treated tooth until fully restored",
            "Take prescribed medications as directed",
            "Apply ice packs if swelling occurs",
            "Maintain excellent oral hygiene",
          ],
          order: 1,
        },
        {
          title: "Long-term Care",
          borderColor: "#27A8E0",
          backgroundColor: "#f9fafb",
          items: [
            "Continue regular dental check-ups",
            "Practice good oral hygiene daily",
            "Wear a mouthguard if you grind your teeth",
            "Maintain a healthy diet and lifestyle",
          ],
          order: 2,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Frequently Asked Questions",
      subtitle: "Common questions about root canal therapy",
      backgroundColor: "#f9fafb",
      faqs: [
        {
          question: "Is root canal treatment painful?",
          answer:
            "Modern root canal therapy is no more painful than getting a regular filling. We use local anesthesia and sedation options to ensure your comfort throughout the procedure.",
          order: 1,
        },
        {
          question: "How long does a root canal take?",
          answer:
            "Most root canal treatments can be completed in 1-2 appointments, depending on the complexity of the case. Front teeth typically take less time than molars.",
          order: 2,
        },
        {
          question: "What are the alternatives to root canal therapy?",
          answer:
            "The main alternative is tooth extraction followed by replacement with an implant, bridge, or denture. However, saving your natural tooth is usually the best option when possible.",
          order: 3,
        },
        {
          question: "How successful are root canals?",
          answer:
            "Root canal therapy has a success rate of over 95% when performed by experienced dentists using modern techniques and properly cared for afterward.",
          order: 4,
        },
        {
          question: "Will my tooth look different after a root canal?",
          answer:
            "The treated tooth will look normal, though it may need a crown for protection and optimal appearance. The crown will be matched to your natural tooth color.",
          order: 5,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Don't Let Tooth Pain Ruin Your Day",
      description:
        "Contact Smile Health Dental today to schedule your root canal consultation. We'll help relieve your pain and save your natural tooth.",
      gradientFrom: "#2563eb",
      gradientTo: "#1d4ed8",
      primaryButtonText: "Call 437-913-9288",
      primaryButtonLink: "tel:4379139288",
      primaryButtonColor: "#27A8E0",
      secondaryButtonText: "Request Appointment",
      secondaryButtonLink: "/contact",
      phone: "437-913-9288",
      address: "888 Meadowlands Dr, Ottawa, ON K2C 3R2",
      showContactInfo: true,
    },
    sectionOrder: [
      "hero",
      "benefits",
      "whenNeeded",
      "process",
      "technology",
      "aftercare",
      "faq",
      "cta",
    ],
    seo: {
      metaTitle:
        "Root Canal Therapy Ottawa | Save Your Natural Tooth | Smile Health Dental",
      metaDescription:
        "Dr. Avneet Dhaliwal specializes in root canal therapy in Ottawa. Modern techniques and technology for comfortable, effective treatment at Smile Health Dental.",
      metaKeywords: [
        "root canal therapy Ottawa",
        "root canal treatment",
        "endodontic treatment",
        "tooth pain relief",
        "save natural tooth",
        "Ottawa dentist",
        "Smile Health Dental",
        "Dr. Avneet Dhaliwal",
      ],
    },
  },

  // 17. TEETH WHITENING
  {
    serviceKey: "teeth-whitening",
    title: "Teeth Whitening",
    displayName: "Teeth Whitening in Ottawa",
    slug: "teeth-whitening",
    category: "cosmetic",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#2563eb",
    },
    hero: {
      enabled: true,
      category: "COSMETIC DENTISTRY",
      categoryColor: "#2563eb",
      title: "Teeth Whitening",
      description:
        "Dr. Avneet Dhaliwal offers customized teeth whitening treatments designed to safely and effectively brighten your smile. Address stains from lifestyle habits, aging, and dietary factors.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#5FC1D7",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/service1/placeholder1.png",
      heroImageAlt: "Teeth Whitening",
      gradientFrom: "#f0f9ff",
      gradientVia: "#eff6ff",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "Teeth Whitening in Ottawa",
      subtitle:
        "Professional in-office and at-home solutions tailored to your specific needs",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "Sparkles",
          iconColor: "#5FC1D7",
          title: "Safe & Effective",
          description:
            "Professional treatments remove discoloration and restore vibrancy safely",
          order: 1,
        },
        {
          icon: "Award",
          iconColor: "#27A8E0",
          title: "Customized Treatment",
          description:
            "Personalized to your enamel's sensitivity and desired shade",
          order: 2,
        },
        {
          icon: "Shield",
          iconColor: "#10b981",
          title: "Dental Supervision",
          description:
            "Safe, effective whitening with reduced risk of side effects",
          order: 3,
        },
      ],
    },
    types: {
      enabled: true,
      title: "Effective Whitening Options",
      subtitle:
        "Find the approach that aligns with your lifestyle and objectives",
      backgroundColor: "#ffffff",
      image: "/assets/service1/placeholder3.png",
      imageAlt: "In-Office Whitening",
      types: [
        {
          title: "Zoom Whitening (In-Office)",
          description: "Ideal for immediate, powerful results in one session",
          icon: "Zap",
          iconColor: "#5FC1D7",
          features: [
            "Specialized hydrogen peroxide gel",
            "Light activation technology",
            "Lifts stains in one session",
            "Immediate results",
            "Professional supervision",
          ],
          isRecommended: true,
          order: 1,
        },
        {
          title: "Take-Home Options",
          description:
            "Gradual approach with effective results over a few weeks",
          icon: "Clock",
          iconColor: "#27A8E0",
          features: [
            "Teeth whitening strips",
            "Custom trays available",
            "Flexible schedule",
            "Gradual whitening",
            "Convenient at-home use",
          ],
          order: 2,
        },
      ],
    },
    technology: {
      enabled: true,
      title: "Advanced Whitening Technology",
      subtitle: "Comfortable, lasting results with laser dentistry techniques",
      backgroundColor: "#f9fafb",
      image: "/assets/service1/placeholder5.png",
      imageAlt: "Laser Whitening",
      items: [
        {
          icon: "Zap",
          iconColor: "#5FC1D7",
          title: "Laser-Assisted Whitening",
          description:
            "Enhances precision and minimizes common side effects like tooth sensitivity",
          borderColor: "#5FC1D7",
          order: 1,
        },
        {
          icon: "Clock",
          iconColor: "#27A8E0",
          title: "Quick Treatment",
          description:
            "Laser activation shortens treatment time and limits exposure of whitening agents",
          borderColor: "#27A8E0",
          order: 2,
        },
        {
          icon: "Award",
          iconColor: "#10b981",
          title: "Excellent Results",
          description:
            "Advanced technology delivers whitening while maintaining tooth integrity",
          borderColor: "#10b981",
          order: 3,
        },
      ],
    },
    comparison: {
      enabled: true,
      title: "Professional vs Store-Bought",
      subtitle: "Benefits beyond what over-the-counter products can achieve",
      backgroundColor: "#ffffff",
      comparisons: [
        {
          title: "Professional Whitening",
          icon: "CheckCircle",
          iconColor: "#10b981",
          items: [
            "Higher-quality materials",
            "More noticeable difference",
            "Fewer sessions needed",
            "Personalized to sensitivity",
            "Dental supervision",
            "Reduced side effects",
          ],
          isPositive: true,
          order: 1,
        },
        {
          title: "Store-Bought Options",
          icon: "XCircle",
          iconColor: "#ef4444",
          items: [
            "Lower-quality materials",
            "Less noticeable results",
            "Many sessions required",
            "One-size-fits-all approach",
            "No professional guidance",
            "Higher risk of sensitivity",
          ],
          isPositive: false,
          order: 2,
        },
      ],
    },
    results: {
      enabled: true,
      title: "How Long Do Results Last?",
      backgroundColor: "#f9fafb",
      image: "/assets/service1/placeholder6.png",
      imageAlt: "Lasting Results",
      description:
        "With optimal oral hygiene, professional teeth whitening results can be maintained for up to a year or longer.",
      sections: [
        {
          title: "Maintain Your Results",
          backgroundColor: "#eff6ff",
          items: [
            "Limit coffee, tea, and wine consumption",
            "Brush twice daily with whitening toothpaste",
            "Regular dental cleanings every 6 months",
            "Avoid tobacco products",
            "Use a straw for staining beverages",
          ],
          order: 1,
        },
        {
          title: "Touch-Up Options",
          backgroundColor: "#fff7ed",
          description:
            "At Smile Health Dental, we can discuss maintenance options, including occasional touch-ups, to keep your smile bright over time.",
          order: 2,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Common Questions",
      backgroundColor: "#ffffff",
      faqs: [
        {
          question: "Is teeth whitening safe?",
          answer:
            "Yes, professional teeth whitening is safe when supervised by Dr. Dhaliwal. We use advanced technology to protect your enamel and minimize sensitivity.",
          order: 1,
        },
        {
          question: "Will whitening cause sensitivity?",
          answer:
            "Some patients experience mild sensitivity, but our laser-assisted whitening minimizes this. We personalize treatment to your enamel's sensitivity level.",
          order: 2,
        },
        {
          question: "How white will my teeth get?",
          answer:
            "Results vary by individual, but most patients see teeth 3-8 shades whiter. Dr. Dhaliwal will discuss realistic expectations during your consultation.",
          order: 3,
        },
        {
          question: "How long does Zoom whitening take?",
          answer:
            "In-office Zoom whitening typically takes about 60-90 minutes for a complete treatment, delivering immediate results in one session.",
          order: 4,
        },
        {
          question: "Can I whiten if I have crowns or veneers?",
          answer:
            "Whitening only affects natural teeth. If you have restorations, Dr. Dhaliwal will discuss options to ensure a uniform, beautiful smile.",
          order: 5,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Request Your Whitening Consultation",
      description:
        "Located at 888 Meadowlands Dr, Ottawa, ON. Smile Health Dental is your local choice for professional teeth whitening. Dr. Dhaliwal and her team are here to help you discover which whitening solution best suits your needs.",
      gradientFrom: "#0284c7",
      gradientVia: "#1d4ed8",
      gradientTo: "#0891b2",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#5FC1D7",
      secondaryButtonText: "Call Us Today",
      secondaryButtonLink: "tel:4379139288",
      phone: "437-913-9288",
      address: "888 Meadowlands Dr, Ottawa, ON",
      showContactInfo: true,
    },
    sectionOrder: [
      "hero",
      "benefits",
      "types",
      "technology",
      "comparison",
      "results",
      "faq",
      "cta",
    ],
    seo: {
      metaTitle:
        "Teeth Whitening Ottawa | Professional Smile Brightening | Smile Health Dental",
      metaDescription:
        "Dr. Avneet Dhaliwal offers customized teeth whitening in Ottawa. Zoom in-office whitening and take-home options for a brighter smile at Smile Health Dental.",
      metaKeywords: [
        "teeth whitening Ottawa",
        "Zoom whitening",
        "professional teeth whitening",
        "smile brightening",
        "cosmetic dentistry Ottawa",
        "Ottawa dentist",
        "Smile Health Dental",
        "Dr. Avneet Dhaliwal",
      ],
    },
  },

  // 18. DENTAL VENEERS
  {
    serviceKey: "dental-veneers",
    title: "Dental Veneers",
    displayName: "Dental Veneers in Ottawa",
    slug: "dental-veneers",
    category: "cosmetic",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#ec4899",
    },
    hero: {
      enabled: true,
      category: "COSMETIC DENTISTRY",
      categoryColor: "#ec4899",
      title: "Dental Veneers",
      description:
        "Dr. Avneet Dhaliwal offers custom-designed dental veneers to enhance your smile's appearance. Address discoloration, minor misalignments, or gaps with durable, natural-looking veneers.",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#5FC1D7",
      secondaryButtonText: "Learn More",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/service4/Gemini_Generated_Image_3qsvb83qsvb83qsv.png",
      heroImageAlt: "Dental Veneers",
      gradientFrom: "#eff6ff",
      gradientVia: "#f0f9ff",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "Dental Veneers in Ottawa",
      subtitle:
        "Transform your smile with meticulously crafted veneers that fit seamlessly",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "Sparkles",
          iconColor: "#ec4899",
          title: "Natural-Looking",
          description:
            "Made from durable materials that offer a natural-looking improvement",
          order: 1,
        },
        {
          icon: "Award",
          iconColor: "#5FC1D7",
          title: "Custom-Designed",
          description:
            "Meticulously crafted to fit seamlessly with the rest of your smile",
          order: 2,
        },
        {
          icon: "Shield",
          iconColor: "#27A8E0",
          title: "Functional Solution",
          description: "Provides both functional and visually pleasing results",
          order: 3,
        },
      ],
    },
    types: {
      enabled: true,
      title: "Types of Veneers",
      subtitle: "Personalized options to suit your needs and budget",
      backgroundColor: "#ffffff",
      image: "/assets/service4/Gemini_Generated_Image_3qsvb83qsvb83qsv (2).png",
      imageAlt: "Porcelain Veneers",
      types: [
        {
          title: "Composite Veneers",
          description:
            "An economical option providing aesthetic benefits with less enamel removal",
          icon: "Heart",
          iconColor: "#ec4899",
          features: [
            "More affordable",
            "Conservative choice",
            "Less tooth preparation",
            "Quick application",
            "Easily repaired",
          ],
          order: 1,
        },
        {
          title: "Porcelain Veneers",
          description:
            "Known for durability and natural appearance, ideal for long-lasting enhancement",
          icon: "Award",
          iconColor: "#5FC1D7",
          features: [
            "Highly durable",
            "Natural appearance",
            "Stain resistant",
            "Long-lasting",
            "Premium quality",
          ],
          isRecommended: true,
          order: 2,
        },
        {
          title: "Lumineers",
          description:
            "Ultra-thin veneers requiring minimal to no natural tooth preparation",
          icon: "Sparkles",
          iconColor: "#27A8E0",
          features: [
            "Minimally invasive",
            "Ultra-thin design",
            "No tooth removal",
            "Reversible option",
            "Quick procedure",
          ],
          order: 3,
        },
      ],
    },
    veneerBenefits: {
      enabled: true,
      title: "Benefits of Veneers",
      subtitle: "Achieving an enhanced smile with long-term results",
      backgroundColor: "#f9fafb",
      sections: [
        {
          title: "What Veneers Can Fix",
          items: [
            "Discoloration and staining",
            "Minor misalignments",
            "Gaps between teeth",
            "Chipped or cracked teeth",
            "Uneven tooth shape",
            "Worn-down teeth",
          ],
          iconColor: "#ec4899",
          order: 1,
        },
        {
          title: "Key Advantages",
          items: [
            "Durable and stain-resistant",
            "Natural appearance",
            "Custom-made to blend perfectly",
            "Preserves beauty over time",
            "Smooth, natural finish",
            "Boosts confidence",
          ],
          iconColor: "#5FC1D7",
          order: 2,
        },
      ],
    },
    process: {
      enabled: true,
      title: "The Veneer Process",
      subtitle: "Comprehensive consultation ensuring custom-made veneers",
      backgroundColor: "#ffffff",
      steps: [
        {
          stepNumber: 1,
          title: "Consultation",
          description:
            "Comprehensive evaluation to determine best veneer type for your needs",
          icon: "Search",
          iconColor: "#ec4899",
          order: 1,
        },
        {
          stepNumber: 2,
          title: "Preparation",
          description:
            "Tooth shaping and impressions taken for custom veneer creation",
          icon: "Tool",
          iconColor: "#5FC1D7",
          order: 2,
        },
        {
          stepNumber: 3,
          title: "Fabrication",
          description:
            "Custom veneers crafted to blend perfectly with natural teeth",
          icon: "Layers",
          iconColor: "#27A8E0",
          order: 3,
        },
        {
          stepNumber: 4,
          title: "Bonding",
          description: "Veneers bonded and polished for smooth, natural finish",
          icon: "CheckCircle",
          iconColor: "#10b981",
          order: 4,
        },
      ],
    },
    results: {
      enabled: true,
      title: "Long-Lasting Aesthetics & Functionality",
      backgroundColor: "#f9fafb",
      image: "/assets/service4/Gemini_Generated_Image_3qsvb83qsvb83qsv (2).png",
      imageAlt: "Veneer Results",
      items: [
        {
          title: "Confidence Boost",
          borderColor: "#ec4899",
          description:
            "Patients with veneers experience a boost in confidence and improved self-esteem",
          order: 1,
        },
        {
          title: "Unaffected Function",
          borderColor: "#5FC1D7",
          description:
            "Dental function such as biting and chewing remains completely unaffected",
          order: 2,
        },
        {
          title: "Lasting Results",
          borderColor: "#27A8E0",
          description:
            "With proper care and routine dental visits, veneers can last many years",
          order: 3,
        },
      ],
    },
    care: {
      enabled: true,
      title: "Caring for Your Veneers",
      backgroundColor: "#ffffff",
      description:
        "Dr. Dhaliwal focuses on delivering veneers that meet the highest standards of aesthetics and functionality. Proper care ensures your veneers remain beautiful for years.",
      sections: [
        {
          title: "Daily Care",
          items: [
            "Brush twice daily with non-abrasive toothpaste",
            "Floss daily around veneers",
            "Use soft-bristled toothbrush",
            "Avoid biting hard objects",
          ],
          order: 1,
        },
        {
          title: "Regular Visits",
          items: [
            "Routine dental check-ups every 6 months",
            "Professional cleanings",
            "Monitor veneer condition",
            "Address any concerns promptly",
          ],
          order: 2,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Common Questions",
      backgroundColor: "#f9fafb",
      faqs: [
        {
          question: "How long do veneers last?",
          answer:
            "Porcelain veneers typically last 10-15 years with proper care. Composite veneers last 5-7 years. Regular dental visits help maximize their lifespan.",
          order: 1,
        },
        {
          question: "Are veneers reversible?",
          answer:
            "Traditional veneers require enamel removal and are not reversible. However, Lumineers are minimally invasive and can be reversible in some cases.",
          order: 2,
        },
        {
          question: "Do veneers stain?",
          answer:
            "Porcelain veneers are highly stain-resistant. Composite veneers may stain over time but can be polished during regular dental visits.",
          order: 3,
        },
        {
          question: "Will veneers look natural?",
          answer:
            "Yes, Dr. Dhaliwal custom-designs each veneer to blend perfectly with your natural teeth, ensuring a seamless and natural appearance.",
          order: 4,
        },
        {
          question: "Can I get veneers on just a few teeth?",
          answer:
            "Absolutely. Whether you want a subtle enhancement or complete transformation, veneers can be placed on one tooth or multiple teeth.",
          order: 5,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Explore Veneer Options in Nepean",
      description:
        "Located at 888 Meadowlands Dr, Ottawa, ON. Smile Health Dental provides a range of veneer options to help you achieve the smile you've always wanted. Dr. Dhaliwal and her team are dedicated to providing tailored solutions.",
      gradientFrom: "#1d4ed8",
      gradientVia: "#0284c7",
      gradientTo: "#0891b2",
      primaryButtonText: "Request an Appointment",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#5FC1D7",
      secondaryButtonText: "Contact Us Today",
      secondaryButtonLink: "/contact",
      phone: "437-913-9288",
      address: "888 Meadowlands Dr, Ottawa, ON",
      showContactInfo: true,
    },
    sectionOrder: [
      "hero",
      "benefits",
      "types",
      "veneerBenefits",
      "process",
      "results",
      "care",
      "faq",
      "cta",
    ],
    seo: {
      metaTitle:
        "Dental Veneers Ottawa | Porcelain Veneers | Smile Health Dental",
      metaDescription:
        "Dr. Avneet Dhaliwal offers custom dental veneers in Ottawa. Transform your smile with natural-looking porcelain, composite, or Lumineers at Smile Health Dental.",
      metaKeywords: [
        "dental veneers Ottawa",
        "porcelain veneers",
        "Ottawa dentist",
        "cosmetic dentistry",
        "smile makeover",
      ],
    },
  },

  // 19. CLEAR ALIGNERS
  {
    serviceKey: "clear-aligners",
    title: "Clear Aligners",
    displayName: "Invisalign Clear Aligners in Ottawa",
    slug: "clear-aligners",
    category: "orthodontic",
    status: "published",
    brandColors: {
      primary: "#5FC1D7",
      secondary: "#27A8E0",
      accent: "#6366f1",
    },
    hero: {
      enabled: true,
      category: "ORTHODONTIC TREATMENT",
      categoryColor: "#6366f1",
      title: "Invisalign Clear Aligners",
      description:
        "We offer Invisalign as a discreet and comfortable solution for effective teeth straightening without the visibility of traditional braces. Custom-fitted and removable aligners that fit your lifestyle.",
      primaryButtonText: "Free Smile Evaluation",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      secondaryButtonText: "Request an Appointment",
      secondaryButtonColor: "#5FC1D7",
      heroImage: "/assets/service1/placeholder1.png",
      heroImageAlt: "Clear Aligners",
      gradientFrom: "#f0f9ff",
      gradientVia: "#eff6ff",
      gradientTo: "#ffffff",
    },
    benefits: {
      enabled: true,
      title: "Get the Ideal Smile",
      subtitle:
        "Stop worrying about your smile. We provide the best clear aligners in Ottawa.",
      backgroundColor: "#f9fafb",
      items: [
        {
          icon: "Heart",
          iconColor: "#6366f1",
          title: "Compassionate Care",
          description: "Doctors who hear your needs",
          order: 1,
        },
        {
          icon: "Award",
          iconColor: "#5FC1D7",
          title: "Modern Technology",
          description: "Advanced office equipment",
          order: 2,
        },
        {
          icon: "Shield",
          iconColor: "#27A8E0",
          title: "Flexible Payment",
          description: "Affordable payment plans",
          order: 3,
        },
        {
          icon: "Zap",
          iconColor: "#10b981",
          title: "Quick Service",
          description: "Reduced wait times",
          order: 4,
        },
      ],
    },
    features: {
      enabled: true,
      title: "Benefits of Invisalign",
      subtitle:
        "A convenient alternative to traditional braces with invisible aligners",
      backgroundColor: "#ffffff",
      items: [
        {
          icon: "Eye",
          iconColor: "#6366f1",
          title: "Virtually Invisible",
          description:
            "Clear aligners are virtually unnoticeable, appealing to those who prioritize aesthetics and comfort.",
          backgroundColor: "#eef2ff",
          order: 1,
        },
        {
          icon: "RefreshCw",
          iconColor: "#5FC1D7",
          title: "Removable Design",
          description:
            "Eat, brush, and floss easily. Aligners are removable, minimizing risks of trapped food and plaque buildup.",
          backgroundColor: "#eff6ff",
          order: 2,
        },
        {
          icon: "Cpu",
          iconColor: "#27A8E0",
          title: "Advanced Technology",
          description:
            "Designed using 3D computer technology, ensuring each set fits comfortably and guides teeth precisely.",
          backgroundColor: "#fff7ed",
          order: 3,
        },
        {
          icon: "Sparkles",
          iconColor: "#10b981",
          title: "Better Oral Hygiene",
          description:
            "Removable aligners support better oral hygiene compared to fixed braces.",
          backgroundColor: "#ecfdf5",
          order: 4,
        },
      ],
    },
    importance: {
      enabled: true,
      title: "The Importance of Clear Aligners",
      backgroundColor: "#f9fafb",
      description:
        "Having straight teeth isn't just about looking good. It's about your health too. Crooked teeth can cause problems when chewing and even speaking. They can be harder to clean, which might lead to gum disease and cavities.",
      sections: [
        {
          title: "Health Benefits",
          backgroundColor: "#eef2ff",
          items: [
            "Easier to clean teeth",
            "Better chewing function",
            "Improved speech",
            "Reduced gum disease risk",
            "Fewer cavities",
          ],
          order: 1,
        },
        {
          title: "Lifestyle Advantages",
          backgroundColor: "#eff6ff",
          items: [
            "Eat your choice of foods",
            "Brush teeth normally",
            "No metal brackets",
            "Comfortable fit",
            "Discreet appearance",
          ],
          order: 2,
        },
      ],
    },
    offerings: {
      enabled: true,
      title: "Explore Our Offerings",
      subtitle: "Comprehensive Invisalign services tailored to your needs",
      backgroundColor: "#ffffff",
      image: "/assets/service1/placeholder4.png",
      imageAlt: "Treatment Planning",
      items: [
        {
          title: "Personalized Treatment",
          description:
            "We design a plan specifically for you based on 3D pictures of your teeth. Your clear aligners will fit your mouth like a glove.",
          iconColor: "#6366f1",
          order: 1,
        },
        {
          title: "Quick Start Program",
          description:
            "Receive your first set of aligners in just one week from your check-up. See results sooner.",
          iconColor: "#5FC1D7",
          order: 2,
        },
        {
          title: "Progress Check-ups",
          description:
            "We'll visit you every few weeks to ensure your teeth are moving according to plan. We'll correct any problems immediately.",
          iconColor: "#27A8E0",
          order: 3,
        },
        {
          title: "After-care Support",
          description:
            "Once you complete treatment, we give you retainers and maintenance to ensure your new smile remains flawless.",
          iconColor: "#10b981",
          order: 4,
        },
      ],
    },
    suitability: {
      enabled: true,
      title: "Is Invisalign Right for You?",
      subtitle:
        "Invisalign is effective for correcting various mild to moderate alignment issues. Dr. Dhaliwal provides an initial consultation to evaluate your suitability.",
      backgroundColor: "#f9fafb",
      sections: [
        {
          title: "What Invisalign Can Treat",
          iconColor: "#6366f1",
          items: [
            "Gaps between teeth",
            "Mild crowding",
            "Minor bite discrepancies",
            "Mild to moderate misalignment",
          ],
          order: 1,
        },
        {
          title: "Commitment Required",
          iconColor: "#5FC1D7",
          items: [
            "Wear aligners 22 hours daily",
            "Change aligners every 2 weeks",
            "Regular check-up appointments",
            "Follow treatment plan consistently",
          ],
          order: 2,
        },
      ],
      note: "Certain complex cases may require the expertise of an orthodontic specialist for more specialized treatment options.",
    },
    getStarted: {
      enabled: true,
      title: "How to Get Started",
      subtitle:
        "Starting Invisalign treatment with Dr. Dhaliwal is simple and straightforward",
      backgroundColor: "#ffffff",
      steps: [
        {
          stepNumber: 1,
          title: "Digital Scan",
          description: "Advanced imaging to design your custom treatment plan",
          icon: "Scan",
          iconColor: "#6366f1",
          order: 1,
        },
        {
          stepNumber: 2,
          title: "Custom Aligners",
          description:
            "Sequence of aligners designed to gradually correct alignment",
          icon: "Package",
          iconColor: "#5FC1D7",
          order: 2,
        },
        {
          stepNumber: 3,
          title: "Regular Updates",
          description: "New aligners every two weeks for gradual adjustments",
          icon: "RefreshCw",
          iconColor: "#27A8E0",
          order: 3,
        },
        {
          stepNumber: 4,
          title: "Progress Monitoring",
          description:
            "Follow-up appointments to ensure treatment stays on track",
          icon: "TrendingUp",
          iconColor: "#10b981",
          order: 4,
        },
      ],
    },
    faq: {
      enabled: true,
      title: "Common Questions",
      backgroundColor: "#f9fafb",
      faqs: [
        {
          question: "How long does Invisalign treatment take?",
          answer:
            "Treatment typically takes 12-18 months, depending on your specific alignment needs. Dr. Dhaliwal will provide a personalized timeline during consultation.",
          order: 1,
        },
        {
          question: "Are clear aligners painful?",
          answer:
            "You may feel slight pressure when starting new aligners, but it's not painful. This pressure indicates the aligners are working to move your teeth.",
          order: 2,
        },
        {
          question: "Can I eat with aligners in?",
          answer:
            "No, you should remove aligners when eating or drinking anything other than water. This prevents damage and staining to the aligners.",
          order: 3,
        },
        {
          question: "How often do I need check-ups?",
          answer:
            "Typically every 4-6 weeks. These appointments ensure your treatment is progressing as planned and allow for any necessary adjustments.",
          order: 4,
        },
        {
          question: "Will I need retainers after treatment?",
          answer:
            "Yes, retainers are essential to maintain your new smile. We provide retainers and after-care support to ensure lasting results.",
          order: 5,
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Start Your Journey Today",
      description:
        "Located at 888 Meadowlands Dr, Ottawa, ON. Wait no more for the smile you've been wanting. Visit Smile Health and get your free smile assessment. We're here to help you achieve it safely and comfortably with Invisalign.",
      gradientFrom: "#0284c7",
      gradientVia: "#1d4ed8",
      gradientTo: "#0891b2",
      primaryButtonText: "Free Smile Evaluation",
      primaryButtonLink: "/contact",
      primaryButtonColor: "#27A8E0",
      secondaryButtonText: "Contact Us Today",
      secondaryButtonLink: "/contact",
      phone: "437-913-9288",
      address: "888 Meadowlands Dr, Ottawa, ON",
      showContactInfo: true,
    },
    sectionOrder: [
      "hero",
      "benefits",
      "features",
      "importance",
      "offerings",
      "suitability",
      "getStarted",
      "faq",
      "cta",
    ],
    seo: {
      metaTitle:
        "Invisalign Clear Aligners Ottawa | Invisible Braces | Smile Health Dental",
      metaDescription:
        "We offer Invisalign clear aligners in Ottawa as a discreet and comfortable solution for teeth straightening. Free smile evaluation at Smile Health Dental.",
      metaKeywords: [
        "Invisalign Ottawa",
        "clear aligners",
        "invisible braces",
        "teeth straightening",
        "orthodontic treatment",
        "Ottawa dentist",
        "Smile Health Dental",
        "Dr. Avneet Dhaliwal",
      ],
    },
  },
];

// ============================================================================
// SEED FUNCTION
// ============================================================================

async function seedStaticServices() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB successfully!\n");

    const results = {
      created: 0,
      updated: 0,
      skipped: 0,
      errors: [],
    };

    console.log(`Processing ${allServicePagesData.length} service pages...\n`);

    for (const serviceData of allServicePagesData) {
      try {
        const existing = await StaticServicePage.findOne({
          serviceKey: serviceData.serviceKey,
        });

        if (existing && !OVERWRITE) {
          console.log(
            `⏭️  Skipped: ${serviceData.displayName} (already exists)`,
          );
          results.skipped++;
        } else if (existing && OVERWRITE) {
          // Delete existing and recreate to ensure complete replacement
          await StaticServicePage.deleteOne({
            serviceKey: serviceData.serviceKey,
          });
          await StaticServicePage.create(serviceData);
          console.log(`✅ Updated: ${serviceData.displayName}`);
          results.updated++;
        } else {
          await StaticServicePage.create(serviceData);
          console.log(`✅ Created: ${serviceData.displayName}`);
          results.created++;
        }
      } catch (error) {
        console.error(
          `❌ Error processing ${serviceData.serviceKey}:`,
          error.message,
        );
        results.errors.push({
          serviceKey: serviceData.serviceKey,
          error: error.message,
        });
      }
    }

    console.log("\n========================================");
    console.log("SEED RESULTS:");
    console.log("========================================");
    console.log(`Created: ${results.created}`);
    console.log(`Updated: ${results.updated}`);
    console.log(`Skipped: ${results.skipped}`);
    console.log(`Errors: ${results.errors.length}`);

    if (results.errors.length > 0) {
      console.log("\nErrors:");
      results.errors.forEach((e) =>
        console.log(`  - ${e.serviceKey}: ${e.error}`),
      );
    }

    console.log("\n✅ Seed process completed!");
  } catch (error) {
    console.error("Fatal error during seeding:", error);
  } finally {
    await mongoose.disconnect();
    console.log("\nDisconnected from MongoDB");
  }
}

// Run the seed function
seedStaticServices();
