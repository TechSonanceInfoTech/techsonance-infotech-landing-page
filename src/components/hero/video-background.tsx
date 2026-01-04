"use client"

export function VideoBackground() {
  return (
    <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden backface-visibility-hidden translate-z-0">
      {/* Subtle animated orbs for depth - Reduced blur for mobile performance */}
      <div className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-cyan-400/10 rounded-full blur-2xl md:blur-3xl animate-pulse will-change-transform" />
      <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-brand-deep/10 rounded-full blur-2xl md:blur-3xl animate-pulse will-change-transform" style={{ animationDelay: '1s' }} />
      {/* Faint gradient orb behind headline for depth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[200px] md:h-[400px] bg-gradient-to-br from-cyan-200/8 via-brand-deep/8 to-transparent rounded-full blur-[60px] md:blur-[100px] will-change-transform" />
    </div>
  )
}
