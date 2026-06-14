"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Megaphone, Globe, TrendingUp, Users, Code, CreditCard, LayoutDashboard, Briefcase } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const showcaseServices = [
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    description: "Data-driven acquisition strategies that scale your business. We don't just run ads; we build comprehensive marketing engines that turn cold traffic into loyal customers and maximize your ROI.",
    benefits: ["Multi-channel Campaign Management", "Conversion Rate Optimization (CRO)", "Advanced Analytics & Tracking", "Retargeting & Audience Segmentation"],
    metric: { value: "3.5x", label: "Average ROI Increase" },
    href: "/services/marketing",
  },
  {
    id: "web",
    title: "Website Design & Development",
    icon: Globe,
    description: "Premium, high-converting corporate websites built on modern tech stacks. We craft digital experiences that combine stunning aesthetics with lightning-fast performance and seamless user journeys.",
    benefits: ["Custom UI/UX Design", "Next.js & React Development", "Headless CMS Integration", "Mobile-First Optimization"],
    metric: { value: "99+", label: "Lighthouse Performance Score" },
    href: "/services/web",
  },
  {
    id: "seo",
    title: "SEO Services",
    icon: TrendingUp,
    description: "Dominate search rankings and capture high-intent organic traffic. Our technical and content-driven SEO strategies ensure your brand is discovered by the people actively searching for your solutions.",
    benefits: ["Technical SEO Audits", "Keyword Strategy & Mapping", "High-Quality Link Building", "Content Optimization"],
    metric: { value: "210%", label: "Average Traffic Growth" },
    href: "/services/seo",
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    icon: Users,
    description: "Build brand authority and engage your audience where they spend their time. We create compelling social narratives and manage vibrant communities across all major platforms.",
    benefits: ["Platform-Specific Strategies", "Engaging Visual Content Creation", "Community Management", "Influencer Partnerships"],
    metric: { value: "1.2M+", label: "Monthly Engagements Generated" },
    href: "/services/smm",
  },
  {
    id: "crm",
    title: "CRM Development",
    icon: LayoutDashboard,
    description: "Custom Customer Relationship Management systems tailored to your exact sales process. Automate workflows, track leads effectively, and close deals faster without the bloat of off-the-shelf software.",
    benefits: ["Custom Pipeline Management", "Automated Email Sequences", "Third-party API Integrations", "Advanced Reporting Dashboards"],
    metric: { value: "40%", label: "Increase in Sales Productivity" },
    href: "/services/crm",
  },
  {
    id: "pos",
    title: "POS Software",
    icon: CreditCard,
    description: "Cloud-native Point of Sale systems designed for modern retail and hospitality. Seamlessly connect your physical storefronts with your digital operations for real-time synchronization.",
    benefits: ["Omnichannel Inventory Sync", "Secure Payment Processing", "Staff Management & Permissions", "Customer Loyalty Programs"],
    metric: { value: "100%", label: "Real-time Data Accuracy" },
    href: "/services/pos",
  },
  {
    id: "inventory",
    title: "Inventory Systems",
    icon: Briefcase,
    description: "Intelligent inventory management solutions that prevent stockouts and overstocking. Gain total visibility over your supply chain from warehouse to final delivery.",
    benefits: ["Multi-warehouse Tracking", "Automated Reordering Alerts", "Barcode & RFID Scanning", "Supplier Management"],
    metric: { value: "30%", label: "Reduction in Holding Costs" },
    href: "/services/inventory",
  },
  {
    id: "project-management",
    title: "Project Management Solutions",
    icon: Code,
    description: "Bespoke project management tools built around your team's unique methodology. Foster collaboration, track milestones, and deliver projects on time and under budget.",
    benefits: ["Custom Workflows & Kanban", "Time & Resource Tracking", "Client Portals & Access", "Automated Status Reporting"],
    metric: { value: "25%", label: "Faster Project Delivery" },
    href: "/services/project-management",
  }
]

export function ServiceShowcase() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-32">
          {showcaseServices.map((service, index) => {
            const isEven = index % 2 === 0;
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
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="bg-card dark:bg-white/[0.02] border border-border dark:border-white/5 rounded-2xl p-6 mb-8 shadow-sm">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Key Benefits</h3>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, i) => (
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
                      {/* Abstract Visual Placeholder based on Service */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                         <service.icon className="h-64 w-64 text-primary" />
                      </div>
                      
                      <div className="relative z-10 text-center p-8 backdrop-blur-md bg-background/50 border border-border rounded-xl shadow-lg">
                        <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h4 className="font-bold text-lg text-foreground mb-2">Interactive {service.title} Demo</h4>
                        <p className="text-sm text-muted-foreground">Premium visualization area.</p>
                      </div>
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
