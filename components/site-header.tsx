"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          <span className="text-primary">Virtue</span> Tech
          <span className="sr-only">Home</span>
        </Link>
        <nav className={cn("hidden md:flex items-center gap-6 text-sm")}>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
          <Link href="/faq" className="hover:text-primary">
            FAQ
          </Link>
          <Link href="/student" className="hover:text-primary">
            Student
          </Link>
          <Link href="/teacher" className="hover:text-primary">
            Teacher
          </Link>
          <Link href="/institution" className="hover:text-primary">
            Institution
          </Link>
          <Link href="/admin" className="hover:text-primary">
            Admin
          </Link>
          <Link href="/parent" className="hover:text-primary">
            Parent
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Link href="/login" className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-accent">
            Log in
          </Link>
          <Link href="/signup" className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:opacity-90">
            Sign up
          </Link>
          <ThemeToggle />
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden px-3 py-2 rounded-md border hover:bg-secondary"
        >
          {"≡"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t animate-fadeIn">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link href="/faq" onClick={() => setOpen(false)}>
              FAQ
            </Link>
            <Link href="/student" onClick={() => setOpen(false)}>
              Student
            </Link>
            <Link href="/teacher" onClick={() => setOpen(false)}>
              Teacher
            </Link>
            <Link href="/institution" onClick={() => setOpen(false)}>
              Institution
            </Link>
            <Link href="/admin" onClick={() => setOpen(false)}>
              Admin
            </Link>
            <Link href="/parent" onClick={() => setOpen(false)}>
              Parent
            </Link>
            <div className="flex gap-2 pt-2">
              <Link href="/login" className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground">
                Log in
              </Link>
              <Link href="/signup" className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground">
                Sign up
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [dark, setDark] = useState(false)
  useEffect(() => {
    setMounted(true)
    const d = localStorage.getItem("theme") === "dark"
    setDark(d)
    document.documentElement.classList.toggle("dark", d)
  }, [])
  if (!mounted) return null
  return (
    <button
      onClick={() => {
        const next = !dark
        setDark(next)
        localStorage.setItem("theme", next ? "dark" : "light")
        document.documentElement.classList.toggle("dark", next)
      }}
      className="px-3 py-1.5 rounded-md border hover:bg-secondary"
      aria-pressed={dark}
    >
      {dark ? "Light" : "Dark"}
    </button>
  )
}
