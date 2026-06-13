"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight, PhoneCall } from "lucide-react"

export function ServicesCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#0B0F19]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            Ready to Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Growth?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Join hundreds of enterprise companies that trust Aavis IT & Care to deliver exceptional digital marketing, websites, and software solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto rounded-full px-8 bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(61,0,255,0.4)] h-14 text-lg border-none" })}>
              Start Your Free Discovery <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="tel:+1234567890" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto rounded-full px-8 h-14 text-lg border-zinc-700 bg-zinc-900/50 text-white hover:bg-zinc-800 hover:text-white backdrop-blur-sm" })}>
              <PhoneCall className="mr-2 h-5 w-5" /> Call Sales Team
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Sticky Mobile CTA - only visible on small screens at the bottom */}
      <div className="md:hidden fixed bottom-4 inset-x-4 z-50">
        <Link href="/contact" className="flex items-center justify-center w-full rounded-2xl bg-primary text-white shadow-xl shadow-primary/30 h-14 font-bold text-lg">
          Get Started Now
        </Link>
      </div>
    </section>
  )
}
