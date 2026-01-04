"use client"

import React, { useRef, useEffect, useState, ReactNode } from "react"
import { motion, useScroll, useTransform, useReducedMotion, MotionValue, useSpring } from "framer-motion"
import Image from "next/image"

// ============================================================================
// PARALLAX COMPONENTS - Mobile-optimized parallax effects
// ============================================================================

interface ParallaxProps {
    children: ReactNode
    className?: string
    speed?: number // -1 to 1: negative = slower, positive = faster
    direction?: "vertical" | "horizontal"
    offset?: [string, string] // Start and end offset for scroll tracking
    disableOnMobile?: boolean
    mobileBreakpoint?: number
    smooth?: number // Spring smoothness (0-1)
}

/**
 * Parallax - Smooth parallax scroll effect with mobile optimization
 * Uses Framer Motion for GPU-accelerated transforms
 */
export function Parallax({
    children,
    className = "",
    speed = 0.3,
    direction = "vertical",
    offset = ["start end", "end start"],
    disableOnMobile = true,
    mobileBreakpoint = 768,
    smooth = 0.1
}: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isMobile, setIsMobile] = useState(false)
    const prefersReducedMotion = useReducedMotion()

    // Check for mobile viewport
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < mobileBreakpoint)
        checkMobile()
        window.addEventListener("resize", checkMobile, { passive: true })
        return () => window.removeEventListener("resize", checkMobile)
    }, [mobileBreakpoint])

    // Scroll progress for this element
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: offset as any
    })

    // Calculate parallax offset based on speed
    const parallaxOffset = useTransform(
        scrollYProgress,
        [0, 1],
        [speed * -100, speed * 100]
    )

    // Add spring smoothing for natural feel
    const smoothOffset = useSpring(parallaxOffset, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    // Disable parallax if reduced motion, or on mobile if specified
    const shouldDisable = prefersReducedMotion || (disableOnMobile && isMobile)

    if (shouldDisable) {
        return <div ref={ref} className={className}>{children}</div>
    }

    return (
        <div ref={ref} className={className} style={{ willChange: "transform" }}>
            <motion.div
                style={{
                    [direction === "vertical" ? "y" : "x"]: smoothOffset
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}

/**
 * ParallaxLayer - Create layered parallax backgrounds
 */
interface ParallaxLayerProps extends ParallaxProps {
    zIndex?: number
    opacity?: [number, number] // Start and end opacity
}

export function ParallaxLayer({
    children,
    className = "",
    speed = 0.3,
    zIndex = 0,
    opacity,
    disableOnMobile = true,
    mobileBreakpoint = 768
}: ParallaxLayerProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isMobile, setIsMobile] = useState(false)
    const prefersReducedMotion = useReducedMotion()

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < mobileBreakpoint)
        checkMobile()
        window.addEventListener("resize", checkMobile, { passive: true })
        return () => window.removeEventListener("resize", checkMobile)
    }, [mobileBreakpoint])

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [speed * -80, speed * 80])
    const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

    const opacityValue = opacity
        ? useTransform(scrollYProgress, [0, 0.5, 1], [opacity[0], 1, opacity[1]])
        : 1

    const shouldDisable = prefersReducedMotion || (disableOnMobile && isMobile)

    if (shouldDisable) {
        return (
            <div
                ref={ref}
                className={className}
                style={{ zIndex, position: "relative" }}
            >
                {children}
            </div>
        )
    }

    return (
        <div
            ref={ref}
            className={className}
            style={{ zIndex, position: "relative", willChange: "transform" }}
        >
            <motion.div style={{ y: smoothY, opacity: opacityValue }}>
                {children}
            </motion.div>
        </div>
    )
}

/**
 * ParallaxImage - Optimized parallax for images with lazy loading
 */
interface ParallaxImageProps {
    src: string
    alt: string
    className?: string
    speed?: number
    disableOnMobile?: boolean
    priority?: boolean
}

