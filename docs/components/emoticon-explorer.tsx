"use client"

import { getAll, search } from "@gzkdev/emoticons"
import { useWebHaptics } from "web-haptics/react"
import { EmoticonsList } from "./emoticons-list"
import { EmptyQueryResult } from "./empty-query-result"
import { InstallationGuide } from "./installation-guide"
import { SearchControls } from "./search-controls"
import { Header } from "./header"
import { Footer } from "./footer"
import { LayoutControls } from "./layout-controls"
import { useExplorerReducer } from "@/hooks/use-explorer-reducer"

export function EmoticonExplorer() {
  const { trigger } = useWebHaptics({ debug: true })

  const {
    setQuery,
    state: { copiedId, layout, query },
    setLayout,
    setCopiedId,
    resetCopiedId,
    resetQuery,
  } = useExplorerReducer()

  const queryString = query.trim()
  const results = queryString ? search(queryString) : getAll()

  const handleCopy = (value: string, id: string) => {
    navigator.clipboard.writeText(value)
    setCopiedId(id)
    trigger("success")
    setTimeout(() => resetCopiedId(), 2000)
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-12 px-4 py-16 md:py-24">
      <Header />

      <InstallationGuide onCopyCommand={handleCopy} />

      <SearchControls
        onQueryChange={setQuery}
        query={query}
        queryResultsCount={results.length}
      />

      <div className="min-h-[80vh] space-y-4">
        <LayoutControls layout={layout} onChangeLayout={setLayout} />

        <EmoticonsList
          copiedId={copiedId}
          emoticons={results}
          layout={layout}
          onCopyEmoticon={handleCopy}
        >
          {results.length === 0 && (
            <EmptyQueryResult query={query} resetQuery={resetQuery} />
          )}
        </EmoticonsList>
      </div>

      <Footer />
    </div>
  )
}
