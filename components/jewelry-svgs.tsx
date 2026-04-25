export function CielPendantSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 290" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="grd" cx="30%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#F6F2EA" />
          <stop offset="50%" stopColor="#8FAFC1" />
          <stop offset="100%" stopColor="#DCE8F0" />
        </radialGradient>
      </defs>
      <path d="M26 70 C26 26 174 26 174 70" stroke="#5A0F1A" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <circle cx="26" cy="70" r="4.5" fill="#5A0F1A" />
      <circle cx="174" cy="70" r="4.5" fill="#5A0F1A" />
      <ellipse cx="60" cy="45" rx="5.5" ry="8" fill="#8FAFC1" stroke="#5A0F1A" strokeWidth=".9" transform="rotate(-20 60 45)" />
      <line x1="60" y1="38" x2="60" y2="52" stroke="rgba(255,255,255,.5)" strokeWidth=".5" />
      <ellipse cx="140" cy="45" rx="5.5" ry="8" fill="#8FAFC1" stroke="#5A0F1A" strokeWidth=".9" transform="rotate(20 140 45)" />
      <line x1="140" y1="38" x2="140" y2="52" stroke="rgba(255,255,255,.5)" strokeWidth=".5" />
      <line x1="100" y1="26" x2="100" y2="86" stroke="#5A0F1A" strokeWidth="1.1" />
      <circle cx="100" cy="86" r="4" fill="none" stroke="#5A0F1A" strokeWidth=".9" />
      <path d="M100 96 C83 96 68 111 68 128 C68 149 100 178 100 178 C100 178 132 149 132 128 C132 111 117 96 100 96Z" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth="1.4" />
      <line x1="100" y1="100" x2="100" y2="174" stroke="rgba(255,255,255,.45)" strokeWidth=".7" />
      <line x1="70" y1="128" x2="130" y2="128" stroke="rgba(255,255,255,.45)" strokeWidth=".7" />
      <line x1="74" y1="108" x2="100" y2="128" stroke="rgba(255,255,255,.28)" strokeWidth=".5" />
      <line x1="126" y1="108" x2="100" y2="128" stroke="rgba(255,255,255,.28)" strokeWidth=".5" />
      <line x1="76" y1="152" x2="100" y2="128" stroke="rgba(255,255,255,.28)" strokeWidth=".5" />
      <line x1="124" y1="152" x2="100" y2="128" stroke="rgba(255,255,255,.28)" strokeWidth=".5" />
      <path d="M100 108 C88 108 78 118 78 128 C78 141 100 160 100 160 C100 160 122 141 122 128 C122 118 112 108 100 108Z" stroke="rgba(255,255,255,.18)" strokeWidth=".5" fill="none" />
      <ellipse cx="87" cy="108" rx="8" ry="5" fill="white" opacity=".3" transform="rotate(-25 87 108)" />
      <path d="M100 96 C83 96 68 111 68 128 C68 149 100 178 100 178 C100 178 132 149 132 128 C132 111 117 96 100 96Z" fill="url(#grd)" opacity=".18" />
    </svg>
  )
}

export function NecklaceSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 200" fill="none" className={className}>
      <path d="M16 46 C16 16 124 16 124 46" stroke="#5A0F1A" strokeWidth="1.1" fill="none" strokeLinecap="round" />
      <circle cx="16" cy="46" r="3" fill="#5A0F1A" />
      <circle cx="124" cy="46" r="3" fill="#5A0F1A" />
      <line x1="70" y1="16" x2="70" y2="60" stroke="#5A0F1A" strokeWidth=".9" />
      <circle cx="70" cy="60" r="3.5" fill="none" stroke="#5A0F1A" strokeWidth=".9" />
      <path d="M70 68 C58 68 47 80 47 92 C47 108 70 128 70 128 C70 128 93 108 93 92 C93 80 82 68 70 68Z" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth="1.1" />
      <line x1="70" y1="71" x2="70" y2="124" stroke="rgba(255,255,255,.45)" strokeWidth=".5" />
      <line x1="49" y1="92" x2="91" y2="92" stroke="rgba(255,255,255,.45)" strokeWidth=".5" />
      <ellipse cx="60" cy="76" rx="5" ry="3.5" fill="white" opacity=".28" transform="rotate(-22 60 76)" />
    </svg>
  )
}

