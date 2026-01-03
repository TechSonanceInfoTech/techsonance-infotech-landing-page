import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"


const fontJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "custom web development",
    "mobile app development",
    "software development company",
    "hire dedicated developers",
    "React developers",
    "Node.js development",
    "cloud solutions",
    "AI integration",
    "enterprise software",
    "full-stack development"
  ],
  authors: [{ name: "TechSonance InfoTech LLP" }],
  creator: "TechSonance InfoTech LLP",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: "TechSonance InfoTech",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Structured Data for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TechSonance InfoTech LLP",
  "url": "https://techsonance.com",
  "logo": "https://techsonance.com/logo.png",
  "description": "Custom software development company specializing in web applications, mobile apps, cloud solutions, and AI integration.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "availableLanguage": "English"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Software Development",
  "provider": {
    "@type": "Organization",
    "name": "TechSonance InfoTech LLP"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud & DevOps Solutions" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Analytics & AI Solutions" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire Dedicated Developers" } }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontJakarta.variable
        )}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />

        {/* Global Icon Gradient Definition */}
        <svg width="0" height="0" className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
          <defs>
            <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" /> {/* brand-cyan */}
              <stop offset="100%" stopColor="#141d2f" /> {/* brand-deep (darker) */}
            </linearGradient>
            <linearGradient id="icon-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" /> {/* cyan-300 */}
              <stop offset="100%" stopColor="#06b6d4" /> {/* cyan-500 */}
            </linearGradient>
          </defs>
        </svg>
      </body>
    </html>
  );
}

