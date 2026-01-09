import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us - TechSonance InfoTech | Leading Software Development Company",
    description: "Learn about TechSonance InfoTech LLP - a leading software development company specializing in custom web applications, mobile apps, AI integration, and cloud solutions. Discover our mission, vision, and values.",
    keywords: [
        "about techsonance",
        "software development company",
        "IT company India",
        "web development agency",
        "mobile app developers",
        "custom software solutions",
        "technology consulting",
        "digital transformation experts"
    ],
    openGraph: {
        title: "About TechSonance InfoTech - Leading Software Development Company",
        description: "Discover how TechSonance InfoTech empowers businesses with innovative software solutions, AI integration, and scalable architectures.",
        url: "https://techsonance.com/about",
        siteName: "TechSonance InfoTech LLP",
        images: [
            {
                url: "/about_us_hero_bg.png",
                width: 1200,
                height: 630,
                alt: "TechSonance InfoTech - About Our Company",
            },
        ],
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "About TechSonance InfoTech - Software Development Experts",
        description: "Learn about our mission to empower businesses with cutting-edge software solutions and digital transformation.",
        images: ["/about_us_hero_bg.png"],
    },
    alternates: {
        canonical: "https://techsonance.com/about",
    },
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
