import { cn } from "@/lib/utils"

interface StickyNoteProps {
  className?: string
}

export function StickyNote({ className }: StickyNoteProps) {
  return (
    <div className={cn("w-3 h-4 bg-[#f4d878] dark:bg-[#a89848] shadow-sm transform rotate-3 rounded-sm", className)} />
  )
}
