/**
 * 作品总览页：举牌小人（站在页面一角，举着写有"作品在这里"的牌子）
 * 动作：微侧身，双手举牌，略带得意感
 */
export default function DoodleSignHolder({ className = '' }) {
  return (
    <svg
      viewBox="0 0 140 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ── 牌子 ── */}
      <rect x="28" y="8" width="84" height="44" rx="3"
        stroke="#2C2C2C" strokeWidth="1.8" fill="#EDE8DC"/>
      {/* 牌子内纹线 */}
      <line x1="36" y1="22" x2="104" y2="22" stroke="#B0A898" strokeWidth="0.8"/>
      <line x1="36" y1="32" x2="104" y2="32" stroke="#B0A898" strokeWidth="0.8"/>
      {/* 牌子文字 */}
      <text x="70" y="20" textAnchor="middle"
        fontFamily="'Ma Shan Zheng','ZCOOL KuaiLe',cursive"
        fontSize="10" fill="#2C2C2C" letterSpacing="2">作品</text>
      <text x="70" y="34" textAnchor="middle"
        fontFamily="'Ma Shan Zheng','ZCOOL KuaiLe',cursive"
        fontSize="10" fill="#2C2C2C" letterSpacing="2">在这里</text>
      {/* 牌子小角装饰 */}
      <line x1="28" y1="8" x2="34" y2="14" stroke="#2C2C2C" strokeWidth="1" opacity="0.4"/>
      <line x1="112" y1="8" x2="106" y2="14" stroke="#2C2C2C" strokeWidth="1" opacity="0.4"/>
      {/* 牌子指向箭头 */}
      <path d="M112 30 Q122 30 126 38 L120 36 M126 38 L121 42"
        stroke="#2C2C2C" strokeWidth="1.4" strokeLinecap="round" fill="none"/>

      {/* ── 牌杆 ── */}
      <line x1="48" y1="52" x2="58" y2="96" stroke="#2C2C2C" strokeWidth="1.5"
        strokeLinecap="round"/>
      <line x1="92" y1="52" x2="82" y2="96" stroke="#2C2C2C" strokeWidth="1.5"
        strokeLinecap="round"/>

      {/* ── 头 ── */}
      <path d="M70 68 Q88 64 92 82 Q94 98 76 102 Q58 104 56 88 Q54 72 70 68Z"
        stroke="#2C2C2C" strokeWidth="1.8" fill="none"/>
      {/* 头发 */}
      <path d="M62 70 Q64 62 70 68" stroke="#2C2C2C" strokeWidth="1.5"
        strokeLinecap="round" fill="none"/>
      <path d="M70 66 Q74 58 80 66" stroke="#2C2C2C" strokeWidth="1.5"
        strokeLinecap="round" fill="none"/>
      {/* 眼睛 */}
      <ellipse cx="66" cy="84" rx="2.8" ry="3" fill="#2C2C2C"/>
      <ellipse cx="80" cy="83" rx="2.5" ry="2.8" fill="#2C2C2C"/>
      <circle cx="67" cy="83" r="0.8" fill="#EDE8DC"/>
      <circle cx="80.8" cy="82" r="0.7" fill="#EDE8DC"/>
      {/* 嘴 — 得意微笑 */}
      <path d="M64 93 Q71 99 82 93" stroke="#2C2C2C" strokeWidth="1.5"
        strokeLinecap="round" fill="none"/>

      {/* ── 身体 ── */}
      <line x1="74" y1="102" x2="74" y2="154" stroke="#2C2C2C" strokeWidth="2.2"
        strokeLinecap="round"/>

      {/* ── 左臂 — 高举左侧牌杆 ── */}
      <path d="M72 112 Q60 104 52 96" stroke="#2C2C2C" strokeWidth="2"
        strokeLinecap="round" fill="none"/>

      {/* ── 右臂 — 高举右侧牌杆 ── */}
      <path d="M76 112 Q86 104 82 96" stroke="#2C2C2C" strokeWidth="2"
        strokeLinecap="round" fill="none"/>

      {/* ── 左腿 ── */}
      <path d="M72 154 Q65 172 60 196" stroke="#2C2C2C" strokeWidth="2.2"
        strokeLinecap="round" fill="none"/>
      <path d="M60 196 Q52 200 46 198 Q50 194 60 196Z" stroke="#2C2C2C"
        strokeWidth="1.5" fill="none" strokeLinejoin="round"/>

      {/* ── 右腿 ── */}
      <path d="M76 154 Q83 172 88 196" stroke="#2C2C2C" strokeWidth="2.2"
        strokeLinecap="round" fill="none"/>
      <path d="M88 196 Q96 200 102 198 Q98 194 88 196Z" stroke="#2C2C2C"
        strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    </svg>
  )
}
