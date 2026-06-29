"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImageUpload } from "@/components/admin/image-upload"
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose 
} from "@/components/ui/dialog"
import { createTestimonial, updateTestimonial, deleteTestimonial } from "./actions"
import { Edit, Trash, Plus, Star } from "lucide-react"

export function TestimonialTable({ initialData }: { initialData: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<any>(null)
  
  const [clientName, setClientName] = useState("")
  const [company, setCompany] = useState("")
  const [position, setPosition] = useState("")
  const [image, setImage] = useState("")
  const [rating, setRating] = useState("5")
  const [review, setReview] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleOpenModal = (item?: any) => {
    if (item) {
      setEditingItem(item)
      setClientName(item.clientName)
      setCompany(item.company || "")
      setPosition(item.position || "")
      setImage(item.image || "")
      setRating(item.rating.toString())
      setReview(item.review)
    } else {
      setEditingItem(null)
      setClientName("")
      setCompany("")
      setPosition("")
      setImage("")
      setRating("5")
      setReview("")
    }
    setIsModalOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData()
    formData.append("clientName", clientName)
    formData.append("company", company)
    formData.append("position", position)
    formData.append("image", image)
    formData.append("rating", rating)
    formData.append("review", review)

    let res
    if (editingItem) {
      res = await updateTestimonial(editingItem.id, formData)
    } else {
      res = await createTestimonial(formData)
    }

    setIsLoading(false)
    if (res.error) {
      alert(res.error)
    } else {
      setIsModalOpen(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      const res = await deleteTestimonial(id)
      if (res.error) alert(res.error)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenModal()} className="bg-primary text-white">
              <Plus className="w-4 h-4 mr-2" /> Add Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingItem ? "Edit Testimonial" : "Add Testimonial"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="clientName" className="text-zinc-300">Client Name *</Label>
                  <Input 
                    id="clientName" 
                    value={clientName} 
                    onChange={(e) => setClientName(e.target.value)} 
                    required 
                    className="bg-zinc-950 border-zinc-800 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-zinc-300">Company (Optional)</Label>
                  <Input 
                    id="company" 
                    value={company} 
                    onChange={(e) => setCompany(e.target.value)} 
                    className="bg-zinc-950 border-zinc-800 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position" className="text-zinc-300">Position (Optional)</Label>
                  <Input 
                    id="position" 
                    value={position} 
                    onChange={(e) => setPosition(e.target.value)} 
                    className="bg-zinc-950 border-zinc-800 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rating" className="text-zinc-300">Rating (1-5)</Label>
                  <Input 
                    id="rating" 
                    type="number"
                    min="1" max="5"
                    value={rating} 
                    onChange={(e) => setRating(e.target.value)} 
                    required
                    className="bg-zinc-950 border-zinc-800 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="review" className="text-zinc-300">Review Text *</Label>
                <textarea 
                  id="review" 
                  value={review} 
                  onChange={(e) => setReview(e.target.value)} 
                  required 
                  className="flex min-h-[120px] w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-zinc-300">Client Photo (Optional)</Label>
                <ImageUpload value={image} onChange={setImage} onRemove={() => setImage("")} />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline" className="border-zinc-800 bg-zinc-900 text-white hover:bg-zinc-800">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit" className="bg-primary text-white" disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Testimonial"}
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
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4">Review</th>
              <th className="px-6 py-4">Rating</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {initialData.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-zinc-500 bg-zinc-950">
                  No testimonials added yet.
                </td>
              </tr>
            ) : (
              initialData.map((item) => (
                <tr key={item.id} className="bg-zinc-950 border-b border-zinc-800 hover:bg-zinc-900/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {item.image ? (
                        <img src={item.image} alt={item.clientName} className="w-10 h-10 rounded-full object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold">
                          {item.clientName.charAt(0)}
                        </div>
                      )}
                      <div>
                        <div className="font-medium text-white">{item.clientName}</div>
                        <div className="text-xs text-zinc-500">
                          {[item.position, item.company].filter(Boolean).join(" at ")}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 max-w-xs truncate" title={item.review}>
                    {item.review}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < item.rating ? "fill-current" : "text-zinc-700"}`} />
                      ))}
                    </div>
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
