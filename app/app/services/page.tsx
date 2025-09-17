
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-sections/service-hero'
import ServiceDetails from '@/components/service-sections/service-details'
import ServiceCTA from '@/components/service-sections/service-cta'

export const metadata = {
  title: 'Our Services | Everguard Intelligence',
  description: 'Comprehensive investigation and intelligence services including corporate intelligence, insurance investigations, OSINT, skip tracing, and more.',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero />
        <ServiceDetails />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  )
}
