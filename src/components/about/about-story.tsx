"use client"

import { motion } from "framer-motion"

export function AboutStory() {
  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Our Journey</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-tight mb-8">
              Where Strategy Meets Execution.
            </h3>
            
            <div className="prose prose-lg dark:prose-invert mx-auto">
               <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                 Aavis IT & Care was founded with a singular, unapologetic focus: <strong>Measurable Business Growth.</strong>
               </p>
               <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                 We realized that the digital landscape was fragmented. Agencies either offered beautiful designs that didn't convert, or raw technical code without marketing strategy. We built a firm that eliminates that gap. 
               </p>
               <p className="text-lg text-muted-foreground leading-relaxed">
                 By combining elite digital marketing strategy, SEO dominance, premium website design, and scalable custom software, we create a unified ecosystem that turns digital presence into an automated growth engine. We don't just build websites; we build businesses.
               </p>
            </div>
          </motion.div>

          {/* Simple Timeline Visual */}
          <div className="relative mt-20 pt-10 border-t border-border">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-primary/20"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                   <div className="text-4xl font-black text-foreground mb-4">The Vision</div>
                   <p className="text-muted-foreground">Identifying the gap between marketing strategy and technical execution.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                   <div className="text-4xl font-black text-primary mb-4">The Build</div>
                   <p className="text-muted-foreground">Assembling a world-class team of marketers, designers, and engineers.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                   <div className="text-4xl font-black text-[#00B7FF] mb-4">The Scale</div>
                   <p className="text-muted-foreground">Partnering with international enterprises to drive millions in verifiable revenue.</p>
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
