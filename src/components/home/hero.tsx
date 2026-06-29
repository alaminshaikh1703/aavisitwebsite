"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export function Hero({ settings }: { settings?: any }) {
  const title = settings?.heroTitle || "Drive Growth. Dominate Search. Accelerate Business."
  const subtitle = settings?.heroSubtitle || "Aavis IT & Care helps global enterprises scale with data-driven Digital Marketing, SEO mastery, high-conversion Website Design, and custom Software Solutions."
  const btnText = settings?.heroBtnText || "Start Your Project"
  const btnUrl = settings?.heroBtnUrl || "/contact"
  const bgImage = settings?.heroBgImage || ""
  const fgImage = settings?.heroImage || ""

  // Parse title to extract the last part for gradient, or just use it as is if it doesn't have periods
  const titleParts = title.split('.').filter(Boolean)
  const lastPart = titleParts.length > 1 ? titleParts.pop() : null
  const firstParts = titleParts.join('. ') + (titleParts.length > 0 ? '.' : '')

  return (
    <section className="relative overflow-hidden bg-background pt-24 lg:pt-32 pb-16 min-h-[90vh] flex items-center">
      {bgImage && (
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={bgImage} alt="Hero Background" className="w-full h-full object-cover" />
        </div>
      )}
      {/* Premium Glow Effects - Optimized */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute left-1/4 top-1/4 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 to-transparent"></div>
      <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/15 to-transparent"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="mb-6 flex">
              <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-3xl">
                  🚀 Premier Digital Growth Agency
                </div>
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              {lastPart ? (
                <>
                  {firstParts}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                    {lastPart.trim()}.
                  </span>
                </>
              ) : (
                title
              )}
            </h1>
            
            <p className="mt-4 text-lg leading-8 text-muted-foreground sm:text-xl">
              {subtitle}
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-x-6">
              <Link href={btnUrl} className={buttonVariants({ size: "lg", className: "rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 w-full sm:w-auto" })}>
                {btnText} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/portfolio" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full px-8 border-border bg-background/50 backdrop-blur-md w-full sm:w-auto" })}>
                View Portfolio
              </Link>
            </div>
          </motion.div>

          {/* Right Side Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg lg:max-w-none perspective-1000"
          >
            {/* Dashboard Mockup Placeholder */}
            <div className="relative rounded-2xl border border-border dark:border-white/10 bg-card dark:bg-white/[0.02] p-2 backdrop-blur-3xl shadow-xl dark:shadow-[0_0_80px_-20px_rgba(61,0,255,0.4)] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-50"></div>
              
              <div className="relative rounded-xl overflow-hidden border border-border dark:border-white/10 bg-background dark:bg-[#0A0A0A]/90 aspect-[4/3] flex flex-col shadow-inner">
                {/* Fake Browser/App Header */}
                <div className="h-10 border-b border-border dark:border-white/10 bg-card dark:bg-white/[0.02] flex items-center px-4 gap-2 backdrop-blur-md">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                </div>
                
                {/* Content Area */}
                {fgImage ? (
                  <div className="flex-1 relative bg-black/20">
                    <img src={fgImage} alt="Dashboard Preview" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="flex-1 p-6 flex flex-col gap-4 relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 to-transparent rounded-full -z-10"></div>
                    
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="h-4 w-32 bg-muted dark:bg-white/10 rounded mb-2"></div>
                        <div className="h-8 w-48 bg-gradient-to-r from-primary to-accent rounded"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 w-8 rounded bg-card dark:bg-white/10 backdrop-blur-sm border border-border dark:border-white/5"></div>
                        <div className="h-8 w-8 rounded bg-card dark:bg-white/10 backdrop-blur-sm border border-border dark:border-white/5"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-24 bg-card dark:bg-white/5 rounded-lg border border-border dark:border-white/10 shadow-lg backdrop-blur-sm"></div>
                      <div className="h-24 bg-card dark:bg-white/5 rounded-lg border border-border dark:border-white/10 shadow-lg backdrop-blur-sm"></div>
                      <div className="h-24 bg-card dark:bg-white/5 rounded-lg border border-border dark:border-white/10 shadow-lg backdrop-blur-sm"></div>
                    </div>

                    <div className="flex-1 bg-card dark:bg-white/5 rounded-lg border border-border dark:border-white/10 mt-2 flex items-end p-4 shadow-inner relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5"></div>
                      {/* Fake Chart bars */}
                      <div className="w-full flex justify-between items-end h-full gap-2 relative z-10">
                        {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
                          <div key={i} className="w-full bg-gradient-to-t from-primary/80 to-accent/80 rounded-t-sm shadow-sm dark:shadow-[0_0_15px_rgba(61,0,255,0.5)]" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-surface/80 backdrop-blur-xl border border-border dark:border-white/10 p-4 rounded-xl shadow-lg dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex items-center gap-4"
            >
              <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">System Status</p>
                <p className="text-sm font-bold text-foreground">100% Operational</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
