import Navbar from './websiteParts/Navbar'
import Hero from './websiteParts/Hero'
import SwiperPart from './websiteParts/SwiperPart'
import TheGoodsPart from './websiteParts/TheGoodsPart'
import MjPoster from './websiteParts/MjPoster'
import Contact from './websiteParts/Contact'
import Footer from './websiteParts/Footer'
import gsap from 'gsap'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const App = () => {

  useGSAP(() => {
    // create the scrollSmoother before your scrollTriggers
    ScrollSmoother.create({
      smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
  }, [])
  return (
    <>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <SwiperPart />
          <TheGoodsPart />
          <MjPoster />
          <Contact />
          <Footer />
        </div>
      </div>

    </>
  )
}

export default App