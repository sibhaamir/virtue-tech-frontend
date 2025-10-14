import { Section } from "@/components/section"

const faqs = [
  { q: "How do I book a tutor?", a: "Sign up, go to Tutors, filter, and book a session." },
  { q: "Do you offer refunds?", a: "See our Refund Policy on the Terms page." },
  { q: "Is there a student dashboard?", a: "Yes, with progress, classes, and reports." },
]

export default function FAQPage() {
  return (
    <Section title="Frequently Asked Questions">
      <div className="grid gap-3">
        {faqs.map((f, i) => (
          <details key={i} className="rounded-lg border p-4 bg-card">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
