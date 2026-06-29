import { motion } from 'framer-motion'
import {
  FaMagnifyingGlass, FaClipboardList, FaPaintbrush, FaCode, FaRocket,
} from 'react-icons/fa6'

const STEPS = [
  { num: '01', icon: FaMagnifyingGlass, title: 'Discover',  color: '#3b82f6', bg: '#eff6ff', desc: 'We dive deep into your business goals, audience, and competition to understand exactly what you need.' },
  { num: '02', icon: FaClipboardList,   title: 'Plan',      color: '#7c3aed', bg: '#f5f3ff', desc: 'Our team creates a detailed roadmap with timelines, milestones, and technology stack selection.' },
  { num: '03', icon: FaPaintbrush,      title: 'Design',    color: '#ec4899', bg: '#fdf2f8', desc: 'We craft stunning, user-centered UI/UX designs with prototypes you can review and approve.' },
  { num: '04', icon: FaCode,            title: 'Develop',   color: '#10b981', bg: '#f0fdf4', desc: 'Our engineers build your solution using the latest technologies with clean, maintainable code.' },
  { num: '05', icon: FaRocket,          title: 'Deliver',   color: '#f59e0b', bg: '#fffbeb', desc: 'We launch, test, and hand over your project with full documentation and ongoing support.' },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">How We Work</span>
          <h2 className="section-title">
            Our Simple <span className="gradient-text">5-Step Process</span>
          </h2>
          <p className="section-subtitle">
            A transparent, structured approach that delivers results on time — every time.
          </p>
        </motion.div>

        {/* Horizontal steps */}
        <div className="relative">
          {/* Dotted connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px border-t-2 border-dashed border-slate-300 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative w-[104px] h-[104px] rounded-full bg-white shadow-lg border-2 border-slate-100
                               flex items-center justify-center mb-5 group-hover:border-transparent transition-all duration-300"
                    style={{ boxShadow: `0 8px 30px ${step.color}22` }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110"
                      style={{ background: step.bg, color: step.color }}
                    >
                      <Icon />
                    </div>
                    {/* Step number badge */}
                    <span
                      className="absolute -top-1 -right-1 w-7 h-7 rounded-full text-[11px] font-black text-white flex items-center justify-center"
                      style={{ background: step.color }}
                    >
                      {step.num}
                    </span>
                  </motion.div>

                  <h5 className="font-black text-slate-900 text-base mb-2">{step.title}</h5>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
