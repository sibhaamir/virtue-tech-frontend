"use client"

import { notFound } from "next/navigation"
import { Section } from "@/components/section"
import { LineProgress } from "@/components/charts/line-progress"
import { Calendar } from "@/components/ui/calendar"
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const valid = new Set([
  "users",
  "tutors",
  "students",
  "institutes",
  "payments",
  "sessions",
  "messaging",
  "library",
  "ai",
  "chatbot",
  "gamification",
  "reports",
  "calendar",
  "forum",
  "attendance",
  "settings",
  "support",
  "cms",
  "auth",
])

export default function AdminSection({ params }: { params: { section: string } }) {
  if (!valid.has(params.section)) notFound()
  const s = params.section
  if (s === "users") return <Users />
  if (s === "tutors") return <Tutors />
  if (s === "students") return <Students />
  if (s === "institutes") return <Institutes />
  if (s === "payments") return <Payments />
  if (s === "sessions") return <Sessions />
  if (s === "messaging") return <Messaging />
  if (s === "library") return <Library />
  if (s === "ai") return <AIConfig />
  if (s === "chatbot") return <Chatbot />
  if (s === "reports") return <Reports />
  if (s === "calendar") return <CalendarView />
  if (s === "forum") return <ForumModeration />
  if (s === "cms") return <CMS />
  if (s === "auth") return <AccessLogs />
  return (
    <Section title={toTitle(s)} subtitle="Placeholder for this Admin section.">
      <img src="/section-illustration.jpg" alt="Admin section" className="w-full rounded-md border" />
    </Section>
  )
}

function toTitle(s: string) {
  return s.replaceAll("-", " ").replace(/^\w/, (c) => c.toUpperCase())
}

function Users() {
  return (
    <Section title="User Management" subtitle="Filter, approve, and manage roles.">
      <div className="mb-3 flex gap-2">
        <Input placeholder="Search users..." />
        <Button>Search</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Ayesha</TableCell>
            <TableCell>Tutor</TableCell>
            <TableCell>
              <Badge>Active</Badge>
            </TableCell>
            <TableCell>
              <Button size="sm" variant="secondary">
                Edit
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Section>
  )
}
function Tutors() {
  return (
    <Section title="Tutor Management" subtitle="Approve and analyze tutors.">
      <div className="rounded-xl border p-4 text-sm text-muted-foreground">List + approvals placeholder</div>
    </Section>
  )
}
function Students() {
  return (
    <Section title="Student Management" subtitle="Overview and analytics.">
      <div className="rounded-xl border p-4 text-sm">Table placeholder</div>
    </Section>
  )
}
function Institutes() {
  return (
    <Section title="Institute Management" subtitle="Organizations and revenue share.">
      <div className="rounded-xl border p-4 text-sm">Institutes table placeholder</div>
    </Section>
  )
}
function Payments() {
  return (
    <Section title="Payments & Finance" subtitle="Transactions, payouts, commissions.">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Gateway</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>TX-1321</TableCell>
            <TableCell>2025-10-01</TableCell>
            <TableCell>$420</TableCell>
            <TableCell>Stripe</TableCell>
            <TableCell>
              <Badge>Success</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Section>
  )
}
function Sessions() {
  return (
    <Section title="Sessions" subtitle="Calendar and logs.">
      <div className="rounded-xl border p-4">
        <Calendar mode="single" />
      </div>
    </Section>
  )
}
function Messaging() {
  return (
    <Section title="Announcements & Communication" subtitle="Broadcast or targeted messages.">
      <div className="rounded-xl border p-4 grid gap-2">
        <Input placeholder="Title" />
        <Textarea placeholder="Announcement content..." />
        <Button>Send</Button>
      </div>
    </Section>
  )
}
function Library() {
  return (
    <Section title="Library Moderation" subtitle="Approve eBooks and resources.">
      <div className="rounded-xl border p-4 text-sm">Content moderation placeholder</div>
    </Section>
  )
}
function AIConfig() {
  return (
    <Section title="AI & Automation" subtitle="Match tuning and datasets.">
      <div className="rounded-xl border p-4 text-sm">Configuration toggles placeholder</div>
    </Section>
  )
}
function Chatbot() {
  return (
    <Section title="Chatbot Management" subtitle="FAQ and training.">
      <div className="rounded-xl border p-4 text-sm">Usage stats placeholder</div>
    </Section>
  )
}
function Reports() {
  return (
    <Section title="Reports & Analytics" subtitle="Platform insights and exports.">
      <div className="rounded-xl border p-4">
        <LineProgress />
      </div>
    </Section>
  )
}
function CalendarView() {
  return (
    <Section title="System Calendar">
      <div className="rounded-xl border p-4">
        <Calendar mode="single" />
      </div>
    </Section>
  )
}
function ForumModeration() {
  return (
    <Section title="Forum Moderation" subtitle="Approve/reject posts.">
      <div className="rounded-xl border p-4 text-sm">Moderation queue placeholder</div>
    </Section>
  )
}
function CMS() {
  return (
    <Section title="CMS" subtitle="Manage content & SEO.">
      <div className="rounded-xl border p-4 text-sm">CMS sections placeholder</div>
    </Section>
  )
}
function AccessLogs() {
  return (
    <Section title="Access Logs" subtitle="Security and sessions.">
      <div className="rounded-xl border p-4 text-sm">Logs table placeholder</div>
    </Section>
  )
}
