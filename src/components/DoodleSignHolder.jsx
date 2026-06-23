/**
 * 作品总览页右上角举牌小人
 * 单手举牌（右手），自然站姿，左手自然垂下
 * viewBox 120×220，preserveAspectRatio 防变形
 */
export default function DoodleSignHolder({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 120 220"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', ...style }}
      aria-hidden="true"
    >
      {/* ── 牌子（右手举起，略微倾斜） ── */}
      <rect x="54" y="6" width="62" height="40" rx="3"
        stroke="#2C2C2C" strokeWidth="1.6" fill="#EEE9DE"/>
      {/* 牌子横纹 */}
      <line x1="62" y1="20" x2="108" y2="20" stroke="#C0B8AE" strokeWidth="0.8"/>
      <line x1="62" y1="30" x2="108" y2="30" stroke="#C0B8AE" strokeWidth="0.8"/>
      {/* 牌子文字 */}
      <text x="85" y="18" textAnchor="middle"
        fontFamily="'Ma Shan Zheng','ZCOOL KuaiLe',cursive"
        fontSize="9" fill="#2C2C2C" letterSpacing="1">作品</text>
      <text x="85" y="29" textAnchor="middle"
        fontFamily="'Ma Shan Zheng','ZCOOL KuaiLe',cursive"
        fontSize="9" fill="#2C2C2C" letterSpacing="1">在这里</text>
      {/* 牌子左下角折角 */}
      <path d="M54 40 L60 46 L54 46Z"
        stroke="#2C2C2C" strokeWidth="0.8" fill="#D8D0C4" opacity="0.5"/>
      {/* 牌子右侧向左箭头（指向页面内容） */}
      <path d="M54 26 L44 26 L48 22 M44 26 L48 30"
        stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round" fill="none"/>

      {/* ── 牌杆（右手握） ── */}
      <line x1="72" y1="46" x2="72" y2="78"
        stroke="#2C2C2C" strokeWidth="1.4" strokeLinecap="round"/>

      {/* ── 头 ── */}
      <path d="M46 96 Q48 80 62 78 Q76 76 80 90 Q84 104 70 108 Q56 110 48 100 Q44 96 46 96Z"
        stroke="#2C2C2C" strokeWidth="1.8" fill="none"/>
      {/* 头发几根 */}
      <path d="M52 82 Q54 74 60 80" stroke="#2C2C2C" strokeWidth="1.4"
        strokeLinecap="round" fill="none"/>
      <path d="M62 78 Q66 70 72 78" stroke="#2C2C2C" strokeWidth="1.4"
        strokeLinecap="round" fill="none"/>
      {/* 眼睛 */}
      <ellipse cx="58" cy="92" rx="2.5" ry="2.8" fill="#2C2C2C"/>
      <ellipse cx="71" cy="91" rx="2.3" ry="2.5" fill="#2C2C2C"/>
      <circle cx="59.2" cy="91" r="0.8" fill="#F8F5EF"/>
      <circle cx="71.8" cy="90" r="0.7" fill="#F8F5EF"/>
      {/* 嘴 — 得意 */}
      <path d="M57 101 Q63 107 73 101"
        stroke="#2C2C2C" strokeWidth="1.4" strokeLinecap="round" fill="none"/>

      {/* ── 身体 ── */}
      <line x1="64" y1="108" x2="64" y2="158"
        stroke="#2C2C2C" strokeWidth="2.2" strokeLinecap="round"/>

      {/* ── 右臂 — 高举牌杆，肘部自然弯曲 ── */}
      <path d="M66 118 Q72 100 72 80"
        stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" fill="none"/>

      {/* ── 左臂 — 自然垂下，略外摆 ── */}
      <path d="M62 118 Q50 130 46 148"
        stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* 左手 */}
      <path d="M46 148 Q42 154 44 158 Q48 160 50 155"
        stroke="#2C2C2C" strokeWidth="1.3" strokeLinecap="round" fill="none"/>

      {/* ── 左腿 ── */}
      <path d="M62 158 Q56 174 52 198"
        stroke="#2C2C2C" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      <path d="M52 198 Q44 202 38 200 Q42 196 52 198Z"
        stroke="#2C2C2C" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>

      {/* ── 右腿 — 重心脚，微叉开 ── */}
      <path d="M66 158 Q72 174 76 198"
        stroke="#2C2C2C" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      <path d="M76 198 Q84 202 90 200 Q86 196 76 198Z"
        stroke="#2C2C2C" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
    </svg>
  )
}
