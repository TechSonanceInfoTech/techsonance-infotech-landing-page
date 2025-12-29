import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { ArrowRight, CheckCircle2, Layers, Server, ShieldCheck, Zap, BarChart3, Users, Clock, Globe, LockIcon, WifiOff, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ConsultancyForm } from "@/components/case-study/consultancy-form"
import { FAQSection } from "@/components/home/faq-section"



// Detailed Case Study Data
const caseStudiesData = {
  "transaction-engine": {
    title: "Custom Modular POS System (PWA)",
    subtitle: "Enterprise Reliability. Startup Agility.",
    category: "Fintech & Hospitality",
    description: "A Progressive Web App (PWA) with 'Offline-First' architecture. We solved the industry-wide 'feature bloat' problem by building a system that adapts to the business—not the other way around.",
    heroImage: "/uploaded_image_1766415117578.png",
    projectInfo: {
      industry: "Hospitality / Retail",
      engineers: "5 Senior Full-Stack",
      duration: "6 Months",
      revenue: "Reduced SaaS Costs by 60%",
    },
    services: [
      "PWA Architecture Strategy",
      "Offline-First Data Syncing (IndexedDB)",
      "React.js Modular Component Design",
      "Node.js Microservices",
      "UX Research for High-Paced Environments",
      "Automated DevOps Pipelines",
    ],
    challenges: "The 'Ferrari for a Grocery Store' Dilemma. \n\nMost existing POS solutions are monolithic giants. They force a small café owner to pay for complex multi-warehouse logistics, HR modules, and global tax compliance features they will never use. This bloat makes the software expensive ($200+/mo), slow to load, and incredibly difficult to train new staff on.\n\nWorse yet, they are 'Cloud-Reliant'. If the restaurant's internet flickers during a Friday night rush, the entire system freezes. Orders stop, billing stops, and chaos ensues.",
    solution: "We didn't just build a lighter app; we re-engineered the core data flow. \n\n1.  The Modular Engine: We built a 'Feature-Flagged' architecture. This means the codebase is modular. A user can toggle 'Table Management' ON and 'Inventory' OFF. The system strictly loads the code bundles for active features, keeping the app lightning fast.\n\n2.  True Offline Capability: We implemented a local-first database using PouchDB (on the device) syncing to CouchDB (on the cloud). Every order is saved locally first. If the internet dies, the waiter doesn't even notice. The app continues to process orders, print tickets, and calculate totals. The second connectivity is restored, our Service Workers silently sync the delta changes to the cloud.",
    features: [
      {
        id: "01",
        title: "Pay-Per-Module",
        description: "Why pay for what you don't use? Businesses select their industry type (e.g., 'Coffee Shop'), and our system automatically hides 80% of the irrelevant enterprise features, reducing monthly costs and UI clutter.",
        image: "/mock-up-1.png"
      },
      {
        id: "02",
        title: "Internet-Proof Operations",
        description: "Built with advanced Service Workers. You can pull the ethernet cable out, and the system keeps running. No 'Connecting...' spinners. No lost sales. 100% data integrity.",
        image: "/mock-up-2.png"
      },
      {
        id: "03",
        title: "Sub-60s Order Velocity",
        description: "We optimized the UX for 'Speed of Thumb'. Common items are prioritized. Modifiers are one tap away. A trained server can punch in a complex party order in under 60 seconds.",
        image: "/pos-laptop.png"
      },
      {
        id: "04",
        title: "Instant Analytics",
        description: "Local data processing means you don't wait for server round-trips to see your sales. Daily totals, bestsellers, and staff performance metrics update instantly on the device.",
        image: "/desktop.png"
      },
      {
        id: "05",
        title: "Cross-Device Freedom",
        description: "As a PWA, this runs on anything. Turn an old iPad, a manager's Android phone, or a desktop PC into a fully functional POS terminal instantly. No App Store approvals needed.",
        image: "/POS-all-devices.png"
      }
    ],
    techStack: ["React PWA", "Node.js", "IndexedDB", "Service Workers", "Redis", "Socket.io"],
    benefits: [
      "100% Uptime Guarantee (Offline Mode)",
      "40% Reduction in Monthly Software Costs",
      "Zero Hardware Lock-in (BYOD)",
      "Instant Onboarding for New Staff"
    ],
    outcomes: "By shifting to a Modular PWA architecture, we transformed the client's product from a 'Generic POS' into a 'Smart Business Engine'. The offline capabilities became their #1 selling point, allowing them to capture market share in areas with unstable internet connectivity.",
    color: "from-orange-500 to-red-500"
  },
  "supply-chain-dashboard": {
    title: "Supply Chain Optimization Dashboard",
    subtitle: "Automating Tax & Inventory at Scale",
    category: "Logistics ERP",
    description: "An enterprise resource planning system with a built-in tax compliance engine. Handles complex multi-warehouse inventory logic, real-time stock forecasting, and automated GST computation.",
    heroImage: "/placeholder-erp.jpg",
    projectInfo: {
      industry: "Logistics & Supply Chain",
      engineers: "4 Engineers",
      duration: "8 Months",
      revenue: "$200k - $500k est. value",
    },
    services: [
      "Process Mapping",
      "Database Schema Design",
      "Python Tax Engine Dev",
      "Next.js Dashboard Dev",
      "Docker Containerization",
    ],
     challenges: "The client struggled with a fragmented inventory across 5 warehouses, leading to overstocking and tax miscalculations. Manual CSV uploads were error-prone and delayed financial reporting by days.",
    solution: "We built a centralized ERP with a real-time ledger. Using Python for complex GST algorithms and PostgreSQL for ACID-compliant transactions, we automated the tax workflow. A Next.js dashboard provides real-time visibility into stock levels across all locations.",
    features: [
      { id: "01", title: "Unified Inventory", description: "Single view of stock across 5 warehouses." },
      { id: "02", title: "Auto-GST Engine", description: "Real-time tax calculation based on HSN codes." },
      { id: "03", title: "Predictive Stocking", description: "AI-driven alerts for low stock based on sales velocity." }
    ],
    techStack: ["Next.js", "PostgreSQL", "Python", "Docker", "Redis"],
    benefits: ["40% Cost Reduction", "100% Tax Accuracy", "Real-time Sync"],
    outcomes: "Eliminated manual data entry errors and reduced month-end closing time from 5 days to 4 hours.",
    color: "from-blue-500 to-cyan-500"
  },
  // ... other items would follow similar structure pattern logic
  "workflow-orchestration": {
      title: "Enterprise Workflow Orchestration",
      subtitle: "Secure Content Governance",
      category: "B2B SaaS",
      description: "A specialized content governance platform designed for technical teams. Implements Role-Based Access Control (RBAC), automated approval pipelines, and secure API architecture.",
      heroImage: "/placeholder-cms.jpg",
       projectInfo: {
        industry: "SaaS / Media",
        engineers: "3 Engineers",
        duration: "5 Months",
        revenue: "Internal Tool",
      },
      services: ["Architecture", "Backend Dev", "Security Audit"],
       challenges: "Enterprise clients needed granular control over content publishing but existing CMS tools lacked specific Role-Based Access Control (RBAC) and audit trails, creating security risks.",
      solution: "We developed a bespoke Content Governance Platform. By implementing graph-based permission models in MongoDB and AWS Lambda for serverless approvals, we created a system where every action is logged, verifiable, and strictly scoped to user roles.",
      features: [{id:"01", title: "RBAC", description: "Deep permission modeling."}],
      techStack: ["TypeScript", "GraphQL", "AWS Lambda", "MongoDB", "Auth0"],
      benefits: ["Secure RBAC", "Audit Log Ready"],
      outcomes: "Streamlined content approval from days to minutes.",
      color: "from-emerald-500 to-teal-500"
  },
    "lms-platform": {
    title: "Interactive LMS Details",
    subtitle: "Scaling Education",
    category: "EdTech Infrastructure",
    description: "A scalable education platform built for high-concurrency video streaming.",
     heroImage: "/placeholder-lms.jpg",
    projectInfo: {
        industry: "Education",
        engineers: "6 Engineers",
        duration: "Ongoing",
        revenue: "$1M+ Scale",
      },
    services: ["Streaming Arch", "Frontend Dev"],
    challenges: "As user base grew to 10k+, standard video hosting costs skyrocketed and latency issues disrupted live classes.",
    solution: "We migrated to a microservices architecture. We implemented adaptive bitrate streaming via a custom CDN.",
    features: [{id:"01", title: "Adaptive Streaming", description: "buffer-free video"}],
    techStack: ["React", "Firebase", "WebRTC", "Cloud Functions"],
    benefits: ["10k+ Concurrent Users"],
    outcomes: "Reduced hosting costs by 60% while improving video quality.",
    color: "from-indigo-500 to-purple-500"
  }
}

