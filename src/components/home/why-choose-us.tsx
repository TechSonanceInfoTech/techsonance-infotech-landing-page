"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion"
import {
  Rocket,
  Layout,
  Users,
  Wallet,
  Zap,
  CheckCircle2,
  LucideIcon
} from "lucide-react"
import { Parallax } from "@/components/animations/parallax"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Enhanced content for Techsonance Infotech LLP
const features = [
  {
    icon: Rocket,
    title: "Strategic Software Development Roadmap",
    description: "We architect success with industry-leading tools like Jira and GitHub, crafting progressive roadmaps that keep your project goals in focus and milestones on track.",
    gradient: "from-brand-cyan to-[#29619e]"
  },
  {
    icon: Layout,
    title: "Agile Development & Fast Delivery",
    description: "Our agile methodologies and precise project management ensure seamless execution, delivering complex software solutions with clarity and speed.",
    gradient: "from-[#29619e] to-brand-cyan"
  },
  {
    icon: Users,
    title: "Flexible Engagement Models",
    description: "Choose from dedicated development teams, project-based squads, or staff augmentation. We adapt our workflow to fit your specific operational needs.",
    gradient: "from-brand-cyan to-[#29619e]"
  },
  {
    icon: Wallet,
    title: "Cost-Effective Development Solutions",
    description: "Premium quality at competitive rates. We engineer high-impact solutions that maximize your ROI without compromising on performance or aesthetics.",
    gradient: "from-[#29619e] to-brand-cyan"
  },
  {
    icon: Zap,
    title: "On-Time, Bug-Free Delivery Guaranteed",
    description: "Consistency is our currency. We deliver fully-featured, thoroughly tested projects before the deadline, every single time.",
    gradient: "from-brand-cyan to-[#29619e]"
  }
]

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const smoothBackgroundY = useSpring(backgroundY, { stiffness: 100, damping: 30 })

  // GSAP animations - Clean slide-in reveal (no floating)
  useEffect(() => {
    if (prefersReducedMotion || !cardsRef.current) return

    const ctx = gsap.context(() => {
      // Glow pulse on CTA card (keep this, it's subtle)
      gsap.to(".cta-glow", {
        boxShadow: "0 0 60px 20px rgba(6, 182, 212, 0.25)",
        duration: 2.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      })

      // Clean staggered slide-in reveal - each card slides in individually
      const cards = gsap.utils.toArray(".feature-card") as HTMLElement[]

      cards.forEach((card, index) => {
        // Alternate directions based on card position
        const isLeftCard = index % 3 === 0
        const isRightCard = index % 3 === 2
        const xStart = isLeftCard ? -50 : isRightCard ? 50 : 0

        gsap.fromTo(card,
          {
            opacity: 0,
            y: 40,
            x: xStart
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        )
      })
    }, cardsRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])


  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-10 pb-20 md:pt-14 md:pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      {/* Animated Grid Background */}
      <motion.div
        style={prefersReducedMotion ? {} : { y: smoothBackgroundY }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:3rem_3rem]"
      />

      {/* Animated Parallax Gradient Blobs */}
      <Parallax speed={-0.25} className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[50rem] h-[50rem] pointer-events-none" disableOnMobile>
        <motion.div
          className="w-full h-full bg-gradient-to-br from-brand-cyan/15 to-[#29619e]/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </Parallax>

      <Parallax speed={0.2} className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[50rem] h-[50rem] pointer-events-none" disableOnMobile>
        <motion.div
          className="w-full h-full bg-gradient-to-tr from-brand-cyan/15 to-[#29619e]/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </Parallax>

      <Parallax speed={0.15} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] pointer-events-none" disableOnMobile>
        <motion.div
          className="w-full h-full bg-gradient-to-r from-brand-cyan/10 to-[#29619e]/10 rounded-full blur-3xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </Parallax>

      <div className="container relative z-10 px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
        {/* Premium Header Section with Enhanced Animations */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-20 max-w-4xl mx-auto"
        >
          {/* Decorative Top Badge with Animation */}
          <motion.div
            variants={badgeVariants}
            className="inline-flex items-center justify-center gap-3 mb-6"
          >
            <motion.div
              className="h-px w-12 bg-gradient-to-r from-transparent to-brand-cyan"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <motion.span
              className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan/10 to-blue-500/10 border border-brand-cyan/20 text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-[#29619e] uppercase tracking-[0.2em] backdrop-blur-sm"
              animate={{ boxShadow: ["0 0 0 0 rgba(6, 182, 212, 0)", "0 0 20px 5px rgba(6, 182, 212, 0.3)", "0 0 0 0 rgba(6, 182, 212, 0)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✨ The Techsonance Advantage
            </motion.span>
            <motion.div
              className="h-px w-12 bg-gradient-to-l from-transparent to-brand-cyan"
              initial={{ scaleX: 0, originX: 1 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>

          {/* Title with Animated Underline */}
          <motion.h2
            variants={titleVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight leading-tight"
          >
            Why Partner with{' '}
            <span className="relative inline-block">
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-[#29619e]"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                TechSonance?
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-cyan to-[#29619e] rounded-full origin-left"
                variants={lineVariants}
              />
            </span>
          </motion.h2>

          {/* Description with blur fade-in */}
          <motion.p
            className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We merge technical expertise with business intelligence to build digital products that{' '}
            <motion.span
              className="font-semibold text-brand-dark"
              whileHover={{ color: "#06b6d4" }}
            >scale</motion.span>,{' '}
            <motion.span
              className="font-semibold text-brand-dark"
              whileHover={{ color: "#06b6d4" }}
            >perform</motion.span>, and{' '}
            <motion.span
              className="font-semibold text-brand-dark"
              whileHover={{ color: "#06b6d4" }}
            >inspire</motion.span>.
          </motion.p>
        </motion.div>

        {/* Premium Features Grid with GSAP */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              {...feature}
            />
          ))}

          {/* Premium CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring" as const, stiffness: 100 }}
            whileHover={{ scale: 1.03, y: -8 }}
            className="cta-glow feature-card relative flex flex-col justify-center items-center p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-brand-dark via-brand-deep to-brand-dark text-white text-center overflow-hidden group cursor-pointer shadow-2xl shadow-brand-dark/20"
          >
            {/* Animated Background Effects */}
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,194,255,0.3),transparent_60%)]"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.2),transparent_60%)]"
              animate={{ opacity: [0, 0.4, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
              animate={{ x: ["0%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />

            <div className="relative z-10">
              {/* Icon with Glow Effect */}
              <motion.div
                className="relative w-16 h-16 sm:w-18 sm:h-18 mx-auto mb-6"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-brand-cyan/30 rounded-2xl blur-xl opacity-50" />
                <motion.div
                  className="relative w-full h-full bg-white rounded-2xl flex items-center justify-center backdrop-blur-sm border border-brand-cyan/20 shadow-lg"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring" as const, stiffness: 300 }}
                >
                  <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9 text-transparent stroke-[url(#icon-gradient-why)]" />
                  <svg width="0" height="0" className="absolute">
                    <linearGradient id="icon-gradient-why" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#29619e" />
                    </linearGradient>
                  </svg>
                </motion.div>
              </motion.div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Ready to Start?</h3>
              <p className="text-slate-300 mb-8 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                Join the roadmap to digital transformation with a team that actually cares about your growth.
              </p>
              <motion.button
                className="px-8 py-4 rounded-xl bg-white text-brand-dark font-bold shadow-xl shadow-black/10 relative overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(6, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Button shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent -translate-x-full"
                  animate={{ x: ["0%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <span className="relative">Let's Talk Business</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient,
  index
}: {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  index: number
}) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(6, 182, 212, 0.15)"
      }}
      className="feature-card group relative h-full bg-white/80 backdrop-blur-sm hover:bg-white rounded-3xl p-8 sm:p-9 md:p-10 border-2 border-slate-100 hover:border-brand-cyan/30 transition-all duration-500"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-cyan/5 to-[#29619e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Number Badge with animation */}
        <motion.div
          className="absolute -top-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-slate-100 to-white border-2 border-slate-200 rounded-2xl flex items-center justify-center font-bold text-slate-400 text-sm sm:text-base shadow-lg"
          whileHover={{ scale: 1.1, rotate: 10, borderColor: "rgba(6, 182, 212, 0.5)" }}
          transition={{ type: "spring" as const, stiffness: 400 }}
        >
          {String(index + 1).padStart(2, '0')}
        </motion.div>

        {/* Premium Icon Container */}
        <div className="relative mb-6">
          <motion.div
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-cyan/10 flex items-center justify-center shadow-lg"
            whileHover={{
              scale: 1.15,
              rotate: 8,
              boxShadow: "0 15px 30px rgba(6, 182, 212, 0.3)"
            }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 15 }}
          >
            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-transparent stroke-[url(#icon-gradient-why)]" />
          </motion.div>
        </div>

        {/* Title with Gradient Hover Effect */}
        <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-[#29619e] transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
          {description}
        </p>

        {/* Bottom Accent Line */}
        <motion.div
          className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent rounded-full"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  )
}
