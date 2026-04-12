import { EmoticonExplorer } from "@/components/emoticon-explorer"
import { NavigationBar } from "./components/navigation-bar"
import { NuqsAdapter } from "nuqs/adapters/react"

export default function Page() {
  return (
    <NuqsAdapter>
      <NavigationBar />
      <EmoticonExplorer />
    </NuqsAdapter>
  )
}
2
