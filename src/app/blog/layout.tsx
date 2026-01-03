import { Metadata } from "next"
import { generatePageMetadata } from "@/config/seo-metadata"

export const metadata: Metadata = generatePageMetadata("blog")

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
