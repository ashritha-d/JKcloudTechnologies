import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaLaptopCode, FaCloud, FaMobileScreen, FaBullhorn, FaPaintbrush,
  FaArrowRight, FaHeadset,
} from 'react-icons/fa6'
import useCounter from '../hooks/useCounter'

const ORBIT_R  = 125
const BADGE_R  = 175
const SVG_SIZE = 460

// Each badge can override radius (r) to fine-tune position independently
const BADGES = [
  { icon: FaLaptopCode,   label: 'Web\nDevelopment',  color: '#3b82f6', bg: '#eff6ff', angle: 264, r: BADGE_R      },
  { icon: FaCloud,        label: 'Cloud\nSolutions',   color: '#7c3aed', bg: '#f5f3ff', angle: 315, r: BADGE_R      },
  { icon: FaBullhorn,     label: 'Digital\nMarketing', color: '#10b981', bg: '#f0fdf4', angle:  20, r: BADGE_R      },
  { icon: FaPaintbrush,   label: 'UI/UX\nDesign',      color: '#ec4899', bg: '#fdf2f8', angle:  90, r: BADGE_R      },
  { icon: FaMobileScreen, label: 'Mobile\nDev',        color: '#f59e0b', bg: '#fffbeb', angle: 180, r: BADGE_R + 35 },
]

function badgePos(angle, r) {
  const rad = angle * Math.PI / 180
  return {
    left: ((SVG_SIZE / 2 + Math.cos(rad) * r) / SVG_SIZE) * 100,
    top:  ((SVG_SIZE / 2 + Math.sin(rad) * r) / SVG_SIZE) * 100,
  }
}

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
      <div className="text-2xl">{icon}</div>
      <div>
        <div className="text-xl font-black text-slate-900 leading-none">{val}{suffix}</div>
        <div className="text-xs text-slate-400 font-medium">{label}</div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="bg-white py-10 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* ── Left ── */}
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

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.1] mb-5">
              Digital Solutions<br />
              <span className="gradient-text">That Drive Growth</span>
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
              We help businesses transform ideas into powerful digital experiences
              with cutting-edge technology and innovative solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <motion.a href="#services" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="btn-primary">
                Explore Services <FaArrowRight className="text-sm" />
              </motion.a>
              <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="btn-outline">
                Contact Us <FaHeadset className="text-sm" />
              </motion.a>
            </div>

            <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-100">
              {[
                { count: 150, suffix: '+', label: 'Projects Done',      icon: '🏆' },
                { count: 98,  suffix: '%', label: 'Satisfaction',       icon: '❤️' },
                { count: 50,  suffix: '+', label: 'Happy Clients',      icon: '👥' },
                { count: 5,   suffix: '+', label: 'Years Experience',   icon: '🚀' },
              ].map(s => <StatItem key={s.label} {...s} />)}
            </div>
          </motion.div>

          {/* ── Right: Orbital diagram ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
            style={{ overflow: 'visible' }}
          >
            <div
              className="relative"
              style={{ width: SVG_SIZE + 'px', height: SVG_SIZE + 'px', overflow: 'visible' }}
            >
              {/* SVG: two decorative circles + connector lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
                overflow="visible"
              >
                {/* Outer faint dashed ring */}
                <circle
                  cx={SVG_SIZE / 2} cy={SVG_SIZE / 2} r={BADGE_R + 20}
                  fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="6 5"
                />
                {/* Inner orbit ring (between logo and badges) */}
                <circle
                  cx={SVG_SIZE / 2} cy={SVG_SIZE / 2} r={ORBIT_R}
                  fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="6 5"
                />
                {/* Connector lines from centre to each badge */}
                {BADGES.map(b => {
                  const rad = b.angle * Math.PI / 180
                  return (
                    <line key={b.angle}
                      x1={SVG_SIZE / 2} y1={SVG_SIZE / 2}
                      x2={SVG_SIZE / 2 + Math.cos(rad) * b.r}
                      y2={SVG_SIZE / 2 + Math.sin(rad) * b.r}
                      stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 4"
                    />
                  )
                })}
              </svg>

              {/* Centre logo — gradient ring */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                           rounded-full flex items-center justify-center"
                style={{
                  width: '160px', height: '160px', zIndex: 20,
                  background: 'linear-gradient(135deg, #3b82f6 0%, #7c3aed 60%, #3b82f6 100%)',
                  padding: '4px',
                }}
              >
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-lg">
                  <img src="/logo.jpeg" alt="JK Cloud" className="w-32 h-32 rounded-full object-cover" />
                </div>
              </div>

              {/* Service badges — z-30 so they're always above the centre circle */}
              {BADGES.map((b, i) => {
                const { left, top } = badgePos(b.angle, b.r)
                const Icon = b.icon
                return (
                  <motion.div
                    key={b.angle}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
                    className="absolute flex items-center gap-2.5 bg-white rounded-2xl shadow-xl
                               px-3 py-2.5 border border-slate-100"
                    style={{
                      left: `${left}%`,
                      top:  `${top}%`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: 30,
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-base"
                      style={{ background: b.bg, color: b.color }}
                    >
                      <Icon />
                    </div>
                    <span className="text-xs font-bold text-slate-700 leading-snug whitespace-pre-line">
                      {b.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
