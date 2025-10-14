"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { cn } from "@/lib/utils"

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const listRef = useRef<HTMLDivElement | null>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  // Normalize sending states for AI SDK v5
  const isSending = status === "submitted" || status === "streaming"

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, open])

  return (
    <>
      {/* Toggle Button */}
      <button
        aria-label="Open AI Assistant"
        aria-expanded={open}
        aria-controls="global-ai-chat"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-shadow px-4 py-3"
      >
        {open ? "Close Chat" : "Chat with AI"}
      </button>

      {/* Chat Panel */}
      <div
        id="global-ai-chat"
        role="dialog"
        aria-modal="false"
        className={cn(
          "fixed bottom-20 right-4 z-50 w-[22rem] sm:w-[24rem] rounded-xl border bg-card text-card-foreground shadow-xl transition-all",
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none",
        )}
      >
        <header className="flex items-center justify-between px-3 py-2 border-b bg-secondary/70 rounded-t-xl">
          <div className="text-sm font-medium">Virtue Tech Assistant</div>
          <div className="text-xs text-muted-foreground">Teal & Crème</div>
        </header>

        <div ref={listRef} className="max-h-80 overflow-y-auto px-3 py-2 space-y-3">
          {/* Initial greeting if empty */}
          {messages.length === 0 && (
            <div className="text-xs text-muted-foreground">
              Hi! I’m your AI assistant. Ask about sessions, reports, or any panel feature.
            </div>
          )}

          {messages.map((m) => (
            <div key={m.id} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
              <div
                className={cn(
                  "max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed",
                  m.role === "user" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground",
                )}
              >
                {/* v5 messages have parts; ensure we render text parts */}
                {"parts" in m
                  ? m.parts.map((p) => (p.type === "text" ? p.text : "")).join("")
                  : ((m as any).content ?? "")}
              </div>
            </div>
          ))}
        </div>

        {/* Suggested prompts */}
        {messages.length === 0 && (
          <div className="px-3 pb-2 pt-1 flex flex-wrap gap-2">
            {[
              "Show my upcoming sessions",
              "Summarize my progress",
              "How to create a classroom?",
              "Help with payments",
            ].map((s) => (
              <button
                key={s}
                onClick={() => sendMessage({ text: s })}
                className="text-xs rounded-full border px-3 py-1 hover:bg-secondary transition"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault()
            const input = e.currentTarget.elements.namedItem("message") as HTMLInputElement
            const text = input.value.trim()
            if (!text) return
            sendMessage({ text })
            input.value = ""
          }}
          className="flex items-center gap-2 px-3 py-3 border-t bg-card rounded-b-xl"
        >
          <input
            name="message"
            aria-label="Type your message"
            placeholder="Ask anything..."
            disabled={isSending}
            className="flex-1 rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            disabled={isSending}
            className="rounded-md bg-primary text-primary-foreground px-3 py-2 text-sm hover:opacity-95 transition disabled:opacity-60"
          >
            {isSending ? "Sending…" : "Send"}
          </button>
        </form>
      </div>
    </>
  )
}
