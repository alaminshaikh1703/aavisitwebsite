"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Globe2, ShieldCheck, HeartHandshake, TrendingUp, Clock } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Results Driven",
    description: "We don't care about vanity metrics. We focus exclusively on revenue, leads, and verifiable ROI."
  },
  {
    icon: Globe2,
    title: "International Standards",
    description: "Delivering Silicon Valley-grade code and Madison Avenue-grade marketing to clients worldwide."
  },
  {
    icon: ShieldCheck,
    title: "Transparent Communication",
    description: "Real-time dashboards, weekly sprint reports, and complete transparency on every project."
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "A specialized team of Account Managers and Engineers available across global time zones."
  },
  {
    icon: CheckCircle2,
    title: "Scalable Solutions",
    description: "Whether it's a CMS or a global enterprise CRM, our solutions are built to grow with you."
  },
  {
    icon: Clock,
    title: "Long-Term Partnership",
    description: "We aren't just vendors. We become your dedicated external digital growth department."
  }
]

export function AboutFeatures() {
  return (
    <section className="py-24 md:py-32 bg-muted/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3">
             <div className="sticky top-32">
               <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Why Choose Us</h2>
               <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6 leading-tight">
                 The Aavis Advantage.
               </h3>
               <p className="text-lg text-muted-foreground mb-8">
                 In a saturated market of digital agencies and software shops, we stand out by holding ourselves to the absolute highest international standards of delivery.
               </p>
             </div>
          </div>

          <div className="lg:w-2/3">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, i) => {
                   const Icon = feature.icon;
                   return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="bg-background border border-border p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300"
                      >
                         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                            <Icon className="w-6 h-6" />
                         </div>
                         <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
                         <p className="text-muted-foreground leading-relaxed">
                            {feature.description}
                         </p>
                      </motion.div>
                   )
                })}
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}
