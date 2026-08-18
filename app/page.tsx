"use client"

import { useState, useEffect } from "react"
import { DesktopIcon } from "@/components/desktop-icon"
import { Window } from "@/components/window"
import { MenuBar } from "@/components/menu-bar"
import { Dock } from "@/components/dock"
import { FolderIcon, CDIcon, GameIcon, PersonIcon, MailIcon, TapeIcon } from "@/components/dock-icons"
import { Starfield } from "@/components/starfield"
import { CursorTrail } from "@/components/cursor-trail"
import { RetroWidget } from "@/components/retro-widget"

type WindowType = "work" | "about" | "contact" | "songs" | "games" | "tapes" | null

export default function Desktop() {
  const [activeWindow, setActiveWindow] = useState<WindowType>(null)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const dockItems = [
    {
      id: "work",
      icon: <FolderIcon />,
      label: "Work",
      onClick: () => setActiveWindow("work"),
    },
    {
      id: "about",
      icon: <PersonIcon />,
      label: "About",
      onClick: () => setActiveWindow("about"),
    },
    {
      id: "songs",
      icon: <CDIcon />,
      label: "Songs",
      onClick: () => setActiveWindow("songs"),
    },
    {
      id: "tapes",
      icon: <TapeIcon />,
      label: "Tapes",
      onClick: () => setActiveWindow("tapes"),
    },
    {
      id: "games",
      icon: <GameIcon />,
      label: "Games",
      onClick: () => setActiveWindow("games"),
    },
    {
      id: "contact",
      icon: <MailIcon />,
      label: "Contact",
      onClick: () => setActiveWindow("contact"),
    },
  ]

  return (
    <div className="min-h-screen bg-[var(--desktop-bg)] relative overflow-hidden select-none transition-colors duration-300 retro-cursor">
      <div className="hidden lg:block">
        <CursorTrail />
      </div>

      {isDarkMode && <Starfield />}

      <MenuBar isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} />

      <RetroWidget />

      {/* Row 1: Work (left), got any games? (right) */}
      <DesktopIcon
        icon="folder"
        label="Work"
        onClick={() => setActiveWindow("work")}
        isActive={activeWindow === "work"}
        initialPosition={{ x: 20, y: 50 }}
      />

      <DesktopIcon
        icon="folder"
        label={`got any\ngames?`}
        onClick={() => setActiveWindow("games")}
        initialPosition={{ x: 120, y: 50 }}
      />

      {/* Row 2: songs (left), Contact (right) */}
      <DesktopIcon
        icon="cd"
        label={`songs i found\non the side\nof the road`}
        onClick={() => setActiveWindow("songs")}
        initialPosition={{ x: 20, y: 180 }}
      />

      <DesktopIcon
        icon="folder"
        label="Contact"
        onClick={() => setActiveWindow("contact")}
        initialPosition={{ x: 120, y: 180 }}
      />

      {/* Row 3: About (left) */}
      <DesktopIcon
        icon="folder"
        label="About"
        onClick={() => setActiveWindow("about")}
        initialPosition={{ x: 20, y: 310 }}
      />

      {/* Row 4: event tapes (centered) */}
      <DesktopIcon
        icon="tape"
        label="event tapes"
        onClick={() => setActiveWindow("tapes")}
        isActive={activeWindow === "tapes"}
        initialPosition={{ x: 70, y: 440 }}
      />

      {activeWindow === "work" && (
        <Window title="Work" onClose={() => setActiveWindow(null)} className="top-8 sm:top-10 md:top-32 md:left-72">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <a
                href="https://ethereum.foundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm sm:text-base text-[var(--desktop-text)] hover:text-[var(--desktop-link)] hover:underline transition-colors"
              >
                Ethereum Foundation
              </a>
              <p className="text-xs sm:text-sm text-[var(--desktop-text-muted)]">May 2026 - Present</p>
            </div>
            <div>
              <a
                href="https://ethglobal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm sm:text-base text-[var(--desktop-text)] hover:text-[var(--desktop-link)] hover:underline transition-colors"
              >
                ETHGlobal
              </a>
              <p className="text-xs sm:text-sm text-[var(--desktop-text-muted)]">April 2024 - March 2026</p>
            </div>
            <div>
              <a
                href="https://devfolio.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm sm:text-base text-[var(--desktop-text)] hover:text-[var(--desktop-link)] hover:underline transition-colors"
              >
                Devfolio
              </a>
              <p className="text-xs sm:text-sm text-[var(--desktop-text-muted)]">August 2022 - May 2024</p>
            </div>
            <div>
              <a
                href="https://www.morganstanley.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm sm:text-base text-[var(--desktop-text)] hover:text-[var(--desktop-link)] hover:underline transition-colors"
              >
                Morgan Stanley
              </a>
              <p className="text-xs sm:text-sm text-[var(--desktop-text-muted)]">June 2021 - August 2022</p>
            </div>
          </div>
        </Window>
      )}

      {activeWindow === "about" && (
        <Window
          title="About"
          onClose={() => setActiveWindow(null)}
          className="top-8 sm:top-10 md:top-40 md:left-64"
          width="w-[500px]"
        >
          <div className="space-y-4 text-[var(--desktop-text-muted)] text-xs sm:text-sm leading-relaxed">
            <p className="text-[var(--desktop-text)] font-medium">hey, i&apos;m calvin 👋</p>
            <p>
              currently working in the devcon team to host ethereum foundation&apos;s flagship conference
            </p>
            <p>
              previously i grew ethereum&apos;s global community through hackathons, conferences &amp; curated experiences @ETHGlobal @devfolio and before that was figuring trading options @morganstanley
            </p>
            <p>
              i work across continents, collect way too many airport stamps, and somehow still get excited every time
              humans come together to make things.
            </p>
            <p className="text-[var(--desktop-text)]">
              if you&apos;re into building cool stuff with good people, we&apos;ll get along 💛
            </p>
          </div>
        </Window>
      )}

      {activeWindow === "contact" && (
        <Window title="Contact" onClose={() => setActiveWindow(null)} className="top-8 sm:top-10 md:top-48 md:left-80">
          <div className="space-y-3 sm:space-y-4">
            <a
              href="mailto:calvinjojis@gmail.com"
              className="block text-sm sm:text-base text-[var(--desktop-link)] hover:underline break-all"
            >
              calvinjojis@gmail.com
            </a>
            <a
              href="https://x.com/thisiscalvin_"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm sm:text-base text-[var(--desktop-link)] hover:underline"
            >
              @thisiscalvin_
            </a>
            <a
              href="https://farcaster.xyz/thisiscalvin"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm sm:text-base text-[var(--desktop-link)] hover:underline"
            >
              farcaster.xyz/thisiscalvin
            </a>
          </div>
        </Window>
      )}

      {activeWindow === "songs" && (
        <Window
          title="songs i found on the side of the road"
          onClose={() => setActiveWindow(null)}
          className="top-8 sm:top-10 md:top-36 md:left-60"
          width="w-[400px]"
          icon="cd"
        >
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/7FngXASkyENvc2Zg4t6MaB?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </Window>
      )}

      {activeWindow === "games" && (
        <Window
          title="got any games?"
          onClose={() => setActiveWindow(null)}
          className="top-8 sm:top-10 md:top-44 md:left-96"
        >
          <div className="space-y-3">
            <p className="text-[var(--desktop-text-muted)] text-xs sm:text-sm italic">coming soon... maybe</p>
            <div className="flex gap-2 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ddd] rounded-lg flex items-center justify-center text-lg sm:text-xl border border-[#bbb] text-[var(--desktop-text)]">
                ?
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ddd] rounded-lg flex items-center justify-center text-lg sm:text-xl border border-[#bbb] text-[var(--desktop-text)]">
                ?
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ddd] rounded-lg flex items-center justify-center text-lg sm:text-xl border border-[#bbb] text-[var(--desktop-text)]">
                ?
              </div>
            </div>
          </div>
        </Window>
      )}

      {activeWindow === "tapes" && (
        <Window
          title="event tapes"
          onClose={() => setActiveWindow(null)}
          className="top-8 sm:top-10 md:top-28 md:left-56"
          width="w-[480px]"
        >
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            <p className="text-[var(--desktop-text-muted)] text-xs sm:text-sm italic">
              some recordings from past events
            </p>

            {/* 2025 */}
            <div className="space-y-2">
              <h3 className="text-[var(--desktop-text)] font-bold text-sm border-b border-[var(--menubar-border)] pb-1">
                2025
              </h3>
              <VideoItem title="ETHGlobal Taipei" url="https://www.youtube.com/watch?v=pZ_m3o7EgA4" />
              <VideoItem title="ETHGlobal Cannes" url="https://www.youtube.com/watch?v=MVJNB3Q9HA0" />
              <VideoItem title="ETHGlobal New York" url="https://www.youtube.com/watch?v=cmWCH391jZM" />
              <VideoItem title="Pragma Denver" url="https://www.youtube.com/watch?v=Ouml0A3UmLY" />
            </div>

            {/* 2024 */}
            <div className="space-y-2">
              <h3 className="text-[var(--desktop-text)] font-bold text-sm border-b border-[var(--menubar-border)] pb-1">
                2024
              </h3>
              <VideoItem title="ETHGlobal Brussels" url="https://www.youtube.com/watch?v=Be1HQb4goco" />
              <VideoItem title="ETHGlobal Bangkok" url="https://www.youtube.com/watch?v=WYS4V181S7g" />
              <VideoItem title="ETHGlobal San Francisco" url="https://www.youtube.com/watch?v=V-3QRspj4jw" />
            </div>

            {/* 2023 */}
            <div className="space-y-2">
              <h3 className="text-[var(--desktop-text)] font-bold text-sm border-b border-[var(--menubar-border)] pb-1">
                2023
              </h3>
              <VideoItem title="ETHIndia 2023" url="https://www.youtube.com/watch?v=S_KxidUhO7w" />
            </div>

            {/* 2022 */}
            <div className="space-y-2">
              <h3 className="text-[var(--desktop-text)] font-bold text-sm border-b border-[var(--menubar-border)] pb-1">
                2022
              </h3>
              <VideoItem title="ETHIndia 2022" url="https://www.youtube.com/watch?v=rWc1X9yA-wU" />
            </div>
          </div>
        </Window>
      )}

      <Dock items={dockItems} activeItem={activeWindow} />
    </div>
  )
}

function VideoItem({ title, url }: { title: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--hover-bg)] transition-colors group"
    >
      <div className="w-16 h-10 bg-gradient-to-br from-[#333] to-[#111] rounded flex items-center justify-center flex-shrink-0 border border-[#444] group-hover:border-[var(--desktop-link)] transition-colors">
        <svg
          className="w-4 h-4 text-white/70 group-hover:text-white transition-colors"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[var(--desktop-text)] text-xs sm:text-sm font-medium truncate group-hover:text-[var(--desktop-link)] transition-colors">
          {title}
        </p>
      </div>
    </a>
  )
}
