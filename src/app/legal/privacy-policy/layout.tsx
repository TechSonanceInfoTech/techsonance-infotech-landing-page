import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | TechSonance InfoTech LLP",
    description: "Read TechSonance InfoTech's Privacy Policy. Learn how we collect, use, and protect your personal information when you use our services.",
    keywords: [
        "privacy policy",
        "data protection",
        "TechSonance privacy",
        "information security"
    ],
    robots: {
        index: true,
        follow: true,
    },
}

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