export function ParallaxImage({
    src,
    alt,
    className = "",
    speed = 0.2,
    disableOnMobile = true,
    priority = false
}: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const prefersReducedMotion = useReducedMotion()

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile, { passive: true })
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    // Scale image slightly to hide edges during parallax
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.1])
    const y = useTransform(scrollYProgress, [0, 1], [speed * -50, speed * 50])
    const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

    const shouldDisable = prefersReducedMotion || (disableOnMobile && isMobile)

    return (
        <div
            ref={ref}
            className={`overflow-hidden ${className}`}
            style={{ willChange: shouldDisable ? "auto" : "transform" }}
        >
            {shouldDisable ? (
                <div className="relative w-full h-full">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority={priority}
                        onLoad={() => setIsLoaded(true)}
                    />
                </div>
            ) : (
                <motion.div 
                    style={{ y: smoothY, scale }}
                    className="relative w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority={priority}
                        onLoad={() => setIsLoaded(true)}
                    />
                </motion.div>
            )}
        </div>
    )
}

/**
 * ParallaxText - Text with parallax and optional reveal effect
 */
interface ParallaxTextProps {
    children: ReactNode
    className?: string
    speed?: number
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
    reveal?: boolean
}

export function ParallaxText({
    children,
    className = "",
    speed = 0.1,
    as: Component = "div",
    reveal = false
}: ParallaxTextProps) {
    const ref = useRef<HTMLDivElement>(null)
    const prefersReducedMotion = useReducedMotion()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [speed * -30, speed * 30])
    const opacity = reveal
        ? useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
        : 1

    if (prefersReducedMotion) {
        return <Component className={className}>{children}</Component>
    }

    return (
        <div ref={ref}>
            <motion.div style={{ y, opacity }} className={className}>
                {children}
            </motion.div>
        </div>
    )
}

/**
 * StickyParallax - Section that becomes sticky with parallax content
 */
interface StickyParallaxProps {
    children: ReactNode
    className?: string
    height?: string // Height of scrollable area (e.g., "200vh")
    disableOnMobile?: boolean
}

export function StickyParallax({
    children,
    className = "",
    height = "200vh",
    disableOnMobile = true
}: StickyParallaxProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isMobile, setIsMobile] = useState(false)
    const prefersReducedMotion = useReducedMotion()

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile, { passive: true })
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const shouldDisable = prefersReducedMotion || (disableOnMobile && isMobile)

    if (shouldDisable) {
        return <div className={className}>{children}</div>
    }

    return (
        <div ref={containerRef} style={{ height }} className="relative">
            <div className={`sticky top-0 h-screen flex items-center justify-center overflow-hidden ${className}`}>
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child as React.ReactElement<any>, {
                            scrollProgress: scrollYProgress
                        })
                    }
                    return child
                })}
            </div>
        </div>
    )
}

// ============================================================================
// CSS-ONLY PARALLAX (For maximum performance)
// ============================================================================

/**
 * CSSParallaxContainer - Pure CSS parallax container
 * Uses CSS 3D transforms for best performance
 */
export function CSSParallaxContainer({
    children,
    className = "",
    perspective = 1
}: {
    children: ReactNode
    className?: string
    perspective?: number
}) {
    return (
        <div
            className={className}
            style={{
                perspective: `${perspective}px`,
                perspectiveOrigin: "center center",
                overflowX: "hidden",
                overflowY: "auto"
            }}
        >
            {children}
        </div>
    )
}

/**
 * CSSParallaxLayer - Pure CSS parallax layer
 */
export function CSSParallaxLayer({
    children,
    className = "",
    depth = 0.5 // 0 = no parallax, 1 = normal speed, >1 = faster
}: {
    children: ReactNode
    className?: string
    depth?: number
}) {
    const scale = 1 / depth
    const translateZ = -(1 - depth) * 100

    return (
        <div
            className={className}
            style={{
                transform: `translateZ(${translateZ}px) scale(${scale})`,
                transformOrigin: "center center"
            }}
        >
            {children}
        </div>
    )
}
