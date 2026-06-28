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
    <div className="relative">

      {/* ═══ 边角 Doodle 装饰（xl 以上大屏才显示）═══ */}
      <div className="absolute top-[320px] left-0 pointer-events-none hidden xl:block"
        style={{ width: '52px', opacity: 0.55 }}>
        <DoodleCatPeeking style={{ width: '52px', height: 'auto' }} />
      </div>
      <div className="absolute top-[600px] right-2 pointer-events-none hidden xl:block"
        style={{ width: '60px', opacity: 0.50 }}>
        <DoodleCatSitting style={{ width: '60px', height: 'auto' }} />
        <p className="mt-1 text-center" style={{
          fontFamily: "'Ma Shan Zheng','ZCOOL KuaiLe',cursive",
          fontSize: '0.6rem', color: '#8B7355', opacity: 0.7,
          transform: 'rotate(1.5deg)',
        }}>在看这里</p>
      </div>
      <div className="absolute bottom-[200px] right-1 pointer-events-none hidden xl:block"
        style={{ width: '80px', opacity: 0.45 }}>
        <DoodleDogLying style={{ width: '80px', height: 'auto' }} />
      </div>
      <div className="absolute bottom-[100px] left-1 pointer-events-none hidden xl:block"
        style={{ width: '72px', opacity: 0.50 }}>
        <DoodleDogWithNote style={{ width: '72px', height: 'auto' }} />
      </div>

      {/* ═══ 主体内容 ═══ */}
      <article className="page-container py-16 md:py-24 max-w-5xl">

        {/* 面包屑 */}
        <nav className="mb-10 font-mono text-xs text-ink-faint tracking-widest flex items-center gap-2">
          <Link to="/portfolio" className="hover:text-ink transition-colors">作品集</Link>
          <span className="opacity-40">/</span>
          <span className="text-ink-light">{project.title}</span>
        </nav>

        {/* 标签 */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
          </div>
        )}

        {/* 主标题 */}
        <h1 className="text-4xl md:text-5xl text-ink mb-3 leading-tight"
          style={{ fontFamily: "'Ma Shan Zheng','ZCOOL KuaiLe',serif", letterSpacing: '0.1em' }}>
          {project.title}
        </h1>
        <svg viewBox="0 0 300 10" className="w-64 mb-5 opacity-25" fill="none">
          <path d="M2 5 Q75 2 150 5 Q225 8 298 5" stroke="#2C2C2C" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>

        <p className="text-base text-ink-light leading-loose mb-2">{project.summary}</p>
        {project.date && <p className="doodle-note mb-10">{project.date}</p>}

        <div className="divider" />

        {/* 封面图 */}
        {project.cover && (
          <div className="mb-14 overflow-hidden card-doodle">
            <img src={project.cover} alt={project.title} className="w-full object-cover" />
          </div>
        )}

        {/* 01 项目背景 */}
        <Section number="01" title="项目背景">
          <p className="text-sm text-ink-light leading-[2]">
            {detail.background || '项目背景待补充。'}
          </p>
        </Section>

        {/* 02 创作 / 实现思路 */}
        <Section number="02" title="创作 / 实现思路">
          <p className="text-sm text-ink-light leading-[2]">
            {detail.approach || '实现思路待补充。'}
          </p>
        </Section>

        {/* 03 核心内容展示 */}
        <Section number={nextNum()} title="核心内容展示">
          {hasBlocks ? (
            <div className="space-y-16">
              {detail.contentBlocks.map((block, i) => (
                <ContentBlock key={i} block={block} index={i} />
              ))}
            </div>
          ) : (
            <EmptyBlocks />
          )}
        </Section>

        {/* 项目亮点 */}
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

        {/* 总结与收获 */}
        <Section number={nextNum()} title="总结与收获">
          <p className="text-sm text-ink-light leading-[2]">
            {detail.conclusion || '总结与收获待补充。'}
          </p>
          <p className="doodle-note mt-5 opacity-55">— 完 —</p>
        </Section>

        <div className="divider" />

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

// ── 空状态 ───────────────────────────────────────────────────
function EmptyBlocks() {
  return (
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
  )
}

