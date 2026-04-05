type EmptyQueryResultProps = {
  query: string
  resetQuery: () => void
}

export function EmptyQueryResult({ query, resetQuery }: EmptyQueryResultProps) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      <p className="text-lg text-muted-foreground">
        No emoticons found for "{query}"
      </p>
      <button
        onClick={resetQuery}
        className="mt-2 text-sm font-medium text-primary hover:underline"
      >
        Clear search
      </button>
    </div>
  )
}
