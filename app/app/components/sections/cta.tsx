
"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const CTA = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section ref={ref} className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-64 h-64 bg-red-600 rounded-full blur-3xl"
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Get <span className="text-red-400">Started?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a confidential consultation. Our expert team is ready to assist 
            with your investigation and intelligence needs.
          </p>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 py-8"
          >
            <div className="flex items-center space-x-3 text-lg">
              <div className="w-12 h-12 everguard-gradient rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-gray-300">1800-EVERGUARD</div>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-gray-600"></div>
            
            <div className="flex items-center space-x-3 text-lg">
              <div className="w-12 h-12 everguard-gradient rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-semibold">Email Us</div>
                <div className="text-gray-300">info@everguardgroup.com.au</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Button
              asChild
              size="lg"
              className="everguard-gradient text-white hover:opacity-90 text-lg px-8 py-6 group"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Get Free Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <div className="inline-flex items-center space-x-2 bg-red-600 bg-opacity-20 text-red-300 px-6 py-3 rounded-full text-sm font-medium">
              <span>✓ Licensed & Professional</span>
              <span>•</span>
              <span>✓ 100% Confidential</span>
              <span>•</span>
              <span>✓ 24/7 Available</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
