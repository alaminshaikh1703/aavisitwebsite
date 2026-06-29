import { prisma } from "@/lib/prisma"
import { ServiceTable } from "./service-table"

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    orderBy: { order: 'asc' }
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Services</h1>
        <p className="text-zinc-400 mt-2">Manage the services offered by your agency.</p>
      </div>

      <ServiceTable initialData={services} />
    </div>
  )
}