export function RingSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 130" fill="none" className={className}>
      <path d="M26 70 C26 38 114 38 114 70" stroke="#5A0F1A" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <circle cx="26" cy="70" r="5" fill="#5A0F1A" />
      <circle cx="114" cy="70" r="5" fill="#5A0F1A" />
      <path d="M70 38 C62 38 54 46 54 55 C54 65 70 77 70 77 C70 77 86 65 86 55 C86 46 78 38 70 38Z" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth="1.1" />
      <line x1="70" y1="41" x2="70" y2="74" stroke="rgba(255,255,255,.45)" strokeWidth=".5" />
      <line x1="56" y1="55" x2="84" y2="55" stroke="rgba(255,255,255,.45)" strokeWidth=".5" />
      <ellipse cx="62" cy="45" rx="4" ry="3" fill="white" opacity=".28" transform="rotate(-20 62 45)" />
    </svg>
  )
}

export function EarringsSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 180" fill="none" className={className}>
      <ellipse cx="50" cy="48" rx="13" ry="9" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth="1.1" />
      <ellipse cx="50" cy="48" rx="7" ry="5" fill="white" opacity=".32" />
      <line x1="50" y1="57" x2="50" y2="68" stroke="#5A0F1A" strokeWidth=".9" />
      <path d="M50 68 C46 68 42 72 42 77 C42 84 50 92 50 92 C50 92 58 84 58 77 C58 72 54 68 50 68Z" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth=".9" />
      <path d="M42 76 C38 72 34 72 33 76 C32 80 36 84 42 82 C48 80 48 76 42 76Z" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth=".6" opacity=".8" />
      <path d="M58 76 C62 72 66 72 67 76 C68 80 64 84 58 82 C52 80 52 76 58 76Z" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth=".6" opacity=".8" />
      <path d="M50 68 C54 64 54 60 50 59 C46 60 46 64 50 68Z" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth=".6" opacity=".8" />
      <circle cx="50" cy="76" r="4.5" fill="#5A0F1A" />
      <circle cx="50" cy="76" r="2.2" fill="#8FAFC1" />
      <ellipse cx="110" cy="48" rx="13" ry="9" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth="1.1" />
      <ellipse cx="110" cy="48" rx="7" ry="5" fill="white" opacity=".32" />
      <line x1="110" y1="57" x2="110" y2="68" stroke="#5A0F1A" strokeWidth=".9" />
      <path d="M110 68 C106 68 102 72 102 77 C102 84 110 92 110 92 C110 92 118 84 118 77 C118 72 114 68 110 68Z" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth=".9" />
      <path d="M102 76 C98 72 94 72 93 76 C92 80 96 84 102 82 C108 80 108 76 102 76Z" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth=".6" opacity=".8" />
      <path d="M118 76 C122 72 126 72 127 76 C128 80 124 84 118 82 C112 80 112 76 118 76Z" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth=".6" opacity=".8" />
      <path d="M110 68 C114 64 114 60 110 59 C106 60 106 64 110 68Z" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth=".6" opacity=".8" />
      <circle cx="110" cy="76" r="4.5" fill="#5A0F1A" />
      <circle cx="110" cy="76" r="2.2" fill="#8FAFC1" />
    </svg>
  )
}

export function BraceletSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" fill="none" className={className}>
      <path d="M16 60 C16 28 184 28 184 60 C184 92 164 104 100 104 C36 104 16 92 16 60Z" stroke="#5A0F1A" strokeWidth="1.4" fill="none" />
      <ellipse cx="46" cy="38" rx="7.5" ry="5.5" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth=".9" transform="rotate(-22 46 38)" />
      <ellipse cx="70" cy="30" rx="7.5" ry="5.5" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth=".9" transform="rotate(-8 70 30)" />
      <ellipse cx="100" cy="28" rx="8.5" ry="6" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth=".9" />
      <ellipse cx="130" cy="30" rx="7.5" ry="5.5" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth=".9" transform="rotate(8 130 30)" />
      <ellipse cx="154" cy="38" rx="7.5" ry="5.5" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth=".9" transform="rotate(22 154 38)" />
      <line x1="100" y1="25" x2="100" y2="34" stroke="rgba(255,255,255,.45)" strokeWidth=".5" />
    </svg>
  )
}

