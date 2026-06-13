"use client"

import { motion } from "framer-motion"
import { Megaphone, LayoutTemplate, Search, Share2, Users, CreditCard, Code2 } from "lucide-react"

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven campaigns that maximize ROI and brand visibility across all digital channels.",
    benefit: "Drive verifiable revenue growth"
  },
  {
    icon: LayoutTemplate,
    title: "Website Design & Dev",
    description: "High-converting, lightning-fast web experiences engineered for scale and aesthetics.",
    benefit: "Increase visitor conversion rates"
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Technical and content-driven SEO strategies to dominate search engine results pages.",
    benefit: "Capture high-intent organic traffic"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engaging social strategies that build community and drive direct acquisition.",
    benefit: "Expand market share and loyalty"
  },
  {
    icon: Users,
    title: "CRM Development",
    description: "Custom customer relationship management systems tailored to your sales processes.",
    benefit: "Streamline enterprise operations"
  },
  {
    icon: CreditCard,
    title: "POS Solutions",
    description: "Modern point-of-sale software for seamless omnichannel retail experiences.",
    benefit: "Accelerate transaction flow"
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Complex web applications and SaaS platforms built with cutting-edge stacks.",
    benefit: "Solve unique business challenges"
  }
]

export function AboutServices() {
  return (
    <section className="py-24 md:py-32 bg-background relative border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
            Everything you need to scale digitally.
          </h3>
          <p className="text-lg text-muted-foreground">
            We provide an end-to-end suite of digital growth services. From acquiring users to processing their transactions, we build the engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border p-8 rounded-3xl overflow-hidden hover:border-primary/50 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-background border border-border rounded-2xl flex items-center justify-center mb-6 text-foreground group-hover:text-primary transition-colors group-hover:scale-110 duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                
                <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs font-bold text-primary uppercase tracking-wider">Business Benefit</p>
                  <p className="text-sm font-medium text-foreground mt-1">{service.benefit}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
