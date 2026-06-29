"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, Users, Image as ImageIcon, FileText, Briefcase, Code, Settings, LogOut, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

const sidebarLinks = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Hero & Global", href: "/admin/hero", icon: Settings },
  { name: "Clients", href: "/admin/clients", icon: Users },
  { name: "Services", href: "/admin/services", icon: Briefcase },
  { name: "Portfolio", href: "/admin/portfolio", icon: ImageIcon },
  { name: "Software Products", href: "/admin/software", icon: Code },
  { name: "Blog", href: "/admin/blog", icon: FileText },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/admin/login")
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-zinc-900 border-r border-zinc-800 transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="h-full flex flex-col">
          <div className="h-16 flex items-center px-6 border-b border-zinc-800">
            <span className="text-xl font-bold text-white tracking-tight">Aavis CMS</span>
          </div>
          
          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
            {sidebarLinks.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    isActive 
                      ? "bg-primary text-white" 
                      : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className={`mr-3 flex-shrink-0 h-5 w-5 ${isActive ? "text-white" : "text-zinc-500"}`} />
                  {link.name}
                </Link>
              )
            })}
          </nav>

          <div className="p-4 border-t border-zinc-800">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-zinc-400 hover:text-white hover:bg-zinc-800"
              onClick={handleLogout}
            >
              <LogOut className="mr-3 h-5 w-5 text-zinc-500" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-zinc-900 border-b border-zinc-800 md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)} className="text-zinc-400">
            <Menu className="h-6 w-6" />
          </Button>
          <span className="text-lg font-bold text-white">Aavis CMS</span>
          <div className="w-6" /> {/* Spacer for centering */}
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
