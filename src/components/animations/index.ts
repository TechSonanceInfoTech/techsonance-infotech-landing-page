// ============================================================================
// ANIMATIONS INDEX - Central export for all animation components
// ============================================================================

// Scroll-triggered animations (Framer Motion)
export {
    // Animated components
    FadeInUp,
    FadeInDown,
    FadeInLeft,
    FadeInRight,
    ScaleIn,
    StaggerContainer,
    StaggerItem,
    BlurFadeIn,
    RevealOnScroll,
    // Animation variants
    fadeInUp,
    fadeInDown,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerContainer,
    staggerItem,
    // Utility hooks
    useScrollProgress,
    useIsMobile
} from "./scroll-animations"

// GSAP ScrollTrigger utilities
export {
    useGSAPScrollTrigger,
    useParallax as useGSAPParallax,
    useGSAPScrollProgress,
    useRevealAnimation,
    usePinnedSection,
    refreshScrollTrigger,
    killAllScrollTriggers,
    createResponsiveAnimation
} from "./gsap-scroll"

// Parallax components
export {
    Parallax,
    ParallaxLayer,
    ParallaxImage,
    ParallaxText,
    StickyParallax,
    CSSParallaxContainer,
    CSSParallaxLayer
} from "./parallax"
