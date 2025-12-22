"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioConfig } from "@/config/portfolio-config"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === "all" 
    ? portfolioConfig.projects 
    : portfolioConfig.projects.filter(p => p.category === selectedCategory)

  const currentProject = selectedProject !== null 
    ? portfolioConfig.projects.find(p => p.id === selectedProject)
    : null

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-deep to-brand-dark text-white py-20 md:py-28 overflow-hidden">
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
              {portfolioConfig.hero.headline}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {portfolioConfig.hero.subheadline}
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {portfolioConfig.hero.highlights.map((highlight, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <Link href={portfolioConfig.hero.ctaHref}>
              <Button className="px-8 py-6 bg-brand-cyan hover:bg-cyan-600 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-200">
                {portfolioConfig.hero.ctaText}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{portfolioConfig.overview.title}</h2>
            <div className="h-1 w-20 bg-brand-cyan mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              {portfolioConfig.overview.description}
            </p>
            <p className="text-sm text-gray-500 italic">
              {portfolioConfig.overview.disclaimer}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Featured Projects</h2>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {portfolioConfig.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-brand-cyan text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project}
                delay={index * 0.1}
                onClick={() => setSelectedProject(project.id)}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {currentProject && (
        <ProjectDetailModal 
          project={currentProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Tech Stack */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{portfolioConfig.techStack.title}</h2>
            <div className="h-1 w-20 bg-brand-cyan mx-auto rounded-full mb-4" />
            <p className="text-gray-600 italic">{portfolioConfig.techStack.microcopy}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioConfig.techStack.categories.map((category, index) => (
              <TechStackCard 
                key={index}
                name={category.name}
                technologies={category.technologies}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{portfolioConfig.trust.title}</h2>
            <div className="h-1 w-20 bg-brand-cyan mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioConfig.trust.points.map((point, index) => (
              <TrustCard key={index} text={point} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-dark to-brand-deep text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {portfolioConfig.finalCTA.title}
            </h2>
            
            <Link href={portfolioConfig.finalCTA.href}>
              <Button className="px-10 py-6 bg-brand-cyan hover:bg-cyan-600 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                {portfolioConfig.finalCTA.buttonText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <p className="text-gray-300 mt-6 text-lg">
              {portfolioConfig.finalCTA.subtext}
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

// Component: Project Card
function ProjectCard({ project, delay, onClick }: { project: any, delay: number, onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-brand-cyan/50 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        {/* Project Image Placeholder */}
        <div className="h-48 bg-gradient-to-br from-brand-cyan/10 to-cyan-100 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-transparent group-hover:scale-110 transition-transform duration-300" />
          <span className="text-brand-cyan font-bold text-4xl z-10">{project.name.charAt(0)}</span>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-cyan transition-colors">
              {project.name}
            </h3>
            <span className="text-xs bg-brand-cyan/10 text-brand-cyan px-2 py-1 rounded-full font-medium whitespace-nowrap ml-2">
              {project.type}
            </span>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 flex-1">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 3).map((tech: string, index: number) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
          
          <button className="flex items-center gap-2 text-brand-cyan font-semibold text-sm group-hover:gap-3 transition-all">
            View Details
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// Component: Project Detail Modal
function ProjectDetailModal({ project, onClose }: { project: any, onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{project.name}</h2>
              <span className="text-sm bg-brand-cyan/10 text-brand-cyan px-3 py-1 rounded-full font-medium">
                {project.type}
              </span>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Overview</h3>
              <p className="text-gray-600">{project.overview}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Problem</h3>
              <p className="text-gray-600">{project.problem}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Solution</h3>
              <p className="text-gray-600">{project.solution}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string, index: number) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-cyan/5 p-6 rounded-xl border border-brand-cyan/20">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Outcome / Impact</h3>
              <p className="text-gray-700">{project.outcome}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Component: Tech Stack Card
function TechStackCard({ name, technologies, delay }: { name: string, technologies: string[], delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-cyan/50 hover:shadow-lg transition-all duration-300"
    >
      <h3 className="text-lg font-bold text-gray-900 mb-4">{name}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

// Component: Trust Card
function TrustCard({ text, delay }: { text: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="relative bg-gradient-to-br from-white to-cyan-50/30 p-6 rounded-xl border border-gray-200 hover:border-brand-cyan/50 hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
        {/* Decorative gradient blob */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-brand-cyan/10 rounded-full blur-2xl group-hover:bg-brand-cyan/20 transition-colors duration-300" />
        
        <div className="relative z-10">
          <div className="w-12 h-12 bg-gradient-to-br from-brand-cyan to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <p className="text-gray-800 font-semibold text-base leading-relaxed">{text}</p>
        </div>
      </div>
    </motion.div>
  )
}
