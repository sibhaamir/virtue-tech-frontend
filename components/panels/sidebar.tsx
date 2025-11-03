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
    if (setSidebarOpen) setSidebarOpen(false) // Close sidebar on mobile after clicking
  }

  return (
    <aside
      className={cn(
        // ✅ Sidebar now pushed below BOTH top navbars (~6rem = 96px)
        "fixed md:static top-[6rem] md:top-0 left-0 h-[calc(100%-6rem)] md:h-auto w-64 bg-sidebar border-r transition-transform duration-300 z-40 md:z-auto",
        sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}
    >
      <div className="px-4 py-4 border-b">
        <div className="font-semibold">{title}</div>
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
                "px-3 py-2 rounded-md text-sm hover:bg-sidebar-accent transition-colors",
                active && "bg-sidebar-primary text-sidebar-primary-foreground"
              )}
            >
              {it.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
