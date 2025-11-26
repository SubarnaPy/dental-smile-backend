// Example: Creating an Advanced Blog with Multiple Sections
// This example shows how to structure a blog with various section types

const exampleAdvancedBlog = {
  title: "Complete Guide to Dental Implants",
  excerpt: "Everything you need to know about dental implants, from consultation to recovery",
  subtitle: "Transform your smile with modern implant technology",
  category: "Dental Procedures",
  tags: ["dental implants", "oral surgery", "restorative dentistry"],
  featured: true,
  published: false,
  seo: {
    metaTitle: "Dental Implants Guide | Bright Smile Dental Clinic",
    metaDescription: "Learn about dental implants procedure, benefits, costs, and recovery at Bright Smile Dental Clinic.",
    keywords: ["dental implants", "tooth replacement", "oral surgery"],
    canonicalUrl: "https://brightsmile.com/blog/dental-implants-guide"
  },
  sections: [
    {
      id: "hero-section-1",
      type: "hero",
      title: "Complete Guide to Dental Implants",
      content: "Transform your smile with modern implant technology that looks and feels natural",
      images: [{
        url: "https://example.com/hero-dental-implants.jpg",
        alt: "Dental implants procedure",
        style: "hero",
        position: "center"
      }],
      styles: {
        backgroundColor: "#f8f9fa",
        textColor: "#ffffff",
        textAlign: "center",
        padding: "4rem 2rem"
      },
      order: 0,
      visible: true
    },
    {
      id: "text-intro",
      type: "text",
      title: "What are Dental Implants?",
      content: `<p>Dental implants are artificial tooth roots that provide a permanent base for fixed, replacement teeth. They are a popular and effective long-term solution for people who suffer from missing teeth, failing teeth or chronic dental problems.</p>

<p>Unlike traditional bridges or dentures, dental implants are designed to fuse with your jawbone, providing stable support for artificial teeth. This makes them a more comfortable and durable option for tooth replacement.</p>`,
      styles: {
        textAlign: "left",
        fontSize: "1.1rem",
        lineHeight: "1.6"
      },
      order: 1,
      visible: true
    },
    {
      id: "gallery-process",
      type: "gallery",
      title: "The Dental Implant Process",
      images: [
        {
          url: "https://example.com/consultation.jpg",
          alt: "Initial consultation",
          caption: "Step 1: Consultation and Planning",
          style: "gallery"
        },
        {
          url: "https://example.com/implant-placement.jpg",
          alt: "Implant placement surgery",
          caption: "Step 2: Implant Placement",
          style: "gallery"
        },
        {
          url: "https://example.com/healing.jpg",
          alt: "Healing period",
          caption: "Step 3: Osseointegration",
          style: "gallery"
        },
        {
          url: "https://example.com/crown-placement.jpg",
          alt: "Final crown placement",
          caption: "Step 4: Crown Placement",
          style: "gallery"
        }
      ],
      metadata: {
        galleryLayout: "grid",
        columns: 2
      },
      styles: {
        padding: "2rem 0"
      },
      order: 2,
      visible: true
    },
    {
      id: "text-benefits",
      type: "text",
      title: "Benefits of Dental Implants",
      content: `<ul>
<li><strong>Natural Appearance:</strong> Implants look and feel like your own teeth</li>
<li><strong>Improved Speech:</strong> No more slipping or clicking sounds</li>
<li><strong>Comfortable:</strong> No irritation to gums like traditional dentures</li>
<li><strong>Easier Eating:</strong> Chew with confidence and without pain</li>
<li><strong>Durability:</strong> With proper care, implants can last a lifetime</li>
<li><strong>Bone Preservation:</strong> Prevents bone loss that occurs with missing teeth</li>
</ul>`,
      styles: {
        textAlign: "left"
      },
      order: 3,
      visible: true
    },
    {
      id: "quote-patient",
      type: "quote",
      content: "\"Getting dental implants was the best decision I ever made. I can finally smile confidently and eat all my favorite foods without worry.\"",
      metadata: {
        author: "Sarah Johnson",
        authorTitle: "Dental Implant Patient"
      },
      styles: {
        backgroundColor: "#e3f2fd",
        textAlign: "center",
        fontSize: "1.2rem",
        fontStyle: "italic",
        padding: "2rem",
        margin: "2rem 0"
      },
      order: 4,
      visible: true
    },
    {
      id: "video-procedure",
      type: "video",
      title: "Watch the Procedure",
      metadata: {
        videoUrl: "https://youtube.com/watch?v=dental-implant-procedure",
        thumbnailUrl: "https://example.com/video-thumbnail.jpg"
      },
      styles: {
        textAlign: "center",
        padding: "2rem 0"
      },
      order: 5,
      visible: true
    },
    {
      id: "text-aftercare",
      type: "text",
      title: "Recovery and Aftercare",
      content: `<p>The recovery period for dental implants varies depending on the individual case, but most patients can return to normal activities within a few days. Here's what to expect:</p>

<h3>Immediate Post-Procedure Care</h3>
<p>Some swelling and discomfort is normal. Apply ice packs and take prescribed pain medication as directed.</p>

<h3>Oral Hygiene</h3>
<p>Maintain excellent oral hygiene to ensure proper healing. Use the prescribed mouthwash and be gentle around the implant site.</p>

<h3>Dietary Guidelines</h3>
<p>Stick to soft foods for the first few days, gradually returning to your normal diet as healing progresses.</p>`,
      order: 6,
      visible: true
    },
    {
      id: "cta-consultation",
      type: "cta",
      title: "Ready to Transform Your Smile?",
      content: "Schedule your consultation today and take the first step towards a confident smile.",
      metadata: {
        buttonText: "Book Consultation",
        buttonLink: "/contact",
        buttonStyle: "primary"
      },
      styles: {
        backgroundColor: "#007bff",
        textColor: "#ffffff",
        textAlign: "center",
        padding: "3rem 2rem",
        margin: "2rem 0"
      },
      order: 7,
      visible: true
    }
  ]
};

module.exports = { exampleAdvancedBlog };