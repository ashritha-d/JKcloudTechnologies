import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaLaptopCode, FaCloud, FaMobileScreen, FaBullhorn, FaPaintbrush,
  FaArrowRight, FaHeadset,
} from 'react-icons/fa6'
import useCounter from '../hooks/useCounter'

const BADGES = [
  { icon: FaLaptopCode,  label: 'Web\nDevelopment',   color: '#3b82f6', bg: '#eff6ff', angle: -55 },
  { icon: FaCloud,       label: 'Cloud\nSolutions',    color: '#7c3aed', bg: '#f5f3ff', angle: 20  },
  { icon: FaMobileScreen,label: 'Mobile\nDevelopment', color: '#f59e0b', bg: '#fffbeb', angle: 105 },
  { icon: FaBullhorn,    label: 'Digital\nMarketing',  color: '#10b981', bg: '#f0fdf4', angle: 190 },
  { icon: FaPaintbrush,  label: 'UI/UX\nDesign',       color: '#ec4899', bg: '#fdf2f8', angle: 270 },
]

const RADIUS = 155

function StatItem({ count, suffix, label, icon }) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)
  const val = useCounter(count, 2000, inView)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="flex items-center gap-2.5">
      <div className="text-2xl text-primary-400">{icon}</div>
      <div>
        <div className="text-xl font-black text-slate-900 leading-none">{val}{suffix}</div>
        <div className="text-xs text-slate-400 font-medium">{label}</div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-white pt-6 overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)]">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-500 tracking-[3px] uppercase">
                Innovate • Build • Grow
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              Digital Solutions<br />
              <span className="gradient-text">That Drive Growth</span>
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-lg">
              We help businesses transform ideas into powerful digital experiences with cutting-edge technology and innovative solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
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

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-100">
              {[
                { count:150, suffix:'+', label:'Projects Completed',  icon:'🏆' },
                { count:98,  suffix:'%', label:'Client Satisfaction', icon:'❤️' },
                { count:50,  suffix:'+', label:'Happy Clients',       icon:'👥' },
                { count:5,   suffix:'+', label:'Years Experience',    icon:'🚀' },
              ].map(s => <StatItem key={s.label} {...s} />)}
            </div>
          </motion.div>

          {/* ── Right: Circular Logo Diagram ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-[380px] h-[380px] lg:w-[420px] lg:h-[420px]">

              {/* SVG: dashed circle + connector lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 420 420"
              >
                {/* Outer dashed circle */}
                <circle cx="210" cy="210" r="190" fill="none"
                  stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="5 5" />
                {/* Connector lines from center to each badge */}
                {BADGES.map(b => {
                  const rad = b.angle * Math.PI / 180
                  return (
                    <line key={b.label}
                      x1="210" y1="210"
                      x2={210 + Math.cos(rad) * RADIUS}
                      y2={210 + Math.sin(rad) * RADIUS}
                      stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4"
                    />
                  )
                })}
              </svg>

              {/* Center logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                              w-36 h-36 rounded-full bg-white shadow-2xl
                              flex flex-col items-center justify-center
                              border-4 border-white z-20">
                <img src="/logo.jpeg" alt="JK Cloud" className="w-24 h-24 rounded-full object-cover" />
              </div>

              {/* Orbiting service badges */}
              {BADGES.map((b, i) => {
                const rad = b.angle * Math.PI / 180
                const cx = 50 + (Math.cos(rad) * RADIUS / 420) * 100
                const cy = 50 + (Math.sin(rad) * RADIUS / 420) * 100
                const Icon = b.icon
                return (
                  <motion.div
                    key={b.label}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                    className="absolute flex items-center gap-2 bg-white rounded-2xl shadow-lg px-3 py-2.5 z-10 border border-slate-100"
                    style={{
                      left: `${cx}%`,
                      top:  `${cy}%`,
                      transform: 'translate(-50%, -50%)',
                      minWidth: '120px',
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: b.bg, color: b.color }}
                    >
                      <Icon className="text-base" />
                    </div>
                    <span className="text-xs font-bold text-slate-700 leading-tight whitespace-pre-line">
                      {b.label}
                    </span>
                  </motion.div>
                )
              })}

              {/* Decorative dots */}
              <div className="absolute top-4 left-8 w-3 h-3 rounded-full bg-primary-200" />
              <div className="absolute bottom-8 right-4 w-2 h-2 rounded-full bg-accent-300" />
              <div className="absolute top-1/3 right-2 w-2 h-2 rounded-full bg-emerald-300" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
