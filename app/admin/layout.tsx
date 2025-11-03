"use client"
import { useState } from "react"
import { Menu } from "lucide-react"
import { PanelSidebar } from "@/components/panels/sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const items = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/users", label: "Users" },
    { href: "/admin/tutors", label: "Tutors" },
    { href: "/admin/students", label: "Students" },
    { href: "/admin/payments", label: "Payments" },
    { href: "/admin/reports", label: "Reports" },
    { href: "/admin/notifications", label: "Notifications" },
    { href: "/admin/settings", label: "Settings" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Main Bar */}
      <header className="flex justify-between items-center bg-white border-b px-4 py-3 fixed w-full z-50">
        <div className="font-bold text-lg">Virtue Tech</div>
        <button className="md:hidden p-2 rounded hover:bg-gray-100" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {/* Second Bar */}
      <div className="flex justify-between items-center bg-gray-50 border-b px-4 py-2 mt-14 md:mt-0">
        <h2 className="font-semibold text-gray-800">Admin</h2>
        <button className="md:hidden p-2 rounded hover:bg-gray-100" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar + Main Content */}
      <div className="flex flex-1">
        <PanelSidebar title="Admin" items={items} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 p-4 mt-4 md:mt-0">{children}</main>
      </div>
    </div>
  )
}
