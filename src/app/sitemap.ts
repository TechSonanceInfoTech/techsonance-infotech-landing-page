import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://techsonanceinfotech.com'
    const lastModified = new Date('2026-01-09')

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/career`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified,
            changeFrequency: 'daily' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/faqs`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/site-map`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
    ]

    // Service pages
    const services = [
        'web-development',
        'mobile-development',
        'full-stack',
        'saas-mvp',
        'ai-automation',
        'api-integration',
        'maintenance-support',
        'cloud-devops',
        'data-analytics',
        'ecommerce-solutions',
    ]

    const servicePages = services.map((service) => ({
        url: `${baseUrl}/services/${service}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Hire developer pages
    const technologies = [
        'reactjs-developers',
        'nextjs-developers',
        'vuejs-developers',
        'nodejs-developers',
        'python-developers',
        'react-native-developers',
        'flutter-developers',
        'fullstack-developers',
    ]

    const hireDeveloperPages = technologies.map((tech) => ({
        url: `${baseUrl}/hire/${tech}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Case study pages
    const caseStudies = [
        'pos-system',
        'skill2career-ai',
        'futurise-collaboration',
        'lms-platform',
        'supply-chain-dashboard',
        'ecommerce-platform',
        'healthcare-portal',
        'real-estate-crm',
    ]

    const caseStudyPages = caseStudies.map((study) => ({
        url: `${baseUrl}/case-studies/${study}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Legal pages
    const legalPages = [
        {
            url: `${baseUrl}/legal/privacy-policy`,
            lastModified,
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/legal/terms-conditions`,
            lastModified,
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
    ]

    return [
        ...staticPages,
        ...servicePages,
        ...hireDeveloperPages,
        ...caseStudyPages,
        ...legalPages,
    ]
}
