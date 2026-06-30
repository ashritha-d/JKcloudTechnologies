import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaHeadset } from 'react-icons/fa6'
import useCounter from '../hooks/useCounter'

// ── Replace with your actual promotional video URL ──────────────────────────
const VIDEO_SRC  = 'https://res.cloudinary.com/demo/video/upload/v1611171218/samples/cld-sample-video.mp4'
const VIDEO_WEBM = ''          // optional WebM for better compression
const VIDEO_POSTER = '/logo.jpeg'
// ────────────────────────────────────────────────────────────────────────────

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

function HeroVideo() {
  const videoRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches && videoRef.current) videoRef.current.pause()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
      style={{ maxWidth: 620 }}
      aria-label="JK Cloud Technologies product showcase"
    >
      {/* Ambient glow behind the card */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-25"
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
          borderRadius: 24,
          transform: 'scale(0.92) translateY(16px)',
        }}
      />

      {/* Outer glass card */}
      <motion.div
        whileHover={{ y: -8, boxShadow: '0 32px 80px rgba(59,130,246,0.22), 0 0 0 1px rgba(255,255,255,0.12)' }}
        transition={{ duration: 0.35 }}
        style={{
          borderRadius: 18,
          background: 'linear-gradient(145deg, #172D47, #0f1e35)',
          border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(12px)',
          padding: 18,
          boxShadow: '0 20px 60px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.05)',
        }}
      >
        {/* Fake browser chrome */}
        <div className="flex items-center gap-1.5 mb-4 px-1">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
          <div className="flex-1 mx-3">
            <div
              className="flex items-center justify-center h-5 rounded-full text-[9px] font-medium"
              style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.35)' }}
            >
              jkcloudtech.com
            </div>
          </div>
          <div
            className="w-4 h-4 rounded flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            <div className="w-1.5 h-1.5 rounded-sm" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>

        {/* Video element */}
        <div style={{ borderRadius: 12, overflow: 'hidden', background: '#0a1628' }}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={VIDEO_POSTER}
            aria-label="JK Cloud Technologies showcase video"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: 12,
              objectFit: 'cover',
              aspectRatio: '16/9',
            }}
          >
            {VIDEO_WEBM && <source src={VIDEO_WEBM} type="video/webm" />}
            <source src={VIDEO_SRC}  type="video/mp4" />
          </video>
        </div>

        {/* Bottom status bar */}
        <div className="mt-3.5 px-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#3b82f6,#7c3aed)' }}
            >
              <img src="/logo.jpeg" alt="" className="w-full h-full rounded-full object-cover opacity-80" />
            </div>
            <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11, fontWeight: 500 }}>
              JK Cloud Technologies
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className="animate-pulse inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: '#4ade80' }}
            />
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10 }}>Live</span>
          </div>
        </div>
      </motion.div>

      {/* Floating metric chips */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        animate-float
        className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-3.5 py-2.5
                   border border-slate-100 flex items-center gap-2 hidden sm:flex"
      >
        <div className="w-7 h-7 rounded-xl flex items-center justify-center text-sm"
             style={{ background: '#eff6ff' }}>🏆</div>
        <div>
          <div className="text-xs font-black text-slate-900 leading-none">200+</div>
          <div className="text-[10px] text-slate-400">Projects</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-3.5 py-2.5
                   border border-slate-100 flex items-center gap-2 hidden sm:flex"
      >
        <div className="w-7 h-7 rounded-xl flex items-center justify-center text-sm"
             style={{ background: '#f0fdf4' }}>⭐</div>
        <div>
          <div className="text-xs font-black text-slate-900 leading-none">100%</div>
          <div className="text-[10px] text-slate-400">Satisfaction</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="bg-white py-10 lg:py-16 overflow-x-clip">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
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
              <motion.a
                href="#services"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                Explore Services <FaArrowRight className="text-sm" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="btn-outline"
              >
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

          {/* ── Right: Video ── */}
          <div className="flex items-center justify-center lg:justify-end">
            <HeroVideo />
          </div>

        </div>
      </div>
    </section>
  )
}
