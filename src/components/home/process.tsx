"use client"

import { Search, PenTool, Code2, Rocket, Settings, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  { id: "01", name: "Discovery", description: "Deep dive into your business requirements and technical feasibility.", icon: Search },
  { id: "02", name: "Planning", description: "Architectural design, tech stack selection, and project roadmap.", icon: Settings },
  { id: "03", name: "Design", description: "Wireframing, UI/UX design, and prototyping.", icon: PenTool },
  { id: "04", name: "Development", description: "Agile sprints building robust, scalable code.", icon: Code2 },
  { id: "05", name: "Testing", description: "Rigorous QA, security audits, and performance testing.", icon: CheckCircle },
  { id: "06", name: "Launch & Support", description: "Deployment and continuous post-launch maintenance.", icon: Rocket },
]

export function DevelopmentProcess() {
  return (
    <section className="py-24 sm:py-32 bg-surface border-y border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent rounded-full pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">How We Work</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Development Process
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent hidden md:block"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={step.id} 
                  className="relative flex flex-col md:flex-row gap-8 items-start md:items-center group"
                >
                  <div className="hidden md:flex absolute left-8 -translate-x-1/2 h-16 w-16 rounded-full border border-white/10 bg-surface items-center justify-center z-10 shadow-[0_0_15px_rgba(61,0,255,0.2)] group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                    <step.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  
                  <div className="md:ml-24 w-full bg-card dark:bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-border dark:border-white/5 p-8 shadow-md hover:border-primary/30 transition-all duration-300 dark:hover:shadow-[0_10px_30px_-10px_rgba(61,0,255,0.15)] hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-start gap-6 relative">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border dark:border-white/5 shadow-inner group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                        <step.icon className="h-8 w-8 text-primary drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(61,0,255,0.3)]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-3">{step.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                      <span className="hidden md:block text-5xl font-extrabold text-muted/50 dark:text-white/5 group-hover:text-primary/10 transition-colors">{step.id}</span>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
