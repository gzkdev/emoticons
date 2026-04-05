import { Search } from "lucide-react"
import { Input } from "./ui/input"
import { cn } from "@/lib/utils"

type SearchControlsProps = {
  query: string
  queryResultsCount: number
  onQueryChange: (value: string) => void
}

export function SearchControls({
  onQueryChange,
  query,
  queryResultsCount,
}: SearchControlsProps) {
  const isInvalid = queryResultsCount < 1 && query.trim().length > 0

  return (
    <div className="sticky top-0 isolate z-50 -mx-4 px-4 py-4">
      <div className="absolute inset-0 -z-10 bg-background/80 mask-[linear-gradient(to_bottom,black_70%,transparent)] backdrop-blur-md" />

      <div className="flex flex-col gap-4">
        <div className="relative flex items-center gap-3">
          <div className="relative flex-1">
            <Search
              size={18}
              className={cn(
                "absolute top-1/2 left-3 -translate-y-1/2 transition-colors",
                isInvalid ? "text-destructive" : "text-muted-foreground"
              )}
            />
            <Input
              id="em-search"
              aria-invalid={isInvalid}
              type="search"
              placeholder="Try happy, fish, emo-42, or :)"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              autoComplete="off"
              spellCheck={false}
              className={cn(
                "h-12 pl-10 text-base shadow-sm transition-all",
                isInvalid && "focus-visible:border-destructive text-destructive"
              )}
            />
          </div>
        </div>

        <div className="flex items-center justify-between px-1">
          <p
            className={cn(
              "text-xs font-medium transition-colors",
              isInvalid ? "text-destructive" : "text-muted-foreground"
            )}
          >
            Showing {queryResultsCount}
            {queryResultsCount <= 1 ? " emoticon" : " emoticons"}
            {query.trim() ? "" : " (total library)"}
          </p>
        </div>
      </div>
    </div>
  )
}
