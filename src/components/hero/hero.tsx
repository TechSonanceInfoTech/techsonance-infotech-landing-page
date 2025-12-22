"use client"

import { siteConfig } from "@/config/site"
import { VideoBackground } from "@/components/hero/video-background"
import { TypewriterTitle } from "@/components/hero/typewriter-title"
import { motion } from "framer-motion"
import { Rocket, TrendingUp, Target, ArrowUpRight } from "lucide-react"
import { LucideIcon } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <VideoBackground />
      
      <div className="container relative z-10 flex flex-col items-center text-center px-4 py-20">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="flex flex-col items-center max-w-5xl"
        >
          <div className="mb-6 px-4 py-2 rounded-full border-2 border-cyan-400/50 bg-gradient-to-r from-cyan-50 to-brand-deep/10 backdrop-blur-md shadow-xl shadow-cyan-500/20 inline-block">
            <span className="text-xs font-black text-slate-900 uppercase tracking-[0.3em]">
              Next-Gen Digital Agency
            </span>
          </div>
          
          <TypewriterTitle />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl text-lg md:text-2xl text-slate-700 mb-16 leading-relaxed font-normal"
          >
            {siteConfig.hero.subHeadline}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <Link
              href="#consultancy-section" 
              className="px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-deep text-white font-bold rounded-full shadow-xl shadow-cyan-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Let's Talk Business
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link 
              href="#consultancy-section" 
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-slate-800 font-bold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              Schedule a free call
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 w-full max-w-4xl"
        >
          <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-8">
            Driving Digital Transformation
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
             <StatCard value="2x" label="Faster Time-to-Market" delay={0} icon={Rocket} />
             <StatCard value="40%" label="Cost Optimization" delay={1} icon={TrendingUp} />
             <StatCard value="100%" label="Tailored Strategy" delay={2} icon={Target} />
             <StatCard value="100%" label="Scalability" delay={3} icon={ArrowUpRight} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ value, label, delay, icon: Icon }: { value: string, label: string, delay: number, icon: LucideIcon }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 + delay * 0.1, duration: 0.5 }}
      className="group cursor-default"
    >
      <div className="p-4 md:p-5 rounded-2xl bg-white/50 backdrop-blur-md border border-white/40 shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-slate-900/15 hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
        {/* Icon with gradient background */}
        <div className="mb-3 flex justify-center">
          <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-cyan-400/20 to-brand-deep/20 group-hover:from-cyan-400/30 group-hover:to-brand-deep/30 transition-all duration-300">
            <Icon className="w-6 h-6 md:w-8 md:h-8 text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-brand-deep" style={{ 
              filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))',
              stroke: 'url(#icon-gradient)',
              strokeWidth: 2
            }} />
            <svg width="0" height="0">
              <defs>
                <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#141d2f" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-brand-deep mb-2">
          {value}
        </div>
        <div className="text-[10px] md:text-xs font-semibold text-slate-700 leading-tight">
          {label}
        </div>
      </div>
    </motion.div>
  )
}
