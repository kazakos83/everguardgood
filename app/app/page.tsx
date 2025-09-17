
import Hero from '@/components/sections/hero'
import Services from '@/components/sections/services'
import WhyChooseUs from '@/components/sections/why-choose-us'
import Industries from '@/components/sections/industries'
import Stats from '@/components/sections/stats'
import CTA from '@/components/sections/cta'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Industries />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
