"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    content: "Aavis IT & Care completely overhauled our digital marketing strategy. In 6 months, our organic lead volume tripled, and our new web platform conversion rate jumped by 45%. True growth partners.",
    author: "Sarah Jenkins",
    role: "CMO, TechGlobal Inc.",
    rating: 5
  },
  {
    content: "We hired them for a custom POS integration, but they ended up rebuilding our entire online architecture. Their engineers are world-class, and their communication is transparent at every step.",
    author: "Michael Chang",
    role: "Operations Director, RetailScale",
    rating: 5
  },
  {
    content: "Our SEO rankings were stagnant for years. The Aavis team came in, audited our site, deployed a massive technical fix, and now we dominate the top 3 spots for our most competitive keywords.",
    author: "Elena Rodriguez",
    role: "Founder, SaaSFlow",
    rating: 5
  }
]

export function AboutTestimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Client Feedback</h2>
          <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
            Don't just take our word for it.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border p-8 rounded-3xl shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-[#FFB800] text-[#FFB800]" />
                  ))}
                </div>
                <p className="text-lg text-foreground italic leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xl">
                  {testimonial.author.charAt(0)}
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