export function ChokerSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 150" fill="none" className={className}>
      <path d="M26 90 C26 44 174 44 174 90" stroke="#5A0F1A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="26" cy="90" r="6" fill="#5A0F1A" />
      <circle cx="174" cy="90" r="6" fill="#5A0F1A" />
      <path d="M58 65 C54 65 50 69 50 74 C50 81 58 89 58 89 C58 89 66 81 66 74 C66 69 62 65 58 65Z" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth=".9" />
      <path d="M82 55 C78 55 73 59 73 65 C73 72 82 81 82 81 C82 81 91 72 91 65 C91 59 86 55 82 55Z" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth=".9" />
      <path d="M100 51 C95 51 89 56 89 63 C89 71 100 82 100 82 C100 82 111 71 111 63 C111 56 105 51 100 51Z" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth="1.1" />
      <path d="M118 55 C114 55 109 59 109 65 C109 72 118 81 118 81 C118 81 127 72 127 65 C127 59 122 55 118 55Z" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth=".9" />
      <path d="M142 65 C138 65 134 69 134 74 C134 81 142 89 142 89 C142 89 150 81 150 74 C150 69 146 65 142 65Z" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth=".9" />
    </svg>
  )
}

export function StackRingSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 200" fill="none" className={className}>
      <ellipse cx="75" cy="80" rx="38" ry="12" stroke="#5A0F1A" strokeWidth="1.7" fill="none" />
      <rect x="37" y="80" width="76" height="10" fill="#F6F2EA" stroke="#5A0F1A" strokeWidth="1.4" />
      <ellipse cx="75" cy="90" rx="38" ry="12" stroke="#5A0F1A" strokeWidth="1.7" fill="none" />
      <ellipse cx="75" cy="105" rx="38" ry="12" stroke="#5A0F1A" strokeWidth="1.7" fill="none" />
      <rect x="37" y="105" width="76" height="10" fill="#F6F2EA" stroke="#5A0F1A" strokeWidth="1.4" />
      <ellipse cx="75" cy="115" rx="38" ry="12" stroke="#5A0F1A" strokeWidth="1.7" fill="none" />
      <ellipse cx="75" cy="130" rx="38" ry="12" stroke="#5A0F1A" strokeWidth="1.7" fill="none" />
      <rect x="37" y="130" width="76" height="10" fill="#F6F2EA" stroke="#5A0F1A" strokeWidth="1.4" />
      <ellipse cx="75" cy="140" rx="38" ry="12" stroke="#5A0F1A" strokeWidth="1.7" fill="none" />
      <path d="M75 72 C70 72 65 76 65 81 C65 88 75 96 75 96 C75 96 85 88 85 81 C85 76 80 72 75 72Z" fill="#DCE8F0" stroke="#5A0F1A" strokeWidth="1" />
      <line x1="75" y1="75" x2="75" y2="93" stroke="rgba(255,255,255,.45)" strokeWidth=".5" />
    </svg>
  )
}

export function SmallGemSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 40" fill="none" className={className}>
      <path d="M14 2 C8 2 2 8 2 15 C2 24 14 38 14 38 C14 38 26 24 26 15 C26 8 20 2 14 2Z" fill="rgba(220,232,240,0.2)" stroke="rgba(220,232,240,0.35)" strokeWidth=".8" />
      <line x1="14" y1="4" x2="14" y2="36" stroke="rgba(255,255,255,.18)" strokeWidth=".5" />
      <line x1="3" y1="15" x2="25" y2="15" stroke="rgba(255,255,255,.18)" strokeWidth=".5" />
    </svg>
  )
}
