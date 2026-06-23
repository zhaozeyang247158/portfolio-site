/**
 * 页边角小动物 Doodle 组件集合
 * 全部为极简黑白简笔画，用于详情页边角装饰
 * 每个组件接受 className / style 控制尺寸和位置
 */

// ── 小猫：蹲坐，侧脸，看向内容方向 ─────────────────────────
export function DoodleCatSitting({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 80 90"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', ...style }}
      aria-hidden="true"
    >
      {/* 尾巴（先画，在身体后面） */}
      <path d="M24 72 Q10 68 8 56 Q6 44 18 48"
        stroke="#2C2C2C" strokeWidth="1.6" strokeLinecap="round" fill="none"/>

      {/* 身体 */}
      <path d="M18 50 Q16 62 18 74 Q22 82 38 82 Q54 82 56 72 Q58 60 54 50 Q50 42 36 40 Q22 38 18 50Z"
        stroke="#2C2C2C" strokeWidth="1.6" fill="none"/>

      {/* 头 */}
      <path d="M24 28 Q24 14 38 12 Q52 10 56 24 Q60 36 48 42 Q36 46 26 40 Q22 36 24 28Z"
        stroke="#2C2C2C" strokeWidth="1.6" fill="none"/>

      {/* 左耳 */}
      <path d="M26 20 L22 8 L32 16Z"
        stroke="#2C2C2C" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
      {/* 右耳 */}
      <path d="M48 18 L52 6 L58 16Z"
        stroke="#2C2C2C" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>

      {/* 眼睛（看向左边，即内容方向） */}
      <ellipse cx="33" cy="26" rx="2.8" ry="3" fill="#2C2C2C"/>
      <ellipse cx="45" cy="25" rx="2.5" ry="2.8" fill="#2C2C2C"/>
      <circle cx="34" cy="25" r="0.9" fill="#F8F5EF"/>
      <circle cx="46" cy="24" r="0.8" fill="#F8F5EF"/>

      {/* 鼻子 */}
      <path d="M37 32 L40 35 L43 32 Q40 30 37 32Z"
        stroke="#2C2C2C" strokeWidth="1" fill="#2C2C2C" opacity="0.7"/>

      {/* 胡须 */}
      <line x1="28" y1="33" x2="14" y2="30" stroke="#2C2C2C" strokeWidth="0.9" strokeLinecap="round" opacity="0.6"/>
      <line x1="28" y1="36" x2="13" y2="36" stroke="#2C2C2C" strokeWidth="0.9" strokeLinecap="round" opacity="0.6"/>
      <line x1="52" y1="33" x2="66" y2="30" stroke="#2C2C2C" strokeWidth="0.9" strokeLinecap="round" opacity="0.6"/>
      <line x1="52" y1="36" x2="67" y2="36" stroke="#2C2C2C" strokeWidth="0.9" strokeLinecap="round" opacity="0.6"/>

      {/* 前爪 */}
      <path d="M24 74 Q20 80 22 84 Q26 86 28 82"
        stroke="#2C2C2C" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      <path d="M42 76 Q40 82 42 86 Q46 87 48 83"
        stroke="#2C2C2C" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

// ── 小狗：趴着，脑袋抬起来，样子乖乖的 ─────────────────────
export function DoodleDogLying({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 110 70"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', ...style }}
      aria-hidden="true"
    >
      {/* 身体（横趴） */}
      <path d="M30 30 Q28 42 30 54 Q36 62 60 62 Q84 62 88 52 Q92 42 88 32 Q82 22 60 22 Q38 22 30 30Z"
        stroke="#2C2C2C" strokeWidth="1.6" fill="none"/>

      {/* 尾巴（翘起来） */}
      <path d="M86 38 Q98 28 102 18 Q104 12 98 14"
        stroke="#2C2C2C" strokeWidth="1.6" strokeLinecap="round" fill="none"/>

      {/* 头（抬起，偏左） */}
      <path d="M10 18 Q8 6 22 4 Q36 2 40 14 Q44 24 34 30 Q24 34 14 28 Q8 24 10 18Z"
        stroke="#2C2C2C" strokeWidth="1.6" fill="none"/>

      {/* 耳朵（垂耳） */}
      <path d="M10 14 Q4 20 6 32 Q8 40 14 36"
        stroke="#2C2C2C" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      <path d="M34 8 Q40 14 38 26 Q36 34 30 30"
        stroke="#2C2C2C" strokeWidth="1.4" strokeLinecap="round" fill="none"/>

      {/* 眼睛 */}
      <ellipse cx="17" cy="17" rx="2.5" ry="2.8" fill="#2C2C2C"/>
      <ellipse cx="28" cy="16" rx="2.3" ry="2.5" fill="#2C2C2C"/>
      <circle cx="18" cy="16" r="0.8" fill="#F8F5EF"/>
      <circle cx="29" cy="15" r="0.7" fill="#F8F5EF"/>

      {/* 鼻子 */}
      <ellipse cx="22" cy="24" rx="3" ry="2" fill="#2C2C2C" opacity="0.75"/>

      {/* 嘴 */}
      <path d="M19 26 Q22 30 25 26" stroke="#2C2C2C" strokeWidth="1.2"
        strokeLinecap="round" fill="none"/>

      {/* 前爪 */}
      <path d="M36 52 Q32 58 34 64 Q38 66 42 62"
        stroke="#2C2C2C" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      <path d="M52 54 Q50 60 52 64 Q56 66 60 62"
        stroke="#2C2C2C" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

// ── 小猫：从角落探头，好奇地看 ──────────────────────────────
export function DoodleCatPeeking({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 60 70"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', ...style }}
      aria-hidden="true"
    >
      {/* 只露出上半身，从左边框外探进来 */}
      {/* 身体（被截断在左侧） */}
      <path d="M-8 60 Q-6 48 4 44 Q14 40 24 46 Q34 52 32 62 Q30 70 16 70"
        stroke="#2C2C2C" strokeWidth="1.6" fill="none"/>

      {/* 头 */}
      <path d="M6 28 Q4 14 18 10 Q32 6 38 18 Q44 30 34 38 Q24 44 12 38 Q4 34 6 28Z"
        stroke="#2C2C2C" strokeWidth="1.6" fill="none"/>

      {/* 左耳 */}
      <path d="M8 20 L4 8 L14 16Z"
        stroke="#2C2C2C" strokeWidth="1.3" fill="none" strokeLinejoin="round"/>
      {/* 右耳 */}
      <path d="M28 16 L32 4 L38 14Z"
        stroke="#2C2C2C" strokeWidth="1.3" fill="none" strokeLinejoin="round"/>

      {/* 眼睛（看向右边，好奇） */}
      <ellipse cx="16" cy="24" rx="3" ry="3.2" fill="#2C2C2C"/>
      <ellipse cx="28" cy="23" rx="2.8" ry="3" fill="#2C2C2C"/>
      <circle cx="17.2" cy="23" r="1" fill="#F8F5EF"/>
      <circle cx="29" cy="22" r="0.9" fill="#F8F5EF"/>

      {/* 鼻子 */}
      <path d="M19 30 L22 33 L25 30 Q22 28 19 30Z"
        stroke="#2C2C2C" strokeWidth="1" fill="#2C2C2C" opacity="0.7"/>

      {/* 胡须 */}
      <line x1="14" y1="32" x2="2" y2="29" stroke="#2C2C2C" strokeWidth="0.9" strokeLinecap="round" opacity="0.55"/>
      <line x1="14" y1="35" x2="2" y2="35" stroke="#2C2C2C" strokeWidth="0.9" strokeLinecap="round" opacity="0.55"/>
      <line x1="30" y1="32" x2="44" y2="29" stroke="#2C2C2C" strokeWidth="0.9" strokeLinecap="round" opacity="0.55"/>
      <line x1="30" y1="35" x2="44" y2="35" stroke="#2C2C2C" strokeWidth="0.9" strokeLinecap="round" opacity="0.55"/>
    </svg>
  )
}

// ── 小狗：叼着一张纸条，纸条上有手写字 ─────────────────────
export function DoodleDogWithNote({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 100 80"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', ...style }}
      aria-hidden="true"
    >
      {/* 纸条（叼在嘴里，略倾斜） */}
      <rect x="52" y="30" width="44" height="22" rx="2"
        stroke="#2C2C2C" strokeWidth="1.3" fill="#EEE9DE"
        transform="rotate(-8 52 30)"/>
      <line x1="58" y1="37" x2="90" y2="34" stroke="#C0B8AE" strokeWidth="0.7"
        transform="rotate(-8 52 30)"/>
      <line x1="58" y1="43" x2="86" y2="40" stroke="#C0B8AE" strokeWidth="0.7"
        transform="rotate(-8 52 30)"/>
      <text x="60" y="39" fontFamily="'Ma Shan Zheng',cursive"
        fontSize="6.5" fill="#6B6560" transform="rotate(-8 52 30)">慢慢看</text>

      {/* 身体（坐姿，偏左） */}
      <path d="M12 38 Q10 50 14 62 Q18 68 32 68 Q46 68 48 60 Q50 50 46 40 Q42 32 28 30 Q14 28 12 38Z"
        stroke="#2C2C2C" strokeWidth="1.6" fill="none"/>

      {/* 尾巴 */}
      <path d="M46 52 Q56 44 58 34" stroke="#2C2C2C" strokeWidth="1.5"
        strokeLinecap="round" fill="none"/>

      {/* 头 */}
      <path d="M14 22 Q12 10 24 6 Q36 2 42 12 Q48 22 40 30 Q32 36 20 32 Q12 28 14 22Z"
        stroke="#2C2C2C" strokeWidth="1.6" fill="none"/>

      {/* 耳朵 */}
      <path d="M14 18 Q8 24 10 36 Q12 42 18 38"
        stroke="#2C2C2C" strokeWidth="1.4" strokeLinecap="round" fill="none"/>

      {/* 眼睛 */}
      <ellipse cx="22" cy="19" rx="2.5" ry="2.8" fill="#2C2C2C"/>
      <ellipse cx="33" cy="18" rx="2.3" ry="2.5" fill="#2C2C2C"/>
      <circle cx="23" cy="18" r="0.8" fill="#F8F5EF"/>
      <circle cx="34" cy="17" r="0.7" fill="#F8F5EF"/>

      {/* 嘴（叼着纸条，微张） */}
      <path d="M23 28 Q28 32 38 28" stroke="#2C2C2C" strokeWidth="1.3"
        strokeLinecap="round" fill="none"/>

      {/* 前爪 */}
      <path d="M18 60 Q14 66 16 70 Q20 72 24 68"
        stroke="#2C2C2C" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    </svg>
  )
}
