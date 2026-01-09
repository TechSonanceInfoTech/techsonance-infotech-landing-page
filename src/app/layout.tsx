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
  metadataBase: new URL('https://techsonance.com'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'software development',
    'web development',
    'mobile app development',
    'SaaS development',
    'AI automation',
    'full-stack development',
    'custom software solutions',
    'TechSonance',
    'IT consulting',
    'digital transformation'
  ],
  authors: [{ name: 'TechSonance InfoTech LLP' }],
  creator: 'TechSonance InfoTech LLP',
  publisher: 'TechSonance InfoTech LLP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techsonance.com',
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'TechSonance InfoTech - Custom Software Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/logo.png'],
    creator: '@techsonance',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code from Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'TechSonance InfoTech LLP',
              url: 'https://techsonance.com',
              logo: 'https://techsonance.com/logo.png',
              description: siteConfig.description,
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
              },
              sameAs: [
                'https://www.linkedin.com/company/techsonance',
                'https://twitter.com/techsonance',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                availableLanguage: ['English'],
              },
            }),
          }}
        />

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
