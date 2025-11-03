"use client"
import { useState } from "react"
import { Menu } from "lucide-react"
import { PanelSidebar } from "@/components/panels/sidebar"

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const items = [
    { href: "/teacher", label: "Dashboard" },
    { href: "/teacher/sessions", label: "Sessions" },
    { href: "/teacher/students", label: "Students" },
    { href: "/teacher/classroom", label: "Classroom" },
    { href: "/teacher/messages", label: "Messages" },
    { href: "/teacher/earnings", label: "Earnings" },
    { href: "/teacher/library", label: "eBooks" },
    { href: "/teacher/analytics", label: "Analytics" },
    { href: "/teacher/reviews", label: "Reviews" },
    { href: "/teacher/institute", label: "Institute" },
    { href: "/teacher/gamification", label: "Gamification" },
    { href: "/teacher/reports", label: "Reports" },
    { href: "/teacher/notifications", label: "Notifications" },
    { href: "/teacher/profile", label: "Profile" },
    { href: "/teacher/forum", label: "Forum" },
    { href: "/teacher/assignments", label: "Assignments" },
    { href: "/teacher/support", label: "Support" },
    { href: "/teacher/settings", label: "Settings" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
     
     

      <header className="flex justify-between items-center bg-gray-50 border-b px-4 py-2 mt-14 md:mt-0">
        <h2 className="font-semibold text-gray-800">Teacher</h2>
        <button className="md:hidden p-2 rounded hover:bg-gray-100" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-5 w-5" />
        </button>
      </header>

      <div className="flex flex-1">
        <PanelSidebar title="Teacher" items={items} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 p-4 mt-4 md:mt-0">{children}</main>
      </div>
    </div>
  )
}
