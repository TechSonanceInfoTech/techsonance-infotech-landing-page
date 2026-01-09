import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Portfolio - TechSonance InfoTech | Our Software Development Projects",
    description: "Explore our portfolio of successful software development projects including web applications, mobile apps, SaaS platforms, and enterprise solutions. See how we've helped businesses transform digitally.",
    keywords: [
        "software development portfolio",
        "web development projects",
        "mobile app portfolio",
        "case studies",
        "software projects",
        "client success stories",
        "enterprise solutions",
        "SaaS projects"
    ],
    openGraph: {
        title: "Portfolio - TechSonance InfoTech Software Development Projects",
        description: "Discover our successful software development projects and case studies. From startups to enterprises, see how we deliver excellence.",
        url: "https://techsonance.com/portfolio",
        siteName: "TechSonance InfoTech LLP",
        images: [
            {
                url: "/portfolio-hero-bg.png",
                width: 1200,
                height: 630,
                alt: "TechSonance InfoTech - Portfolio",
            },
        ],
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio - TechSonance InfoTech Projects",
        description: "Explore our successful software development projects and case studies.",
        images: ["/portfolio-hero-bg.png"],
    },
    alternates: {
        canonical: "https://techsonance.com/portfolio",
    },
}


export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
