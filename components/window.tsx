"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface WindowProps {
  title: string
  onClose: () => void
  children: React.ReactNode
  className?: string
  width?: string
  icon?: "cd" | "folder"
}

export function Window({ title, onClose, children, className, width = "w-[350px]", icon }: WindowProps) {
  return (
    <div
      className={cn(
        "absolute rounded-lg overflow-hidden shadow-xl border border-[var(--menubar-border)]",
        "left-1 right-1 sm:left-2 sm:right-2 md:left-auto md:right-auto",
        "md:" + width,
        "max-h-[70vh] sm:max-h-[80vh] overflow-y-auto",
        "z-50",
        className,
      )}
    >
      <div className="h-6 bg-gradient-to-b from-[var(--window-title-from)] to-[var(--window-title-to)] flex items-center px-2 gap-1.5 border-b border-[var(--menubar-border)] transition-colors duration-300 sticky top-0 z-10">
        {/* Traffic light buttons */}
        <button
          onClick={onClose}
          className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e33e32] hover:brightness-90 transition-all flex-shrink-0"
          title="Close"
        />
        <button
          className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#e0a023] hover:brightness-90 transition-all flex-shrink-0"
          title="Minimize"
        />
        <button
          className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29] hover:brightness-90 transition-all flex-shrink-0"
          title="Maximize"
        />

        <div className="flex-1 flex items-center justify-center gap-1.5 pr-8 sm:pr-12 min-w-0">
          {icon === "cd" && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-70 flex-shrink-0">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-[var(--desktop-text)]"
              />
              <circle cx="12" cy="12" r="3" fill="currentColor" className="text-[var(--desktop-text)]" />
              <circle
                cx="12"
                cy="12"
                r="6"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                className="text-[var(--desktop-text)] opacity-50"
              />
            </svg>
          )}
          <span className="text-center text-[10px] sm:text-xs font-medium text-[var(--desktop-text)] truncate transition-colors duration-300">
            {title}
          </span>
        </div>
      </div>

      {/* Window content area */}
      <div className="bg-[var(--window-bg)] p-3 sm:p-4 min-h-[100px] transition-colors duration-300">{children}</div>
    </div>
  )
}
