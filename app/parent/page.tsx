export default function ParentDashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { t: "Total Classes", v: "42" },
          { t: "Attendance", v: "92%" },
          { t: "Overall Grade", v: "A-" },
        ].map((w, i) => (
          <div key={i} className="rounded-xl border p-4">
            <div className="text-sm text-muted-foreground">{w.t}</div>
            <div className="text-2xl font-semibold">{w.v}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border p-4">
        <div className="font-medium">Recent Activity</div>
        <ul className="mt-2 text-sm space-y-2">
          <li>Completed Math session with Tutor #2</li>
          <li>New feedback available</li>
        </ul>
      </div>
    </div>
  )
}
