"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

export function AboutCTA() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-border">
      {/* Dark gradient background specifically for CTA to make it pop */}
      <div className="absolute inset-0 bg-slate-950 dark:bg-background z-0"></div>
      
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
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-8">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00B7FF]">Amazing</span> Together.
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you need to dominate search rankings, launch a high-converting web platform, or build custom enterprise software, we are ready to scale your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-primary/30 transition-all duration-300"
            >
              Schedule Consultation <Calendar className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
