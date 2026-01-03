import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Projects | Software Development Portfolio - TechSonance",
    description: "Explore our engineering excellence. We build scalable, secure, and high-performance architectures for POS systems, healthcare, e-commerce, and logistics.",
    keywords: [
        "software projects",
        "web development portfolio",
        "mobile app projects",
        "custom software solutions",
        "enterprise software"
    ],
    openGraph: {
        title: "Our Projects | TechSonance InfoTech",
        description: "Explore our portfolio of scalable software solutions.",
        type: "website",
    },
}

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
