"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export function ResultsSection() {
  return (
    <section className="py-24 bg-card relative border-y border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Proven Impact</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Real Results We Deliver</h3>
          <p className="mt-4 text-muted-foreground text-lg">We don't just execute tasks; we drive measurable business outcomes that significantly impact your bottom line.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "More Leads", value: "350", suffix: "%", prefix: "+" },
            { label: "Higher Rankings", value: "1st", suffix: " Page", prefix: "" },
            { label: "Better Conversion Rates", value: "250", suffix: "%", prefix: "+" },
            { label: "Increased Revenue", value: "50", suffix: "M+", prefix: "$" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-background border border-border shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-4xl md:text-5xl font-black text-foreground mb-2 tracking-tighter group-hover:text-primary transition-colors">
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
