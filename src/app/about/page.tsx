"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { aboutConfig } from "@/config/about-config"
import Link from "next/link"

export default function AboutPage() {
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
              {aboutConfig.hero.headline}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {aboutConfig.hero.subheadline}
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {aboutConfig.hero.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{aboutConfig.whoWeAre.title}</h2>
            <div className="h-1 w-20 bg-brand-cyan mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {aboutConfig.whoWeAre.content}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
            {aboutConfig.whoWeAre.keyTraits.map((trait, index) => (
              <TraitCard key={index} icon={trait.icon} title={trait.title} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{aboutConfig.whatWeDo.title}</h2>
            <div className="h-1 w-20 bg-brand-cyan mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {aboutConfig.whatWeDo.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutConfig.whatWeDo.services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{aboutConfig.howWeWork.title}</h2>
            <div className="h-1 w-20 bg-brand-cyan mx-auto rounded-full mb-4" />
            <p className="text-gray-600 italic">{aboutConfig.howWeWork.microcopy}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {aboutConfig.howWeWork.steps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === aboutConfig.howWeWork.steps.length - 1}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-cyan/5 to-cyan-50/50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-brand-cyan/20"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{aboutConfig.missionVision.mission.title}</h3>
              <p className="text-gray-600 leading-relaxed">{aboutConfig.missionVision.mission.content}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-brand-cyan/20"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{aboutConfig.missionVision.vision.title}</h3>
              <p className="text-gray-600 leading-relaxed">{aboutConfig.missionVision.vision.content}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{aboutConfig.whyChooseUs.title}</h2>
            <div className="h-1 w-20 bg-brand-cyan mx-auto rounded-full" />
          </motion.div>

          <div className="bg-gradient-to-br from-gray-50 to-cyan-50/30 p-8 md:p-10 rounded-2xl border border-gray-200">
            <div className="space-y-4">
              {aboutConfig.whyChooseUs.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-cyan flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Mindset */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{aboutConfig.globalMindset.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {aboutConfig.globalMindset.content}
            </p>
          </motion.div>
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
              {aboutConfig.finalCTA.title}
            </h2>

            <Link href={aboutConfig.finalCTA.href}>
              <Button className="px-10 py-6 bg-brand-cyan hover:bg-cyan-600 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                {aboutConfig.finalCTA.buttonText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <p className="text-gray-300 mt-6 text-lg">
              {aboutConfig.finalCTA.subtext}
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

// Component: Trait Card
function TraitCard({ icon: Icon, title, delay }: { icon: any, title: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-cyan/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
        <div className="w-14 h-14 bg-gradient-to-br from-brand-cyan/10 to-cyan-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-brand-cyan" />
        </div>
        <h4 className="text-gray-900 font-semibold text-sm leading-tight">{title}</h4>
      </div>
    </motion.div>
  )
}

// Component: Service Card
function ServiceCard({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-cyan/50 hover:shadow-xl transition-all duration-300 h-full">
        <div className="w-12 h-12 bg-gradient-to-br from-brand-cyan/10 to-cyan-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-brand-cyan" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

// Component: Process Step
function ProcessStep({ number, title, description, isLast, delay }: { number: number, title: string, description: string, isLast: boolean, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="relative"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-14 h-14 bg-brand-cyan text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">
          {number}
        </div>
        <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{title}</h3>
        <p className="text-gray-600 text-xs md:text-sm">{description}</p>
      </div>

      {!isLast && (
        <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-cyan to-cyan-200" />
      )}
    </motion.div>
  )
}
