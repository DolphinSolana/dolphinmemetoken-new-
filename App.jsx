import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Web3Section from './components/Web3Section'
import NFTSection from './components/NFTSection'
import DAOSection from './components/DAOSection'
import BenefitsSection from './components/BenefitsSection'
import AboutSection from './components/AboutSection'
import TeamSection from './components/TeamSection'
import HowToBuySection from './components/HowToBuySection'
import TokenomicsSection from './components/TokenomicsSection'
import RoadmapSection from './components/RoadmapSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Web3Section />
      <NFTSection />
      <DAOSection />
      <BenefitsSection />
      <AboutSection />
      <TeamSection />
      <HowToBuySection />
      <TokenomicsSection />
      <RoadmapSection />
      <Footer />
    </div>
  )
}

export default App
