
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
      {/* Hidden Netlify form for bot detection */}
      <form name="contact" netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="company" />
        <input type="text" name="service" />
        <input type="text" name="urgency" />
        <textarea name="message"></textarea>
        <input type="text" name="budget" />
      </form>
      
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
