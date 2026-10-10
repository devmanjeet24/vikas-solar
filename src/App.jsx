import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Benefits from './components/Benefits'
import FAQs from './components/FAQs'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import FloatingElements from './components/FloatingElements'

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Benefits />
        <FAQs />
        <CTABanner />
      </main>
      <Footer />
      <FloatingElements />
    </>
  )
}
