"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

const stats = [
  { label: "Projects Completed", value: 350, suffix: "+", prefix: "" },
  { label: "Happy Clients", value: 200, suffix: "+", prefix: "" },
  { label: "Countries Served", value: 15, suffix: "", prefix: "" },
  { label: "Years Experience", value: 10, suffix: "+", prefix: "" },
  { label: "Client Satisfaction", value: 99, suffix: "%", prefix: "" },
]

export function AboutStats() {
  return (
    <section className="py-24 bg-background relative border-t border-border overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">By The Numbers</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Proof of Performance.</h3>
          <p className="mt-4 text-lg text-muted-foreground">Our numbers reflect our dedication to delivering absolute excellence across international markets.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {stats.map((stat, i) => (
            <CounterCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CounterCard({ stat, index }: { stat: typeof stats[0], index: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      let start = 0
      const end = stat.value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isVisible, stat.value])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center p-8 bg-card border border-border rounded-3xl shadow-sm min-w-[200px]"
    >
      <div className="text-5xl md:text-6xl font-black text-foreground mb-4 tabular-nums tracking-tighter">
        <span className="text-primary/70">{stat.prefix}</span>
        {count}
        <span className="text-primary">{stat.suffix}</span>
      </div>
      <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider text-center">
        {stat.label}
      </div>
    </motion.div>
  )
}
