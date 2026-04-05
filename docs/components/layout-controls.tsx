import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutGrid, List } from "lucide-react"

type LayoutControlsProps = {
  layout: "grid" | "list"
  onChangeLayout: (value: LayoutControlsProps["layout"]) => void
}

export function LayoutControls({
  layout,
  onChangeLayout,
}: LayoutControlsProps) {
  return (
    <Tabs value={layout} onValueChange={onChangeLayout}>
      <TabsList className="h-12 p-1">
        <TabsTrigger value="list" className="h-full px-3">
          <List size={18} />
          List view
        </TabsTrigger>
        <TabsTrigger value="grid" className="h-full px-3">
          <LayoutGrid size={18} />
          Grid view
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
