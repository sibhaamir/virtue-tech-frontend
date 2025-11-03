"use client"
import { useState } from "react"
import { Menu } from "lucide-react"
import { PanelSidebar } from "@/components/panels/sidebar"

export default function InstitutionLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const items = [
    { href: "/institution", label: "Dashboard" },
    { href: "/institution/tutors", label: "Tutors" },
    { href: "/institution/students", label: "Students" },
    { href: "/institution/classes", label: "Classes" },
    { href: "/institution/attendance", label: "Attendance" },
    { href: "/institution/reports", label: "Reports" },
    { href: "/institution/payments", label: "Payments" },
    { href: "/institution/notifications", label: "Notifications" },
    { href: "/institution/settings", label: "Settings" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
    

      {/* Second Bar */}
      <header className="flex justify-between items-center bg-gray-50 border-b px-4 py-2 mt-14 md:mt-0">
        <h2 className="font-semibold text-gray-800">Institution</h2>
        <button className="md:hidden p-2 rounded hover:bg-gray-100" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-5 w-5" />
        </button>
      </header>

      {/* Sidebar + Main Content */}
      <div className="flex flex-1">
        <PanelSidebar title="Institution" items={items} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 p-4 mt-4 md:mt-0">{children}</main>
      </div>
    </div>
  )
}
