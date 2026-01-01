"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  "/healthcare-mockup.png",
  "/ecommerce-mockup.png",
  "/lms-dashboard.png",
  "/real-estate-mockup.png",
  "/supply-chain-mockup.png"
]

export function VideoBackground() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden bg-slate-900">

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }} // Full opacity for background
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide]}
            alt="Background Project Showcase"
            className="w-full h-full object-cover opacity-80"
          />
        </motion.div>
      </AnimatePresence>

      {/* Optimized Overlay: Clearer center for video visibility, fading to white at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/90" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-deep/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  )
}
