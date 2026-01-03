import { Metadata } from "next"
import { generatePageMetadata } from "@/config/seo-metadata"

export const metadata: Metadata = generatePageMetadata("career")

export default function CareerLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
