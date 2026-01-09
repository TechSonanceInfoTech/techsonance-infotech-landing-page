"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Cloud,
  BarChart3,
  ShoppingCart,
  Users,
  ArrowRight,
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Parallax } from "@/components/animations/parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Icon mapping for each service
const serviceIcons: LucideIcon[] = [
  Code2, // Web Development
  Smartphone, // Mobile Development
  Cloud, // Cloud & DevOps
  BarChart3, // Data Analytics
  ShoppingCart, // E-Commerce
  Users, // Hire Developers
];

// Badge color configurations
const badgeColors: Record<string, string> = {
  Popular: "bg-gradient-to-r from-brand-cyan to-[#29619e] text-white",
  Trending: "bg-gradient-to-r from-[#29619e] to-brand-cyan text-white",
  Enterprise: "bg-gradient-to-r from-brand-cyan to-[#29619e] text-white",
  Growth: "bg-gradient-to-r from-brand-cyan to-[#29619e] text-white",
  "Quick Start": "bg-gradient-to-r from-[#29619e] to-brand-cyan text-white",
  Featured: "bg-gradient-to-r from-brand-cyan to-[#29619e] text-white",
};

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const smoothBackgroundY = useSpring(backgroundY, { stiffness: 100, damping: 30 });

  // GSAP animations - Clean staggered slide-in reveal (no floating)
  useEffect(() => {
    if (prefersReducedMotion || !gridRef.current) return;

    const ctx = gsap.context(() => {
      // Clean staggered slide-in reveal on scroll - each card slides in individually
      const cards = gsap.utils.toArray(".service-card") as HTMLElement[];

      cards.forEach((card, index) => {
        // Alternate directions: left cards slide from left, right cards from right
        const isLeftCard = index % 3 === 0;
        const isRightCard = index % 3 === 2;
        const xStart = isLeftCard ? -60 : isRightCard ? 60 : 0;

        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50,
            x: xStart,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.7,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);


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
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-20 lg:py-24 xl:py-32 bg-slate-50 overflow-hidden"
    >
      {/* Animated Background with Parallax */}
      <motion.div
        style={prefersReducedMotion ? {} : { y: smoothBackgroundY }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,194,255,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(10,26,47,0.05),transparent_50%)]"
      />

      {/* Floating Parallax Orbs */}
      <Parallax speed={-0.15} className="absolute top-20 right-0 w-96 h-96 pointer-events-none" disableOnMobile>
        <motion.div
          className="w-full h-full bg-brand-cyan/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </Parallax>

      <Parallax speed={0.2} className="absolute bottom-20 left-0 w-80 h-80 pointer-events-none" disableOnMobile>
        <motion.div
          className="w-full h-full bg-[#29619e]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </Parallax>

      <Parallax speed={0.1} className="absolute top-1/2 left-1/4 w-64 h-64 pointer-events-none" disableOnMobile>
        <motion.div
          className="w-full h-full bg-purple-500/5 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </Parallax>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Header with clean animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          {/* Badge */}
          <motion.p
            className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-[#29619e] uppercase tracking-[0.3em] mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            ⚡ Software Development Services
          </motion.p>

          {/* Title - Clean block layout */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-[#29619e] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            End-to-End Development Solutions
          </motion.h2>

          {/* Animated underline - centered block */}
          <motion.div
            className="w-48 h-1 bg-gradient-to-r from-brand-cyan to-[#29619e] rounded-full mx-auto mb-6"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          />

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            From custom web applications to AI-powered automation, we deliver comprehensive software development solutions that transform businesses and drive sustainable growth.
          </motion.p>
        </motion.div>


        {/* Services Grid with GSAP animations */}
        <div className="max-w-6xl mx-auto">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {siteConfig.services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                badge={service.badge}
                number={service.number}
                slug={service.slug}
                icon={serviceIcons[index]}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-16 md:mt-20 text-center"
        >
          <motion.p
            className="text-lg text-slate-600 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Not sure which service is right for you?
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="#consultancy-section"
              className="group inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-cyan to-[#29619e] text-white font-semibold shadow-lg shadow-brand-cyan/30 hover:shadow-xl hover:shadow-brand-cyan/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                animate={{ x: ["0%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <span className="relative">Schedule a free call</span>
              <ArrowRight className="relative inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const ServiceIcon3D = ({
  icon: Icon,
}: {
  icon: LucideIcon;
  color?: string;
}) => (
  <motion.div
    className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 md:mb-6 perspective-1000"
    whileHover={{ scale: 1.1, rotateY: 10 }}
    transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
  >
    {/* Back Layer - Dark Shadow */}
    <div className="absolute inset-0 bg-brand-dark/20 rounded-2xl transform rotate-6 scale-90 translate-y-2 blur-sm" />

    {/* Middle Layer - Accent Color */}
    <motion.div
      className="absolute inset-0 bg-brand-cyan/20 rounded-2xl transform -rotate-6 scale-95"
      animate={{ rotate: [-6, -3, -6] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Front Layer - Glassmorphism Container */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-white/60 shadow-xl shadow-brand-cyan/10 flex items-center justify-center backdrop-blur-md"
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Inner Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/5 to-transparent rounded-2xl" />

      {/* The Icon */}
      <Icon
        className="relative w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-transparent stroke-[url(#icon-gradient)] filter drop-shadow-md group-hover:text-brand-cyan transition-colors duration-300"
        strokeWidth={1.5}
      />
      <svg width="0" height="0">
        <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#29619e" />
        </linearGradient>
      </svg>

      {/* Shine Effect */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/40 to-transparent rounded-tr-2xl opacity-50" />
    </motion.div>
  </motion.div>
);

function ServiceCard({
  title,
  description,
  badge,
  icon,
  slug,
}: {
  title: string;
  description: string;
  badge: string;
  number: string;
  icon: LucideIcon;
  slug: string;
  delay: number;
}) {
  return (
    <Link href={`/services/${slug}`} className="block h-full">
      <motion.div
        whileHover={{
          y: -12,
          scale: 1.02,
          boxShadow: "0 30px 60px rgba(6, 182, 212, 0.15)"
        }}
        className="service-card group cursor-pointer h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative h-full p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-500 overflow-hidden flex flex-col items-center text-center">
          {/* Hover glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-[#29619e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Top Accent Bar - Animated */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan to-[#29619e]"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Badge */}
          <div className="relative mb-6 md:mb-8">
            <motion.span
              className={`inline-block text-[10px] font-bold px-3 py-1 rounded-full ${badgeColors[badge]} shadow-sm uppercase tracking-wide`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring" as const, stiffness: 400 }}
            >
              {badge}
            </motion.span>
          </div>

          {/* 3D Icon Visualization */}
          <ServiceIcon3D icon={icon} />

          {/* Content Wrapper */}
          <div className="relative flex-1 flex flex-col w-full">
            <div className="space-y-4 mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-brand-dark group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-[#29619e] transition-all duration-300">
                {title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                {description}
              </p>
            </div>

            {/* Discover More Link */}
            <div className="mt-auto pt-4 flex justify-center">
              <motion.span
                className="inline-flex items-center text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-[#29619e] group-hover:from-[#29619e] group-hover:to-brand-cyan transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                Discover More
                <ArrowRight className="ml-2 w-4 h-4 text-brand-cyan group-hover:translate-x-1 transition-transform duration-300" />
              </motion.span>
            </div>
          </div>

          {/* Bottom accent line on hover */}
          <motion.div
            className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-brand-cyan to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>
    </Link>
  );
}
