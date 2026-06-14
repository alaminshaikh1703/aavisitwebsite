"use client"

import { motion } from "framer-motion"
import { Building2, Utensils, ShoppingBag, HeartPulse, HardHat, Home, GraduationCap, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const industries = [
  { name: "Hotels & Hospitality", icon: Building2 },
  { name: "Restaurants & F&B", icon: Utensils },
  { name: "Retail & E-commerce", icon: ShoppingBag },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Construction", icon: HardHat },
  { name: "Real Estate", icon: Home },
  { name: "Education", icon: GraduationCap }
]

export function SoftwareIndustries() {
  return (
    <section className="py-24 bg-white relative border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
           <div className="max-w-2xl">
             <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Industries Served</h2>
             <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
               Domain expertise across sectors.
             </h3>
           </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <Link href="/contact" key={i}>
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4, delay: i * 0.05 }}
                 className="group relative bg-slate-100 border border-slate-200 p-6 rounded-2xl hover:bg-slate-800 transition-colors flex flex-col justify-between h-full min-h-[140px]"
               >
                 <div className="flex justify-between items-start mb-4">
                    <ind.icon className="w-6 h-6 text-slate-600 group-hover:text-primary transition-colors" />
                    <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-slate-900 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                 </div>
                 <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{ind.name}</h4>
               </motion.div>
            </Link>
          ))}
          
          <Link href="/contact">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: industries.length * 0.05 }}
               className="group relative bg-gradient-to-br from-primary/20 to-[#00B7FF]/20 border border-primary/30 p-6 rounded-2xl hover:border-primary transition-colors flex flex-col justify-center items-center h-full min-h-[140px] text-center"
             >
                <h4 className="text-lg font-bold text-slate-900 mb-1">Your Industry</h4>
                <p className="text-sm text-[#00B7FF]">Request Custom Build</p>
             </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}

