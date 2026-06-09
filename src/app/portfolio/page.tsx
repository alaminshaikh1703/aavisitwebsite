import { Metadata } from "next"
import { getProjects } from "@/lib/api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Portfolio | Aavis IT & Care",
  description: "View our portfolio of successful software development and digital transformation projects.",
}

export default async function PortfolioPage() {
  const projects = await getProjects()

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Work</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We've helped leading global brands transform their operations. Explore our recent case studies and software products.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden border-border transition-all hover:shadow-lg">
              <div className="h-48 w-full bg-muted flex items-center justify-center text-muted-foreground relative">
                <span className="absolute inset-0 flex items-center justify-center">Image Placeholder</span>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader className="pt-6">
                <div className="flex items-center gap-x-4 text-xs mb-2">
                  <time dateTime="2026-01-01" className="text-muted-foreground">2026</time>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <CardTitle className="text-xl line-clamp-1">{project.title}</CardTitle>
                <div className="text-sm text-muted-foreground mt-1">Client: {project.client}</div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="list-disc pl-5 space-y-1 mb-6 text-sm text-muted-foreground">
                  {project.results.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center text-sm font-semibold leading-6 text-primary hover:text-primary/80 transition-colors"
                  >
                    Read case study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
