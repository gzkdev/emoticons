import { Copy } from "lucide-react"

type InstallationGuideProps = {
  onCopyCommand: (value: string, id: string, tags?: string[]) => void
}

export function InstallationGuide({ onCopyCommand }: InstallationGuideProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold">Installation</p>
      <div className="group relative">
        <pre className="overflow-x-auto rounded-xl border border-border bg-card p-4 font-mono text-sm shadow-sm ring-1 ring-border/20">
          <code className="text-foreground">pnpm add @gzkdev/emoticons</code>
        </pre>
        <button
          onClick={() =>
            onCopyCommand("pnpm add @gzkdev/emoticons", "install-cmd", [])
          }
          className="absolute top-3 right-3 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Copy size={18} />
        </button>
      </div>
    </div>
  )
}
