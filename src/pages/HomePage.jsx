import Banner from "../components/Banner"
import FAQSection from "../components/FAQSection"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import Pricing from "../components/Pricing"
import TestimonialsSection from "../components/TestimonialsSection"
import WorkSection from "../components/WorkSection"


const HomePage = () => {
  return (
      <div className="">
          <Navbar />
          <Banner />
          <WorkSection />
          <Features />
          <FAQSection />
          <Pricing />
          <TestimonialsSection/>
          

          <Footer/>
    </div>
  )
}

export default HomePage