import { motion } from 'framer-motion'
import {
  FaMagnifyingGlassPlus, FaClipboardList, FaPencil,
  FaCode, FaVials, FaRocket, FaHeadset,
} from 'react-icons/fa6'
import { processSteps } from '../data/index'

const ICON_MAP = { FaMagnifyingGlassPlus, FaClipboardList, FaPencilRuler: FaPencil, FaCode, FaVials, FaRocket, FaHeadset }

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">How We Work</span>
          <h2 className="section-title">Our <span className="gradient-text">Development Process</span></h2>
          <p className="section-subtitle">A structured, transparent approach that delivers results on time, every time.</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="timeline-connector hidden md:block" />

          <div className="flex flex-col gap-10">
            {processSteps.map((step, i) => {
              const Icon = ICON_MAP[step.icon] || FaCode
              const isEven = i % 2 === 1

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity:0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }}
                  transition={{ duration:0.55, delay: i * 0.09 }}
                  className={`flex items-center gap-6 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Icon bubble */}
                  <div className="relative flex-shrink-0 z-10">
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-[10px] font-extrabold text-white flex items-center justify-center bg-gradient-to-r from-primary-500 to-accent-600 z-20">
                      {step.num}
                    </span>
                    <motion.div
                      whileHover={{ scale:1.12, rotate:-5 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-600
                                 flex items-center justify-center text-white text-xl
                                 shadow-[0_8px_24px_rgba(59,130,246,0.3)]"
                    >
                      <Icon />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ y:-4 }}
                    className={`flex-1 glass-card p-5 ${isEven ? 'md:text-right' : ''}`}
                  >
                    <h5 className="font-bold text-slate-900 mb-1.5">{step.title}</h5>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
