import Starfield from './components/Starfield'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import FeaturesBento from './components/FeaturesBento'
import HowItWorks from './components/HowItWorks'
import GamificationShowcase from './components/GamificationShowcase'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <Starfield />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ProblemSection />
          <FeaturesBento />
          <HowItWorks />
          <GamificationShowcase />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
