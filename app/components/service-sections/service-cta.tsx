
"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ServiceCTA = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get <span className="text-red-400">Started?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contact our expert team today for a confidential consultation. 
            We'll discuss your specific needs and provide a tailored solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Call */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-white bg-opacity-10 border-0 hover:bg-opacity-20 transition-all duration-300 h-full">
              <CardContent className="p-8 text-center text-white">
                <div className="w-16 h-16 everguard-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Call Us</h3>
                <p className="text-gray-200 mb-6">
                  Speak directly with our investigation specialists for immediate assistance.
                </p>
                <Button
                  asChild
                  className="w-full everguard-gradient text-white hover:opacity-90"
                >
                  <a href="tel:+61-1800-EVERGUARD">1800-EVERGUARD</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white bg-opacity-10 border-0 hover:bg-opacity-20 transition-all duration-300 h-full">
              <CardContent className="p-8 text-center text-white">
                <div className="w-16 h-16 everguard-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Email Us</h3>
                <p className="text-gray-200 mb-6">
                  Send us your inquiry and we'll respond within 24 hours with a detailed proposal.
                </p>
                <Button
                  asChild
                  className="w-full everguard-gradient text-white hover:opacity-90"
                >
                  <a href="mailto:info@everguardgroup.com.au">Send Email</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-white bg-opacity-10 border-0 hover:bg-opacity-20 transition-all duration-300 h-full">
              <CardContent className="p-8 text-center text-white">
                <div className="w-16 h-16 everguard-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Online Form</h3>
                <p className="text-gray-200 mb-6">
                  Fill out our secure contact form for a comprehensive consultation.
                </p>
                <Button
                  asChild
                  className="w-full everguard-gradient text-white hover:opacity-90 group"
                >
                  <Link href="/contact" className="flex items-center justify-center space-x-2">
                    <span>Get Quote</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-red-400" />
              <span className="text-lg">Licensed & Professional</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-red-400" />
              <span className="text-lg">100% Confidential</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-red-400" />
              <span className="text-lg">24/7 Available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceCTA
