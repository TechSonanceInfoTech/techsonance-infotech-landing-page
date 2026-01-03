import { Metadata } from "next"
import { generatePageMetadata } from "@/config/seo-metadata"

export const metadata: Metadata = generatePageMetadata("portfolio")

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
