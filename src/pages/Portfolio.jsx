import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import DoodleSignHolder from '../components/DoodleSignHolder'

export default function Portfolio() {
  return (
    <div className="page-container py-16 md:py-24">

      {/* ── 页头区域 ── */}
      <header className="mb-16 relative">
        {/* 右侧举牌小人 */}
        <div className="absolute right-0 top-0 pointer-events-none hidden md:block">
          <DoodleSignHolder className="w-28 opacity-80" />
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
        <svg viewBox="0 0 160 10" className="w-36 mb-5 opacity-35" fill="none">
          <path d="M2 5 Q40 2 80 5 Q120 8 158 5"
            stroke="#2C2C2C" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>

        <p className="text-sm text-ink-light leading-loose max-w-lg">
          这里将展示我的项目作品、AI 编程实践与阶段性成果。
        </p>

        {/* 手写旁注 */}
        <div className="mt-3">
          <span className="doodle-note">
            ← 持续更新中，请保持关注
          </span>
        </div>
      </header>

      {/* ── 作品计数 ── */}
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-xs text-ink-faint tracking-widest">
          共 {projects.length} 件作品
        </span>
        <span className="flex-1 border-t border-dashed" style={{ borderColor: '#C8C0B4' }}/>
      </div>

      {/* ── 卡片网格 ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* ── 底部手写注释 ── */}
      <div className="mt-16 flex justify-center">
        <span className="doodle-note opacity-50">
          — 更多作品陆续整理中 —
        </span>
      </div>
    </div>
  )
}
