const HERO_EMOTICON = "ᕕ( ᐛ )ᕗ"

type HeaderProps = {
  heroEmoticon?: string
}

export function Header({ heroEmoticon = HERO_EMOTICON }: HeaderProps) {
  return (
    <header className="flex flex-col items-center gap-6 text-center">
      <div className="font-mono text-6xl text-primary">{heroEmoticon}</div>
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          @gzkdev/emoticons
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground md:text-lg">
          A lightweight, type-safe library of ASCII and kaomoji faces. Search by
          text, tags, or even the face itself.
        </p>
      </div>
    </header>
  )
}
