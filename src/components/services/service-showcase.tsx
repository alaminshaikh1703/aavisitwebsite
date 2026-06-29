"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Megaphone, Globe, TrendingUp, Users, Code, CreditCard, LayoutDashboard, Briefcase } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

import * as LucideIcons from "lucide-react"

const defaultServices = [
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: "Megaphone",
    description: "Data-driven acquisition strategies that scale your business. We don't just run ads; we build comprehensive marketing engines that turn cold traffic into loyal customers and maximize your ROI.",
    benefits: ["Multi-channel Campaign Management", "Conversion Rate Optimization (CRO)", "Advanced Analytics & Tracking", "Retargeting & Audience Segmentation"],
    metric: { value: "3.5x", label: "Average ROI Increase" },
    href: "/services/marketing",
    featuredImage: "/images/marketing.jpg"
  }
]

export function ServiceShowcase({ services }: { services?: any[] }) {
  const displayServices = services && services.length > 0 
    ? services.map(s => {
        const features = typeof s.features === 'object' && s.features ? s.features : {};
        return {
          id: s.id,
          title: s.title,
          icon: s.icon || "Briefcase",
          description: s.fullDescription || s.shortDescription,
          benefits: Array.isArray(s.benefits) && s.benefits.length > 0 ? s.benefits : ["Expert Implementation", "Dedicated Support", "Continuous Optimization"],
          metric: { 
            value: features.metricValue || "100%", 
            label: features.metricLabel || "Client Satisfaction" 
          },
          href: `/services/${s.slug}`,
          featuredImage: s.featuredImage
        }
      })
    : defaultServices;

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-32">
          {displayServices.map((service, index) => {
            const isEven = index % 2 === 0;
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Briefcase;
            
            return (
              <div 
                key={service.id}
                className={cn(
                  "flex flex-col gap-12 lg:gap-20 items-center",
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="flex-1 w-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 shadow-inner">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="bg-card dark:bg-white/[0.02] border border-border dark:border-white/5 rounded-2xl p-6 mb-8 shadow-sm">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Key Benefits</h3>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {service.benefits.map((benefit: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6">
                    <Link href={service.href} className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                      View Service Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    
                    <div className="flex items-center gap-4 border-l-2 border-border pl-6">
                      <div className="text-3xl font-extrabold text-foreground">{service.metric.value}</div>
                      <div className="text-sm font-medium text-muted-foreground leading-tight max-w-[100px]">{service.metric.label}</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Visual Mockup Side */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, rotateY: isEven ? 10 : -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="flex-1 w-full perspective-1000"
                >
                  <div className="relative rounded-3xl border border-border dark:border-white/10 bg-card dark:bg-white/[0.02] p-2 backdrop-blur-3xl shadow-2xl overflow-hidden group aspect-[4/3] flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border dark:border-white/10 bg-background flex flex-col shadow-inner items-center justify-center">
                      {service.featuredImage ? (
                        <img 
                          src={service.featuredImage} 
                          alt={service.title} 
                          className="w-full h-full object-cover z-10 relative group-hover:scale-105 transition-transform duration-700" 
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 flex items-center justify-center opacity-10">
                             <Icon className="h-64 w-64 text-primary" />
                          </div>
                          
                          <div className="relative z-10 text-center p-8 backdrop-blur-md bg-background/50 border border-border rounded-xl shadow-lg">
                            <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                            <h4 className="font-bold text-lg text-foreground mb-2">Interactive {service.title} Demo</h4>
                            <p className="text-sm text-muted-foreground">Premium visualization area.</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
