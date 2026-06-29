"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImageUpload } from "@/components/admin/image-upload"
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose 
} from "@/components/ui/dialog"
import { createBlogPost, updateBlogPost, deleteBlogPost, toggleBlogPostStatus } from "./actions"
import { Edit, Trash, Plus, CheckCircle, XCircle } from "lucide-react"

export function BlogTable({ initialData }: { initialData: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<any>(null)
  
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [featuredImage, setFeaturedImage] = useState("")
  const [author, setAuthor] = useState("")
  const [authorRole, setAuthorRole] = useState("")
  const [authorImage, setAuthorImage] = useState("")
  const [readingTime, setReadingTime] = useState("")
  const [categories, setCategories] = useState("")
  const [tags, setTags] = useState("")
  
  const [metaTitle, setMetaTitle] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleOpenModal = (item?: any) => {
    if (item) {
      setEditingItem(item)
      setTitle(item.title)
      setSlug(item.slug)
      setExcerpt(item.excerpt || "")
      setContent(item.content || "")
      setFeaturedImage(item.featuredImage || "")
      setAuthor(item.author || "")
      setAuthorRole(item.authorRole || "")
      setAuthorImage(item.authorImage || "")
      setReadingTime(item.readingTime || "")
      setCategories(item.categories ? item.categories.join(", ") : "")
      setTags(item.tags ? item.tags.join(", ") : "")
      setMetaTitle(item.metaTitle || "")
      setMetaDescription(item.metaDescription || "")
    } else {
      setEditingItem(null)
      setTitle("")
      setSlug("")
      setExcerpt("")
      setContent("")
      setFeaturedImage("")
      setAuthor("")
      setAuthorRole("")
      setAuthorImage("")
      setReadingTime("")
      setCategories("")
      setTags("")
      setMetaTitle("")
      setMetaDescription("")
    }
    setIsModalOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData()
    formData.append("title", title)
    formData.append("slug", slug)
    formData.append("excerpt", excerpt)
    formData.append("content", content)
    formData.append("featuredImage", featuredImage)
    formData.append("author", author)
    formData.append("authorRole", authorRole)
    formData.append("authorImage", authorImage)
    formData.append("readingTime", readingTime)
    formData.append("categories", categories)
    formData.append("tags", tags)
    formData.append("metaTitle", metaTitle)
    formData.append("metaDescription", metaDescription)

    let res
    if (editingItem) {
      res = await updateBlogPost(editingItem.id, formData)
    } else {
      res = await createBlogPost(formData)
    }

    setIsLoading(false)
    if (res.error) {
      alert(res.error)
    } else {
      setIsModalOpen(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      const res = await deleteBlogPost(id)
      if (res.error) alert(res.error)
    }
  }

  const handleToggleStatus = async (id: string, currentStatus: boolean) => {
    const res = await toggleBlogPostStatus(id, !currentStatus)
    if (res.error) alert(res.error)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenModal()} className="bg-primary text-white">
              <Plus className="w-4 h-4 mr-2" /> Write Post
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingItem ? "Edit Post" : "Write Post"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-8 pt-4">
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-zinc-300">Post Title *</Label>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} required className="bg-zinc-950 border-zinc-800" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-zinc-300">URL Slug</Label>
                    <Input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="e.g. future-of-saas" className="bg-zinc-950 border-zinc-800" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-zinc-300">Excerpt / Short Description</Label>
                    <textarea 
                      value={excerpt} 
                      onChange={(e) => setExcerpt(e.target.value)} 
                      className="flex min-h-[80px] w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <Label className="text-zinc-300">Categories (comma separated)</Label>
                        <Input value={categories} onChange={(e) => setCategories(e.target.value)} placeholder="AI, SaaS" className="bg-zinc-950 border-zinc-800" />
                     </div>
                     <div className="space-y-2">
                        <Label className="text-zinc-300">Reading Time</Label>
                        <Input value={readingTime} onChange={(e) => setReadingTime(e.target.value)} placeholder="e.g. 5 min read" className="bg-zinc-950 border-zinc-800" />
                     </div>
                  </div>
                </div>

                <div className="space-y-6">
                   <div className="space-y-2">
                     <Label className="text-zinc-300">Featured Image</Label>
                     <ImageUpload value={featuredImage} onChange={setFeaturedImage} onRemove={() => setFeaturedImage("")} />
                   </div>
                   
                   <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 space-y-4">
                     <h4 className="text-sm font-semibold text-white">Author Information</h4>
                     <div className="space-y-2">
                        <Label className="text-zinc-400">Author Name</Label>
                        <Input value={author} onChange={(e) => setAuthor(e.target.value)} className="bg-zinc-950 border-zinc-800 h-9" />
                     </div>
                     <div className="space-y-2">
                        <Label className="text-zinc-400">Author Role</Label>
                        <Input value={authorRole} onChange={(e) => setAuthorRole(e.target.value)} placeholder="e.g. CTO, Senior Engineer" className="bg-zinc-950 border-zinc-800 h-9" />
                     </div>
                     <div className="space-y-2">
                        <Label className="text-zinc-400">Author Profile Image</Label>
                        <div className="h-20">
                          <ImageUpload value={authorImage} onChange={setAuthorImage} onRemove={() => setAuthorImage("")} />
                        </div>
                     </div>
                   </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-zinc-300">Full Content (Supports HTML / Markdown structure) *</Label>
                <textarea 
                  value={content} 
                  onChange={(e) => setContent(e.target.value)} 
                  required 
                  className="flex min-h-[300px] w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-4 text-sm text-white font-mono leading-relaxed"
                  placeholder="<h2>Introduction</h2><p>Write your blog post here...</p>"
                />
              </div>

              <div className="pt-4 border-t border-zinc-800 space-y-4">
                 <h3 className="text-sm font-medium text-white">SEO Settings (Optional)</h3>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <Label className="text-zinc-400">Meta Title</Label>
                       <Input 
                          value={metaTitle} 
                          onChange={(e) => setMetaTitle(e.target.value)} 
                          placeholder="Custom SEO Title"
                          className="bg-zinc-950 border-zinc-800 text-white" 
                       />
                    </div>
                    <div className="space-y-2">
                       <Label className="text-zinc-400">Meta Description</Label>
                       <textarea 
                          value={metaDescription} 
                          onChange={(e) => setMetaDescription(e.target.value)} 
                          placeholder="Brief description for search engines"
                          className="flex min-h-[40px] w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white"
                       />
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
                  {isLoading ? "Saving..." : "Save Post"}
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
              <th className="px-6 py-4">Author</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {initialData.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-zinc-500 bg-zinc-950">
                  No blog posts written yet.
                </td>
              </tr>
            ) : (
              initialData.map((item) => (
                <tr key={item.id} className="bg-zinc-950 border-b border-zinc-800/50 hover:bg-zinc-900/50">
                  <td className="px-6 py-4 font-medium text-white max-w-[300px] truncate">{item.title}</td>
                  <td className="px-6 py-4">{item.author || "Unknown"}</td>
                  <td className="px-6 py-4">{new Date(item.createdAt).toLocaleDateString()}</td>
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
