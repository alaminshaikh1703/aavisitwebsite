"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function SoftwareShowcase() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-32">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Unified Data</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
                Eliminate data silos instantly.
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Stop jumping between 15 different apps to figure out your bottom line. We build centralized hubs that connect your marketing, sales, support, and finance data into a single source of truth.
              </p>
              
              <div className="space-y-4">
                {[
                  "Real-time bi-directional syncing",
                  "Automated ETL pipelines",
                  "Custom role-based access controls"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-slate-700 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
               <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-[80px] -z-10"></div>
               <div className="rounded-3xl border border-slate-200 bg-white p-2 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#00B7FF]"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                    alt="Dashboard UI" 
                    className="w-full rounded-2xl border border-slate-100 opacity-80 mix-blend-screen"
                  />
               </div>
            </motion.div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-[#00B7FF] uppercase mb-3">Global Scalability</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
                Architecture that scales globally.
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Whether you are opening a new retail branch in London or launching a digital product in Tokyo, our software infrastructures are deployed on edge networks to guarantee sub-second latency worldwide.
              </p>
              
              <div className="space-y-4">
                {[
                  "Edge computing deployment",
                  "Load balancing & auto-scaling",
                  "Multi-region database replication"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00B7FF]" />
                    <span className="text-slate-700 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
               <div className="absolute inset-0 bg-[#00B7FF]/20 rounded-3xl blur-[80px] -z-10"></div>
               <div className="rounded-3xl border border-slate-200 bg-white p-2 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00B7FF] to-primary"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
                    alt="Global Infrastructure" 
                    className="w-full rounded-2xl border border-slate-100 opacity-80 mix-blend-screen"
                  />
               </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}

