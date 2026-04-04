"use client"

import { useMemo, useState } from "react"
import { getAll, search } from "@gzkdev/emoticons"

import { Input } from "@/components/ui/input"

const HERO_EMOTICON = "ᕕ( ᐛ )ᕗ"

export function EmoticonExplorer() {
  const [query, setQuery] = useState("")

  const results = useMemo(() => {
    const trimmed = query.trim()
    if (!trimmed) return getAll()
    return search(trimmed)
  }, [query])

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 py-12 md:py-16">
      <header className="flex flex-col items-center gap-4 text-center">
        <p
          className="font-mono text-4xl leading-tight tracking-tight text-foreground md:text-5xl"
          aria-hidden
        >
          {HERO_EMOTICON}
        </p>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            @gzkdev/emoticons
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            ASCII and kaomoji faces for your apps. Search by text, tags, id, or
            the face itself.
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-2">
        <label className="text-muted-foreground text-xs font-medium" htmlFor="em-search">
          Search emoticons
        </label>
        <Input
          id="em-search"
          type="search"
          placeholder="Try happy, fish, emo-42, or :)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          spellCheck={false}
          className="h-10"
        />
        <p className="text-muted-foreground text-xs">
          {results.length} match{results.length === 1 ? "" : "es"}
          {query.trim() ? "" : " (full library)"}
        </p>
      </div>

      <ul
        className="border-border bg-card/40 max-h-[min(28rem,55vh)] overflow-y-auto rounded-xl border p-2 text-sm shadow-sm"
        aria-live="polite"
      >
        {results.map((e) => (
          <li
            key={e.id}
            className="border-border/60 hover:bg-muted/50 rounded-lg border-b px-3 py-3 last:border-b-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-mono text-base font-medium tracking-wide md:text-lg">
                {e.value}
              </span>
              <span className="text-muted-foreground font-mono text-xs">{e.id}</span>
            </div>
            {e.meaning ? (
              <p className="text-muted-foreground mt-1 text-xs leading-relaxed">{e.meaning}</p>
            ) : null}
            {e.tags && e.tags.length > 0 ? (
              <p className="text-muted-foreground/80 mt-2 font-mono text-[11px] leading-snug">
                {e.tags.slice(0, 12).join(" · ")}
                {e.tags.length > 12 ? " · …" : ""}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
