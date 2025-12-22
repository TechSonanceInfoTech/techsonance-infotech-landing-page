"use client"

import { motion } from "framer-motion"
import { Shield, Mail, Phone, MapPin, Calendar } from "lucide-react"
import { privacyPolicyConfig } from "@/config/privacy-policy-config"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-deep to-brand-dark text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-brand-cyan/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cyan/20 backdrop-blur-sm border border-brand-cyan/30 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Legal Document
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              {privacyPolicyConfig.introduction.title}
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Last Updated: {privacyPolicyConfig.meta.lastUpdated}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 p-8 bg-gradient-to-br from-brand-cyan/5 to-cyan-50/50 rounded-2xl border border-brand-cyan/20"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              {privacyPolicyConfig.introduction.content}
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {privacyPolicyConfig.sections.map((section, index) => (
              <PolicySection key={index} section={section} index={index} />
            ))}
          </div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200"
          >
            <p className="text-sm text-gray-600 italic">
              {privacyPolicyConfig.disclaimer}
            </p>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-brand-cyan hover:text-cyan-600 font-semibold transition-colors"
            >
              ← Back to Home
            </Link>
          </motion.div>

        </div>
      </section>

    </div>
  )
}

// Component: Policy Section
function PolicySection({ section, index }: { section: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="scroll-mt-20"
      id={section.title.toLowerCase().replace(/\s+/g, '-')}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-start gap-3">
        <span className="flex-shrink-0 w-8 h-8 bg-brand-cyan text-white rounded-lg flex items-center justify-center text-sm font-bold">
          {index + 1}
        </span>
        {section.title}
      </h2>
      
      {section.content && (
        <p className="text-gray-700 mb-4 leading-relaxed">
          {section.content}
        </p>
      )}

      {section.items && (
        <div className="space-y-6">
          {section.items.map((item: any, itemIndex: number) => (
            <div key={itemIndex}>
              {item.subtitle && (
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {item.subtitle}
                </h3>
              )}
              {item.points && (
                <ul className="space-y-2 ml-4">
                  {item.points.map((point: string, pointIndex: number) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {section.contactInfo && (
        <div className="mt-6 p-6 bg-gradient-to-br from-gray-50 to-cyan-50/30 rounded-xl border border-gray-200">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-brand-cyan" />
              <span className="font-semibold text-gray-900">{section.contactInfo.company}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-cyan" />
              <a href={`mailto:${section.contactInfo.email}`} className="text-brand-cyan hover:underline">
                {section.contactInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-cyan" />
              <span className="text-gray-700">{section.contactInfo.phone}</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-cyan mt-0.5" />
              <span className="text-gray-700">{section.contactInfo.address}</span>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}
