
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Shield, CheckCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="relative w-48 h-12">
              <Image
                src="/everguard-logo.png"
                alt="Everguard Intelligence"
                fill
                className="object-contain filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premier corporate intelligence and investigation services across Australia. 
              Trusted by insurance companies, corporations, and government agencies.
            </p>
            <div className="flex items-center space-x-2 text-red-400">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Professional & Licensed</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#corporate" className="text-gray-300 hover:text-red-400 transition-colors">Corporate Intelligence</Link></li>
              <li><Link href="/services#insurance" className="text-gray-300 hover:text-red-400 transition-colors">Insurance Investigations</Link></li>
              <li><Link href="/services#osint" className="text-gray-300 hover:text-red-400 transition-colors">OSINT Services</Link></li>
              <li><Link href="/services#skip-tracing" className="text-gray-300 hover:text-red-400 transition-colors">Skip Tracing</Link></li>
              <li><Link href="/services#fraud" className="text-gray-300 hover:text-red-400 transition-colors">Fraud Detection</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">1800-EVERGUARD</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">info@everguardgroup.com.au</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-red-400 mt-0.5" />
                <span className="text-gray-300">Australia-wide Coverage<br />All States & Territories</span>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Industries</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Insurance Companies</li>
              <li>Corporate Enterprises</li>
              <li>Government Agencies</li>
              <li>Legal Firms</li>
              <li>Financial Institutions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Everguard Intelligence. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/contact" className="text-gray-400 hover:text-red-400 transition-colors">Contact Us</Link>
              <Link href="/about" className="text-gray-400 hover:text-red-400 transition-colors">About</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
