"use client"

import { useEffect, useState, useCallback } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  rotation: number
}

function AppleLogo({ size, opacity, rotation }: { size: number; opacity: number; rotation: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{
        opacity,
        transform: `rotate(${rotation}deg)`,
        filter: `drop-shadow(0 0 ${size / 4}px rgba(255,255,255,0.5))`,
      }}
    >
      {/* Apple shape with rainbow stripes */}
      <defs>
        <clipPath id="appleClip">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </clipPath>
      </defs>
      {/* Rainbow stripes - classic Apple colors */}
      <g clipPath="url(#appleClip)">
        <rect y="0" width="24" height="4" fill="#61BB46" />
        <rect y="4" width="24" height="4" fill="#FDB827" />
        <rect y="8" width="24" height="4" fill="#F5821F" />
        <rect y="12" width="24" height="4" fill="#E03A3E" />
        <rect y="16" width="24" height="4" fill="#963D97" />
        <rect y="20" width="24" height="4" fill="#009DDC" />
      </g>
    </svg>
  )
}

export function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [particleId, setParticleId] = useState(0)

  const createParticle = useCallback(
    (x: number, y: number) => {
      const newParticle: Particle = {
        id: particleId,
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        size: Math.random() * 12 + 10,
        opacity: 1,
        rotation: Math.random() * 40 - 20,
      }
      setParticleId((prev) => prev + 1)
      return newParticle
    },
    [particleId],
  )

  useEffect(() => {
    let lastX = 0
    let lastY = 0
    let throttle = false

    const handleMouseMove = (e: MouseEvent) => {
      if (throttle) return

      const dx = e.clientX - lastX
      const dy = e.clientY - lastY
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance > 15) {
        lastX = e.clientX
        lastY = e.clientY

        const newParticle = createParticle(e.clientX, e.clientY)
        setParticles((prev) => [...prev.slice(-15), newParticle])

        throttle = true
        setTimeout(() => {
          throttle = false
        }, 50)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [createParticle])

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            opacity: p.opacity - 0.04,
            y: p.y - 1,
            rotation: p.rotation + 2,
          }))
          .filter((p) => p.opacity > 0),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.x,
            top: particle.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <AppleLogo size={particle.size} opacity={particle.opacity} rotation={particle.rotation} />
        </div>
      ))}
    </div>
  )
}
