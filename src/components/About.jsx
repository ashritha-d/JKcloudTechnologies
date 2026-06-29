import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaCircleCheck, FaArrowRight, FaUsers, FaStar, FaAward } from 'react-icons/fa6'
import useCounter from '../hooks/useCounter'

const CHECKLIST = [
  'Custom web & mobile solutions tailored to your goals',
  'Enterprise-grade cloud infrastructure and DevOps',
  'Expert UI/UX design with user-centered thinking',
  'Dedicated support team available around the clock',
  'Transparent pricing with no hidden costs',
]

function StatCounter({ value, suffix, label }) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)
  const val = useCounter(value, 2000, inView)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="text-center py-4">
      <div className="text-3xl font-black text-white mb-1">{val}{suffix}</div>
      <div className="text-sm text-slate-300 font-medium">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="hidden lg:block py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">About Us</span>
          <h2 className="section-title">
            Who We Are &amp; <span className="gradient-text">What We Do</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-stretch">

          {/* ── Col 1: Text + Checklist ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-black text-slate-900 leading-snug mb-4">
              Empowering Businesses<br />
              <span className="gradient-text">Through Technology</span>
            </h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              JK Cloud Technologies is a full-service IT company helping startups and enterprises build, scale, and grow. We combine technical excellence with creative strategy to deliver digital products that make a real difference.
            </p>

            <ul className="space-y-3 mb-8">
              {CHECKLIST.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <FaCircleCheck className="text-primary-500 mt-0.5 flex-shrink-0 text-base" />
                  <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="btn-primary self-start"
            >
              Work With Us <FaArrowRight className="text-sm" />
            </motion.a>
          </motion.div>

          {/* ── Col 2: Center Image ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/logo.jpeg"
                  alt="JK Cloud Technologies Team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:block absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-slate-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                    <FaAward className="text-base" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900">Premium Quality</div>
                    <div className="text-[10px] text-slate-400">ISO Certified</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="hidden sm:block absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-slate-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                    <FaStar className="text-base" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900">5★ Rated</div>
                    <div className="text-[10px] text-slate-400">By 50+ Clients</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Col 3: Dark Stats Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex rounded-3xl p-8 flex-col justify-around"
            style={{ background: 'linear-gradient(135deg, #0f172a, #1e1b4b)' }}
          >
            <div className="mb-6">
              <h4 className="text-xl font-black text-white mb-2">Our Impact in Numbers</h4>
              <p className="text-slate-400 text-sm">Real results we've delivered for our clients across industries.</p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                { value: 200, suffix: '+', label: 'Projects Done'       },
                { value: 100, suffix: '+', label: 'Happy Clients'       },
                { value: 100, suffix: '%', label: 'Satisfaction Rate'   },
                { value: 5,   suffix: '+', label: 'Years Experience'    },
              ].map(s => (
                <div key={s.label} className="bg-white/8 rounded-2xl">
                  <StatCounter {...s} />
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400">
                <FaUsers className="text-base" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Trusted Worldwide</div>
                <div className="text-slate-400 text-xs">Clients across 10+ countries</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
