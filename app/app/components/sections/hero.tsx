
"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Search, Users, Award } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100 overflow-hidden">
      {/* Enhanced Background Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
      
      {/* Gradient Orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-red-200 to-red-300 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl"
      />
      
      {/* Enhanced Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 8, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 text-red-200/60"
      >
        <div className="card-glass p-4 rounded-2xl shadow-premium">
          <Shield className="h-16 w-16" />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0],
          scale: [1, 0.95, 1]
        }}
        transition={{ 
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 left-16 text-red-200/60"
      >
        <div className="card-glass p-3 rounded-xl shadow-premium">
          <Search className="h-12 w-12" />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 3, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/3 left-10 text-red-200/50"
      >
        <div className="card-glass p-3 rounded-lg shadow-premium">
          <Users className="h-10 w-10" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 card-glass px-6 py-3 rounded-full text-sm font-semibold shadow-premium"
          >
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <Award className="h-4 w-4 text-red-600" />
            <span className="text-gray-800">Professional & Licensed | Australia-Wide Coverage</span>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-6xl md:text-8xl font-bold text-gray-900 leading-[0.9] text-premium"
          >
            Premier Corporate
            <br />
            <span className="everguard-text-gradient">
              Intelligence
            </span>
            <br />
            Services
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed text-elegant font-light"
          >
            Delivering comprehensive investigation solutions to insurance companies, 
            corporate enterprises, and government agencies across Australia with 
            <span className="font-semibold text-gray-900"> unmatched expertise</span> and 
            <span className="font-semibold text-gray-900"> absolute discretion</span>
          </motion.p>

          {/* Enhanced Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
          >
            {['OSINT Specialists', 'Skip Tracing', 'Fraud Detection', 'Surveillance']?.map((feature, index) => (
              <motion.span
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                className="card-glass text-gray-800 px-6 py-3 rounded-full text-sm font-semibold shadow-premium border border-white/20 hover:shadow-glow transition-all duration-300 group cursor-default"
              >
                <span className="group-hover:text-red-600 transition-colors duration-300">{feature}</span>
              </motion.span>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <Button
              asChild
              size="lg"
              className="everguard-gradient text-white hover:opacity-90 text-lg px-10 py-7 group btn-modern shadow-glow rounded-2xl font-semibold"
            >
              <Link href="/contact" className="flex items-center space-x-3">
                <span>Get Free Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-lg px-10 py-7 rounded-2xl font-semibold shadow-premium hover:shadow-glow transition-all duration-300"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </motion.div>

          {/* Enhanced Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16"
          >
            {[
              { value: '24/7', label: 'Response Time', gradient: 'from-red-500 to-red-600' },
              { value: '100%', label: 'Confidential', gradient: 'from-red-600 to-red-700' },
              { value: '15+', label: 'Years Experience', gradient: 'from-red-500 to-red-700' }
            ].map((item, index) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="card-glass p-6 rounded-2xl shadow-premium hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent mb-3 text-premium`}>
                    {item.value}
                  </div>
                  <div className="text-gray-700 font-medium text-lg">{item.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
