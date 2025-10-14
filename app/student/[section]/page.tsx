"use client"

import { notFound } from "next/navigation"
import { Section } from "@/components/section"
import { LineProgress } from "@/components/charts/line-progress"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"

const valid = new Set([
  "tutors",
  "sessions",
  "classroom",
  "messages",
  "gamification",
  "library",
  "progress",
  "ai-match",
  "forum",
  "notifications",
  "payments",
  "attendance",
  "profile",
  "support",
  "settings",
])

export default function StudentSection({ params }: { params: { section: string } }) {
  if (!valid.has(params.section)) notFound()

  switch (params.section) {
    case "tutors":
      return <Tutors />
    case "sessions":
      return <Sessions />
    case "classroom":
      return <Classroom />
    case "messages":
      return <Messages />
    case "gamification":
      return <Gamification />
    case "library":
      return <Library />
    case "progress":
      return <Progress />
    case "ai-match":
      return <AiMatch />
    case "forum":
      return <Forum />
    case "payments":
      return <Payments />
    case "attendance":
      return <Attendance />
    case "profile":
      return <Profile />
    case "support":
      return <Support />
    case "settings":
      return <Settings />
    default:
      return (
        <Section title={toTitle(params.section)} subtitle="Placeholder section. Replace with real data.">
          <img src="/section-illustration.jpg" alt="Section illustration" className="w-full rounded-md border" />
        </Section>
      )
  }
}

function toTitle(s: string) {
  return s.replaceAll("-", " ").replace(/^\w/, (c) => c.toUpperCase())
}

