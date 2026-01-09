import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Hire Dedicated Developers | TechSonance InfoTech",
    description: "Hire skilled React, Node.js, Python, Flutter, and full-stack developers from TechSonance. Flexible contracts, transparent pricing, 15-day free trial.",
    keywords: [
        "hire developers",
        "dedicated development team",
        "offshore developers",
        "React developers",
        "Node.js developers",
        "Python developers",
        "Flutter developers",
    ],
    openGraph: {
        title: "Hire Dedicated Developers | TechSonance InfoTech",
        description: "Hire skilled developers for your project. Flexible contracts and 15-day free trial.",
        type: "website",
    },
}

export default function HireLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
