"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Aavis IT & Care completely transformed our digital presence. Their marketing engine increased our lead volume by 300% within the first 6 months. Absolutely stellar work.",
    author: "Sarah Jenkins",
    role: "CMO, TechFlow Enterprise",
    rating: 5
  },
  {
    quote: "The custom CRM they built for our sales team is a game-changer. We've eliminated hours of manual data entry and our close rate has never been higher.",
    author: "Michael Chang",
    role: "VP of Sales, Global Retail",
    rating: 5
  },
  {
    quote: "Working with Aavis feels like having an elite internal tech team. Their attention to detail on our new website and SEO strategy was exceptional from day one.",
    author: "Elena Rodriguez",
    role: "Founder, Elevate Digital",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Client Success</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Trusted by Global Brands</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border p-8 rounded-3xl relative shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="absolute top-8 right-8 h-12 w-12 text-muted/20" />
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-foreground font-medium leading-relaxed mb-8 relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/10">
                  <span className="font-bold text-primary">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
