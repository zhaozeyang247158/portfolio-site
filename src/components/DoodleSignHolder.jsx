/**
 * 作品总览页右上角举牌小人
 * 构图：小人站左侧，牌子在右侧，右手斜举牌杆
 * 左人右牌，互不遮挡，站姿松弛
 * viewBox 160×200，preserveAspectRatio 防变形
 */
export default function DoodleSignHolder({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 160 200"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', ...style }}
      aria-hidden="true"
    >
      {/* ══ 牌子（右侧，略微倾斜 2°）══ */}
      <rect x="82" y="14" width="68" height="44" rx="3"
        stroke="#2C2C2C" strokeWidth="1.5" fill="#EEE9DE"
        transform="rotate(2 82 14)"/>
      {/* 牌子内横纹 */}
      <line x1="90" y1="30" x2="144" y2="31"
        stroke="#C0B8AE" strokeWidth="0.8"
        transform="rotate(2 82 14)"/>
      <line x1="90" y1="41" x2="144" y2="42"
        stroke="#C0B8AE" strokeWidth="0.8"
        transform="rotate(2 82 14)"/>
      {/* 牌子文字 */}
      <text x="116" y="30" textAnchor="middle"
        fontFamily="'Ma Shan Zheng','ZCOOL KuaiLe',cursive"
        fontSize="10" fill="#2C2C2C" letterSpacing="1"
        transform="rotate(2 116 30)">作品</text>
      <text x="116" y="42" textAnchor="middle"
        fontFamily="'Ma Shan Zheng','ZCOOL KuaiLe',cursive"
        fontSize="10" fill="#2C2C2C" letterSpacing="1"
        transform="rotate(2 116 42)">在这里</text>
      {/* 牌子左侧向左箭头，指向内容区 */}
      <path d="M80 34 L68 34 L72 30 M68 34 L72 38"
        stroke="#2C2C2C" strokeWidth="1.3" strokeLinecap="round" fill="none"/>

      {/* ══ 牌杆：从牌子底部到右手握点 ══ */}
      {/* 杆子从牌子底部中心（约 x=114 y=58）向左下延伸到手握点（x=84 y=90） */}
      <line x1="112" y1="58" x2="84" y2="92"
        stroke="#2C2C2C" strokeWidth="1.5" strokeLinecap="round"/>

      {/* ══ 头（中心 x=44, y=76，半径约 18）══ */}
      {/* 略不规则，用 path 模拟手绘圆 */}
      <path d="M28 74 Q30 56 44 54 Q58 52 62 68 Q66 82 54 88 Q42 94 30 86 Q24 80 28 74Z"
        stroke="#2C2C2C" strokeWidth="1.8" fill="none"/>
      {/* 头发 */}
      <path d="M32 62 Q34 54 40 58" stroke="#2C2C2C" strokeWidth="1.4"
        strokeLinecap="round" fill="none"/>
      <path d="M42 54 Q46 46 52 54" stroke="#2C2C2C" strokeWidth="1.4"
        strokeLinecap="round" fill="none"/>
      {/* 眼睛（看向右边，即牌子方向） */}
      <ellipse cx="40" cy="72" rx="2.8" ry="3" fill="#2C2C2C"/>
      <ellipse cx="53" cy="71" rx="2.5" ry="2.8" fill="#2C2C2C"/>
      <circle cx="41.5" cy="71" r="0.9" fill="#EEE9DE"/>
      <circle cx="54.2" cy="70" r="0.8" fill="#EEE9DE"/>
      {/* 嘴——轻松微笑 */}
      <path d="M38 82 Q44 88 54 83"
        stroke="#2C2C2C" strokeWidth="1.4" strokeLinecap="round" fill="none"/>

      {/* ══ 身体（中心 x=44）══ */}
      <line x1="44" y1="88" x2="44" y2="142"
        stroke="#2C2C2C" strokeWidth="2.2" strokeLinecap="round"/>

      {/* ══ 右臂：从肩部斜向右上，握住牌杆 ══ */}
      {/* 肩点约 (48, 102)，肘部弯向右上 (66, 88)，手握杆底 (84, 92) */}
      <path d="M48 102 Q66 88 84 92"
        stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" fill="none"/>

      {/* ══ 左臂：自然垂下，略往左外摆 ══ */}
      {/* 肩点约 (40, 102)，自然弯向 (28, 118)，手到 (24, 132) */}
      <path d="M40 102 Q28 118 24 132"
        stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* 左手（简单小勾） */}
      <path d="M24 132 Q20 138 22 142 Q26 144 28 140"
        stroke="#2C2C2C" strokeWidth="1.3" strokeLinecap="round" fill="none"/>

      {/* ══ 左腿：重心腿，略往前 ══ */}
      <path d="M42 142 Q36 160 32 184"
        stroke="#2C2C2C" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      {/* 左脚 */}
      <path d="M32 184 Q24 188 18 186 Q22 182 32 184Z"
        stroke="#2C2C2C" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>

      {/* ══ 右腿：轻松后撤半步 ══ */}
      <path d="M46 142 Q52 160 56 184"
        stroke="#2C2C2C" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      {/* 右脚 */}
      <path d="M56 184 Q64 188 70 186 Q66 182 56 184Z"
        stroke="#2C2C2C" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
    </svg>
  )
}
