import { Mail, Phone, Clock, Globe, Zap, CheckCircle2 } from "lucide-react"

export const contactConfig = {
  hero: {
    title: "Let's Build Something Powerful Together",
    subtitle: "Tell us about your idea, challenge, or requirement. Our engineers will review it and get back to you within 24 hours.",
    primaryCTA: {
      text: "Talk to Our Team",
      href: "#contact-form"
    },
    secondaryCTA: {
      text: "Start Your Project",
      href: "#contact-form"
    }
  },

  form: {
    title: "Get in Touch",
    description: "Share a few details and our technical team will reach out with the next steps.",
    privacyText: "We respect your privacy. Your information will never be shared.",
    submitButton: "Send Message",
    successMessage: "Thank you! We'll get back to you within 24 hours.",
    fields: {
      name: {
        label: "Full Name",
        placeholder: "John Doe",
        required: true
      },
      email: {
        label: "Work Email",
        placeholder: "john@company.com",
        required: true
      },
      company: {
        label: "Company Name",
        placeholder: "Your Company",
        required: false
      },
      phone: {
        label: "Phone / WhatsApp",
        placeholder: "+91 XXXXX XXXXX",
        required: false
      },
      projectType: {
        label: "Project Type",
        placeholder: "Select a project type",
        options: [
          "Web Development",
          "Mobile App",
          "AI / Automation",
          "SaaS / MVP",
          "Dedicated Developers",
          "Other"
        ]
      },
      budget: {
        label: "Estimated Budget",
        placeholder: "Select budget range",
        required: false,
        options: [
          "Under $5k",
          "$5k – $10k",
          "$10k – $25k",
          "$25k+"
        ]
      },
      message: {
        label: "Message / Project Brief",
        placeholder: "Tell us about your project, timeline, and any specific requirements...",
        required: true
      }
    }
  },

  contactOptions: {
    title: "Prefer Direct Contact?",
    options: [
      {
        icon: Mail,
        title: "Email",
        value: "hr@techsonance.co.in",
        href: "mailto:hr@techsonance.co.in"
      },
      {
        icon: Phone,
        title: "Phone / WhatsApp",
        value: "+91 91731 01711",
        href: "tel:+919173101711"
      },
      {
        icon: Globe,
        title: "Office Address",
        value: "UG-15, Palladium Plaza, Vip Road, Vesu, Surat, Gujarat - 395007, India"
      },
      {
        icon: Clock,
        title: "Business Hours",
        value: "Mon – Fri | 10:00 AM – 7:00 PM IST"
      },
      {
        icon: Zap,
        title: "Response Time",
        value: "Within 24 hours"
      }
    ]
  },

  whyChooseUs: {
    title: "Why Teams Choose Us",
    points: [
      "Experienced Full-Stack Engineers",
      "Clear Communication & Transparency",
      "Secure & Scalable Code",
      "Long-term Support & Maintenance",
      "Startup-friendly & Enterprise-ready"
    ]
  },

  location: {
    title: "Visit Our Office",
    companyName: "TechSonance InfoTech LLP",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.206460804532!2d72.79313257499113!3d21.14418038380486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053fa13e5542b%3A0x67b4b567726b12a4!2sPalladium%20Plaza!5e0!3m2!1sen!2sin!4v1766241008337!5m2!1sen!2sin",
    mapTitle: "TechSonance InfoTech Office Location - Palladium Plaza, Surat"
  },

  finalCTA: {
    title: "Have an idea but not sure where to start?",
    buttonText: "Schedule a Free Consultation",
    subtext: "No obligation. Just clarity.",
    href: "#contact-form"
  }
}
