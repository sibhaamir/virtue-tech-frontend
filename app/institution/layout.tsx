"use client"

import React, { useState } from "react"
import { Menu } from "lucide-react"
import { PanelSidebar } from "@/components/panels/sidebar"

export default function InstitutionLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const items = [
    { href: "/institution", label: "Dashboard" },
    { href: "/institution/tutors", label: "Tutor Management" },
    { href: "/institution/students", label: "Student Management" },
    { href: "/institution/courses", label: "Courses" },
    { href: "/institution/scheduling", label: "Scheduling" },
    { href: "/institution/payments", label: "Payments" },
    { href: "/institution/reports", label: "Reports" },
    { href: "/institution/announcements", label: "Announcements" },
    { href: "/institution/messaging", label: "Messaging" },
    { href: "/institution/library", label: "Library" },
    { href: "/institution/feedback", label: "Feedback" },
    { href: "/institution/ai", label: "AI Tools" },
    { href: "/institution/profile", label: "Profile" },
    { href: "/institution/support", label: "Support" },
    { href: "/institution/settings", label: "Settings" },
  ]

  return (
    <div className="flex min-h-screen">
      {/* 🔹 Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b z-50 flex items-center justify-between px-4 py-3 shadow-sm">
        <h2 className="font-semibold">Institution</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* 🔹 Sidebar (with responsive toggle) */}
      <PanelSidebar
        title="Institution"
        items={items}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* 🔹 Main Content */}
      <main className="flex-1 overflow-y-auto p-4 mt-12 md:mt-0">
        {children}
      </main>
    </div>
  )
}
