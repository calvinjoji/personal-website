"use client"

import { useState, useEffect } from "react"

export function RetroWidget() {
  const [time, setTime] = useState(new Date())
  const [weather, setWeather] = useState({
    temp: 72,
    condition: "sunny",
    high: 78,
    low: 65,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Cycle through weather conditions for visual interest
  useEffect(() => {
    const conditions = ["sunny", "cloudy", "rainy", "partly-cloudy"]
    const temps = [
      { temp: 72, high: 78, low: 65 },
      { temp: 68, high: 74, low: 62 },
      { temp: 58, high: 63, low: 52 },
      { temp: 70, high: 76, low: 64 },
    ]
    let index = 0

    const weatherTimer = setInterval(() => {
      index = (index + 1) % conditions.length
      setWeather({
        condition: conditions[index],
        ...temps[index],
      })
    }, 10000)

    return () => clearInterval(weatherTimer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return (
          <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10">
            {/* Sun */}
            <circle cx="20" cy="20" r="8" fill="#FFD93D" stroke="#F4A100" strokeWidth="1" />
            {/* Sun rays */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <line
                key={i}
                x1="20"
                y1="20"
                x2={20 + 14 * Math.cos((angle * Math.PI) / 180)}
                y2={20 + 14 * Math.sin((angle * Math.PI) / 180)}
                stroke="#FFD93D"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ))}
          </svg>
        )
      case "cloudy":
        return (
          <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10">
            <ellipse cx="20" cy="24" rx="14" ry="8" fill="#B8C4CE" stroke="#8899A6" strokeWidth="1" />
            <ellipse cx="14" cy="20" rx="8" ry="6" fill="#D1D9E0" stroke="#8899A6" strokeWidth="1" />
            <ellipse cx="26" cy="18" rx="7" ry="5" fill="#D1D9E0" stroke="#8899A6" strokeWidth="1" />
          </svg>
        )
      case "rainy":
        return (
          <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10">
            <ellipse cx="20" cy="16" rx="12" ry="7" fill="#8899A6" stroke="#687888" strokeWidth="1" />
            <ellipse cx="14" cy="13" rx="6" ry="5" fill="#A5B4C0" stroke="#687888" strokeWidth="1" />
            <ellipse cx="25" cy="12" rx="5" ry="4" fill="#A5B4C0" stroke="#687888" strokeWidth="1" />
            {/* Rain drops */}
            <line x1="12" y1="24" x2="10" y2="30" stroke="#5DA9E9" strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="24" x2="18" y2="32" stroke="#5DA9E9" strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="24" x2="26" y2="29" stroke="#5DA9E9" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )
      case "partly-cloudy":
        return (
          <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10">
            {/* Sun behind */}
            <circle cx="28" cy="14" r="7" fill="#FFD93D" stroke="#F4A100" strokeWidth="1" />
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <line
                key={i}
                x1="28"
                y1="14"
                x2={28 + 10 * Math.cos((angle * Math.PI) / 180)}
                y2={14 + 10 * Math.sin((angle * Math.PI) / 180)}
                stroke="#FFD93D"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ))}
            {/* Cloud in front */}
            <ellipse cx="18" cy="26" rx="12" ry="7" fill="#D1D9E0" stroke="#8899A6" strokeWidth="1" />
            <ellipse cx="12" cy="22" rx="7" ry="5" fill="#E8ECF0" stroke="#8899A6" strokeWidth="1" />
            <ellipse cx="22" cy="21" rx="6" ry="4" fill="#E8ECF0" stroke="#8899A6" strokeWidth="1" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="hidden md:block fixed bottom-24 right-4 z-30">
      <div
        className="rounded-lg overflow-hidden shadow-lg border-2"
        style={{
          background: "var(--window-bg)",
          borderColor: "var(--menubar-border)",
          width: "140px",
        }}
      >
        {/* Title bar */}
        <div
          className="px-2 py-1 text-xs font-bold text-center border-b"
          style={{
            background: "linear-gradient(to bottom, var(--window-title-from), var(--window-title-to))",
            borderColor: "var(--menubar-border)",
            color: "var(--desktop-text)",
          }}
        >
          Widget
        </div>

        {/* Clock section */}
        <div className="px-3 py-2 text-center border-b" style={{ borderColor: "var(--menubar-border)" }}>
          <div
            className="text-2xl font-bold tracking-tight"
            style={{
              color: "var(--desktop-text)",
              fontFamily: "Monaco, monospace",
            }}
          >
            {formatTime(time)}
          </div>
          <div
            className="text-xs mt-0.5"
            style={{
              color: "var(--desktop-text-muted)",
            }}
          >
            {formatDate(time)}
          </div>
        </div>

        {/* Weather section */}
        <div className="px-3 py-2">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">{getWeatherIcon(weather.condition)}</div>
            <div className="text-right">
              <div
                className="text-xl font-bold"
                style={{
                  color: "var(--desktop-text)",
                }}
              >
                {weather.temp}°F
              </div>
              <div
                className="text-[10px]"
                style={{
                  color: "var(--desktop-text-muted)",
                }}
              >
                H:{weather.high}° L:{weather.low}°
              </div>
            </div>
          </div>
          <div
            className="text-[10px] text-center mt-1 capitalize"
            style={{
              color: "var(--desktop-text-muted)",
            }}
          >
            {weather.condition.replace("-", " ")}
          </div>
        </div>

        {/* Retro pixel decoration */}
        <div
          className="h-1 flex"
          style={{
            background: "linear-gradient(to right, #61BB46, #FDB827, #F5821F, #E03A3E, #963D97, #009DDC)",
          }}
        />
      </div>
    </div>
  )
}
