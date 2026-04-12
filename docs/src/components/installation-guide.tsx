import { useState } from "react"
import { Button } from "./ui/button"
import { cn, sleep } from "@/lib/utils"
import { useWebHaptics } from "web-haptics/react"
import { useCopyToClipboard } from "react-use"
import { Check, Copy } from "lucide-react"
import { DoubleIconFlipVariants } from "@/lib/constants"
import { AnimatePresence, motion } from "motion/react"

const MotionCheck = motion.create(Check)
const MotionCopy = motion.create(Copy)

const packageManagers = [
  { id: "npm", command: "npm i @gzkdev/emoticons" },
  { id: "pnpm", command: "pnpm add @gzkdev/emoticons" },
  { id: "yarn", command: "yarn add @gzkdev/emoticons" },
  { id: "bun", command: "bun add @gzkdev/emoticons" },
] as const

type PackageManager = (typeof packageManagers)[number]["id"]

export function InstallationGuide() {
  const { trigger } = useWebHaptics({ debug: true })
  const [installer, setInstaller] = useState<PackageManager>("npm")
  const [_, copyToClipboard] = useCopyToClipboard()
  const [isCopied, setIsCopied] = useState(false)

  const installCommand = packageManagers.find(
    ({ id }) => id === installer
  )?.command

  const handleChangeInstaller = (id: PackageManager) => {
    trigger("soft")
    setInstaller(id)
  }

  const handleCopyInstallCommand = async () => {
    if (!installCommand) {
      throw new Error("Bad install command", {
        cause: "Package manager not supported",
      })
    }
    trigger("soft")
    setIsCopied(true)
    copyToClipboard(installCommand)
    await sleep()
    setIsCopied(false)
  }

  return (
    <div className="rounded-lg border">
      <div className="flex items-center gap-1 border-b px-2 py-1 text-muted-foreground">
        {packageManagers.map(({ id }) => (
          <Button
            variant="ghost"
            size="sm"
            key={id}
            onClick={() => handleChangeInstaller(id)}
            className={cn("relative px-1.5", {
              "text-foreground": id === installer,
            })}
          >
            {id}
            {id === installer && (
              <motion.span
                layoutId="pkg-indicator"
                className="absolute bottom-0 -mb-1.5 h-0.5 w-full rounded-2xl bg-foreground"
              />
            )}
          </Button>
        ))}
      </div>

      <div className="flex h-12 items-center justify-between rounded-lg p-2 pl-4">
        <span className="font-mono text-sm">
          $ <span className="text-muted-foreground">{installCommand}</span>
        </span>
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={handleCopyInstallCommand}
          disabled={isCopied}
          className="disabled:opacity-100"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {isCopied ? (
              <MotionCheck
                key="checkmark"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={DoubleIconFlipVariants}
                className="text-emerald-500"
              />
            ) : (
              <MotionCopy
                key="checkmark"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={DoubleIconFlipVariants}
                className="text-muted-foreground"
              />
            )}
          </AnimatePresence>
        </Button>
      </div>
    </div>
  )
}
