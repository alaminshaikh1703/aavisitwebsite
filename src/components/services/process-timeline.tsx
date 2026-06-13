"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, PenTool, Code2, Rocket, TrendingUp } from "lucide-react"

const processSteps = [
  { id: "01", name: "Discovery", icon: Search, description: "We deep-dive into your business goals, target audience, and competitive landscape." },
  { id: "02", name: "Strategy", icon: Lightbulb, description: "We develop a comprehensive, data-driven roadmap for your digital success." },
  { id: "03", name: "Design", icon: PenTool, description: "We craft stunning, user-centric interfaces optimized for conversion." },
  { id: "04", name: "Development", icon: Code2, description: "We build scalable, high-performance solutions using modern tech stacks." },
  { id: "05", name: "Launch", icon: Rocket, description: "We execute a flawless deployment and ensure everything runs perfectly." },
  { id: "06", name: "Growth", icon: TrendingUp, description: "We continuously monitor, optimize, and scale your digital presence." },
]

export function ProcessTimeline() {
  return (
    <section className="py-24 bg-card relative overflow-hidden border-y border-border">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">How We Work</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Our Proven Methodology</h3>
          <p className="mt-4 text-muted-foreground text-lg">A systematic approach to delivering exceptional digital experiences and scalable business growth.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden sm:block"></div>
            
            <div className="flex flex-col gap-12 sm:gap-24">
              {processSteps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-8 ${isEven ? 'sm:flex-row-reverse' : ''}`}
                  >
                    {/* Node on Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 sm:top-1/2 w-16 h-16 bg-background rounded-full border-4 border-card flex items-center justify-center -translate-x-1/2 sm:-translate-y-1/2 z-10 shadow-lg hidden sm:flex">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>

                    {/* Mobile Node */}
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center sm:hidden shrink-0 border border-primary/20">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>

                    <div className={`flex-1 w-full sm:w-1/2 ${isEven ? 'sm:text-right sm:pr-16' : 'sm:pl-16'}`}>
                      <div className="bg-background border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-5xl font-black text-muted/20 absolute top-4 right-6 pointer-events-none">{step.id}</span>
                        <h4 className="text-2xl font-bold text-foreground mb-3 relative z-10">{step.name}</h4>
                        <p className="text-muted-foreground leading-relaxed relative z-10">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="hidden sm:block flex-1 w-1/2"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
