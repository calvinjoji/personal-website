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
