import type React from "react"
import { PanelSidebar } from "@/components/panels/sidebar"

export default function StudentLayout({ children }: { children: React.ReactNode }) {
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
    <div className="flex min-h-screen">
      <PanelSidebar title="Student" items={items} />
       <main className="flex-1 overflow-y-auto p-4">{children}</main>
    </div>
  )
}
