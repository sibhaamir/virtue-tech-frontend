"use client"
import { useEffect, useState, useRef } from "react"

const slides = [
  {
    title: "Learn with the Best",
    subtitle: "AI-matched tutors for every goal",
    img: "/online-tutoring-session.png",
    cta: { label: "Get Started", href: "/signup" },
  },
  {
    title: "Teach and Thrive",
    subtitle: "Tools for world-class tutoring",
    img: "/tutor-teaching-online-class-dashboard.jpg",
    cta: { label: "Become a Tutor", href: "/signup?role=teacher" },
  },
  {
    title: "Powered by Insights",
    subtitle: "Analytics that drive progress",
    img: "/data-charts-and-analytics-for-education.jpg",
    cta: { label: "View Panels", href: "/student" },
  },
]

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // clear interval helper
  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  // autoplay logic
  useEffect(() => {
    clearTimer()
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length)
      }, 5000)
    }
    return clearTimer
  }, [isAutoPlay])

  // manual navigation
  const goTo = (i: number) => {
    setIsAutoPlay(false) // stop autoplay when manually changed
    setIndex((i + slides.length) % slides.length)
  }

  const nextSlide = () => goTo(index + 1)
  const prevSlide = () => goTo(index - 1)

  return (
    <section
      aria-roledescription="carousel"
      className="relative overflow-hidden rounded-xl border bg-[#FAF9F6]"
    >
      {/* Slides */}
      <div className="relative w-full h-[360px] md:h-[520px]">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1000ms] ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-full object-cover select-none"
              draggable="false"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white max-w-lg space-y-2 animate-fadeIn">
              <h1 className="text-3xl md:text-4xl font-semibold drop-shadow-lg">{s.title}</h1>
              <p className="text-sm md:text-base opacity-90">{s.subtitle}</p>
              <a
                href={s.cta.href}
                className="inline-block mt-3 px-5 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition-all"
              >
                {s.cta.label}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-3 right-4 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === index ? "bg-teal-500 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Left/Right Arrows */}
      <button
        aria-label="Previous slide"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
      >
        ›
      </button>
    </section>
  )
}
