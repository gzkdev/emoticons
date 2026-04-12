import { cn, sleep } from "@/lib/utils"
import type { Emoticon } from "@gzkdev/emoticons"
import { Check } from "lucide-react"
import { useState } from "react"
import { motion } from "motion/react"
import { DoubleIconFlipVariants } from "@/lib/constants"

const MotionCheck = motion.create(Check)

export function EmoticonsListContainer({
  children,
  layout,
}: {
  layout: "grid" | "list"
  children?: React.ReactNode
}) {
  return (
    <div
      className={cn("flex flex-wrap gap-4 *:grow", {
        "*:min-w-1/4 md:*:min-w-1/3 lg:*:min-w-1/4": layout === "grid",
        "*:w-full": layout === "list",
      })}
    >
      {children}
    </div>
  )
}

export function EmoticonListItem({
  data: { id, value, meaning, tags },
  layout,
  onCopyEmoticon,
}: {
  layout: "list" | "grid"
  onCopyEmoticon: (value: string) => void
  data: Emoticon
}) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyEmoticon = async (value: string) => {
    setIsCopied(true)
    onCopyEmoticon(value)
    await sleep()
    setIsCopied(false)
  }

  return (
    <button
      onClick={() => handleCopyEmoticon(value)}
      disabled={isCopied}
      className={cn(
        "group relative flex cursor-pointer flex-col items-start overflow-hidden rounded-xl border bg-card transition hover:border-primary/50 hover:shadow-md disabled:opacity-100",
        {
          "px-4 py-4": layout === "list",
          "items-center justify-center p-4 text-center": layout === "grid",
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
            "inline-flex items-center gap-2 font-mono text-lg font-medium tracking-tight transition-colors group-hover:text-primary",
            {
              "text-center": layout === "grid",
            }
          )}
        >
          {value}
          <MotionCheck
            initial="hidden"
            animate={isCopied ? "visible" : "hidden"}
            variants={DoubleIconFlipVariants}
            size={14}
            className="text-emerald-500"
          />
        </span>
        <span className="font-mono text-[10px] tracking-wider text-muted-foreground/60 uppercase group-hover:text-primary/60">
          {id}
        </span>
      </div>

      {layout === "list" && (
        <>
          {meaning && (
            <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
              {meaning}
            </p>
          )}
          {tags && tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {[...new Set(tags)].slice(0, 6).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 6 && (
                <span className="text-[10px] font-medium text-muted-foreground/50">
                  +{tags.length - 6}
                </span>
              )}
            </div>
          )}
        </>
      )}
    </button>
  )
}
