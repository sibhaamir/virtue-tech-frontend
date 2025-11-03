"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

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
    <div className="flex">
      {/* 🔹 Sidebar for desktop */}
      <aside className="hidden md:flex flex-col w-64 min-h-screen border-r bg-white">
        <div className="px-4 py-4 border-b font-semibold text-lg">{title}</div>
        <nav className="px-2 py-3 grid gap-1">
          {items.map((it) => {
            const active = pathname === it.href
            return (
              <Link
                key={it.href}
                href={it.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm hover:bg-gray-100 transition-colors",
                  active && "bg-blue-600 text-white"
                )}
              >
                {it.label}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* 🔹 Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 border-b bg-white shadow-sm">
        <div className="font-semibold text-lg">{title}</div>
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* 🔹 Mobile Sidebar Drawer */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 border-r bg-white shadow-lg transition-transform duration-300 md:hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="px-4 py-4 border-b flex items-center justify-between">
          <div className="font-semibold">{title}</div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100"
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
                onClick={() => setSidebarOpen(false)} // close when clicked
                className={cn(
                  "px-3 py-2 rounded-md text-sm hover:bg-gray-100 transition-colors",
                  active && "bg-blue-600 text-white"
                )}
              >
                {it.label}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* 🔹 Overlay for mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}
    </div>
  )
}
