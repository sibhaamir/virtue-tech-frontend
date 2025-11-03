"use client"

import React, { useState } from "react"
import { Menu } from "lucide-react"
import { PanelSidebar } from "@/components/panels/sidebar"

export default function ParentLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const items = [
    { href: "/parent", label: "Dashboard" },
    { href: "/parent/children", label: "Children" },
    { href: "/parent/progress", label: "Progress & Reports" },
    { href: "/parent/history", label: "Session History" },
    { href: "/parent/upcoming", label: "Upcoming Sessions" },
    { href: "/parent/communication", label: "Communication" },
    { href: "/parent/analytics", label: "AI Analytics" },
    { href: "/parent/payments", label: "Payments" },
    { href: "/parent/reviews", label: "Tutor Reviews" },
    { href: "/parent/notifications", label: "Notifications" },
    { href: "/parent/settings", label: "Settings" },
    { href: "/parent/support", label: "Support" },
  ]

  return (
    <div className="flex min-h-screen">
      {/* 🔹 Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b z-50 flex items-center justify-between px-4 py-3 shadow-sm">
        <h2 className="font-semibold">Parent</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* 🔹 Sidebar (Responsive) */}
      <PanelSidebar
        title="Parent"
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
