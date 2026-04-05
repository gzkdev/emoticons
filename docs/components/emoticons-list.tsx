import { cn } from "@/lib/utils"
import { Emoticon } from "@gzkdev/emoticons"
import { Check, Copy } from "lucide-react"

type EmoticonsListProps = {
  layout: "grid" | "list"
  emoticons: Emoticon[]
  copiedId: string | null
  onCopyEmoticon: (value: string, id: string) => void
  children?: React.ReactNode
}

export function EmoticonsList({
  children,
  copiedId,
  emoticons,
  layout,
  onCopyEmoticon,
}: EmoticonsListProps) {
  return (
    <div
      className={cn("grid gap-4 transition-all duration-300", {
        "grid-cols-2 md:grid-cols-3 lg:grid-cols-4": layout === "grid",
        "grid-cols-1": layout === "list",
      })}
    >
      {emoticons.map((e) => (
        <button
          key={e.id}
          onClick={() => onCopyEmoticon(e.value, e.id)}
          className={cn(
            "group relative flex cursor-pointer flex-col items-start overflow-hidden rounded-xl border bg-card transition-all hover:border-primary/50 hover:shadow-md active:scale-[0.98]",
            {
              "px-4 py-4": layout === "list",
              "aspect-square items-center justify-center p-4 text-center":
                layout === "grid",
            }
          )}
        >
          <div
            className={cn("flex w-full items-baseline justify-between gap-4", {
              "flex-col items-center justify-center": layout === "grid",
            })}
          >
            <span
              className={cn(
                "font-mono text-lg font-medium tracking-tight transition-colors group-hover:text-primary md:text-xl",
                {
                  "text-center text-2xl": layout === "grid",
                }
              )}
            >
              {e.value}
            </span>
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground/60 uppercase group-hover:text-primary/60">
              {e.id}
            </span>
          </div>

          {layout === "list" && (
            <>
              {e.meaning && (
                <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                  {e.meaning}
                </p>
              )}
              {e.tags && e.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {[...new Set(e.tags)].slice(0, 6).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {e.tags.length > 6 && (
                    <span className="text-[10px] font-medium text-muted-foreground/50">
                      +{e.tags.length - 6}
                    </span>
                  )}
                </div>
              )}
            </>
          )}

          <div className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
            {copiedId === e.id ? (
              <Check size={18} className="text-green-500" />
            ) : (
              <Copy size={16} className="text-muted-foreground" />
            )}
          </div>
        </button>
      ))}
      {children}
    </div>
  )
}
