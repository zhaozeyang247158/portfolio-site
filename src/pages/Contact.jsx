import profile from '../data/profile'

// ── 内联 Doodle 图标 ─────────────────────────────────────────
function IconEnvelope() {
  return (
    <svg viewBox="0 0 28 22" fill="none" className="w-6 h-5 shrink-0" aria-hidden="true">
      <rect x="1" y="1" width="26" height="20" rx="2"
        stroke="#2C2C2C" strokeWidth="1.5" fill="none"/>
      <path d="M1 3 L14 13 L27 3"
        stroke="#2C2C2C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

function IconPhone() {
  return (
    <svg viewBox="0 0 22 28" fill="none" className="w-5 h-6 shrink-0" aria-hidden="true">
      <rect x="1" y="1" width="20" height="26" rx="4"
        stroke="#2C2C2C" strokeWidth="1.5" fill="none"/>
      <circle cx="11" cy="23" r="1.5" fill="#2C2C2C"/>
      <line x1="7" y1="5" x2="15" y2="5"
        stroke="#2C2C2C" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function IconPerson() {
  return (
    <svg viewBox="0 0 22 28" fill="none" className="w-5 h-6 shrink-0" aria-hidden="true">
      <circle cx="11" cy="8" r="5" stroke="#2C2C2C" strokeWidth="1.5" fill="none"/>
      <path d="M2 26 Q2 18 11 18 Q20 18 20 26"
        stroke="#2C2C2C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

function IconDocument() {
  return (
    <svg viewBox="0 0 22 28" fill="none" className="w-5 h-6 shrink-0" aria-hidden="true">
      <path d="M2 1 L14 1 L20 7 L20 27 L2 27 Z"
        stroke="#2C2C2C" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <path d="M14 1 L14 7 L20 7"
        stroke="#2C2C2C" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <line x1="6" y1="12" x2="16" y2="12" stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="6" y1="16" x2="16" y2="16" stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="6" y1="20" x2="12" y2="20" stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}

// ── 小太阳装饰 ───────────────────────────────────────────────
function DoodleSun({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="10" stroke="#2C2C2C" strokeWidth="1.4" fill="none"/>
      <line x1="24" y1="6"  x2="24" y2="2"  stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="24" y1="42" x2="24" y2="46" stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="6"  y1="24" x2="2"  y2="24" stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="42" y1="24" x2="46" y2="24" stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="11" y1="11" x2="8"  y2="8"  stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="37" y1="11" x2="40" y2="8"  stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="11" y1="37" x2="8"  y2="40" stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="37" y1="37" x2="40" y2="40" stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}

// ── 主组件 ───────────────────────────────────────────────────
export default function Contact() {
  return (
    <div className="page-container py-16 md:py-24 max-w-2xl">

      {/* ── 页头 ── */}
      <header className="mb-14 relative">
        {/* 右上角小太阳装饰 */}
        <div className="absolute right-0 top-0 pointer-events-none">
          <DoodleSun className="w-9 opacity-15" />
        </div>

        <p className="font-mono text-[10px] text-ink-faint tracking-[0.3em] mb-5 uppercase">
          No.003 · Contact
        </p>

        <h1
          className="text-4xl md:text-5xl text-ink mb-2 leading-tight"
          style={{ fontFamily: "'Ma Shan Zheng', 'ZCOOL KuaiLe', serif", letterSpacing: '0.12em' }}
        >
          联系我
        </h1>

        {/* 手绘下划线 */}
        <svg viewBox="0 0 140 10" className="w-32 mb-5 opacity-25" fill="none">
          <path d="M2 5 Q35 2 70 5 Q105 8 138 5"
            stroke="#2C2C2C" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>

        <p className="text-sm text-ink-light leading-loose max-w-md">
          如果你对这些作品、项目经历或岗位沟通感兴趣，
          可以通过以下方式联系我。
        </p>
      </header>

      {/* ── 主联系卡片 ── */}
      <div className="card-doodle p-7 md:p-10 mb-10">
        <ul className="space-y-7">

          {/* 姓名 */}
          <ContactRow icon={<IconPerson />} label="姓名">
            <span className="text-ink text-base" style={{ fontFamily: "'Ma Shan Zheng', 'ZCOOL KuaiLe', serif", letterSpacing: '0.08em' }}>
              {profile.name}
            </span>
          </ContactRow>

          {/* 邮箱 */}
          <ContactRow icon={<IconEnvelope />} label="邮箱">
            <a
              href={`mailto:${profile.email}`}
              className="text-ink-light hover:text-ink transition-colors text-sm tracking-wide underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
          </ContactRow>

          {/* 电话 */}
          <ContactRow icon={<IconPhone />} label="电话">
            <a
              href={`tel:${profile.phone}`}
              className="text-ink-light hover:text-ink transition-colors text-sm tracking-widest hover:underline underline-offset-4"
            >
              {profile.phone}
            </a>
          </ContactRow>

        </ul>

        {/* 卡片内手写批注 */}
        <div className="mt-8 pt-6" style={{ borderTop: '1px dashed rgba(192,184,174,0.5)' }}>
          <p className="doodle-note opacity-55">
            — 回复一般在 24 小时内 :)
          </p>
        </div>
      </div>

      {/* ── 简历入口（暂时禁用，resume.pdf 补齐后恢复） ── */}
      <div className="mb-12 flex items-center gap-4">
        <div className="flex items-center gap-3 px-5 py-3 rounded border border-dashed border-ink-faint text-ink-faint cursor-not-allowed select-none"
          style={{ opacity: 0.5 }}>
          <IconDocument />
          <span className="text-sm tracking-wide">简历 PDF 整理中，如需简历请通过邮箱联系</span>
        </div>
      </div>

      {/* ── 辅助说明 ── */}
      <div
        className="p-5 md:p-6 mb-10"
        style={{ border: '1px dashed rgba(192,184,174,0.55)' }}
      >
        <p className="text-sm text-ink-light leading-[2] tracking-wide">
          目前主要展示个人项目、AI 编程实践和阶段性作品，后续会持续补充更多内容。
        </p>
        <p className="doodle-note mt-3 opacity-50">
          // 更多作品请见作品集页面
        </p>
      </div>

      {/* ── 底部装饰线 ── */}
      <div className="flex items-center gap-3 opacity-30 mt-6">
        <span className="flex-1 border-t border-dashed" style={{ borderColor: '#C0B8AE' }}/>
        <DoodleSun className="w-5" />
        <span className="flex-1 border-t border-dashed" style={{ borderColor: '#C0B8AE' }}/>
      </div>

    </div>
  )
}

// ── 联系行组件 ───────────────────────────────────────────────
function ContactRow({ icon, label, children }) {
  return (
    <li className="flex items-start gap-5">
      {/* 图标区 */}
      <div className="flex flex-col items-center gap-1 pt-0.5 w-7 shrink-0">
        <div className="text-ink-faint">{icon}</div>
      </div>
      {/* 内容区 */}
      <div className="flex-1">
        <p className="font-mono text-[10px] text-ink-faint tracking-[0.25em] uppercase mb-1.5">
          {label}
        </p>
        {children}
      </div>
    </li>
  )
}
