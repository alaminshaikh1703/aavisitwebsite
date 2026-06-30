import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    const passwordHash = await bcrypt.hash('It&CareAdm!n', 10);
    
    const admin = await prisma.admin.upsert({
      where: { username: 'Adm!n' },
      update: { passwordHash },
      create: {
        username: 'Adm!n',
        passwordHash,
      },
    });

    return NextResponse.json({ 
      success: true, 
      message: "Admin user successfully created/updated on the cloud database!",
      username: admin.username
    });
  } catch (error) {
    console.error("Setup error:", error);
    return NextResponse.json({ 
      success: false, 
      error: "Failed to setup admin user." 
    }, { status: 500 });
  }
}
