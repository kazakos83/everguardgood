
"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Shield, Eye, Users, Clock, CheckCircle, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Values = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct all investigations with the highest ethical standards, ensuring truth and transparency in every case.'
    },
    {
      icon: Eye,
      title: 'Confidentiality',
      description: 'Strict adherence to confidentiality protocols, protecting our clients\' sensitive information at all times.'
    },
    {
      icon: Users,
      title: 'Professionalism',
      description: 'Our team maintains the highest professional standards, delivering results with expertise and discretion.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Consistent, timely delivery of accurate intelligence and investigation services you can depend on.'
    },
    {
      icon: CheckCircle,
      title: 'Excellence',
      description: 'Commitment to exceeding client expectations through innovative techniques and meticulous attention to detail.'
    },
    {
      icon: Award,
      title: 'Compliance',
      description: 'Full adherence to industry regulations and professional standards, ensuring legal and ethical operations.'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core <span className="everguard-text-gradient">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These fundamental principles guide every aspect of our work, 
            from initial client consultation to final report delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values?.map((value, index) => {
            const Icon = value?.icon
            return (
              <motion.div
                key={value?.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-md group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 everguard-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      {Icon && <Icon className="h-8 w-8 text-white" />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value?.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value?.description}
                    </p>
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

export default Values