function Tutors() {
  const tutors = [
    { id: 1, name: "Ayesha Khan", subject: "Math", rate: 12, rating: 4.8, img: "/placeholder-user.jpg" },
    { id: 2, name: "Bilal Ahmed", subject: "Physics", rate: 15, rating: 4.7, img: "/placeholder-user.jpg" },
    { id: 3, name: "Sara Malik", subject: "English", rate: 10, rating: 4.9, img: "/placeholder-user.jpg" },
    { id: 4, name: "Ali Raza", subject: "Chemistry", rate: 14, rating: 4.6, img: "/placeholder-user.jpg" },
  ]
  return (
    <Section title="Find Tutors" subtitle="Filter by subject, price, rating, and availability.">
      <div className="mb-4 grid gap-3 md:grid-cols-4">
        <Input placeholder="Search by name or subject" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="math">Math</SelectItem>
            <SelectItem value="physics">Physics</SelectItem>
            <SelectItem value="english">English</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Under $10/hr</SelectItem>
            <SelectItem value="mid">$10–$15/hr</SelectItem>
            <SelectItem value="high">$15+/hr</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="4.5">4.5+ stars</SelectItem>
            <SelectItem value="4.0">4.0+ stars</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tutors.map((t) => (
          <Card key={t.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex-row items-center gap-3">
              <img src={t.img || "/placeholder.svg"} alt={t.name} className="h-12 w-12 rounded-full border" />
              <div>
                <CardTitle className="text-base">{t.name}</CardTitle>
                <CardDescription className="text-xs">
                  {t.subject} • ${t.rate}/hr
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-3">
              <div className="text-sm">Rating: {t.rating} ⭐</div>
              <div className="flex gap-2">
                <Badge>Available</Badge>
                <Badge variant="outline">Top Rated</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" asChild>
                  <a href={`/student/tutors/${t.id}`}>View Profile</a>
                </Button>
                <Button asChild>
                  <a href="/student/sessions">Book</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

function Sessions() {
  const rows = [
    { id: 1, subject: "Math", tutor: "Ayesha", date: "2025-10-14", time: "5:00 PM", status: "Upcoming" },
    { id: 2, subject: "Physics", tutor: "Bilal", date: "2025-10-10", time: "3:00 PM", status: "Completed" },
  ]
  return (
    <Section title="Sessions & Bookings" subtitle="Upcoming, past, and calendar view.">
      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Tutor</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows
                .filter((r) => r.status === "Upcoming")
                .map((r) => (
                  <TableRow key={r.id}>
                    <TableCell>{r.subject}</TableCell>
                    <TableCell>{r.tutor}</TableCell>
                    <TableCell>{r.date}</TableCell>
                    <TableCell>{r.time}</TableCell>
                    <TableCell>
                      <Badge>{r.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" asChild>
                        <a href="/student/classroom">Join</a>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="past">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Tutor</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows
                .filter((r) => r.status === "Completed")
                .map((r) => (
                  <TableRow key={r.id}>
                    <TableCell>{r.subject}</TableCell>
                    <TableCell>{r.tutor}</TableCell>
                    <TableCell>{r.date}</TableCell>
                    <TableCell>{r.time}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{r.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="secondary" size="sm">
                        Rate
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="calendar">
          <div className="rounded-lg border p-4">
            <Calendar mode="single" />
          </div>
        </TabsContent>
      </Tabs>
    </Section>
  )
}

function Classroom() {
  return (
    <Section title="Live Classroom" subtitle="WebRTC mock: video, chat, whiteboard, and files.">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 rounded-xl border overflow-hidden">
          <div className="grid grid-cols-2 gap-2 p-2 bg-muted">
            <div className="h-40 bg-black/20 rounded-md flex items-center justify-center">{"Tutor Video"}</div>
            <div className="h-40 bg-black/20 rounded-md flex items-center justify-center">{"Student Video"}</div>
          </div>
          <div className="p-3 border-t">
            <div className="h-48 rounded-md border bg-card flex items-center justify-center">{"Whiteboard"}</div>
            <div className="mt-3 flex gap-2">
              <Button size="sm">Share Screen</Button>
              <Button size="sm" variant="secondary">
                Upload File
              </Button>
              <Button size="sm" variant="destructive">
                Leave
              </Button>
            </div>
          </div>
        </div>
        <div className="rounded-xl border flex flex-col">
          <div className="p-3 font-medium">Class Chat</div>
          <div className="px-3 text-sm text-muted-foreground">{"[10:00] Tutor: Welcome!"}</div>
          <div className="mt-auto p-3 flex gap-2">
            <Input placeholder="Type a message..." />
            <Button size="sm">Send</Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Messages() {
  const chats = [
    { id: 1, name: "Ayesha (Tutor)", preview: "See you at 5 PM", time: "09:12" },
    { id: 2, name: "Support", preview: "Ticket #231 resolved", time: "Yesterday" },
  ]
  return (
    <Section title="Messages" subtitle="Private conversations with tutors, peers, or support.">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border">
          <div className="p-3 border-b">Inbox</div>
          <div className="p-2 grid gap-2">
            {chats.map((c) => (
              <button key={c.id} className="text-left rounded-md hover:bg-secondary p-2">
                <div className="text-sm font-medium">{c.name}</div>
                <div className="text-xs text-muted-foreground">
                  {c.preview} • {c.time}
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-2 rounded-xl border flex flex-col">
          <div className="p-3 border-b flex items-center justify-between">
            <div className="font-medium">Ayesha (Tutor)</div>
            <Button size="sm" variant="secondary">
              New Chat
            </Button>
          </div>
          <div className="flex-1 p-3 space-y-2 text-sm">
            <div className="rounded-md bg-secondary inline-block px-2 py-1">Hi! Reminder for today’s class.</div>
          </div>
          <div className="p-3 flex gap-2 border-t">
            <Input placeholder="Write a message..." />
            <Button size="sm">Send</Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Gamification() {
  const badges = ["Starter", "7-day Streak", "Algebra Pro", "Helpful Peer"]
  return (
    <Section title="Achievements & XP" subtitle="Track badges, streaks, and leaderboards.">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Progress Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <LineProgress />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Current Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">14 days 🔥</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>XP</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">1,240 XP</div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <div className="font-medium mb-2">Badges</div>
        <div className="flex flex-wrap gap-2">
          {badges.map((b) => (
            <Badge key={b} variant="outline">
              {b}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <div className="font-medium mb-2">Leaderboard</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>XP</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["1", "You", "1240"],
              ["2", "Ali", "1180"],
              ["3", "Sara", "1100"],
            ].map((r) => (
              <TableRow key={r[0]}>
                <TableCell>{r[0]}</TableCell>
                <TableCell>{r[1]}</TableCell>
                <TableCell>{r[2]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Section>
  )
}

function Library() {
  const books = [
    { id: 1, title: "Algebra Basics", author: "J. Doe", img: "/placeholder.jpg" },
    { id: 2, title: "Physics Essentials", author: "A. Newton", img: "/placeholder.jpg" },
    { id: 3, title: "Grammar Guide", author: "E. Blish", img: "/placeholder.jpg" },
  ]
  return (
    <Section title="eBook Library" subtitle="Browse, favorite, and download study materials.">
      <div className="mb-3 grid gap-3 md:grid-cols-3">
        <Input placeholder="Search eBooks..." />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="math">Math</SelectItem>
            <SelectItem value="science">Science</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="new">Newest</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((b) => (
          <Card key={b.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <img
                src={b.img || "/placeholder.svg"}
                alt={b.title}
                className="w-full h-36 object-cover rounded-md border"
              />
              <CardTitle className="text-base mt-2">{b.title}</CardTitle>
              <CardDescription className="text-xs">by {b.author}</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-2">
              <Button size="sm" variant="secondary">
                Preview
              </Button>
              <Button size="sm">Download</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

function Progress() {
  return (
    <Section title="Progress & Reports" subtitle="Track grades, attendance, and engagement.">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Performance (Weekly)</CardTitle>
          </CardHeader>
          <CardContent>
            <LineProgress />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm">Attended: 92%</div>
            <div className="text-sm text-muted-foreground">Missed: 8%</div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6 rounded-xl border p-4">
        <div className="font-medium mb-2">AI Insights</div>
        <p className="text-sm text-muted-foreground">
          Focus recommended on Algebra: accuracy dips after 30 minutes; consider shorter problem sets with breaks.
        </p>
      </div>
    </Section>
  )
}

function AiMatch() {
  return (
    <Section title="AI Tutor Match" subtitle="Interactive quiz to suggest best-fit tutors.">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-4">
          <div className="font-medium mb-2">Preferences</div>
          <label className="text-sm">Learning Style</label>
          <Select>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Choose" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="visual">Visual</SelectItem>
              <SelectItem value="auditory">Auditory</SelectItem>
              <SelectItem value="kinesthetic">Kinesthetic</SelectItem>
            </SelectContent>
          </Select>
          <label className="text-sm mt-3 block">Goals</label>
          <Textarea className="mt-1" placeholder="Describe your learning goals..." />
          <Button className="mt-3">Get Matches</Button>
        </div>
        <div className="rounded-xl border p-4">
          <div className="font-medium mb-2">Suggested Tutors</div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>Ayesha (Math)</span>
              <Badge>92% match</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Bilal (Physics)</span>
              <Badge>88% match</Badge>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Forum() {
  return (
    <Section title="Forum" subtitle="Ask questions and help others.">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 rounded-xl border p-4">
          <div className="grid gap-3">
            {["How to tackle quadratic equations?", "Best way to revise Physics?"].map((p, i) => (
              <a key={i} href="#" className="rounded-md p-3 hover:bg-secondary block">
                <div className="font-medium">{p}</div>
                <div className="text-xs text-muted-foreground">Math • 12 replies</div>
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-xl border p-4">
          <div className="font-medium mb-2">Create Post</div>
          <Input placeholder="Title" />
          <Textarea className="mt-2" placeholder="Write your question..." />
          <Button className="mt-2">Publish</Button>
        </div>
      </div>
    </Section>
  )
}

function Payments() {
  const tx = [
    { id: "INV-1023", date: "2025-10-03", method: "Stripe", amount: "$24.00", status: "Paid" },
    { id: "INV-1022", date: "2025-09-15", method: "Easypaisa", amount: "$12.00", status: "Paid" },
  ]
  return (
    <Section title="Payments" subtitle="History, invoices, and refunds.">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tx.map((r) => (
            <TableRow key={r.id}>
              <TableCell>{r.id}</TableCell>
              <TableCell>{r.date}</TableCell>
              <TableCell>{r.method}</TableCell>
              <TableCell>{r.amount}</TableCell>
              <TableCell>
                <Badge>{r.status}</Badge>
              </TableCell>
              <TableCell>
                <Button variant="secondary" size="sm">
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  )
}

function Attendance() {
  return (
    <Section title="Attendance & Calendar" subtitle="View participation and plan your schedule.">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-4">
          <Calendar mode="single" />
        </div>
        <div className="rounded-xl border p-4">
          <div className="font-medium">Summary</div>
          <ul className="text-sm mt-2 space-y-1">
            <li>Attended: 23</li>
            <li>Missed: 2</li>
            <li>Upcoming: 4</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

function Profile() {
  return (
    <Section title="Profile" subtitle="Update your details.">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-4 grid gap-2">
          <label className="text-sm">Name</label>
          <Input placeholder="Your name" />
          <label className="text-sm mt-2">Bio</label>
          <Textarea placeholder="Short bio..." />
          <label className="text-sm mt-2">Subjects</label>
          <Input placeholder="e.g., Algebra, Grammar" />
          <Button className="mt-2">Save</Button>
        </div>
        <div className="rounded-xl border p-4">
          <div className="font-medium mb-2">Avatar</div>
          <img src="/placeholder-user.jpg" alt="Your avatar" className="h-24 w-24 rounded-full border" />
          <Button variant="secondary" className="mt-3">
            Upload New
          </Button>
        </div>
      </div>
    </Section>
  )
}

function Support() {
  return (
    <Section title="Help Center" subtitle="FAQ and ticketing.">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-4">
          <div className="font-medium mb-2">Contact Support</div>
          <Input placeholder="Subject" />
          <Textarea className="mt-2" placeholder="Describe your issue..." />
          <Button className="mt-2">Submit Ticket</Button>
        </div>
        <div className="rounded-xl border p-4">
          <div className="font-medium mb-2">FAQ</div>
          <ul className="text-sm space-y-2">
            <li>
              <a className="underline hover:text-primary" href="/faq">
                How to join class?
              </a>
            </li>
            <li>
              <a className="underline hover:text-primary" href="/faq">
                How to book a tutor?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

function Settings() {
  return (
    <Section title="Settings" subtitle="Personalize your experience.">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-4 grid gap-3">
          <div>
            <div className="text-sm font-medium">Theme</div>
            <Select>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Light" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <div className="text-sm font-medium">Language</div>
            <Select>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ur">Urdu</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <div className="text-sm font-medium">Notifications</div>
            <div className="text-sm text-muted-foreground">Email and push alerts</div>
            <div className="mt-2 flex gap-2">
              <Button variant="secondary" size="sm">
                Customize
              </Button>
              <Button size="sm">Enable All</Button>
            </div>
          </div>
        </div>
        <div className="rounded-xl border p-4">
          <div className="font-medium mb-2">Privacy</div>
          <div className="text-sm text-muted-foreground">Control your visibility and data usage.</div>
          <Button className="mt-3" variant="secondary">
            Open Privacy Settings
          </Button>
        </div>
      </div>
    </Section>
  )
}
