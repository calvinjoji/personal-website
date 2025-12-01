"use client"

import type React from "react"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface DesktopIconProps {
  icon: "folder" | "cd" | "file" | "tape"
  label: string
  onClick: () => void
  isActive?: boolean
  initialPosition: { x: number; y: number }
}

export function DesktopIcon({ icon, label, onClick, isActive, initialPosition }: DesktopIconProps) {
  const [position, setPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef<{ x: number; y: number; posX: number; posY: number } | null>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      posX: position.x,
      posY: position.y,
    }
    setIsDragging(true)

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!dragStart.current) return
      const dx = moveEvent.clientX - dragStart.current.x
      const dy = moveEvent.clientY - dragStart.current.y
      setPosition({
        x: dragStart.current.posX + dx,
        y: dragStart.current.posY + dy,
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      dragStart.current = null
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  const handleClick = (e: React.MouseEvent) => {
    if (!isDragging) {
      onClick()
    }
  }

  return (
    <button
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        zIndex: isDragging ? 40 : 10,
      }}
      className={cn(
        "flex flex-col items-center gap-1 p-1 sm:p-2 rounded-lg",
        "hover:bg-[var(--hover-bg)] transition-colors duration-300",
        isActive && "bg-[#4444aa]/20",
        isDragging && "opacity-80 scale-105",
      )}
    >
      {icon === "folder" && <MacFolderIcon isActive={isActive} />}
      {icon === "cd" && <MacCDIcon />}
      {icon === "tape" && <MacTapeIcon isActive={isActive} />}
      <span
        className={cn(
          "text-[10px] sm:text-xs text-center whitespace-pre-line leading-tight max-w-16 sm:max-w-20 transition-colors duration-300",
          isActive
            ? "text-white bg-[#4444aa] px-1 rounded"
            : "text-[var(--desktop-text)] drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]",
        )}
      >
        {label}
      </span>
    </button>
  )
}

function MacFolderIcon({ isActive }: { isActive?: boolean }) {
  return (
    <div className={cn("relative transition-colors duration-300", isActive && "brightness-110")}>
      <div className="absolute -top-1 left-1.5 sm:left-2 w-4 sm:w-5 h-1.5 sm:h-2 bg-gradient-to-b from-[var(--folder-from)] to-[var(--folder-to)] rounded-t-md transition-colors duration-300" />
      <div className="w-10 sm:w-12 h-8 sm:h-10 bg-gradient-to-b from-[var(--folder-from)] to-[var(--folder-to)] rounded-md shadow-md border border-[var(--folder-border)] transition-colors duration-300" />
    </div>
  )
}

function MacCDIcon() {
  return (
    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-[#f0f0f0] via-[#d8d8e8] to-[#b8b8c8] border border-[var(--menubar-border)] flex items-center justify-center shadow-md transition-colors duration-300">
      <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[var(--desktop-bg)] border border-[var(--menubar-border)] transition-colors duration-300" />
    </div>
  )
}

function MacTapeIcon({ isActive }: { isActive?: boolean }) {
  return (
    <div className={cn("relative transition-all duration-300", isActive && "brightness-110")}>
      {/* Antennas */}
      <div className="absolute -top-2 left-2 w-0.5 h-2.5 bg-gradient-to-t from-[#666] to-[#999] rounded-t-full transform -rotate-12" />
      <div className="absolute -top-2 right-2 w-0.5 h-2.5 bg-gradient-to-t from-[#666] to-[#999] rounded-t-full transform rotate-12" />

      {/* TV Body */}
      <div className="w-10 sm:w-12 h-9 sm:h-11 bg-gradient-to-b from-[#f5f0e6] to-[#e8e0d0] rounded-lg shadow-lg border border-[#c0b8a8] flex flex-col items-center justify-between p-1 overflow-hidden">
        {/* Screen bezel */}
        <div className="w-full flex-1 bg-[#2a2a2a] rounded-sm flex items-center justify-center p-0.5">
          {/* CRT Screen with scanlines effect */}
          <div className="w-full h-full bg-gradient-to-br from-[#1a3a2a] to-[#0a2a1a] rounded-sm relative overflow-hidden flex items-center justify-center">
            {/* Scanlines */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)",
              }}
            />
            {/* Glow play button */}
            <div className="w-0 h-0 border-l-[6px] border-l-[#00ff00] border-y-[4px] border-y-transparent drop-shadow-[0_0_4px_#00ff00]" />
          </div>
        </div>

        {/* Control panel */}
        <div className="w-full h-2 bg-gradient-to-b from-[#d8d0c0] to-[#c8c0b0] flex items-center justify-between px-1 mt-0.5">
          {/* Speaker grille */}
          <div className="flex gap-px">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-px h-1.5 bg-[#8a8a7a]" />
            ))}
          </div>
          {/* Dial knob */}
          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#888] to-[#555] border border-[#444]" />
          {/* Power LED */}
          <div className="w-1 h-1 rounded-full bg-red-500 shadow-[0_0_2px_#ff0000]" />
        </div>
      </div>
    </div>
  )
}
