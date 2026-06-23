/**
 * 关于我页：躺平小人（躺在一条线上，单手支头，另一手举着小旗或手机）
 * 幽默克制，不幼稚
 */
export default function DoodleLounging({ className = '' }) {
  return (
    <svg
      viewBox="0 0 220 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ── 地面线 ── */}
      <line x1="10" y1="78" x2="210" y2="78" stroke="#B0A898" strokeWidth="1.2"
        strokeLinecap="round" strokeDasharray="4 3"/>

      {/* ── 身体（横躺，略弯） ── */}
      <path d="M50 72 Q90 68 130 70 Q150 71 160 74"
        stroke="#2C2C2C" strokeWidth="2.2" strokeLinecap="round" fill="none"/>

      {/* ── 头 ── */}
      <path d="M40 52 Q58 48 62 62 Q64 74 50 76 Q36 76 34 64 Q32 52 40 52Z"
        stroke="#2C2C2C" strokeWidth="1.8" fill="none"/>
      {/* 头发 */}
      <path d="M38 54 Q40 46 46 52" stroke="#2C2C2C" strokeWidth="1.5"
        strokeLinecap="round" fill="none"/>
      <path d="M46 50 Q52 44 56 52" stroke="#2C2C2C" strokeWidth="1.5"
        strokeLinecap="round" fill="none"/>
      {/* 眼睛 — 闭着一只，另一只半闭，懒洋洋 */}
      <path d="M40 62 Q43 60 46 62" stroke="#2C2C2C" strokeWidth="1.5"
        strokeLinecap="round" fill="none"/>
      <path d="M50 61 Q53 59 56 61" stroke="#2C2C2C" strokeWidth="1.5"
        strokeLinecap="round" fill="none"/>
      {/* 嘴 — 放松微张 */}
      <path d="M42 70 Q48 74 54 70" stroke="#2C2C2C" strokeWidth="1.4"
        strokeLinecap="round" fill="none"/>

      {/* ── 左臂 — 撑头 ── */}
      <path d="M50 74 Q46 70 40 65 Q38 62 48 60"
        stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" fill="none"/>

      {/* ── 右臂 — 举着小旗 ── */}
      <path d="M120 68 Q128 56 138 44" stroke="#2C2C2C" strokeWidth="2"
        strokeLinecap="round" fill="none"/>
      {/* 旗杆 */}
      <line x1="138" y1="44" x2="138" y2="22" stroke="#2C2C2C" strokeWidth="1.5"
        strokeLinecap="round"/>
      {/* 旗子 */}
      <path d="M138 22 L160 28 L138 34Z" stroke="#2C2C2C" strokeWidth="1.3"
        fill="#EDE8DC" strokeLinejoin="round"/>
      {/* 旗子上的字 */}
      <text x="143" y="31" fontFamily="'Ma Shan Zheng',cursive"
        fontSize="6.5" fill="#2C2C2C">在校</text>

      {/* ── 腿（交叠） ── */}
      <path d="M155 72 Q162 68 170 72" stroke="#2C2C2C" strokeWidth="2.2"
        strokeLinecap="round" fill="none"/>
      <path d="M158 74 Q165 72 172 76" stroke="#2C2C2C" strokeWidth="2.2"
        strokeLinecap="round" fill="none"/>
      {/* 脚 */}
      <path d="M170 72 Q178 70 182 74 Q180 78 172 76Z" stroke="#2C2C2C"
        strokeWidth="1.4" fill="none" strokeLinejoin="round"/>

      {/* ── 手写旁注 ── */}
      <text x="12" y="55" fontFamily="'Ma Shan Zheng','ZCOOL KuaiLe',cursive"
        fontSize="9" fill="#8B7355" transform="rotate(-3,12,55)">躺着思考中…</text>
    </svg>
  )
}
