"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What makes your digital marketing approach different?",
    answer: "We don't just focus on vanity metrics. Our entire methodology is built around driving actual revenue and high-quality leads. We combine technical SEO, data-driven paid acquisition, and conversion rate optimization to build a sustainable growth engine for your business."
  },
  {
    question: "How long does it take to build a custom website or application?",
    answer: "A premium corporate website typically takes 4-8 weeks from discovery to launch. Custom software applications (like CRM or POS systems) generally require 3-6 months depending on the complexity, integrations, and specific business logic required."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Absolutely. We view our client relationships as long-term partnerships. We offer dedicated growth, support, and maintenance retainers to ensure your software remains secure, optimized, and aligned with your evolving business goals."
  },
  {
    question: "Can your custom software integrate with our existing tools?",
    answer: "Yes, our development team specializes in API integrations and cloud architecture. We can seamlessly connect your new custom software with your existing ERP, accounting software, marketing tools, or legacy databases."
  }
]

export function FAQSection() {
  return (
    <section className="py-24 bg-card relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Questions & Answers</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Frequently Asked Questions</h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion defaultValue={["item-0"]} className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
