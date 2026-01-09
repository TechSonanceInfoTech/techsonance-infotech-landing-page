import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us - TechSonance InfoTech | Get in Touch for Software Development",
    description: "Contact TechSonance InfoTech for custom software development, web applications, mobile apps, and IT consulting. Get a free consultation and project quote today.",
    keywords: [
        "contact software development company",
        "get quote",
        "free consultation",
        "software development inquiry",
        "hire developers",
        "IT consulting contact"
    ],
    openGraph: {
        title: "Contact TechSonance InfoTech - Software Development Experts",
        description: "Get in touch for custom software development solutions. Free consultation available.",
        url: "https://techsonance.com/contact",
        siteName: "TechSonance InfoTech LLP",
        images: [
            {
                url: "/contact_hero_bg.png",
                width: 1200,
                height: 630,
                alt: "Contact TechSonance InfoTech",
            },
        ],
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact TechSonance InfoTech",
        description: "Get in touch for custom software development solutions.",
        images: ["/contact_hero_bg.png"],
    },
    alternates: {
        canonical: "https://techsonance.com/contact",
    },
}


export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
