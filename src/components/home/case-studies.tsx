"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/ui/project-card"

const caseStudies = [
  {
    title: "Custom Modular POS System (PWA)",
    category: "FINTECH & HOSPITALITY",
    description: "A Progressive Web App engineered for offline reliability. Features a modular architecture where businesses only enable and pay for the features they actually use.",
    imgSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    link: "/case-studies/transaction-engine",
    linkText: "View Case Study"
  },
  {
    title: "Skill 2 Career AI",
    category: "EDTECH & CAREER PLATFORM",
    description: "A comprehensive career platform for students and job seekers. Find off-portal jobs, practice with AI-powered mock interviews, and access scholarship support—all in one place.",
    imgSrc: "/skill2career-hero.jpg",
    link: "/case-studies/skill-2-career-ai",
    linkText: "View Case Study"
  },
  {
    title: "Futurise Desktop",
    category: "WEB APPLICATION",
    description: "A cutting-edge web application that combines modern technologies to deliver an exceptional user experience. Built with React, TypeScript, Vite, shadcn-ui, and Tailwind CSS for performance and scalability.",
    imgSrc: "/futurise-messaging.jpg",
    link: "/case-studies/futurise-desktop",
    linkText: "View Case Study"
  },
  {
    title: "Interactive LMS Platform",
    category: "EDTECH INFRASTRUCTURE",
    description: "A comprehensive Learning Management System with high-concurrency video streaming, real-time progress tracking, interactive assessments, and advanced analytics. Supports 10,000+ concurrent users with zero buffering.",
    imgSrc: "/lms-dashboard.png",
    link: "/case-studies/lms-platform",
    linkText: "View Case Study"
  }
]

export function CaseStudies() {
  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4 sm:mb-6 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-deep transition-all duration-300 cursor-default bg-[length:200%_auto] hover:bg-right">
              Engineering Excellence
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We build scalable, secure, and high-performance architectures that power complex business operations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard
                title={study.title}
                description={study.description}
                imgSrc={study.imgSrc}
                link={study.link}
                linkText={study.linkText}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
