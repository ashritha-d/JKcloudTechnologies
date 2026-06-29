import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaStarHalfStroke, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { testimonials } from '../data/index'

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 text-amber-400 text-sm mb-4">
      {Array.from({ length: Math.floor(count) }).map((_, i) => <FaStar key={i} />)}
      {count % 1 !== 0 && <FaStarHalfStroke />}
    </div>
  )
}

const SLIDES = [
  [0, 1, 2],
  [3, 4, 5],
]

export default function Testimonials() {
  const [slide, setSlide] = useState(0)
  const [dir,   setDir]   = useState(1)

  const go = (next) => {
    setDir(next > slide ? 1 : -1)
    setSlide(next)
  }

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Client Stories</span>
          <h2 className="section-title">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="section-subtitle">Real words from real clients — the relationships we build are our greatest achievement.</p>
        </motion.div>

        <div className="relative px-12">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={slide}
              custom={dir}
              initial={{ opacity:0, x: dir * 60 }}
              animate={{ opacity:1, x:0 }}
              exit={{ opacity:0, x: dir * -60 }}
              transition={{ duration:0.45 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {SLIDES[slide].map(idx => {
                const t = testimonials[idx]
                const isFeatured = idx === 1 || idx === 4
                return (
                  <motion.div
                    key={t.name}
                    whileHover={{ y:-6 }}
                    transition={{ duration:0.3 }}
                    className={`rounded-2xl p-7 transition-all duration-300
                      ${isFeatured
                        ? 'text-white shadow-[0_16px_64px_rgba(59,130,246,0.2)]'
                        : 'glass-card'
                      }`}
                    style={isFeatured ? { background:'linear-gradient(135deg,#1e1b4b,#1e3a8a)' } : {}}
                  >
                    <Stars count={t.stars} />
                    <p className={`text-sm leading-relaxed mb-5 italic ${isFeatured ? 'text-white/80' : 'text-slate-600'}`}>
                      {t.text}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 bg-gradient-to-r ${t.grad}`}>
                        {t.initials}
                      </div>
                      <div>
                        <strong className={`block text-sm font-bold ${isFeatured ? 'text-white' : 'text-slate-900'}`}>{t.name}</strong>
                        <span className={`text-xs ${isFeatured ? 'text-white/60' : 'text-slate-400'}`}>{t.role}</span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Arrow buttons */}
          {[
            { dir:-1, icon:<FaChevronLeft />, pos:'left-0', next: slide === 0 ? SLIDES.length-1 : slide-1 },
            { dir: 1, icon:<FaChevronRight />, pos:'right-0', next: (slide+1) % SLIDES.length },
          ].map(btn => (
            <button
              key={btn.pos}
              onClick={() => go(btn.next)}
              className={`absolute ${btn.pos} top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
                          bg-white shadow-lg flex items-center justify-center text-primary-500
                          hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-600 hover:text-white
                          transition-all duration-300`}
            >
              {btn.icon}
            </button>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`testimonial-dot ${i === slide ? 'testimonial-dot-active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
