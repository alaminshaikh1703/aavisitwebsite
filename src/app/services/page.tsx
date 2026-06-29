

import { Metadata } from "next"

import { ServicesHero } from "@/components/services/services-hero"
import { ServiceShowcase } from "@/components/services/service-showcase"
import { ResultsSection } from "@/components/services/results-section"
import { PortfolioPreview } from "@/components/services/portfolio-preview"
import { Testimonials } from "@/components/services/testimonials"
import { FAQSection } from "@/components/services/faq-section"
import { ServicesCTA } from "@/components/services/services-cta"


import { prisma } from "@/lib/prisma"

export const metadata: Metadata = {
  title: "Premium Digital Services | Aavis IT & Care",
  description:
    "Explore our premium enterprise services including digital marketing, custom software development, SEO, and web design.",
}

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    where: { published: true },
    orderBy: { order: 'asc' }
  })

  const projects = await prisma.portfolioProject.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 3
  })

  const formattedProjects = projects.map((p, i) => {
    const results = Array.isArray(p.results) ? p.results as any[] : [];
    const firstResult = results[0] ? `${results[0].value} ${results[0].label}` : (p.clientName || 'Successful Project');
    const colors = [
      "from-blue-500 to-cyan-400",
      "from-purple-500 to-indigo-400",
      "from-emerald-500 to-teal-400"
    ];
    
    return {
      name: p.title,
      category: p.category || "Case Study",
      metric: firstResult,
      color: colors[i % colors.length],
      slug: p.slug,
      image: p.coverImage
    }
  })

  return (
    <>
      <ServicesHero />
      <ServiceShowcase services={services} />
      <ResultsSection />
      <PortfolioPreview projects={formattedProjects} />
      <Testimonials />
      <FAQSection />
      <ServicesCTA />
    </>
  )
}