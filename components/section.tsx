import type React from "react"
export function Section(props: { title: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">{props.title}</h2>
        {props.subtitle && <p className="text-muted-foreground mt-2">{props.subtitle}</p>}
      </div>
      {props.children}
    </section>
  )
}
