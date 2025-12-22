
import { ServiceData } from "@/config/services"
import { CheckCircle2, BarChart3, PieChart, TrendingUp, ArrowUpRight, Database, Search, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ConsultancyForm } from "@/components/forms/consultancy-form"

export function DataAnalyticsLayout({ service }: { service: ServiceData }) {
  // Helper to get icons safely
  const FeatureIcon1 = service.features[0].icon;
  const FeatureIcon2 = service.features[1].icon;
  const FeatureIcon3 = service.features[2].icon;
  const FeatureIcon4 = service.features[3].icon;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-cyan-100">
      <Navbar />

      {/* Hero: Asymmetrical Dashboard Split */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
         <div className="absolute top-0 right-0 w-[60%] h-full bg-[#0A1A2F] text-white rounded-bl-[100px] shadow-2xl shadow-slate-200/50 -z-10 hidden lg:block" />
         
         <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 text-brand-cyan text-xs font-bold uppercase mb-8 border border-cyan-100">
                     <BarChart3 className="w-4 h-4" />
                     Data Intelligence
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                    Turn Raw Data Into <br />
                    <span className="relative inline-block">
                        <span className="relative z-10 text-brand-cyan">Strategic Assets</span>
                        <span className="absolute bottom-2 left-0 w-full h-3 bg-cyan-100/50 -z-0"></span>
                    </span>
                  </h1>
                  <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-lg">
                    {service.shortDescription}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                     <a href="#contact" className="px-8 py-4 bg-[#0A1A2F] text-white font-medium rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
                        Get Insights
                        <ArrowUpRight className="w-4 h-4" />
                     </a>
                  </div>
               </div>

               {/* Visual: Floating Dashboard Cards (Bento Style) */}
               <div className="relative h-[600px] w-full hidden md:block">
                  {/* Card 1: Main Graph */}
                  <div className="absolute top-10 left-10 w-[400px] bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 z-20 hover:scale-105 transition-transform duration-500">
                     <div className="flex justify-between items-center mb-6">
                        <div>
                           <div className="text-sm text-slate-400 font-medium">Monthly Revenue</div>
                           <div className="text-3xl font-bold text-slate-900">$124,500</div>
                        </div>
                        <div className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded text-sm font-bold flex items-center gap-1">
                           <TrendingUp className="w-3 h-3" /> +12%
                        </div>
                     </div>
                     {/* CSS Bar Chart */}
                     <div className="flex items-end gap-3 h-32">
                        <div className="w-full bg-slate-50 rounded-t-lg h-[40%] hover:bg-brand-cyan transition-colors"></div>
                        <div className="w-full bg-slate-50 rounded-t-lg h-[60%] hover:bg-brand-cyan transition-colors"></div>
                        <div className="w-full bg-slate-50 rounded-t-lg h-[30%] hover:bg-brand-cyan transition-colors"></div>
                        <div className="w-full bg-slate-50 rounded-t-lg h-[80%] hover:bg-brand-cyan transition-colors"></div>
                        <div className="w-full bg-[#0A1A2F] rounded-t-lg h-[95%] shadow-lg shadow-blue-900/30"></div>
                     </div>
                  </div>

                  {/* Card 2: Pie Chart / Segments - floating right */}
                  <div className="absolute top-40 right-0 w-[280px] bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 z-10 hover:scale-105 transition-transform duration-500 delay-100">
                      <div className="text-sm text-slate-400 font-medium mb-4">User Demographics</div>
                      <div className="flex items-center gap-4">
                         <div className="w-20 h-20 rounded-full border-[6px] border-brand-cyan border-r-cyan-200 border-b-cyan-200 rotate-45"></div>
                         <div className="text-sm space-y-1">
                            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-cyan"></div> New</div>
                            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-200"></div> Returning</div>
                         </div>
                      </div>
                  </div>

                  {/* Card 3: Data Source Badge - bottom left */}
                  <div className="absolute bottom-20 left-0 bg-[#0A1A2F] text-white p-6 rounded-3xl shadow-2xl shadow-blue-900/30 z-30 flex items-center gap-4 hover:scale-105 transition-transform duration-500 delay-200">
                      <div className="bg-white/10 p-3 rounded-xl">
                         <Database className="w-6 h-6 text-brand-cyan" />
                      </div>
                      <div>
                         <div className="font-bold">Real-time Sync</div>
                         <div className="text-xs text-slate-400">PostgreSQL • Snowflake • AWS</div>
                      </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Features - Bento Grid Layout */}
      <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
             <div className="max-w-2xl mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Unlocking The Value of Information</h2>
                <p className="text-lg text-slate-500">{service.fullDescription}</p>
             </div>

             <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
                {/* Feature 1 - Large Tall */}
                <div className="md:row-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100 group hover:border-cyan-200 transition-colors">
                    <div className="bg-white w-12 h-12 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <FeatureIcon1 className="w-6 h-6 text-[#0A1A2F]" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{service.features[0].title}</h3>
                    <p className="text-slate-500 leading-relaxed mb-8">{service.features[0].description}</p>
                    <div className="h-40 bg-white rounded-xl border border-dashed border-slate-200 w-full relative overflow-hidden">
                       <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-cyan-50 to-transparent"></div>
                       <div className="absolute bottom-4 left-4 right-4 h-2 bg-slate-100 rounded"></div>
                       <div className="absolute bottom-8 left-4 right-12 h-2 bg-slate-100 rounded"></div>
                       <div className="absolute bottom-12 left-4 right-8 h-2 bg-slate-100 rounded"></div>
                    </div>
                </div>

                {/* Feature 2 - Wide */}
                <div className="md:col-span-2 bg-[#0A1A2F] rounded-3xl p-8 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-center">
                        <div>
                             <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-brand-cyan">
                                <FeatureIcon2 className="w-6 h-6" />
                             </div>
                             <h3 className="text-xl font-bold mb-2">{service.features[1].title}</h3>
                             <p className="text-slate-300 max-w-md">{service.features[1].description}</p>
                        </div>
                   </div>
                </div>

                {/* Feature 3 - Standard */}
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                     <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <FeatureIcon3 className="w-5 h-5 text-brand-cyan" />
                        {service.features[2].title}
                     </h3>
                     <p className="text-sm text-slate-500">{service.features[2].description}</p>
                </div>

                 {/* Feature 4 - Standard */}
                 <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                     <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <FeatureIcon4 className="w-5 h-5 text-brand-cyan" />
                        {service.features[3].title}
                     </h3>
                     <p className="text-sm text-slate-500">{service.features[3].description}</p>
                </div>
             </div>
          </div>
      </section>

      {/* Process - "Data Pipeline" Horizontal Scroll/Steps */}
      <section className="py-24 px-6 bg-slate-900 text-white">
         <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-16 text-center">The Data Pipeline</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
               {service.process.map((step, idx) => (
                  <div key={idx} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="text-4xl font-bold text-slate-700 mb-4">{step.step}</div>
                      <h3 className="text-xl font-bold mb-2 text-blue-400">{step.title}</h3>
                      <p className="text-sm text-slate-400">{step.description}</p>
                      
                      {idx < service.process.length - 1 && (
                         <ArrowRight className="hidden md:block absolute top-1/2 -right-6 w-8 h-8 text-slate-700 -translate-y-1/2 z-10" />
                      )}
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Case Study - Paper Report Style */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
          <div className="container mx-auto max-w-4xl">
              <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-slate-200 relative">
                  {/* Paper clip effect (CSS) */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-slate-200 rounded-lg shadow-inner"></div>

                  <div className="flex justify-between items-start border-b border-slate-100 pb-8 mb-8">
                      <div>
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Internal Report</div>
                          <h2 className="text-3xl font-bold text-slate-900">{service.caseStudy.title}</h2>
                      </div>
                      <div className="hidden md:block text-right">
                          <div className="text-sm text-slate-500">Client Industry</div>
                          <div className="font-bold text-slate-900">{service.caseStudy.clientIndustry}</div>
                      </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 mb-12">
                      <div className="prose prose-sm">
                          <h4 className="text-slate-900 font-bold mb-2">Problem Statement</h4>
                          <p className="text-slate-600 bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                             {service.caseStudy.challenge}
                          </p>
                      </div>
                       <div className="prose prose-sm">
                          <h4 className="text-slate-900 font-bold mb-2">Our Solution</h4>
                          <p className="text-slate-600 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                             {service.caseStudy.solution}
                          </p>
                      </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-8">
                       <h4 className="text-center font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Quantifiable Results</h4>
                       <div className="grid sm:grid-cols-3 gap-6 text-center">
                          {service.caseStudy.results.map((res, i) => (
                             <div key={i} className="flex flex-col items-center">
                                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
                                    <CheckCircle2 className="w-5 h-5" />
                                 </div>
                                 <div className="text-sm font-medium text-slate-700">{res}</div>
                             </div>
                          ))}
                       </div>
                  </div>
              </div>
          </div>
      </section>

      {/* CTA */}
       <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Make Better Decisions</h2>
            <ConsultancyForm serviceName={service.title} />
        </div>
      </section>
    </div>
  )
}
