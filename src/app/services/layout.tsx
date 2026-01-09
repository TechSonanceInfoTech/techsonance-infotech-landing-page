import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Services - TechSonance InfoTech | Custom Software Development Solutions",
    description: "Explore our comprehensive software development services: Web Development, Mobile Apps, Cloud Solutions, AI Integration, Data Analytics, and E-Commerce. Transform your business with cutting-edge technology.",
    keywords: [
        "software development services",
        "web application development",
        "mobile app development services",
        "cloud solutions",
        "AI integration services",
        "data analytics",
        "e-commerce development",
        "custom software development",
        "IT consulting services",
        "DevOps solutions"
    ],
    openGraph: {
        title: "Software Development Services - TechSonance InfoTech",
        description: "Professional software development services including web apps, mobile development, cloud solutions, AI integration, and more. Get a free consultation today.",
        url: "https://techsonance.com/services",
        siteName: "TechSonance InfoTech LLP",
        images: [
            {
                url: "/services-hero-bg.png",
                width: 1200,
                height: 630,
                alt: "TechSonance InfoTech - Software Development Services",
            },
        ],
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Software Development Services - TechSonance InfoTech",
        description: "Transform your business with our expert software development services. Web, mobile, cloud, AI, and more.",
        images: ["/services-hero-bg.png"],
    },
    alternates: {
        canonical: "https://techsonance.com/services",
    },
}


export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
