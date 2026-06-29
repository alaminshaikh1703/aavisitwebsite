import { Metadata } from "next"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { ServicesCTA } from "@/components/services/services-cta"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const project = await prisma.portfolioProject.findUnique({
    where: { slug: resolvedParams.slug }
  })
  if (!project) return { title: "Project Not Found | Aavis IT & Care" }

  return {
    title: project.metaTitle || `${project.title} - Case Study | Aavis IT & Care`,
    description: project.metaDescription || project.overview || project.description,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const dbProject = await prisma.portfolioProject.findUnique({
    where: { slug: resolvedParams.slug }
  })

  if (!dbProject) {
    notFound()
  }

  // Format to match exactly what the premium UI expects
  const project = {
    title: dbProject.title,
    category: dbProject.category || "Uncategorized",
    industry: dbProject.industry || "General",
    overview: dbProject.overview || dbProject.description,
    client: dbProject.clientName || "Confidential",
    servicesProvided: Array.isArray(dbProject.servicesProvided) ? dbProject.servicesProvided as string[] : [],
    image: dbProject.coverImage || "/images/placeholder.jpg",
    results: Array.isArray(dbProject.results) ? dbProject.results as any[] : [],
    technologies: Array.isArray(dbProject.technologies) ? dbProject.technologies as string[] : [],
    challenge: dbProject.challenge || "No challenge provided.",
    solution: dbProject.solution || "No solution provided.",
    screenshots: Array.isArray(dbProject.gallery) ? dbProject.gallery as string[] : [],
  }

  return (
    <article className="bg-background pb-0 pt-20">
      {/* Premium Header */}
      <header className="relative pt-20 pb-32 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/portfolio" className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-12 group">
            <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
              {project.category}
            </span>
            <span className="text-sm font-medium text-muted-foreground">{project.industry}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 max-w-4xl leading-tight">
            {project.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-12">
            {project.overview}
          </p>
          
          <div className="flex flex-wrap items-center gap-12 pt-8 border-t border-border">
             <div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Client</p>
                <p className="text-lg font-bold text-foreground">{project.client}</p>
             </div>
             <div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Services</p>
                <div className="flex flex-wrap gap-2">
                   {project.servicesProvided.map((svc, i) => (
                      <span key={i} className="text-sm font-medium text-foreground">{svc}{i !== project.servicesProvided.length - 1 ? ',' : ''}</span>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* Hero Mockup */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 mb-32">
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-border shadow-2xl bg-card">
           <div className="absolute inset-0 bg-gradient-to-tr from-muted/50 to-muted flex items-center justify-center">
             {/* Fallback mockup since we don't have actual high-res images */}
             <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
             />
           </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
           
           {/* Left Sidebar - Metrics & Tech */}
           <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-32 space-y-12">
                 <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                    <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">Business Results</h3>
                    <div className="space-y-6">
                       {project.results.map((res, i) => (
                          <div key={i} className="border-l-2 border-primary/30 pl-4">
                             <div className="text-4xl font-black text-foreground mb-1">{res.metric}</div>
                             <div className="text-sm font-medium text-muted-foreground leading-tight">{res.label}</div>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                    <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">Technologies Used</h3>
                    <ul className="space-y-3">
                       {project.technologies.map((tech, i) => (
                          <li key={i} className="flex items-center gap-3">
                             <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                             <span className="text-sm font-medium text-foreground">{tech}</span>
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>

           {/* Right Content - Challenge & Solution */}
           <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                 <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                 <p className="text-muted-foreground leading-relaxed mb-12 text-lg">
                    {project.challenge}
                 </p>
                 
                 {/* Secondary Visual Placeholder */}
                 <div className="aspect-video w-full rounded-2xl bg-muted border border-border mb-12 flex items-center justify-center relative overflow-hidden">
                    <img 
                       src={dbProject.challengeImage || project.screenshots[0] || project.image} 
                       alt="Project details" 
                       className="w-full h-full object-cover"
                    />
                 </div>

                 <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
                 <p className="text-muted-foreground leading-relaxed mb-12 text-lg">
                    {project.solution}
                 </p>
              </div>

              {/* Client Testimonial Placeholder */}
              <div className="mt-16 bg-primary/5 border border-primary/20 rounded-3xl p-10 relative">
                 <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic mb-8 relative z-10">
                    "Aavis IT & Care delivered beyond our expectations. They didn't just execute a project; they engineered a growth engine that completely transformed our business metrics."
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-white shadow-lg">
                       C
                    </div>
                    <div>
                       <h4 className="font-bold text-foreground">Client Stakeholder</h4>
                       <p className="text-sm text-muted-foreground">{project.client}</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <ServicesCTA />
    </article>
  )
}
