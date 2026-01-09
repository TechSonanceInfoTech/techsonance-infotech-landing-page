import { Metadata } from "next"

// SEO metadata configuration for all pages
export const pagesMetadata = {
    about: {
        title: "About TechSonance InfoTech | Custom Software Development Company",
        description: "Learn about TechSonance InfoTech LLP - a trusted software development partner delivering custom web apps, mobile solutions, and cloud services. 2+ years of excellence.",
        keywords: ["about TechSonance", "software development company", "IT consulting firm", "tech company India", "custom software team"],
    },
    career: {
        title: "Careers at TechSonance | Join Our Software Development Team",
        description: "Join TechSonance InfoTech and build your career in software development. Explore job openings for React, Node.js, Python developers. Work on exciting projects!",
        keywords: ["software developer jobs", "React developer jobs", "Node.js careers", "tech jobs India", "IT career opportunities"],
    },
    contact: {
        title: "Contact TechSonance | Get a Free Software Consultation",
        description: "Get in touch with TechSonance InfoTech for custom software development, mobile apps, or cloud solutions. Free consultation available. Start your project today!",
        keywords: ["contact software company", "free consultation", "hire developers", "software development quote", "IT services contact"],
    },
    portfolio: {
        title: "Our Portfolio | Software Development Projects & Case Studies",
        description: "Explore TechSonance's portfolio of successful software projects. Web apps, mobile apps, AI solutions & more. Real results for real businesses.",
        keywords: ["software portfolio", "case studies", "web development projects", "mobile app portfolio", "development showcase"],
    },
    services: {
        title: "Software Development Services | Web, Mobile, Cloud & AI Solutions",
        description: "Comprehensive software development services: custom web apps, mobile development, cloud solutions, AI integration, and more. Transform your business with TechSonance.",
        keywords: ["software development services", "web development", "mobile app development", "cloud services", "AI solutions"],
    },
    blog: {
        title: "TechSonance Blog | Software Development Insights & Tutorials",
        description: "Stay updated with the latest in software development, technology trends, and best practices. Expert insights from TechSonance's development team.",
        keywords: ["software development blog", "tech articles", "coding tutorials", "development best practices", "technology insights"],
    },
    faqs: {
        title: "FAQs | TechSonance Software Development Questions Answered",
        description: "Find answers to common questions about software development, hiring developers, project timelines, pricing, and working with TechSonance InfoTech.",
        keywords: ["software development FAQ", "hiring developers questions", "development process", "project pricing FAQ"],
    },
    pricing: {
        title: "Transparent Pricing | Hire Dedicated Developers - TechSonance",
        description: "Flexible, transparent hourly pricing for dedicated developers. No hidden fees. 15-day free trial. Choose a plan that scales with your project needs.",
        keywords: ["software development pricing", "hire developer cost", "hourly developer rates", "dedicated team pricing", "transparent billing"],
    },
} as const

export function generatePageMetadata(page: keyof typeof pagesMetadata): Metadata {
    const meta = pagesMetadata[page]
    return {
        title: meta.title,
        description: meta.description,
        keywords: [...meta.keywords],
        openGraph: {
            title: meta.title,
            description: meta.description,
            type: "website",
            siteName: "TechSonance InfoTech",
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
        },
    }
}

// Dynamic page metadata generators
export function generateHirePageMetadata(tech: string, title: string, description: string): Metadata {
    return {
        title: `Hire ${tech} Developers | Dedicated ${tech} Development Team - TechSonance`,
        description: `Hire skilled ${tech} developers from TechSonance. ${description.slice(0, 100)}... 15-day free trial. Flexible contracts.`,
        keywords: [
            `hire ${tech} developers`,
            `${tech} development team`,
            `dedicated ${tech} developer`,
            `${tech} freelancer`,
            `offshore ${tech} development`,
        ],
        openGraph: {
            title: `Hire ${tech} Developers | TechSonance InfoTech`,
            description: `Hire skilled ${tech} developers from TechSonance. Flexible contracts, transparent pricing.`,
            type: "website",
        },
    }
}

export function generateServicePageMetadata(title: string, description: string): Metadata {
    return {
        title: `${title} | TechSonance InfoTech`,
        description: description,
        openGraph: {
            title: `${title} | TechSonance InfoTech`,
            description: description,
            type: "website",
        },
    }
}
