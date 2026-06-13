"use client"

import { motion } from "framer-motion"

export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-primary/5 to-transparent blur-[80px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-accent/5 to-transparent blur-[80px] -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Proven Track Record
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading mb-8"
          >
            Work That Delivers <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Real Business Results.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-16"
          >
            Explore our portfolio of premium websites, high-ROI digital marketing campaigns, SEO growth projects, and custom software solutions delivered for clients worldwide.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 text-center shadow-sm">
              <div className="text-4xl font-black text-foreground mb-1">150+</div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 text-center shadow-sm">
              <div className="text-4xl font-black text-foreground mb-1">24</div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Industries Served</div>
            </div>
            <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 text-center shadow-sm">
              <div className="text-4xl font-black text-foreground mb-1">99%</div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 text-center shadow-sm">
              <div className="text-4xl font-black text-foreground mb-1">12</div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Countries Served</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
