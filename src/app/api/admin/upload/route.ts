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
    
    let fileUrl = ""
    
    // Check if we have an ImgBB API Key (For Vercel/Cloud deployment)
    const imgbbKey = process.env.IMGBB_API_KEY;
    
    if (imgbbKey) {
      // Upload to ImgBB
      const imgbbFormData = new FormData();
      imgbbFormData.append("image", new Blob([buffer]));
      
      const imgbbRes = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
        method: 'POST',
        body: imgbbFormData
      });
      
      const imgbbData = await imgbbRes.json();
      if (imgbbData.success) {
        fileUrl = imgbbData.data.url;
      } else {
        throw new Error("ImgBB upload failed");
      }
    } else {
      // Local filesystem fallback (For Local Dev)
      const uploadDir = join(process.cwd(), "public", "uploads")
      
      try {
        await mkdir(uploadDir, { recursive: true })
      } catch (err) {
        // directory might already exist
      }

      const path = join(uploadDir, fileName)
      await writeFile(path, buffer)
      fileUrl = `/uploads/${fileName}`
    }

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
