"use client"
import { useState } from "react"
import { Menu } from "lucide-react"
import { PanelSidebar } from "@/components/panels/sidebar"

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const items = [
    { href: "/student", label: "Dashboard" },
    { href: "/student/tutors", label: "Tutors" },
    { href: "/student/sessions", label: "Sessions" },
    { href: "/student/classroom", label: "Classroom" },
    { href: "/student/messages", label: "Messages" },
    { href: "/student/gamification", label: "Gamification" },
    { href: "/student/library", label: "eBooks" },
    { href: "/student/progress", label: "Progress" },
    { href: "/student/ai-match", label: "AI Match" },
    { href: "/student/forum", label: "Forum" },
    { href: "/student/notifications", label: "Notifications" },
    { href: "/student/payments", label: "Payments" },
    { href: "/student/attendance", label: "Attendance" },
    { href: "/student/profile", label: "Profile" },
    { href: "/student/support", label: "Support" },
    { href: "/student/settings", label: "Settings" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <header className="flex justify-between items-center bg-white border-b px-4 py-3 fixed w-full z-50">
        <div className="font-bold text-lg">Virtue Tech</div>
        <button className="md:hidden p-2 rounded hover:bg-gray-100" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {/* Secondary bar for role */}
      <div className="flex justify-between items-center bg-gray-50 border-b px-4 py-2 mt-14 md:mt-0">
        <h2 className="font-semibold text-gray-800">Student</h2>
        <button className="md:hidden p-2 rounded hover:bg-gray-100" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar + Main */}
      <div className="flex flex-1">
        <PanelSidebar title="Student" items={items} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 p-4 mt-4 md:mt-0">{children}</main>
      </div>
    </div>
  )
}
