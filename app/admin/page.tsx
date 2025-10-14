import { LineProgress } from "@/components/charts/line-progress"

export default function AdminDashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { t: "Total Users", v: "12,340" },
          { t: "Active Now", v: "134" },
          { t: "Revenue (M)", v: "$42k" },
          { t: "Upcoming Sessions", v: "87" },
        ].map((w, i) => (
          <div key={i} className="rounded-xl border p-4">
            <div className="text-sm text-muted-foreground">{w.t}</div>
            <div className="text-2xl font-semibold">{w.v}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border p-4">
        <div className="mb-2 font-medium">Platform Activity</div>
        <LineProgress />
      </div>
    </div>
  )
}
