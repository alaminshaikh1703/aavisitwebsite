"use client"

import { Users, Globe2, Code2, Award } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  { id: 1, name: "Global Clients", value: "500+", icon: Globe2 },
  { id: 2, name: "Projects Delivered", value: "1,200+", icon: Code2 },
  { id: 3, name: "Expert Developers", value: "150+", icon: Users },
  { id: 4, name: "Industry Awards", value: "25+", icon: Award },
]

export function Stats() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-y border-white/5">
      {/* Background with premium glow */}
      <div className="absolute inset-0 bg-surface"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent rounded-full pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10"
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={stat.id} 
              className="flex flex-col items-center justify-center p-8 bg-card dark:bg-[#131B2A] border border-border dark:border-white/5 rounded-3xl shadow-xl group hover:border-primary/50 transition-colors"
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 border border-border dark:border-white/5 shadow-inner">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <dd className="text-4xl font-extrabold tracking-tight text-foreground mb-2">{stat.value}</dd>
              <dt className="text-sm font-medium leading-6 text-muted-foreground uppercase tracking-wider">{stat.name}</dt>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
