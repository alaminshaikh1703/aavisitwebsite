import { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutStats } from "@/components/about/about-stats"
import { AboutServices } from "@/components/about/about-services"
import { AboutFeatures } from "@/components/about/about-features"
import { AboutGlobal } from "@/components/about/about-global"
import { AboutTech } from "@/components/about/about-tech"
import { AboutTestimonials } from "@/components/about/about-testimonials"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About Us | Digital Growth Agency | Aavis IT & Care",
  description: "Learn how Aavis IT & Care drives verifiable business growth for international clients through digital marketing, SEO, and premium web design.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutServices />
      <AboutFeatures />
      <AboutGlobal />
      <AboutTech />
      <AboutTestimonials />
      <AboutCTA />
    </>
  )
}
