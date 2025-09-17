
"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Shield, FileSearch, Search, Users, Eye, AlertTriangle, Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ServiceDetails = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const services = [
    {
      id: 'corporate',
      icon: Shield,
      title: 'Corporate Intelligence',
      description: 'Comprehensive corporate investigations and business intelligence services for informed decision-making.',
      features: [
        'Due Diligence Investigations',
        'Corporate Background Checks',
        'Business Intelligence Gathering',
        'Competitive Intelligence',
        'Risk Assessment Services',
        'Merger & Acquisition Support',
        'Corporate Fraud Investigations',
        'Executive Background Screening'
      ],
      benefits: [
        'Mitigate business risks',
        'Make informed decisions',
        'Protect company assets',
        'Ensure regulatory compliance'
      ]
    },
    {
      id: 'insurance',
      icon: FileSearch,
      title: 'Insurance Investigations',
      description: 'Specialized investigation services for insurance companies including claim verification and fraud detection.',
      features: [
        'Claim Verification Services',
        'Insurance Fraud Detection',
        'Medical Investigation Support',
        'Surveillance Operations',
        'Witness Interviews',
        'Asset Recovery Services',
        'Policy Holder Investigations',
        'Expert Witness Services'
      ],
      benefits: [
        'Reduce fraudulent claims',
        'Improve claim accuracy',
        'Lower investigation costs',
        'Faster claim resolution'
      ]
    },
    {
      id: 'osint',
      icon: Search,
      title: 'OSINT Services',
      description: 'Advanced Open Source Intelligence gathering using cutting-edge technology and analytical techniques.',
      features: [
        'Social Media Intelligence',
        'Digital Footprint Analysis',
        'Online Reputation Monitoring',
        'Data Mining & Analysis',
        'Cyber Intelligence',
        'Dark Web Monitoring',
        'Public Records Research',
        'Digital Asset Tracking'
      ],
      benefits: [
        'Access hard-to-find information',
        'Real-time intelligence updates',
        'Cost-effective research',
        'Comprehensive digital analysis'
      ]
    },
    {
      id: 'skip-tracing',
      icon: Users,
      title: 'Skip Tracing',
      description: 'Professional skip tracing services to locate individuals for legal, financial, and personal matters.',
      features: [
        'Asset Location Services',
        'Witness Location & Interviews',
        'Debtor Tracing Services',
        'Missing Person Investigations',
        'Address Verification',
        'Employment Verification',
        'Family Reunification',
        'Legal Service Support'
      ],
      benefits: [
        'High success rates',
        'Fast turnaround times',
        'Comprehensive reports',
        'Legal compliance'
      ]
    },
    {
      id: 'surveillance',
      icon: Eye,
      title: 'Surveillance Services',
      description: 'Professional surveillance operations conducted by experienced operatives with advanced equipment.',
      features: [
        'Mobile Surveillance',
        'Static Surveillance Operations',
        'Covert Operations',
        'Video Documentation',
        'GPS Tracking Services',
        'Counter-Surveillance',
        'Court-Ready Evidence',
        '24/7 Surveillance Capability'
      ],
      benefits: [
        'Admissible evidence',
        'Professional documentation',
        'Experienced operatives',
        'Advanced equipment'
      ]
    },
    {
      id: 'background-checks',
      icon: AlertTriangle,
      title: 'Background Checks',
      description: 'Thorough background verification services for employment, tenancy, and partnership decisions.',
      features: [
        'Employment Screening',
        'Criminal History Checks',
        'Financial Background Verification',
        'Reference Verification',
        'Education Verification',
        'Professional License Checks',
        'Social Media Screening',
        'International Background Checks'
      ],
      benefits: [
        'Reduce hiring risks',
        'Ensure workplace safety',
        'Verify credentials',
        'Protect company reputation'
      ]
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="everguard-text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each service is delivered with the highest standards of professionalism, 
            confidentiality, and attention to detail
          </p>
        </motion.div>

        <div className="space-y-16">
          {services?.map((service, index) => {
            const Icon = service?.icon
            return (
              <motion.div
                key={service?.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                id={service?.id}
              >
                <Card className="overflow-hidden shadow-xl border-0">
                  <CardContent className="p-0">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-0">
                      {/* Content Side */}
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-16 h-16 everguard-gradient rounded-xl flex items-center justify-center">
                            {Icon && <Icon className="h-8 w-8 text-white" />}
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900">
                            {service?.title}
                          </h3>
                        </div>
                        
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                          {service?.description}
                        </p>

                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                          <div className="space-y-2">
                            {service?.benefits?.map((benefit) => (
                              <div key={benefit} className="flex items-center space-x-2">
                                <CheckCircle className="h-5 w-5 text-red-600" />
                                <span className="text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button
                          asChild
                          className="everguard-gradient text-white hover:opacity-90 group"
                        >
                          <Link href="/contact" className="flex items-center space-x-2">
                            <span>Get Quote</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>

                      {/* Features Side */}
                      <div className="bg-gray-50 p-8 lg:p-12">
                        <h4 className="text-xl font-semibold text-gray-900 mb-6">Service Features:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                          {service?.features?.map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: 20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.05) }}
                              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 everguard-gradient rounded-full"></div>
                                <span className="text-gray-700 font-medium">{feature}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServiceDetails
