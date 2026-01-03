# Scroll Animations & Parallax Guide

This document explains how to use the animation system in your TechSonance website.

## 📦 Available Components

### Framer Motion Components (Lightweight)

Import from `@/components/animations`:

```tsx
import { 
  FadeInUp, 
  FadeInDown, 
  FadeInLeft, 
  FadeInRight, 
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  BlurFadeIn,
  RevealOnScroll
} from "@/components/animations"
```

### GSAP Hooks (Advanced)

```tsx
import { 
  useGSAPScrollTrigger,
  useGSAPParallax,
  useGSAPScrollProgress,
  useRevealAnimation,
  usePinnedSection
} from "@/components/animations"
```

### Parallax Components

```tsx
import { 
  Parallax,
  ParallaxLayer,
  ParallaxImage,
  ParallaxText,
  StickyParallax
} from "@/components/animations"
```

---

## 🎯 Usage Examples

### 1. Fade-In Animations

```tsx
// Simple fade from bottom
<FadeInUp>
  <h1>Your Content</h1>
</FadeInUp>

// With custom delay and duration
<FadeInUp delay={0.3} duration={0.8}>
  <p>Delayed content</p>
</FadeInUp>

// Fade from different directions
<FadeInLeft className="my-component">
  <div>Slides from left</div>
</FadeInLeft>

<FadeInRight delay={0.2}>
  <div>Slides from right</div>
</FadeInRight>
```

### 2. Staggered Reveals

Perfect for grids and lists:

```tsx
<StaggerContainer staggerDelay={0.1}>
  {items.map((item, i) => (
    <StaggerItem key={i}>
      <Card>{item.title}</Card>
    </StaggerItem>
  ))}
</StaggerContainer>
```

### 3. Premium Effects

```tsx
// Blur + fade effect
<BlurFadeIn delay={0.2}>
  <h2>Premium Headline</h2>
</BlurFadeIn>

// Clip-path reveal
<RevealOnScroll direction="up">
  <img src="/hero.jpg" alt="Hero" />
</RevealOnScroll>
```

### 4. Scale Animation

```tsx
<ScaleIn delay={0.1}>
  <div className="card">
    Scales in smoothly
  </div>
</ScaleIn>
```

---

## 🌊 Parallax Effects

### Basic Parallax

```tsx
// speed: -1 to 1 (negative = slower, positive = faster)
<Parallax speed={0.3}>
  <div className="bg-image">
    Moves 30% faster than scroll
  </div>
</Parallax>

// Disable on mobile for performance
<Parallax speed={0.5} disableOnMobile>
  <img src="/background.jpg" alt="BG" />
</Parallax>
```

### Parallax Image

```tsx
<ParallaxImage 
  src="/hero-bg.jpg" 
  alt="Hero Background"
  speed={0.2}
  className="h-[500px]"
/>
```

### Layered Parallax

```tsx
<div className="relative h-screen">
  <ParallaxLayer speed={0.1} zIndex={0}>
    <div className="background-layer" />
  </ParallaxLayer>
  
  <ParallaxLayer speed={0.3} zIndex={1}>
    <div className="midground-layer" />
  </ParallaxLayer>
  
  <ParallaxLayer speed={0.5} zIndex={2}>
    <div className="foreground-layer" />
  </ParallaxLayer>
</div>
```

---

## 🔧 GSAP Hooks

### useGSAPScrollTrigger

For complex timeline animations:

```tsx
function MyComponent() {
  const { ref, animate } = useGSAPScrollTrigger<HTMLDivElement>()
  
  useEffect(() => {
    animate(
      { opacity: 1, y: 0, duration: 1 },
      { start: "top 80%", toggleActions: "play none none reverse" }
    )
  }, [animate])
  
  return (
    <div ref={ref} style={{ opacity: 0, transform: 'translateY(50px)' }}>
      Content
    </div>
  )
}
```

### useRevealAnimation

For staggered child reveals using CSS selectors:

```tsx
function GridSection() {
  const containerRef = useRevealAnimation('.card', {
    stagger: 0.1,
    y: 50,
    duration: 0.8
  })
  
  return (
    <div ref={containerRef}>
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
      <div className="card">Card 3</div>
    </div>
  )
}
```

### useGSAPParallax

GSAP-powered parallax with ScrollTrigger:

```tsx
function ParallaxSection() {
  const ref = useGSAPParallax<HTMLDivElement>(0.5, {
    disableOnMobile: true,
    maxOffset: 100
  })
  
  return (
    <div ref={ref}>
      <img src="/bg.jpg" alt="Background" />
    </div>
  )
}
```

---

## 📱 Mobile Optimization

All components include mobile optimizations:

### Automatic Disabling

```tsx
// Parallax automatically disabled on mobile
<Parallax speed={0.5} disableOnMobile mobileBreakpoint={768}>
  <Content />
</Parallax>
```

### Reduced Motion Support

All components respect `prefers-reduced-motion`:

```tsx
// Automatically skips animations if user prefers reduced motion
<FadeInUp>
  <p>Accessible by default</p>
</FadeInUp>
```

---

## ⚡ Performance Best Practices

### 1. Use `once: true` for one-time animations

```tsx
<FadeInUp once={true}>  {/* Default */}
  <Content />
</FadeInUp>
```

### 2. Limit parallax intensity on mobile

```tsx
const isMobile = useIsMobile()

<Parallax speed={isMobile ? 0.1 : 0.5}>
  <BackgroundImage />
</Parallax>
```

### 3. Avoid animating heavy DOM elements

```tsx
// ❌ Avoid
<FadeInUp>
  <HeavyTable data={10000rows} />
</FadeInUp>

// ✅ Prefer
<FadeInUp>
  <Wrapper>
    <HeavyTable data={10000rows} />
  </Wrapper>
</FadeInUp>
```

### 4. Use CSS-only parallax for maximum performance

```tsx
import { CSSParallaxContainer, CSSParallaxLayer } from "@/components/animations"

<CSSParallaxContainer perspective={1}>
  <CSSParallaxLayer depth={0.5}>
    <Background />
  </CSSParallaxLayer>
  <CSSParallaxLayer depth={1}>
    <Foreground />
  </CSSParallaxLayer>
</CSSParallaxContainer>
```

### 5. Cleanup GSAP on unmount

```tsx
import { killAllScrollTriggers } from "@/components/animations"

useEffect(() => {
  return () => killAllScrollTriggers()
}, [])
```

---

## 🎨 Animation Variants (for manual use)

```tsx
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "@/components/animations"

<motion.div
  initial="hidden"
  whileInView="visible"
  variants={staggerContainer}
>
  {items.map((item, i) => (
    <motion.div key={i} variants={staggerItem}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## 📝 Quick Reference

| Component | Use Case | Performance |
|-----------|----------|-------------|
| `FadeInUp` | General content reveal | ⭐⭐⭐⭐⭐ |
| `StaggerContainer` | Lists, grids | ⭐⭐⭐⭐⭐ |
| `BlurFadeIn` | Premium sections | ⭐⭐⭐⭐ |
| `Parallax` | Background effects | ⭐⭐⭐⭐ |
| `ParallaxImage` | Hero images | ⭐⭐⭐⭐ |
| `useGSAPScrollTrigger` | Complex timelines | ⭐⭐⭐ |
| `StickyParallax` | Scroll-based stories | ⭐⭐⭐ |
