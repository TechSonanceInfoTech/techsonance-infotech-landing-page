"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Why Choose Us As Your Software Development Company In India?",
    answer: "Tagline Infotech stands out by delivering world-class software solutions with a focus on quality, innovation, and client satisfaction. Our diverse talent pool in India allows us to offer premium development services at competitive rates, ensuring you get the best ROI without compromising on performance or scalability."
  },
  {
    question: "How Much Does Custom Software Cost?",
    answer: "The cost of custom software varies based on factors such as the type of technology used, the skills and experience of the developers, and the unique features required to make your project stand out. Rest assured, our pricing is fair and competitive, while maintaining the high quality of our work. The estimated cost starts at $10 per hour or $1600 per month."
  },
  {
    question: "What Software Development Method Do You Use?",
    answer: "We primarily use the Agile software development methodology. This iterative approach allows for flexibility, faster delivery times, and continuous feedback. We break projects into manageable sprints, ensuring transparency and enabling us to adapt to your evolving business needs efficiently."
  },
  {
    question: "How Do You Keep My Ideas And Data Safe?",
    answer: "Security is our top priority. We sign Non-Disclosure Agreements (NDAs) to legally protect your intellectual property. Our development environment follows strict security protocols, including encrypted data transmission, secure code repositories, and restricted access controls to safeguard your sensitive information."
  },
  {
    question: "Can You Help With Updates And Maintenance?",
    answer: "Absolutely. Software development is a journey, not a destination. We offer comprehensive post-launch support and flexible maintenance packages. Whether it's security patches, feature enhancements, or OS updates, our team ensures your application remains robust, secure, and up-to-date."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
        {/* Decorative elements */}
      <div className="absolute -left-20 top-40 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-20 w-80 h-80 bg-brand-deep/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-4 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-brand-cyan/10 text-brand-cyan">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about working with Techsonance.
          </p>
        </motion.div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              {...faq} 
              index={index} 
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer, index, isOpen, onClick }: { question: string, answer: string, index: number, isOpen: boolean, onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`border rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen ? "border-brand-cyan/30 bg-brand-cyan/5 shadow-lg shadow-brand-cyan/5" : "border-slate-200 bg-white hover:border-brand-cyan/30"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 md:p-5 lg:p-6 text-left focus:outline-none touch-target"
      >
        <span className={`text-base md:text-lg font-bold transition-colors ${isOpen ? "text-brand-dark" : "text-slate-700"}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 p-1 rounded-full border transition-all duration-300 ${
            isOpen ? "bg-brand-cyan border-brand-cyan text-white rotate-180" : "bg-transparent border-slate-300 text-slate-500 hover:border-brand-cyan hover:text-brand-cyan"
        }`}>
            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-5 lg:px-6 pb-4 md:pb-5 lg:pb-6 pt-0 text-sm md:text-base text-slate-600 leading-relaxed border-t border-transparent">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
