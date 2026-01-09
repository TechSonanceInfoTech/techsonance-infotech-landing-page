import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Careers - TechSonance InfoTech | Join Our Software Development Team",
    description: "Join TechSonance InfoTech and work on cutting-edge software projects. Explore career opportunities for developers, designers, and IT professionals. Grow your career with us.",
    keywords: [
        "software developer jobs",
        "IT careers",
        "web developer jobs",
        "mobile app developer careers",
        "tech jobs India",
        "software company careers",
        "developer opportunities"
    ],
    openGraph: {
        title: "Careers at TechSonance InfoTech - Join Our Team",
        description: "Build your career with TechSonance InfoTech. Work on innovative projects and grow with a dynamic team.",
        url: "https://techsonance.com/career",
        siteName: "TechSonance InfoTech LLP",
        images: [
            {
                url: "/career_hero_bg.png",
                width: 1200,
                height: 630,
                alt: "Careers at TechSonance InfoTech",
            },
        ],
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Careers at TechSonance InfoTech",
        description: "Join our team and work on cutting-edge software projects.",
        images: ["/career_hero_bg.png"],
    },
    alternates: {
        canonical: "https://techsonance.com/career",
    },
}


export default function CareerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
