"use client"

import { HeroSlider } from "@/components/hero-slider"
import { Section } from "@/components/section"
import { PromoModal } from "@/components/promo-modal"

export default function HomePage() {
  return (
    <>
      {/* Hero Slider Section */}
      <div className="mx-auto max-w-6xl px-4 py-8">
        <HeroSlider />
      </div>

      {/* Why Virtue Tech Section */}
      <Section title="Why Virtue Tech" subtitle="Teal & Crème simplicity, powerful outcomes">
        <div className="space-y-6">
          {/* First row */}
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: "AI Tutor Match", d: "Personalized matching for faster progress", img: "/ai-matching.jpg" },
              { t: "Live Classroom", d: "High-quality video, whiteboard, and files", img: "/webrtc-classroom.jpg" },
              { t: "Insights & Reports", d: "Charts that make learning measurable", img: "/charts-analytics.jpg" },
            ].map((f, i) => (
              <div
                key={i}
                className="rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500"
              >
                <img src={f.img || "/placeholder.svg"} alt={f.t} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="font-semibold text-lg text-emerald-700">{f.t}</div>
                  <p className="text-sm text-muted-foreground">{f.d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row */}
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: "Parent Dashboard", d: "Track your child's learning progress and attendance", img: "/parent-dashboard.jpg" },
              { t: "AI Chatbot Assistant", d: "Smart virtual assistant for instant help", img: "/ai-chatbot.jpg" },
            ].map((f, i) => (
              <div
                key={i}
                className="rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500"
              >
                <img src={f.img || "/placeholder.svg"} alt={f.t} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="font-semibold text-lg text-emerald-700">{f.t}</div>
                  <p className="text-sm text-muted-foreground">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section title="Testimonials" subtitle="Loved by students, parents, and tutors">
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <figure key={i} className="rounded-xl border p-4 animate-fadeIn hover:shadow-md transition-shadow">
              <blockquote className="text-sm text-pretty italic text-gray-700">
                {'"'}Amazing platform — the AI tutor matching and dashboards saved me weeks!{'"'}
              </blockquote>
              <figcaption className="mt-2 text-xs text-muted-foreground">User #{i}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

     
      {/* Get Started Section */}
      <Section title="Get Started">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <a
            href="/signup?role=student"
            className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
          >
            I am a Student
          </a>
          <a
            href="/signup?role=teacher"
            className="px-4 py-2 rounded-md border border-emerald-600 text-emerald-700 hover:bg-emerald-50 transition-colors"
          >
            I am a Tutor
          </a>
          <a
            href="/signup?role=parent"
            className="px-4 py-2 rounded-md border border-emerald-600 text-emerald-700 hover:bg-emerald-50 transition-colors"
          >
            I am a Parent
          </a>
        </div>
      </Section>

      {/* Promotional Modal */}
      <PromoModal />
    </>
  )
}
