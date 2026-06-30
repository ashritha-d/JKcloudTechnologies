import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeStrip from './components/MarqueeStrip'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import CTABanner from './components/CTABanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
  // Scroll-progress bar
  useEffect(() => {
    const bar = document.createElement('div')
    bar.id = 'scroll-progress'
    document.body.appendChild(bar)

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      bar.style.width = ((window.scrollY / total) * 100) + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      bar.remove()
    }
  }, [])

  return (
    <>
      <Navbar />
      <MarqueeStrip />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <CTABanner />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  )
}
