import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onDone }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false)
      setTimeout(onDone, 600)
    }, 2000)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #0f172a, #1e1b4b)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <img
              src="/logo.jpeg"
              alt="JK Cloud Technologies"
              className="w-24 h-24 rounded-full object-cover border-2 border-white/20 mb-6 mx-auto animate-loaderPulse"
            />
            <div className="loader-bar">
              <div className="loader-progress" />
            </div>
            <p className="text-white/50 text-xs tracking-[3px] uppercase mt-4">
              Loading Excellence...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
