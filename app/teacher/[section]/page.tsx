"use client"

import { notFound } from "next/navigation"
import { Section } from "@/components/section"
import { LineProgress } from "@/components/charts/line-progress"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const valid = new Set([
  "sessions",
  "students",
  "classroom",
  "messages",
  "earnings",
  "library",
  "analytics",
  "reviews",
  "institute",
  "gamification",
  "reports",
  "notifications",
  "profile",
  "forum",
  "assignments",
  "support",
  "settings",
])

export default function TeacherSection({ params }: { params: { section: string } }) {
  if (!valid.has(params.section)) notFound()

  switch (params.section) {
    case "sessions":
      return <Sessions />
    case "students":
      return <Students />
    case "classroom":
      return <Classroom />
    case "earnings":
      return <Earnings />
    case "analytics":
      return <Analytics />
    case "assignments":
      return <Assignments />
    case "reports":
      return <Reports />
    case "messages":
      return <Messages />
    case "settings":
      return <Settings />
    default:
      return (
        <Section title={toTitle(params.section)} subtitle="Placeholder for this Teacher section.">
          <img src="/section-illustration.jpg" alt="Illustration" className="w-full rounded-md border" />
        </Section>
      )
  }
}

function toTitle(s: string) {
  return s.replaceAll("-", " ").replace(/^\w/, (c) => c.toUpperCase())
}

function Sessions() {
  return (
    <Section title="Sessions / Schedule" subtitle="Manage upcoming, past, and availability.">
      <Tabs defaultValue="calendar">
        <TabsList>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="calendar">
          <div className="rounded-xl border p-4">
            <Calendar mode="single" />
          </div>
        </TabsContent>
        <TabsContent value="upcoming">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Hamza</TableCell>
                <TableCell>Math</TableCell>
                <TableCell>2025-10-14</TableCell>
                <TableCell>5:00 PM</TableCell>
                <TableCell>
                  <Button size="sm" asChild>
                    <a href="/teacher/classroom">Join</a>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="past">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Feedback</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Ali</TableCell>
                <TableCell>Physics</TableCell>
                <TableCell>2025-10-10</TableCell>
                <TableCell>
                  <Button size="sm" variant="secondary">
                    Add Notes
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </Section>
  )
}

function Students() {
  return (
    <Section title="Students" subtitle="Track performance and send feedback.">
      <div className="mb-3 flex gap-2">
        <Input placeholder="Search student..." />
        <Button>Search</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>XP</TableHead>
            <TableHead>Streak</TableHead>
            <TableHead>Attendance</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Hamza</TableCell>
            <TableCell>980</TableCell>
            <TableCell>6 days</TableCell>
            <TableCell>89%</TableCell>
            <TableCell>
              <Button size="sm" variant="secondary">
                View Profile
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Section>
  )
}

function Classroom() {
  return (
    <Section title="Live Classroom" subtitle="WebRTC mock interface.">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 rounded-xl border p-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="h-40 bg-black/20 rounded-md flex items-center justify-center">{"You"}</div>
            <div className="h-40 bg-black/20 rounded-md flex items-center justify-center">{"Student"}</div>
          </div>
          <div className="mt-3 h-40 rounded-md border bg-card flex items-center justify-center">{"Whiteboard"}</div>
          <div className="mt-3 flex gap-2">
            <Button size="sm">Share Screen</Button>
            <Button size="sm" variant="secondary">
              Upload
            </Button>
          </div>
        </div>
        <div className="rounded-xl border p-3">
          <div className="font-medium mb-2">Chat</div>
          <div className="text-sm text-muted-foreground">{"[10:00] Hamza: Hello Sir!"}</div>
          <div className="mt-2 flex gap-2">
            <Input placeholder="Message..." />
            <Button size="sm">Send</Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Earnings() {
  return (
    <Section title="Earnings & Payouts" subtitle="Overview of income and withdrawals.">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-4">
          <div className="font-medium mb-2">Monthly Earnings</div>
          <LineProgress />
        </div>
        <div className="rounded-xl border p-4">
          <div className="font-medium">Pending Payouts</div>
          <div className="text-2xl font-semibold mt-2">$120.00</div>
          <Button className="mt-2">Withdraw</Button>
        </div>
      </div>
      <div className="mt-6">
        <div className="font-medium mb-2">Payment History</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>2025-10-01</TableCell>
              <TableCell>$240</TableCell>
              <TableCell>Stripe</TableCell>
              <TableCell>
                <Badge>Paid</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Section>
  )
}

function Analytics() {
  return (
    <Section title="Student Analytics" subtitle="AI tips and performance analysis.">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-4">
          <div className="font-medium mb-2">Engagement Trend</div>
          <LineProgress />
        </div>
        <div className="rounded-xl border p-4">
          <div className="font-medium">AI Insights</div>
          <p className="text-sm text-muted-foreground mt-1">
            Students are most engaged from 5–6 PM. Suggest practice sets after class.
          </p>
        </div>
      </div>
    </Section>
  )
}

function Assignments() {
  return (
    <Section title="Assignments" subtitle="Create, view, and grade submissions.">
      <div className="rounded-xl border p-4 grid gap-2">
        <Input placeholder="Title" />
        <Textarea placeholder="Description" />
        <div className="flex gap-2">
          <Button variant="secondary">Attach</Button>
          <Button>Create Assignment</Button>
        </div>
      </div>
      <div className="mt-4">
        <div className="font-medium mb-2">Submissions</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Hamza</TableCell>
              <TableCell>2025-10-10</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <Button size="sm" variant="secondary">
                  Grade
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Section>
  )
}

function Reports() {
  return (
    <Section title="Reports" subtitle="Performance and attendance summaries.">
      <div className="rounded-xl border p-4">
        <div className="font-medium mb-2">Performance Dashboard</div>
        <LineProgress />
      </div>
    </Section>
  )
}

function Messages() {
  return (
    <Section title="Messages" subtitle="Converse with students and admins.">
      <div className="rounded-xl border p-4">
        <div className="text-sm text-muted-foreground">Inbox and threads placeholder.</div>
      </div>
    </Section>
  )
}

function Settings() {
  return (
    <Section title="Settings" subtitle="Profile and preferences.">
      <div className="rounded-xl border p-4 grid gap-2">
        <Input placeholder="Display Name" />
        <Textarea placeholder="Bio" />
        <Button>Save</Button>
      </div>
    </Section>
  )
}
