"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function Taskbar() {
  const [startOpen, setStartOpen] = useState(false)

  return (
    <>
      {/* Start menu */}
      {startOpen && (
        <div className="absolute bottom-10 left-0 w-48 bg-[#c8c8c8] border-2 border-[#ffffff] border-b-[#808080] border-r-[#808080] shadow-lg z-50">
          <div className="bg-[#8888aa] w-6 absolute left-0 top-0 bottom-0 flex items-end justify-center pb-2">
            <span className="text-white text-xs [writing-mode:vertical-rl] rotate-180 font-bold">cami OS</span>
          </div>
          <div className="ml-6">
            {["Programs", "Documents", "Settings", "Find", "Help"].map((item) => (
              <div
                key={item}
                className="px-3 py-2 hover:bg-[#4444aa] hover:text-white cursor-pointer text-sm text-[#333]"
              >
                {item}
              </div>
            ))}
            <div className="border-t border-[#808080] my-1" />
            <div className="px-3 py-2 hover:bg-[#4444aa] hover:text-white cursor-pointer text-sm text-[#333]">
              Shut Down...
            </div>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#c8c8c8] border-t-2 border-[#ffffff] flex items-center justify-between px-1 z-40">
        <button
          onClick={() => setStartOpen(!startOpen)}
          className={cn(
            "px-4 py-1 text-sm font-bold text-[#333]",
            "border-2 border-[#ffffff] border-b-[#808080] border-r-[#808080]",
            "bg-[#c8c8c8] hover:bg-[#d8d8d8]",
            "active:border-[#808080] active:border-b-[#ffffff] active:border-r-[#ffffff]",
            startOpen && "border-[#808080] border-b-[#ffffff] border-r-[#ffffff]",
          )}
        >
          start
        </button>

        <div className="text-sm text-[#4444aa] pr-4">{"cami's personal website"}</div>
      </div>
    </>
  )
}
