import { getAll, search } from "@gzkdev/emoticons"
import { useWebHaptics } from "web-haptics/react"
import { EmoticonsListContainer, EmoticonListItem } from "./emoticons-list"
import { EmptyQueryResult } from "./empty-query-result"
import { InstallationGuide } from "./installation-guide"
import { Header } from "./header"
import { Footer } from "./footer"
import { useQueryState } from "nuqs"
import { useCopyToClipboard } from "react-use"

type Layout = "list" | "grid"

export function EmoticonExplorer() {
  const [query, setQuery] = useQueryState("q", { defaultValue: "" })
  const [layout] = useQueryState("layout", { defaultValue: "list" })
  const { trigger } = useWebHaptics({ debug: true })
  const [_, copyToClipboard] = useCopyToClipboard()
  const results = query ? search(query) : getAll()

  const handleCopyEmoticon = (value: string) => {
    trigger("soft")
    copyToClipboard(value)
  }

  const resetQuery = () => {
    setQuery(null)
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-12 px-4 py-24">
      <Header />

      <InstallationGuide />

      <div className="min-h-[80vh] space-y-4">
        <EmoticonsListContainer layout={layout as Layout}>
          {results.map((data) => (
            <EmoticonListItem
              key={data.id}
              data={data}
              layout={layout as Layout}
              onCopyEmoticon={handleCopyEmoticon}
            />
          ))}

          {results.length === 0 && (
            <EmptyQueryResult query={query} resetQuery={resetQuery} />
          )}
        </EmoticonsListContainer>
      </div>

      <Footer />
    </div>
  )
}
