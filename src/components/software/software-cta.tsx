"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code2 } from "lucide-react"

export function SoftwareCTA() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Animated glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00B7FF]/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-primary mx-auto mb-8 shadow-[0_0_30px_rgba(61,0,255,0.3)]">
             <Code2 className="w-8 h-8" />
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-8">
            Ready to Build Your Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00B7FF]">Business Software?</span>
          </h2>
          
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop forcing your business processes into generic SaaS templates. Build the exact tool you need to scale revenue and crush operational bottlenecks.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Request Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 font-bold text-lg hover:bg-slate-800 backdrop-blur-md hover:scale-105 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

