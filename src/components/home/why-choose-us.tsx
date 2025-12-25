"use client"

import { motion } from "framer-motion"
import { 
  Rocket, 
  Layout, 
  Users, 
  Wallet, 
  Zap, 
  CheckCircle2,
  LucideIcon 
} from "lucide-react"

// Enhanced content for Techsonance Infotech LLP
const features = [
  {
    icon: Rocket,
    title: "Strategic Vision & Roadmap",
    description: "We don't just write code; we architect success. By leveraging industry-leading tools like Jira and GitHub, we craft progressive roadmaps that keep your goals in clear focus and your milestones on track.",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: Layout,
    title: "Streamlined Execution",
    description: "Efficiency isn't just a buzzword—it's our protocol. Our agile methodologies and precise project management ensure seamless execution, delivering complex solutions with clarity and speed.",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: Users,
    title: "Tailored Engagement",
    description: "Your business is unique, and your engagement model should be too. Whether you need a dedicated team or a project-based squad, we adapt our workflow to fit your specific operational needs.",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    icon: Wallet,
    title: "Value-Driven Excellence",
    description: "Premium quality shouldn't come with an exorbitant price tag. We engineer cost-effective, high-impact solutions that maximize your ROI without compromising on performance or aesthetics.",
    gradient: "from-amber-400 to-orange-500"
  },
  {
    icon: Zap,
    title: "Unwavering Reliability",
    description: "In a fast-paced digital world, consistency is currency. We pride ourselves on delivering fully-featured, bug-free projects before the deadline, every single time.",
    gradient: "from-rose-500 to-pink-500"
  }
]

export function WhyChooseUs() {
  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 xl:py-32 bg-white overflow-hidden">
      {/* Background Decor - Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Background Decor - Gradient Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[40rem] h-[40rem] bg-brand-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-brand-deep/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-brand-cyan/50" />
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-[0.2em]">
              The Techsonance Advantage
            </span>
            <span className="h-px w-8 bg-brand-cyan/50" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-deep">Techsonance?</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            We merge technical expertise with business intelligence to build digital products that scale, perform, and inspire.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              {...feature}
            />
          ))}
          
          {/* Detailed Call to Action Card (Fills the last slot nicely) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col justify-center items-center p-8 rounded-3xl bg-brand-dark text-white text-center relative overflow-hidden group"
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-deep to-brand-dark z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,194,255,0.2),transparent_50%)] z-0" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-4 md:mb-6 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-brand-cyan" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Ready to Start?</h3>
              <p className="text-slate-300 mb-6 md:mb-8 text-sm leading-relaxed">
                Join the roadmap to digital transformation with a team that actually cares about your growth.
              </p>
              <button className="px-8 py-3 rounded-xl bg-white text-brand-dark font-bold hover:bg-brand-cyan hover:text-white transition-all duration-300 shadow-lg shadow-white/5 active:scale-95">
                Let's Talk Business
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  gradient,
  index 
}: { 
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative h-full bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:shadow-xl hover:shadow-brand-cyan/5"
    >
      {/* Hover Gradient Border Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Icon Container */}
      <div className={`w-12 h-12 md:w-14 md:h-14 mb-4 md:mb-6 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </div>

      <h3 className="text-lg md:text-xl font-bold text-brand-dark mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-dark group-hover:to-brand-cyan transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-slate-600 leading-relaxed text-[15px]">
        {description}
      </p>
    </motion.div>
  )
}
