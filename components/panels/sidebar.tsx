"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function PanelSidebar({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  const pathname = usePathname()
  return (
    <aside className="w-full md:w-64 shrink-0 border-r bg-sidebar">
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
              className={cn(
                "px-3 py-2 rounded-md text-sm hover:bg-sidebar-accent",
                active && "bg-sidebar-primary text-sidebar-primary-foreground",
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
