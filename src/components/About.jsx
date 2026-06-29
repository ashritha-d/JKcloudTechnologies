import { motion } from 'framer-motion'
import { FaEye, FaBullseye, FaHeart, FaHandshake, FaAward, FaHeadset } from 'react-icons/fa6'

const cards = [
  { icon: FaEye,       title: 'Our Vision',  desc: 'To be the most trusted technology partner for businesses worldwide, enabling digital growth through innovation.' },
  { icon: FaBullseye,  title: 'Our Mission', desc: 'Deliver premium, affordable, and scalable digital solutions that transform businesses and exceed client expectations.' },
  { icon: FaHeart,     title: 'Our Values',  desc: 'Integrity, innovation, and excellence in every project we undertake, ensuring lasting partnerships.' },
  { icon: FaHandshake, title: 'Why Trust Us',desc: '150+ successful projects, 98% client satisfaction, and a dedicated team committed to your success.' },
]

const fadeUp = { initial:{ opacity:0, y:30 }, whileInView:{ opacity:1, y:0 }, viewport:{ once:true }, transition:{ duration:0.6 } }

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp} className="text-center mb-14">
          <span className="section-badge">About Us</span>
          <h2 className="section-title">About <span className="gradient-text">JK Cloud Technologies</span></h2>
          <p className="section-subtitle">We are a team of passionate developers, designers, and cloud experts dedicated to delivering digital excellence.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity:0, x:-40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="about-blob rounded-[30%_70%_70%_30%/30%_30%_70%_70%]">
                <img
                  src="/logo.jpeg"
                  alt="JK Cloud Technologies"
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl"
                />
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0,-10,0] }}
                transition={{ duration:3, repeat:Infinity, ease:'easeInOut' }}
                className="absolute top-4 -right-4 glass-card px-4 py-2.5 flex items-center gap-2
                           text-sm font-semibold text-primary-500"
              >
                <FaAward className="text-amber-500" /> Premium Quality
              </motion.div>
              <motion.div
                animate={{ y: [0,-10,0] }}
                transition={{ duration:3.5, repeat:Infinity, ease:'easeInOut', delay:1 }}
                className="absolute bottom-6 -left-4 glass-card px-4 py-2.5 flex items-center gap-2
                           text-sm font-semibold text-emerald-500"
              >
                <FaHeadset /> 24/7 Support
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity:0, x:40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.7 }}
          >
            <p className="text-slate-600 leading-relaxed mb-8">
              JK Cloud Technologies is a leading IT services company specialising in custom web development, cloud infrastructure, and digital transformation. We combine cutting-edge technology with creative design to deliver solutions that drive real business results.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {cards.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity:0, y:20 }}
                  whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }}
                  transition={{ duration:0.5, delay: i * 0.1 }}
                  whileHover={{ y:-4 }}
                  className="glass-card p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary-500 to-accent-600
                                  flex items-center justify-center text-white mb-3">
                    <Icon />
                  </div>
                  <h5 className="font-bold text-slate-900 mb-1.5">{title}</h5>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
