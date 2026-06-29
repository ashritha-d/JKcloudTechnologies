import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCircleQuestion, FaChevronDown } from 'react-icons/fa6'
import { faqs } from '../data/index'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-24" style={{ background:'linear-gradient(135deg,#f8faff,#f0f4ff)' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Got Questions?</span>
          <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="section-subtitle">Everything you need to know about our services and process.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.45, delay: i * 0.06 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className={`w-full flex items-center gap-3 px-6 py-5 text-left transition-all duration-200
                  ${open === i ? 'bg-gradient-to-r from-primary-500/6 to-accent-600/6' : 'hover:bg-slate-50'}`}
              >
                <FaCircleQuestion className={`flex-shrink-0 text-sm ${open === i ? 'text-primary-500' : 'text-slate-400'}`} />
                <span className={`flex-1 font-semibold text-sm ${open === i ? 'text-primary-500' : 'text-slate-800'}`}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration:0.25 }}
                  className={`flex-shrink-0 text-xs ${open === i ? 'text-primary-500' : 'text-slate-400'}`}
                >
                  <FaChevronDown />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height:0, opacity:0 }}
                    animate={{ height:'auto', opacity:1 }}
                    exit={{ height:0, opacity:0 }}
                    transition={{ duration:0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
