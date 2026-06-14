

import { Metadata } from "next"

import { ServicesHero } from "@/components/services/services-hero"
import { ServiceShowcase } from "@/components/services/service-showcase"
import { ResultsSection } from "@/components/services/results-section"
import { PortfolioPreview } from "@/components/services/portfolio-preview"
import { Testimonials } from "@/components/services/testimonials"
import { FAQSection } from "@/components/services/faq-section"
import { ServicesCTA } from "@/components/services/services-cta"


export const metadata: Metadata = {
  title: "Premium Digital Services | Aavis IT & Care",
  description:
    "Explore our premium enterprise services including digital marketing, custom software development, SEO, and web design.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceShowcase />
      <ResultsSection />
      <PortfolioPreview />
      <Testimonials />
      <FAQSection />
      <ServicesCTA />
    </>
  )
}