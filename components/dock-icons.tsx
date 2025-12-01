export function FolderIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 12C4 10.8954 4.89543 10 6 10H14L18 14H34C35.1046 14 36 14.8954 36 16V32C36 33.1046 35.1046 34 34 34H6C4.89543 34 4 33.1046 4 32V12Z"
        fill="url(#folderGradient)"
        stroke="var(--folder-border)"
        strokeWidth="1.5"
      />
      <defs>
        <linearGradient id="folderGradient" x1="20" y1="10" x2="20" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--folder-from)" />
          <stop offset="1" stopColor="var(--folder-to)" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function CDIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="16" fill="url(#cdGradient)" stroke="#88aacc" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="5" fill="#f0f0f0" stroke="#aaa" strokeWidth="1" />
      <circle cx="20" cy="20" r="2" fill="#666" />
      <defs>
        <linearGradient id="cdGradient" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e8f4ff" />
          <stop offset="0.5" stopColor="#d0e8ff" />
          <stop offset="1" stopColor="#b8dcff" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function GameIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="32" height="20" rx="4" fill="url(#gameGradient)" stroke="#888" strokeWidth="1.5" />
      <circle cx="12" cy="20" r="4" fill="#555" />
      <circle cx="28" cy="18" r="2" fill="#e55" />
      <circle cx="32" cy="22" r="2" fill="#5a5" />
      <defs>
        <linearGradient id="gameGradient" x1="20" y1="10" x2="20" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e0e0e0" />
          <stop offset="1" stopColor="#b0b0b0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function PersonIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="14" r="8" fill="url(#personHeadGradient)" stroke="#888" strokeWidth="1.5" />
      <path
        d="M8 36C8 28 13 24 20 24C27 24 32 28 32 36"
        fill="url(#personBodyGradient)"
        stroke="#888"
        strokeWidth="1.5"
      />
      <defs>
        <linearGradient id="personHeadGradient" x1="20" y1="6" x2="20" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--folder-from)" />
          <stop offset="1" stopColor="var(--folder-to)" />
        </linearGradient>
        <linearGradient id="personBodyGradient" x1="20" y1="24" x2="20" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--folder-from)" />
          <stop offset="1" stopColor="var(--folder-to)" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="32" height="22" rx="2" fill="url(#mailGradient)" stroke="#888" strokeWidth="1.5" />
      <path d="M4 12L20 22L36 12" stroke="#666" strokeWidth="1.5" fill="none" />
      <defs>
        <linearGradient id="mailGradient" x1="20" y1="10" x2="20" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff8e0" />
          <stop offset="1" stopColor="#f0e0c0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function TapeIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* TV Body */}
      <rect x="4" y="8" width="32" height="28" rx="3" fill="#e8e0d4" stroke="#5a5a5a" strokeWidth="1.5" />

      {/* Antennas */}
      <line x1="14" y1="8" x2="10" y2="2" stroke="#5a5a5a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26" y1="8" x2="30" y2="2" stroke="#5a5a5a" strokeWidth="1.5" strokeLinecap="round" />

      {/* Screen bezel */}
      <rect x="6" y="10" width="22" height="16" rx="1" fill="#3a3a3a" />

      {/* CRT Screen */}
      <rect x="7" y="11" width="20" height="14" rx="1" fill="#1a3a2a" />

      {/* Screen glow/scanlines effect */}
      <rect x="7" y="11" width="20" height="14" rx="1" fill="url(#screenGlow)" opacity="0.5" />

      {/* Play button on screen */}
      <polygon points="15,15 15,22 21,18.5" fill="#22cc66" />

      {/* Control panel */}
      <rect x="28" y="10" width="7" height="16" rx="1" fill="#d0c8bc" />

      {/* Speaker grille lines */}
      <line x1="29" y1="12" x2="29" y2="18" stroke="#888" strokeWidth="0.5" />
      <line x1="30.5" y1="12" x2="30.5" y2="18" stroke="#888" strokeWidth="0.5" />
      <line x1="32" y1="12" x2="32" y2="18" stroke="#888" strokeWidth="0.5" />

      {/* Dial knob */}
      <circle cx="31" cy="22" r="2" fill="#555" stroke="#333" strokeWidth="0.5" />

      {/* Power LED */}
      <circle cx="31" cy="25" r="1" fill="#ff3333" />

      <defs>
        <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#44ff88" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1a3a2a" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
