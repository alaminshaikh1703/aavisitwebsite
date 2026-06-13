"use client"

import { motion } from "framer-motion"
import { Lightbulb, Rocket, BookOpen, Target } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Relentless Innovation",
    description: "We refuse to use yesterday's methods to solve tomorrow's problems. Our tech stacks and marketing strategies are perpetually bleeding-edge."
  },
  {
    icon: Rocket,
    title: "Bias for Action",
    description: "Speed is a feature. We deploy rapid iterations, test rigorously, and scale what works before the competition even wakes up."
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "The digital landscape shifts daily. We mandate continuous education for our engineers and marketers to maintain our elite status."
  },
  {
    icon: Target,
    title: "Client Success Obsession",
    description: "Your growth is our only metric. We act as your external partners, tying our success directly to your bottom line."
  }
]

export function AboutCulture() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Culture</h2>
              <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6 leading-tight">
                Built by experts. Driven by excellence.
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Aavis IT & Care is not just a company; it's a collective of top-tier talent. We hire the top 1% of digital marketers, UI/UX designers, and software engineers globally to ensure our clients receive unparalleled expertise.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                 {values.map((val, i) => (
                    <div key={i} className="bg-card border border-border p-6 rounded-2xl">
                       <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                          <val.icon className="w-5 h-5" />
                       </div>
                       <h4 className="text-lg font-bold text-foreground mb-2">{val.title}</h4>
                       <p className="text-sm text-muted-foreground">{val.description}</p>
                    </div>
                 ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square w-full max-w-lg mx-auto"
            >
               {/* Decorative abstract image composite */}
               <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
                  <div className="bg-muted rounded-3xl overflow-hidden border border-border shadow-lg relative group">
                     <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="Team collaboration" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                  </div>
                  <div className="bg-muted rounded-3xl overflow-hidden border border-border shadow-lg relative group">
                     <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Strategy session" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="bg-muted rounded-3xl overflow-hidden border border-border shadow-lg relative group">
                     <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80" alt="Innovation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="bg-primary rounded-3xl flex items-center justify-center shadow-lg relative overflow-hidden group">
                     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent opacity-50"></div>
                     <div className="text-center z-10">
                        <span className="block text-4xl font-black text-white">Top 1%</span>
                        <span className="block text-sm font-medium text-white/80 uppercase tracking-widest mt-1">Global Talent</span>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
