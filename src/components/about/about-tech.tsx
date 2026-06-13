"use client"

import { motion } from "framer-motion"

// Using text blocks instead of complex SVGs for simplicity in this demo,
// but styled to look like modern tech logos.
const technologies = [
  { name: "Next.js", color: "bg-black text-white dark:bg-white dark:text-black" },
  { name: "React", color: "bg-[#61DAFB]/10 text-[#61DAFB] border-[#61DAFB]/20" },
  { name: "WordPress", color: "bg-[#21759B]/10 text-[#21759B] border-[#21759B]/20" },
  { name: "Laravel", color: "bg-[#FF2D20]/10 text-[#FF2D20] border-[#FF2D20]/20" },
  { name: "PHP", color: "bg-[#777BB4]/10 text-[#777BB4] border-[#777BB4]/20" },
  { name: "Tailwind CSS", color: "bg-[#38B2AC]/10 text-[#38B2AC] border-[#38B2AC]/20" },
  { name: "Google Ads", color: "bg-[#4285F4]/10 text-[#4285F4] border-[#4285F4]/20" },
  { name: "Meta Ads", color: "bg-[#0668E1]/10 text-[#0668E1] border-[#0668E1]/20" },
  { name: "Ahrefs", color: "bg-[#FF7300]/10 text-[#FF7300] border-[#FF7300]/20" },
  { name: "Semrush", color: "bg-[#FF642D]/10 text-[#FF642D] border-[#FF642D]/20" },
  { name: "Figma", color: "bg-[#F24E1E]/10 text-[#F24E1E] border-[#F24E1E]/20" },
  { name: "Shopify", color: "bg-[#95BF47]/10 text-[#95BF47] border-[#95BF47]/20" },
]

export function AboutTech() {
  return (
    <section className="py-24 bg-muted/30 border-t border-border overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Arsenal</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-12">
          Powered by industry-leading platforms.
        </h3>
        
        {/* Infinite scroll or clustered tech grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`px-6 py-3 rounded-2xl border font-bold text-lg shadow-sm hover:scale-105 transition-transform duration-300 cursor-default ${tech.color} ${tech.name === "Next.js" ? "border-transparent" : ""}`}
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
