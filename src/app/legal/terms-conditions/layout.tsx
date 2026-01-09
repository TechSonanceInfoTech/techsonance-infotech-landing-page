import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms & Conditions | TechSonance InfoTech LLP",
    description: "Read TechSonance InfoTech's Terms and Conditions. Understand the terms governing the use of our software development services and website.",
    keywords: [
        "terms and conditions",
        "service agreement",
        "TechSonance terms",
        "legal terms"
    ],
    robots: {
        index: true,
        follow: true,
    },
}

export default function TermsConditionsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
