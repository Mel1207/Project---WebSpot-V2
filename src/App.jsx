import Hero from "./components/Hero"
import Navigatgion from "./components/Navigatgion"
import SectionPartners from "./components/SectionPartners"
import SectionServices from "./components/SectionServices"
import Footer from './components/Footer'
import SectionTestimonial from "./components/SectionTestimonial"
import SectionFAQ from "./components/SectionFAQ"
import EmailCta from "./components/EmailCta"
import SectionFeatured from "./components/SectionFeatured"
import SectionAbout from "./components/SectionAbout"



function App() {
  return (
    <>
      <Navigatgion />
      <Hero />
      <SectionPartners />
      <SectionServices />
      <SectionAbout />
      <SectionFeatured />
      <SectionTestimonial />
      <SectionFAQ />
      <EmailCta />
      <Footer />
    </>
  )
}

export default App
