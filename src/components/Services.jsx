import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaLaptopCode, FaBriefcase, FaCartShopping, FaRocket, FaIdCard, FaCode,
  FaCloud, FaGaugeHigh, FaPaintbrush, FaScrewdriverWrench, FaMagnifyingGlass,
  FaBolt, FaServer, FaPlug, FaDatabase, FaCreditCard, FaShield, FaMobileScreen,
  FaArrowRight,
} from 'react-icons/fa6'
import { services } from '../data/index'

const ICON_MAP = {
  FaLaptopCode, FaBriefcase, FaCartShopping, FaRocket, FaIdCard, FaCode,
  FaCloud, FaGaugeHigh, FaPaintbrush, FaScrewdriverWrench, FaMagnifyingGlass,
  FaBolt, FaServer, FaPlug, FaDatabase, FaCreditCard, FaShield, FaMobileScreen,
}

const FILTERS = [
  { key: 'all',    label: 'All Services' },
  { key: 'web',    label: 'Web Dev' },
  { key: 'cloud',  label: 'Cloud' },
  { key: 'design', label: 'Design' },
  { key: 'seo',    label: 'SEO & Speed' },
]

export default function Services() {
  const [filter, setFilter] = useState('all')

  const visible = filter === 'all' ? services : services.filter(s => s.category === filter)

  return (
    <section id="services" className="py-24" style={{ background:'linear-gradient(135deg, #f8faff, #f0f4ff)' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          className="text-center mb-10"
        >
          <span className="section-badge">What We Offer</span>
          <h2 className="section-title">Our <span className="gradient-text">Premium Services</span></h2>
          <p className="section-subtitle">End-to-end digital solutions crafted with precision, performance, and purpose.</p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`filter-btn ${filter === f.key ? 'filter-btn-active' : ''}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          <AnimatePresence>
            {visible.map((s, i) => {
              const Icon = ICON_MAP[s.icon]
              return (
                <motion.div
                  key={s.id}
                  layout
                  initial={{ opacity:0, scale:0.9 }}
                  animate={{ opacity:1, scale:1 }}
                  exit={{ opacity:0, scale:0.9 }}
                  transition={{ duration:0.35, delay: i * 0.04 }}
                  whileHover={{ y:-8 }}
                  className="glass-card p-6 group relative overflow-hidden flex flex-col cursor-default"
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }}
                  />
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]"
                    style={{ background: s.color + '18', color: s.color }}
                  >
                    {Icon && <Icon />}
                  </div>
                  <h5 className="font-bold text-slate-900 text-sm mb-2 leading-tight">{s.title}</h5>
                  <p className="text-slate-500 text-xs leading-relaxed flex-1">{s.desc}</p>
                  <a
                    href="#contact"
                    className="mt-3 text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 hover:gap-3"
                    style={{ color: s.color }}
                  >
                    Learn More <FaArrowRight className="text-[10px]" />
                  </a>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
