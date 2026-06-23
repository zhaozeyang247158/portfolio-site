import profile from '../data/profile'

export default function Footer() {
  return (
    <footer className="mt-20 pb-8 pt-6" style={{ borderTop: '1px dashed rgba(176,168,152,0.35)' }}>
      <div className="page-container flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-ink-faint tracking-widest">
            © 2026 {profile.name}
          </span>
          <span className="text-ink-faint/30 text-xs">·</span>
          <span className="font-mono text-[10px] text-ink-faint tracking-widest">
            {profile.school}
          </span>
        </div>
        <span
          className="text-[0.7rem] text-ink-faint/60"
          style={{ fontFamily: "'Ma Shan Zheng', 'ZCOOL KuaiLe', cursive", transform: 'rotate(-0.5deg)', display: 'inline-block' }}
        >
          用 AI 工具构建，持续迭代中
        </span>
      </div>
    </footer>
  )
}
