"use client"

import React, { useState } from "react"
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
    <div className="flex min-h-screen">
      {/* Mobile Header with Menu Button */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b z-50 flex items-center justify-between px-4 py-3 shadow-sm">
        <h2 className="font-semibold">Teacher</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <PanelSidebar
        title="Teacher"
        items={items}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 mt-12 md:mt-0">
        {children}
      </main>
    </div>
  )
}
