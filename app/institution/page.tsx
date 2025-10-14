import { LineProgress } from "@/components/charts/line-progress"

export default function InstitutionDashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { t: "Tutors", v: "64" },
          { t: "Students", v: "920" },
          { t: "Ongoing Sessions", v: "48" },
          { t: "Revenue", v: "$9.8k" },
        ].map((w, i) => (
          <div key={i} className="rounded-xl border p-4">
            <div className="text-sm text-muted-foreground">{w.t}</div>
            <div className="text-2xl font-semibold">{w.v}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border p-4">
        <div className="mb-2 font-medium">Analytics</div>
        <LineProgress />
      </div>
    </div>
  )
}
