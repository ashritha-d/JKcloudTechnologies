import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaPhone, FaEnvelope, FaLocationDot, FaWhatsapp,
  FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube,
  FaPaperPlane, FaUser, FaList, FaIndianRupeeSign, FaCommentDots,
  FaCircleCheck,
} from 'react-icons/fa6'

const INFO = [
  { icon: FaPhone,       grad:'from-primary-500 to-primary-600', label:'Call Us',   value:'+91 6304190711', href:'tel:+916304190711' },
  { icon: FaEnvelope,    grad:'from-accent-600 to-accent-400',   label:'Email Us',  value:'info@jkcloudtech.com', href:'mailto:info@jkcloudtech.com' },
  { icon: FaLocationDot, grad:'from-emerald-500 to-emerald-400', label:'Visit Us',  value:'Hyderabad, Telangana, India', href:null },
  { icon: FaWhatsapp,    grad:'from-green-500 to-emerald-400',   label:'WhatsApp',  value:'Chat on WhatsApp', href:'https://wa.me/916304190711' },
]

const SOCIAL = [
  { icon: FaFacebookF, href:'#' }, { icon: FaInstagram, href:'#' },
  { icon: FaLinkedinIn, href:'#' }, { icon: FaXTwitter, href:'#' }, { icon: FaYoutube, href:'#' },
]

export default function Contact() {
  const [form, setForm]   = useState({ name:'', email:'', phone:'', service:'', budget:'', message:'' })
  const [sent, setSent]   = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.service || !form.message) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1800)
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Let's Build Something <span className="gradient-text">Amazing Together</span></h2>
          <p className="section-subtitle">Ready to transform your digital presence? Drop us a message — we respond within 24 hours.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity:0, x:-40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.7 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {INFO.map(({ icon:Icon, grad, label, value, href }) => (
              <motion.div
                key={label}
                whileHover={{ x:6 }}
                className="glass-card p-5 flex items-center gap-4"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white flex-shrink-0 bg-gradient-to-r ${grad}`}>
                  <Icon />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{label}</p>
                  {href
                    ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="font-semibold text-slate-800 hover:text-primary-500 transition-colors text-sm">{value}</a>
                    : <span className="font-semibold text-slate-800 text-sm">{value}</span>
                  }
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <div className="glass-card p-8 text-center flex-1 flex flex-col items-center justify-center gap-2">
              <FaLocationDot className="text-4xl text-primary-500" />
              <p className="font-bold text-slate-900">Hyderabad, Telangana, India</p>
              <small className="text-slate-400 text-xs">Serving clients worldwide</small>
            </div>

            {/* Social */}
            <div className="flex gap-2.5 flex-wrap">
              {SOCIAL.map(({ icon:Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ y:-3, scale:1.1 }}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center
                             text-slate-500 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-600
                             hover:text-white hover:border-transparent transition-all duration-300"
                >
                  <Icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity:0, x:40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.7 }}
            className="lg:col-span-3 glass-card p-8"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity:0, scale:0.9 }}
                  animate={{ opacity:1, scale:1 }}
                  className="flex flex-col items-center justify-center h-full py-16 text-center gap-4"
                >
                  <FaCircleCheck className="text-6xl text-emerald-400" />
                  <h4 className="text-2xl font-bold text-slate-900">Message Sent!</h4>
                  <p className="text-slate-500 max-w-xs">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => { setSent(false); setForm({ name:'', email:'', phone:'', service:'', budget:'', message:'' }) }}
                    className="btn-primary mt-2 text-sm px-6 py-2.5">
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Send Us a Message</h4>
                  <p className="text-slate-500 text-sm mb-5">Fill out the form below and we'll respond within 24 hours.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { name:'name',  label:'Your Name *',     icon:FaUser,        type:'text',   placeholder:'John Doe' },
                      { name:'email', label:'Email Address *', icon:FaEnvelope,    type:'email',  placeholder:'john@example.com' },
                      { name:'phone', label:'Phone Number',    icon:FaPhone,       type:'tel',    placeholder:'+91 98765 43210' },
                    ].map(f => (
                      <div key={f.name} className={f.name === 'name' || f.name === 'phone' ? '' : 'sm:col-span-1'}>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">{f.label}</label>
                        <div className="relative">
                          <f.icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 text-sm" />
                          <input
                            name={f.name} type={f.type} value={form[f.name]} onChange={handle}
                            placeholder={f.placeholder} required={f.label.includes('*')}
                            className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800
                                       placeholder:text-slate-300 outline-none focus:border-primary-500
                                       focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all bg-white"
                          />
                        </div>
                      </div>
                    ))}

                    {/* Service select */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Service Required *</label>
                      <div className="relative">
                        <FaList className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 text-sm" />
                        <select name="service" value={form.service} onChange={handle} required
                          className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800
                                     outline-none focus:border-primary-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)]
                                     transition-all bg-white appearance-none cursor-pointer">
                          <option value="">Select a Service</option>
                          {['Website Development','E-Commerce','Landing Page','Cloud Solutions','UI/UX Design','SEO Optimization','Admin Panel','Custom Solution'].map(s => <option key={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Budget select */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Budget Range</label>
                      <div className="relative">
                        <FaIndianRupeeSign className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 text-xs" />
                        <select name="budget" value={form.budget} onChange={handle}
                          className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800
                                     outline-none focus:border-primary-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)]
                                     transition-all bg-white appearance-none cursor-pointer">
                          <option value="">Select Budget</option>
                          {['Under ₹10,000','₹10,000–₹25,000','₹25,000–₹50,000','₹50,000–₹1,00,000','Above ₹1,00,000'].map(b => <option key={b}>{b}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Project Details *</label>
                    <div className="relative">
                      <FaCommentDots className="absolute left-3.5 top-3.5 text-slate-300 text-sm" />
                      <textarea
                        name="message" value={form.message} onChange={handle} required rows={4}
                        placeholder="Describe your project requirements, goals, and specific features you need..."
                        className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800
                                   placeholder:text-slate-300 outline-none focus:border-primary-500
                                   focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all resize-none bg-white"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }}
                    disabled={loading}
                    className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70"
                  >
                    {loading ? (
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                    ) : <FaPaperPlane />}
                    {loading ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
