"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

const results = [
  { label: "Revenue Growth", value: 50, suffix: "M+", prefix: "$" },
  { label: "Organic Traffic", value: 320, suffix: "%", prefix: "+" },
  { label: "Lead Generation", value: 180, suffix: "%", prefix: "+" },
  { label: "Conversion Rate", value: 75, suffix: "%", prefix: "+" },
]

export function PortfolioResults() {
  return (
    <section className="py-24 bg-card relative border-y border-border overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Measurable Impact</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Real Business Outcomes.</h3>
          <p className="mt-4 text-lg text-muted-foreground">We don't just build beautiful interfaces; we engineer digital ecosystems that drive verifiable growth across all KPIs.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {results.map((result, i) => (
            <CounterCard key={i} result={result} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CounterCard({ result, index }: { result: typeof results[0], index: number }) {
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
      const end = result.value
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
  }, [isVisible, result.value])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center text-center p-6"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 tabular-nums tracking-tighter">
        <span className="text-primary/70">{result.prefix}</span>
        {count}
        <span className="text-primary">{result.suffix}</span>
      </div>
      <div className="text-sm md:text-base font-bold text-muted-foreground uppercase tracking-wider">
        {result.label}
      </div>
    </motion.div>
  )
}
