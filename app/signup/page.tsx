"use client"
import { useSearchParams } from "next/navigation"
import { Section } from "@/components/section"
import { useState, useEffect } from "react"

const roles = ["student", "teacher", "parent", "institution", "admin"]

export default function SignupPage() {
  const sp = useSearchParams()
  const [role, setRole] = useState("student")
  useEffect(() => {
    const r = sp.get("role")
    if (r && roles.includes(r)) setRole(r)
  }, [sp])

  return (
    <Section title="Create Account" subtitle="Select your role to personalize your experience.">
      <form className="max-w-lg grid gap-3">
        <label className="grid gap-1">
          <span className="text-sm">Role</span>
          <select
            className="px-3 py-2 rounded-md border bg-background"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          <label className="grid gap-1">
            <span className="text-sm">First name</span>
            <input className="px-3 py-2 rounded-md border bg-background" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Last name</span>
            <input className="px-3 py-2 rounded-md border bg-background" />
          </label>
        </div>
        <label className="grid gap-1">
          <span className="text-sm">Email</span>
          <input type="email" className="px-3 py-2 rounded-md border bg-background" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Password</span>
          <input type="password" className="px-3 py-2 rounded-md border bg-background" />
        </label>
        <button className="mt-2 px-4 py-2 rounded-md bg-primary text-primary-foreground w-fit">Sign up</button>
      </form>
    </Section>
  )
}
