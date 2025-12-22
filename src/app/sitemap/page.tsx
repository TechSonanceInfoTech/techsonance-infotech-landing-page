"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { sitemapConfig } from "@/config/sitemap-config"
import Link from "next/link"

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-deep to-brand-dark text-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-cyan/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              {sitemapConfig.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {sitemapConfig.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapConfig.sections.map((section, index) => (
              <SitemapSection 
                key={index}
                section={section}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-cyan to-cyan-500 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Can't find what you're looking for?
            </h2>
            
            <Link href="/contact">
              <button className="px-10 py-6 bg-white hover:bg-gray-100 text-brand-cyan font-bold text-lg rounded-xl shadow-2xl transition-all duration-200 hover:scale-105 inline-flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            
            <p className="text-white/90 mt-6 text-lg">
              We're here to help you find the right solution
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

// Component: Sitemap Section
function SitemapSection({ section, delay }: { section: any, delay: number }) {
  const SectionIcon = section.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-brand-cyan/50 hover:shadow-2xl transition-all duration-300 h-full">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <div className="w-12 h-12 bg-gradient-to-br from-brand-cyan to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-cyan/20 group-hover:scale-110 transition-transform">
            <SectionIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-brand-cyan transition-colors">
            {section.title}
          </h3>
        </div>

        {/* Links List */}
        <ul className="space-y-3">
          {section.links.map((link: any, index: number) => (
            <li key={index}>
              <Link 
                href={link.href}
                className="group/link flex items-start gap-2 text-gray-700 hover:text-brand-cyan transition-colors"
              >
                {link.icon && (
                  <link.icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-cyan/60" />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium group-hover/link:underline">{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </div>
                  {link.description && (
                    <p className="text-sm text-gray-500 mt-0.5">{link.description}</p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
