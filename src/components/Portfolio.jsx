import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaGlobe, FaCloud, FaChartBar, FaBagShopping, FaGears, FaHospital, FaArrowUpRightFromSquare,
} from 'react-icons/fa6'
import { portfolio } from '../data/index'

const ICON_MAP = { FaGlobe, FaCloud, FaChartBar, FaBagShopping, FaGears, FaHospital }

const FILTERS = [
  { key:'all',       label:'All' },
  { key:'website',   label:'Website' },
  { key:'cloud',     label:'Cloud' },
  { key:'dashboard', label:'Dashboard' },
  { key:'ecommerce', label:'E-Commerce' },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? portfolio : portfolio.filter(p => p.category === filter)

  return (
    <section id="portfolio" className="py-24" style={{ background:'linear-gradient(135deg, #f8faff, #f0f4ff)' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          className="text-center mb-10"
        >
          <span className="section-badge">Our Work</span>
          <h2 className="section-title">Featured <span className="gradient-text">Portfolio</span></h2>
          <p className="section-subtitle">A showcase of our finest work — each project delivered with passion and precision.</p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {FILTERS.map(f => (
            <button key={f.key} onClick={() => setFilter(f.key)} className={`filter-btn ${filter === f.key ? 'filter-btn-active' : ''}`}>
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visible.map((item, i) => {
              const Icon = ICON_MAP[item.icon]
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity:0, scale:0.9 }}
                  animate={{ opacity:1, scale:1 }}
                  exit={{ opacity:0, scale:0.9 }}
                  transition={{ duration:0.35, delay: i * 0.07 }}
                  className="rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Thumb */}
                  <div
                    className={`h-52 flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${item.grad}`}
                  >
                    {Icon && <Icon className="text-white/20 text-6xl transition-all duration-300 group-hover:opacity-0 group-hover:scale-75" />}

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300
                                    flex flex-col items-center justify-center gap-3 p-6 text-center">
                      <h5 className="text-white font-bold text-lg">{item.title}</h5>
                      <p className="text-white/70 text-sm">{item.sub}</p>
                      <a
                        href="#contact"
                        className="mt-2 bg-white text-primary-500 px-5 py-2 rounded-full text-sm font-semibold
                                   flex items-center gap-2 hover:bg-primary-500 hover:text-white transition-all duration-200"
                      >
                        <FaArrowUpRightFromSquare className="text-xs" /> View Project
                      </a>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="bg-white border border-slate-100 px-5 py-4 flex items-center justify-between">
                    <div>
                      <h6 className="font-semibold text-slate-900 text-sm">{item.title}</h6>
                    </div>
                    <span className="text-xs bg-gradient-to-r from-primary-500/10 to-accent-600/10 text-primary-500 px-3 py-1 rounded-full font-semibold capitalize">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12">
          <motion.a href="#contact" className="btn-primary" whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}>
            View All Projects
          </motion.a>
        </div>
      </div>
    </section>
  )
}
