"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

// ============================================================================
// GSAP SCROLL TRIGGER HOOKS
// ============================================================================

interface GSAPScrollOptions {
    trigger?: string | HTMLElement
    start?: string
    end?: string
    scrub?: boolean | number
    markers?: boolean
    toggleActions?: string
    pin?: boolean
    anticipatePin?: number
    onEnter?: () => void
    onLeave?: () => void
    onEnterBack?: () => void
    onLeaveBack?: () => void
}

/**
 * useGSAPScrollTrigger - Create scroll-triggered GSAP animations
 */
export function useGSAPScrollTrigger<T extends HTMLElement>() {
    const ref = useRef<T>(null)
    const triggerRef = useRef<ScrollTrigger | null>(null)

    const animate = useCallback((
        animationConfig: gsap.TweenVars,
        scrollConfig: GSAPScrollOptions = {}
    ) => {
        if (!ref.current) return

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (prefersReducedMotion) return

        const {
            start = "top 80%",
            end = "bottom 20%",
            scrub = false,
            markers = false,
            toggleActions = "play none none reverse",
            pin = false,
            onEnter,
            onLeave,
            onEnterBack,
            onLeaveBack
        } = scrollConfig

        // Create the animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ref.current,
                start,
                end,
                scrub,
                markers,
                toggleActions,
                pin,
                onEnter,
                onLeave,
                onEnterBack,
                onLeaveBack
            }
        })

        tl.to(ref.current, animationConfig)

        triggerRef.current = ScrollTrigger.getAll().pop() || null

        return () => {
            triggerRef.current?.kill()
            tl.kill()
        }
    }, [])

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            triggerRef.current?.kill()
        }
    }, [])

    return { ref, animate }
}

/**
 * useParallax - Create smooth parallax scroll effects
 * Optimized for mobile with reduced intensity and GPU-friendly transforms
 */
export function useParallax<T extends HTMLElement>(
    speed: number = 0.5,
    options: {
        direction?: "vertical" | "horizontal"
        disableOnMobile?: boolean
        mobileBreakpoint?: number
        maxOffset?: number
    } = {}
) {
    const ref = useRef<T>(null)
    const [isMobile, setIsMobile] = useState(false)

    const {
        direction = "vertical",
        disableOnMobile = true,
        mobileBreakpoint = 768,
        maxOffset = 100
    } = options

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < mobileBreakpoint)
        checkMobile()
        window.addEventListener("resize", checkMobile, { passive: true })
        return () => window.removeEventListener("resize", checkMobile)
    }, [mobileBreakpoint])

    useEffect(() => {
        if (!ref.current) return

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (prefersReducedMotion) return

        // Disable on mobile if specified
        if (disableOnMobile && isMobile) return

        const element = ref.current

        // Use reduced speed on mobile for better performance
        const effectiveSpeed = isMobile ? speed * 0.3 : speed

        const animation = gsap.to(element, {
            [direction === "vertical" ? "y" : "x"]: () => {
                const distance = effectiveSpeed * 100
                return Math.min(Math.abs(distance), maxOffset) * Math.sign(distance)
            },
            ease: "none",
            scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: 1, // Smooth scrubbing
                invalidateOnRefresh: true
            }
        })

        return () => {
            animation.kill()
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars.trigger === element) {
                    trigger.kill()
                }
            })
        }
    }, [speed, direction, disableOnMobile, isMobile, mobileBreakpoint, maxOffset])

    return ref
}

/**
 * useScrollProgress - Track scroll progress through an element (0-1)
 */
export function useGSAPScrollProgress<T extends HTMLElement>() {
    const ref = useRef<T>(null)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (!ref.current) return

        ScrollTrigger.create({
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => {
                setProgress(self.progress)
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars.trigger === ref.current) {
                    trigger.kill()
                }
            })
        }
    }, [])

    return { ref, progress }
}

/**
 * useRevealAnimation - Staggered reveal animation for groups of elements
 */
export function useRevealAnimation(
    selector: string,
    options: {
        stagger?: number
        duration?: number
        y?: number
        opacity?: number
        start?: string
        ease?: string
    } = {}
) {
    const containerRef = useRef<HTMLDivElement>(null)

    const {
        stagger = 0.1,
        duration = 0.8,
        y = 50,
        opacity = 0,
        start = "top 80%",
        ease = "power2.out"
    } = options

    useEffect(() => {
        if (!containerRef.current) return

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (prefersReducedMotion) return

        const elements = containerRef.current.querySelectorAll(selector)
        if (elements.length === 0) return

        // Set initial state
        gsap.set(elements, { y, opacity })

        // Create staggered animation
        const animation = gsap.to(elements, {
            y: 0,
            opacity: 1,
            duration,
            stagger,
            ease,
            scrollTrigger: {
                trigger: containerRef.current,
                start,
                toggleActions: "play none none reverse"
            }
        })

        return () => {
            animation.kill()
        }
    }, [selector, stagger, duration, y, opacity, start, ease])

    return containerRef
}

/**
 * usePinnedSection - Pin a section during scroll
 */
export function usePinnedSection<T extends HTMLElement>(
    options: {
        pinSpacing?: boolean
        endTrigger?: string
        end?: string
    } = {}
) {
    const ref = useRef<T>(null)

    const {
        pinSpacing = true,
        end = "+=100%"
    } = options

    useEffect(() => {
        if (!ref.current) return

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (prefersReducedMotion) return

        const trigger = ScrollTrigger.create({
            trigger: ref.current,
            start: "top top",
            end,
            pin: true,
            pinSpacing,
            anticipatePin: 1
        })

        return () => {
            trigger.kill()
        }
    }, [pinSpacing, end])

    return ref
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * refreshScrollTrigger - Refresh all ScrollTrigger instances
 * Call this after dynamic content loads
 */
export function refreshScrollTrigger() {
    ScrollTrigger.refresh()
}

/**
 * killAllScrollTriggers - Kill all ScrollTrigger instances
 * Call this on component unmount for cleanup
 */
export function killAllScrollTriggers() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}

/**
 * matchMedia - Create responsive ScrollTrigger animations
 */
export function createResponsiveAnimation(
    config: {
        mobile?: () => void
        tablet?: () => void
        desktop?: () => void
        all?: () => void
    }
) {
    const mm = gsap.matchMedia()

    if (config.mobile) {
        mm.add("(max-width: 767px)", config.mobile)
    }
    if (config.tablet) {
        mm.add("(min-width: 768px) and (max-width: 1023px)", config.tablet)
    }
    if (config.desktop) {
        mm.add("(min-width: 1024px)", config.desktop)
    }
    if (config.all) {
        mm.add("all", config.all)
    }

    return mm
}
