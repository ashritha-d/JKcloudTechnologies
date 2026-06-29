import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaPaperPlane, FaBriefcase, FaStar, FaCrown, FaInfinity,
  FaCheck, FaXmark,
} from 'react-icons/fa6'
import { pricingPlans } from '../data/index'

const ICON_MAP = { FaPaperPlane, FaBriefcase, FaStar, FaCrown, FaInfinity }

const ANNUAL_PRICES = ['5,599', '7,999', '11,999', '19,999', null]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          className="text-center mb-10"
        >
          <span className="section-badge">Transparent Pricing</span>
          <h2 className="section-title">Choose Your <span className="gradient-text">Perfect Plan</span></h2>
          <p className="section-subtitle">Flexible pricing designed for every business stage — from startups to enterprise.</p>
        </motion.div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12 text-sm font-medium text-slate-600">
          <span>Monthly</span>
          <button
            onClick={() => setAnnual(a => !a)}
            className={`relative w-14 h-7 rounded-full transition-all duration-300
              ${annual ? 'bg-gradient-to-r from-primary-500 to-accent-600' : 'bg-slate-200'}`}
          >
            <span
              className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform duration-300
                ${annual ? 'translate-x-7' : 'translate-x-0.5'}`}
            />
          </button>
          <span>
            One-Time
            <span className="ml-2 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white text-xs px-2 py-0.5 rounded-full font-bold">
              Save 20%
            </span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {pricingPlans.map((plan, i) => {
            const Icon = ICON_MAP[plan.icon]
            const price = annual ? ANNUAL_PRICES[i] : plan.price
            const isDark = plan.popular || plan.name === 'Custom'

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.5, delay: i * 0.1 }}
                whileHover={{ y:-10 }}
                className={`relative rounded-2xl p-7 flex flex-col border-2 transition-all duration-300
                  ${plan.popular
                    ? 'border-primary-500 shadow-[0_16px_64px_rgba(59,130,246,0.2)]'
                    : 'border-transparent'
                  }
                  ${isDark
                    ? 'text-white'
                    : 'glass-card'
                  }`}
                style={isDark ? { background: plan.popular
                  ? 'linear-gradient(135deg,#1e1b4b,#1e3a8a)'
                  : 'linear-gradient(135deg,#0f172a,#1e1b4b)'
                } : {}}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2
                                  bg-gradient-to-r from-primary-500 to-accent-600
                                  text-white text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap
                                  shadow-[0_4px_16px_rgba(59,130,246,0.4)]">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl mb-4 mx-auto
                  ${isDark ? 'bg-white/15' : 'bg-gradient-to-r from-primary-500/10 to-accent-600/10'}`}>
                  <Icon className={isDark ? 'text-white' : 'text-primary-500'} />
                </div>

                <h4 className={`text-lg font-extrabold text-center mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h4>
                <p className={`text-center text-xs mb-4 ${isDark ? 'text-white/60' : 'text-slate-400'}`}>{plan.sub}</p>

                {/* Price */}
                <div className="text-center mb-2">
                  {price ? (
                    <>
                      <span className={`text-sm font-bold align-top mt-1 inline-block ${isDark ? 'text-primary-400' : 'text-primary-500'}`}>₹</span>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={price}
                          initial={{ opacity:0, y:-8 }}
                          animate={{ opacity:1, y:0 }}
                          exit={{ opacity:0, y:8 }}
                          transition={{ duration:0.25 }}
                          className={`text-4xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}
                        >
                          {price}
                        </motion.span>
                      </AnimatePresence>
                    </>
                  ) : (
                    <span className="text-2xl font-black text-primary-400">Let's Talk</span>
                  )}
                </div>

                <p className={`text-xs text-center mb-5 ${isDark ? 'text-white/50' : 'text-slate-400'}`}>{plan.ideal}</p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map(f => (
                    <li key={f.text} className={`flex items-center gap-2 text-xs ${f.ok ? '' : 'opacity-40'} ${isDark ? 'text-white/80' : 'text-slate-600'}`}>
                      {f.ok
                        ? <FaCheck className="text-emerald-400 flex-shrink-0" />
                        : <FaXmark className="text-red-400 flex-shrink-0" />
                      }
                      {f.text}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-full text-sm font-semibold transition-all duration-300
                    ${plan.popular
                      ? 'bg-gradient-to-r from-primary-500 to-accent-600 text-white shadow-[0_6px_20px_rgba(59,130,246,0.35)] hover:shadow-[0_10px_30px_rgba(59,130,246,0.45)] hover:-translate-y-1'
                      : isDark
                        ? 'bg-white/15 text-white hover:bg-white/25'
                        : 'bg-gradient-to-r from-primary-500/10 to-accent-600/10 text-primary-500 border border-primary-500/30 hover:from-primary-500 hover:to-accent-600 hover:text-white hover:border-transparent'
                    }`}
                >
                  {plan.name === 'Custom' ? 'Contact Us' : 'Get Started'}
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
