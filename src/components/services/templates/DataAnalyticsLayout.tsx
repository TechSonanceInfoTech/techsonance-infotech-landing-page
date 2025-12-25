import { ServiceData } from "@/config/services"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ConsultancyForm } from "@/components/forms/consultancy-form"
import { DataAnalyticsHero } from "./DataAnalyticsHero"
import { DataAnalyticsFeatures } from "./DataAnalyticsFeatures"

export function DataAnalyticsLayout({ service }: { service: ServiceData }) {
  
  // Transform features to store rendered icons instead of component functions
  // This allows passing the 'icon' prop to the Client Component (DataAnalyticsFeatures)
  // because React Elements (JSX) are serializable, but Component Functions are not.
  const serializedFeatures = service.features.map(feature => {
    const IconComponent = feature.icon;
    return {
      ...feature,
      icon: <IconComponent className="w-full h-full" />
    };
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-cyan-100">
      <Navbar />

      <DataAnalyticsHero shortDescription={service.shortDescription} />

      <DataAnalyticsFeatures 
        fullDescription={service.fullDescription} 
        features={serializedFeatures} 
      />

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
