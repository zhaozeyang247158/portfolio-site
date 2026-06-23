import DoodleLounging from '../components/DoodleLounging'

const directions = [
  { label: 'AI 编程' },
  { label: '数据分析' },
  { label: '项目实践' },
  { label: '作品表达' },
]

export default function About() {
  return (
    <div className="page-container py-16 md:py-24 max-w-3xl">

      {/* ── 页头 ── */}
      <header className="mb-14">
        <p className="font-mono text-[10px] text-ink-faint tracking-[0.3em] mb-5 uppercase">
          No.003 · About
        </p>
        <h1
          className="text-4xl md:text-5xl text-ink mb-2 leading-tight"
          style={{ fontFamily: "'Ma Shan Zheng', 'ZCOOL KuaiLe', serif", letterSpacing: '0.12em' }}
        >
          关于我
        </h1>
        <svg viewBox="0 0 120 10" className="w-28 mb-0 opacity-30" fill="none">
          <path d="M2 5 Q30 2 60 5 Q90 8 118 5"
            stroke="#2C2C2C" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      </header>

      {/* ── 躺平小人（手绘幽默感）── 固定尺寸容器，防止 flex 拉伸 ── */}
      <div className="mb-10" style={{ width: '260px', height: 'auto' }}>
        <DoodleLounging
          className="opacity-80"
          style={{ width: '260px', height: 'auto', display: 'block' }}
        />
      </div>

      {/* ── 基本信息卡片 ── */}
      <div className="card-doodle p-7 md:p-10 mb-12 bg-paper-dark/15">
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoRow label="姓名" value="赵泽阳"/>
          <InfoRow label="学校" value="中国农业大学"/>
          <InfoRow label="届别" value="2027届毕业生"/>
          <InfoRow label="状态" value="在校"/>
        </dl>
        {/* 右下角手写批注 */}
        <p className="mt-6 doodle-note opacity-50 text-right">
          ← 欢迎来找我聊聊 :)
        </p>
      </div>

      {/* ── 关注方向 ── */}
      <section className="mb-14">
        <SectionTitle number="01" title="关注方向"/>
        <div className="flex flex-wrap gap-3 mt-6">
          {directions.map((d, i) => (
            <span
              key={d.label}
              className="border border-ink-faint/50 px-4 py-2 text-sm text-ink-light tracking-wider"
              style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.4}deg)` }}
            >
              {d.label}
            </span>
          ))}
        </div>
      </section>

      {/* ── 简短介绍 ── */}
      <section className="mb-14">
        <SectionTitle number="02" title="简短介绍"/>
        <p className="text-sm text-ink-light leading-[2.2] tracking-wide mt-6">
          我希望通过 AI 工具和结构化方法，将想法快速转化为
          可展示、可复盘、可迭代的项目作品。
        </p>
        {/* 手写补充注释 */}
        <p className="doodle-note mt-3 ml-1 opacity-60">
          // 正在努力把想法变成看得见的东西
        </p>
      </section>

      {/* ── 底部时间戳 ── */}
      <div className="border-t border-dashed pt-8 flex items-center justify-between"
        style={{ borderColor: '#C8C0B4' }}>
        <span className="font-mono text-[10px] text-ink-faint tracking-widest">
          Last updated · 2026
        </span>
        <span className="doodle-note opacity-40">持续施工中…</span>
      </div>
    </div>
  )
}

function InfoRow({ label, value }) {
  return (
    <div>
      <dt className="font-mono text-[10px] text-ink-faint tracking-widest mb-1.5 uppercase">{label}</dt>
      <dd
        className="text-base text-ink"
        style={{ fontFamily: "'Ma Shan Zheng', 'ZCOOL KuaiLe', 'Noto Serif SC', serif", letterSpacing: '0.06em' }}
      >
        {value}
      </dd>
    </div>
  )
}

function SectionTitle({ number, title }) {
  return (
    <h2 className="flex items-end gap-2">
      <span className="text-3xl text-ink-faint/25 font-mono leading-none select-none">
        {number}
      </span>
      <span
        className="text-base text-ink pb-0.5 border-b border-dashed"
        style={{
          fontFamily: "'Ma Shan Zheng', 'ZCOOL KuaiLe', serif",
          letterSpacing: '0.1em',
          borderColor: '#C8C0B4',
        }}
      >
        {title}
      </span>
    </h2>
  )
}
