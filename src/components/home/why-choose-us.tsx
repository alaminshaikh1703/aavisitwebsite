"use client"

import { Globe2, ShieldCheck, Zap, Headphones } from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
  {
    title: "Global Standards",
    description: "We adhere to international coding standards and security protocols, delivering software that scales globally.",
    icon: Globe2,
  },
  {
    title: "Scalable Solutions",
    description: "Cloud-native architectures engineered to handle massive data loads and high concurrent traffic.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Delivery",
    description: "Agile methodologies ensure rapid deployment and continuous integration for faster time-to-market.",
    icon: Zap,
  },
  {
    title: "Dedicated Support",
    description: "24/7 technical support and maintenance SLA to keep your mission-critical applications running.",
    icon: Headphones,
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 to-transparent rounded-full pointer-events-none -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">The Aavis Advantage</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose Us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={index} 
              className="flex flex-col items-center text-center p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(61,0,255,0.2)]"
            >
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 shadow-inner border border-white/10">
                <reason.icon className="h-8 w-8 text-primary drop-shadow-[0_0_8px_rgba(61,0,255,0.5)]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