type Slug = keyof typeof caseStudiesData

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const slug = resolvedParams.slug as Slug
  const data = caseStudiesData[slug]

  if (!data) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* 1. Hero Section (Fintwit Style) */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden border-b border-slate-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider">
                 {data.category}
               </div>
               <h1 className="text-5xl md:text-6xl font-bold text-brand-dark leading-tight">
                 {data.title}
               </h1>
               <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                 {data.description}
               </p>
               <div className="flex gap-4 pt-4">
                 <Link href="#consultancy-section" className="px-8 py-3 bg-gradient-to-r from-brand-dark to-[#00A9E0] text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-brand-cyan/20 transition-all shadow-lg shadow-brand-dark/10">
                   Estimate Project
                 </Link>
                 <Link href="/contact" className="px-8 py-3 bg-white text-brand-dark border border-slate-200 font-semibold rounded-lg hover:border-brand-dark transition-colors">
                   Contact Us
                 </Link>
               </div>
            </div>
            
            {/* Right Image Placeholder (Mockup) */}
            <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center group perspective-1000">
                 {/* Decorative Background Blob */}
                 <div className={`absolute inset-4 bg-gradient-to-br ${data.color} opacity-20 blur-[60px] rounded-full scale-90 group-hover:scale-105 transition-transform duration-1000`} />
                 
                 <div className="relative w-full h-full transform group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                     <Image 
                       src="/mock-up-3.png" 
                       alt="Project Mockup" 
                       fill 
                       className="object-contain drop-shadow-2xl z-10"
                     />
                     
                     {/* Glassmorphism Overlay Card (Floating UI) */}
                     <div className="absolute bottom-10 -left-4 md:-left-10 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 min-w-[240px] z-20 transform transition-transform duration-500 hover:scale-105">
                        <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                           <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Connection Lost</span>
                           <div className="flex gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                           </div>
                        </div>
                        <div className="flex items-center gap-3 mb-1">
                           <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                              <Zap className="w-5 h-5 fill-current" />
                           </div>
                           <div>
                              <div className="text-lg font-bold text-brand-dark leading-none">System Active</div>
                              <div className="text-[10px] text-emerald-600 font-bold mt-0.5">ZERO DOWNTIME</div>
                           </div>
                        </div>
                     </div>

                     {/* Second Floating Element */}
                     <div className="absolute top-10 -right-4 md:-right-8 bg-brand-dark text-white p-4 rounded-2xl shadow-xl z-20 max-w-[180px] transform transition-transform duration-700 delay-100 group-hover:translate-x-2">
                        <div className="flex items-center gap-2 mb-1">
                           <LockIcon className="w-4 h-4 text-emerald-400" />
                           <span className="text-xs font-bold text-slate-300 uppercase">Security</span>
                        </div>
                         <div className="text-sm font-semibold">End-to-End Encrypted</div>
                     </div>
                 </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Row */}
      <section className="border-b border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 py-8">
             <StatItem label="Industry" value={data.projectInfo.industry} icon={Globe} />
             <StatItem label="Engineers" value={data.projectInfo.engineers} icon={Users} />
             <StatItem label="Duration" value={data.projectInfo.duration} icon={Clock} />
             <StatItem label="Revenue Impact" value={data.projectInfo.revenue} icon={BarChart3} />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Challenges & Solutions (Unique Staggered Layout) */}
            <section className="relative py-12">
               <div className="flex flex-col gap-16 relative">
                  
                  {/* Decorative Connection Line (Visible on Desktop) */}
                  <div className="absolute left-1/2 top-40 bottom-40 w-px bg-slate-100 hidden md:block">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-slate-100 bg-white" />
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-slate-100 bg-white" />
                  </div>

                  {/* The Challenge - Staggered Left */}
                  <div className="relative group md:w-5/6">
                    <div className="absolute -inset-4 bg-red-50/50 rounded-[40px] -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="bg-white p-10 md:p-12 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-100/50 relative overflow-hidden">
                       <div className="flex items-start gap-6 mb-8">
                          <div className="p-4 bg-red-50 text-red-500 rounded-2xl rotate-[-10deg] group-hover:rotate-0 transition-transform duration-500">
                            <ShieldCheck className="w-8 h-8" />
                          </div>
                          <div>
                            <span className="text-red-500 font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Pain Point</span>
                            <h3 className="text-3xl font-bold text-brand-dark">The Challenge</h3>
                          </div>
                       </div>
                       <div className="space-y-6 max-w-2xl">
                          {data.challenges.split('\n\n').map((para, i) => (
                            <p key={i} className="text-slate-600 text-lg leading-relaxed">{para}</p>
                          ))}
                       </div>
                    </div>
                  </div>

                  {/* The Solution - Staggered Right */}
                  <div className="relative group md:w-5/6 md:ml-auto">
                    <div className="absolute -inset-4 bg-emerald-50/50 rounded-[40px] -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="bg-white p-10 md:p-12 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden border-t-4 border-t-emerald-500">
                       <div className="flex items-start gap-6 mb-8">
                          <div className="p-4 bg-emerald-50 text-emerald-500 rounded-2xl rotate-[10deg] group-hover:rotate-0 transition-transform duration-500">
                            <Zap className="w-8 h-8" />
                          </div>
                          <div>
                            <span className="text-emerald-500 font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Engineered Fix</span>
                            <h3 className="text-3xl font-bold text-brand-dark">The Solution</h3>
                          </div>
                       </div>
                       <div className="space-y-6 max-w-2xl">
                          {data.solution.split('\n\n').map((para, i) => (
                            <p key={i} className="text-slate-600 text-lg leading-relaxed">{para}</p>
                          ))}
                       </div>
                       {/* Subtle Background Accent */}
                       <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl opacity-50" />
                    </div>
                  </div>

               </div>
            </section>

            {/* Features (Alternating Layout - Fintwit Style) */}
            <section>
              <h2 className="text-3xl font-bold text-brand-dark mb-16">Features of Solution</h2>
              <div className="space-y-24">
                {data.features?.map((feature, i) => (
                  <div key={feature.id} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                    
                    {/* Text Side */}
                    <div className="flex-1 space-y-6">
                       <span className={`text-6xl font-black text-slate-100 block`}>
                         {feature.id}
                       </span>
                       <h3 className="text-2xl font-bold text-brand-dark">
                         {feature.title}
                       </h3>
                       <p className="text-lg text-slate-600 leading-relaxed">
                         {feature.description}
                       </p>
                    </div>

                    {/* Image Side (Mockup) */}
                    <div className="flex-1">
                       <div className="relative aspect-[4/3] bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden flex items-center justify-center group hover:border-brand-cyan/30 transition-colors shadow-2xl shadow-slate-200/50">
                          {feature.image ? (
                            <Image 
                              src={feature.image} 
                              alt={feature.title} 
                              fill 
                              className="object-contain group-hover:scale-110 transition-transform duration-700"
                            />
                          ) : (
                            <>
                              <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                              <div className="text-center p-6">
                                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm mx-auto mb-3 flex items-center justify-center">
                                    <Layers className="w-8 h-8 text-slate-300" />
                                 </div>
                                 <p className="text-xs font-bold uppercase text-slate-400">Mockup {i + 1}</p>
                              </div>
                            </>
                          )}
                       </div>
                    </div>

                  </div>
                ))}
              </div>
            </section>

             {/* Tech Stack */}
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Tech Stack Used</h2>
              <div className="flex flex-wrap gap-4">
                {data.techStack.map((tech, i) => (
                  <div key={i} className="px-6 py-4 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center justify-center">
                     <span className="font-semibold text-brand-dark">{tech}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
             <section className="bg-slate-50 rounded-3xl p-10 border border-slate-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-8 w-1 bg-brand-cyan rounded-full"/>
                  <h2 className="text-2xl font-bold text-brand-dark">Key Benefits</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.benefits?.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4">
                       <div className="p-1 rounded-full bg-emerald-100 text-emerald-600 mt-0.5">
                         <CheckCircle2 className="w-4 h-4" />
                       </div>
                       <span className="text-slate-700 font-medium leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
             </section>

            {/* Final Outcomes */}
            <section className="bg-brand-dark text-white p-10 md:p-14 rounded-3xl relative overflow-hidden">
                <div className="relative z-10 text-center">
                   <h2 className="text-3xl md:text-4xl font-bold mb-6">Final Outcomes</h2>
                   <p className="text-slate-300 leading-relaxed text-lg mb-10 max-w-2xl mx-auto">
                     {data.outcomes}
                   </p>
                   
                   <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[32px] max-w-lg w-full">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-brand-cyan" />
                      </div>
                      <h4 className="font-bold text-3xl mb-4">Ready to Start?</h4>
                      <p className="text-slate-300 mb-10 text-lg">Join the roadmap to digital transformation with a team that actually cares about your growth.</p>
                      <Link href="#consultancy-section" className="inline-block px-12 py-5 bg-white text-brand-dark font-bold text-xl rounded-full hover:bg-brand-cyan hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95 border-2 border-transparent hover:border-white/50">
                        Let's Talk Business
                      </Link>
                   </div>
                </div>
                 <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${data.color} opacity-20 blur-[100px] rounded-full point-events-none`} />
                 <div className={`absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr ${data.color} opacity-20 blur-[80px] rounded-full point-events-none`} />
            </section>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-12">
             {/* Service Provided List */}
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 sticky top-24">
                <h3 className="text-xl font-bold text-brand-dark mb-6">Services Provided</h3>
                <div className="space-y-4">
                  {data.services?.map((service, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                       <div className="w-8 h-8 rounded-full bg-brand-cyan/10 flex items-center justify-center text-xs font-bold text-brand-cyan">
                         {i + 1}
                       </div>
                       <span className="font-medium text-slate-700">{service}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>

        </div>
      </div>
      
      {/* Our Works Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
           <div className="flex justify-between items-end mb-12">
              <div>
                  <h2 className="text-4xl font-bold text-brand-dark mb-4">Our Works</h2>
                  <p className="text-slate-600 max-w-xl">Explore other enterprise solutions we have engineered.</p>
              </div>
              <Link href="/" className="text-brand-cyan font-bold hover:underline">View All Projects</Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Simple cards linking to other studies */}
               {Object.entries(caseStudiesData).filter(([key]) => key !== slug).slice(0, 3).map(([key, study]) => (
                 <Link key={key} href={`/case-studies/${key}`} className="group block bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                    <div className="aspect-video bg-slate-100 rounded-xl mb-4 overflow-hidden relative">
                         <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-10`} />
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-cyan transition-colors">{study.title}</h3>
                    <p className="text-slate-500 text-sm mt-2 line-clamp-2">{study.description}</p>
                 </Link>
               ))}
           </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Contact Form Section */}
      <section id="consultancy-section" className="bg-white scroll-mt-24">
        <div className="container mx-auto px-4 py-20">
          <div className="bg-brand-dark rounded-[40px] overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side: Content */}
              <div className="p-10 md:p-16 flex flex-col justify-center text-white relative lg:border-r border-white/10">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cyan/20 rounded-full text-brand-cyan text-sm font-bold uppercase mb-8 border border-brand-cyan/30">
                    <Sparkles className="w-4 h-4" /> Ready to Build?
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                    Let's turn your requirements into a deployed reality.
                  </h2>
                  <p className="text-xl text-slate-300 mb-8 max-w-md">
                    Take the first step towards your high-performance software solution. Our experts are ready to consult on your unique challenges.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Free technical consultation",
                      "Custom project roadmap",
                      "NDA Protected Architecture"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        </div>
                        <span className="text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Side: Form */}
              <div className="p-10 md:p-16 bg-slate-900/30">
                 <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Get A FREE Consultancy Today!</h2>
                    <p className="text-slate-400 text-lg">Tell us about your project and get a custom roadmap.</p>
                 </div>
                 <ConsultancyForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function StatItem({ label, value, icon: Icon }: any) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <div className="mb-3 p-2 bg-brand-cyan/10 rounded-full text-brand-cyan">
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-xs font-bold uppercase text-slate-400 mb-1 tracking-wider">{label}</span>
      <span className="text-brand-dark font-bold text-lg">{value}</span>
    </div>
  )
}
