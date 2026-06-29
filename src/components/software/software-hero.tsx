"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Play, BarChart3, Database, Lock, Activity } from "lucide-react"

export function SoftwareHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-border">
      {/* Absolute Dark Mode Background Forcing for this specific premium look */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-background z-0"></div>
      
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00B7FF]/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-card/5 border border-slate-200 dark:border-white/10 text-muted-foreground text-sm font-medium tracking-wide mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B7FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B7FF]"></span>
              </span>
              Enterprise Software Division
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight leading-[1.1] mb-6">
              Business Software Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00B7FF]">Growth</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Streamline operations, improve productivity, and scale faster with custom-built business software solutions from Aavis IT & Care.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-100 dark:bg-card/5 border border-slate-200 dark:border-white/10 text-foreground font-bold text-lg hover:bg-primary/90 backdrop-blur-md hover:scale-105 transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 fill-slate-900" /> Get Free Consultation
              </Link>
            </div>
          </motion.div>

          {/* Right Floating SaaS UI Mockup */}
          <div className="relative h-[500px] hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ perspective: "1000px" }}
              className="absolute inset-0"
            >
               <div className="w-full h-full bg-card border border-slate-200 dark:border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative">
                  {/* Dashboard Header */}
                  <div className="h-12 border-b border-slate-200 dark:border-white/10 flex items-center px-4 gap-2 bg-slate-100 dark:bg-card/5">
                     <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                     <div className="mx-auto px-4 py-1 rounded bg-slate-100 dark:bg-card/5 text-[10px] text-muted-foreground font-mono">
                        app.aavisstudio.com/dashboard
                     </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="flex-1 p-6 grid grid-cols-12 gap-4">
                     {/* Sidebar */}
                     <div className="col-span-3 space-y-3">
                        <div className="h-8 rounded bg-slate-100 dark:bg-card/5 w-full"></div>
                        <div className="h-8 rounded bg-primary/20 border border-primary/30 w-full"></div>
                        <div className="h-8 rounded bg-slate-100 dark:bg-card/5 w-full"></div>
                        <div className="h-8 rounded bg-slate-100 dark:bg-card/5 w-full"></div>
                     </div>
                     
                     {/* Main Area */}
                     <div className="col-span-9 space-y-4">
                        {/* Top Stats */}
                        <div className="grid grid-cols-3 gap-4">
                           {[
                              { icon: BarChart3, label: "Revenue", val: "$124,500", color: "text-green-400" },
                              { icon: Activity, label: "Active Users", val: "8,432", color: "text-[#00B7FF]" },
                              { icon: Database, label: "Data Synced", val: "99.9%", color: "text-primary" }
                           ].map((stat, i) => (
                              <div key={i} className="p-4 rounded-xl bg-slate-100 dark:bg-card/5 border border-slate-100 dark:border-white/5 flex flex-col gap-2">
                                 <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                 <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                                 <span className="text-lg font-bold text-foreground">{stat.val}</span>
                              </div>
                           ))}
                        </div>

                        {/* Chart Area */}
                        <div className="h-48 rounded-xl bg-slate-100 dark:bg-card/5 border border-slate-100 dark:border-white/5 p-4 flex items-end gap-2">
                           {[40, 70, 45, 90, 65, 110, 85, 120, 95].map((h, i) => (
                              <motion.div 
                                 key={i}
                                 initial={{ height: 0 }}
                                 animate={{ height: `${h}%` }}
                                 transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                 className="flex-1 bg-gradient-to-t from-primary/80 to-[#00B7FF]/80 rounded-t-sm"
                              />
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Floating Glassmorphism Element */}
                  <motion.div 
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.6, delay: 1 }}
                     className="absolute -left-6 top-1/2 p-4 rounded-xl bg-slate-200 dark:bg-card/10 backdrop-blur-xl border border-slate-300 dark:border-white/20 shadow-2xl flex items-center gap-4"
                  >
                     <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-green-400" />
                     </div>
                     <div>
                        <p className="text-xs text-muted-foreground font-bold">Bank-Grade Security</p>
                        <p className="text-[10px] text-muted-foreground">SOC2 Compliant</p>
                     </div>
                  </motion.div>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

