import type React from "react"
import { PanelSidebar } from "@/components/panels/sidebar"

export default function ParentLayout({ children }: { children: React.ReactNode }) {
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
    <div className="mx-auto max-w-6xl px-4 py-6 flex gap-6">
      <PanelSidebar title="Parent" items={items} />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  )
}
