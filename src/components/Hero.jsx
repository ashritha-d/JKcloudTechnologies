import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaHeadset, FaCircleCheck } from 'react-icons/fa6'
import useCounter from '../hooks/useCounter'

/* ── Animated showcase slides ─────────────────────────────────────────────── */
const SLIDES = [
  {
    label: 'Web Development',
    color: '#3b82f6',
    bg: '#eff6ff',
    lines: [
      { w: '70%', c: '#60a5fa' },
      { w: '50%', c: '#a78bfa' },
      { w: '85%', c: '#60a5fa' },
      { w: '40%', c: '#34d399' },
      { w: '60%', c: '#60a5fa' },
    ],
    metrics: [
      { label: 'Performance', val: 98, color: '#3b82f6' },
      { label: 'SEO Score',   val: 95, color: '#7c3aed' },
      { label: 'Speed',       val: 99, color: '#10b981' },
    ],
  },
  {
    label: 'Cloud Solutions',
    color: '#7c3aed',
    bg: '#f5f3ff',
    lines: [
      { w: '60%', c: '#a78bfa' },
      { w: '80%', c: '#60a5fa' },
      { w: '45%', c: '#f472b6' },
      { w: '75%', c: '#a78bfa' },
      { w: '55%', c: '#34d399' },
    ],
    metrics: [
      { label: 'Uptime',    val: 100, color: '#7c3aed' },
      { label: 'Security',  val: 97,  color: '#3b82f6' },
      { label: 'Scalable',  val: 100, color: '#10b981' },
    ],
  },
  {
    label: 'UI/UX Design',
    color: '#ec4899',
    bg: '#fdf2f8',
    lines: [
      { w: '80%', c: '#f472b6' },
      { w: '55%', c: '#a78bfa' },
      { w: '70%', c: '#60a5fa' },
      { w: '90%', c: '#f472b6' },
      { w: '45%', c: '#34d399' },
    ],
    metrics: [
      { label: 'UX Score',    val: 96, color: '#ec4899' },
      { label: 'Engagement',  val: 94, color: '#7c3aed' },
      { label: 'Conversion',  val: 89, color: '#3b82f6' },
    ],
  },
  {
    label: 'SEO Optimization',
    color: '#10b981',
    bg: '#f0fdf4',
    lines: [
      { w: '75%', c: '#34d399' },
      { w: '60%', c: '#60a5fa' },
      { w: '85%', c: '#34d399' },
      { w: '50%', c: '#a78bfa' },
      { w: '70%', c: '#34d399' },
    ],
    metrics: [
      { label: 'Rank #1',    val: 92, color: '#10b981' },
      { label: 'Traffic',    val: 88, color: '#3b82f6' },
      { label: 'ROI',        val: 95, color: '#7c3aed' },
    ],
  },
]

function MetricBar({ label, val, color, delay }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setWidth(val), delay + 300)
    return () => clearTimeout(t)
  }, [val, delay])
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 10, fontWeight: 500 }}>{label}</span>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 10, fontWeight: 700 }}>{val}%</span>
      </div>
      <div style={{ height: 4, borderRadius: 4, background: 'rgba(255,255,255,0.08)' }}>
        <div
          style={{
            height: '100%', borderRadius: 4, background: color,
            width: `${width}%`, transition: 'width 1s cubic-bezier(0.4,0,0.2,1)',
          }}
        />
      </div>
    </div>
  )
}

function AnimatedShowcase() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const DURATION = 3500

  useEffect(() => {
    setProgress(0)
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const pct = Math.min((elapsed / DURATION) * 100, 100)
      setProgress(pct)
      if (pct < 100) requestAnimationFrame(tick)
    }
    const raf = requestAnimationFrame(tick)
    const timer = setTimeout(() => {
      setCurrent(c => (c + 1) % SLIDES.length)
    }, DURATION)
    return () => { cancelAnimationFrame(raf); clearTimeout(timer) }
  }, [current])

  const slide = SLIDES[current]

  return (
    <div
      style={{
        width: '100%', aspectRatio: '16/9',
        background: 'linear-gradient(145deg,#0d1f35,#0a1628)',
        borderRadius: 12, overflow: 'hidden', position: 'relative',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Top toolbar */}
      <div style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <img src="/logo.jpeg" alt="" style={{ width: 20, height: 20, borderRadius: '50%', objectFit: 'cover' }} />
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: 700, letterSpacing: '0.04em' }}>JK Cloud Technologies</span>
        <div style={{ flex: 1 }} />
        <AnimatePresence mode="wait">
          <motion.span
            key={slide.label}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
            style={{
              fontSize: 9, fontWeight: 700, padding: '2px 8px', borderRadius: 20,
              background: slide.color + '22', color: slide.color, letterSpacing: '0.06em',
            }}
          >
            {slide.label.toUpperCase()}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', padding: 14, gap: 12, minHeight: 0 }}>

        {/* Left panel — animated code lines */}
        <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: 9, fontWeight: 600, marginBottom: 4, letterSpacing: '0.06em' }}>
            PROJECT FILES
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 5 }}
            >
              {slide.lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: 'easeOut' }}
                  style={{
                    height: 6, borderRadius: 3,
                    background: line.c + '55',
                    width: line.w,
                  }}
                />
              ))}
              {/* Blinking cursor */}
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ width: 6, height: 10, borderRadius: 1, background: slide.color, marginTop: 2 }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right panel — metrics */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: 9, fontWeight: 600, letterSpacing: '0.06em' }}>
            ANALYTICS
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}
            >
              {slide.metrics.map((m, i) => (
                <MetricBar key={m.label} {...m} delay={i * 150} />
              ))}
              {/* Success badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                style={{
                  marginTop: 'auto', padding: '6px 10px', borderRadius: 8,
                  background: slide.color + '18',
                  border: `1px solid ${slide.color}33`,
                  display: 'flex', alignItems: 'center', gap: 6,
                }}
              >
                <FaCircleCheck style={{ color: slide.color, fontSize: 10, flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 9, fontWeight: 600 }}>
                  Delivered on time
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 2, background: 'rgba(255,255,255,0.06)' }}>
        <div
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${slide.color}, #7c3aed)`,
            width: `${progress}%`,
            transition: 'width 0.1s linear',
          }}
        />
      </div>

      {/* Slide dots */}
      <div style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 5 }}>
        {SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              border: 'none', cursor: 'pointer', padding: 0,
              width: current === i ? 20 : 5,
              height: 5, borderRadius: 3,
              background: current === i ? slide.color : 'rgba(255,255,255,0.15)',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
        <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.3)', fontSize: 9, fontWeight: 500 }}>
          {current + 1} / {SLIDES.length}
        </span>
      </div>
    </div>
  )
}

