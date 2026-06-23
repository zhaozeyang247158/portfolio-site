/**
 * Landing 页右下角：拿教鞭讲解员
 * 特点：线条略带手绘不规则感，有笔触粗细变化，配手写气泡注释
 */
export default function DoodleTeacher({ className = '' }) {
  return (
    <svg
      viewBox="0 0 180 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ── 手写注释气泡 ── */}
      {/* 气泡框 */}
      <rect x="2" y="4" width="72" height="28" rx="3"
        stroke="#2C2C2C" strokeWidth="1.2" fill="#F5F0E8" opacity="0.92"/>
      {/* 气泡尾巴 */}
      <path d="M55 32 L62 44 L48 34" stroke="#2C2C2C" strokeWidth="1.2"
        fill="#F5F0E8" strokeLinejoin="round"/>
      {/* 注释文字 */}
      <text x="10" y="16" fontFamily="'Ma Shan Zheng','ZCOOL KuaiLe',cursive"
        fontSize="9" fill="#2C2C2C" letterSpacing="1">点这里</text>
      <text x="10" y="27" fontFamily="'Ma Shan Zheng','ZCOOL KuaiLe',cursive"
        fontSize="9" fill="#6B6560" letterSpacing="1">进入作品集</text>

      {/* ── 教鞭 —— 指向左上，略弯 ── */}
      <path d="M72 98 Q50 70 20 30" stroke="#2C2C2C" strokeWidth="1.8"
        strokeLinecap="round" fill="none"/>
      {/* 鞭尖小点 */}
      <circle cx="20" cy="30" r="2.5" fill="#2C2C2C"/>
      {/* 手握处细横线 */}
      <line x1="70" y1="100" x2="77" y2="94" stroke="#2C2C2C" strokeWidth="2.5"
        strokeLinecap="round"/>

      {/* ── 头 ── */}
      {/* 头圆（略不规则，用 path 而不是完美 circle） */}
      <path d="M132 20 Q155 18 158 42 Q160 62 140 68 Q120 72 114 52 Q108 32 132 20Z"
        stroke="#2C2C2C" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      {/* 头发几根 */}
      <path d="M128 22 Q130 14 134 20" stroke="#2C2C2C" strokeWidth="1.5"
        strokeLinecap="round" fill="none"/>
      <path d="M136 19 Q140 11 143 19" stroke="#2C2C2C" strokeWidth="1.5"
        strokeLinecap="round" fill="none"/>
      {/* 眼睛 — 左眼稍大，微微不对称 */}
      <ellipse cx="128" cy="46" rx="3" ry="3.5" fill="#2C2C2C"/>
      <ellipse cx="146" cy="45" rx="2.8" ry="3" fill="#2C2C2C"/>
      {/* 高光 */}
      <circle cx="129.5" cy="44.5" r="0.9" fill="#F5F0E8"/>
      <circle cx="147.2" cy="43.8" r="0.8" fill="#F5F0E8"/>
      {/* 嘴 — 扬起一侧，带点狡黠 */}
      <path d="M126 57 Q135 64 148 56" stroke="#2C2C2C" strokeWidth="1.6"
        strokeLinecap="round" fill="none"/>
      {/* 右脸颊腮红（两个小圈） */}
      <circle cx="151" cy="53" r="4" stroke="#2C2C2C" strokeWidth="0.6"
        fill="none" opacity="0.3"/>

      {/* ── 脖子 ── */}
      <line x1="137" y1="68" x2="137" y2="78" stroke="#2C2C2C" strokeWidth="2"
        strokeLinecap="round"/>

      {/* ── 身体（略鼓） ── */}
      <path d="M137 78 Q130 100 134 148 Q136 155 137 155 Q138 155 140 148 Q144 100 137 78Z"
        stroke="#2C2C2C" strokeWidth="2" fill="none" strokeLinejoin="round"/>

      {/* ── 左臂 — 举高握教鞭，肘部弯曲 ── */}
      <path d="M134 90 Q110 88 77 98" stroke="#2C2C2C" strokeWidth="2.2"
        strokeLinecap="round" fill="none"/>
      {/* 手掌小圆 */}
      <circle cx="77" cy="98" r="3.5" stroke="#2C2C2C" strokeWidth="1.5" fill="none"/>

      {/* ── 右臂 — 插兜式，自然下垂微外摆 ── */}
      <path d="M140 90 Q158 105 162 128" stroke="#2C2C2C" strokeWidth="2.2"
        strokeLinecap="round" fill="none"/>
      {/* 手 */}
      <path d="M162 128 Q165 133 160 136 Q156 138 155 133" stroke="#2C2C2C"
        strokeWidth="1.4" strokeLinecap="round" fill="none"/>

      {/* ── 左腿 ── */}
      <path d="M135 155 Q128 178 122 208" stroke="#2C2C2C" strokeWidth="2.2"
        strokeLinecap="round" fill="none"/>
      {/* 左脚 */}
      <path d="M122 208 Q112 212 106 210 Q110 206 122 208Z" stroke="#2C2C2C"
        strokeWidth="1.5" fill="none" strokeLinejoin="round"/>

      {/* ── 右腿 ── */}
      <path d="M139 155 Q146 178 152 208" stroke="#2C2C2C" strokeWidth="2.2"
        strokeLinecap="round" fill="none"/>
      {/* 右脚 */}
      <path d="M152 208 Q162 212 168 210 Q164 206 152 208Z" stroke="#2C2C2C"
        strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    </svg>
  )
}
