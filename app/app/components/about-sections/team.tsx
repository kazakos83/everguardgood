
"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Award, Shield, Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Team = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const teamStats = [
    {
      icon: Users,
      number: '25+',
      label: 'Expert Investigators',
      description: 'Highly trained professionals'
    },
    {
      icon: Award,
      number: '100+',
      label: 'Years Combined Experience',
      description: 'Collective industry expertise'
    },
    {
      icon: Shield,
      number: '15+',
      label: 'Former Law Enforcement',
      description: 'Ex-police and military personnel'
    },
    {
      icon: Search,
      number: '500+',
      label: 'Successful Cases',
      description: 'Proven track record'
    }
  ]

  const expertise = [
    'Law Enforcement Background',
    'Military Intelligence',
    'Corporate Security',
    'Digital Forensics',
    'OSINT Specialists',
    'Financial Investigations',
    'Surveillance Operations',
    'Legal Compliance',
    'Risk Assessment',
    'Crisis Management'
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
            Our Expert <span className="everguard-text-gradient">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our investigators bring together decades of experience from law enforcement, 
            military intelligence, and corporate security to deliver unparalleled results.
          </p>
        </motion.div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamStats?.map((stat, index) => {
            const Icon = stat?.icon
            return (
              <motion.div
                key={stat?.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 everguard-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {Icon && <Icon className="h-8 w-8 text-white" />}
                    </div>
                    <div className="text-3xl font-bold text-red-600 mb-2">{stat?.number}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{stat?.label}</h3>
                    <p className="text-gray-600 text-sm">{stat?.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Unmatched Expertise
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our team consists of seasoned professionals who have served in various capacities 
                within law enforcement, military intelligence, and corporate security sectors. 
                This diverse background enables us to approach each case with a unique perspective 
                and comprehensive understanding of investigative methodologies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Continuous professional development and ongoing training ensure our team stays 
                current with the latest investigative techniques, legal requirements, and 
                technological advancements in the field.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-red-800 mb-4">
                Professional Certifications
              </h4>
              <ul className="space-y-2 text-red-700">
                <li>• Licensed Professional Investigators</li>
                <li>• Private Investigation Licenses</li>
                <li>• Security Industry Certifications</li>
                <li>• Continuing Education Requirements</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Content - Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Areas of Expertise
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {expertise?.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.05) }}
                >
                  <Badge
                    variant="secondary"
                    className="w-full justify-center text-center py-2 px-4 bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors"
                  >
                    {item}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Team
