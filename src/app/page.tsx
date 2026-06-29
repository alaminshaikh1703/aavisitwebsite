import { Hero } from "@/components/home/hero"
import { ClientLogos } from "@/components/home/client-logos"
import { ServicesPreview } from "@/components/home/services-preview"
import { IndustriesWeServe } from "@/components/home/industries"
import { SoftwareShowcase } from "@/components/home/software-showcase"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Stats } from "@/components/home/stats"
import { DevelopmentProcess } from "@/components/home/process"
import { CTA } from "@/components/home/cta"
import { getSoftwareProducts } from "@/lib/api"
import { prisma } from "@/lib/prisma"

export default async function Home() {
  const products = await getSoftwareProducts()
  const siteSettings = await prisma.siteSetting.findUnique({
    where: { id: "global" }
  })
  const clientLogos = await prisma.clientLogo.findMany({
    orderBy: { order: 'asc' }
  })

  const services = await prisma.service.findMany({
    orderBy: { order: 'asc' }
  })

  return (
    <>
      <Hero settings={siteSettings} />
      <ClientLogos clients={clientLogos} />
      <ServicesPreview services={services} />
      <IndustriesWeServe />
      <WhyChooseUs />
      <Stats />
      <DevelopmentProcess />
      <SoftwareShowcase products={products} />
      <CTA />
    </>
  )
}