/* ── StatItem ──────────────────────────────────────────────────────────────── */
function StatItem({ count, suffix, label, icon }) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)
  const val = useCounter(count, 2000, inView)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold: 0.5 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="flex items-center gap-2.5">
      <div className="text-2xl">{icon}</div>
      <div>
        <div className="text-xl font-black text-slate-900 leading-none">{val}{suffix}</div>
        <div className="text-xs text-slate-400 font-medium">{label}</div>
      </div>
    </div>
  )
}

/* ── HeroCard (the showcase container) ────────────────────────────────────── */
function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
      style={{ maxWidth: 580 }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-25 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg,#3b82f6,#7c3aed)',
          borderRadius: 24,
          transform: 'scale(0.92) translateY(20px)',
        }}
      />

      {/* Glass card */}
      <motion.div
        whileHover={{ y: -6, boxShadow: '0 32px 80px rgba(59,130,246,0.2),0 0 0 1px rgba(255,255,255,0.1)' }}
        transition={{ duration: 0.3 }}
        style={{
          borderRadius: 18, padding: 16,
          background: 'linear-gradient(145deg,#172D47,#0f1e35)',
          border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3),0 0 0 1px rgba(255,255,255,0.04)',
        }}
      >
        {/* Browser chrome */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 12, padding: '0 2px' }}>
          {['#ff5f57','#febc2e','#28c840'].map(c => (
            <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
          ))}
          <div style={{ flex: 1, margin: '0 8px' }}>
            <div style={{
              height: 18, borderRadius: 20, background: 'rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'rgba(255,255,255,0.3)', fontSize: 9, fontWeight: 500,
            }}>
              jkcloudtech.com
            </div>
          </div>
          <div style={{ width: 12, height: 12, borderRadius: 3, background: 'rgba(255,255,255,0.06)' }} />
        </div>

        {/* Animated showcase */}
        <AnimatedShowcase />

        {/* Footer */}
        <div style={{ marginTop: 12, padding: '0 2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10, fontWeight: 500 }}>
            Your Digital Growth Partner
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite' }} />
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 9 }}>Live Preview</span>
          </div>
        </div>
      </motion.div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.4 }}
        className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2
                   bg-white rounded-2xl shadow-xl px-3 py-2 border border-slate-100"
      >
        <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs" style={{ background: '#eff6ff' }}>🏆</div>
        <div>
          <div className="text-xs font-black text-slate-900 leading-none">200+</div>
          <div style={{ fontSize: 9 }} className="text-slate-400">Projects</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.4 }}
        className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2
                   bg-white rounded-2xl shadow-xl px-3 py-2 border border-slate-100"
      >
        <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs" style={{ background: '#f0fdf4' }}>⭐</div>
        <div>
          <div className="text-xs font-black text-slate-900 leading-none">100%</div>
          <div style={{ fontSize: 9 }} className="text-slate-400">Satisfaction</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Hero ──────────────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section id="home" className="bg-white py-10 lg:py-16 overflow-x-clip">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-500 tracking-[3px] uppercase">
                Innovate • Build • Grow
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.1] mb-5">
              Digital Solutions<br />
              <span className="gradient-text">That Drive Growth</span>
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
              We help businesses transform ideas into powerful digital experiences
              with cutting-edge technology and innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10">
              <motion.a href="#services" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="btn-primary">
                Explore Services <FaArrowRight className="text-sm" />
              </motion.a>
              <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="btn-outline">
                Contact Us <FaHeadset className="text-sm" />
              </motion.a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-100">
              {[
                { count: 200, suffix: '+', label: 'Projects Done',    icon: '🏆' },
                { count: 100, suffix: '%', label: 'Satisfaction',     icon: '❤️' },
                { count: 100, suffix: '+', label: 'Happy Clients',    icon: '👥' },
                { count: 5,   suffix: '+', label: 'Years Experience', icon: '🚀' },
              ].map(s => <StatItem key={s.label} {...s} />)}
            </div>
          </motion.div>

          {/* Right: Showcase card */}
          <div className="flex items-center justify-center lg:justify-end">
            <HeroCard />
          </div>

        </div>
      </div>
    </section>
  )
}
