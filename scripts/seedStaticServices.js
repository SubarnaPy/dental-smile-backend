/**
 * Seed Script for Static Service Pages
 *
 * This script populates all 19 service pages with comprehensive content
 * extracted from the frontend React components.
 *
 * Usage:
 *   node scripts/seedStaticServices.js
 *
 * Options:
 *   --overwrite    Overwrite existing service pages
 *   --publish      Publish all pages after seeding
 */

require('dotenv').config();
const mongoose = require('mongoose');
const StaticServicePage = require('../models/StaticServicePage');
const connectDB = require('../config/database');

// ============================================================================
// COMPREHENSIVE SERVICE PAGE DATA - All 19 Services
// ============================================================================

const allServicesData = {
  // ========================================================================
  // 1. EMERGENCY DENTISTRY
  // ========================================================================
  'emergency-dentistry': {
    title: 'Emergency Dentistry',
    displayName: 'Emergency Dentistry',
    slug: 'emergency-dentistry',
    category: 'emergency',
    brandColors: { primary: '#5FC1D7', secondary: '#27A8E0', accent: '#ef4444' },
    hero: {
      enabled: true,
      category: 'EMERGENCY CARE',
      categoryColor: '#5FC1D7',
      title: 'Emergency Dentistry',
      description: 'When unexpected dental pain or injury strikes, immediate care is essential. Our experienced team provides prompt, compassionate emergency dental services for urgent situations like severe pain, broken teeth, and dental injuries.',
      primaryButtonText: 'Call for Emergency Care',
      primaryButtonColor: '#27A8E0',
      secondaryButtonText: 'Learn More',
      secondaryButtonColor: '#5FC1D7',
      heroImage: '/assets/service1/placeholder1.png',
      heroImageAlt: 'Emergency Dental Care',
      gradientFrom: 'blue-50',
      gradientTo: 'white'
    },
    benefits: {
      enabled: true,
      title: 'Why Emergency Care Matters',
      subtitle: 'Dental emergencies require immediate attention to relieve pain and prevent serious complications.',
      backgroundColor: 'gray-50',
      items: [
        { icon: 'Shield', iconColor: '#5FC1D7', title: 'Immediate Relief', description: 'Get fast pain relief and emergency treatment when you need it most', order: 1 },
        { icon: 'Heart', iconColor: '#27A8E0', title: 'Prevent Complications', description: 'Prompt treatment prevents infections from spreading and causing serious health issues', order: 2 },
        { icon: 'Zap', iconColor: '#10b981', title: 'Save Your Teeth', description: 'Quick action can save a knocked-out tooth or prevent permanent damage to your smile', order: 3 }
      ]
    },
    features: {
      enabled: true,
      title: 'Common Dental Emergencies We Treat',
      subtitle: 'Our emergency dental clinic treats various urgent issues to relieve pain and prevent complications.',
      backgroundColor: 'white',
      image: '/assets/service1/placeholder2.png',
      imageAlt: 'Emergency Dental Treatment',
      imagePosition: 'left',
      items: [
        { icon: '1', iconColor: '#5FC1D7', title: 'Severe Toothache & Abscesses', description: 'Persistent pain or infection requiring immediate treatment to prevent spread', order: 1 },
        { icon: '2', iconColor: '#27A8E0', title: 'Broken or Cracked Teeth', description: 'Damage from accidents requiring urgent restoration and protection', order: 2 },
        { icon: '3', iconColor: '#10b981', title: 'Knocked-Out Teeth', description: 'Rapid treatment can save your tooth when acted upon immediately', order: 3 },
        { icon: '4', iconColor: '#f59e0b', title: 'Lost Fillings & Crowns', description: 'Quick replacement to restore protection and prevent further damage', order: 4 }
      ]
    },
    whatToExpect: {
      enabled: true,
      title: 'What to Expect During Your Visit',
      subtitle: '',
      backgroundColor: 'gray-50',
      image: '/assets/service1/placeholder6.png',
      imageAlt: 'Emergency Dental Visit',
      items: [
        { title: 'Quick Assessment', borderColor: '#5FC1D7', backgroundColor: 'blue-50', items: ['We prioritize immediate evaluation and pain relief for all emergency cases'], order: 1 },
        { title: 'Effective Treatment', borderColor: '#27A8E0', backgroundColor: 'orange-50', items: ['Fast and effective treatment using advanced technology and proven techniques'], order: 2 },
        { title: 'Expert Care', borderColor: '#10b981', backgroundColor: 'green-50', items: ['Dr. Dhaliwal provides compassionate and professional emergency dental care'], order: 3 },
        { title: 'Follow-up Plan', borderColor: '#f59e0b', backgroundColor: 'yellow-50', items: ['Receive comprehensive care instructions and a plan for any ongoing treatment'], order: 4 }
      ]
    },
    tips: {
      enabled: true,
      title: 'First Aid Before Your Visit',
      subtitle: '',
      backgroundColor: 'white',
      sections: [
        { title: 'For Tooth Pain', borderColor: '#5FC1D7', backgroundColor: 'blue-50', items: ['Rinse with warm salt water', 'Take over-the-counter pain reliever', 'Apply cold compress to cheek'], order: 1 },
        { title: 'For Knocked Out Tooth', borderColor: '#27A8E0', backgroundColor: 'orange-50', items: ['Handle by crown not root', 'Rinse with milk or saline', 'Place in milk and bring it immediately'], order: 2 },
        { title: 'For Cracked Tooth', borderColor: '#10b981', backgroundColor: 'green-50', items: ['Rinse with warm water', 'Apply cold compress', 'Avoid chewing on that side'], order: 3 },
        { title: 'For Bleeding Gums', borderColor: '#f59e0b', backgroundColor: 'yellow-50', items: ['Apply gentle pressure with gauze', 'Rinse with salt water', 'Control bleeding before arrival'], order: 4 }
      ]
    },
    faq: { enabled: false, title: 'Frequently Asked Questions', subtitle: '', backgroundColor: 'gray-50', faqs: [] },
    cta: {
      enabled: true,
      title: 'Need Emergency Dental Care?',
      description: 'Do not suffer through dental pain. Contact us immediately for prompt, professional emergency dental care.',
      backgroundImage: '/assets/service1/placeholder4.png',
      primaryButtonText: 'Call for Emergency Care',
      primaryButtonColor: '#27A8E0',
      phone: '437-913-9288',
      address: '888 Meadowlands Dr, Ottawa, ON K2C 3R2',
      showContactInfo: false
    },
    sectionOrder: ['hero', 'benefits', 'features', 'whatToExpect', 'tips', 'cta']
  },

  // ========================================================================
  // 2. DENTAL EXAMS & CLEANINGS
  // ========================================================================
  'dental-exams-cleanings': {
    title: 'Dental Exams & Cleanings',
    displayName: 'Dental Exams & Cleanings',
    slug: 'dental-exams-cleanings',
    category: 'preventive',
    brandColors: { primary: '#5FC1D7', secondary: '#27A8E0', accent: '#10b981' },
    hero: {
      enabled: true,
      category: 'PREVENTIVE CARE',
      categoryColor: '#5FC1D7',
      title: 'Dental Exams & Cleanings',
      description: 'Regular dental exams and cleanings are the foundation of excellent oral health. Our comprehensive preventive care helps detect problems early and keeps your smile healthy and beautiful.',
      primaryButtonText: 'Request an Appointment',
      primaryButtonColor: '#27A8E0',
      secondaryButtonText: 'Learn More',
      secondaryButtonColor: '#5FC1D7',
      heroImage: '/assets/service2/Gemini_Generated_Image_d71h8cd71h8cd71h.png',
      heroImageAlt: 'Dental Exam',
      gradientFrom: 'blue-50',
      gradientTo: 'white'
    },
    benefits: {
      enabled: true,
      title: 'Why Regular Exams Matter',
      subtitle: 'Prevention is always better than treatment. Regular dental visits can save you time, money, and health issues down the road.',
      backgroundColor: 'gray-50',
      items: [
        { icon: 'Shield', iconColor: '#5FC1D7', title: 'Early Detection', description: 'Catch cavities, gum disease, and other problems before they become serious and expensive to treat', order: 1 },
        { icon: 'Heart', iconColor: '#27A8E0', title: 'Overall Health', description: 'Oral health is connected to your overall well-being. Regular cleanings help prevent serious health issues', order: 2 },
        { icon: 'Sparkles', iconColor: '#10b981', title: 'Beautiful Smile', description: 'Professional cleanings remove stains and tartar buildup, leaving your teeth bright and beautiful', order: 3 }
      ]
    },
    process: {
      enabled: true,
      title: 'Our Comprehensive Exam Process',
      subtitle: 'A thorough evaluation using advanced technology and professional expertise',
      backgroundColor: 'white',
      image: '/assets/service2/Gemini_Generated_Image_7k38mu7k38mu7k38.png',
      imageAlt: 'Dental Examination',
      steps: [
        { stepNumber: 1, title: 'Digital X-rays', description: 'Advanced imaging to detect cavities, bone loss, and other issues not visible to the naked eye', iconColor: '#5FC1D7', order: 1 },
        { stepNumber: 2, title: 'Oral Health Assessment', description: 'Complete examination of teeth, gums, tongue, and oral tissues for signs of disease', iconColor: '#27A8E0', order: 2 },
        { stepNumber: 3, title: 'Professional Cleaning', description: 'Removal of plaque and tartar buildup with specialized instruments', iconColor: '#10b981', order: 3 },
        { stepNumber: 4, title: 'Personalized Recommendations', description: 'Custom care plan and preventive strategies tailored to your needs', iconColor: '#f59e0b', order: 4 }
      ]
    },
    types: {
      enabled: true,
      title: 'How Often Should You Get Exams?',
      subtitle: 'The ideal frequency depends on your individual oral health status',
      backgroundColor: 'gray-50',
      types: [
        { title: 'Healthy Teeth', description: 'Twice per year', icon: 'Smile', iconColor: '#5FC1D7', features: ['Regular visits every 6 months for those with good oral health'], order: 1 },
        { title: 'Gum Disease Risk', description: '3-4 times per year', icon: 'Check', iconColor: '#27A8E0', features: ['More frequent visits if you have a history of gum disease'], isRecommended: true, order: 2 },
        { title: 'Special Situations', description: 'As recommended', icon: 'Zap', iconColor: '#10b981', features: ['More frequent if you have active cavities or serious conditions'], order: 3 }
      ]
    },
    whatToExpect: {
      enabled: true,
      title: 'What to Expect During Your Visit',
      subtitle: '',
      backgroundColor: 'white',
      image: '/assets/service2/Gemini_Generated_Image_nv0tnpnv0tnpnv0t.png',
      items: [
        { title: 'Comfortable Environment', borderColor: '#5FC1D7', items: ['Our office is designed for maximum comfort with modern equipment and a caring staff'], order: 1 },
        { title: 'Gentle Techniques', borderColor: '#27A8E0', items: ['We use gentle, pain-free cleaning methods and advanced technology for your comfort'], order: 2 },
        { title: 'Education & Discussion', borderColor: '#10b981', items: ['Dr. Dhaliwal will discuss findings and answer all your questions about your oral health'], order: 3 },
        { title: 'Personalized Care Plan', borderColor: '#f59e0b', items: ['Receive a customized care plan with tips for maintaining excellent oral health at home'], order: 4 }
      ]
    },
    faq: { enabled: false, faqs: [] },
    cta: {
      enabled: true,
      title: 'Keep Your Smile Healthy',
      description: 'Request an Appointment for your dental exam and cleaning today and start your journey to optimal oral health.',
      backgroundImage: '/assets/service2/Gemini_Generated_Image_p5sq99p5sq99p5sq.png',
      primaryButtonText: 'Request an Appointment',
      primaryButtonColor: '#27A8E0',
      phone: '437-913-9288',
      address: '888 Meadowlands Dr, Ottawa, ON K2C 3R2',
      showContactInfo: false
    },
    sectionOrder: ['hero', 'benefits', 'process', 'types', 'whatToExpect', 'cta']
  },

  // ========================================================================
  // 3. FAMILY DENTISTRY
  // ========================================================================
  'family-dentistry': {
    title: 'Family Dentistry',
    displayName: 'Family Dentistry',
    slug: 'family-dentistry',
    category: 'preventive',
    brandColors: { primary: '#5FC1D7', secondary: '#27A8E0', accent: '#8b5cf6' },
    hero: {
      enabled: true,
      category: 'FOR ALL AGES',
      categoryColor: '#5FC1D7',
      title: 'Family Dentistry',
      description: 'From young children to seniors, we provide comprehensive dental care for your entire family. Our welcoming environment and patient-centered approach make us the perfect choice for family dental health.',
      primaryButtonText: 'Request an Appointment',
      primaryButtonColor: '#27A8E0',
      secondaryButtonText: 'Learn More',
      secondaryButtonColor: '#5FC1D7',
      heroImage: '/assets/service3/Gemini_Generated_Image_cla59acla59acla5.png',
      heroImageAlt: 'Family Dentistry',
      gradientFrom: 'purple-50',
      gradientTo: 'white'
    },
    benefits: {
      enabled: true,
      title: 'Why Choose Family Dentistry?',
      subtitle: 'One dentist for your entire family means consistency, convenience, and comprehensive care',
      backgroundColor: 'gray-50',
      items: [
        { icon: 'Users', iconColor: '#5FC1D7', title: 'Simplified Scheduling', description: 'Request appointments for the whole family at convenient times, often on the same day', order: 1 },
        { icon: 'Heart', iconColor: '#27A8E0', title: 'Personalized Care', description: 'Each family member receives care tailored to their individual needs and concerns', order: 2 },
        { icon: 'Shield', iconColor: '#10b981', title: 'Complete Records', description: 'All your family dental histories in one place for coordinated, comprehensive care', order: 3 },
        { icon: 'Smile', iconColor: '#f59e0b', title: 'Preventive Focus', description: 'Emphasis on prevention for all ages to ensure everyone maintains healthy smiles', order: 4 },
        { icon: 'CheckCircle', iconColor: '#5FC1D7', title: 'Comfortable Environment', description: 'A welcoming atmosphere where children and adults feel at ease', order: 5 },
        { icon: 'Award', iconColor: '#27A8E0', title: 'Expert Care', description: 'Highly skilled dentist trained in treating patients of all ages', order: 6 }
      ]
    },
    ageGroups: {
      enabled: true,
      title: 'Care for Every Age',
      subtitle: 'Specialized attention for each stage of your family dental development',
      backgroundColor: 'white',
      groups: [
        { ageRange: '2-12', title: 'Children (Ages 2-12)', description: 'Gentle introduction to dental care, fluoride treatments, sealants, and habit monitoring to ensure healthy permanent teeth development', borderColor: '#5FC1D7', backgroundColor: 'blue-50', order: 1 },
        { ageRange: '13-19', title: 'Teens (Ages 13-19)', description: 'Preventive care, cavity prevention, orthodontic coordination, and education about healthy habits for lifelong dental wellness', borderColor: '#27A8E0', backgroundColor: 'orange-50', order: 2 },
        { ageRange: '20-64', title: 'Adults (Ages 20-64)', description: 'Comprehensive care including preventive services, restorative treatments, and cosmetic enhancements', borderColor: '#10b981', backgroundColor: 'green-50', order: 3 },
        { ageRange: '65+', title: 'Seniors (65+)', description: 'Special attention to age-related issues, dentures, implants, and solutions for dry mouth and other senior concerns', borderColor: '#f59e0b', backgroundColor: 'yellow-50', order: 4 }
      ]
    },
    serviceList: {
      enabled: true,
      title: 'Complete Family Services',
      subtitle: 'A full range of dental services under one roof for your entire family',
      backgroundColor: 'gray-50',
      categories: [
        { title: 'Preventive Care', icon: 'CheckCircle', iconColor: '#5FC1D7', items: ['Regular exams and cleanings', 'Digital X-rays', 'Fluoride treatments for children', 'Dental sealants', 'Oral health education'], order: 1 },
        { title: 'Restorative Treatment', icon: 'CheckCircle', iconColor: '#27A8E0', items: ['Fillings for cavities', 'Crowns and bridges', 'Root canal therapy', 'Extractions when needed', 'Dentures and implants for seniors'], order: 2 },
        { title: 'Cosmetic Services', icon: 'CheckCircle', iconColor: '#10b981', items: ['Teeth whitening', 'Dental bonding', 'Veneers', 'Smile makeovers', 'Cosmetic contouring'], order: 3 },
        { title: 'Specialty Services', icon: 'CheckCircle', iconColor: '#f59e0b', items: ['Emergency care', 'Anxiety management', 'Laser dentistry', 'Advanced diagnostics', 'Orthodontic coordination'], order: 4 }
      ]
    },
    tips: {
      enabled: true,
      title: 'Tips for Family Dental Health',
      subtitle: '',
      backgroundColor: 'white',
      sections: [
        { title: 'Start Early', borderColor: '#5FC1D7', items: ['Begin dental visits as soon as teeth appear to establish healthy habits from the start'], order: 1 },
        { title: 'Brush Together', borderColor: '#27A8E0', items: ['Make it a family routine to brush twice daily with fluoride toothpaste'], order: 2 },
        { title: 'Limit Sugar & Soda', borderColor: '#10b981', items: ['Reduce sugary snacks and drinks which contribute to tooth decay in children and adults'], order: 3 },
        { title: 'Regular Visits', borderColor: '#f59e0b', items: ['Visit together twice yearly for preventive care and early problem detection'], order: 4 }
      ]
    },
    faq: { enabled: false, faqs: [] },
    cta: {
      enabled: true,
      title: 'Your Family Smile Matters',
      description: 'Bring your entire family to us for comprehensive, compassionate dental care that keeps everyone smiling.',
      backgroundImage: '/assets/service3/Gemini_Generated_Image_cy48omcy48omcy48.png',
      primaryButtonText: 'Request an Appointment',
      primaryButtonColor: '#27A8E0',
      phone: '437-913-9288',
      address: '888 Meadowlands Dr, Ottawa, ON K2C 3R2',
      showContactInfo: false
    },
    sectionOrder: ['hero', 'benefits', 'ageGroups', 'serviceList', 'tips', 'cta']
  },

  // ========================================================================
  // 4. KIDS DENTISTRY
  // ========================================================================
  'kids-dentistry': {
    title: 'Kids Dentistry',
    displayName: 'Kids Dentistry',
    slug: 'kids-dentistry',
    category: 'preventive',
    brandColors: { primary: '#5FC1D7', secondary: '#27A8E0', accent: '#ec4899' },
    hero: {
      enabled: true,
      category: 'PEDIATRIC CARE',
      categoryColor: '#5FC1D7',
      title: 'Kids Dentistry',
      description: 'We make dental visits fun and comfortable for children! Our gentle, patient-friendly approach helps kids develop positive dental habits for life.',
      primaryButtonText: 'Request an Appointment',
      primaryButtonColor: '#27A8E0',
      secondaryButtonText: 'Learn More',
      secondaryButtonColor: '#5FC1D7',
      heroImage: '/assets/service4/Gemini_Generated_Image_3qsvb83qsvb83qsv.png',
      heroImageAlt: 'Pediatric Dentistry',
      gradientFrom: 'sky-50',
      gradientVia: 'blue-50/40',
      gradientTo: 'white'
    },
    benefits: {
      enabled: true,
      title: 'Why Kids Dentistry Matters',
      subtitle: 'Early dental care sets the foundation for a lifetime of healthy smiles',
      backgroundColor: 'gray-50',
      items: [
        { icon: 'Heart', iconColor: '#5FC1D7', title: 'Healthy Growth', description: 'Proper dental care ensures healthy development of permanent teeth and jaw structure', order: 1 },
        { icon: 'Shield', iconColor: '#27A8E0', title: 'Cavity Prevention', description: 'Early prevention is easier and less expensive than treating problems later', order: 2 },
        { icon: 'Smile', iconColor: '#10b981', title: 'Confidence Building', description: 'Healthy teeth help kids feel confident and enjoy social activities', order: 3 }
      ]
    },
    features: {
      enabled: true,
      title: 'Our Kid-Friendly Approach',
      subtitle: 'Making dental visits fun, comfortable, and anxiety-free for children',
      backgroundColor: 'white',
      image: '/assets/service4/Gemini_Generated_Image_3qsvb83qsvb83qsv (1).png',
      imageAlt: 'Kids Friendly Dental Office',
      imagePosition: 'left',
      items: [
        { icon: 'Star', iconColor: '#5FC1D7', title: 'Gentle Techniques', description: 'We use soft-spoken, patient communication and gentle handling', order: 1 },
        { icon: 'Star', iconColor: '#27A8E0', title: 'Fun Environment', description: 'Bright, welcoming office with child-friendly decor and entertainment', order: 2 },
        { icon: 'Star', iconColor: '#10b981', title: 'Positive Reinforcement', description: 'Praise and rewards for brave dental behavior', order: 3 },
        { icon: 'Star', iconColor: '#f59e0b', title: 'Parent Involvement', description: 'Parents stay close by during visits for comfort and support', order: 4 }
      ]
    },
    serviceList: {
      enabled: true,
      title: 'Services for Children',
      subtitle: 'Comprehensive dental care designed for young smiles',
      backgroundColor: 'gray-50',
      categories: [
        { title: 'Preventive Care', icon: 'CheckCircle', iconColor: '#5FC1D7', items: ['First visits (starting at age 2)', 'Regular exams and cleanings', 'Fluoride treatments', 'Dental sealants'], order: 1 },
        { title: 'Education & Habit Formation', icon: 'CheckCircle', iconColor: '#27A8E0', items: ['Brushing and flossing instruction', 'Dietary counseling', 'Thumb-sucking intervention', 'Habit correction'], order: 2 },
        { title: 'Treatment Services', icon: 'CheckCircle', iconColor: '#10b981', items: ['Cavity fillings', 'Emergency care', 'Tooth extraction when needed', 'Space maintenance'], order: 3 },
        { title: 'Special Needs', icon: 'CheckCircle', iconColor: '#f59e0b', items: ['Anxious patient management', 'Gentle sedation options', 'Special accommodations', 'Behavioral guidance'], order: 4 }
      ]
    },
    ageGroups: {
      enabled: true,
      title: 'Dental Milestones by Age',
      subtitle: '',
      backgroundColor: 'white',
      groups: [
        { ageRange: '0-2', title: 'Ages 0-2: Baby Teeth Emerge', description: 'First visit when first tooth appears. Clean gums daily and prevent cavities', borderColor: '#5FC1D7', order: 1 },
        { ageRange: '3-5', title: 'Ages 3-5: Primary Dentition', description: 'All 20 baby teeth have erupted. Focus on cavity prevention and proper brushing', borderColor: '#27A8E0', order: 2 },
        { ageRange: '6-12', title: 'Ages 6-12: Mixed Dentition', description: 'Baby teeth fall out and permanent teeth erupt. Monitor for orthodontic issues', borderColor: '#10b981', order: 3 },
        { ageRange: '13+', title: 'Ages 13+: Permanent Teeth', description: 'All permanent teeth have erupted. Establish lifelong healthy habits', borderColor: '#f59e0b', order: 4 }
      ]
    },
    faq: { enabled: false, faqs: [] },
    cta: {
      enabled: true,
      title: 'Start Your Child Smile Journey',
      description: 'Give your child the gift of healthy teeth and a positive relationship with dental care.',
      backgroundImage: '/assets/service4/Gemini_Generated_Image_3qsvb83qsvb83qsv.png',
      primaryButtonText: 'Request an Appointment',
      primaryButtonColor: '#27A8E0',
      phone: '437-913-9288',
      address: '888 Meadowlands Dr, Ottawa, ON K2C 3R2',
      showContactInfo: false
    },
    sectionOrder: ['hero', 'benefits', 'features', 'serviceList', 'ageGroups', 'cta']
  },

  // ========================================================================
  // 5. TOOTH EXTRACTIONS
  // ========================================================================
  'tooth-extractions': {
    title: 'Tooth Extractions',
    displayName: 'Tooth Extractions',
    slug: 'tooth-extractions',
    category: 'restorative',
    brandColors: { primary: '#5FC1D7', secondary: '#27A8E0', accent: '#ef4444' },
    hero: {
      enabled: true,
      category: 'TOOTH REMOVAL',
      categoryColor: '#27A8E0',
      title: 'Tooth Extractions',
      description: 'When a tooth cannot be saved, our gentle extraction procedure ensures minimal discomfort and promotes rapid healing. We discuss all options before recommending extraction.',
      primaryButtonText: 'Request an Appointment',
      primaryButtonColor: '#27A8E0',
      secondaryButtonText: 'Learn More',
      secondaryButtonColor: '#5FC1D7',
      heroImage: '/assets/service5/Gemini_Generated_Image_pw3zpnpw3zpnpw3z.png',
      heroImageAlt: 'Dental Extraction',
      gradientFrom: 'slate-50',
      gradientVia: 'blue-50/30',
      gradientTo: 'white'
    },
    benefits: {
      enabled: true,
      title: 'When Is Extraction Necessary?',
      subtitle: 'Extraction is typically a last resort when the tooth cannot be saved',
      backgroundColor: 'gray-50',
      items: [
        { icon: 'AlertCircle', iconColor: '#5FC1D7', title: 'Severe Decay', description: 'Tooth damage is too extensive for filling or crown restoration', order: 1 },
        { icon: 'AlertCircle', iconColor: '#27A8E0', title: 'Advanced Gum Disease', description: 'Tooth is too loose due to severe periodontal disease', order: 2 },
        { icon: 'AlertCircle', iconColor: '#10b981', title: 'Traumatic Injury', description: 'Tooth is fractured beyond repair from accidents or trauma', order: 3 },
        { icon: 'AlertCircle', iconColor: '#f59e0b', title: 'Infections', description: 'Uncontrollable infections or abscesses around the tooth', order: 4 },
        { icon: 'AlertCircle', iconColor: '#5FC1D7', title: 'Orthodontic Reasons', description: 'Tooth extraction needed to create space for proper alignment', order: 5 },
        { icon: 'AlertCircle', iconColor: '#27A8E0', title: 'Impacted Teeth', description: 'Impacted wisdom teeth or other teeth unable to erupt normally', order: 6 }
      ]
    },
    process: {
      enabled: true,
      title: 'Our Gentle Extraction Process',
      subtitle: 'Minimizing discomfort and promoting optimal healing',
      backgroundColor: 'white',
      image: '/assets/service5/Gemini_Generated_Image_pw3zpnpw3zpnpw3z (1).png',
      imageAlt: 'Dental Extraction Procedure',
      steps: [
        { stepNumber: 1, title: 'Complete Examination', description: 'X-rays and assessment to plan the safest extraction method', iconColor: '#5FC1D7', order: 1 },
        { stepNumber: 2, title: 'Local Anesthesia', description: 'Numbing of the area ensures you feel no pain during the procedure', iconColor: '#27A8E0', order: 2 },
        { stepNumber: 3, title: 'Gentle Removal', description: 'Careful technique to extract the tooth with minimal trauma', iconColor: '#10b981', order: 3 },
        { stepNumber: 4, title: 'Healing Care', description: 'Post-operative instructions for optimal healing and comfort', iconColor: '#f59e0b', order: 4 }
      ]
    },
    whatToExpect: {
      enabled: true,
      title: 'What to Expect',
      subtitle: 'Understanding the extraction experience helps you prepare and recover',
      backgroundColor: 'gray-50',
      items: [
        { title: 'During the Procedure', borderColor: '#5FC1D7', items: ['You will feel pressure but no pain', 'May hear sounds and feel vibrations', 'Procedure typically takes 20-40 minutes', 'You remain awake and aware throughout'], order: 1 },
        { title: 'After the Procedure', borderColor: '#27A8E0', items: ['Mild to moderate soreness for 3-7 days', '
