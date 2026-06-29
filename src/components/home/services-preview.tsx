"use client"

import { ArrowRight, Code, Users, CreditCard, Globe, TrendingUp, Megaphone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

import * as LucideIcons from "lucide-react"

const defaultServices = [
  { name: "Digital Marketing", icon: "Megaphone", href: "/services/marketing", description: "Data-driven acquisition" },
  { name: "Web Development", icon: "Globe", href: "/services/web", description: "Premium corporate websites" },
  { name: "Global SEO", icon: "TrendingUp", href: "/services/seo", description: "Dominate search rankings" },
  { name: "Social Media Marketing", icon: "Users", href: "/services/smm", description: "Brand visibility & engagement" },
  { name: "Custom Software", icon: "Code", href: "/services/custom-software", description: "Enterprise-grade applications" },
  { name: "POS & CRM Systems", icon: "CreditCard", href: "/services/pos-crm", description: "Cloud-native business tech" },
]

export function ServicesPreview({ services }: { services?: any[] }) {
  const displayServices = services && services.length > 0
    ? services.filter(s => s.published).map(s => ({
        name: s.title,
        icon: s.icon || "Briefcase",
        href: `/services/${s.slug}`,
        description: s.shortDescription
      }))
    : defaultServices;
  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent rounded-full pointer-events-none -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary tracking-wide uppercase">Core Expertise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Enterprise Digital Solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => {
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Briefcase;
            return (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} 
                className="group relative flex flex-col items-start justify-between rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-8 shadow-sm transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(61,0,255,0.2)] hover:-translate-y-2 hover:border-primary/50"
              >
                <div className="flex items-center gap-x-4 mb-6 w-full border-b border-white/5 pb-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 shadow-inner group-hover:from-primary group-hover:to-accent transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(61,0,255,0.5)] group-hover:drop-shadow-none" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground tracking-tight">{service.name}</h3>
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed flex-1">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors mt-auto">
                  Explore Solution <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
