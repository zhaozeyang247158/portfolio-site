// 联系方式 — 占位符，后续替换为真实内容
const contacts = [
  {
    key: 'email',
    label: '邮箱',
    value: 'your@email.com',         // ← 替换为真实邮箱
    href: 'mailto:your@email.com',
    display: 'your@email.com',
    icon: '✉',
  },
  {
    key: 'github',
    label: 'GitHub',
    value: 'github.com/your-username', // ← 替换为真实 GitHub 地址
    href: 'https://github.com/your-username',
    display: 'github.com/your-username',
    icon: '⌂',
  },
  {
    key: 'resume',
    label: '简历',
    value: '/resume.pdf',             // ← 把简历 PDF 放到 public/resume.pdf
    href: '/resume.pdf',
    display: '下载简历 PDF',
    icon: '↓',
    isDownload: true,
  },
]

export default function Contact() {
  return (
    <div className="page-container py-16 md:py-24 max-w-3xl">
      {/* 页头 */}
      <header className="mb-14">
        <p className="font-mono text-xs text-ink-faint tracking-widest mb-4">No.004</p>
        <h1 className="font-serif text-3xl md:text-4xl tracking-widest text-ink mb-5">
          联系方式
        </h1>
        <p className="text-sm text-ink-light leading-loose">
          欢迎通过以下方式与我取得联系。
        </p>
        <div className="mt-6 w-10 h-px bg-accent/60" />
      </header>

      {/* 联系列表 */}
      <ul className="space-y-4 mb-16">
        {contacts.map((c) => (
          <li key={c.key}>
            <a
              href={c.href}
              target={c.key === 'github' ? '_blank' : undefined}
              rel={c.key === 'github' ? 'noopener noreferrer' : undefined}
              download={c.isDownload || undefined}
              className="flex items-center gap-5 border border-ink-faint/40 p-5 md:p-6
                         hover:border-ink/60 hover:bg-paper-dark/30 transition-all duration-200 group"
            >
              {/* 图标 */}
              <span className="font-mono text-base text-ink-faint w-6 text-center group-hover:text-ink transition-colors">
                {c.icon}
              </span>

              {/* 内容 */}
              <div className="flex-1">
                <p className="font-mono text-xs text-ink-faint tracking-widest mb-1">{c.label}</p>
                <p className="text-sm text-ink-light group-hover:text-ink transition-colors tracking-wide">
                  {c.display}
                </p>
              </div>

              {/* 箭头 */}
              <span className="text-ink-faint group-hover:text-ink transition-colors text-xs font-mono">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* 占位提示 */}
      <div className="border border-dashed border-ink-faint/40 p-5 text-xs text-ink-faint font-mono tracking-widest leading-loose">
        <p>// 占位提示</p>
        <p>// 替换邮箱：修改 src/pages/Contact.jsx 中 email.value</p>
        <p>// 替换 GitHub：修改 github.value 和 github.href</p>
        <p>// 简历：将 resume.pdf 放入 public/ 目录</p>
      </div>
    </div>
  )
}
