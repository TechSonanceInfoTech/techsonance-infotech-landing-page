import { Metadata } from "next"
import { generatePageMetadata } from "@/config/seo-metadata"

export const metadata: Metadata = generatePageMetadata("services")

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
