
import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactHero from '@/components/contact-sections/contact-hero'
import ContactForm from '@/components/contact-sections/contact-form'
import ContactInfo from '@/components/contact-sections/contact-info'

export const metadata = {
  title: 'Contact Us | Everguard Intelligence',
  description: 'Get in touch with Everguard Intelligence for a confidential consultation. Available 24/7 across Australia.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <ContactForm />
          <ContactInfo />
        </div>
      </main>
      <Footer />
    </>
  )
}
