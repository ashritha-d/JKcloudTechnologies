import { motion } from 'framer-motion'
import { FaArrowRight, FaHeadset } from 'react-icons/fa6'

export default function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e40af, #7c3aed, #1e1b4b)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-white/3 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
              Ready to Start?
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Ready to Take Your Business<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-300">
              to the Next Level?
            </span>
          </h2>

          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Let's build something amazing together. Get a free consultation and discover how we can transform your business.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold
                         px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get A Free Quote <FaArrowRight className="text-sm" />
            </motion.a>
            <motion.a
              href="tel:+916304190711"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white
                         font-bold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <FaHeadset /> Talk To Our Expert
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
