"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImageUpload } from "@/components/admin/image-upload"
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose 
} from "@/components/ui/dialog"
import { createClient, updateClient, deleteClient, toggleClientStatus } from "./actions"
import { Edit, Trash, Plus, CheckCircle, XCircle } from "lucide-react"

export function ClientTable({ initialData }: { initialData: any[] }) {
  const [clients, setClients] = useState(initialData)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingClient, setEditingClient] = useState<any>(null)
  
  const [name, setName] = useState("")
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [logoUrl, setLogoUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleOpenModal = (client?: any) => {
    if (client) {
      setEditingClient(client)
      setName(client.name)
      setWebsiteUrl(client.websiteUrl || "")
      setLogoUrl(client.logoUrl)
    } else {
      setEditingClient(null)
      setName("")
      setWebsiteUrl("")
      setLogoUrl("")
    }
    setIsModalOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData()
    formData.append("name", name)
    formData.append("websiteUrl", websiteUrl)
    formData.append("logoUrl", logoUrl)

    let res
    if (editingClient) {
      res = await updateClient(editingClient.id, formData)
    } else {
      res = await createClient(formData)
    }

    setIsLoading(false)
    if (res.error) {
      alert(res.error)
    } else {
      setIsModalOpen(false)
      // Note: Data is revalidated by server action, so the page will automatically update
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this client?")) {
      const res = await deleteClient(id)
      if (res.error) alert(res.error)
    }
  }

  const handleToggleStatus = async (id: string, currentStatus: boolean) => {
    const res = await toggleClientStatus(id, !currentStatus)
    if (res.error) alert(res.error)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenModal()} className="bg-primary text-white">
              <Plus className="w-4 h-4 mr-2" /> Add Client
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{editingClient ? "Edit Client" : "Add Client"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-zinc-300">Client Name *</Label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                  className="bg-zinc-950 border-zinc-800 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="websiteUrl" className="text-zinc-300">Website URL (Optional)</Label>
                <Input 
                  id="websiteUrl" 
                  value={websiteUrl} 
                  onChange={(e) => setWebsiteUrl(e.target.value)} 
                  className="bg-zinc-950 border-zinc-800 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-zinc-300">Logo Image *</Label>
                <ImageUpload value={logoUrl} onChange={setLogoUrl} onRemove={() => setLogoUrl("")} />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline" className="border-zinc-800 bg-zinc-900 text-white hover:bg-zinc-800">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit" className="bg-primary text-white" disabled={isLoading || !logoUrl}>
                  {isLoading ? "Saving..." : "Save Client"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border border-zinc-800 rounded-lg overflow-hidden">
        <table className="w-full text-sm text-left text-zinc-400">
          <thead className="text-xs text-zinc-300 uppercase bg-zinc-900 border-b border-zinc-800">
            <tr>
              <th className="px-6 py-4">Logo</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Website</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {initialData.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-zinc-500 bg-zinc-950">
                  No clients added yet.
                </td>
              </tr>
            ) : (
              initialData.map((client) => (
                <tr key={client.id} className="bg-zinc-950 border-b border-zinc-800 hover:bg-zinc-900/50">
                  <td className="px-6 py-4">
                    <div className="h-10 w-24 bg-white/5 rounded p-2 flex items-center justify-center">
                      <img src={client.logoUrl} alt={client.name} className="max-h-full max-w-full object-contain" />
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-white">{client.name}</td>
                  <td className="px-6 py-4">
                    {client.websiteUrl ? (
                      <a href={client.websiteUrl} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                        {client.websiteUrl}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => handleToggleStatus(client.id, client.active)}
                      className={`flex items-center text-xs px-2 py-1 rounded-full ${client.active ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}
                    >
                      {client.active ? (
                        <><CheckCircle className="w-3 h-3 mr-1" /> Active</>
                      ) : (
                        <><XCircle className="w-3 h-3 mr-1" /> Inactive</>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleOpenModal(client)} className="h-8 border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(client.id)} className="h-8">
                      <Trash className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
