"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-primary/5 to-transparent blur-[80px] -z-10"></div>
      <div className="absolute top-20 -left-20 w-[400px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-accent/5 to-transparent blur-[80px] -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Enterprise Grade Solutions
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading mb-8"
          >
            Digital Growth.<br />
            Modern Websites.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Custom Software.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10"
          >
            We help businesses worldwide grow faster through digital marketing, SEO, high-converting websites, and custom business solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 h-12 text-base" })}>
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/portfolio" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto rounded-full px-8 h-12 text-base border-border bg-background/50 backdrop-blur-sm" })}>
              View Portfolio
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
          >
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-foreground">500+</span>
              <span className="text-sm font-medium text-muted-foreground">Global Clients</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-foreground">99%</span>
              <span className="text-sm font-medium text-muted-foreground">Client Retention</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-foreground">$50M+</span>
              <span className="text-sm font-medium text-muted-foreground">Revenue Generated</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-foreground">24/7</span>
              <span className="text-sm font-medium text-muted-foreground">Expert Support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
