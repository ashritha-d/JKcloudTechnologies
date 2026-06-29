import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaChevronUp } from 'react-icons/fa6'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed right-4 bottom-24 md:bottom-6 z-[900] flex flex-col gap-3 items-end">
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/916304190711"
        target="_blank"
        rel="noreferrer"
        initial={{ scale:0 }}
        animate={{ scale:1 }}
        transition={{ delay:2.5, type:'spring' }}
        whileHover={{ scale:1.12 }}
        className="relative w-13 h-13 rounded-full flex items-center justify-center text-white text-xl
                   shadow-lg wa-pulse group"
        style={{ width:52, height:52, background:'linear-gradient(135deg,#25d366,#128c7e)' }}
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
        <span className="absolute right-14 bg-black/80 text-white text-xs px-2.5 py-1 rounded-lg whitespace-nowrap
                         opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          WhatsApp Us
        </span>
      </motion.a>

      {/* Call */}
      <motion.a
        href="tel:+916304190711"
        initial={{ scale:0 }}
        animate={{ scale:1 }}
        transition={{ delay:2.8, type:'spring' }}
        whileHover={{ scale:1.12 }}
        className="relative w-13 h-13 rounded-full flex items-center justify-center text-white text-lg
                   shadow-lg group"
        style={{ width:52, height:52, background:'linear-gradient(135deg,#3b82f6,#7c3aed)' }}
        title="Call Us"
      >
        <FaPhone />
        <span className="absolute right-14 bg-black/80 text-white text-xs px-2.5 py-1 rounded-lg whitespace-nowrap
                         opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Call Us
        </span>
      </motion.a>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ scale:0, opacity:0 }}
            animate={{ scale:1, opacity:1 }}
            exit={{ scale:0, opacity:0 }}
            whileHover={{ scale:1.12, y:-3 }}
            onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
            className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm shadow-lg"
            style={{ background:'linear-gradient(135deg,#3b82f6,#7c3aed)' }}
            title="Back to Top"
          >
            <FaChevronUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
