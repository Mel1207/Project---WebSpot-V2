import AboutSection from "./components/AboutSection"
import FeaturedSection from "./components/FeaturedSection"
import Hero from "./components/Hero"
import Navigatgion from "./components/Navigatgion"
import PartnersSection from "./components/PartnersSection"
import ServicesSection from "./components/ServicesSection"
import Footer from './components/Footer'
import SectionTestimonial from "./components/SectionTestimonial"
import SectionFAQ from "./components/SectionFAQ"

function App() {
  return (
    <>
      <Navigatgion />
      <Hero />
      <PartnersSection />
      <ServicesSection />
      <AboutSection />
      <FeaturedSection />
      <SectionTestimonial />
      <SectionFAQ />
      <Footer />
    </>
  )
}

export default App
