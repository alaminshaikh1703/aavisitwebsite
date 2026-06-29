"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, BarChart, Code2, Megaphone, Search } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-border">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-background -z-20"></div>
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 mix-blend-multiply opacity-50 dark:opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00B7FF]/10 rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-50 dark:opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              About Aavis IT & Care
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight leading-[1.1] mb-6">
              Helping Businesses Grow Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00B7FF]">Digital Innovation</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              We help brands worldwide attract more customers, build stronger online presence, and scale through digital marketing, SEO, modern websites, and business technology solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-primary/30 transition-all duration-300"
              >
                Start a Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/portfolio" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-background border border-border text-foreground font-bold text-lg hover:bg-muted hover:scale-105 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>

          {/* Right Floating UI Elements */}
          <div className="relative h-[500px] hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-[400px] bg-card rounded-3xl border border-border shadow-2xl p-6"
            >
               {/* Decorative Dashboard Mockup */}
               <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <BarChart className="w-5 h-5" />
                     </div>
                     <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase">Revenue Growth</p>
                        <p className="text-xl font-black text-foreground">+142.8%</p>
                     </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#00B7FF]/10 text-[#00B7FF] text-xs font-bold">Live</div>
               </div>

               <div className="space-y-4">
                  {[
                     { icon: Megaphone, label: "Digital Marketing Campaigns", val: "+85% Leads" },
                     { icon: Search, label: "SEO Dominance", val: "#1 Rankings" },
                     { icon: Code2, label: "Web Platform Conversions", val: "4.8% CR" }
                  ].map((item, i) => (
                     <div key={i} className="p-4 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-muted-foreground border border-border">
                              <item.icon className="w-4 h-4" />
                           </div>
                           <span className="text-sm font-semibold text-foreground">{item.label}</span>
                        </div>
                        <span className="text-sm font-black text-primary">{item.val}</span>
                     </div>
                  ))}
               </div>

               {/* Decorative Chart Area */}
               <div className="mt-6 pt-6 border-t border-border flex items-end gap-2 h-24">
                  {[40, 70, 45, 90, 65, 110, 85].map((h, i) => (
                     <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="flex-1 bg-gradient-to-t from-primary/80 to-[#00B7FF]/80 rounded-t-sm"
                     />
                  ))}
               </div>
            </motion.div>

            {/* Floating Badges */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.6 }}
               className="absolute top-10 left-0 bg-background border border-border rounded-2xl p-4 shadow-xl flex items-center gap-4 z-20"
            >
               <div className="w-12 h-12 rounded-full bg-[#00B7FF]/10 flex items-center justify-center text-[#00B7FF]">
                  <Search className="w-6 h-6" />
               </div>
               <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Organic Traffic</p>
                  <p className="text-lg font-black text-foreground">3M+ Visits</p>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.8 }}
               className="absolute bottom-10 right-0 bg-background border border-border rounded-2xl p-4 shadow-xl flex items-center gap-4 z-20"
            >
               <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Megaphone className="w-6 h-6" />
               </div>
               <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Ad Spend Managed</p>
                  <p className="text-lg font-black text-foreground">$10M+</p>
               </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
