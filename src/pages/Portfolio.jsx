import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import DoodleSignHolder from '../components/DoodleSignHolder'

// 极简 Doodle 装饰：小太阳
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

// 极简 Doodle 装饰：小云朵
function DoodleCloud({ className = '' }) {
  return (
    <svg viewBox="0 0 72 36" fill="none" className={className} aria-hidden="true">
      <path d="M14 26 Q14 14 26 14 Q28 6 38 8 Q46 4 52 12 Q62 10 64 20 Q68 20 68 26 Q68 32 60 32 L18 32 Q10 32 14 26Z"
        stroke="#2C2C2C" strokeWidth="1.3" fill="none" strokeLinejoin="round"/>
    </svg>
  )
}

// 极简 Doodle 装饰：虚线箭头
function DoodleArrow({ className = '' }) {
  return (
    <svg viewBox="0 0 50 20" fill="none" className={className} aria-hidden="true">
      <path d="M2 10 Q16 8 34 10"
        stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 2"/>
      <path d="M30 5 L38 10 L30 15"
        stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

export default function Portfolio() {
  return (
    <div className="page-container py-16 md:py-24">

      {/* ── 页头区域 ── */}
      <header className="mb-16 relative">

        {/* 右侧举牌小人 — 固定尺寸防变形 */}
        <div
          className="absolute right-0 top-0 pointer-events-none hidden md:block"
          style={{ width: '112px', height: 'auto' }}
        >
          <DoodleSignHolder
            className="opacity-75"
            style={{ width: '112px', height: 'auto', display: 'block' }}
          />
        </div>

        {/* 左上角小太阳 — 作品列表入口装饰 */}
        <div className="absolute right-0 bottom-0 pointer-events-none hidden md:block">
          <DoodleSun className="w-7 opacity-20" />
        </div>

        <p className="font-mono text-[10px] text-ink-faint tracking-[0.3em] mb-5 uppercase">
          No.002 · Works
        </p>

        {/* 手写感大标题 */}
        <h1
          className="text-4xl md:text-5xl text-ink mb-2 leading-tight"
          style={{ fontFamily: "'Ma Shan Zheng', 'ZCOOL KuaiLe', serif", letterSpacing: '0.12em' }}
        >
          作品集
        </h1>

        {/* 标题下手绘下划线 */}
        <svg viewBox="0 0 160 10" className="w-36 mb-5 opacity-25" fill="none">
          <path d="M2 5 Q40 2 80 5 Q120 8 158 5"
            stroke="#2C2C2C" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>

        <p className="text-sm text-ink-light leading-loose max-w-lg">
          这里将展示我的项目作品、AI 编程实践与阶段性成果。
        </p>

        {/* 手写旁注 + 虚线箭头 */}
        <div className="mt-3 flex items-center gap-2">
          <DoodleArrow className="w-10 opacity-30" />
          <span className="doodle-note">持续更新中，请保持关注</span>
        </div>
      </header>

      {/* ── 作品计数行 ── */}
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs text-ink-faint tracking-widest">
          共 {projects.length} 件作品
        </span>
        <span className="flex-1 border-t border-dashed" style={{ borderColor: '#D0C8BE' }}/>
        {/* 小云朵装饰，放在计数行右端 */}
        <DoodleCloud className="w-12 opacity-15" />
      </div>

      {/* ── 卡片网格 ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* ── 底部区域：小太阳 + 手写注释 ── */}
      <div className="mt-20 flex flex-col items-center gap-3">
        <DoodleSun className="w-8 opacity-15" />
        <span className="doodle-note opacity-45">
          — 更多作品陆续整理中 —
        </span>
      </div>
    </div>
  )
}
