"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function PanelSidebar({
  title,
  items,
  sidebarOpen,
  setSidebarOpen,
}: {
  title: string
  items: { href: string; label: string }[]
  sidebarOpen?: boolean
  setSidebarOpen?: (open: boolean) => void
}) {
  const pathname = usePathname()

  const handleClick = () => {
    if (setSidebarOpen) setSidebarOpen(false) // 👈 close sidebar on mobile after clicking
  }

  return (
    <>
      {/* 🔹 Sidebar Panel */}
      <aside
        className={cn(
          "fixed md:static top-0 left-0 h-full md:h-auto w-64 bg-sidebar border-r transition-transform duration-300 z-50",
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="px-4 py-4 border-b flex items-center justify-between">
          <div className="font-semibold">{title}</div>

          {/* Close Button (mobile only) */}
          {setSidebarOpen && (
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden text-lg font-bold px-2"
            >
              ✕
            </button>
          )}
        </div>

        <nav className="px-2 py-3 grid gap-1">
          {items.map((it) => {
            const active = pathname === it.href
            return (
              <Link
                key={it.href}
                href={it.href}
                onClick={handleClick}
                className={cn(
                  "px-3 py-2 rounded-md text-sm hover:bg-sidebar-accent block",
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

      {/* 🔹 Backdrop Overlay (mobile only) */}
      {sidebarOpen && setSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}
    </>
  )
}
