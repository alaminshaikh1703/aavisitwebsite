import { Metadata } from "next"
import { prisma } from "@/lib/prisma"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import { PortfolioResults } from "@/components/portfolio/portfolio-results"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Premium Portfolio & Case Studies | Aavis IT & Care",
  description: "View our portfolio of successful software development, digital marketing, and SEO projects.",
}

export default async function PortfolioPage() {
  const projects = await prisma.portfolioProject.findMany({
    where: { published: true },
    orderBy: [{ order: 'asc' }, { createdAt: 'desc' }]
  })

  // Format projects to match the expected format for PortfolioGrid
  const formattedProjects = projects.map(p => ({
    id: p.id,
    title: p.title,
    category: p.category || "Uncategorized",
    image: p.coverImage || "/images/placeholder.jpg",
    slug: p.slug,
    client: p.clientName || "",
    industry: p.industry || "",
    overview: p.overview || p.description,
    challenge: p.challenge || "",
    solution: p.solution || "",
    servicesProvided: Array.isArray(p.servicesProvided) ? p.servicesProvided as string[] : [],
    technologies: Array.isArray(p.technologies) ? p.technologies as string[] : [],
    results: Array.isArray(p.results) ? p.results as any[] : [],
    screenshots: Array.isArray(p.gallery) ? p.gallery as string[] : [],
  }))

  return (
    <>
      <PortfolioHero />
      <PortfolioGrid projects={formattedProjects as any} />
      <PortfolioResults />
      <ServicesCTA />
    </>
  )
}
