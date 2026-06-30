import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaXmark } from 'react-icons/fa6'

const links = [
  { href: '#home',         label: 'Home' },
  { href: '#services',     label: 'Services' },
  { href: '#why-us',       label: 'Why Us' },
  { href: '#contact',      label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [active,   setActive]     = useState('home')
  const [open,     setOpen]       = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) setActive(s.id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300
        ${scrolled
          ? 'bg-white/97 backdrop-blur-xl shadow-lg py-2'
          : 'bg-white/90 backdrop-blur-xl py-3.5'
        } border-b border-slate-100`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" onClick={() => handleNav('#home')} className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="JK Cloud" className="w-11 h-11 rounded-full object-cover border-2 border-primary-500/30" />
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">
            JK <span className="text-primary-500">Cloud Technologies</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className={`px-3 py-2 rounded-lg text-lg font-bold transition-all duration-200
                  ${active === l.href.slice(1)
                    ? 'text-primary-500 bg-primary-500/8'
                    : 'text-slate-600 hover:text-primary-500 hover:bg-primary-500/6'
                  }`}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="ml-2">
            <button
              onClick={() => handleNav('#contact')}
              className="btn-primary text-sm px-6 py-2.5"
            >
              Get In Touch
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-xl border border-slate-200 bg-white/80 text-slate-700"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mx-4 mt-2 mb-3 bg-white/98 backdrop-blur-xl rounded-2xl
                       shadow-xl border border-slate-100 p-4"
          >
            <ul className="flex flex-col gap-1">
              {links.map(l => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-lg font-bold
                               text-slate-600 hover:text-primary-500 hover:bg-primary-500/6 transition-all"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <button
                  onClick={() => handleNav('#contact')}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Get In Touch
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
