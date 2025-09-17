
"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Calendar, MapPin, TrendingUp, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const CompanyStory = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const timeline = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Everguard Intelligence was established with a vision to transform the investigation industry in Australia.',
      icon: Calendar
    },
    {
      year: '2012',
      title: 'National Expansion',
      description: 'Extended our services across all Australian states and territories, establishing a nationwide network.',
      icon: MapPin
    },
    {
      year: '2016',
      title: 'Technology Integration',
      description: 'Pioneered the integration of OSINT and digital investigation techniques with traditional methods.',
      icon: TrendingUp
    },
    {
      year: '2020',
      title: 'Professional Licensing',
      description: 'Achieved full professional licensing and compliance, setting new standards for investigation services.',
      icon: Award
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
            Our <span className="everguard-text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming Australia's premier investigation service, 
            our story is one of continuous growth, innovation, and unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {timeline?.map((item, index) => {
            const Icon = item?.icon
            return (
              <motion.div
                key={item?.year}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="lg:grid lg:grid-cols-4 lg:gap-0">
                      {/* Year */}
                      <div className="lg:col-span-1 everguard-gradient p-8 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            {Icon && <Icon className="h-8 w-8 text-white" />}
                          </div>
                          <div className="text-3xl font-bold text-white">{item?.year}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-3 p-8 flex items-center">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            {item?.title}
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            {item?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Current Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Today, We Are Proud To Be</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-600 mb-2">Australia's</div>
              <div className="text-gray-700">Leading Investigation Service</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-600 mb-2">Licensed</div>
              <div className="text-gray-700">Compliant & Certified</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-700">Available Nationwide</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompanyStory
