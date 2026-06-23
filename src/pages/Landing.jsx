import { useNavigate } from 'react-router-dom'
import DoodleTeacher from '../components/DoodleTeacher'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden"
      onClick={() => navigate('/portfolio')}
    >
      {/* ── 纸张横线背景（比 body 略明显，但不像作业本） ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: 'repeating-linear-gradient(180deg, transparent, transparent 35px, rgba(150,142,132,0.07) 35px, rgba(150,142,132,0.07) 36px)',
        }}
      />

      {/* ── 左侧装订线（极淡，隐约） ── */}
      <div className="absolute top-0 bottom-0 left-[72px] md:left-[100px] w-px
        bg-red-300/10 pointer-events-none" aria-hidden="true"/>

      {/* ── 四角手写小注释 ── */}
      <div className="absolute top-7 left-8 md:left-14 pointer-events-none">
        <span className="doodle-note opacity-70" style={{ transform: 'rotate(-2deg)' }}>
          Portfolio · 2026
        </span>
      </div>
      <div className="absolute top-7 right-8 md:right-14 font-mono text-xs text-ink-faint
        tracking-widest opacity-50 pointer-events-none">
        No.001
      </div>
      {/* 左下角潦草注释 */}
      <div className="absolute bottom-10 left-8 md:left-14 pointer-events-none">
        <span className="doodle-note opacity-55" style={{ transform: 'rotate(1.5deg)' }}>
          点击任意处进入 →
        </span>
      </div>
      {/* 右下角圆圈批注 */}
      <div className="absolute bottom-28 right-4 md:right-8 pointer-events-none">
        <svg viewBox="0 0 60 24" className="w-14 opacity-30" fill="none">
          <ellipse cx="30" cy="12" rx="28" ry="10" stroke="#2C2C2C" strokeWidth="1.2"
            strokeDasharray="3 2"/>
        </svg>
      </div>

      {/* ── 中央内容 ── */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 gap-7 max-w-xl">

        {/* 顶部细装饰 */}
        <div className="flex items-center gap-4 w-full justify-center">
          <span className="block h-px flex-1 max-w-[48px]" style={{ background: '#B0A898' }}/>
          <span className="font-mono text-[10px] text-ink-faint tracking-[0.3em] uppercase">
            Zhao Zeyang
          </span>
          <span className="block h-px flex-1 max-w-[48px]" style={{ background: '#B0A898' }}/>
        </div>

        {/* 主标题 — 手写感字体，带轻微旋转 */}
        <div className="relative">
          <h1
            className="title-handwrite text-5xl md:text-7xl text-ink leading-none"
            style={{ fontFamily: "'Ma Shan Zheng', 'ZCOOL KuaiLe', serif", letterSpacing: '0.18em' }}
          >
            作品集
          </h1>
          {/* 标题下手绘波浪下划线 */}
          <svg viewBox="0 0 200 12" className="w-full mt-1 opacity-40" fill="none">
            <path d="M4 6 Q30 2 56 6 Q82 10 108 6 Q134 2 160 6 Q186 10 196 6"
              stroke="#2C2C2C" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          </svg>
        </div>

        {/* 副标题 */}
        <p className="font-mono text-xs md:text-sm text-ink-light tracking-[0.25em]">
          赵泽阳　｜　中国农业大学　｜　2027届毕业生
        </p>

        {/* 手写风格分隔 */}
        <div className="flex items-center gap-3 opacity-40">
          <span className="block w-4 h-px bg-ink"/>
          <span className="text-ink text-base" style={{ fontFamily: 'Georgia, serif' }}>✦</span>
          <span className="block w-4 h-px bg-ink"/>
        </div>

        {/* 一句话介绍 */}
        <p className="text-sm md:text-base text-ink-light leading-[2] tracking-wide max-w-md">
          这是一个用于展示个人项目、AI 编程实践<br className="hidden md:block"/>
          与作品落地能力的在线作品集。
        </p>

        {/* 进入按钮 */}
        <button
          className="btn-primary mt-2"
          onClick={(e) => { e.stopPropagation(); navigate('/portfolio') }}
        >
          进入作品集
        </button>

        {/* 手写小提示 */}
        <p className="doodle-note opacity-60 mt-1">
          — 或者直接点击页面任意位置 —
        </p>
      </main>

      {/* ── 右下角 Doodle 讲解员 ── */}
      <div className="absolute bottom-0 right-0 md:right-6 pointer-events-none">
        <DoodleTeacher className="w-36 md:w-48 opacity-90" />
      </div>

      {/* ── 底部版权 ── */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px]
        text-ink-faint tracking-widest opacity-40 pointer-events-none">
        © 2026 赵泽阳
      </div>
    </div>
  )
}
