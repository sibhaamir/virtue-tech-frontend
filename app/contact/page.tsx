import { Section } from "@/components/section"

export default function ContactPage() {
  return (
    <Section title="Contact Us" subtitle="We'd love to hear from you.">
      <form className="max-w-xl grid gap-3">
        <label className="grid gap-1">
          <span className="text-sm">Name</span>
          <input className="px-3 py-2 rounded-md border bg-background" placeholder="Your name" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Email</span>
          <input type="email" className="px-3 py-2 rounded-md border bg-background" placeholder="you@example.com" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Message</span>
          <textarea className="px-3 py-2 rounded-md border bg-background min-h-32" placeholder="How can we help?" />
        </label>
        <button className="mt-2 px-4 py-2 rounded-md bg-primary text-primary-foreground w-fit">Send</button>
      </form>
      <div className="mt-8">
        <img src="/contact.png" alt="Map" className="w-full rounded-lg border" />
      </div>
    </Section>
  )
}
