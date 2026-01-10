import Navbar from '@/components/Navbar'
import LandingHero from '@/components/LandingHero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <LandingHero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}