// ── ContentBlock 路由器：根据 type 分发到对应渲染函数 ─────────
// 向后兼容旧结构（有 image/text 字段时自动转换）
function ContentBlock({ block, index }) {
  // 旧结构兼容：{ image, imageAlt, text } → 转换为新结构
  const normalized = normalizeBlock(block, index)
  const { type } = normalized

  if (type === 'gallery')                    return <BlockGallery   block={normalized} index={index} />
  if (type === 'fullImage')                  return <BlockFullImage block={normalized} index={index} />
  if (type === 'textOnly')                   return <BlockTextOnly  block={normalized} index={index} />
  if (type === 'steps' || type === 'list')   return <BlockSteps     block={normalized} index={index} />
  return                                            <BlockImageText  block={normalized} index={index} />  // imageText / 默认
}

// 旧字段兼容转换
function normalizeBlock(block, index) {
  // 已经是新结构
  if (block.paragraphs !== undefined || block.images !== undefined) return block

  // 旧结构：{ image, imageAlt, text, note, tags, title }
  return {
    type:       'imageText',
    layout:     index % 2 === 0 ? 'left' : 'right',
    title:      block.title || `模块 ${index + 1}`,
    paragraphs: block.text ? [block.text] : [],
    bullets:    [],
    images:     block.image ? [{ src: block.image, alt: block.imageAlt || '', caption: '' }] : [],
    tags:       block.tags  || [],
    note:       block.note  || '',
  }
}

// ── 公共：模块标题行 ──────────────────────────────────────────
function BlockTitle({ index, title }) {
  return (
    <h3 className="flex items-end gap-2 mb-5">
      <span className="font-mono text-2xl text-ink-faint/20 leading-none select-none">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="text-sm text-ink tracking-wider pb-0.5 border-b border-dashed"
        style={{ fontFamily: "'Ma Shan Zheng','ZCOOL KuaiLe',serif", borderColor: '#D0C8BE' }}>
        {title || `模块 ${index + 1}`}
      </span>
    </h3>
  )
}

// ── 公共：段落列表 ────────────────────────────────────────────
function Paragraphs({ items }) {
  if (!items || items.length === 0) return null
  return (
    <div className="space-y-3">
      {items.map((p, i) => (
        <p key={i} className="text-sm text-ink-light leading-[2]">{p}</p>
      ))}
    </div>
  )
}

