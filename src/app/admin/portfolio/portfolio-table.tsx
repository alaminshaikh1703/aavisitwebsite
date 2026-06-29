"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImageUpload } from "@/components/admin/image-upload"
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose 
} from "@/components/ui/dialog"
import { createPortfolioProject, updatePortfolioProject, deletePortfolioProject, togglePortfolioProjectStatus } from "./actions"
import { Edit, Trash, Plus, CheckCircle, XCircle } from "lucide-react"

export function PortfolioTable({ initialData }: { initialData: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<any>(null)
  
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [clientName, setClientName] = useState("")
  const [category, setCategory] = useState("")
  const [industry, setIndustry] = useState("")
  const [overview, setOverview] = useState("")
  const [challenge, setChallenge] = useState("")
  const [solution, setSolution] = useState("")
  const [description, setDescription] = useState("")
  const [servicesProvided, setServicesProvided] = useState("")
  const [technologies, setTechnologies] = useState("")
  const [results, setResults] = useState("")
  const [coverImage, setCoverImage] = useState("")
  const [challengeImage, setChallengeImage] = useState("")
  const [metaTitle, setMetaTitle] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleOpenModal = (item?: any) => {
    if (item) {
      setEditingItem(item)
      setTitle(item.title)
      setSlug(item.slug)
      setClientName(item.clientName || "")
      setCategory(item.category || "")
      setIndustry(item.industry || "")
      setOverview(item.overview || "")
      setChallenge(item.challenge || "")
      setSolution(item.solution || "")
      setDescription(item.description)
      setServicesProvided(item.servicesProvided ? item.servicesProvided.join(", ") : "")
      setTechnologies(item.technologies ? item.technologies.join(", ") : "")
      setResults(item.results ? JSON.stringify(item.results) : "")
      setCoverImage(item.coverImage || "")
      setChallengeImage(item.challengeImage || "")
      setMetaTitle(item.metaTitle || "")
      setMetaDescription(item.metaDescription || "")
    } else {
      setEditingItem(null)
      setTitle("")
      setSlug("")
      setClientName("")
      setCategory("")
      setIndustry("")
      setOverview("")
      setChallenge("")
      setSolution("")
      setDescription("")
      setServicesProvided("")
      setTechnologies("")
      setResults("")
      setCoverImage("")
      setChallengeImage("")
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
    formData.append("clientName", clientName)
    formData.append("category", category)
    formData.append("industry", industry)
    formData.append("overview", overview)
    formData.append("challenge", challenge)
    formData.append("solution", solution)
    formData.append("description", description)
    formData.append("servicesProvided", servicesProvided)
    formData.append("technologies", technologies)
    formData.append("results", results)
    formData.append("coverImage", coverImage)
    formData.append("challengeImage", challengeImage)
    formData.append("metaTitle", metaTitle)
    formData.append("metaDescription", metaDescription)

    let res
    if (editingItem) {
      res = await updatePortfolioProject(editingItem.id, formData)
    } else {
      res = await createPortfolioProject(formData)
    }

    setIsLoading(false)
    if (res.error) {
      alert(res.error)
    } else {
      setIsModalOpen(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      const res = await deletePortfolioProject(id)
      if (res.error) alert(res.error)
    }
  }

  const handleToggleStatus = async (id: string, currentStatus: boolean) => {
    const res = await togglePortfolioProjectStatus(id, !currentStatus)
    if (res.error) alert(res.error)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenModal()} className="bg-primary text-white">
              <Plus className="w-4 h-4 mr-2" /> Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingItem ? "Edit Project" : "Add Project"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-zinc-300">Project Title *</Label>
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
                    placeholder="e.g. e-commerce-redesign"
                    className="bg-zinc-950 border-zinc-800 text-white"
                  />
                  <p className="text-xs text-zinc-500">Auto-generated from title if left blank</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clientName" className="text-zinc-300">Client Name (Optional)</Label>
                  <Input 
                    id="clientName" 
                    value={clientName} 
                    onChange={(e) => setClientName(e.target.value)}
                    className="bg-zinc-950 border-zinc-800 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-zinc-300">Category (Optional)</Label>
                  <Input 
                    id="category" 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g. Web Development"
                    className="bg-zinc-950 border-zinc-800 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-zinc-300">Industry (Optional)</Label>
                  <Input 
                    id="industry" 
                    value={industry} 
                    onChange={(e) => setIndustry(e.target.value)}
                    placeholder="e.g. Healthcare"
                    className="bg-zinc-950 border-zinc-800 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="overview" className="text-zinc-300">Project Overview (Short summary)</Label>
                <textarea 
                  id="overview" 
                  value={overview} 
                  onChange={(e) => setOverview(e.target.value)} 
                  className="flex min-h-[80px] w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenge" className="text-zinc-300">The Challenge</Label>
                <textarea 
                  id="challenge" 
                  value={challenge} 
                  onChange={(e) => setChallenge(e.target.value)} 
                  className="flex min-h-[100px] w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="solution" className="text-zinc-300">Our Solution</Label>
                <textarea 
                  id="solution" 
                  value={solution} 
                  onChange={(e) => setSolution(e.target.value)} 
                  className="flex min-h-[100px] w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-zinc-300">Additional Description *</Label>
                <textarea 
                  id="description" 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  required 
                  className="flex min-h-[150px] w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="servicesProvided" className="text-zinc-300">Services Provided (comma separated)</Label>
                  <Input 
                    id="servicesProvided" 
                    value={servicesProvided} 
                    onChange={(e) => setServicesProvided(e.target.value)}
                    placeholder="e.g. SEO, Web Design"
                    className="bg-zinc-950 border-zinc-800 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="technologies" className="text-zinc-300">Technologies (comma separated)</Label>
                  <Input 
                    id="technologies" 
                    value={technologies} 
                    onChange={(e) => setTechnologies(e.target.value)}
                    placeholder="e.g. React, Node.js"
                    className="bg-zinc-950 border-zinc-800 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="results" className="text-zinc-300">Business Results (JSON Array)</Label>
                <Input 
                  id="results" 
                  value={results} 
                  onChange={(e) => setResults(e.target.value)}
                  placeholder='[{"metric": "+180%", "label": "Leads"}]'
                  className="bg-zinc-950 border-zinc-800 text-white font-mono text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-zinc-300">Cover Image (Optional)</Label>
                    <ImageUpload value={coverImage} onChange={setCoverImage} onRemove={() => setCoverImage("")} />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-zinc-300">Challenge Image (Optional)</Label>
                    <ImageUpload value={challengeImage} onChange={setChallengeImage} onRemove={() => setChallengeImage("")} />
                  </div>
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
                  {isLoading ? "Saving..." : "Save Project"}
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
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {initialData.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-zinc-500 bg-zinc-950">
                  No projects added yet.
                </td>
              </tr>
            ) : (
              initialData.map((item) => (
                <tr key={item.id} className="bg-zinc-950 border-b border-zinc-800 hover:bg-zinc-900/50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-white">{item.title}</div>
                    {item.clientName && <div className="text-xs text-zinc-500">Client: {item.clientName}</div>}
                  </td>
                  <td className="px-6 py-4">{item.category || "-"}</td>
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
