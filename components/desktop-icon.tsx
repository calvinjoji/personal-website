"use client"

import type React from "react"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface DesktopIconProps {
  icon: "folder" | "cd" | "file"
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
    // Only trigger click if not dragging (moved less than 5px)
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
        zIndex: isDragging ? 100 : 1,
      }}
      className={cn(
        "flex flex-col items-center gap-1 p-2 rounded-lg",
        "hover:bg-[var(--hover-bg)] transition-colors duration-300",
        isActive && "bg-[#4444aa]/20",
        isDragging && "opacity-80 scale-105",
      )}
    >
      {icon === "folder" && <MacFolderIcon isActive={isActive} />}
      {icon === "cd" && <MacCDIcon />}
      <span
        className={cn(
          "text-xs text-center whitespace-pre-line leading-tight max-w-20 transition-colors duration-300",
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
      {/* Folder tab */}
      <div className="absolute -top-1 left-2 w-5 h-2 bg-gradient-to-b from-[var(--folder-from)] to-[var(--folder-to)] rounded-t-md transition-colors duration-300" />
      {/* Folder body */}
      <div className="w-12 h-10 bg-gradient-to-b from-[var(--folder-from)] to-[var(--folder-to)] rounded-md shadow-md border border-[var(--folder-border)] transition-colors duration-300" />
    </div>
  )
}

function MacCDIcon() {
  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f0f0f0] via-[#d8d8e8] to-[#b8b8c8] border border-[var(--menubar-border)] flex items-center justify-center shadow-md transition-colors duration-300">
      <div className="w-4 h-4 rounded-full bg-[var(--desktop-bg)] border border-[var(--menubar-border)] transition-colors duration-300" />
    </div>
  )
}
