import { Metadata } from "next"
import { generatePageMetadata } from "@/config/seo-metadata"

export const metadata: Metadata = generatePageMetadata("faqs")

export default function FAQsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
