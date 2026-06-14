import { Metadata } from "next"
import { SoftwareHero } from "@/components/software/software-hero"
import { SoftwareTabs } from "@/components/software/software-tabs"
import { SoftwareGrid } from "@/components/software/software-grid"
import { SoftwareBenefits } from "@/components/software/software-benefits"
import { SoftwareShowcase } from "@/components/software/software-showcase"
import { SoftwareIndustries } from "@/components/software/software-industries"
import { SoftwareResults } from "@/components/software/software-results"
import { SoftwareCTA } from "@/components/software/software-cta"

export const metadata: Metadata = {
  title: "Enterprise Software Solutions | Aavis IT & Care",
  description: "Custom business software built for massive scale. CRM, POS, Inventory, and Project Management solutions engineered by Aavis IT & Care.",
}

export default function SoftwarePage() {
  return (
    <div className="bg-white">
      <SoftwareHero />
      <SoftwareTabs />
      <SoftwareGrid />
      <SoftwareBenefits />
      <SoftwareShowcase />
      <SoftwareIndustries />
      <SoftwareResults />
      <SoftwareCTA />
    </div>
  )
}

