import {
  Globe, Smartphone, Code2, Rocket, Cpu, Plug, Wrench,
  CheckCircle2, Users, Target, Shield, MessageSquare, Zap
} from "lucide-react"

export const servicesConfig = {
  hero: {
    headline: "Software Solutions Built for Growth",
    subheadline: "We design, build, and scale reliable digital products using modern technologies and proven engineering practices.",
    highlights: ["Web", "Mobile", "SaaS", "AI Automation"],
    ctaText: "Start Your Project",
    ctaHref: "/contact"
  },

  overview: {
    title: "Our Services",
    intro: "We offer end-to-end software development services tailored to your business goals.",
    services: [
      {
        id: "web-development",
        icon: Globe,
        name: "Web Application Development",
        value: "Fast, secure, and scalable web solutions"
      },
      {
        id: "mobile-development",
        icon: Smartphone,
        name: "Mobile App Development",
        value: "User-friendly apps for iOS and Android"
      },
      {
        id: "cloud-devops",
        icon: Code2,
        name: "Cloud & DevOps Solutions",
        value: "Scale effortlessly with automated infrastructure"
      },
      {
        id: "data-analytics",
        icon: Rocket,
        name: "Data Analytics & Insights",
        value: "Turn raw data into strategic decisions"
      },
      {
        id: "ecommerce",
        icon: Cpu,
        name: "E-Commerce Development",
        value: "Complete payment integration & conversion design"
      },
      {
        id: "hire-developers",
        icon: Plug,
        name: "Hire Dedicated Developers",
        value: "Build your dream team with senior developers"
      }
    ]
  },

  detailedServices: [
    {
      id: "web",
      name: "Web Application Development",
      description: "Build modern, scalable, and secure web applications using cutting-edge technologies for high performance, reliability, and future growth.",
      deliverables: [
        "Responsive UI with React/Next.js",
        "Secure backend APIs (REST/GraphQL)",
        "Database design & optimization",
        "Authentication & authorization (JWT/OAuth)",
        "Cloud deployment & CI/CD",
        "Performance monitoring & testing"
      ],
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "NestJS", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker"]
    },
    {
      id: "mobile",
      name: "Mobile App Development",
      description: "Build high-performance, cross-platform mobile apps with native features, smooth UI, and seamless backend integration.",
      deliverables: [
        "Cross-platform apps (iOS & Android)",
        "Native app development (Swift/Kotlin)",
        "Clean UI/UX design",
        "Backend API integration",
        "Push notifications & analytics",
        "App store deployment"
      ],
      techStack: ["React Native", "Flutter", "Swift", "Kotlin", "TypeScript", "Firebase", "Node.js", "PostgreSQL", "Google Maps", "Stripe"]
    },
    {
      id: "fullstack",
      name: "Full-Stack Development",
      description: "Build high-performance applications with modern frontend frameworks, secure backend systems, scalable databases, and reliable cloud infrastructure.",
      deliverables: [
        "Complete application architecture",
        "Responsive UI with React/Next.js",
        "Secure backend APIs (REST/GraphQL)",
        "Database design & optimization",
        "Authentication & security (JWT/OAuth)",
        "Cloud deployment & CI/CD"
      ],
      techStack: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "Python", "FastAPI", "Django", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS"]
    },
    {
      id: "saas",
      name: "SaaS & MVP Development",
      description: "Launch your SaaS product fast with scalable architecture, secure authentication, payment integration, and cloud deployment.",
      deliverables: [
        "MVP planning & architecture",
        "User authentication & authorization",
        "Subscription & payment integration (Stripe/Razorpay)",
        "Scalable backend & APIs",
        "Cloud deployment & CI/CD",
        "Analytics & monitoring"
      ],
      techStack: ["Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis", "Stripe", "Razorpay", "AWS", "Docker", "GitHub Actions"]
    },
    {
      id: "ai",
      name: "AI & Automation Solutions",
      description: "Build intelligent AI agents and automate workflows using cutting-edge AI and automation technologies.",
      deliverables: [
        "AI chatbots & assistants",
        "Workflow automation (n8n, Zapier)",
        "AI/ML model integrations",
        "Business process automation",
        "Custom AI agents",
        "Data processing & reporting"
      ],
      techStack: ["OpenAI", "LangChain", "Python", "n8n", "Zapier", "Node.js", "FastAPI", "Hugging Face"]
    },
    {
      id: "api",
      name: "API Development & Integration",
      description: "Build secure, scalable APIs and seamlessly integrate third-party services with clean architecture and comprehensive documentation.",
      deliverables: [
        "RESTful & GraphQL APIs",
        "Third-party integrations (Stripe, Twilio, etc.)",
        "API authentication & security (JWT/OAuth)",
        "API documentation (Swagger/OpenAPI)",
        "Webhook implementations",
        "Performance optimization & caching"
      ],
      techStack: ["Node.js", "Express", "NestJS", "Python", "FastAPI", "GraphQL", "PostgreSQL", "Redis", "Swagger", "Docker", "AWS"]
    },
    {
      id: "maintenance",
      name: "Maintenance & Support",
      description: "Keep your application secure, stable, and running smoothly with ongoing maintenance, monitoring, and rapid issue resolution.",
      deliverables: [
        "Bug fixes & performance optimization",
        "Security patches & updates",
        "Database optimization & backups",
        "Server monitoring & scaling",
        "Error tracking & debugging",
        "24/7 support & issue resolution"
      ],
      techStack: ["Node.js", "React", "Next.js", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Sentry", "Prometheus", "Grafana", "CI/CD"]
    }
  ],

  process: {
    title: "Our Approach",
    microcopy: "Transparent communication at every stage.",
    steps: [
      {
        number: 1,
        title: "Requirement Analysis",
        description: "Understanding your goals and challenges"
      },
      {
        number: 2,
        title: "Technical Planning",
        description: "Architecture and technology selection"
      },
      {
        number: 3,
        title: "Agile Development",
        description: "Iterative development with regular updates"
      },
      {
        number: 4,
        title: "Testing & QA",
        description: "Rigorous quality assurance"
      },
      {
        number: 5,
        title: "Deployment",
        description: "Smooth launch and migration"
      },
      {
        number: 6,
        title: "Ongoing Support",
        description: "Continuous improvement and maintenance"
      }
    ]
  },

  whyChooseUs: {
    title: "Why Clients Choose Us",
    points: [
      {
        icon: Users,
        text: "Experienced engineering team"
      },
      {
        icon: MessageSquare,
        text: "Clear and honest communication"
      },
      {
        icon: Shield,
        text: "Scalable and secure solutions"
      },
      {
        icon: Target,
        text: "Flexible engagement models"
      },
      {
        icon: Zap,
        text: "Long-term partnership mindset"
      }
    ]
  },

  industries: {
    title: "Industries We Serve",
    list: [
      "Startups",
      "SaaS Companies",
      "E-commerce",
      "FinTech",
      "Healthcare",
      "Education"
    ]
  },

  finalCTA: {
    title: "Need a reliable technology partner?",
    buttonText: "Let's Discuss Your Project",
    subtext: "Get expert guidance with no obligation.",
    href: "/contact"
  }
}
