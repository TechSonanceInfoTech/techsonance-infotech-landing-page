"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, ChevronRight, Play } from "lucide-react"
import { siteConfig } from "@/config/site"

const projects = [
    {
        id: 1,
        title: "Healthcare System",
        description: "HIPAA-compliant medical dashboard",
        image: "/healthcare-mockup.png",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        description: "High-performance online store",
        image: "/ecommerce-mockup.png",
        color: "from-yellow-500 to-orange-500"
    },
    {
        id: 3,
        title: "LMS Platform",
        description: "Interactive learning management",
        image: "/lms-dashboard.png",
        color: "from-green-500 to-emerald-500"
    },
    {
        id: 4,
        title: "Real Estate Portal",
        description: "3D virtual tour property platform",
        image: "/real-estate-mockup.png",
        color: "from-indigo-500 to-purple-500"
    },
    {
        id: 5,
        title: "Supply Chain",
        description: "IoT analytics dashboard",
        image: "/supply-chain-mockup.png",
        color: "from-cyan-500 to-blue-600"
    }
]

export function PresentationHero() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [progress, setProgress] = useState(0)

    // Auto-play logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length)
            setProgress(0)
        }, 5000)

        const progressTimer = setInterval(() => {
            setProgress((prev) => Math.min(prev + 2, 100))
        }, 100)

        return () => {
            clearInterval(timer)
            clearInterval(progressTimer)
        }
    }, [currentIndex])

    const scrollToConsultancy = () => {
        const section = document.getElementById('consultancy-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark text-white pt-20">

            {/* Background Animated Gradient */}
            <div className="absolute inset-0 bg-brand-dark">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-deep/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center justify-center h-full max-w-7xl">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full mt-8 lg:mt-0">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full"
                        >
                            <div className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                            <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                                Live Project Showcase
                            </span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                key={currentIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
                            >
                                Building <br />
                                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${projects[currentIndex].color}`}>
                                    {projects[currentIndex].title}
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-slate-300 max-w-xl"
                            >
                                {siteConfig.hero.subHeadline}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <button
                                onClick={scrollToConsultancy}
                                className="px-8 py-4 bg-white text-brand-dark font-bold rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group"
                            >
                                Start Your Project
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                            <button
                                className="px-8 py-4 bg-white/10 border border-white/20 font-bold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3 backdrop-blur-sm"
                            >
                                <Play className="w-4 h-4 fill-current" />
                                Watch Showreel
                            </button>
                        </motion.div>

                        {/* Progress Indicators */}
                        <div className="flex gap-4 pt-8">
                            {projects.map((project, idx) => (
                                <button
                                    key={project.id}
                                    onClick={() => {
                                        setCurrentIndex(idx)
                                        setProgress(0)
                                    }}
                                    className="group flex flex-col gap-2"
                                >
                                    <div className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-12 bg-white' : 'w-2 bg-white/20 group-hover:bg-white/40'}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Dynamic Project Showcase "Video" */}
                    <div className="relative order-1 lg:order-2 w-full aspect-video lg:aspect-[4/3] max-w-2xl mx-auto lg:ml-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-3" />

                        {/* Main Frame */}
                        <motion.div
                            className="relative h-full w-full rounded-2xl md:rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Simulated Address Bar */}
                            <div className="absolute top-0 left-0 right-0 h-8 md:h-12 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 z-20">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                </div>
                                <div className="flex-1 mx-4 h-6 bg-black/20 rounded-md flex items-center px-3 text-[10px] text-slate-500 font-mono">
                                    https://techsonance.com/portfolio/{projects[currentIndex].title.toLowerCase().replace(/\s/g, '-')}
                                </div>
                            </div>

                            {/* Animated Image "Ken Burns" Effect */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    className="absolute inset-0 top-12"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <img
                                        src={projects[currentIndex].image}
                                        alt={projects[currentIndex].title}
                                        className="w-full h-full object-cover object-top"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

                                    {/* Project Label Overlay */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-black/60 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10"
                                    >
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-1">{projects[currentIndex].title}</h3>
                                        <p className="text-xs md:text-sm text-slate-300">{projects[currentIndex].description}</p>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Progress Bar Line */}
                            <div className="absolute bottom-0 left-0 h-1 bg-brand-cyan z-30 transition-all duration-100 ease-linear" style={{ width: `${progress}%` }} />
                        </motion.div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 px-6 py-4 bg-white text-slate-900 rounded-2xl shadow-xl z-20 hidden sm:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-brand-cyan/10 rounded-lg">
                                    <ArrowUpRight className="w-6 h-6 text-brand-cyan" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">300%</div>
                                    <div className="text-xs font-medium text-slate-500">Average ROI</div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}
