
"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Building, Shield, Landmark, Scale, CreditCard, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Industries = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const industries = [
    {
      icon: Shield,
      title: 'Insurance Companies',
      description: 'Comprehensive investigation services for claim verification, fraud detection, and risk assessment.',
      services: ['Claim Investigations', 'Fraud Detection', 'Surveillance', 'Medical Assessments']
    },
    {
      icon: Building,
      title: 'Corporate Enterprises',
      description: 'Business intelligence, due diligence, and corporate investigation services for informed decision-making.',
      services: ['Due Diligence', 'Background Checks', 'Corporate Intelligence', 'Risk Management']
    },
    {
      icon: Landmark,
      title: 'Government Agencies',
      description: 'Specialized investigative support for government departments and public sector organizations.',
      services: ['Compliance Investigations', 'Security Clearances', 'Public Interest Matters', 'Regulatory Support']
    },
    {
      icon: Scale,
      title: 'Legal Firms',
      description: 'Professional investigation services to support legal proceedings and case preparation.',
      services: ['Evidence Gathering', 'Witness Location', 'Asset Searches', 'Court Support']
    },
    {
      icon: CreditCard,
      title: 'Financial Institutions',
      description: 'Fraud prevention, asset recovery, and financial investigation services for banks and credit unions.',
      services: ['Financial Fraud', 'Asset Recovery', 'Credit Investigations', 'AML Support']
    },
    {
      icon: Briefcase,
      title: 'Private Clients',
      description: 'Discreet personal investigation services for individuals requiring professional assistance.',
      services: ['Personal Security', 'Family Matters', 'Missing Persons', 'Background Verification']
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We <span className="everguard-text-gradient">Serve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expertise spans across multiple industries, providing tailored investigation 
            and intelligence solutions to meet specific sector requirements
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries?.map((industry, index) => {
            const Icon = industry?.icon
            return (
              <motion.div
                key={industry?.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group cursor-pointer">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-300">
                        {Icon && <Icon className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {industry?.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {industry?.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Key Services:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {industry?.services?.map((service) => (
                          <div key={service} className="text-sm text-gray-600 bg-gray-50 rounded px-3 py-1">
                            {service}
                          </div>
                        ))}
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

export default Industries
