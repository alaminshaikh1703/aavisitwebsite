"use client"

import { motion } from "framer-motion"

const steps = [
  {
    title: "Discover",
    description: "Deep dive into your business model, target audience, and current digital footprint.",
  },
  {
    title: "Strategize",
    description: "Formulate a comprehensive growth plan encompassing SEO, marketing, and technology.",
  },
  {
    title: "Design",
    description: "Craft premium, conversion-focused user interfaces and brand assets.",
  },
  {
    title: "Develop",
    description: "Build robust, scalable software and web architectures using modern stacks.",
  },
  {
    title: "Launch",
    description: "Execute high-impact go-to-market campaigns and deploy platforms flawlessly.",
  },
  {
    title: "Optimize",
    description: "Continuous A/B testing, SEO refinement, and technical scaling for perpetual growth.",
  }
]

export function AboutProcess() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Methodology</h2>
          <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
            The Growth Framework.
          </h3>
          <p className="text-lg text-muted-foreground">
            A battle-tested 6-step process designed to turn ambiguity into verifiable business results.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex items-center ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}
                >
                  <div className="hidden md:block w-1/2"></div>
                  
                  {/* Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary z-10 flex items-center justify-center shadow-[0_0_15px_rgba(61,0,255,0.5)]">
                     <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                     <div className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
                        <span className="text-primary font-black text-6xl opacity-10 absolute top-4 right-8 pointer-events-none">
                           0{index + 1}
                        </span>
                        <h4 className="text-2xl font-bold text-foreground mb-4 relative z-10">{step.title}</h4>
                        <p className="text-muted-foreground leading-relaxed relative z-10">
                          {step.description}
                        </p>
                     </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
