import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaEye, FaStar, FaHtml5, FaCss3Alt, FaJs, FaCloud } from 'react-icons/fa6'
import useCounter from '../hooks/useCounter'
import { stats } from '../data/index'

const TYPED = ['Premium IT Solutions', 'Web Development Experts', 'Cloud Technology Leaders', 'Digital Transformation']

function TypedBadge() {
  const [text, setText] = useState(TYPED[0])
  const [idx, setIdx]   = useState(0)
  const [ch,  setCh]    = useState(TYPED[0].length)
  const [del, setDel]   = useState(false)

  useEffect(() => {
    const current = TYPED[idx]
    const delay   = del ? 60 : ch === current.length ? 2000 : 100
    const timer = setTimeout(() => {
      if (!del && ch < current.length) { setCh(c => c + 1) }
      else if (!del && ch === current.length) { setDel(true) }
      else if (del && ch > 0) { setCh(c => c - 1) }
      else { setDel(false); setIdx(i => (i + 1) % TYPED.length) }
      setText(TYPED[idx].substring(0, del ? ch - 1 : ch + 1))
    }, delay)
    return () => clearTimeout(timer)
  }, [ch, del, idx])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/10 to-accent-600/10
                 border border-primary-500/25 text-primary-500 px-5 py-2 rounded-full
                 text-xs font-semibold uppercase tracking-widest mb-6"
    >
      <FaStar className="text-amber-400" />
      {text}<span className="animate-pulse">|</span>
    </motion.div>
  )
}

function StatItem({ count, suffix, label }) {
  const [inView, setInView] = useState(false)
  const ref  = useRef(null)
  const val  = useCounter(count, 2000, inView)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl font-black gradient-text leading-none">
        {val}{suffix}
      </div>
      <div className="text-xs text-slate-400 font-medium mt-0.5">{label}</div>
    </div>
  )
}

export default function Hero() {
  const particleRef = useRef(null)

  useEffect(() => {
    const el = particleRef.current
    if (!el) return
    const colors = ['rgba(59,130,246,0.6)','rgba(124,58,237,0.5)','rgba(6,182,212,0.5)','rgba(168,85,247,0.4)']
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div')
      const size = Math.random() * 4 + 2
      p.className = 'particle'
      p.style.cssText = `
        left:${Math.random()*100}%; width:${size}px; height:${size}px;
        background:${colors[Math.floor(Math.random()*colors.length)]};
        animation-duration:${Math.random()*15+10}s;
        animation-delay:${Math.random()*10}s;
      `
      el.appendChild(p)
    }
    return () => { while (el.firstChild) el.removeChild(el.firstChild) }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center pt-20"
      style={{ background: 'linear-gradient(135deg, #f8faff 0%, #ede9fe 50%, #dbeafe 100%)' }}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-shape hero-shape-3" />
        <div className="hero-shape hero-shape-4" />
        <div className="hero-shape hero-shape-5" />
      </div>

      {/* Particles */}
      <div ref={particleRef} className="absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <TypedBadge />

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.15] mb-5">
              Build{' '}
              <span className="gradient-text">Powerful Websites</span>
              {' '}&amp; Cloud Solutions That{' '}
              <span className="gradient-text">Grow Your Business</span>
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
              JK Cloud Technologies delivers world-class web development, cloud infrastructure, and digital transformation services tailored for modern businesses.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 mb-10">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-6">
                  <StatItem {...s} />
                  {i < stats.length - 1 && <div className="w-px h-10 bg-slate-200" />}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaPaperPlane /> Get Free Quote
              </motion.a>
              <motion.a
                href="#services"
                className="btn-outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaEye /> View Services
              </motion.a>
            </div>

            {/* Trust avatars */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {['A','B','C','D'].map((l, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center
                               text-white text-xs font-bold -ml-2 first:ml-0"
                    style={{ background: ['#3b82f6','#7c3aed','#06b6d4','#10b981'][i] }}
                  >
                    {l}
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center
                                bg-slate-800 text-white text-[10px] font-bold -ml-2">
                  +96
                </div>
              </div>
              <span className="text-sm text-slate-500">Trusted by 100+ businesses</span>
            </div>
          </motion.div>

          {/* ── Right: Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative flex items-center justify-center h-[480px]"
          >
            {/* Blurred orbs */}
            <div className="absolute top-0 right-0 w-52 h-52 rounded-full bg-primary-500/30 blur-3xl animate-pulse" />
            <div className="absolute bottom-10 left-0 w-40 h-40 rounded-full bg-accent-600/25 blur-3xl animate-pulse delay-1000" />

            {/* Code card */}
            <div className="glass-card p-5 w-72 absolute top-12 left-1/2 -translate-x-1/2 z-20">
              <div className="flex gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="font-mono text-sm space-y-1">
                <div><span className="code-tag">&lt;div</span> <span className="code-attr">class=</span><span className="code-val">"cloud"</span><span className="code-tag">&gt;</span></div>
                <div className="pl-4"><span className="code-tag">&lt;h1&gt;</span><span className="code-text">JK Cloud</span><span className="code-tag">&lt;/h1&gt;</span></div>
                <div className="pl-4"><span className="code-comment">// Building the future...</span></div>
                <div><span className="code-tag">&lt;/div&gt;</span></div>
              </div>
            </div>

            {/* Floating badges */}
            {[
              { icon: <FaCloud />, text: 'Cloud Ready',   pos: 'top-6 right-8',    color: 'text-primary-500',  delay: '0s' },
              { icon: '🔒',        text: 'Secure',        pos: 'bottom-36 left-4', color: 'text-emerald-500',  delay: '1s' },
              { icon: <FaStar />,  text: 'Fast Loading',  pos: 'bottom-44 right-4',color: 'text-amber-500',    delay: '0.5s' },
            ].map(({ icon, text, pos, color, delay }) => (
              <div
                key={text}
                className={`absolute ${pos} glass-card px-4 py-2 flex items-center gap-2 text-sm font-semibold ${color} z-20`}
                style={{ animation: `float 3s ease-in-out infinite ${delay}` }}
              >
                {icon} {text}
              </div>
            ))}

            {/* Orbiting icon cluster */}
            <div className="relative w-48 h-48 absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full overflow-hidden border-3 border-white shadow-xl z-10">
                <img src="/logo.jpeg" alt="JK Cloud" className="w-full h-full object-cover" />
              </div>
              <div className="orbit-icon orbit-icon-1 text-orange-500"><FaHtml5 /></div>
              <div className="orbit-icon orbit-icon-2 text-blue-500"><FaCss3Alt /></div>
              <div className="orbit-icon orbit-icon-3 text-yellow-500"><FaJs /></div>
              <div className="orbit-icon orbit-icon-4 text-primary-500"><FaCloud /></div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 animate-scrollBounce flex flex-col items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary-500" />
        <span className="text-xs text-slate-400">Scroll to explore</span>
      </div>
    </section>
  )
}
