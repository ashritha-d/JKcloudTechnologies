import { motion } from 'framer-motion'
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube,
  FaChevronRight, FaPhone, FaEnvelope, FaLocationDot, FaClock,
  FaHeart, FaPaperPlane,
} from 'react-icons/fa6'

const QUICK = [
  { href:'#home', label:'Home' }, { href:'#about', label:'About' },
  { href:'#services', label:'Services' }, { href:'#pricing', label:'Pricing' },
  { href:'#portfolio', label:'Portfolio' }, { href:'#contact', label:'Contact' },
]
const SERVICES = ['Web Development','E-Commerce','Cloud Solutions','UI/UX Design','SEO Optimization','API Integration']
const SOCIAL = [
  { icon: FaFacebookF }, { icon: FaInstagram }, { icon: FaLinkedinIn },
  { icon: FaXTwitter  }, { icon: FaYoutube   },
]

export default function Footer() {
  return (
    <footer style={{ background:'linear-gradient(135deg,#0f172a,#1e1b4b)' }}>
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpeg" alt="JK Cloud" className="w-14 h-14 rounded-full object-cover border-2 border-white/15" />
              <h4 className="text-lg font-extrabold text-white">
                JK <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Cloud</span>
              </h4>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-xs">
              Building powerful websites and cloud solutions that drive real business growth. Your digital success is our mission.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              {SOCIAL.map(({ icon:Icon }, i) => (
                <motion.a
                  key={i} href="#"
                  whileHover={{ y:-3 }}
                  className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center
                             text-white/50 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-600
                             hover:text-white hover:border-transparent transition-all duration-300 text-sm"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h6>
            <ul className="space-y-2.5">
              {QUICK.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="flex items-center gap-2 text-white/50 text-sm hover:text-white hover:pl-1 transition-all duration-200">
                    <FaChevronRight className="text-primary-400 text-[10px]" /> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Services</h6>
            <ul className="space-y-2.5">
              {SERVICES.map(s => (
                <li key={s}>
                  <a href="#services" className="flex items-center gap-2 text-white/50 text-sm hover:text-white hover:pl-1 transition-all duration-200">
                    <FaChevronRight className="text-primary-400 text-[10px]" /> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h6 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact Info</h6>
            <div className="space-y-3 mb-6">
              {[
                { icon:FaPhone,       text:'+91 6304190711' },
                { icon:FaEnvelope,    text:'info@jkcloudtech.com' },
                { icon:FaLocationDot, text:'Hyderabad, Telangana, India' },
                { icon:FaClock,       text:'Mon–Sat: 9:00 AM – 7:00 PM' },
              ].map(({ icon:Icon, text }) => (
                <div key={text} className="flex items-start gap-2.5">
                  <Icon className="text-primary-400 text-xs mt-1 flex-shrink-0" />
                  <span className="text-white/50 text-xs leading-relaxed">{text}</span>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <h6 className="text-white font-bold text-xs uppercase tracking-widest mb-3">Newsletter</h6>
            <div className="flex">
              <input
                type="email" placeholder="Your email address"
                className="flex-1 bg-white/6 border border-white/15 text-white text-xs px-3 py-2.5
                           rounded-l-xl placeholder:text-white/30 outline-none focus:border-primary-400 transition-all"
              />
              <button className="bg-gradient-to-r from-primary-500 to-accent-600 text-white px-3 py-2.5 rounded-r-xl hover:opacity-85 transition-opacity">
                <FaPaperPlane className="text-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/35 text-xs">&copy; 2024 JK Cloud Technologies. All rights reserved.</p>
          <p className="text-white/35 text-xs flex items-center gap-1">
            Designed &amp; Developed with <FaHeart className="text-red-500 animate-heartbeat text-[10px]" /> by JK Cloud Technologies
          </p>
        </div>
      </div>
    </footer>
  )
}