// ── 公共：要点列表 ────────────────────────────────────────────
function Bullets({ items }) {
  if (!items || items.length === 0) return null
  return (
    <ul className="mt-3 space-y-2">
      {items.map((b, i) => (
        <li key={i} className="flex gap-3 text-sm text-ink-light leading-loose">
          <span className="shrink-0 mt-1 text-ink-faint font-mono text-xs">—</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  )
}

// ── 公共：标签 + 手写批注 ─────────────────────────────────────
function BlockMeta({ tags, note }) {
  return (
    <>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      )}
      {note && <p className="doodle-note mt-2 opacity-55">{note}</p>}
    </>
  )
}

// ── 公共：单张图片渲染 ────────────────────────────────────────
function BlockImage({ img, className = '' }) {
  if (!img) return null
  return (
    <figure className={className}>
      <div className="card-doodle overflow-hidden">
        <img src={img.src} alt={img.alt || ''} className="w-full h-auto object-contain" />
      </div>
      {img.caption && (
        <figcaption className="doodle-note mt-1 ml-1 opacity-50">{img.caption}</figcaption>
      )}
    </figure>
  )
}

// ── 装饰线 ────────────────────────────────────────────────────
function DoodleLine() {
  return (
    <svg viewBox="0 0 80 6" className="w-16 mt-3 opacity-20" fill="none">
      <path d="M0 3 Q20 1 40 3 Q60 5 80 3" stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}

// ════════════════════════════════════════════════════════════
// 各类型渲染组件
// ════════════════════════════════════════════════════════════

// ── imageText：上文下图 ───────────────────────────────────────
// layout 字段保留兼容但不影响渲染（统一上文下图）
function BlockImageText({ block, index }) {
  const imgs = block.images || []

  return (
    <div className="flex flex-col gap-5">
      {/* 文字区：图片上方，限宽保持可读性 */}
      <div className="flex flex-col gap-2 max-w-3xl">
        <BlockTitle index={index} title={block.title} />
        <Paragraphs items={block.paragraphs} />
        <Bullets items={block.bullets} />
        <BlockMeta tags={block.tags} note={block.note} />
        <DoodleLine />
      </div>

      {/* 图片区：全宽大图 */}
      {imgs.length > 0 && (
        <div className="w-full space-y-3">
          {imgs.map((img, i) => (
            <BlockImage key={i} img={img} />
          ))}
        </div>
      )}
    </div>
  )
}

// ── textOnly：纯文字 ──────────────────────────────────────────
function BlockTextOnly({ block, index }) {
  return (
    <div>
      <BlockTitle index={index} title={block.title} />
      <Paragraphs items={block.paragraphs} />
      <Bullets items={block.bullets} />
      <BlockMeta tags={block.tags} note={block.note} />
      <DoodleLine />
    </div>
  )
}

// ── gallery：多图展示 ─────────────────────────────────────────
// 2张：两列  |  3张以上：前两张两列，剩余继续两列
function BlockGallery({ block, index }) {
  const imgs = block.images || []
  return (
    <div>
      <BlockTitle index={index} title={block.title} />
      {block.paragraphs && block.paragraphs.length > 0 && (
        <div className="mb-5">
          <Paragraphs items={block.paragraphs} />
        </div>
      )}

      {/* 网格展示多图 */}
      {imgs.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {imgs.map((img, i) => (
            <BlockImage key={i} img={img} />
          ))}
        </div>
      )}

      <BlockMeta tags={block.tags} note={block.note} />
      <DoodleLine />
    </div>
  )
}

// ── fullImage：单张大图全宽 ───────────────────────────────────
function BlockFullImage({ block, index }) {
  const img = block.images && block.images[0]
  return (
    <div>
      <BlockTitle index={index} title={block.title} />
      {img && (
        <div className="mb-4">
          <BlockImage img={img} />
        </div>
      )}
      <Paragraphs items={block.paragraphs} />
      <BlockMeta tags={block.tags} note={block.note} />
      <DoodleLine />
    </div>
  )
}

// ── steps：步骤 / 流程 / 方法列表（type:'steps' 或 'list'）────
function BlockSteps({ block, index }) {
  const imgs = block.images || []
  return (
    <div>
      <BlockTitle index={index} title={block.title} />
      {block.paragraphs && block.paragraphs.length > 0 && (
        <div className="mb-4">
          <Paragraphs items={block.paragraphs} />
        </div>
      )}

      {/* 步骤列表：带序号圆圈 */}
      {block.bullets && block.bullets.length > 0 && (
        <ol className="mt-2 space-y-3">
          {block.bullets.map((b, i) => (
            <li key={i} className="flex gap-4 text-sm text-ink-light leading-loose">
              <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full border border-ink-faint/50
                flex items-center justify-center font-mono text-[10px] text-ink-faint">
                {i + 1}
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ol>
      )}

      {/* 可选配图（步骤列表也可以带小图） */}
      {imgs.length > 0 && (
        <div className={`mt-5 grid gap-4 ${imgs.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
          {imgs.map((img, i) => <BlockImage key={i} img={img} />)}
        </div>
      )}

      <BlockMeta tags={block.tags} note={block.note} />
      <DoodleLine />
    </div>
  )
}

// ── 节标题 ───────────────────────────────────────────────────
function Section({ number, title, children }) {
  return (
    <section className="mb-14">
      <h2 className="flex items-end gap-2 mb-7">
        <span className="text-3xl text-ink-faint/20 font-mono leading-none select-none"
          style={{ letterSpacing: '-0.02em' }}>
          {number}
        </span>
        <span className="text-base text-ink pb-0.5 border-b border-dashed"
          style={{ fontFamily: "'Ma Shan Zheng','ZCOOL KuaiLe',serif",
            letterSpacing: '0.1em', borderColor: '#C8C0B4' }}>
          {title}
        </span>
      </h2>
      {children}
    </section>
  )
}
