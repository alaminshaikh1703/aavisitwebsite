"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Activity, TrendingUp, Users, Box } from "lucide-react"

import * as LucideIcons from "lucide-react"

export function SoftwareGrid({ initialProducts }: { initialProducts?: any[] }) {
  const products = initialProducts || []
  return (
    <section className="py-24 bg-card relative border-b border-slate-100 dark:border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
           <div className="max-w-2xl">
             <h2 className="text-sm font-bold tracking-widest text-[#00B7FF] uppercase mb-3">Featured Products</h2>
             <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
               Built for scale. Designed for speed.
             </h3>
           </div>
           <Link 
              href="/contact" 
              className="inline-flex items-center text-muted-foreground font-bold hover:text-foreground group transition-colors"
           >
              Request Custom Build <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, i) => {
            const IconName = product.icon as keyof typeof LucideIcons
            const IconComponent = (LucideIcons[IconName] as any) || LucideIcons.Box
            const features = Array.isArray(product.features) ? product.features as string[] : []

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-slate-50 dark:bg-background border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="p-8">
                   <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-card/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                         <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                         {product.metric}
                      </span>
                   </div>
                   
                   <h4 className="text-2xl font-bold text-foreground mb-2">{product.name}</h4>
                   <p className="text-sm text-[#00B7FF] font-medium mb-4">{product.category}</p>
                   <p className="text-muted-foreground mb-8 leading-relaxed line-clamp-2">
                      {product.description}
                   </p>

                   <div className="flex flex-wrap gap-2 mb-8">
                      {features.map((feat, j) => (
                         <span key={j} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-card/5 text-muted-foreground border border-slate-100 dark:border-white/5">
                            {feat}
                         </span>
                      ))}
                   </div>
                </div>

               <div className="relative aspect-[2/1] overflow-hidden border-t border-slate-200 dark:border-white/10 mt-auto">
                 <div className="absolute inset-0 bg-slate-50/80 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                 <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-slate-50/60 backdrop-blur-sm">
                    <Link 
                       href="/contact" 
                       className="px-6 py-3 rounded-xl bg-primary text-white font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                       Schedule Demo
                    </Link>
                 </div>
              </div>
            </motion.div>
          )
        })}
        </div>
      </div>
    </section>
  )
}

