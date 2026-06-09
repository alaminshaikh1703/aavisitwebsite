"use client"

import { Building2, HeartPulse, HardHat, ShoppingBag, Home, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

const industries = [
  { name: "Hotels & Hospitality", icon: Building2 },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Construction", icon: HardHat },
  { name: "Retail", icon: ShoppingBag },
  { name: "Real Estate", icon: Home },
  { name: "E-commerce", icon: ShoppingCart },
]

export function IndustriesWeServe() {
  return (
    <section className="py-24 bg-surface border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent rounded-full pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Global Reach</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Industries We Serve</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index} 
              className="group flex flex-col items-center justify-center p-6 bg-card dark:bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-border dark:border-white/10 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(61,0,255,0.15)] hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-full bg-surface border border-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300 shadow-inner">
                <industry.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm font-semibold text-center text-foreground">{industry.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
