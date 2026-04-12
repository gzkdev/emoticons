import { LayoutGrid, List, Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useQueryState } from "nuqs"
import { useTheme } from "next-themes"
import { useWebHaptics } from "web-haptics/react"

const HERO_EMOTICON = "(⌐■_■)"

export function NavigationBar() {
  const { theme, setTheme } = useTheme()
  const [query, setQuery] = useQueryState("q", { defaultValue: "" })
  const [layout, setLayout] = useQueryState("layout", { defaultValue: "list" })
  const { trigger } = useWebHaptics({ debug: true })

  const toggleTheme = () => {
    trigger("soft")
    setTheme((p) => (p === "light" ? "dark" : "light"))
  }
  const toggleLayout = () => {
    trigger("soft")
    setLayout((p) => (p === "grid" ? "list" : "grid"))
  }

  return (
    <div className="fixed top-0 isolate z-10 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 p-4 sm:gap-8">
        <div className="absolute inset-0 -z-10 bg-background/80 mask-[linear-gradient(to_bottom,black_70%,transparent)] backdrop-blur-md" />

        <div className="shrink-0">
          <span aria-hidden>{HERO_EMOTICON}</span>
          <span className="sr-only">Emoticons</span>
        </div>

        <Input
          placeholder="Try happy, fish, emo-42 or :)"
          type="search"
          autoComplete="off"
          spellCheck={false}
          value={query || ""}
          onChange={(e) => setQuery(e.target.value)}
          //   className="h-10 pl-6 text-base"
        />

        <div className="flex shrink-0 items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLayout}
            title="Toggle layout"
          >
            {layout === "grid" ? <List /> : <LayoutGrid />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            title="Toggle theme"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </Button>
        </div>
      </div>
    </div>
  )
}
