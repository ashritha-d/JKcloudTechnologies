import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaLaptopCode, FaCloud, FaMobileScreen, FaBullhorn, FaPaintbrush,
  FaArrowRight, FaHeadset,
} from 'react-icons/fa6'
import useCounter from '../hooks/useCounter'

// RADIUS must match SVG circle r value below (both 130)
const RADIUS = 130
const SVG_SIZE = 420

const BADGES = [
  { icon: FaLaptopCode,   label: 'Web\nDevelopment',   color: '#3b82f6', bg: '#eff6ff', angle: -50 },
  { icon: FaCloud,        label: 'Cloud\nSolutions',    color: '#7c3aed', bg: '#f5f3ff', angle:  25 },
  { icon: FaMobileScreen, label: 'Mobile\nDev',         color: '#f59e0b', bg: '#fffbeb', angle: 110 },
  { icon: FaBullhorn,     label: 'Digital\nMarketing',  color: '#10b981', bg: '#f0fdf4', angle: 200 },
  { icon: FaPaintbrush,   label: 'UI/UX\nDesign',       color: '#ec4899', bg: '#fdf2f8', angle: 270 },
]

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
    <section id="home" className="bg-white py-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
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

            <div className="flex flex-wrap gap-4 mb-12">
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

            <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-100">
              {[
                { count: 150, suffix: '+', label: 'Projects Completed',  icon: '🏆' },
                { count: 98,  suffix: '%', label: 'Client Satisfaction', icon: '❤️' },
                { count: 50,  suffix: '+', label: 'Happy Clients',       icon: '👥' },
                { count: 5,   suffix: '+', label: 'Years Experience',    icon: '🚀' },
              ].map(s => <StatItem key={s.label} {...s} />)}
            </div>
          </motion.div>

          {/* ── Right: Circular Diagram ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            {/*
              Outer wrapper is intentionally wider/taller than the SVG box
              so badges that sit at the circle edge have room without clipping.
            */}
            <div className="relative" style={{ width: '420px', height: '420px' }}>

              {/* SVG: dashed circle + connector lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
                overflow="visible"
              >
                {/* Dashed orbit ring — same radius as RADIUS constant */}
                <circle
                  cx={SVG_SIZE / 2} cy={SVG_SIZE / 2} r={RADIUS}
                  fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="6 5"
                />
                {/* Connector lines from center to badge positions */}
                {BADGES.map(b => {
                  const rad = b.angle * Math.PI / 180
                  return (
                    <line
                      key={b.label}
                      x1={SVG_SIZE / 2} y1={SVG_SIZE / 2}
                      x2={SVG_SIZE / 2 + Math.cos(rad) * RADIUS}
                      y2={SVG_SIZE / 2 + Math.sin(rad) * RADIUS}
                      stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 4"
                    />
                  )
                })}
              </svg>

              {/* Center logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20
                              w-36 h-36 rounded-full bg-white shadow-2xl border-4 border-white
                              flex items-center justify-center">
                <img src="/logo.jpeg" alt="JK Cloud" className="w-28 h-28 rounded-full object-cover" />
              </div>

              {/* Service badges — centered on the circle edge */}
              {BADGES.map((b, i) => {
                const rad = b.angle * Math.PI / 180
                // Convert SVG coords to % of container
                const leftPct = ((SVG_SIZE / 2 + Math.cos(rad) * RADIUS) / SVG_SIZE) * 100
                const topPct  = ((SVG_SIZE / 2 + Math.sin(rad) * RADIUS) / SVG_SIZE) * 100
                const Icon = b.icon
                return (
                  <motion.div
                    key={b.label}
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
                    className="absolute flex items-center gap-2.5 bg-white rounded-2xl shadow-xl
                               px-3 py-2.5 z-10 border border-slate-100"
                    style={{
                      left: `${leftPct}%`,
                      top:  `${topPct}%`,
                      transform: 'translate(-50%, -50%)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-base"
                      style={{ background: b.bg, color: b.color }}
                    >
                      <Icon />
                    </div>
                    <span
                      className="text-xs font-bold text-slate-700 leading-tight"
                      style={{ whiteSpace: 'pre-line' }}
                    >
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
