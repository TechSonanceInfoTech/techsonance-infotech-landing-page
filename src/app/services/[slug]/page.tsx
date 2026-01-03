
import { notFound } from "next/navigation"
import { servicesData } from "@/config/services"
import { WebDevLayout } from "@/components/services/templates/WebDevLayout"
import { MobileDevLayout } from "@/components/services/templates/MobileDevLayout"
import { CloudDevOpsLayout } from "@/components/services/templates/CloudDevOpsLayout"
import { DataAnalyticsLayout } from "@/components/services/templates/DataAnalyticsLayout"
import { EcommerceLayout } from "@/components/services/templates/EcommerceLayout"
import { HireDevelopersLayout } from "@/components/services/templates/HireDevelopersLayout"
import { Metadata } from "next"

// Generate static params for all services to optimize build and SEO
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData[slug]
  if (!service) return { title: "Service Not Found" }

  const keywords = [
    service.title.toLowerCase(),
    `${service.title} services`,
    `${service.title} company`,
    "custom software development",
    "TechSonance",
  ]

  return {
    title: `${service.title} Services | TechSonance InfoTech`,
    description: `${service.shortDescription} Get expert ${service.title.toLowerCase()} services from TechSonance. Free consultation available.`,
    keywords: keywords,
    openGraph: {
      title: `${service.title} Services | TechSonance InfoTech`,
      description: service.shortDescription,
      type: "website",
      siteName: "TechSonance InfoTech",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} Services | TechSonance`,
      description: service.shortDescription,
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  // Render the specific layout based on configuration
  if (service.layoutStyle === "minimal-architect") {
    return <WebDevLayout service={service} />
  }

  if (service.layoutStyle === "interactive-showcase") {
    return <MobileDevLayout service={service} />
  }

  if (service.layoutStyle === "glass-infrastructure") {
    return <CloudDevOpsLayout service={service} />
  }

  if (service.layoutStyle === "bento-grid") {
    return <DataAnalyticsLayout service={service} />
  }

  if (service.layoutStyle === "conversion-funnel") {
    return <EcommerceLayout service={service} />
  }

  if (service.layoutStyle === "talent-cards") {
    return <HireDevelopersLayout service={service} />
  }

  // Fallback for other layouts while we build them (Temporarily using a simple placeholder or the old layout if needed, 
  // but for now let's just show a "Coming Soon" or basic debug to ensure the router works, 
  // OR better yet, let's just assume we will fill them in. 
  // Actually, to avoid breaking the app for the user, I should probably keep the old layout as a 'default' fallback 
  // until all 6 are done. But the user asked for "Revamp". 
  // Let's return a basic fallback container for now to confirm the switch works).

  return (
    <div className="p-20 text-center">
      <h1 className="text-2xl font-bold">Layout Not Implemented Yet</h1>
      <p>Building layout for: {service.layoutStyle}</p>
    </div>
  )
}
