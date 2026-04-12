import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import Page from "./page.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  </StrictMode>
)
