"use client"

import { useState, useTransition } from "react"
import { updateSiteSettings } from "./actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageUpload } from "@/components/admin/image-upload"

export function HeroForm({ initialData }: { initialData: any }) {
  const [isPending, startTransition] = useTransition()
  const [heroBgImage, setHeroBgImage] = useState(initialData?.heroBgImage || "")
  const [heroImage, setHeroImage] = useState(initialData?.heroImage || "")
  const [ogImage, setOgImage] = useState(initialData?.ogImage || "")

  async function action(formData: FormData) {
    formData.append("heroBgImage", heroBgImage)
    formData.append("heroImage", heroImage)
    formData.append("ogImage", ogImage)

    const res = await updateSiteSettings(formData)
    if (res.error) {
      alert(res.error)
    } else {
      alert("Settings updated successfully!")
    }
  }

  return (
    <form key={JSON.stringify(initialData)} action={(formData) => startTransition(() => action(formData))} className="space-y-6">
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-white">Hero Section</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-zinc-300">Hero Title</Label>
              <Input 
                name="heroTitle" 
                defaultValue={initialData?.heroTitle || ""} 
                className="bg-zinc-950 border-zinc-800 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-zinc-300">Hero Subtitle</Label>
              <Input 
                name="heroSubtitle" 
                defaultValue={initialData?.heroSubtitle || ""} 
                className="bg-zinc-950 border-zinc-800 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-zinc-300">Button Text</Label>
              <Input 
                name="heroBtnText" 
                defaultValue={initialData?.heroBtnText || ""} 
                className="bg-zinc-950 border-zinc-800 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-zinc-300">Button URL</Label>
              <Input 
                name="heroBtnUrl" 
                defaultValue={initialData?.heroBtnUrl || ""} 
                className="bg-zinc-950 border-zinc-800 text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-2">
              <Label className="text-zinc-300">Hero Background Image</Label>
              <ImageUpload value={heroBgImage} onChange={setHeroBgImage} onRemove={() => setHeroBgImage("")} />
            </div>
            <div className="space-y-2">
              <Label className="text-zinc-300">Hero Foreground Image</Label>
              <ImageUpload value={heroImage} onChange={setHeroImage} onRemove={() => setHeroImage("")} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-white">Global SEO Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-zinc-300">Site Name</Label>
            <Input 
              name="siteName" 
              defaultValue={initialData?.siteName || ""} 
              className="bg-zinc-950 border-zinc-800 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-zinc-300">Meta Title Format</Label>
            <Input 
              name="metaTitle" 
              defaultValue={initialData?.metaTitle || ""} 
              className="bg-zinc-950 border-zinc-800 text-white"
              placeholder="%s | Aavis IT & Care"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-zinc-300">Global Meta Description</Label>
            <Input 
              name="metaDescription" 
              defaultValue={initialData?.metaDescription || ""} 
              className="bg-zinc-950 border-zinc-800 text-white"
            />
          </div>
          <div className="space-y-2 pt-4">
            <Label className="text-zinc-300">Global OG Image (Social Sharing)</Label>
            <ImageUpload value={ogImage} onChange={setOgImage} onRemove={() => setOgImage("")} />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-white">Contact Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-zinc-300">Google Maps Embed HTML (Iframe)</Label>
            <textarea 
              name="googleMapsIframe" 
              defaultValue={initialData?.googleMapsIframe || ""} 
              placeholder='<iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
              className="flex min-h-[100px] w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white font-mono"
            />
            <p className="text-xs text-zinc-500">Go to Google Maps &gt; Share &gt; Embed a map &gt; Copy HTML</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button type="submit" disabled={isPending} className="bg-primary text-white px-8">
          {isPending ? "Saving..." : "Save Settings"}
        </Button>
      </div>
    </form>
  )
}
