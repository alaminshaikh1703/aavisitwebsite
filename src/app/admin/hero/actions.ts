"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { verifyAuth } from "@/lib/auth"
import { cookies } from "next/headers"

export async function updateSiteSettings(formData: FormData) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("admin_session")?.value
    const session = await verifyAuth(token || null)

    if (!session) {
      return { error: "Unauthorized" }
    }

    const data = {
      heroTitle: formData.get("heroTitle") as string,
      heroSubtitle: formData.get("heroSubtitle") as string,
      heroBtnText: formData.get("heroBtnText") as string,
      heroBtnUrl: formData.get("heroBtnUrl") as string,
      heroBgImage: formData.get("heroBgImage") as string,
      heroImage: formData.get("heroImage") as string,
      siteName: formData.get("siteName") as string,
      metaTitle: formData.get("metaTitle") as string,
      metaDescription: formData.get("metaDescription") as string,
      ogImage: formData.get("ogImage") as string,
      googleMapsIframe: formData.get("googleMapsIframe") as string,
    }

    await prisma.siteSetting.upsert({
      where: { id: "global" },
      update: data,
      create: {
        id: "global",
        ...data
      }
    })

    revalidatePath("/")
    revalidatePath("/admin/hero")

    return { success: true }
  } catch (error) {
    console.error("Failed to update site settings:", error)
    return { error: "Failed to update settings" }
  }
}
