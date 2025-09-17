
"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, Shield, Users, Eye, FileSearch, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const services = [
    {
      icon: Shield,
      title: 'Corporate Intelligence',
      description: 'Comprehensive corporate investigations, due diligence, and business intelligence gathering for informed decision-making.',
      features: ['Due Diligence', 'Business Intelligence', 'Corporate Investigations', 'Risk Assessment']
    },
    {
      icon: FileSearch,
      title: 'Insurance Investigations',
      description: 'Specialized investigation services for insurance companies including claim verification and fraud detection.',
      features: ['Claim Verification', 'Fraud Detection', 'Surveillance', 'Medical Investigations']
    },
    {
      icon: Search,
      title: 'OSINT Services',
      description: 'Advanced Open Source Intelligence gathering using cutting-edge technology and analytical techniques.',
      features: ['Social Media Analysis', 'Digital Footprints', 'Online Research', 'Data Mining']
    },
    {
      icon: Users,
      title: 'Skip Tracing',
      description: 'Professional skip tracing services to locate individuals for legal, financial, and personal matters.',
      features: ['Asset Location', 'Witness Location', 'Debtor Tracing', 'Missing Persons']
    },
    {
      icon: Eye,
      title: 'Surveillance',
      description: 'Professional surveillance services conducted by experienced operatives with advanced equipment.',
      features: ['Mobile Surveillance', 'Static Surveillance', 'Video Documentation', 'Court-Ready Reports']
    },
    {
      icon: AlertTriangle,
      title: 'Background Checks',
      description: 'Thorough background verification services for employment, tenancy, and partnership decisions.',
      features: ['Employment Screening', 'Criminal History', 'Financial Checks', 'Reference Verification']
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-stone-50 to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-red-100/30 to-red-200/30 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 card-glass px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-premium"
          >
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700">Our Expertise</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-premium">
            Our <span className="everguard-text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto text-elegant leading-relaxed">
            Comprehensive investigation and intelligence services tailored to meet the unique needs of our clients across various industries with 
            <span className="font-semibold text-gray-900"> cutting-edge technology</span> and 
            <span className="font-semibold text-gray-900"> proven methodologies</span>
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service, index) => {
            const Icon = service?.icon
            return (
              <motion.div
                key={service?.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card-premium h-full rounded-2xl p-8 group-hover:scale-[1.02] transition-all duration-500">
                  <div className="mb-6">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-18 h-18 everguard-gradient rounded-2xl flex items-center justify-center mb-6 shadow-glow"
                    >
                      {Icon && <Icon className="h-9 w-9 text-white" />}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-premium group-hover:text-red-700 transition-colors duration-300">
                      {service?.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed text-elegant">
                      {service?.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {service?.features?.map((feature, featureIndex) => (
                      <motion.div 
                        key={feature} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: (index * 0.1) + (featureIndex * 0.05) + 0.3 }}
                        className="flex items-center space-x-3 group/feature"
                      >
                        <div className="w-5 h-5 everguard-gradient rounded-full flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-200">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium group-hover/feature:text-gray-900 transition-colors duration-200">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full everguard-gradient text-white hover:opacity-90 btn-modern rounded-xl py-6 font-semibold shadow-glow group-hover:shadow-premium transition-all duration-300"
                  >
                    <Link href="/services" className="flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            asChild
            size="lg"
            className="everguard-gradient text-white hover:opacity-90 text-lg px-8 py-6"
          >
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
