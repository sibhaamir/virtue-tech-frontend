import type React from "react"
import { PanelSidebar } from "@/components/panels/sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
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
    <div className="mx-auto max-w-6xl px-4 py-6 flex gap-6">
      <PanelSidebar title="Admin" items={items} />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  )
}
