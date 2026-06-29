"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Image as ImageIcon, X, UploadCloud, Loader2 } from "lucide-react"

interface ImageUploadProps {
  value: string | undefined | null
  onChange: (url: string) => void
  onRemove: () => void
}

export function ImageUpload({ value, onChange, onRemove }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    const formData = new FormData()
    formData.append("file", file)

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      })

      if (res.ok) {
        const data = await res.json()
        onChange(data.url)
      } else {
        console.error("Upload failed")
        alert("Upload failed. Please try again.")
      }
    } catch (err) {
      console.error(err)
      alert("Upload failed. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="space-y-4 w-full">
      {value ? (
        <div className="relative rounded-md overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center h-[200px] w-full max-w-sm group">
          <img src={value} alt="Uploaded" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button type="button" variant="destructive" size="icon" onClick={onRemove}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div 
          onClick={() => inputRef.current?.click()}
          className="border-2 border-dashed border-zinc-800 rounded-md bg-zinc-950/50 hover:bg-zinc-900 transition-colors flex flex-col items-center justify-center h-[200px] w-full max-w-sm cursor-pointer"
        >
          {isUploading ? (
            <Loader2 className="h-10 w-10 text-zinc-500 animate-spin" />
          ) : (
            <>
              <UploadCloud className="h-10 w-10 text-zinc-500 mb-2" />
              <p className="text-sm text-zinc-400 font-medium">Click to upload image</p>
              <p className="text-xs text-zinc-600 mt-1">PNG, JPG, WEBP up to 5MB</p>
            </>
          )}
        </div>
      )}
      <input
        type="file"
        ref={inputRef}
        onChange={handleUpload}
        className="hidden"
        accept="image/*"
        disabled={isUploading}
      />
    </div>
  )
}
