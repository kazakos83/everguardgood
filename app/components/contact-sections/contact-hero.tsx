
"use client"

import { motion } from 'framer-motion'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'

const ContactHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Get In <span className="everguard-text-gradient">Touch</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to discuss your investigation needs? Contact our expert team for a 
            confidential consultation. We're available 24/7 to assist you.
          </p>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-12 h-12 everguard-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div className="font-semibold text-gray-900">Call Us</div>
              <div className="text-gray-600 text-sm">1800-EVERGUARD</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-12 h-12 everguard-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="font-semibold text-gray-900">Email Us</div>
              <div className="text-gray-600 text-sm">info@everguardgroup.com.au</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-12 h-12 everguard-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="font-semibold text-gray-900">Available</div>
              <div className="text-gray-600 text-sm">24/7 Support</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-12 h-12 everguard-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="font-semibold text-gray-900">Coverage</div>
              <div className="text-gray-600 text-sm">Australia-wide</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero
