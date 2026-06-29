import { prisma } from "@/lib/prisma"
import { ClientTable } from "./client-table"
import { TestimonialTable } from "./testimonial-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function ClientsPage() {
  const clients = await prisma.clientLogo.findMany({
    orderBy: { order: 'asc' }
  })
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { order: 'asc' }
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Clients & Testimonials</h1>
        <p className="text-zinc-400 mt-2">Manage client logos and customer testimonials.</p>
      </div>

      <Tabs defaultValue="logos" className="w-full">
        <TabsList className="bg-zinc-900 border border-zinc-800 p-1">
          <TabsTrigger value="logos" className="text-zinc-400 data-[state=active]:bg-zinc-800 data-[state=active]:text-white">
            Client Logos
          </TabsTrigger>
          <TabsTrigger value="testimonials" className="text-zinc-400 data-[state=active]:bg-zinc-800 data-[state=active]:text-white">
            Testimonials
          </TabsTrigger>
        </TabsList>
        <TabsContent value="logos" className="pt-4">
          <ClientTable initialData={clients} />
        </TabsContent>
        <TabsContent value="testimonials" className="pt-4">
          <TestimonialTable initialData={testimonials} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
