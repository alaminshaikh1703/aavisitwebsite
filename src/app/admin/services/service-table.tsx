"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImageUpload } from "@/components/admin/image-upload"
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose 
} from "@/components/ui/dialog"
import { createService, updateService, deleteService, toggleServiceStatus } from "./actions"
import { Edit, Trash, Plus, CheckCircle, XCircle } from "lucide-react"

export function ServiceTable({ initialData }: { initialData: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<any>(null)
  
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [shortDescription, setShortDescription] = useState("")
  const [fullDescription, setFullDescription] = useState("")
  const [icon, setIcon] = useState("")
  const [featuredImage, setFeaturedImage] = useState("")
  const [metaTitle, setMetaTitle] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  const [benefits, setBenefits] = useState("")
  const [metricValue, setMetricValue] = useState("")
  const [metricLabel, setMetricLabel] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleOpenModal = (item?: any) => {
    if (item) {
      setEditingItem(item)
      setTitle(item.title)
      setSlug(item.slug)
      setShortDescription(item.shortDescription)
      setFullDescription(item.fullDescription)
      setIcon(item.icon || "")
      setFeaturedImage(item.featuredImage || "")
      setMetaTitle(item.metaTitle || "")
      setMetaDescription(item.metaDescription || "")
      
      const benefitsArr = Array.isArray(item.benefits) ? item.benefits : []
      setBenefits(benefitsArr.join('\n'))
      
      const featuresObj = typeof item.features === 'object' && item.features ? item.features : {}
      setMetricValue(featuresObj.metricValue || "")
      setMetricLabel(featuresObj.metricLabel || "")
    } else {
      setEditingItem(null)
      setTitle("")
      setSlug("")
      setShortDescription("")
      setFullDescription("")
      setIcon("")
      setFeaturedImage("")
      setMetaTitle("")
      setMetaDescription("")
      setBenefits("")
      setMetricValue("")
      setMetricLabel("")
    }
    setIsModalOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData()
    formData.append("title", title)
    formData.append("slug", slug)
    formData.append("shortDescription", shortDescription)
    formData.append("fullDescription", fullDescription)
    formData.append("icon", icon)
    formData.append("featuredImage", featuredImage)
    formData.append("metaTitle", metaTitle)
    formData.append("metaDescription", metaDescription)
    formData.append("benefits", benefits)
    formData.append("metricValue", metricValue)
    formData.append("metricLabel", metricLabel)

    let res
    if (editingItem) {
      res = await updateService(editingItem.id, formData)
    } else {
      res = await createService(formData)
    }

    setIsLoading(false)
    if (res.error) {
      alert(res.error)
    } else {
      setIsModalOpen(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      const res = await deleteService(id)
      if (res.error) alert(res.error)
    }
  }

  const handleToggleStatus = async (id: string, currentStatus: boolean) => {
    const res = await toggleServiceStatus(id, !currentStatus)
    if (res.error) alert(res.error)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenModal()} className="bg-primary text-white">
              <Plus className="w-4 h-4 mr-2" /> Add Service
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingItem ? "Edit Service" : "Add Service"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-zinc-300">Service Title *</Label>
                  <Input 
                    id="title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
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
                    placeholder="e.g. web-development"
                    className="bg-zinc-950 border-zinc-800 text-white"
                  />
                  <p className="text-xs text-zinc-500">Auto-generated from title if left blank</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="shortDescription" className="text-zinc-300">Short Description *</Label>
                    <textarea 
                      id="shortDescription" 
                      value={shortDescription} 
                      onChange={(e) => setShortDescription(e.target.value)} 
                      required 
                      className="flex min-h-[80px] w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      placeholder="Summary for the homepage and cards"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fullDescription" className="text-zinc-300">Full Description *</Label>
                    <textarea 
                      id="fullDescription" 
                      value={fullDescription} 
                      onChange={(e) => setFullDescription(e.target.value)} 
                      required 
                      className="flex min-h-[150px] w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      placeholder="Detailed content for the service page"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="benefits" className="text-zinc-300">Key Benefits</Label>
                    <textarea 
                      id="benefits" 
                      value={benefits} 
                      onChange={(e) => setBenefits(e.target.value)} 
                      className="flex min-h-[100px] w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      placeholder="Enter one benefit per line..."
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-zinc-300">Featured Image (Optional)</Label>
                    <ImageUpload value={featuredImage} onChange={setFeaturedImage} onRemove={() => setFeaturedImage("")} />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
                    <div className="space-y-2">
                      <Label htmlFor="metricValue" className="text-zinc-300">Metric Value</Label>
                      <Input 
                        id="metricValue" 
                        value={metricValue} 
                        onChange={(e) => setMetricValue(e.target.value)} 
                        placeholder="e.g. 3.5x"
                        className="bg-zinc-950 border-zinc-800 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="metricLabel" className="text-zinc-300">Metric Label</Label>
                      <Input 
                        id="metricLabel" 
                        value={metricLabel} 
                        onChange={(e) => setMetricLabel(e.target.value)} 
                        placeholder="e.g. Average ROI"
                        className="bg-zinc-950 border-zinc-800 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-zinc-800">
                    <Label htmlFor="icon" className="text-zinc-300">Icon Name (Optional)</Label>
                    <Input 
                      id="icon" 
                      value={icon} 
                      onChange={(e) => setIcon(e.target.value)} 
                      placeholder="e.g. Code, Monitor, Smartphone"
                      className="bg-zinc-950 border-zinc-800 text-white"
                    />
                    <p className="text-xs text-zinc-500">Lucide icon name to display</p>
                  </div>

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
                  {isLoading ? "Saving..." : "Save Service"}
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
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Summary</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {initialData.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-zinc-500 bg-zinc-950">
                  No services added yet.
                </td>
              </tr>
            ) : (
              initialData.map((item) => (
                <tr key={item.id} className="bg-zinc-950 border-b border-zinc-800 hover:bg-zinc-900/50">
                  <td className="px-6 py-4 font-medium text-white">{item.title}</td>
                  <td className="px-6 py-4 max-w-sm truncate text-zinc-400">{item.shortDescription}</td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => handleToggleStatus(item.id, item.published)}
                      className={`flex items-center text-xs px-2 py-1 rounded-full ${item.published ? "bg-green-500/10 text-green-500" : "bg-zinc-500/10 text-zinc-500"}`}
                    >
                      {item.published ? (
                        <><CheckCircle className="w-3 h-3 mr-1" /> Published</>
                      ) : (
                        <><XCircle className="w-3 h-3 mr-1" /> Draft</>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleOpenModal(item)} className="h-8 border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(item.id)} className="h-8">
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
