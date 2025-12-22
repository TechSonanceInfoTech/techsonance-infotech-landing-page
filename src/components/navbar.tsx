"use client"

import * as React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site"
import { hireDevelopersConfig } from "@/config/hire-developers"
import { Button } from "@/components/ui/button"
import { ChevronDown, Laptop, Server, Smartphone, Layers } from "lucide-react" 
import { QuoteModal } from "@/components/quote-modal"

// Icon map helper
const iconMap: any = {
  laptop: Laptop,
  server: Server,
  smartphone: Smartphone,
  layers: Layers
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isQuoteOpen, setIsQuoteOpen] = React.useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = React.useState<string | null>(null) // Track active menu

  const pathname = usePathname()

  // Desktop Hover Handlers
  const handleMouseEnter = (label: string) => {
    setActiveMegaMenu(label)
  }
  
  const handleMouseLeave = () => {
    setActiveMegaMenu(null)
  }

  return (
    <>
      <header className="fixed top-0 w-full z-50 border-b border-white/20 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6 relative">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo */}
            <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/logo.png" 
                alt={`${siteConfig.name} Logo`} 
                className="w-full h-full object-contain relative z-10 drop-shadow-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-xl md:text-2xl tracking-tight text-slate-900 leading-none">
                TechSonance
              </span>
              <span className="text-xs md:text-sm font-medium text-slate-700 tracking-[0.2em] uppercase leading-none mt-1 group-hover:text-slate-900 transition-colors duration-300">
                InfoTech LLP
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center h-full">
            {siteConfig.navItems.filter((i: any) => i.label !== 'Home').map((item: any) => (
              <div 
                key={item.href} 
                className="relative h-full flex items-center"
                onMouseEnter={() => item.isMegaMenu && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative group flex items-center gap-1
                    ${pathname === item.href ? "text-brand-cyan" : "text-slate-700 hover:text-cyan-600"}`}
                >
                  {item.label}
                  {item.isMegaMenu && <ChevronDown className="w-4 h-4 mt-0.5 group-hover:rotate-180 transition-transform duration-300" />}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-brand-cyan to-brand-deep transition-all duration-300 
                    ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}`} 
                  />
                </Link>

                {/* Mega Menu Dropdown */}
                {item.isMegaMenu && activeMegaMenu === item.label && (
                   <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-b-2xl shadow-2xl border-t-2 border-brand-cyan overflow-hidden p-8 grid grid-cols-4 gap-8 animate-in fade-in slide-in-from-top-2 duration-200">
                      {hireDevelopersConfig.categories.map((cat) => {
                        const Icon = iconMap[cat.icon] || Layers
                        return (
                          <div key={cat.title} className="space-y-4">
                             <div className="flex items-center gap-2 text-brand-cyan font-bold text-base border-b border-slate-100 pb-2">
                                <Icon className="w-5 h-5" />
                                {cat.title}
                             </div>
                             <ul className="space-y-2">
                               {cat.items.map((subItem) => (
                                 <li key={subItem.slug}>
                                   <Link 
                                     href={`/hire/${subItem.slug}`}
                                     className="text-sm text-slate-600 hover:text-brand-cyan hover:translate-x-1 transition-all block"
                                   >
                                     {subItem.label.replace('Hire ', '')}
                                   </Link>
                                 </li>
                               ))}
                             </ul>
                          </div>
                        )
                      })}
                   </div>
                )}
              </div>
            ))}
            <Button 
              onClick={() => setIsQuoteOpen(true)}
              className="bg-gradient-to-r from-brand-cyan to-brand-deep text-white border-0 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 rounded-full px-6 font-semibold"
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-700 hover:text-brand-cyan transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <div className="w-6 h-6">✕</div> : <div className="w-6 h-6">☰</div>}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-white/20 shadow-xl backdrop-blur-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 max-h-[85vh] overflow-y-auto">
            {siteConfig.navItems.filter((i: any) => i.label !== 'Home').map((item: any) => (
              <div key={item.href} className="border-b border-slate-100 last:border-0 pb-2">
                {item.isMegaMenu ? (
                  <div className="space-y-2">
                    <div className="text-lg font-medium text-slate-900 py-2">
                      {item.label}
                    </div>
                    {/* Mobile Accordion for Mega Menu */}
                    <div className="pl-4 space-y-4">
                      {hireDevelopersConfig.categories.map((cat) => (
                         <div key={cat.title}>
                           <div className="text-sm font-bold text-brand-cyan mb-2 uppercase tracking-wider">{cat.title}</div>
                           <div className="grid grid-cols-1 gap-2 border-l-2 border-brand-cyan/20 pl-3">
                              {cat.items.map((subItem) => (
                                <Link
                                   key={subItem.slug}
                                   href={`/hire/${subItem.slug}`}
                                   className="text-sm text-slate-600 hover:text-brand-cyan"
                                   onClick={() => setIsMenuOpen(false)}
                                >
                                   {subItem.label.replace('Hire ', '')}
                                </Link>
                              ))}
                           </div>
                         </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-lg font-medium text-slate-700 hover:text-cyan-600 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2 pb-10">
              <Button 
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsQuoteOpen(true)
                }}
                className="w-full bg-gradient-to-r from-brand-cyan to-brand-deep text-white border-0 shadow-lg shadow-cyan-500/30 py-6 rounded-xl font-bold text-lg"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </header>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  )
}
