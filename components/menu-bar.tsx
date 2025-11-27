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
  const [showAboutFinder, setShowAboutFinder] = useState(false)

  return (
    <>
      {/* Click outside to close menu */}
      {activeMenu && <div className="fixed inset-0 z-40" onClick={() => setActiveMenu(null)} />}

      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[var(--menubar-from)] to-[var(--menubar-to)] border-b border-[var(--menubar-border)] flex items-center justify-between px-2 z-50 transition-colors duration-300">
        {/* Left side - Apple menu and app menus */}
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Apple Logo */}
          <button
            onClick={() => setActiveMenu(activeMenu === "apple" ? null : "apple")}
            className={cn(
              "text-sm font-bold px-1 lg:px-2 py-0.5 rounded text-[var(--desktop-text)]",
              activeMenu === "apple" && "bg-[#4444aa] text-white",
            )}
          >
            &#63743;
          </button>

          {["File", "Edit", "View", "Help"].map((menu) => (
            <button
              key={menu}
              onClick={() => setActiveMenu(activeMenu === menu ? null : menu)}
              className={cn(
                "hidden lg:block text-xs px-2 py-0.5 rounded text-[var(--desktop-text)]",
                activeMenu === menu && "bg-[#4444aa] text-white",
              )}
            >
              {menu}
            </button>
          ))}
        </div>

        {/* Right side - Dark mode toggle and title */}
        <div className="flex items-center gap-2 lg:gap-3">
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
          <span className="text-xs text-[var(--desktop-text)] font-sans whitespace-nowrap">
            <span className="lg:hidden">Calvin</span>
            <span className="hidden lg:inline tracking-wide">Ca</span>
            <span className="hidden lg:inline tracking-wider">lv</span>
            <span className="hidden lg:inline tracking-wide">in&apos;s personal website</span>
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

      {activeMenu === "Edit" && (
        <div
          className="absolute top-6 left-24 w-36 border border-[var(--menubar-border)] shadow-lg z-50 rounded-b transition-colors duration-300 overflow-hidden"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              var(--dropdown-bg),
              var(--dropdown-bg) 1px,
              color-mix(in srgb, var(--dropdown-bg) 90%, gray) 1px,
              color-mix(in srgb, var(--dropdown-bg) 90%, gray) 2px
            )`,
          }}
        >
          {["Undo", "---", "Cut", "Copy", "Paste", "Clear", "---", "Select All"].map((item, i) =>
            item === "---" ? (
              <div key={i} className="border-t border-[var(--menubar-border)] my-1" />
            ) : (
              <div
                key={item}
                className="px-4 py-1.5 hover:bg-[#4444aa] hover:text-white cursor-pointer text-sm text-[var(--desktop-text)] opacity-70 hover:opacity-100 transition-colors duration-300"
              >
                {item}
              </div>
            ),
          )}
        </div>
      )}

      {activeMenu === "View" && (
        <div
          className="absolute top-6 left-36 w-40 border border-[var(--menubar-border)] shadow-lg z-50 rounded-b transition-colors duration-300 overflow-hidden"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              var(--dropdown-bg),
              var(--dropdown-bg) 1px,
              color-mix(in srgb, var(--dropdown-bg) 90%, gray) 1px,
              color-mix(in srgb, var(--dropdown-bg) 90%, gray) 2px
            )`,
          }}
        >
          {[
            "as Icons",
            "as List",
            "as Columns",
            "---",
            "Clean Up",
            "Arrange By",
            "---",
            "Show Path Bar",
            "Show Status Bar",
          ].map((item, i) =>
            item === "---" ? (
              <div key={i} className="border-t border-[var(--menubar-border)] my-1" />
            ) : (
              <div
                key={item}
                className="px-4 py-1.5 hover:bg-[#4444aa] hover:text-white cursor-pointer text-sm text-[var(--desktop-text)] opacity-70 hover:opacity-100 transition-colors duration-300"
              >
                {item}
              </div>
            ),
          )}
        </div>
      )}

      {activeMenu === "Help" && (
        <div
          className="absolute top-6 left-48 w-40 border border-[var(--menubar-border)] shadow-lg z-50 rounded-b transition-colors duration-300 overflow-hidden"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              var(--dropdown-bg),
              var(--dropdown-bg) 1px,
              color-mix(in srgb, var(--dropdown-bg) 90%, gray) 1px,
              color-mix(in srgb, var(--dropdown-bg) 90%, gray) 2px
            )`,
          }}
        >
          <div
            onClick={() => {
              setShowAboutFinder(true)
              setActiveMenu(null)
            }}
            className="px-4 py-1.5 hover:bg-[#4444aa] hover:text-white cursor-pointer text-sm text-[var(--desktop-text)] opacity-70 hover:opacity-100 transition-colors duration-300"
          >
            About Finder
          </div>
          <div className="border-t border-[var(--menubar-border)] my-1" />
          <div className="px-4 py-1.5 hover:bg-[#4444aa] hover:text-white cursor-pointer text-sm text-[var(--desktop-text)] opacity-70 hover:opacity-100 transition-colors duration-300">
            Mac Help
          </div>
        </div>
      )}

      {showAboutFinder && (
        <>
          <div className="fixed inset-0 bg-black/30 z-[100]" onClick={() => setShowAboutFinder(false)} />
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 rounded-lg shadow-2xl z-[101] overflow-hidden"
            style={{
              background: `repeating-linear-gradient(
                0deg,
                #e8e8e8,
                #e8e8e8 1px,
                #d8d8d8 1px,
                #d8d8d8 2px
              )`,
            }}
          >
            {/* Title bar */}
            <div className="h-6 bg-gradient-to-b from-[#d0d0d0] to-[#a8a8a8] flex items-center px-2 border-b border-[#888]">
              {/* Traffic lights */}
              <div className="flex gap-1.5">
                <button
                  onClick={() => setShowAboutFinder(false)}
                  className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e33e32] hover:brightness-90"
                />
                <div className="w-3 h-3 rounded-full bg-[#c4c4c4] border border-[#a0a0a0]" />
                <div className="w-3 h-3 rounded-full bg-[#c4c4c4] border border-[#a0a0a0]" />
              </div>
              <span className="flex-1 text-center text-sm font-medium text-[#333]">About</span>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col items-center text-center">
              {/* Finder Icon */}
              <div className="w-24 h-24 mb-4 rounded-lg overflow-hidden">
                <img src="/images/image.png" alt="Calvin's Avatar" className="w-full h-full object-cover" />
              </div>

              <h2 className="text-3xl font-light italic text-[#333] mb-1" style={{ fontFamily: "Georgia, serif" }}>
                Finder
              </h2>
              <p className="text-sm text-[#666] mb-4">Version 1.0.0</p>

              <p className="text-sm text-[#333]">
                Made by{" "}
                <a
                  href="https://x.com/thisiscalvin_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563eb] hover:underline"
                >
                  Calvin
                </a>
              </p>
              <a
                href="https://github.com/calvinjoji"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#2563eb] hover:underline mt-1"
              >
                Open in GitHub
              </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}
