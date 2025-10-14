"use client"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Mon", score: 60 },
  { name: "Tue", score: 65 },
  { name: "Wed", score: 70 },
  { name: "Thu", score: 74 },
  { name: "Fri", score: 78 },
  { name: "Sat", score: 80 },
  { name: "Sun", score: 82 },
]

export function LineProgress() {
  return (
    <div className="w-full h-56">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: 6, right: 6 }}>
          <defs>
            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="oklch(var(--color-primary))" stopOpacity={0.6} />
              <stop offset="95%" stopColor="oklch(var(--color-primary))" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="oklch(var(--color-border))" />
          <XAxis dataKey="name" stroke="oklch(var(--color-muted-foreground))" fontSize={12} />
          <YAxis stroke="oklch(var(--color-muted-foreground))" fontSize={12} />
          <Tooltip />
          <Area type="monotone" dataKey="score" stroke="oklch(var(--color-primary))" fill="url(#colorScore)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
