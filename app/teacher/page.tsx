import { LineProgress } from "@/components/charts/line-progress"

export default function TeacherDashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { t: "Today’s Sessions", v: "3" },
          { t: "Active Students", v: "18" },
          { t: "Monthly Earnings", v: "$1,240" },
        ].map((w, i) => (
          <div key={i} className="rounded-xl border p-4">
            <div className="text-sm text-muted-foreground">{w.t}</div>
            <div className="text-2xl font-semibold">{w.v}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border p-4">
        <div className="mb-2 font-medium">Performance Summary</div>
        <LineProgress />
      </div>
    </div>
  )
}
