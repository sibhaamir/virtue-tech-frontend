"use client"
import { useEffect, useState } from "react"

export function PromoModal() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const seen = localStorage.getItem("promo_seen")
    if (!seen) {
      const t = setTimeout(() => setOpen(true), 800)
      return () => clearTimeout(t)
    }
  }, [])
  const close = () => {
    localStorage.setItem("promo_seen", "1")
    setOpen(false)
  }
  if (!open) return null
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={close} />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-xl border bg-card p-6 shadow-xl animate-zoomIn">
          <h3 className="text-lg font-semibold">
            Welcome to <span className="text-primary">Virtue</span> Tech
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            We use cookies to enhance your experience. By continuing, you agree to our{" "}
            <a className="underline hover:text-primary" href="/privacy">
              Privacy Policy
            </a>
            .
          </p>
          <div className="mt-4 flex items-center justify-end gap-2">
            <button onClick={close} className="px-3 py-1.5 rounded-md border hover:bg-secondary">
              Decline
            </button>
            <button onClick={close} className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
