"use client"

import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion"
import { Mail, Phone, Clock, Globe, CheckCircle2, ArrowRight, Loader2, Shield, Zap, Users, MessageSquare, Wrench, Rocket, Sparkles } from "lucide-react"
import { useState, useTransition, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { sendContactEmail } from "@/actions/contact"
import { contactConfig } from "@/config/contact-config"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ContactPage() {
  const [isPending, startTransition] = useTransition()
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })
  
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  // Parallax scroll effect for hero
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  // GSAP animations on mount
  useEffect(() => {
    if (prefersReducedMotion || !contentRef.current) return

    const ctx = gsap.context(() => {
      // Floating animation for orbs
      gsap.to(".hero-orb", {
        y: -15,
        duration: 3,
        ease: "power1.inOut",
        stagger: 0.5,
        repeat: -1,
        yoyo: true
      })

      // Staggered reveal for contact options
      gsap.fromTo(".contact-option",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-options-container",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Staggered reveal for why items
      gsap.fromTo(".why-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".why-items-container",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, contentRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  async function handleSubmit(formData: FormData) {
    setFormStatus({ type: null, message: '' })
    
    startTransition(async () => {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setFormStatus({ type: 'success', message: contactConfig.form.successMessage })
        const form = document.querySelector('form') as HTMLFormElement
        form?.reset()
      } else {
        setFormStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' })
      }
    })
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  }

  return (
    <div ref={contentRef} className="min-h-screen bg-gray-50">

      {/* Hero Section with Parallax */}
      <section ref={sectionRef} className="relative bg-brand-dark text-white py-24 md:py-32 overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/contact_hero_bg.png')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/80 to-brand-dark/95" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-overlay" />
        </div>

        {/* Animated gradient orbs */}
        <motion.div
          className="hero-orb absolute top-20 right-10 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-brand-cyan/30 to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-orb absolute bottom-10 left-10 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-tr from-[#29619e]/30 to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, -15, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <motion.div
          style={prefersReducedMotion ? {} : { y: smoothY, opacity }}
          className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Animated Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-brand-cyan/30 text-brand-cyan font-semibold text-sm mb-6 shadow-lg"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.span>
              Let's Connect
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            >
              {contactConfig.hero.title.split('Powerful Together')[0]}<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-[#29619e]">Powerful Together</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              {contactConfig.hero.subtitle}
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                href={contactConfig.hero.primaryCTA.href}
              >
                <Button className="px-8 py-6 bg-gradient-to-r from-brand-cyan to-[#29619e] hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-cyan/20 text-white font-semibold text-lg rounded-lg">
                  {contactConfig.hero.primaryCTA.text}
                </Button>
              </motion.a>
              <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.8)" }}
                whileTap={{ scale: 0.98 }}
                href={contactConfig.hero.secondaryCTA.href}
              >
                <Button className="px-8 py-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 font-semibold text-lg rounded-lg transition-all duration-200">
                  {contactConfig.hero.secondaryCTA.text}
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-slate-400 uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 rounded-full border-2 border-slate-400/50 flex justify-center pt-1.5">
              <motion.div
                className="w-1 h-1 bg-brand-cyan rounded-full"
                animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              id="contact-form"
            >
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-[#29619e] mb-3">{contactConfig.form.title}</h2>
                <p className="text-gray-600 mb-6 sm:mb-8">
                  {contactConfig.form.description}
                </p>

                {formStatus.type === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-green-50 border-2 border-green-200 rounded-xl text-green-700 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Message Sent Successfully!</p>
                      <p className="text-sm">{formStatus.message}</p>
                    </div>
                  </motion.div>
                ) : (
                  <form action={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className="h-12 focus:border-brand-cyan focus:ring-brand-cyan"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        className="h-12 focus:border-brand-cyan focus:ring-brand-cyan"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name <span className="text-gray-400">(optional)</span>
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        className="h-12 focus:border-brand-cyan focus:ring-brand-cyan"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone / WhatsApp
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        className="h-12 focus:border-brand-cyan focus:ring-brand-cyan"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="service"
                        className="w-full h-12 px-3 border border-gray-200 rounded-md focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan focus:outline-none"
                      >
                        <option value="">Select a project type</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="AI / Automation">AI / Automation</option>
                        <option value="SaaS / MVP">SaaS / MVP</option>
                        <option value="Dedicated Developers">Dedicated Developers</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message / Project Brief <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        className="min-h-[140px] focus:border-brand-cyan focus:ring-brand-cyan"
                        required
                      />
                    </div>

                    {formStatus.type === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                        {formStatus.message}
                      </div>
                    )}

                    <Button
                      disabled={isPending}
                      className="w-full h-14 bg-gradient-to-r from-brand-cyan to-[#29619e] hover:scale-105 transition-all duration-300 shadow-md shadow-brand-cyan/20 text-white font-semibold text-lg rounded-lg"
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 flex-shrink-0" />
                      {contactConfig.form.privacyText}
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right Column: Alternative Contact & Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Alternative Contact Options */}
              <div className="contact-options-container bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-[#29619e] mb-4 sm:mb-6">{contactConfig.contactOptions.title}</h3>

                <div className="space-y-3">
                  {contactConfig.contactOptions.options.map((option, index) => (
                    <ContactOption
                      key={index}
                      icon={option.icon}
                      title={option.title}
                      value={option.value}
                      href={option.href}
                    />
                  ))}
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="why-items-container bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-[#29619e] mb-4 sm:mb-6">{contactConfig.whyChooseUs.title}</h3>

                <div className="space-y-3">
                  {contactConfig.whyChooseUs.points.map((point, index) => (
                    <WhyItem key={index} text={point} />
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-16 bg-gradient-to-r from-brand-dark to-[#29619e] text-white overflow-hidden relative">
        {/* Background orb */}
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 bg-brand-cyan/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {contactConfig.finalCTA.title}
            </h2>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={contactConfig.finalCTA.href}
            >
              <Button className="px-10 py-6 bg-gradient-to-r from-brand-cyan to-[#29619e] hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-cyan/30 text-white font-semibold text-lg rounded-lg">
                {contactConfig.finalCTA.buttonText}
              </Button>
            </motion.a>

            <p className="text-gray-300 mt-4 text-sm">
              {contactConfig.finalCTA.subtext}
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

function ContactOption({ icon: Icon, title, value, href }: { icon: any, title: string, value: string, href?: string }) {
  const content = (
    <motion.div
      whileHover={{ x: 5, backgroundColor: "rgba(6, 182, 212, 0.05)" }}
      className="contact-option flex items-start gap-4 p-4 rounded-xl transition-colors"
    >
      {/* Fixed mobile icon visibility: increased size and added min-width */}
      <div className="w-12 h-12 min-w-[48px] bg-gradient-to-br from-brand-cyan/20 to-[#29619e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-brand-cyan" />
      </div>
      <div className="flex-1 text-left min-w-0">
        <p className="font-semibold text-gray-900 mb-0.5">{title}</p>
        <p className="text-gray-600 text-sm break-words">{value}</p>
      </div>
      {href && <ArrowRight className="w-5 h-5 text-gray-400 mt-3 flex-shrink-0" />}
    </motion.div>
  )

  if (href) {
    return <a href={href} className="block">{content}</a>
  }
  return content
}

function WhyItem({ text }: { text: string }) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="why-item flex items-center gap-4 group p-3 rounded-xl hover:bg-brand-cyan/5 transition-colors duration-300"
    >
      {/* Fixed mobile icon visibility: increased size */}
      <div className="w-9 h-9 min-w-[36px] rounded-lg bg-gradient-to-br from-brand-cyan/15 to-[#29619e]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
      </div>
      <span className="text-gray-700 font-medium group-hover:text-brand-cyan transition-colors duration-300">{text}</span>
    </motion.div>
  )
}
