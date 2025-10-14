import type React from "react"
import { PanelSidebar } from "@/components/panels/sidebar"

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
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
    <div className="mx-auto max-w-6xl px-4 py-6 flex gap-6">
      <PanelSidebar title="Teacher" items={items} />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  )
}
