import { motion } from 'framer-motion'
import {
  FaLaptopCode, FaCloud, FaMobileScreen, FaBullhorn,
  FaPaintbrush, FaShield, FaDatabase, FaMagnifyingGlass,
  FaArrowRight,
} from 'react-icons/fa6'

const SERVICES = [
  { icon: FaLaptopCode,     title: 'Web Development',     desc: 'Custom, responsive websites built with modern frameworks for blazing-fast performance.',   color: '#3b82f6', bg: '#eff6ff' },
  { icon: FaCloud,          title: 'Cloud Solutions',      desc: 'Scalable cloud infrastructure and migration services on AWS, Azure, and Google Cloud.',     color: '#7c3aed', bg: '#f5f3ff' },
  { icon: FaMobileScreen,   title: 'Mobile Development',   desc: 'Native and cross-platform mobile apps for iOS and Android that users love.',                color: '#f59e0b', bg: '#fffbeb' },
  { icon: FaBullhorn,       title: 'Digital Marketing',    desc: 'Data-driven campaigns — SEO, SEM, social media — that grow your brand and revenue.',         color: '#10b981', bg: '#f0fdf4' },
  { icon: FaPaintbrush,     title: 'UI/UX Design',         desc: 'Beautiful, intuitive interfaces designed for engagement, conversion, and delight.',          color: '#ec4899', bg: '#fdf2f8' },
  { icon: FaShield,         title: 'Cyber Security',       desc: 'Protect your digital assets with enterprise-grade security audits and solutions.',            color: '#ef4444', bg: '#fff1f2' },
  { icon: FaDatabase,       title: 'Database Management',  desc: 'Design, optimize, and maintain robust databases that keep your business running.',           color: '#06b6d4', bg: '#ecfeff' },
  { icon: FaMagnifyingGlass,title: 'SEO Optimization',     desc: 'Rank higher, get found, and drive organic traffic with proven SEO strategies.',              color: '#8b5cf6', bg: '#faf5ff' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">What We Offer</span>
          <h2 className="section-title">
            Comprehensive IT Solutions<br />
            <span className="gradient-text">For Your Business</span>
          </h2>
          <p className="section-subtitle">
            End-to-end digital services crafted to help businesses grow, scale, and succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' }}
                className="bg-white rounded-2xl p-7 border border-slate-100 group cursor-default"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: s.bg, color: s.color }}
                >
                  <Icon />
                </div>
                <h5 className="font-bold text-slate-900 text-base mb-2.5">{s.title}</h5>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-3"
                  style={{ color: s.color }}
                >
                  Learn More <FaArrowRight className="text-xs" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
