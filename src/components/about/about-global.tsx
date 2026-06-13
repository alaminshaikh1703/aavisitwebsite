"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

const locations = [
  { name: "USA", coords: { top: "35%", left: "20%" }, delay: 0.2 },
  { name: "Canada", coords: { top: "25%", left: "22%" }, delay: 0.3 },
  { name: "UK", coords: { top: "30%", left: "48%" }, delay: 0.4 },
  { name: "Europe", coords: { top: "35%", left: "52%" }, delay: 0.5 },
  { name: "UAE", coords: { top: "45%", left: "62%" }, delay: 0.6 },
  { name: "Australia", coords: { top: "75%", left: "85%" }, delay: 0.7 }
]

export function AboutGlobal() {
  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Global Reach</h2>
          <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
            We work remotely with clients worldwide.
          </h3>
          <p className="text-lg text-muted-foreground">
            Distance is an illusion. Our elite teams collaborate seamlessly across time zones to deliver digital dominance for enterprises in North America, Europe, the Middle East, and APAC.
          </p>
        </div>

        {/* Abstract World Map Visualization */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] mt-16 rounded-3xl overflow-hidden border border-border bg-background shadow-xl">
           <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(circle at center, var(--border) 2px, transparent 2px)',
              backgroundSize: '24px 24px'
           }}></div>

           {/* Stylized continents background */}
           <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 mix-blend-overlay"></div>

           {locations.map((loc, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: loc.delay }}
               className="absolute flex flex-col items-center group cursor-default"
               style={{ top: loc.coords.top, left: loc.coords.left }}
             >
               <div className="relative w-4 h-4 md:w-6 md:h-6 bg-primary rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(61,0,255,0.8)] z-10">
                 <div className="absolute w-full h-full rounded-full bg-primary animate-ping opacity-50"></div>
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
               </div>
               <div className="mt-2 px-3 py-1 bg-background/90 backdrop-blur border border-border rounded-full text-xs font-bold text-foreground shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 absolute top-full whitespace-nowrap z-20">
                 {loc.name}
               </div>
             </motion.div>
           ))}
           
           <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3 justify-center">
             {locations.map((loc, i) => (
               <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-muted/80 backdrop-blur rounded-full border border-border/50 text-sm font-semibold text-foreground">
                 <MapPin className="w-3.5 h-3.5 text-primary" /> {loc.name}
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  )
}
