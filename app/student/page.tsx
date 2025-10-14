import { LineProgress } from "@/components/charts/line-progress"

export default function StudentDashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { t: "XP", v: "1,240" },
          { t: "Badges", v: "6" },
          { t: "Streak", v: "14 days" },
        ].map((w, i) => (
          <div key={i} className="rounded-xl border p-4">
            <div className="text-sm text-muted-foreground">{w.t}</div>
            <div className="text-2xl font-semibold">{w.v}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border p-4">
        <div className="mb-2 font-medium">Performance Trend</div>
        <LineProgress />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-4">
          <div className="font-medium mb-2">Upcoming Classes</div>
          <ul className="text-sm space-y-2">
            {[1, 2, 3].map((i) => (
              <li key={i} className="flex items-center justify-between">
                <span>Math with Tutor #{i}</span>
                <a
                  className="px-2 py-1 rounded-md bg-primary text-primary-foreground text-xs"
                  href="/student/classroom"
                >
                  Join
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border p-4">
          <div className="font-medium mb-2">Announcements</div>
          <ul className="text-sm space-y-2">
            <li>New ebook uploaded: Algebra Basics</li>
            <li>System maintenance on Sunday</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
