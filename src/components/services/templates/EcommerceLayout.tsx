
import { ServiceData } from "@/config/services"
import { CheckCircle2, ShoppingCart, CreditCard, TrendingUp, Package, Globe, ArrowRight, Zap, ShoppingBag } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ConsultancyForm } from "@/components/forms/consultancy-form"

export function EcommerceLayout({ service }: { service: ServiceData }) {
  // Helper to get icons safely
  const FeatureIcon1 = service.features[0].icon;
  const FeatureIcon2 = service.features[1].icon;
  const FeatureIcon3 = service.features[2].icon;
  const FeatureIcon4 = service.features[3].icon;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-100">
      <Navbar />

      {/* Hero: Minimal High-End Fashion Store Vibe */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">
         <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
               <div className="flex-1">
                  <div className="inline-block border-b-2 border-brand-cyan pb-1 mb-6 text-[#0A1A2F] font-bold tracking-widest text-xs uppercase">
                      From Visitor to Customer
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold text-[#0A1A2F] mb-8 leading-none tracking-tight font-display">
                    Commerce <br />
                    <span className="text-slate-400">Reimagined.</span>
                  </h1>
                  <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5">
                      <a href="#contact" className="px-8 py-4 bg-[#0A1A2F] text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-blue-900/20">
                        Launch Store
                      </a>
                  </div>
               </div>

               {/* Visual: Abstract Product/Cart Interaction */}
               <div className="flex-1 relative w-full h-[500px] flex items-center justify-center">
                   {/* Circle Background */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-100 rounded-full -z-10"></div>
                   
                   {/* Product Card */}
                   <div className="relative w-72 h-96 bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-6 flex flex-col z-20 hover:-translate-y-2 transition-transform duration-500">
                      <div className="w-full h-48 bg-slate-100 rounded-2xl mb-6 relative overflow-hidden group">
                           <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
                           <div className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                               <ShoppingBag className="w-4 h-4 text-[#0A1A2F]" />
                           </div>
                      </div>
                      <div className="flex-1">
                          <div className="h-4 w-3/4 bg-slate-100 rounded mb-2"></div>
                          <div className="h-8 w-1/2 bg-slate-100 rounded mb-4"></div>
                          <div className="flex justify-between items-center mt-auto">
                              <div className="bg-cyan-50 text-brand-cyan px-3 py-1 rounded-full text-xs font-bold">In Stock</div>
                              <div className="bg-black text-white px-4 py-2 rounded-xl text-sm font-bold">Buy Now</div>
                          </div>
                      </div>
                   </div>

                   {/* Payment Card floating */}
                   <div className="absolute bottom-20 left-10 bg-white p-4 rounded-2xl shadow-xl z-30 animate-bounce-slow border border-slate-100">
                       <div className="flex items-center gap-3">
                           <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600">
                               <CheckCircle2 className="w-5 h-5" />
                           </div>
                           <div>
                               <div className="text-xs text-slate-500">Payment Verified</div>
                               <div className="font-bold text-sm">$249.00</div>
                           </div>
                       </div>
                   </div>

                   {/* Stats Floating */}
                    <div className="absolute top-20 right-10 bg-[#0A1A2F] text-white p-4 rounded-2xl shadow-xl z-10 rotate-3">
                       <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">Conversion Rate</div>
                       <div className="text-2xl font-bold flex items-center gap-2">
                           4.2% <TrendingUp className="w-4 h-4 text-brand-cyan" />
                       </div>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* Features - Conversion Funnel Grid */}
      <section className="py-24 px-6">
         <div className="container mx-auto max-w-6xl">
             <div className="text-center mb-20">
                 <h2 className="text-3xl font-bold mb-4 text-[#0A1A2F]">Built for Transactions</h2>
                 <p className="text-slate-500 max-w-2xl mx-auto">{service.fullDescription}</p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                    <div className="w-14 h-14 bg-cyan-50 rounded-full flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 transition-transform">
                        <FeatureIcon1 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-[#0A1A2F]">{service.features[0].title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{service.features[0].description}</p>
                </div>
                {/* Repeat manual mapping to ensure no errors with loop variables */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                    <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                        <FeatureIcon2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-[#0A1A2F]">{service.features[1].title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{service.features[1].description}</p>
                </div>
                 <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                    <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-6 group-hover:scale-110 transition-transform">
                        <FeatureIcon3 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-[#0A1A2F]">{service.features[2].title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{service.features[2].description}</p>
                </div>
                 <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                    <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                        <FeatureIcon4 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-[#0A1A2F]">{service.features[3].title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{service.features[3].description}</p>
                </div>
             </div>
         </div>
      </section>

      {/* Process - Horizontal Funnel */}
      <section className="py-24 px-6 bg-[#0A1A2F] text-white overflow-hidden">
          <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold mb-16 text-center">Path to Purchase</h2>
              
              <div className="relative">
                  {/* Connecting Line */}
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 hidden md:block"></div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                      {service.process.map((step, idx) => (
                          <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center hover:bg-slate-750 transition-colors">
                              <div className="w-12 h-12 bg-brand-cyan text-[#0A1A2F] rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-6 shadow-lg shadow-cyan-500/20">
                                  {step.step}
                              </div>
                              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                              <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">Phase {idx + 1}</p>
                              <p className="text-sm text-slate-300">{step.description}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* Case Study */}
      <section className="py-24 px-6 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
              <div className="flex flex-col md:flex-row gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 items-center">
                  <div className="flex-1">
                      <div className="text-brand-cyan font-bold uppercase tracking-widest text-sm mb-2">Success Story</div>
                      <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mb-6">{service.caseStudy.title}</h2>
                      <div className="prose prose-neutral mb-8">
                          <p className="italic text-slate-500 mb-4">"{service.caseStudy.challenge}"</p>
                          <p className="font-medium text-slate-900">{service.caseStudy.solution}</p>
                      </div>
                  </div>
                  <div className="flex-1 w-full bg-slate-50 rounded-2xl p-8 border border-slate-100">
                      <h3 className="font-bold text-lg mb-6 text-[#0A1A2F]">Growth Metrics</h3>
                      <div className="space-y-4">
                          {service.caseStudy.results.map((res, i) => (
                              <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                                      <TrendingUp className="w-4 h-4" />
                                  </div>
                                  <span className="font-bold text-slate-700">{res}</span>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
             <h2 className="text-3xl font-bold text-[#0A1A2F] mb-4">Start Selling More</h2>
             <ConsultancyForm serviceName={service.title} />
        </div>
      </section>
    </div>
  )
}
