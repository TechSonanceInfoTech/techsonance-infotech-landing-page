
import { type LucideIcon, Code2, Smartphone, Cloud, BarChart3, ShoppingCart, Users, Rocket, Shield, Globe, Cpu, Zap, Layers, Activity, Database, TrendingUp } from "lucide-react"

export interface ServiceData {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string; // Placeholder for now
  fullDescription: string;
  features: {
    title: string;
    description: string;
    icon: any; // Using any to avoid strict type issues with Lucide in config, usually properly typed
  }[];
  process: {
    step: string;
    title: string;
    description: string;
    icon?: any;
  }[];
  caseStudy: {
    title: string;
    clientIndustry: string;
    challenge: string;
    solution: string;
    results: string[];
    image?: string;
  };
  layoutStyle?: "minimal-architect" | "interactive-showcase" | "glass-infrastructure" | "bento-grid" | "conversion-funnel" | "talent-cards";
}

export const servicesData: Record<string, ServiceData> = {
  "web-development": {
    layoutStyle: "minimal-architect",
    slug: "web-development",
    title: "Custom Web Development",
    shortDescription: "Transform your vision into powerful web applications that engage users and accelerate business growth.",
    heroImage: "/services/web-dev-hero.jpg",
    fullDescription: "In today's digital-first world, your website is often the first interaction a potential customer has with your brand. We don't just build websites; we engineer digital experiences. Our custom web development service focuses on creating high-performance, scalable, and secure web applications tailored specifically to your business goals.",
    features: [
      {
        title: "Scalable Architecture",
        description: "Built on microservices or modular monoliths to grow effortlessly as your user base expands.",
        icon: Layers,
      },
      {
        title: "High-Performance UX",
        description: "Optimized core web vitals and smooth animations for a premium user experience.",
        icon: Zap,
      },
      {
        title: "Secure by Design",
        description: "Implementation of industry-standard security protocols to protect your data and users.",
        icon: Shield,
      },
      {
        title: "SEO Optimized",
        description: "Technical SEO best practices baked into the code to ensure high search engine visibility.",
        icon: Globe,
      }
    ],
    process: [
      { step: "01", title: "Discovery", description: "Who are your users? What is your goal? We dive deep to understand." },
      { step: "02", title: "Architecture", description: "Planning the tech stack and database schema for longevity." },
      { step: "03", title: "Develop", description: "Agile sprints with regular updates and feedback loops." },
      { step: "04", title: "Launch", description: "Seamless deployment with CI/CD pipelines and monitoring." }
    ],
    caseStudy: {
      title: "Custom Modular POS System (PWA)",
      clientIndustry: "Fintech & Hospitality",
      challenge: "Most POS solutions force small businesses to pay for complex features they'll never use, making software expensive ($200+/mo) and slow. Worse, they're cloud-reliant—if internet flickers during rush hour, the entire system freezes.",
      solution: "We built a PWA with Offline-First architecture and a Feature-Flagged modular engine. Businesses toggle features ON/OFF, loading only what they need. Using PouchDB (local) syncing to CouchDB (cloud), orders save locally first—if internet dies, the app continues processing orders seamlessly.",
      results: [
        "100% Uptime Guarantee with Offline Mode",
        "40% Reduction in Monthly Software Costs",
        "Sub-60s Order Velocity for complex orders",
        "Zero Hardware Lock-in (BYOD - Bring Your Own Device)"
      ],
      image: "/pos-laptop.png"
    }
  },
  "mobile-development": {
    slug: "mobile-development",
    title: "Mobile App Development",
    layoutStyle: "interactive-showcase",
    shortDescription: "Create exceptional mobile experiences with native iOS, Android, or cross-platform apps.",
    heroImage: "/services/mobile-hero.jpg",
    fullDescription: "Mobile users demand speed, intuitive navigation, and offline capabilities. Whether you need a native iOS app or a cross-platform solution using Flutter or React Native, we deliver apps that feel fluid and powerful. We focus heavily on the 'thumb zone' user experience, ensuring your app becomes a daily habit, not just a one-time download.",
    features: [
      {
        title: "Cross-Platform Efficiency",
        description: "One codebase, two platforms. Save time and budget without compromising that native feel.",
        icon: Smartphone,
      },
      {
        title: "Offline-First Mode",
        description: "Robust local databases ensuring your app works beautifully even without internet.",
        icon: Database,
      },
      {
        title: "Device Hardware Access",
        description: "Deep integration with camera, GPS, and biometrics for rich functionality.",
        icon: Cpu,
      },
      {
        title: "App Store Optimization",
        description: "Guidance on store listings to maximize organic downloads from day one.",
        icon: Rocket,
      }
    ],
    process: [
      { step: "01", title: "UX Strategy", description: "Mapping user journeys and wireframing the flow." },
      { step: "02", title: "UI Design", description: "Pixel-perfect screens that align with your brand." },
      { step: "03", title: "Engineering", description: "Writing clean, performant code for iOS and Android." },
      { step: "04", title: "Publish", description: "Handling the complex submission process to App Stores." }
    ],
    caseStudy: {
      title: "Health & Wellness Tracker",
      clientIndustry: "Healthcare",
      challenge: "The client needed a way for patients to track recovery exercises offline and sync when connected, with strictly confidential data handling.",
      solution: "Built a secure React Native app with local encryption and Realm database. Implemented background sync for seamless data transfer when connectivity creates availability.",
      results: [
        "4.8 Star Average App Store Rating",
        "92% Daily Active User retention",
        "HIPAA Compliant Data Handling"
      ]
    }
  },
  "cloud-devops": {
    slug: "cloud-devops",
    title: "Cloud & DevOps Solutions",
    layoutStyle: "glass-infrastructure",
    shortDescription: "Scale effortlessly and deploy faster with automated cloud infrastructure.",
    heroImage: "/services/cloud-hero.jpg",
    fullDescription: "Infrastructure shouldn't keep you up at night. Our DevOps services transform your IT operations into a strategic asset. We focus on what matters: reducing costs, increasing security, and ensuring business agility through automation. We build resilient systems that self-heal and scale on demand.",
    features: [
      {
        title: "Cost-Effective Scaling",
        description: "We optimize for unused resources and implement spot instances to ensure your infrastructure scales with your budget, not against it.",
        icon: Code2,
      },
      {
        title: "Business Agility",
        description: "Deploy new features with confidence. Our CI/CD pipelines ensure that pushing code is safe, fast, and reversible.",
        icon: Rocket,
      },
      {
        title: "Enhanced Security",
        description: "Security isn't an afterthought. We bake compliance and automated vulnerability scanning directly into your deployment pipeline.",
        icon: Shield,
      },
      {
        title: "Revenue Operations",
        description: "Unlock new API economies and streamline backend operations to support new revenue streams faster.",
        icon: Cloud,
      }
    ],
    process: [
      { step: "01", title: "Audit", description: "Analyzing current infrastructure bottlenecks and costs." },
      { step: "02", title: "Architect", description: "Designing a cloud-native, self-healing roadmap." },
      { step: "03", title: "Automate", description: "Scripting environments (IaC) and deployment pipelines." },
      { step: "04", title: "Optimize", description: "Continuous monitoring and proactive cost optimization." }
    ],
    caseStudy: {
      title: "SaaS Platform Migration",
      clientIndustry: "Education Tech",
      challenge: "A monolithic application was crashing during peak exam hours, and deployments were manual, taking 4 hours of downtime.",
      solution: "Migrated to AWS ECS with auto-scaling rules. Implemented a GitHub Actions pipeline reducing deployment time to 15 minutes with zero downtime.",
      results: [
        "99.99% Uptime during peak loads",
        "60% reduction in monthly cloud costs",
        "Deployment frequency increased by 10x"
      ]
    }
  },
  "data-analytics": {
    slug: "data-analytics",
    title: "Data Analytics & Insights",
    layoutStyle: "bento-grid",
    shortDescription: "Turn raw data into strategic decisions with advanced analytics dashboards.",
    heroImage: "/services/data-hero.jpg",
    fullDescription: "Data is the new oil, but only if you can refine it. We help businesses aggregate data from siloed sources, clean it, and visualize it in meaningful ways. We don't just show you numbers; we show you opportunities. Our dashboards are designed to answer business questions at a glance.",
    features: [
      {
        title: "Informed Decision Making",
        description: "Eliminate guesswork. Our analytics solutions provide real-time insights for confident, data-driven strategy.",
        icon: BarChart3,
      },
      {
        title: "Operational Efficiency",
        description: "Identify bottlenecks instantly. Our dashboards highlight inefficiencies/gaps, allowing you to optimize workflows immediately.",
        icon: TrendingUp,
      },
      {
        title: "Customer Personalization",
        description: "Understand your customers better. Segment audiences based on behavioral data to drive higher engagement.",
        icon: Users,
      },
      {
        title: "Risk Mitigation",
        description: "Predict potential risks before they happen with predictive modeling and anomaly detection.",
        icon: Shield,
      }
    ],
    process: [
      { step: "01", title: "Connect", description: "Integrating pipelines from APIs, DBs, and Spreadsheets." },
      { step: "02", title: "Transform", description: "Cleaning, normalizing, and structuring data for analysis." },
      { step: "03", title: "Model", description: "Building data models that answer core business questions." },
      { step: "04", title: "Visualize", description: "Creating intuitive, interactive dashboards for end-users." }
    ],
    caseStudy: {
      title: "Retail Inventory Optimization",
      clientIndustry: "Retail Chain",
      challenge: "The client faced stockouts in popular items and overstock in others due to a lack of centralized inventory visibility.",
      solution: "Built a centralized data warehouse integrating POS data from 50+ stores. Created a PowerBI dashboard for regional managers to view stock levels in real-time.",
      results: [
        "25% reduction in inventory holding costs",
        "15% increase in sales due to better availability",
        "Saved 20 hours/week of manual reporting"
      ]
    }
  },
  "ecommerce": {
    slug: "ecommerce",
    title: "E-Commerce Development",
    layoutStyle: "conversion-funnel",
    shortDescription: "Launch your online store with complete payment integration and conversion-optimized design.",
    heroImage: "/services/ecommerce-hero.jpg",
    fullDescription: "An online store is a complex ecosystem of logistics, payments, and psychology. We build custom e-commerce experiences (Headless Shopify, WooCommerce, or Custom) that prioritize one metric: Revenue. We focus on speed, simplified checkout flows, and trust signals to turn visitors into loyal customers.",
    features: [
      {
        title: "Headless Commerce",
        description: "Decoupled frontend for ultimate page speed and unlimited design flexibility.",
        icon: Code2,
      },
      {
        title: "Payment Integration",
        description: "Secure, seamless gateways for global transactions (Stripe, PayPal, Apple Pay).",
        icon: ShoppingCart,
      },
      {
        title: "Inventory Sync",
        description: "Real-time synchronization across multiple sales channels to prevent overselling.",
        icon: Layers,
      },
      {
        title: "Conversion Optimization",
        description: "UX designed specifically to reduce cart abandonment and increase AOV.",
        icon: TrendingUp,
      }
    ],
    process: [
      { step: "01", title: "Strategy", description: "Defining target audience, catalog structure, and KPIs." },
      { step: "02", title: "Design", description: "Creating a high-trust, high-conversion UI/UX." },
      { step: "03", title: "Integrate", description: "Connecting payment gateways, shipping, and ERPs." },
      { step: "04", title: "Scale", description: "Marketing tools integration and performance tuning." }
    ],
    caseStudy: {
      title: "Luxury Fashion Marketplace",
      clientIndustry: "Fashion Retail",
      challenge: "The brand needed a premium digital flagship store that could handle high-resolution imagery without sacrificing load speed.",
      solution: "Developed a Headless Shopify store using Next.js. Implemented lazy loading, advanced image optimization, and a custom checkout flow for VIP customers.",
      results: [
        "2.5x increase in mobile conversion rate",
        "40% increase in average order value",
        "Page load speeds under 1.5 seconds"
      ]
    }
  },
  "hire-developers": {
    slug: "hire-developers",
    title: "Hire Dedicated Developers",
    layoutStyle: "talent-cards",
    shortDescription: "Build your dream team with senior developers who integrate seamlessly.",
    heroImage: "/services/hire-hero.jpg",
    fullDescription: "Recruiting, vetting, and retaining top architectural talent is difficult and expensive. We solve this by providing pre-vetted, senior-level developers who integrate directly into your existing team. Whether you need a React expert or a full squad, our developers work in your time zone, use your tools, and follow your engineering culture. It's like having your own expert team, instant-on.",
    features: [
      {
        title: "Top 1% Talent",
        description: " rigorous technical and communication vetting. Only the best make the cut.",
        icon: Users,
      },
      {
        title: "Seamless Integration",
        description: "Developers work effectively within your existing workflows (Jira, Slack, GitHub).",
        icon: Layers,
      },
      {
        title: "Flexible Scaling",
        description: "Scale your team up or down based on project needs. No long-term lock-ins.",
        icon: BarChart3,
      },
      {
        title: "No Risk Trial",
        description: "2-week risk-free trial to ensure the perfect cultural and technical fit.",
        icon: Shield,
      }
    ],
    process: [
      { step: "01", title: "Requirement", description: "We analyze your tech stack and identify functionality gaps." },
      { step: "02", title: "Shortlist", description: "We present the best matched profiles within 48 hours." },
      { step: "03", title: "Interview", description: "You interview and select the developers you trust." },
      { step: "04", title: "Onboard", description: "Immediate start with smooth knowledge transfer." }
    ],
    caseStudy: {
      title: "FinTech Scale-Up Team",
      clientIndustry: "Banking Software",
      challenge: "A startup secured Series B funding and needed to double their engineering team in 4 weeks to meet roadmap promises.",
      solution: "Provided a pod of 5 Senior Full-Stack Developers and 1 QA Engineer. The team integrated within 3 days and started shipping features in the first sprint.",
      results: [
        "Delivered critical Q3 roadmap features on time",
        "Saved approx. $40k in recruitment fees",
        "Client retained the team for 18+ months"
      ]
    }
  }
};
