const PLACEHOLDER_EMOTICON = "(⌐■_■)"

type HeaderProps = {
  emoticon?: string
}

export function Header({ emoticon = PLACEHOLDER_EMOTICON }: HeaderProps) {
  console.log(emoticon, "Emoticons")

  return (
    <div className="space-y-2">
      <h1 className="font-medium">Emoticons</h1>
      <p className="text-muted-foreground">
        A comprehensive library of ASCII and kaomoji faces
      </p>
    </div>
  )
}
