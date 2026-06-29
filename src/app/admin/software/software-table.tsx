"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImageUpload } from "@/components/admin/image-upload"
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose 
} from "@/components/ui/dialog"
import { createSoftwareProduct, updateSoftwareProduct, deleteSoftwareProduct, toggleSoftwareProductStatus } from "./actions"
import { Edit, Trash, Plus, CheckCircle, XCircle } from "lucide-react"

export function SoftwareTable({ initialData }: { initialData: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<any>(null)
  
  const [name, setName] = useState("")
  const [slug, setSlug] = useState("")
  const [category, setCategory] = useState("")
  const [metric, setMetric] = useState("")
  const [icon, setIcon] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [features, setFeatures] = useState("")
  const [metaTitle, setMetaTitle] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleOpenModal = (item?: any) => {
    if (item) {
      setEditingItem(item)
      setName(item.name)
      setSlug(item.slug)
      setCategory(item.category || "")
      setMetric(item.metric || "")
      setIcon(item.icon || "")
      setImage(item.image || "")
      setDescription(item.description)
      setFeatures(item.features ? item.features.join(", ") : "")
      setMetaTitle(item.metaTitle || "")
      setMetaDescription(item.metaDescription || "")
    } else {
      setEditingItem(null)
      setName("")
      setSlug("")
      setCategory("")
      setMetric("")
      setIcon("")
      setImage("")
      setDescription("")
      setFeatures("")
      setMetaTitle("")
      setMetaDescription("")
    }
    setIsModalOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData()
    formData.append("name", name)
    formData.append("slug", slug)
    formData.append("category", category)
    formData.append("metric", metric)
    formData.append("icon", icon)
    formData.append("image", image)
    formData.append("description", description)
    formData.append("features", features)
    formData.append("metaTitle", metaTitle)
    formData.append("metaDescription", metaDescription)

    let res
    if (editingItem) {
      res = await updateSoftwareProduct(editingItem.id, formData)
    } else {
      res = await createSoftwareProduct(formData)
    }

    setIsLoading(false)
    if (res.error) {
      alert(res.error)
    } else {
      setIsModalOpen(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      const res = await deleteSoftwareProduct(id)
      if (res.error) alert(res.error)
    }
  }

  const handleToggleStatus = async (id: string, currentStatus: boolean) => {
    const res = await toggleSoftwareProductStatus(id, !currentStatus)
    if (res.error) alert(res.error)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenModal()} className="bg-primary text-white">
              <Plus className="w-4 h-4 mr-2" /> Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingItem ? "Edit Product" : "Add Product"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-zinc-300">Product Name *</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    className="bg-zinc-950 border-zinc-800 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slug" className="text-zinc-300">URL Slug (Optional)</Label>
                  <Input 
                    id="slug" 
                    value={slug} 
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="e.g. enterprise-crm"
                    className="bg-zinc-950 border-zinc-800 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-zinc-300">Category</Label>
                  <Input 
                    id="category" 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g. CRM & Sales"
                    className="bg-zinc-950 border-zinc-800 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="metric" className="text-zinc-300">Highlight Metric</Label>
                  <Input 
                    id="metric" 
                    value={metric} 
                    onChange={(e) => setMetric(e.target.value)}
                    placeholder="e.g. +40% Sales Velocity"
                    className="bg-zinc-950 border-zinc-800 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="icon" className="text-zinc-300">Lucide Icon Name</Label>
                  <Input 
                    id="icon" 
                    value={icon} 
                    onChange={(e) => setIcon(e.target.value)}
                    placeholder="e.g. Users, Activity, Box"
                    className="bg-zinc-950 border-zinc-800 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="features" className="text-zinc-300">Features (comma separated)</Label>
                  <Input 
                    id="features" 
                    value={features} 
                    onChange={(e) => setFeatures(e.target.value)}
                    placeholder="e.g. AI Lead Scoring, Custom Dashboards"
                    className="bg-zinc-950 border-zinc-800 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-zinc-300">Product Description *</Label>
                <textarea 
                  id="description" 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  required 
                  className="flex min-h-[100px] w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label className="text-zinc-300">Cover Image</Label>
                  <ImageUpload value={image} onChange={setImage} onRemove={() => setImage("")} />
                </div>
                
                <div className="space-y-4">
                  <div className="pt-4 border-t border-zinc-800 space-y-4">
                    <h3 className="text-sm font-medium text-white">SEO Settings</h3>
                    <div className="space-y-2">
                      <Label htmlFor="metaTitle" className="text-zinc-400">Meta Title</Label>
                      <Input 
                        id="metaTitle" 
                        value={metaTitle} 
                        onChange={(e) => setMetaTitle(e.target.value)} 
                        className="bg-zinc-950 border-zinc-800 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="metaDescription" className="text-zinc-400">Meta Description</Label>
                      <textarea 
                        id="metaDescription" 
                        value={metaDescription} 
                        onChange={(e) => setMetaDescription(e.target.value)} 
                        className="flex min-h-[80px] w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline" className="border-zinc-800 bg-zinc-900 text-white hover:bg-zinc-800">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit" className="bg-primary text-white" disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Product"}
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
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {initialData.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-zinc-500 bg-zinc-950">
                  No products added yet.
                </td>
              </tr>
            ) : (
              initialData.map((item) => (
                <tr key={item.id} className="bg-zinc-950 border-b border-zinc-800/50 hover:bg-zinc-900/50">
                  <td className="px-6 py-4 font-medium text-white">{item.name}</td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => handleToggleStatus(item.id, item.published)}
                      className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                    >
                      {item.published ? (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-medium">
                          <CheckCircle className="w-3 h-3" /> Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-zinc-500/10 text-zinc-400 text-xs font-medium">
                          <XCircle className="w-3 h-3" /> Draft
                        </span>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleOpenModal(item)} className="text-zinc-400 hover:text-white">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)} className="text-zinc-400 hover:text-red-400">
                        <Trash className="w-4 h-4" />
                      </Button>
                    </div>
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
