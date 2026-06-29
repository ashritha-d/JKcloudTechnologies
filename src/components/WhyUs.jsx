import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaPalette, FaGaugeHigh, FaMagnifyingGlass, FaLock,
  FaMobileScreen, FaCloudArrowUp, FaTags, FaHeadset,
} from 'react-icons/fa6'
import useCounter from '../hooks/useCounter'
import { whyUs, bigStats } from '../data/index'

const ICON_MAP = { FaPalette, FaGaugeHigh, FaMagnifyingGlass, FaLock, FaMobileScreen, FaCloudArrowUp, FaTags, FaHeadset }

function BigStat({ count, suffix, label }) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)
  const val = useCounter(count, 2000, inView)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex-1 min-w-[120px] py-10 px-5 text-center border-r border-white/15 last:border-r-0">
      <div className="text-4xl font-black text-white leading-none">{val}<span className="text-white/70">{suffix}</span></div>
      <div className="text-sm text-white/60 font-medium mt-2">{label}</div>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24" style={{ background:'linear-gradient(135deg, #f8faff, #f0f4ff)' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Our Advantages</span>
          <h2 className="section-title">Why Choose <span className="gradient-text">JK Cloud Technologies</span></h2>
          <p className="section-subtitle">We don't just build websites — we build digital experiences that convert.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {whyUs.map(({ icon, grad, title, desc }, i) => {
            const Icon = ICON_MAP[icon]
            return (
              <motion.div
                key={title}
                initial={{ opacity:0, scale:0.9 }}
                whileInView={{ opacity:1, scale:1 }}
                viewport={{ once:true }}
                transition={{ duration:0.45, delay: i * 0.07 }}
                whileHover={{ y:-8 }}
                className="glass-card p-7 text-center group"
              >
                <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${grad}
                                flex items-center justify-center text-white text-xl mx-auto mb-4
                                transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-10deg]`}>
                  {Icon && <Icon />}
                </div>
                <h5 className="font-bold text-slate-900 mb-2">{title}</h5>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Big stats row */}
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6, delay:0.2 }}
          className="mt-16 rounded-2xl overflow-hidden flex flex-wrap"
          style={{ background:'linear-gradient(135deg,#1a56db,#7c3aed)' }}
        >
          {bigStats.map(s => <BigStat key={s.label} {...s} />)}
        </motion.div>
      </div>
    </section>
  )
}
