
"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Award, Shield, CheckCircle, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Certifications = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const certifications = [
    {
      icon: Award,
      title: 'Professional Licensing',
      description: 'Fully licensed and compliant with Australian regulatory and professional standards for investigation services.',
      features: ['Professional Ethics', 'Continuing Education', 'Industry Standards', 'Quality Assurance']
    },
    {
      icon: Shield,
      title: 'Licensed Operations',
      description: 'Licensed private investigation services across all Australian states and territories.',
      features: ['State Licensing', 'Background Checks', 'Insurance Coverage', 'Legal Compliance']
    },
    {
      icon: CheckCircle,
      title: 'Quality Management',
      description: 'ISO-compliant quality management systems ensuring consistent service delivery.',
      features: ['Process Standards', 'Quality Control', 'Client Satisfaction', 'Continuous Improvement']
    },
    {
      icon: Star,
      title: 'Industry Recognition',
      description: 'Recognized leader in corporate intelligence with numerous industry awards and certifications.',
      features: ['Industry Awards', 'Client Testimonials', 'Peer Recognition', 'Excellence Standards']
    }
  ]

  return (
    <section ref={ref} className="py-20 everguard-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="text-red-200">Compliance</span>
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in our comprehensive certifications 
            and unwavering adherence to industry standards and regulations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications?.map((cert, index) => {
            const Icon = cert?.icon
            return (
              <motion.div
                key={cert?.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white bg-opacity-10 border-0 hover:bg-opacity-20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {Icon && <Icon className="h-8 w-8 text-white" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3">
                          {cert?.title}
                        </h3>
                        <p className="text-red-100 leading-relaxed mb-6">
                          {cert?.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {cert?.features?.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-red-200" />
                          <span className="text-red-100 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white bg-opacity-10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Commitment to Excellence
            </h3>
            <p className="text-lg text-red-100 max-w-3xl mx-auto leading-relaxed">
              Our certifications and compliance standards are not just credentials—they represent 
              our unwavering commitment to providing the highest quality investigation services 
              while maintaining the trust and confidence of our clients across Australia.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
