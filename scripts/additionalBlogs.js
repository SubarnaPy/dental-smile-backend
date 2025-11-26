// Additional Example Blogs for Advanced Blog System

const additionalBlogs = [
  {
    title: "Teeth Whitening: Transform Your Smile in One Visit",
    excerpt: "Discover professional teeth whitening treatments that deliver dramatic results safely and effectively. Transform your smile with our advanced whitening technology.",
    subtitle: "Professional whitening for a brighter, more confident smile",
    category: "Cosmetic Dentistry",
    tags: ["teeth whitening", "cosmetic dentistry", "smile makeover", "bleaching", "professional whitening"],
    featured: false,
    published: true,
    seo: {
      metaTitle: "Professional Teeth Whitening | Bright Smile Dental Clinic",
      metaDescription: "Get professional teeth whitening treatments at Bright Smile Dental Clinic. Safe, effective, and long-lasting results.",
      keywords: ["teeth whitening", "dental bleaching", "smile makeover", "cosmetic dentistry"],
      canonicalUrl: "https://brightsmile.com/blog/teeth-whitening-guide"
    },
    sections: [
      {
        id: "hero-whitening",
        type: "hero",
        title: "✨ Professional Teeth Whitening",
        content: "Achieve a brighter, more confident smile with our advanced whitening treatments. Safe, effective, and long-lasting results.",
        images: [{
          url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&crop=center",
          alt: "Beautiful bright white smile after professional whitening",
          style: "hero",
          position: "center"
        }],
        styles: {
          backgroundColor: "#f0f9ff",
          textColor: "#0f172a",
          textAlign: "center",
          padding: "5rem 2rem"
        },
        order: 0,
        visible: true
      },
      {
        id: "text-whitening-intro",
        type: "text",
        title: "Why Choose Professional Teeth Whitening?",
        content: `<p class="lead">Your smile is one of your most valuable assets. Professional teeth whitening at Bright Smile Dental Clinic offers safe, effective, and dramatic results that over-the-counter products simply can't match.</p>

<p>Our advanced whitening systems use professional-grade whitening agents combined with LED light technology to penetrate deep into the tooth enamel, breaking up stains and discoloration for results that can last up to 2 years.</p>`,
        styles: {
          textAlign: "left",
          fontSize: "1.1rem",
          lineHeight: "1.7",
          marginBottom: "2rem"
        },
        order: 1,
        visible: true
      },
      {
        id: "text-whitening-types",
        type: "text",
        title: "🎯 Our Whitening Options",
        content: `<div class="grid md:grid-cols-2 gap-6">
<div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
<h3 class="text-xl font-bold text-blue-900 mb-3">⚡ In-Office Whitening</h3>
<p class="text-blue-800">Our most popular option delivers dramatic results in just one hour using professional-grade whitening gel and LED light technology. Perfect for special occasions or when you need immediate results.</p>
<ul class="mt-3 space-y-1 text-blue-700">
<li>• Immediate results (8-12 shades whiter)</li>
<li>• Supervised by dental professionals</li>
<li>• Comfortable, pain-free procedure</li>
<li>• Results last 1-2 years</li>
</ul>
</div>

<div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
<h3 class="text-xl font-bold text-green-900 mb-3">🏠 Take-Home Whitening</h3>
<p class="text-green-800">Custom-fitted trays with professional whitening gel for use at home over 1-2 weeks. Ideal for gradual, comfortable results that fit your schedule.</p>
<ul class="mt-3 space-y-1 text-green-700">
<li>• Custom-fitted trays for comfort</li>
<li>• Professional-strength whitening gel</li>
<li>• Use at your convenience</li>
<li>• Maintain results with touch-ups</li>
</ul>
</div>
</div>`,
        styles: {
          textAlign: "left",
          fontSize: "1rem",
          lineHeight: "1.6"
        },
        order: 2,
        visible: true
      },
      {
        id: "gallery-before-after",
        type: "gallery",
        title: "✨ Real Patient Transformations",
        images: [
          {
            url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=face",
            alt: "Before and after teeth whitening comparison",
            caption: "Before Treatment - Notice the discoloration and stains",
            style: "gallery"
          },
          {
            url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&crop=face",
            alt: "Bright white smile after professional whitening",
            caption: "After Treatment - Dramatic improvement in just one visit",
            style: "gallery"
          },
          {
            url: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop&crop=face",
            alt: "Close-up of professionally whitened teeth",
            caption: "Professional Results - Natural, bright, and healthy-looking",
            style: "gallery"
          }
        ],
        metadata: {
          galleryLayout: "grid",
          columns: 3
        },
        styles: {
          padding: "3rem 0",
          backgroundColor: "#fafafa"
        },
        order: 3,
        visible: true
      },
      {
        id: "text-benefits",
        type: "text",
        title: "🌟 Why Our Patients Love Professional Whitening",
        content: `<div class="grid md:grid-cols-3 gap-6">
<div class="text-center p-6 bg-white rounded-lg shadow-sm border">
<div class="text-3xl mb-3">⚡</div>
<h4 class="font-bold text-lg mb-2">Fast Results</h4>
<p class="text-gray-600">See dramatic improvement in just one visit with our in-office treatment.</p>
</div>

<div class="text-center p-6 bg-white rounded-lg shadow-sm border">
<div class="text-3xl mb-3">🛡️</div>
<h4 class="font-bold text-lg mb-2">Safe & Gentle</h4>
<p class="text-gray-600">Supervised by dental professionals with protective measures for your gums.</p>
</div>

<div class="text-center p-6 bg-white rounded-lg shadow-sm border">
<div class="text-3xl mb-3">💎</div>
<h4 class="font-bold text-lg mb-2">Long-Lasting</h4>
<p class="text-gray-600">Results that last up to 2 years with proper care and maintenance.</p>
</div>
</div>`,
        order: 4,
        visible: true
      },
      {
        id: "quote-whitening",
        type: "quote",
        content: "\"I was amazed at how much brighter my smile became in just one hour! The staff was so professional and made me feel completely comfortable throughout the entire process.\"",
        title: "Sarah Johnson",
        metadata: {
          author: "Sarah Johnson",
          authorTitle: "Professional Whitening Patient"
        },
        styles: {
          backgroundColor: "#fff8e1",
          textAlign: "center",
          fontSize: "1.3rem",
          fontStyle: "italic",
          padding: "3rem 2rem",
          borderRadius: "12px",
          margin: "2rem 0"
        },
        order: 5,
        visible: true
      },
      {
        id: "text-maintenance",
        type: "text",
        title: "💡 Maintaining Your Bright Smile",
        content: `<p class="text-lg mb-4">To keep your whitening results looking their best, follow these simple maintenance tips:</p>

<div class="bg-blue-50 p-6 rounded-lg">
<h4 class="font-bold text-blue-900 mb-3">Daily Care Routine:</h4>
<ul class="space-y-2 text-blue-800">
<li><strong>Brush twice daily</strong> with a whitening toothpaste</li>
<li><strong>Floss daily</strong> to remove plaque and stains</li>
<li><strong>Use mouthwash</strong> to freshen breath and protect enamel</li>
<li><strong>Avoid staining foods</strong> like coffee, tea, and red wine for the first 48 hours</li>
<li><strong>Touch-up treatments</strong> every 6-12 months as needed</li>
</ul>
</div>`,
        order: 6,
        visible: true
      },
      {
        id: "cta-whitening",
        type: "cta",
        title: "Ready for Your Brightest Smile Yet?",
        content: "Transform your smile with our professional whitening treatments. Schedule your consultation today and discover why patients choose Bright Smile Dental Clinic for their whitening needs.",
        metadata: {
          buttonText: "Book Whitening Consultation",
          buttonUrl: "/contact",
          buttonStyle: "primary"
        },
        styles: {
          backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          textColor: "#ffffff",
          textAlign: "center",
          padding: "4rem 2rem",
          borderRadius: "16px",
          margin: "3rem 0"
        },
        order: 7,
        visible: true
      }
    ]
  },
  {
    title: "🚨 Dental Emergency Care: What to Do When You Need Help Fast",
    excerpt: "Handle dental emergencies with confidence. Know when to seek immediate care and what to expect from our 24/7 emergency dental services.",
    subtitle: "24/7 emergency dental care for when you need it most",
    category: "Emergency Dentistry",
    tags: ["dental emergency", "emergency care", "tooth pain", "urgent dentistry", "24/7 care"],
    featured: true,
    published: true,
    seo: {
      metaTitle: "Dental Emergency Care | Bright Smile Dental Clinic",
      metaDescription: "Dental emergencies can happen anytime. Learn what to do and when to seek immediate care at Bright Smile Dental Clinic.",
      keywords: ["dental emergency", "emergency dentistry", "tooth pain", "urgent care"],
      canonicalUrl: "https://brightsmile.com/blog/dental-emergencies"
    },
    sections: [
      {
        id: "hero-emergency",
        type: "hero",
        title: "🚨 Dental Emergency Care",
        content: "We're here when you need us most. 24/7 emergency dental care for all your urgent needs.",
        images: [{
          url: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=600&fit=crop&crop=center",
          alt: "Emergency dental care facility with modern equipment",
          style: "hero",
          position: "center"
        }],
        styles: {
          backgroundColor: "#fef2f2",
          textColor: "#dc2626",
          textAlign: "center",
          padding: "5rem 2rem"
        },
        order: 0,
        visible: true
      },
      {
        id: "text-common-emergencies",
        type: "text",
        title: "Common Dental Emergencies",
        content: `<p>Dental emergencies can happen unexpectedly. Here's what constitutes a dental emergency:</p>

<h3>True Dental Emergencies</h3>
<ul>
<li>Severe tooth pain preventing normal activities</li>
<li>Knocked-out tooth (call immediately)</li>
<li>Broken or cracked tooth with pain</li>
<li>Lost filling or crown causing pain</li>
<li>Swelling indicating infection</li>
<li>Bleeding that won't stop</li>
</ul>

<h3>When to Call Immediately</h3>
<p>If you experience severe pain, swelling, or trauma to the mouth, call our emergency line right away. Time is critical for saving teeth and preventing complications.</p>`,
        order: 1,
        visible: true
      },
      {
        id: "text-what-to-do",
        type: "text",
        title: "What to Do While Waiting for Care",
        content: `<h3>For Tooth Pain</h3>
<p>Rinse with warm salt water. Take over-the-counter pain medication if appropriate. Avoid chewing on the affected side.</p>

<h3>For Knocked-Out Tooth</h3>
<p>Handle the tooth by the crown only. Rinse gently if dirty. Try to reinsert if possible, or keep in milk. Call immediately!</p>

<h3>For Broken Tooth</h3>
<p>Save any pieces. Rinse mouth with warm water. Apply gauze if bleeding. Come in as soon as possible.</p>

<h3>For Lost Filling/Crown</h3>
<p>Use dental cement from pharmacy if available. Avoid chewing on that tooth. Schedule appointment soon.</p>`,
        order: 2,
        visible: true
      },
      {
        id: "quote-emergency",
        type: "quote",
        content: "\"When I chipped my tooth on vacation, Bright Smile was there to fix it immediately. Their emergency care gave me peace of mind.\"",
        metadata: {
          author: "Mike Chen",
          authorTitle: "Emergency Patient"
        },
        styles: {
          backgroundColor: "#fff3e0",
          textAlign: "center",
          fontSize: "1.2rem",
          fontStyle: "italic",
          padding: "2rem"
        },
        order: 3,
        visible: true
      },
      {
        id: "text-prevention",
        type: "text",
        title: "Preventing Dental Emergencies",
        content: `<p>While some emergencies can't be prevented, you can reduce your risk:</p>

<ul>
<li>Wear mouthguards during sports</li>
<li>Avoid chewing hard foods or ice</li>
<li>Regular dental check-ups</li>
<li>Use teeth for eating, not opening packages</li>
<li>Address dental issues before they become emergencies</li>
</ul>`,
        order: 4,
        visible: true
      },
      {
        id: "cta-emergency",
        type: "cta",
        title: "Need Emergency Care?",
        content: "Call our 24/7 emergency line. We're here when you need us most.",
        metadata: {
          buttonText: "Call Emergency Line",
          buttonLink: "tel:+1-555-EMERGENCY",
          buttonStyle: "danger"
        },
        styles: {
          backgroundColor: "#f44336",
          textColor: "#ffffff",
          textAlign: "center",
          padding: "3rem 2rem"
        },
        order: 5,
        visible: true
      }
    ]
  },
  {
    title: "👶 Children's Dentistry: Making Dental Visits Fun and Fear-Free",
    excerpt: "Create positive dental experiences for your children with our specialized pediatric dentistry services. Fun, gentle care for happy, healthy smiles from infancy through adolescence.",
    subtitle: "Specialized care for happy, healthy smiles from infancy through adolescence",
    category: "Pediatric Dentistry",
    tags: ["children's dentistry", "pediatric care", "kids dental", "family dentistry", "fear-free dentistry"],
    featured: false,
    published: true,
    seo: {
      metaTitle: "Children's Dentistry | Bright Smile Dental Clinic",
      metaDescription: "Make dental visits fun for your children. Specialized pediatric dentistry services for kids of all ages.",
      keywords: ["children's dentistry", "pediatric dentist", "kids dental care", "family dentistry"],
      canonicalUrl: "https://brightsmile.com/blog/childrens-dentistry"
    },
    sections: [
      {
        id: "hero-kids",
        type: "hero",
        title: "👶 Children's Dentistry",
        content: "Creating positive dental experiences for children of all ages with fun, gentle care",
        images: [{
          url: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&h=600&fit=crop&crop=center",
          alt: "Happy child smiling during dental visit with friendly pediatric dentist",
          style: "hero",
          position: "center"
        }],
        styles: {
          backgroundColor: "#f0f9ff",
          textColor: "#0369a1",
          textAlign: "center",
          padding: "5rem 2rem"
        },
        order: 0,
        visible: true
      },
      {
        id: "text-first-visit",
        type: "text",
        title: "Your Child's First Dental Visit",
        content: `<p>We recommend bringing your child for their first dental visit by age 1, or when their first tooth appears. Early visits help:</p>

<ul>
<li>Establish good oral health habits</li>
<li>Identify potential issues early</li>
<li>Create positive associations with dental care</li>
<li>Answer parental questions about oral development</li>
</ul>

<p>First visits are typically short and focused on familiarizing your child with our office and staff.</p>`,
        order: 1,
        visible: true
      },
      {
        id: "gallery-kids-friendly",
        type: "gallery",
        title: "Our Kids-Friendly Environment",
        images: [
          {
            url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
            alt: "Colorful waiting room for kids",
            caption: "Fun Waiting Area",
            style: "gallery"
          },
          {
            url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
            alt: "Child-sized dental chair",
            caption: "Kid-Sized Equipment",
            style: "gallery"
          },
          {
            url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
            alt: "Toy reward system",
            caption: "Reward System",
            style: "gallery"
          }
        ],
        metadata: {
          galleryLayout: "grid",
          columns: 3
        },
        styles: {
          padding: "2rem 0"
        },
        order: 2,
        visible: true
      },
      {
        id: "text-services",
        type: "text",
        title: "Pediatric Dental Services",
        content: `<h3>Preventive Care</h3>
<p>Regular cleanings, fluoride treatments, and sealants to protect young teeth.</p>

<h3>Restorative Care</h3>
<p>Fillings, crowns, and other treatments using child-friendly techniques.</p>

<h3>Orthodontic Assessment</h3>
<p>Early evaluation for potential orthodontic needs.</p>

<h3>Emergency Care</h3>
<p>Prompt treatment for dental injuries and pain.</p>

<h3>Specialized Care</h3>
<p>Services for children with special healthcare needs.</p>`,
        order: 3,
        visible: true
      },
      {
        id: "text-behavior",
        type: "text",
        title: "Managing Dental Anxiety in Children",
        content: `<p>We understand that dental visits can be stressful for children. Our approach includes:</p>

<ul>
<li><strong>Child-Friendly Environment:</strong> Colorful, welcoming space designed for kids</li>
<li><strong>Gentle Techniques:</strong> Patient, understanding care from our pediatric specialists</li>
<li><strong>Distraction Methods:</strong> TVs, music, and toys to keep children comfortable</li>
<li><strong>Positive Reinforcement:</strong> Praise and rewards for brave behavior</li>
<li><strong>Parental Involvement:</strong> Parents welcome in treatment rooms</li>
</ul>`,
        order: 4,
        visible: true
      },
      {
        id: "quote-parent",
        type: "quote",
        content: "\"My daughter used to cry at the thought of going to the dentist. Now she looks forward to her visits at Bright Smile!\"",
        metadata: {
          author: "Jennifer Martinez",
          authorTitle: "Parent of Pediatric Patient"
        },
        styles: {
          backgroundColor: "#e8f5e8",
          textAlign: "center",
          fontSize: "1.2rem",
          fontStyle: "italic",
          padding: "2rem"
        },
        order: 5,
        visible: true
      },
      {
        id: "cta-kids",
        type: "cta",
        title: "Schedule Your Child's Visit",
        content: "Give your child the gift of a healthy smile. Book their first appointment today.",
        metadata: {
          buttonText: "Book Pediatric Visit",
          buttonLink: "/contact",
          buttonStyle: "success"
        },
        styles: {
          backgroundColor: "#4caf50",
          textColor: "#ffffff",
          textAlign: "center",
          padding: "3rem 2rem"
        },
        order: 6,
        visible: true
      }
    ]
  }
];

module.exports = { additionalBlogs };