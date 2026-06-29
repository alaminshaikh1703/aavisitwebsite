import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = await prisma.service.findUnique({
    where: { slug }
  })

  if (!service) {
    return { title: 'Service Not Found | Aavis IT & Care' }
  }

  return {
    title: service.metaTitle || `${service.title} | Aavis IT & Care`,
    description: service.metaDescription || service.shortDescription,
  }
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await prisma.service.findUnique({
    where: { slug }
  })

  if (!service) {
    notFound()
  }

  const benefits = Array.isArray(service.benefits) ? service.benefits as string[] : []
  const features = typeof service.features === 'object' && service.features ? service.features : {} as any

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/services" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all services
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {service.shortDescription}
              </p>
            </div>

            {benefits.length > 0 && (
              <div className="bg-card dark:bg-white/[0.02] border border-border dark:border-white/5 rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-foreground uppercase tracking-wider mb-6">Key Benefits</h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                      <span className="text-base font-medium text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {features.metricValue ? (
              <div className="flex items-center gap-6 border-l-4 border-primary pl-6 py-2">
                <div className="text-4xl md:text-5xl font-black text-foreground">{features.metricValue}</div>
                <div className="text-lg font-medium text-muted-foreground leading-tight max-w-[150px]">{features.metricLabel}</div>
              </div>
            ) : null}
            
            <div className="pt-8">
              <Link href="/contact" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-lg">
                Get Started with {service.title}
              </Link>
            </div>

            <div className="prose prose-invert max-w-none text-muted-foreground pt-8 border-t border-border/50">
              {/* Splitting fullDescription by newlines to render paragraphs */}
              {service.fullDescription.split('\n').map((paragraph, idx) => (
                paragraph.trim() ? <p key={idx} className="mb-4">{paragraph}</p> : null
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl border border-border dark:border-white/10 bg-card dark:bg-white/[0.02] p-2 backdrop-blur-3xl shadow-2xl overflow-hidden aspect-[4/3] lg:sticky lg:top-32">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-50"></div>
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border dark:border-white/10 bg-background flex flex-col shadow-inner items-center justify-center">
              {service.featuredImage ? (
                <img 
                  src={service.featuredImage} 
                  alt={service.title} 
                  className="w-full h-full object-cover z-10" 
                />
              ) : (
                <div className="text-center p-8 backdrop-blur-md bg-background/50 border border-border rounded-xl shadow-lg z-10">
                  <h4 className="font-bold text-2xl text-foreground mb-2">{service.title}</h4>
                  <p className="text-muted-foreground">Premium visualization area.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
