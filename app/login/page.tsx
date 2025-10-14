import Link from "next/link"
import { Section } from "@/components/section"

export default function LoginPage() {
  return (
    <Section title="Log in">
      <form className="max-w-sm grid gap-3">
        <label className="grid gap-1">
          <span className="text-sm">Email</span>
          <input type="email" className="px-3 py-2 rounded-md border bg-background" placeholder="you@example.com" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Password</span>
          <input type="password" className="px-3 py-2 rounded-md border bg-background" placeholder="••••••••" />
        </label>
        <button className="mt-2 px-4 py-2 rounded-md bg-primary text-primary-foreground w-fit">Log in</button>
        <div className="text-sm text-muted-foreground">
          No account?{" "}
          <Link className="underline hover:text-primary" href="/signup">
            Sign up
          </Link>
        </div>
      </form>
    </Section>
  )
}
