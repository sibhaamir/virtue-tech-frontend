"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Menu } from "lucide-react"

export function PanelSidebar({
  title,
  items,
}: {
  title: string
  items: { href: string; label: string }[]
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/* 🔹 Mobile top bar with hamburger button */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 border-b bg-sidebar">
        <div className="font-semibold">{title}</div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md hover:bg-sidebar-accent"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* 🔹 Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 border-r bg-sidebar transition-transform duration-300 md:translate-x-0 md:static md:block",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="px-4 py-4 border-b flex items-center justify-between">
          <div className="font-semibold">{title}</div>
          {/* Close button for mobile */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-2 rounded-md hover:bg-sidebar-accent"
          >
            ✕
          </button>
        </div>

        <nav className="px-2 py-3 grid gap-1">
          {items.map((it) => {
            const active = pathname === it.href
            return (
              <Link
                key={it.href}
                href={it.href}
                onClick={() => setSidebarOpen(false)} // 👈 auto-close on click
                className={cn(
                  "px-3 py-2 rounded-md text-sm hover:bg-sidebar-accent",
                  active &&
                    "bg-sidebar-primary text-sidebar-primary-foreground"
                )}
              >
                {it.label}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* 🔹 Backdrop overlay for mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}
    </>
  )
}
