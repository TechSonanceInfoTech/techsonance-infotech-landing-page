import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog - TechSonance InfoTech | Software Development Insights & Tutorials",
    description: "Read our latest articles on software development, web technologies, mobile app development, AI, cloud computing, and digital transformation. Expert insights and tutorials.",
    keywords: [
        "software development blog",
        "tech blog",
        "web development tutorials",
        "programming articles",
        "AI insights",
        "cloud computing blog",
        "technology news"
    ],
    openGraph: {
        title: "Blog - TechSonance InfoTech Software Development Insights",
        description: "Expert insights, tutorials, and articles on software development, AI, cloud computing, and more.",
        url: "https://techsonance.com/blog",
        siteName: "TechSonance InfoTech LLP",
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: "TechSonance InfoTech Blog",
            },
        ],
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "TechSonance InfoTech Blog",
        description: "Expert insights and tutorials on software development.",
        images: ["/logo.png"],
    },
    alternates: {
        canonical: "https://techsonance.com/blog",
    },
}


export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
