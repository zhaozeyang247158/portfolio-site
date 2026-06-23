import { Link } from 'react-router-dom'

// 每张卡片轻微随机歪斜，index 决定方向，模拟手工摆放感
const tilts = ['rotate-[-0.4deg]', 'rotate-[0.3deg]', 'rotate-[-0.2deg]',
               'rotate-[0.5deg]', 'rotate-[-0.3deg]', 'rotate-[0.2deg]']

export default function ProjectCard({ project, index = 0 }) {
  const tilt = tilts[index % tilts.length]

  return (
    <article
      className={`group flex flex-col bg-paper card-doodle transition-all duration-300
        hover:shadow-[4px_4px_0px_rgba(44,44,44,0.12)] hover:rotate-0 ${tilt}`}
    >
      {/* ── 封面图区域 ── */}
      <div className="overflow-hidden aspect-[5/3] bg-paper-dark relative">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
        {/* 封面右上角折角装饰 */}
        <div className="absolute top-0 right-0 w-0 h-0 pointer-events-none"
          style={{
            borderLeft: '18px solid transparent',
            borderTop: '18px solid #F8F5EF',
            opacity: 0.7,
          }}
        />
      </div>

      {/* ── 内容区 ── */}
      <div className="p-5 flex flex-col flex-1 gap-3">

        {/* 标签 */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* 标题 */}
        <h3
          className="text-lg text-ink leading-snug"
          style={{ fontFamily: "'Ma Shan Zheng', 'ZCOOL KuaiLe', 'Noto Serif SC', serif", letterSpacing: '0.05em' }}
        >
          {project.title}
        </h3>

        {/* 手绘分割线 */}
        <svg viewBox="0 0 100 4" className="w-full opacity-20" fill="none">
          <path d="M0 2 Q25 0.5 50 2 Q75 3.5 100 2"
            stroke="#2C2C2C" strokeWidth="1" strokeLinecap="round"/>
        </svg>

        {/* 简介 */}
        <p className="text-sm text-ink-light leading-relaxed flex-1">
          {project.summary}
        </p>

        {/* 底部区域 */}
        <div className="flex items-center justify-between pt-3 mt-auto">
          {/* 日期手写感 */}
          <span className="doodle-note text-[0.68rem] opacity-70">{project.date}</span>
          <Link
            to={`/projects/${project.id}`}
            className="btn-outline text-xs px-4 py-1.5"
          >
            查看详情 →
          </Link>
        </div>
      </div>
    </article>
  )
}
