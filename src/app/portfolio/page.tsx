import { Metadata } from "next"
import { getProjects } from "@/lib/api"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import { PortfolioResults } from "@/components/portfolio/portfolio-results"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Premium Portfolio & Case Studies | Aavis IT & Care",
  description: "View our portfolio of successful software development, digital marketing, and SEO projects.",
}

export default async function PortfolioPage() {
  const projects = await getProjects()

  return (
    <>
      <PortfolioHero />
      <PortfolioGrid projects={projects} />
      <PortfolioResults />
      <ServicesCTA />
    </>
  )
}
