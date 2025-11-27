"use client"

import { useState, useEffect } from "react"

const songs = [
  { title: "Dayvan Cowboy", artist: "Boards of Canada" },
  { title: "Avril 14th", artist: "Aphex Twin" },
  { title: "A Walk", artist: "Tycho" },
  { title: "Kerala", artist: "Bonobo" },
  { title: "She Moves She", artist: "Four Tet" },
]

export function IPod() {
  const [currentSong, setCurrentSong] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isPlaying) return

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSong((curr) => (curr + 1) % songs.length)
          return 0
        }
        return prev + 0.5
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [isPlaying])

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {/* iPod Body */}
      <div className="w-[140px] h-[240px] bg-gradient-to-b from-[#f5f5f7] to-[#e8e8ed] rounded-[20px] shadow-lg border border-[#d2d2d7] p-3 flex flex-col items-center">
        {/* Screen */}
        <div className="w-full h-[90px] bg-gradient-to-b from-[#8ec5fc] to-[#a7d8de] rounded-[8px] border-2 border-[#6b6b6b] overflow-hidden mb-3">
          {/* Screen Content */}
          <div className="h-full flex flex-col">
            {/* Title Bar */}
            <div className="bg-gradient-to-b from-[#7b7b7b] to-[#5a5a5a] px-2 py-0.5 flex items-center justify-between">
              <span className="text-[8px] text-white font-bold">Now Playing</span>
              <div className="flex items-center gap-1">
                {/* Battery icon */}
                <div className="w-4 h-2 border border-white rounded-sm flex items-center p-[1px]">
                  <div className="w-full h-full bg-green-400 rounded-[1px]"></div>
                </div>
              </div>
            </div>

            {/* Song Info */}
            <div className="flex-1 p-2 flex flex-col justify-center">
              {/* Animated song title */}
              <div className="overflow-hidden">
                <p
                  className="text-[10px] font-bold text-[#1a1a1a] whitespace-nowrap animate-marquee"
                  style={{ animationDuration: "8s" }}
                >
                  {songs[currentSong].title}
                </p>
              </div>
              <p className="text-[8px] text-[#4a4a4a] truncate">{songs[currentSong].artist}</p>

              {/* Progress bar */}
              <div className="mt-2 w-full h-1 bg-[#4a4a4a] rounded-full overflow-hidden">
                <div className="h-full bg-[#1a1a1a] transition-all duration-100" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Click Wheel */}
        <div className="relative w-[100px] h-[100px] bg-gradient-to-b from-[#e8e8ed] to-[#d2d2d7] rounded-full shadow-inner border border-[#c8c8cd] flex items-center justify-center">
          {/* Menu text */}
          <span className="absolute top-2 text-[8px] font-bold text-[#6b6b6b]">MENU</span>

          {/* Forward/Back buttons */}
          <span className="absolute left-2 text-[10px] text-[#6b6b6b]">◀◀</span>
          <span className="absolute right-2 text-[10px] text-[#6b6b6b]">▶▶</span>

          {/* Play/Pause at bottom */}
          <span className="absolute bottom-2 text-[10px] text-[#6b6b6b]">▶ ❚❚</span>

          {/* Center button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-[40px] h-[40px] bg-gradient-to-b from-[#f5f5f7] to-[#e0e0e5] rounded-full shadow-md border border-[#c8c8cd] hover:from-[#fff] hover:to-[#f0f0f5] active:from-[#d8d8dd] active:to-[#c8c8cd] transition-all retro-cursor-pointer"
          />
        </div>

        {/* Playing indicator */}
        {isPlaying && (
          <div className="absolute top-5 right-5 flex gap-[2px]">
            <div className="w-[2px] h-3 bg-green-500 rounded-full animate-eq1"></div>
            <div className="w-[2px] h-3 bg-green-500 rounded-full animate-eq2"></div>
            <div className="w-[2px] h-3 bg-green-500 rounded-full animate-eq3"></div>
          </div>
        )}
      </div>
    </div>
  )
}
