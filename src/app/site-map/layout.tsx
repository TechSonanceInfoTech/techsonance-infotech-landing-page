import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Sitemap | Navigate TechSonance InfoTech Website",
    description: "Complete sitemap of TechSonance InfoTech website. Find all pages including services, portfolio, blog, career, and contact information.",
    keywords: [
        "sitemap",
        "TechSonance pages",
        "website navigation",
        "site structure"
    ],
    robots: {
        index: true,
        follow: true,
    },
}

export default function SitemapLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
