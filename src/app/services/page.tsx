import { Metadata } from "next"
import { getServices } from "@/lib/api"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Cloud, Brain, LayoutDashboard, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services | Aavis IT & Care",
  description: "Explore our premium enterprise services including custom software development, digital transformation, and AI solutions.",
}

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="h-8 w-8 text-primary" />,
  Cloud: <Cloud className="h-8 w-8 text-primary" />,
  Brain: <Brain className="h-8 w-8 text-primary" />,
  LayoutDashboard: <LayoutDashboard className="h-8 w-8 text-primary" />,
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Expertise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Services designed for enterprise scale
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We provide end-to-end technology solutions that empower your business to operate more efficiently and deliver better experiences to your customers.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <Card key={service.id} className="flex flex-col border border-border bg-card">
                <CardHeader>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                    {iconMap[service.icon] || <Code className="h-8 w-8 text-primary" />}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <CardDescription className="text-base flex-1">
                    {service.description}
                  </CardDescription>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-8 flex w-full items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    View Details
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
