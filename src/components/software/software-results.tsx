"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

const stats = [
  { label: "Software Deployments", value: 50, suffix: "+", prefix: "" },
  { label: "System Uptime", value: 99.9, suffix: "%", prefix: "", isFloat: true },
  { label: "Countries Served", value: 12, suffix: "", prefix: "" },
  { label: "Client Satisfaction", value: 98, suffix: "%", prefix: "" },
]

export function SoftwareResults() {
  return (
    <section className="py-24 bg-card relative border-b border-slate-100 dark:border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24">
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
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isVisible, stat.value])

  const displayCount = stat.isFloat ? count.toFixed(1) : Math.floor(count)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center min-w-[200px]"
    >
      <div className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-4 tabular-nums tracking-tighter">
        <span className="text-foreground/50">{stat.prefix}</span>
        {displayCount}
        <span className="text-primary">{stat.suffix}</span>
      </div>
      <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest text-center">
        {stat.label}
      </div>
    </motion.div>
  )
}

