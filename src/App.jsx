import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeStrip from './components/MarqueeStrip'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
  const [loaded, setLoaded] = useState(false)

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
      <Loader onDone={() => setLoaded(true)} />
      <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <Hero />
        <MarqueeStrip />
        <About />
        <Services />
        <Pricing />
        <WhyUs />
        <Process />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <FloatingButtons />
      </div>
    </>
  )
}
