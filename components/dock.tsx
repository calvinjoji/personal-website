"use client"

import type React from "react"

import { useState } from "react"

interface DockItem {
  id: string
  icon: React.ReactNode
  label: string
  onClick: () => void
}

interface DockProps {
  items: DockItem[]
  activeItem?: string | null
}

export function Dock({ items, activeItem }: DockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1
    const distance = Math.abs(hoveredIndex - index)
    if (distance === 0) return 1.5
    if (distance === 1) return 1.25
    if (distance === 2) return 1.1
    return 1
  }

  const getTranslateY = (index: number) => {
    if (hoveredIndex === null) return 0
    const distance = Math.abs(hoveredIndex - index)
    if (distance === 0) return -16
    if (distance === 1) return -10
    if (distance === 2) return -4
    return 0
  }

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-end gap-1 px-3 py-2 bg-[var(--dock-bg)] backdrop-blur-md rounded-2xl border border-[var(--dock-border)] shadow-lg transition-colors duration-300">
        {items.map((item, index) => (
          <div key={item.id} className="relative group">
            {/* Tooltip */}
            <div
              className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-[var(--dropdown-bg)] text-[var(--desktop-text)] text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-[var(--menubar-border)] shadow-md"
              style={{
                transform: `translateX(-50%) translateY(${hoveredIndex === index ? -4 : 0}px)`,
              }}
            >
              {item.label}
            </div>

            {/* Icon */}
            <button
              onClick={item.onClick}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col items-center justify-center w-12 h-12 transition-all duration-200 ease-out origin-bottom"
              style={{
                transform: `scale(${getScale(index)}) translateY(${getTranslateY(index)}px)`,
              }}
            >
              {item.icon}
            </button>

            {/* Active indicator dot */}
            {activeItem === item.id && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--desktop-text)] rounded-full opacity-60" />
            )}
          </div>
        ))}

        {/* Separator */}
        <div className="w-px h-10 bg-[var(--menubar-border)] mx-1 opacity-50" />

        {/* Trash in dock */}
        <div className="relative group">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-[var(--dropdown-bg)] text-[var(--desktop-text)] text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-[var(--menubar-border)] shadow-md">
            Trash
          </div>
          <button
            onMouseEnter={() => setHoveredIndex(items.length)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex flex-col items-center justify-center w-12 h-12 transition-all duration-200 ease-out origin-bottom"
            style={{
              transform: `scale(${hoveredIndex === items.length ? 1.5 : hoveredIndex === items.length - 1 ? 1.25 : 1}) translateY(${hoveredIndex === items.length ? -16 : hoveredIndex === items.length - 1 ? -10 : 0}px)`,
            }}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

function TrashIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="10"
        y="12"
        width="20"
        height="24"
        rx="2"
        fill="url(#trashGradient)"
        stroke="var(--folder-border)"
        strokeWidth="1.5"
      />
      <rect
        x="8"
        y="8"
        width="24"
        height="4"
        rx="1"
        fill="url(#trashLidGradient)"
        stroke="var(--folder-border)"
        strokeWidth="1"
      />
      <rect
        x="16"
        y="5"
        width="8"
        height="4"
        rx="1"
        fill="url(#trashLidGradient)"
        stroke="var(--folder-border)"
        strokeWidth="1"
      />
      <line x1="15" y1="18" x2="15" y2="30" stroke="var(--folder-border)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="18" x2="20" y2="30" stroke="var(--folder-border)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="25" y1="18" x2="25" y2="30" stroke="var(--folder-border)" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="trashGradient" x1="20" y1="12" x2="20" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d8d8d8" />
          <stop offset="1" stopColor="#a8a8a8" />
        </linearGradient>
        <linearGradient id="trashLidGradient" x1="20" y1="5" x2="20" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e8e8e8" />
          <stop offset="1" stopColor="#c8c8c8" />
        </linearGradient>
      </defs>
    </svg>
  )
}
