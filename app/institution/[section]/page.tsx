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
  "tutors",
  "students",
  "courses",
  "scheduling",
  "payments",
  "reports",
  "announcements",
  "messaging",
  "library",
  "feedback",
  "ai",
  "profile",
  "support",
  "settings",
])

export default function InstitutionSection({ params }: { params: { section: string } }) {
  if (!valid.has(params.section)) notFound()
  const s = params.section
  if (s === "tutors") return <Tutors />
  if (s === "students") return <Students />
  if (s === "courses") return <Courses />
  if (s === "scheduling") return <Scheduling />
  if (s === "payments") return <Payments />
  if (s === "reports") return <Reports />
  if (s === "announcements") return <Announcements />
  if (s === "messaging") return <Messaging />
  if (s === "library") return <Library />
  if (s === "feedback") return <Feedback />
  if (s === "ai") return <AI />
  if (s === "profile") return <Profile />
  if (s === "support") return <Support />
  if (s === "settings") return <Settings />
  return <Section title={toTitle(s)} subtitle="Placeholder for this Institution section." />
}

function toTitle(s: string) {
  return s.replaceAll("-", " ").replace(/^\w/, (c) => c.toUpperCase())
}

function Tutors() {
  return (
    <Section title="Tutor Management" subtitle="Add, assign, and review performance.">
      <div className="mb-3 flex gap-2">
        <Input placeholder="Search tutor..." />
        <Button>Add Tutor</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Ayesha</TableCell>
            <TableCell>Math</TableCell>
            <TableCell>4.8</TableCell>
            <TableCell>
              <Badge>Active</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Section>
  )
}

function Students() {
  return (
    <Section title="Student Management">
      <div className="rounded-xl border p-4 text-sm">Students table placeholder</div>
    </Section>
  )
}

function Courses() {
  return (
    <Section title="Courses & Classes" subtitle="Create and manage curricula.">
      <div className="rounded-xl border p-4 grid gap-2">
        <Input placeholder="Course title" />
        <Textarea placeholder="Description / curriculum summary" />
        <Button>Create Course</Button>
      </div>
    </Section>
  )
}

function Scheduling() {
  return (
    <Section title="Session Scheduling">
      <div className="rounded-xl border p-4">
        <Calendar mode="single" />
      </div>
    </Section>
  )
}

function Payments() {
  return (
    <Section title="Finance">
      <div className="rounded-xl border p-4 text-sm">Transactions and payouts placeholder</div>
    </Section>
  )
}

function Reports() {
  return (
    <Section title="Analytics & Reports">
      <LineProgress />
    </Section>
  )
}

function Announcements() {
  return (
    <Section title="Announcements">
      <div className="rounded-xl border p-4 grid gap-2">
        <Input placeholder="Title" />
        <Textarea placeholder="Write announcement..." />
        <Button>Publish</Button>
      </div>
    </Section>
  )
}

function Messaging() {
  return (
    <Section title="Messaging">
      <div className="rounded-xl border p-4 text-sm">Internal chat placeholder</div>
    </Section>
  )
}

function Library() {
  return (
    <Section title="Library Management">
      <div className="rounded-xl border p-4 text-sm">Resources dashboard placeholder</div>
    </Section>
  )
}

function Feedback() {
  return (
    <Section title="Feedback & Reviews">
      <div className="rounded-xl border p-4 text-sm">Feedback list placeholder</div>
    </Section>
  )
}

function AI() {
  return (
    <Section title="AI Tools">
      <div className="rounded-xl border p-4 text-sm">Scheduling optimizer placeholder</div>
    </Section>
  )
}

function Profile() {
  return (
    <Section title="Institution Profile">
      <div className="rounded-xl border p-4 text-sm">Profile form placeholder</div>
    </Section>
  )
}

function Support() {
  return (
    <Section title="Support">
      <div className="rounded-xl border p-4 text-sm">FAQ & tickets placeholder</div>
    </Section>
  )
}

function Settings() {
  return (
    <Section title="Settings">
      <div className="rounded-xl border p-4 text-sm">Permissions & modules placeholder</div>
    </Section>
  )
}
