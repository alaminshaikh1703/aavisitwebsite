import { prisma } from "@/lib/prisma"
import { HeroForm } from "./hero-form"

export default async function HeroSettingsPage() {
  const settings = await prisma.siteSetting.findUnique({
    where: { id: "global" }
  })

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Hero & Global Settings</h1>
        <p className="text-zinc-400 mt-2">Manage your homepage hero section and global SEO settings.</p>
      </div>

      <HeroForm initialData={settings} />
    </div>
  )
}
