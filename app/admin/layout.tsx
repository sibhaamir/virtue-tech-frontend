"use client"

import React, { useState } from "react"
import { Menu } from "lucide-react"
import { PanelSidebar } from "@/components/panels/sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const items = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/users", label: "User Management" },
    { href: "/admin/tutors", label: "Tutor Management" },
    { href: "/admin/students", label: "Student Management" },
    { href: "/admin/institutes", label: "Institute Mgmt" },
    { href: "/admin/payments", label: "Payments" },
    { href: "/admin/sessions", label: "Sessions" },
    { href: "/admin/messaging", label: "Messaging" },
    { href: "/admin/library", label: "Library" },
    { href: "/admin/ai", label: "AI & Automation" },
    { href: "/admin/chatbot", label: "Chatbot" },
    { href: "/admin/gamification", label: "Gamification" },
    { href: "/admin/reports", label: "Reports" },
    { href: "/admin/calendar", label: "Calendar" },
    { href: "/admin/forum", label: "Forum" },
    { href: "/admin/attendance", label: "Attendance" },
    { href: "/admin/settings", label: "Settings" },
    { href: "/admin/support", label: "Support" },
    { href: "/admin/cms", label: "CMS" },
    { href: "/admin/auth", label: "Access Logs" },
  ]

  return (
    <div className="flex min-h-screen">
      {/* Mobile Header with Menu Button */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b z-50 flex items-center justify-between px-4 py-3 shadow-sm">
        <h2 className="font-semibold">Admin</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <PanelSidebar
        title="Admin"
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
