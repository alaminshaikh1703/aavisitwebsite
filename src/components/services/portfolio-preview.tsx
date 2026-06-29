"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export function PortfolioPreview({ projects = [] }: { projects?: any[] }) {
  // If no projects provided or empty, don't render or handle fallback? 
  // Let's just use the passed projects. If none, we can show a message or just map empty.
  if (!projects || projects.length === 0) return null;
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Featured Work</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Our Recent Success Stories</h3>
          </div>
          <Link href="/portfolio" className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={project.slug ? `/portfolio/${project.slug}` : '#'}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-border bg-card shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  {/* Abstract Project Image Mockup */}
                  <div className="absolute inset-4 rounded-xl border border-border/50 bg-background/80 backdrop-blur-sm overflow-hidden flex flex-col shadow-inner group-hover:scale-105 transition-transform duration-700">
                    {project.image ? (
                      <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                    ) : (
                      <>
                        <div className="h-6 border-b border-border/50 flex items-center px-3 gap-1.5 bg-card/50">
                          <div className="w-2 h-2 rounded-full bg-red-400"></div>
                          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex-1 p-4 flex flex-col gap-3">
                          <div className="h-4 w-1/3 bg-muted rounded"></div>
                          <div className="h-20 w-full bg-muted/50 rounded flex-1"></div>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="absolute top-4 right-4 h-10 w-10 bg-background/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <ExternalLink className="h-4 w-4 text-foreground" />
                  </div>
                </div>
                
                <div className="px-2">
                  <div className="text-xs font-bold tracking-wider text-primary uppercase mb-2">{project.category}</div>
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.name}</h4>
                  <p className="text-sm text-muted-foreground font-medium">Result: {project.metric}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
