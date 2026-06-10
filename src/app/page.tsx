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

export default async function Home() {
  const products = await getSoftwareProducts()

  return (
    <>
      <Hero />
      <ClientLogos />
      <ServicesPreview />
      <IndustriesWeServe />
      <WhyChooseUs />
      <Stats />
      <DevelopmentProcess />
      <SoftwareShowcase products={products} />
      {/* Testimonials, FAQ placeholders can be added below Process if needed later */}
      <CTA />
    </>
  )
}
