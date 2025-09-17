
import Header from '@/components/header'
import Footer from '@/components/footer'
import AboutHero from '@/components/about-sections/about-hero'
import CompanyStory from '@/components/about-sections/company-story'
import Team from '@/components/about-sections/team'
import Values from '@/components/about-sections/values'
import Certifications from '@/components/about-sections/certifications'

export const metadata = {
  title: 'About Us | Everguard Intelligence',
  description: 'Learn about Everguard Intelligence, our mission, values, and the expert team behind Australia\'s premier investigation services.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <CompanyStory />
        <Values />
        <Team />
        <Certifications />
      </main>
      <Footer />
    </>
  )
}
