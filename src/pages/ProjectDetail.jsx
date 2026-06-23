import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import projects from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!project) {
    return (
      <div className="page-container py-24 text-center">
        <p className="text-ink-faint text-sm tracking-widest mb-6">作品不存在</p>
        <Link to="/portfolio" className="btn-outline">← 返回作品集</Link>
      </div>
    )
  }

  const { detail } = project

  return (
    <article className="page-container py-16 md:py-24 max-w-3xl">

      {/* ── 面包屑 ── */}
      <nav className="mb-10 font-mono text-xs text-ink-faint tracking-widest flex items-center gap-2">
        <Link to="/portfolio" className="hover:text-ink transition-colors">作品集</Link>
        <span className="opacity-40">/</span>
        <span className="text-ink-light">{project.title}</span>
      </nav>

      {/* ── 标签 ── */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>

      {/* ── 主标题 ── */}
      <h1
        className="text-4xl md:text-5xl text-ink mb-3 leading-tight"
        style={{ fontFamily: "'Ma Shan Zheng', 'ZCOOL KuaiLe', serif", letterSpacing: '0.1em' }}
      >
        {project.title}
      </h1>

      {/* 手绘下划线 */}
      <svg viewBox="0 0 300 10" className="w-64 mb-4 opacity-30" fill="none">
        <path d="M2 5 Q75 2 150 5 Q225 8 298 5"
          stroke="#2C2C2C" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>

      {/* ── 一句话概述 ── */}
      <p className="text-base text-ink-light leading-loose mb-2">{project.summary}</p>

      {/* ── 日期 ── */}
      <p className="doodle-note mb-10">{project.date}</p>

      {/* 虚线分隔 */}
      <div className="divider"/>

      {/* ── 封面图 ── */}
      <div className="mb-12 overflow-hidden card-doodle">
        <img src={project.cover} alt={project.title} className="w-full object-cover"/>
      </div>

      {/* ── 各节内容 ── */}
      <Section number="01" title="项目背景">
        <p className="text-sm text-ink-light leading-[2]">{detail.background}</p>
      </Section>

      <Section number="02" title="创作 / 实现思路">
        <p className="text-sm text-ink-light leading-[2]">{detail.approach}</p>
      </Section>

      <Section number="03" title="核心内容展示">
        {Array.isArray(detail.core) ? (
          <ul className="space-y-4">
            {detail.core.map((item, i) => (
              <li key={i} className="flex gap-4 text-sm text-ink-light leading-loose">
                {/* 手绘编号圆圈 */}
                <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full border border-ink-faint/60
                  flex items-center justify-center font-mono text-[10px] text-ink-faint">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-ink-light leading-[2]">{detail.core}</p>
        )}
      </Section>

      <Section number="04" title="图片展示区">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {detail.images.map((src, i) => (
            <div key={i} className="overflow-hidden card-doodle">
              <img src={src} alt={`${project.title} 图片 ${i + 1}`} className="w-full object-cover"/>
            </div>
          ))}
        </div>
      </Section>

      <Section number="05" title="项目亮点">
        <ul className="space-y-3">
          {detail.highlights.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-ink-light leading-loose">
              {/* 手绘箭头符号 */}
              <span className="shrink-0 mt-1 text-ink-faint font-mono text-xs">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section number="06" title="总结与收获">
        <p className="text-sm text-ink-light leading-[2]">{detail.conclusion}</p>
        {/* 手写结尾注释 */}
        <p className="doodle-note mt-4 opacity-60">— 完 —</p>
      </Section>

      <div className="divider"/>

      {/* ── 返回按钮 ── */}
      <div className="mt-10 flex items-center gap-6">
        <button onClick={() => navigate('/portfolio')} className="btn-outline">
          ← 返回作品集
        </button>
        <span className="doodle-note opacity-50">还有更多作品等你探索</span>
      </div>
    </article>
  )
}

function Section({ number, title, children }) {
  return (
    <section className="mb-14">
      {/* 节标题：手绘感数字 + 下划线 */}
      <h2 className="flex items-end gap-2 mb-6">
        <span
          className="text-3xl text-ink-faint/30 font-mono leading-none select-none"
          style={{ letterSpacing: '-0.02em' }}
        >
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
      {children}
    </section>
  )
}
