import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import profile from '../data/profile'

const links = [
  { to: '/portfolio', label: '作品集' },
  { to: '/contact',   label: '联系'   },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm"
      style={{
        background: 'rgba(248,245,239,0.93)',
        borderBottom: '1px solid rgba(176,168,152,0.30)',
      }}
    >
      <nav className="page-container flex items-center justify-between h-14">

        {/* Logo — 从 profile 读取姓名 */}
        <Link
          to="/"
          className="text-ink hover:text-ink-light transition-colors"
          style={{ fontFamily: "'Ma Shan Zheng', 'ZCOOL KuaiLe', serif", fontSize: '1.1rem', letterSpacing: '0.12em' }}
        >
          {profile.name}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-xs tracking-[0.2em] transition-colors ${
                    isActive
                      ? 'text-ink border-b border-ink pb-0.5'
                      : 'text-ink-light hover:text-ink'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setOpen(!open)}
          aria-label="菜单"
        >
          <span className={`block bg-ink transition-all duration-200 ${open ? 'w-5 translate-y-[6px] rotate-45' : 'w-5'}`}
            style={{ height: '1.5px' }}/>
          <span className={`block bg-ink transition-opacity duration-200 ${open ? 'opacity-0 w-3' : 'w-4'}`}
            style={{ height: '1.5px' }}/>
          <span className={`block bg-ink transition-all duration-200 ${open ? 'w-5 -translate-y-[6px] -rotate-45' : 'w-5'}`}
            style={{ height: '1.5px' }}/>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden"
          style={{ borderTop: '1px dashed rgba(176,168,152,0.35)', background: '#F8F5EF' }}
        >
          <ul className="page-container py-5 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-sm tracking-widest ${isActive ? 'text-ink' : 'text-ink-light'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
