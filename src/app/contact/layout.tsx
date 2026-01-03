import { Metadata } from "next"
import { generatePageMetadata } from "@/config/seo-metadata"

export const metadata: Metadata = generatePageMetadata("contact")

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
