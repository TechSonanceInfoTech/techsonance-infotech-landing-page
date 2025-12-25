"use client"

import { motion } from "framer-motion"
import { ArrowRight, Utensils, Armchair, Briefcase, GraduationCap, Server, Database, Layers, ShieldCheck } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    title: "Custom Modular POS System (PWA)",
    category: "Fintech & Hospitality",
    description: "A Progressive Web App engineered for offline reliability. Features a modular architecture where businesses only enable and pay for the features they actually use.",
    icon: Server,
    techStack: ["React", "Node.js", "PWA", "Offline Sync"],
    color: "bg-orange-500",
    slug: "transaction-engine"
  },
  {
    title: "Supply Chain Optimization Dashboard",
    category: "Logistics ERP",
    description: "An enterprise resource planning system with a built-in tax compliance engine. Handles complex multi-warehouse inventory logic, real-time stock forecasting, and automated GST computation.",
    icon: Database,
    techStack: ["Next.js", "PostgreSQL", "Python", "Docker"],
    color: "bg-blue-500",
    slug: "supply-chain-dashboard"
  },
  {
    title: "Enterprise Workflow Orchestration",
    category: "B2B SaaS",
    description: "A specialized content governance platform designed for technical teams. Implements Role-Based Access Control (RBAC), automated approval pipelines, and secure API architecture.",
    icon: Layers,
    techStack: ["TypeScript", "GraphQL", "AWS Lambda", "MongoDB"],
    color: "bg-emerald-500",
    slug: "workflow-orchestration"
  },
  {
    title: "Interactive LMS with Progress Tracking",
    category: "EdTech Infrastructure",
    description: "A scalable education platform built for high-concurrency video streaming. Features adaptive bitrate streaming, real-time user session management, and granular analytics reporting.",
    icon: GraduationCap,
    techStack: ["React", "Firebase", "WebRTC", "Cloud Functions"],
    color: "bg-indigo-500",
    slug: "lms-platform"
  }
]

export function CaseStudies() {
  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 bg-slate-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-brand-cyan font-bold tracking-wider uppercase text-sm mb-4 block">
              Proprietary Enterprise Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              Engineering Excellence
            </h2>
            <p className="text-lg text-slate-600">
              We build scalable, secure, and high-performance architectures that power complex business operations.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Button removed as portfolio page was deleted */}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudyCard({ title, category, description, icon: Icon, techStack, color, index, ...rest }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-cyan/10 transition-all duration-300 flex flex-col h-full cursor-pointer"
    >
      <Link href={`/case-studies/${(rest as any).slug}`} className="absolute inset-0 z-20" />
      <div className="p-6 md:p-8 lg:p-10 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className={`p-4 rounded-2xl ${color} bg-opacity-10 text-${color.split('-')[1]}-600`}>
             <Icon className={`w-8 h-8 ${color.replace('bg-', 'text-')}`} />
          </div>
          <div className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold uppercase tracking-wide text-slate-500">
            {category}
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-3 md:mb-4 group-hover:text-brand-cyan transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
          {description}
        </p>

        <div className="mt-auto">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            Core Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech: string, i: number) => (
              <span key={i} className="px-3 py-1.5 rounded-md bg-slate-50 border border-slate-100 text-xs font-semibold text-brand-dark group-hover:bg-slate-100 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative gradient overlay on hover */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  )
}
