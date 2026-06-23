import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import projects from '../data/projects'
import {
  DoodleCatSitting,
  DoodleDogLying,
  DoodleCatPeeking,
  DoodleDogWithNote,
} from '../components/DoodleAnimals'

// ── 主页面 ───────────────────────────────────────────────────
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

  let sectionIndex = 2
  const nextNum = () => {
    sectionIndex += 1
    return String(sectionIndex).padStart(2, '0')
  }

  const hasBlocks     = Array.isArray(detail.contentBlocks) && detail.contentBlocks.length > 0
  const hasHighlights = Array.isArray(detail.highlights) && detail.highlights.length > 0

  return (
    // 外层用 relative，让绝对定位的边角装饰相对此容器定位
    <div className="relative">

      {/* ═══ 边角 Doodle 装饰（仅在大屏幕显示，不影响移动端排版）═══ */}

      {/* 左侧中上：探头猫，从左边框外探进来，好奇看内容 */}
      <div
        className="absolute top-[320px] left-0 pointer-events-none hidden xl:block"
        style={{ width: '52px', opacity: 0.55 }}
      >
        <DoodleCatPeeking style={{ width: '52px', height: 'auto' }} />
      </div>

      {/* 右侧靠下：蹲坐的猫，在内容区右侧安静蹲着 */}
      <div
        className="absolute top-[600px] right-2 pointer-events-none hidden xl:block"
        style={{ width: '60px', opacity: 0.50 }}
      >
        <DoodleCatSitting style={{ width: '60px', height: 'auto' }} />
        {/* 手写注释 */}
        <p
          className="mt-1 text-center"
          style={{
            fontFamily: "'Ma Shan Zheng', 'ZCOOL KuaiLe', cursive",
            fontSize: '0.6rem',
            color: '#8B7355',
            opacity: 0.7,
            transform: 'rotate(1.5deg)',
          }}
        >
          在看这里
        </p>
      </div>

      {/* 右侧底部：趴着的狗，在总结区域旁边休息 */}
      <div
        className="absolute bottom-[200px] right-1 pointer-events-none hidden xl:block"
        style={{ width: '80px', opacity: 0.45 }}
      >
        <DoodleDogLying style={{ width: '80px', height: 'auto' }} />
      </div>

      {/* 左侧底部：叼纸条的狗，在返回按钮附近 */}
      <div
        className="absolute bottom-[100px] left-1 pointer-events-none hidden xl:block"
        style={{ width: '72px', opacity: 0.50 }}
      >
        <DoodleDogWithNote style={{ width: '72px', height: 'auto' }} />
      </div>

      {/* ═══ 主体内容 ═══ */}
      <article className="page-container py-16 md:py-24 max-w-3xl">

        {/* ── 面包屑 ── */}
        <nav className="mb-10 font-mono text-xs text-ink-faint tracking-widest flex items-center gap-2">
          <Link to="/portfolio" className="hover:text-ink transition-colors">作品集</Link>
          <span className="opacity-40">/</span>
          <span className="text-ink-light">{project.title}</span>
        </nav>

        {/* ── 标签 ── */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
          </div>
        )}

        {/* ── 主标题 ── */}
        <h1
          className="text-4xl md:text-5xl text-ink mb-3 leading-tight"
          style={{ fontFamily: "'Ma Shan Zheng', 'ZCOOL KuaiLe', serif", letterSpacing: '0.1em' }}
        >
          {project.title}
        </h1>

        <svg viewBox="0 0 300 10" className="w-64 mb-5 opacity-25" fill="none">
          <path d="M2 5 Q75 2 150 5 Q225 8 298 5"
            stroke="#2C2C2C" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>

        {/* ── 一句话概述 ── */}
        <p className="text-base text-ink-light leading-loose mb-2">{project.summary}</p>

        {/* ── 日期 ── */}
        {project.date && <p className="doodle-note mb-10">{project.date}</p>}

        <div className="divider" />

        {/* ── 封面图 ── */}
        {project.cover && (
          <div className="mb-14 overflow-hidden card-doodle">
            <img src={project.cover} alt={project.title} className="w-full object-cover" />
          </div>
        )}

        {/* ── 01 项目背景 ── */}
        <Section number="01" title="项目背景">
          <p className="text-sm text-ink-light leading-[2]">
            {detail.background || '项目背景待补充。'}
          </p>
        </Section>

        {/* ── 02 创作 / 实现思路 ── */}
        <Section number="02" title="创作 / 实现思路">
          <p className="text-sm text-ink-light leading-[2]">
            {detail.approach || '实现思路待补充。'}
          </p>
        </Section>

        {/* ── 03 核心内容展示 ── */}
        <Section number={nextNum()} title="核心内容展示">
          {hasBlocks ? (
            <div className="space-y-14">
              {detail.contentBlocks.map((block, i) => (
                <ContentBlock key={i} block={block} index={i} />
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-3 py-6">
              <svg viewBox="0 0 48 48" fill="none" className="w-8 shrink-0 opacity-20" aria-hidden="true">
                <circle cx="24" cy="24" r="10" stroke="#2C2C2C" strokeWidth="1.4" fill="none"/>
                <line x1="24" y1="6"  x2="24" y2="2"  stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="24" y1="42" x2="24" y2="46" stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="6"  y1="24" x2="2"  y2="24" stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="42" y1="24" x2="46" y2="24" stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <div>
                <p className="text-sm text-ink-faint tracking-wider">核心内容待补充。</p>
                <p className="doodle-note mt-1 opacity-50">// 后续替换为真实截图和说明</p>
              </div>
            </div>
          )}
        </Section>

        {/* ── 项目亮点（有则渲染）── */}
        {hasHighlights && (
          <Section number={nextNum()} title="项目亮点 / 我的思考">
            <ul className="space-y-3 mt-1">
              {detail.highlights.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-ink-light leading-loose">
                  <span className="shrink-0 mt-1 text-ink-faint font-mono text-xs">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* ── 总结与收获 ── */}
        <Section number={nextNum()} title="总结与收获">
          <p className="text-sm text-ink-light leading-[2]">
            {detail.conclusion || '总结与收获待补充。'}
          </p>
          <p className="doodle-note mt-5 opacity-55">— 完 —</p>
        </Section>

        <div className="divider" />

        {/* ── 返回按钮 ── */}
        <div className="mt-10 flex items-center gap-6">
          <button onClick={() => navigate('/portfolio')} className="btn-outline">
            ← 返回作品集
          </button>
          <span className="doodle-note opacity-45">还有更多作品等你探索</span>
        </div>
      </article>
    </div>
  )
}

// ── 图文交错模块 ─────────────────────────────────────────────
function ContentBlock({ block, index }) {
  const isReversed = index % 2 === 1

  return (
    <div
      className={`flex flex-col gap-6 md:gap-8 items-start ${
        isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      {/* 图片侧 */}
      <div className="w-full md:w-[48%] shrink-0">
        <div className="card-doodle overflow-hidden">
          <img
            src={block.image}
            alt={block.imageAlt || block.title || `模块 ${index + 1}`}
            className="w-full object-cover"
          />
        </div>
        {block.note && (
          <p className="doodle-note mt-2 ml-1 opacity-55">{block.note}</p>
        )}
      </div>

      {/* 文字侧 */}
      <div className="flex-1 flex flex-col gap-3 pt-1">
        {block.tags && block.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {block.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        )}

        <h3 className="flex items-end gap-2">
          <span className="font-mono text-2xl text-ink-faint/20 leading-none select-none">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className="text-sm text-ink tracking-wider pb-0.5 border-b border-dashed"
            style={{ fontFamily: "'Ma Shan Zheng', 'ZCOOL KuaiLe', serif", borderColor: '#D0C8BE' }}
          >
            {block.title || `模块 ${index + 1}`}
          </span>
        </h3>

        <p className="text-sm text-ink-light leading-[2]">
          {block.text || '说明文字待补充。'}
        </p>

        <svg viewBox="0 0 80 6" className="w-16 mt-1 opacity-20" fill="none">
          <path d="M0 3 Q20 1 40 3 Q60 5 80 3"
            stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  )
}

// ── 节标题 ───────────────────────────────────────────────────
function Section({ number, title, children }) {
  return (
    <section className="mb-14">
      <h2 className="flex items-end gap-2 mb-7">
        <span
          className="text-3xl text-ink-faint/20 font-mono leading-none select-none"
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
