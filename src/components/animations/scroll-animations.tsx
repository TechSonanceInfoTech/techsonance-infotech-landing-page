"use client"

import React, { useRef, useEffect, ReactNode } from "react"
import { motion, useInView, useReducedMotion, Variants, MotionProps } from "framer-motion"

// ============================================================================
// ANIMATION VARIANTS - Reusable animation presets
// ============================================================================

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
}

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
}

// ============================================================================
// ANIMATED COMPONENTS - Reusable scroll-triggered components
// ============================================================================

interface AnimatedProps {
    children: ReactNode
    className?: string
    delay?: number
    duration?: number
    once?: boolean
    amount?: number | "some" | "all"
}

/**
 * FadeInUp - Animates content from below with fade
 */
export function FadeInUp({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    once = true,
    amount = 0.3
}: AnimatedProps) {
    const prefersReducedMotion = useReducedMotion()

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/**
 * FadeInDown - Animates content from above with fade
 */
export function FadeInDown({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    once = true,
    amount = 0.3
}: AnimatedProps) {
    const prefersReducedMotion = useReducedMotion()

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={{
                hidden: { opacity: 0, y: -30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/**
 * FadeInLeft - Animates content from left with fade
 */
export function FadeInLeft({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    once = true,
    amount = 0.3
}: AnimatedProps) {
    const prefersReducedMotion = useReducedMotion()

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/**
 * FadeInRight - Animates content from right with fade
 */
export function FadeInRight({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    once = true,
    amount = 0.3
}: AnimatedProps) {
    const prefersReducedMotion = useReducedMotion()

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/**
 * ScaleIn - Animates content with scale and fade
 */
export function ScaleIn({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    once = true,
    amount = 0.3
}: AnimatedProps) {
    const prefersReducedMotion = useReducedMotion()

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/**
 * StaggerContainer - Container for staggered child animations
 */
export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
    once = true,
    amount = 0.2
}: AnimatedProps & { staggerDelay?: number }) {
    const prefersReducedMotion = useReducedMotion()

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: 0.1
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/**
 * StaggerItem - Child item for StaggerContainer
 */
export function StaggerItem({
    children,
    className = ""
}: { children: ReactNode; className?: string }) {
    const prefersReducedMotion = useReducedMotion()

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/**
 * BlurFadeIn - Premium blur + fade animation
 */
export function BlurFadeIn({
    children,
    className = "",
    delay = 0,
    duration = 0.8,
    once = true,
    amount = 0.3
}: AnimatedProps) {
    const prefersReducedMotion = useReducedMotion()

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={{
                hidden: {
                    opacity: 0,
                    y: 20,
                    filter: "blur(10px)"
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/**
 * RevealOnScroll - Clip-path reveal animation
 */
export function RevealOnScroll({
    children,
    className = "",
    delay = 0,
    duration = 0.8,
    direction = "up",
    once = true,
    amount = 0.3
}: AnimatedProps & { direction?: "up" | "down" | "left" | "right" }) {
    const prefersReducedMotion = useReducedMotion()

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>
    }

    const clipPaths = {
        up: { hidden: "inset(100% 0 0 0)", visible: "inset(0 0 0 0)" },
        down: { hidden: "inset(0 0 100% 0)", visible: "inset(0 0 0 0)" },
        left: { hidden: "inset(0 100% 0 0)", visible: "inset(0 0 0 0)" },
        right: { hidden: "inset(0 0 0 100%)", visible: "inset(0 0 0 0)" }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={{
                hidden: {
                    clipPath: clipPaths[direction].hidden,
                    opacity: 0
                },
                visible: {
                    clipPath: clipPaths[direction].visible,
                    opacity: 1,
                    transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// ============================================================================
// UTILITY HOOKS
// ============================================================================

/**
 * useScrollProgress - Returns scroll progress (0-1) of an element
 */
export function useScrollProgress(ref: React.RefObject<HTMLElement>) {
    const [progress, setProgress] = React.useState(0)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const handleScroll = () => {
            const rect = element.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const elementTop = rect.top
            const elementHeight = rect.height

            // Calculate progress from when element enters to when it leaves viewport
            const start = windowHeight
            const end = -elementHeight
            const current = elementTop

            const progress = Math.max(0, Math.min(1, (start - current) / (start - end)))
            setProgress(progress)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll() // Initial calculation

        return () => window.removeEventListener("scroll", handleScroll)
    }, [ref])

    return progress
}

/**
 * useIsMobile - Detects mobile viewport for performance optimization
 */
export function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = React.useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < breakpoint)

        checkMobile()
        window.addEventListener("resize", checkMobile, { passive: true })

        return () => window.removeEventListener("resize", checkMobile)
    }, [breakpoint])

    return isMobile
}
