"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Moon, Sun } from "lucide-react"

interface MenuBarProps {
  isDarkMode: boolean
  onToggleDarkMode: () => void
}

export function MenuBar({ isDarkMode, onToggleDarkMode }: MenuBarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <>
      {/* Click outside to close menu */}
      {activeMenu && <div className="fixed inset-0 z-40" onClick={() => setActiveMenu(null)} />}

      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[var(--menubar-from)] to-[var(--menubar-to)] border-b border-[var(--menubar-border)] flex items-center justify-between px-2 z-50 transition-colors duration-300">
        {/* Left side - Apple menu and app menus */}
        <div className="flex items-center gap-4">
          {/* Apple Logo */}
          <button
            onClick={() => setActiveMenu(activeMenu === "apple" ? null : "apple")}
            className={cn(
              "text-sm font-bold px-2 py-0.5 rounded text-[var(--desktop-text)]",
              activeMenu === "apple" && "bg-[#4444aa] text-white",
            )}
          >
            &#63743;
          </button>

          {/* App menus */}
          {["File", "Edit", "View", "Special"].map((menu) => (
            <button
              key={menu}
              onClick={() => setActiveMenu(activeMenu === menu ? null : menu)}
              className={cn(
                "text-xs px-2 py-0.5 rounded text-[var(--desktop-text)]",
                activeMenu === menu && "bg-[#4444aa] text-white",
              )}
            >
              {menu}
            </button>
          ))}
        </div>

        {/* Right side - Dark mode toggle and title */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle Button */}
          <button
            onClick={onToggleDarkMode}
            className="flex items-center justify-center w-5 h-5 rounded hover:bg-[var(--hover-bg)] transition-colors"
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="w-3 h-3 text-[var(--desktop-text)]" />
            ) : (
              <Moon className="w-3 h-3 text-[var(--desktop-text)]" />
            )}
          </button>
          <span className="text-xs text-[var(--desktop-text)] font-sans">
            <span className="tracking-wide">Ca</span>
            <span className="tracking-wider">lv</span>
            <span className="tracking-wide">in&apos;s personal website</span>
          </span>
        </div>
      </div>

      {/* Dropdown Menus */}
      {activeMenu === "apple" && (
        <div className="absolute top-6 left-1 w-48 bg-[var(--dropdown-bg)] border border-[var(--menubar-border)] shadow-lg z-50 rounded-b transition-colors duration-300">
          {[
            "About This Mac",
            "---",
            "System Preferences...",
            "App Store...",
            "---",
            "Sleep",
            "Restart...",
            "Shut Down...",
          ].map((item, i) =>
            item === "---" ? (
              <div key={i} className="border-t border-[var(--menubar-border)] my-1" />
            ) : (
              <div
                key={item}
                className="px-3 py-1 hover:bg-[#4444aa] hover:text-white cursor-pointer text-xs text-[var(--desktop-text)] transition-colors duration-300"
              >
                {item}
              </div>
            ),
          )}
        </div>
      )}

      {activeMenu === "File" && (
        <div className="absolute top-6 left-12 w-40 bg-[var(--dropdown-bg)] border border-[var(--menubar-border)] shadow-lg z-50 rounded-b transition-colors duration-300">
          {["New Folder", "Open", "---", "Close Window", "Get Info"].map((item, i) =>
            item === "---" ? (
              <div key={i} className="border-t border-[var(--menubar-border)] my-1" />
            ) : (
              <div
                key={item}
                className="px-3 py-1 hover:bg-[#4444aa] hover:text-white cursor-pointer text-xs text-[var(--desktop-text)] transition-colors duration-300"
              >
                {item}
              </div>
            ),
          )}
        </div>
      )}
    </>
  )
}
