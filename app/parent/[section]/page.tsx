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

const valid = new Set([
  "children",
  "progress",
  "history",
  "upcoming",
  "communication",
  "analytics",
  "payments",
  "reviews",
  "notifications",
  "settings",
  "support",
])

export default function ParentSection({ params }: { params: { section: string } }) {
  if (!valid.has(params.section)) notFound()
  switch (params.section) {
    case "children":
      return <Children />
    case "progress":
      return <Progress />
    case "history":
      return <History />
    case "upcoming":
      return <Upcoming />
    case "communication":
      return <Communication />
    case "analytics":
      return <Analytics />
    case "payments":
      return <Payments />
    case "reviews":
      return <Reviews />
    case "settings":
      return <Settings />
    case "support":
      return <Support />
    default:
      return <Section title={toTitle(params.section)} subtitle="Placeholder for this Parent section." />
  }
}
function toTitle(s: string) {
  return s.replaceAll("-", " ").replace(/^\w/, (c) => c.toUpperCase())
}

function Children() {
  return (
    <Section title="Children" subtitle="Manage linked child accounts.">
      <div className="mb-3 flex gap-2">
        <Input placeholder="Link code..." />
        <Button>Link Child</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>Tutor</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Hamza</TableCell>
            <TableCell>7</TableCell>
            <TableCell>Ayesha</TableCell>
            <TableCell>
              <Button size="sm" variant="secondary">
                View
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Section>
  )
}
function Progress() {
  return (
    <Section title="Progress & Reports" subtitle="Performance trend and reports.">
      <LineProgress />
      <div className="mt-3 text-sm text-muted-foreground">AI Summary: Strong in Algebra; focus on Geometry next.</div>
    </Section>
  )
}
function History() {
  return (
    <Section title="Session History" subtitle="Completed classes and certificates.">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Tutor</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>2025-10-10</TableCell>
            <TableCell>Math</TableCell>
            <TableCell>Ayesha</TableCell>
            <TableCell>60 min</TableCell>
            <TableCell>
              <Button size="sm" variant="secondary">
                Certificate
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Section>
  )
}
function Upcoming() {
  return (
    <Section title="Upcoming Sessions">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-4">
          <Calendar mode="single" />
        </div>
        <div className="rounded-xl border p-4">
          <div className="font-medium mb-2">Next</div>
          <div className="text-sm">Math with Ayesha • 2025-10-14 5:00 PM</div>
        </div>
      </div>
    </Section>
  )
}
function Communication() {
  return (
    <Section title="Communication Hub" subtitle="Messages with tutors and admin.">
      <Tabs defaultValue="tutor">
        <TabsList>
          <TabsTrigger value="tutor">Tutors</TabsTrigger>
          <TabsTrigger value="admin">Admin</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>
        <TabsContent value="tutor">
          <div className="rounded-xl border p-4 text-sm">Tutor messages placeholder</div>
        </TabsContent>
        <TabsContent value="admin">
          <div className="rounded-xl border p-4 text-sm">Admin messages placeholder</div>
        </TabsContent>
        <TabsContent value="announcements">
          <div className="rounded-xl border p-4 text-sm">Announcements placeholder</div>
        </TabsContent>
      </Tabs>
    </Section>
  )
}
function Analytics() {
  return (
    <Section title="AI Analytics">
      <LineProgress />
    </Section>
  )
}
function Payments() {
  return (
    <Section title="Payments">
      <div className="rounded-xl border p-4 text-sm">Transactions table placeholder</div>
    </Section>
  )
}
function Reviews() {
  return (
    <Section title="Tutor Reviews">
      <div className="rounded-xl border p-4 grid gap-2">
        <Input placeholder="Tutor name" />
        <Textarea placeholder="Write your review..." />
        <div className="flex gap-2">
          <Button variant="secondary">Rate ⭐⭐⭐⭐⭐</Button>
          <Button>Submit</Button>
        </div>
      </div>
    </Section>
  )
}
function Settings() {
  return (
    <Section title="Settings">
      <div className="rounded-xl border p-4 text-sm">Preferences placeholder</div>
    </Section>
  )
}
function Support() {
  return (
    <Section title="Help Center">
      <div className="rounded-xl border p-4 text-sm">FAQ and ticket form placeholder</div>
    </Section>
  )
}
