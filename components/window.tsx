"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface WindowProps {
  title: string
  onClose: () => void
  children: React.ReactNode
  className?: string
  width?: string
}

export function Window({ title, onClose, children, className, width = "w-[350px]" }: WindowProps) {
  return (
    <div
      className={cn(
        "absolute rounded-lg overflow-hidden shadow-xl border border-[var(--menubar-border)]",
        width,
        className,
      )}
    >
      <div className="h-5 bg-gradient-to-b from-[var(--window-title-from)] to-[var(--window-title-to)] flex items-center px-2 gap-1.5 border-b border-[var(--menubar-border)] transition-colors duration-300">
        {/* Traffic light buttons */}
        <button
          onClick={onClose}
          className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e33e32] hover:brightness-90 transition-all"
          title="Close"
        />
        <button
          className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#e0a023] hover:brightness-90 transition-all"
          title="Minimize"
        />
        <button
          className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29] hover:brightness-90 transition-all"
          title="Maximize"
        />

        {/* Title - centered */}
        <span className="flex-1 text-center text-xs font-medium text-[var(--desktop-text)] truncate pr-12 transition-colors duration-300">
          {title}
        </span>
      </div>

      {/* Window content area */}
      <div className="bg-[var(--window-bg)] p-4 min-h-[150px] transition-colors duration-300">{children}</div>
    </div>
  )
}
