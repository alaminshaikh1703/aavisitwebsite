"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="bg-background py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 to-transparent rounded-full pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="mx-auto max-w-4xl text-center p-12 sm:p-16 rounded-[3rem] border border-border dark:border-white/10 bg-card dark:bg-white/[0.02] backdrop-blur-xl shadow-2xl dark:shadow-[0_0_50px_rgba(61,0,255,0.15)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <h2 className="relative z-10 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-6">
            Ready to accelerate your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">digital transformation?</span>
          </h2>
          <p className="relative z-10 mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground mb-10">
            Join hundreds of global enterprises that trust Aavis IT & Care to build their mission-critical software and scale their operations.
          </p>
          <div className="relative z-10 flex items-center justify-center gap-x-6">
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(61,0,255,0.4)]" })}>
              Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/services" className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors">
              Explore Our Services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
