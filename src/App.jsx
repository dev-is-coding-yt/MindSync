import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import AboutUs from "./components/AboutUs.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Testimonials from "./components/Testimonials.jsx";
import ImpactStats from "./components/ImpactStats.jsx";
import StudentSpotlight from "./components/StudentSpotlight.jsx";
import PricingSection from "./components/PricingSection.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";

const App = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Features />
      <HowItWorks />
      <Testimonials />
      <ImpactStats />
      <StudentSpotlight />
      <PricingSection />
      <CTA />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App