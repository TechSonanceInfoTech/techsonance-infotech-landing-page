import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Case Studies | Software Success Stories - TechSonance",
    description: "Explore detailed case studies of our software projects. See how we solved real business challenges with custom POS systems, AI platforms, and enterprise solutions.",
    keywords: [
        "case studies",
        "software success stories",
        "project case studies",
        "enterprise solutions",
        "custom software examples"
    ],
    openGraph: {
        title: "Case Studies | TechSonance InfoTech",
        description: "Real-world software solutions we've built - from POS systems to AI platforms.",
        type: "website",
    },
}

export default function CaseStudiesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
