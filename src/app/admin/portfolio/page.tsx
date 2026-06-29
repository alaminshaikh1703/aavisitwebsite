import { prisma } from "@/lib/prisma"
import { PortfolioTable } from "./portfolio-table"

export default async function PortfolioPage() {
  const projects = await prisma.portfolioProject.findMany({
    orderBy: { order: 'asc' }
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Portfolio Projects</h1>
        <p className="text-zinc-400 mt-2">Manage and showcase your past work and case studies.</p>
      </div>

      <PortfolioTable initialData={projects} />
    </div>
  )
}
