import { Section } from "@/components/section"

export default function AboutPage() {
  return (
    <>
      <Section title="Our Mission" subtitle="Accessible, intelligent, and engaging learning for everyone.">
        <div className="prose prose-neutral max-w-none">
          <p className="text-pretty">
            Virtue Tech unifies tutoring, classroom, and analytics into a single platform powered by a clean teal &
            crème design system.
          </p>
        </div>
      </Section>
      <Section title="Team">
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border p-4 text-center">
              <img
                src="/team-headshot.jpg"
                alt="Team member"
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />
              <div className="mt-2 font-medium">Member {i}</div>
              <div className="text-xs text-muted-foreground">Role</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
