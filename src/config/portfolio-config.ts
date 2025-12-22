import { CheckCircle2 } from "lucide-react"

export const portfolioConfig = {
  hero: {
    headline: "Our Work, Our Craft",
    subheadline: "A selection of projects showcasing how we build scalable, high-quality digital solutions.",
    highlights: ["Web Apps", "SaaS", "Automation", "Full-Stack Solutions"],
    ctaText: "Start a Project",
    ctaHref: "/contact"
  },

  overview: {
    title: "What We've Built",
    description: "We partner with startups and businesses to design, develop, and scale digital products. Below are examples of our work and technical capabilities.",
    disclaimer: "Some projects are shown as concept builds or anonymized due to client confidentiality."
  },

  categories: [
    { id: "all", label: "All" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "saas", label: "SaaS Products" },
    { id: "ai", label: "AI / Automation" },
    { id: "mvp", label: "MVPs" }
  ],

  projects: [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "Scalable online marketplace with real-time inventory",
      category: "web",
      type: "Web App",
      techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
      image: "/placeholder-project.jpg",
      overview: "A modern e-commerce platform designed for a growing retail business.",
      problem: "Client needed a fast, scalable platform to handle increasing traffic and inventory management.",
      solution: "Built a full-stack solution with server-side rendering, optimized database queries, and cloud infrastructure.",
      features: [
        "Real-time inventory tracking",
        "Advanced search and filtering",
        "Secure payment integration",
        "Admin dashboard with analytics"
      ],
      outcome: "50% faster page load times, 3x increase in concurrent users handled, improved conversion rate by 25%"
    },
    {
      id: 2,
      name: "SaaS Analytics Dashboard",
      description: "Data visualization platform for business insights",
      category: "saas",
      type: "SaaS",
      techStack: ["Vue.js", "Python", "FastAPI", "MongoDB", "GCP"],
      image: "/placeholder-project.jpg",
      overview: "Analytics platform helping businesses make data-driven decisions.",
      problem: "Client struggled with fragmented data sources and lack of actionable insights.",
      solution: "Developed a unified dashboard with custom data pipelines and interactive visualizations.",
      features: [
        "Multi-source data integration",
        "Custom report builder",
        "Real-time data updates",
        "Role-based access control"
      ],
      outcome: "Reduced reporting time by 70%, enabled real-time decision making, scaled to 10k+ users"
    },
    {
      id: 3,
      name: "Mobile Fitness App",
      description: "Cross-platform fitness tracking application",
      category: "mobile",
      type: "Mobile App",
      techStack: ["React Native", "Node.js", "MongoDB", "Firebase"],
      image: "/placeholder-project.jpg",
      overview: "Fitness tracking app with personalized workout plans and progress monitoring.",
      problem: "Client wanted to reach both iOS and Android users without maintaining separate codebases.",
      solution: "Built a cross-platform mobile app with offline support and real-time sync.",
      features: [
        "Workout tracking and history",
        "Personalized fitness plans",
        "Progress analytics",
        "Social sharing features"
      ],
      outcome: "Launched on both platforms simultaneously, 4.8-star rating, 50k+ downloads in first quarter"
    },
    {
      id: 4,
      name: "AI Document Processor",
      description: "Automated document analysis and extraction",
      category: "ai",
      type: "AI Automation",
      techStack: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "AWS Lambda"],
      image: "/placeholder-project.jpg",
      overview: "AI-powered system to automate document processing workflows.",
      problem: "Manual document processing was time-consuming and error-prone.",
      solution: "Implemented ML models for document classification and data extraction with 95% accuracy.",
      features: [
        "Intelligent document classification",
        "Automated data extraction",
        "Validation and error handling",
        "API integration for workflows"
      ],
      outcome: "Reduced processing time by 90%, eliminated manual errors, processed 100k+ documents monthly"
    },
    {
      id: 5,
      name: "Project Management MVP",
      description: "Lightweight project tracking for small teams",
      category: "mvp",
      type: "SaaS / MVP",
      techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vercel"],
      image: "/placeholder-project.jpg",
      overview: "MVP for a project management tool targeting small development teams.",
      problem: "Existing tools were too complex and expensive for small teams.",
      solution: "Built a focused MVP with essential features, launched in 6 weeks.",
      features: [
        "Task management and assignments",
        "Team collaboration",
        "Progress tracking",
        "Simple time tracking"
      ],
      outcome: "Validated product-market fit, acquired 200+ beta users, secured seed funding"
    },
    {
      id: 6,
      name: "Healthcare Portal",
      description: "Patient management system for clinics",
      category: "web",
      type: "Web App",
      techStack: ["React", "Node.js", "Express", "MySQL", "AWS"],
      image: "/placeholder-project.jpg",
      overview: "Secure patient management system for healthcare providers.",
      problem: "Clinic needed HIPAA-compliant system for patient records and appointments.",
      solution: "Developed secure web portal with encryption, audit logs, and role-based access.",
      features: [
        "Patient record management",
        "Appointment scheduling",
        "Prescription tracking",
        "Secure messaging"
      ],
      outcome: "HIPAA compliant, improved patient experience, reduced administrative overhead by 40%"
    }
  ],

  techStack: {
    title: "Technologies We Use",
    microcopy: "We choose the right technology based on project needs — not trends.",
    categories: [
      {
        name: "Frontend",
        technologies: ["React", "Next.js", "Vue", "TypeScript"]
      },
      {
        name: "Backend",
        technologies: ["Node.js", "NestJS", "Python", "FastAPI"]
      },
      {
        name: "Databases",
        technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
      },
      {
        name: "Cloud",
        technologies: ["AWS", "GCP", "Vercel", "Digital Ocean"]
      },
      {
        name: "Automation",
        technologies: ["AI tools", "APIs", "Workflows", "CI/CD"]
      }
    ]
  },

  trust: {
    title: "Built with Quality & Care",
    points: [
      "Clean, maintainable code",
      "Scalable system design",
      "Security-first approach",
      "Performance optimization",
      "Long-term maintainability"
    ]
  },

  finalCTA: {
    title: "Have a project in mind?",
    buttonText: "Let's Build Your Product",
    subtext: "We're ready to turn your idea into a reliable digital solution.",
    href: "/contact"
  }
}
