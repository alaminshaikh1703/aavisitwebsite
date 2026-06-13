"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Project, ProjectCategory } from "@/data/mock"
import { cn } from "@/lib/utils"

type PortfolioGridProps = {
  projects: Project[]
}

const CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "Website Design",
  "Digital Marketing",
  "SEO Projects",
  "CRM Solutions",
  "POS Systems",
  "Branding & Creative"
]

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All")

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  )

  // Top 3 featured are simply the first 3 of the filtered list, or we could always feature specific ones.
  // For this design, let's treat the first 3 items in the current filter as "Featured" (large alternating layout)
  // and the rest as the grid.
  const featuredProjects = filteredProjects.slice(0, 3)
  const gridProjects = filteredProjects.slice(3)

  return (
    <section className="py-20 bg-background relative z-10 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filtering Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-20">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative",
                activeCategory === category
                  ? "text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <AnimatePresence mode="popLayout">
            <motion.div
              key="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-32 text-muted-foreground"
            >
              No projects found for this category yet.
            </motion.div>
          </AnimatePresence>
        )}

        {/* Featured Projects (Alternating Layout) */}
        <div className="flex flex-col gap-32 mb-32">
          <AnimatePresence mode="popLayout">
            {featuredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  key={`featured-${project.id}`}
                  className={cn(
                    "flex flex-col gap-10 lg:gap-16 items-center",
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  )}
                >
                  <div className="flex-1 w-full group cursor-pointer">
                    <Link href={`/portfolio/${project.slug}`}>
                      <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-border shadow-xl bg-card transition-all duration-500 hover:shadow-2xl hover:border-primary/50">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>
                        
                        {/* Mockup visual instead of actual image tag for this demo */}
                        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            onError={(e) => {
                                // Fallback if mock image doesn't exist
                                e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80";
                            }}
                          />
                        </div>
                        
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                           <div className="bg-background/90 backdrop-blur-md rounded-full h-16 w-16 flex items-center justify-center shadow-2xl text-primary transform scale-50 group-hover:scale-100 transition-transform duration-500 ease-out">
                             <ExternalLink className="h-6 w-6" />
                           </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  
                  <div className="flex-1 w-full flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                        {project.category}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">{project.industry}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight hover:text-primary transition-colors">
                      <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {project.overview}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      {project.results.slice(0, 2).map((res, i) => (
                        <div key={i} className="border-l-2 border-primary/30 pl-4">
                          <div className="text-2xl font-black text-foreground mb-1">{res.metric}</div>
                          <div className="text-sm font-medium text-muted-foreground leading-tight">{res.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                       {project.servicesProvided.map((svc, i) => (
                          <span key={i} className="text-xs font-medium px-2 py-1 bg-muted text-muted-foreground rounded-md border border-border">
                             {svc}
                          </span>
                       ))}
                    </div>
                    
                    <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center text-base font-semibold text-primary hover:text-accent transition-colors group/link w-fit">
                      View Full Case Study <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Masonry Grid for Remaining Projects */}
        {gridProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {gridProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={`grid-${project.id}`}
                  className="group flex flex-col cursor-pointer"
                >
                  <Link href={`/portfolio/${project.slug}`} className="block relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-border shadow-sm">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"; }}
                    />
                    
                    {/* Hover Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 flex justify-between items-end">
                       <span className="text-sm font-bold text-primary uppercase tracking-wider bg-background/90 backdrop-blur px-3 py-1 rounded-full border border-border">
                         View Case Study
                       </span>
                       <div className="h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
                          <ExternalLink className="h-4 w-4" />
                       </div>
                    </div>
                  </Link>
                  
                  <div className="px-2">
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-xs font-bold text-primary uppercase tracking-wider">{project.category}</span>
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">{project.title}</h4>
                    {project.results[0] && (
                      <p className="text-sm font-medium text-muted-foreground border-l-2 border-primary/50 pl-3">
                        {project.results[0].label} increased to {project.results[0].metric}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  )
}
