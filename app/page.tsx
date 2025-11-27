"use client"

import { useState, useEffect } from "react"
import { DesktopIcon } from "@/components/desktop-icon"
import { Window } from "@/components/window"
import { MenuBar } from "@/components/menu-bar"
import { Dock } from "@/components/dock"
import { FolderIcon, CDIcon, GameIcon, PersonIcon, MailIcon } from "@/components/dock-icons"
import { Starfield } from "@/components/starfield"
import { CursorTrail } from "@/components/cursor-trail"
import { IPod } from "@/components/ipod"

type WindowType = "work" | "about" | "contact" | "songs" | "games" | null

export default function Desktop() {
  const [activeWindow, setActiveWindow] = useState<WindowType>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

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
      <CursorTrail />

      {isDarkMode && <Starfield />}

      <MenuBar isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} />

      <IPod />

      <DesktopIcon
        icon="folder"
        label="Work"
        onClick={() => setActiveWindow("work")}
        isActive={activeWindow === "work"}
        initialPosition={{ x: 192, y: 128 }}
      />

      <DesktopIcon
        icon="cd"
        label={`songs i found\non the side\nof the road`}
        onClick={() => setActiveWindow("songs")}
        initialPosition={{ x: 64, y: 288 }}
      />

      <DesktopIcon
        icon="folder"
        label="About"
        onClick={() => setActiveWindow("about")}
        initialPosition={{ x: 32, y: 420 }}
      />

      <DesktopIcon
        icon="folder"
        label={`got any\ngames?`}
        onClick={() => setActiveWindow("games")}
        initialPosition={{ x: typeof window !== "undefined" ? window.innerWidth - 180 : 800, y: 160 }}
      />

      {/* Windows */}
      {activeWindow === "work" && (
        <Window title="Work" onClose={() => setActiveWindow(null)} className="top-32 left-72">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-[var(--desktop-text)]">ETHGlobal</h3>
              <p className="text-sm text-[var(--desktop-text-muted)]">April 2024 - Present</p>
            </div>
            <div>
              <h3 className="font-bold text-[var(--desktop-text)]">Devfolio</h3>
              <p className="text-sm text-[var(--desktop-text-muted)]">August 2022 - May 2024</p>
            </div>
            <div>
              <h3 className="font-bold text-[var(--desktop-text)]">Morgan Stanley</h3>
              <p className="text-sm text-[var(--desktop-text-muted)]">June 2021 - August 2022</p>
            </div>
          </div>
        </Window>
      )}

      {activeWindow === "about" && (
        <Window title="About" onClose={() => setActiveWindow(null)} className="top-40 left-64" width="w-[500px]">
          <div className="space-y-4">
            <p className="text-[var(--desktop-text)]">
              🌍 Growing Ethereum&apos;s global community through hackathons, conferences & curating experiences
              @ETHGlobal
            </p>
            <p className="text-[var(--desktop-text-muted)] text-sm leading-relaxed">
              I build systems for managing volunteers to designing experiences that help 2,000+ hackers/attendees feel
              at home in a new city. Despite being behind the scenes, I&apos;ve always believed events are living
              products — every shipment, schedule, and smile is part of the user experience.
            </p>
            <div className="text-[var(--desktop-text-muted)] text-sm leading-relaxed space-y-2">
              <p className="font-semibold text-[var(--desktop-text)]">Some things I&apos;ve done along the way:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  Helped organize ETHGlobal events across 6 continents from Sydney to San Francisco for 20,000+ hackers
                  & 500+ volunteers
                </li>
                <li>Built and scaled global support operations at Devfolio for 800k+ users and 1,300 hackathons</li>
                <li>Worked at Morgan Stanley automating trade functions</li>
                <li>
                  Designed workflows, shipping systems, and community rituals that make global-scale events feel human
                </li>
              </ul>
            </div>
            <p className="text-[var(--desktop-text-muted)] text-sm leading-relaxed">
              ✨ I like to think about how space, sound, and systems influence how people feel and how logistics can
              tell a story.
            </p>
            <p className="text-[var(--desktop-text-muted)] text-sm">
              ☕️ Interests: exploring pop up cities, brewing coffee, film, and running
            </p>
          </div>
        </Window>
      )}

      {activeWindow === "contact" && (
        <Window title="Contact" onClose={() => setActiveWindow(null)} className="top-48 left-80">
          <div className="space-y-4">
            <a href="mailto:hello@calvin.dev" className="block text-[var(--desktop-link)] hover:underline">
              hello@calvin.dev
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[var(--desktop-link)] hover:underline"
            >
              @calvin
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[var(--desktop-link)] hover:underline"
            >
              github.com/calvin
            </a>
          </div>
        </Window>
      )}

      {activeWindow === "songs" && (
        <Window
          title="songs i found on the side of the road"
          onClose={() => setActiveWindow(null)}
          className="top-36 left-60"
          width="w-[400px]"
        >
          <div className="space-y-2">
            {[
              "Boards of Canada - Dayvan Cowboy",
              "Aphex Twin - Avril 14th",
              "Tycho - A Walk",
              "Bonobo - Kerala",
              "Four Tet - She Moves She",
            ].map((song, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-1 hover:bg-[var(--hover-bg)] rounded transition-colors duration-300 retro-cursor-pointer"
              >
                <span className="text-xs text-[var(--desktop-text-muted)]">{">"}</span>
                <span className="text-sm text-[var(--desktop-text)]">{song}</span>
              </div>
            ))}
          </div>
        </Window>
      )}

      {activeWindow === "games" && (
        <Window title="got any games?" onClose={() => setActiveWindow(null)} className="top-44 left-96">
          <div className="space-y-3">
            <p className="text-[var(--desktop-text-muted)] text-sm italic">coming soon... maybe</p>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#ddd] rounded-lg flex items-center justify-center text-xl border border-[#bbb] text-[var(--desktop-text)]">
                ?
              </div>
              <div className="w-12 h-12 bg-[#ddd] rounded-lg flex items-center justify-center text-xl border border-[#bbb] text-[var(--desktop-text)]">
                ?
              </div>
              <div className="w-12 h-12 bg-[#ddd] rounded-lg flex items-center justify-center text-xl border border-[#bbb] text-[var(--desktop-text)]">
                ?
              </div>
            </div>
          </div>
        </Window>
      )}

      <Dock items={dockItems} activeItem={activeWindow} />
    </div>
  )
}
