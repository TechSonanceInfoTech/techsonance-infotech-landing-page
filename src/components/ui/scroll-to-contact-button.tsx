"use client"

import { ArrowRight } from "lucide-react"

export function ScrollToContactButton() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToContact}
      className="px-8 py-4 bg-brand-cyan text-[#0A1A2F] font-bold rounded-lg hover:bg-brand-cyan/90 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,194,255,0.3)] hover:shadow-[0_0_30px_rgba(0,194,255,0.5)] transform hover:-translate-y-1 cursor-pointer"
    >
      Start Your Project <ArrowRight className="w-4 h-4" />
    </button>
  )
}
