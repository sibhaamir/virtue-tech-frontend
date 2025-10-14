import type React from "react"
import { PanelSidebar } from "@/components/panels/sidebar"

export default function InstitutionLayout({ children }: { children: React.ReactNode }) {
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
    <div className="mx-auto max-w-6xl px-4 py-6 flex gap-6">
      <PanelSidebar title="Institution" items={items} />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  )
}
