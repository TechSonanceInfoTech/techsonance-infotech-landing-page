"use client";

import { useRef, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { VideoBackground } from "@/components/hero/video-background";
import { TypewriterTitle } from "@/components/hero/typewriter-title";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { Rocket, TrendingUp, Target, ArrowUpRight, Sparkles } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Parallax scroll effect for the whole section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Smooth parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  // GSAP animations on mount
  useEffect(() => {
    if (prefersReducedMotion || !contentRef.current) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      // Desktop only animations
      mm.add("(min-width: 768px)", () => {
        // Floating animation for stat cards
        gsap.to(".stat-card", {
          y: -10,
          duration: 2,
          ease: "power1.inOut",
          stagger: 0.2,
          repeat: -1,
          yoyo: true,
        });

        // Glow pulse animation
        gsap.to(".glow-pulse", {
          boxShadow: "0 0 60px 20px rgba(6, 182, 212, 0.3)",
          duration: 2,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
      
      // Mobile simplified animations
      mm.add("(max-width: 767px)", () => {
         // Simpler pulse instead of heavy shadow
         gsap.to(".glow-pulse", {
            opacity: 0.8,
            duration: 1.5,
            repeat: -1,
            yoyo: true
         });
      });

    }, contentRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const scrollToConsultancy = () => {
    const section = document.getElementById("consultancy-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Animation variants with proper typing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 lg:pt-24"
    >
      <VideoBackground />

      {/* Animated gradient orbs */}
      {/* Animated gradient orbs - Optimized for mobile */}
      <motion.div
        className="absolute top-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-brand-cyan/30 to-transparent rounded-full blur-2xl md:blur-3xl pointer-events-none opacity-50 md:opacity-100 will-change-transform"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-48 md:w-80 h-48 md:h-80 bg-gradient-to-tr from-[#29619e]/30 to-transparent rounded-full blur-2xl md:blur-3xl pointer-events-none opacity-50 md:opacity-100 will-change-transform"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        ref={contentRef}
        style={prefersReducedMotion ? {} : { y: smoothY, opacity, scale }}
        className="container relative z-10 flex flex-col items-center text-center px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-5xl w-full"
        >
          <motion.div
            variants={badgeVariants}
            className="glow-pulse mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-3 rounded-full border-2 border-cyan-500 bg-white shadow-2xl shadow-cyan-500/30 inline-flex items-center gap-2.5 max-w-[95vw] z-20 relative"
          >
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-cyan fill-brand-cyan flex-shrink-0" />
            <motion.span
              className="text-[9px] sm:text-[10px] md:text-xs font-black text-slate-950 uppercase tracking-wider md:tracking-[0.25em] whitespace-nowrap overflow-hidden text-ellipsis"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              The TechSonance Advantage
            </motion.span>
          </motion.div>

          {/* Title with enhanced animation */}
          <motion.div variants={itemVariants}>
            <TypewriterTitle />
          </motion.div>

          {/* Subtitle with blur reveal */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl text-base md:text-lg lg:text-xl xl:text-xl text-slate-700 mb-8 md:mb-12 lg:mb-16 leading-relaxed font-normal px-4"
          >
            {siteConfig.hero.subHeadline}
          </motion.p>

          {/* CTA Buttons with stagger */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10 w-full sm:w-auto"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={scrollToConsultancy}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-brand-cyan to-[#29619e] text-white font-bold rounded-full shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2 touch-target relative overflow-hidden"
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                animate={{ x: ["0%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <span className="relative text-sm md:text-base">
                ${`Let's Talk Business`}
              </span>
              <ArrowUpRight className="relative w-4 h-4 md:w-5 md:h-5" />
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(6, 182, 212, 0.8)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToConsultancy}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-slate-800 font-bold rounded-full flex items-center justify-center gap-2 touch-target transition-colors duration-300"
            >
              <span className="text-sm md:text-base">Schedule a free call</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Stats Section with GSAP float animation */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="mt-6 md:mt-8 w-full max-w-4xl"
        >
          {/* <motion.p
            className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Driving Digital Transformation
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
            <StatCard value="2x" label="Faster Time-to-Market" delay={0} icon={Rocket} />
            <StatCard value="40%" label="Cost Optimization" delay={1} icon={TrendingUp} />
            <StatCard value="100%" label="Tailored Strategy" delay={2} icon={Target} />
            <StatCard value="100%" label="Scalability" delay={3} icon={ArrowUpRight} />
          </div> */}
        </motion.div>
      </motion.div>

      {/* Scroll indicator with bounce animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToConsultancy}
        >
          <span className="text-xs text-slate-500 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-brand-cyan rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatCard({
  value,
  label,
  delay,
  icon: Icon,
}: {
  value: string;
  label: string;
  delay: number;
  icon: LucideIcon;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        delay: 1 + delay * 0.15,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -8,
        scale: 1.05,
        boxShadow: "0 25px 50px rgba(6, 182, 212, 0.2)",
      }}
      className="stat-card group cursor-default"
    >
      <div className="p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl bg-white/60 backdrop-blur-lg border border-white/50 shadow-xl shadow-slate-900/10 transition-all duration-300">
        {/* Animated glow on hover */}
        <motion.div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-[#29619e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon with gradient background */}
        <div className="relative mb-2 md:mb-3 flex justify-center">
          <motion.div
            className="p-1.5 md:p-2 lg:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-cyan-400/20 to-[#29619e]/20"
            whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Icon
              className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-brand-cyan"
              strokeWidth={2}
            />
          </motion.div>
        </div>

        {/* Animated counter effect */}
        <motion.div
          className="relative text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-[#29619e] mb-1 md:mb-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 1.2 + delay * 0.15,
            type: "spring",
            stiffness: 200,
          }}
        >
          {value}
        </motion.div>
        <div className="relative text-[9px] md:text-[10px] lg:text-xs font-semibold text-slate-700 leading-tight">
          {label}
        </div>
      </div>
    </motion.div>
  );
}
