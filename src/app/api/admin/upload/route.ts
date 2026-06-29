import { NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const uniqueId = Date.now().toString()
    const originalName = file.name.replace(/\s+/g, '-').toLowerCase()
    const fileName = `${uniqueId}-${originalName}`
    
    const uploadDir = join(process.cwd(), "public", "uploads")
    
    try {
      await mkdir(uploadDir, { recursive: true })
    } catch (err) {
      // directory might already exist
    }

    const path = join(uploadDir, fileName)
    await writeFile(path, buffer)
    
    const fileUrl = `/uploads/${fileName}`

    const media = await prisma.media.create({
      data: {
        fileName: originalName,
        url: fileUrl,
        type: file.type,
        size: file.size,
      }
    })

    return NextResponse.json({ success: true, url: fileUrl, media })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 })
  }
}
