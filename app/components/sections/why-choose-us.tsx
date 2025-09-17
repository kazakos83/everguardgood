
"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Award, Clock, Shield, Users, CheckCircle, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const reasons = [
    {
      icon: Award,
      title: 'Licensed & Professional',
      description: 'Licensed and fully compliant with Australian regulatory standards, ensuring the highest professional and ethical practices.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock service availability with rapid response times for urgent investigations and time-sensitive matters.'
    },
    {
      icon: Shield,
      title: 'Confidentiality Guaranteed',
      description: 'Strict confidentiality protocols and secure handling of all sensitive information with comprehensive non-disclosure agreements.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly trained investigators with extensive experience in law enforcement, military intelligence, and corporate security.'
    },
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: 'Consistent delivery of accurate, actionable intelligence with a success rate that exceeds industry standards.'
    },
    {
      icon: Star,
      title: 'Australia-Wide Coverage',
      description: 'Comprehensive coverage across all Australian states and territories with local expertise in each region.'
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-white via-gray-50/50 to-stone-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"
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
            <span className="text-gray-700">Why Choose Us</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-premium">
            Why Choose <span className="everguard-text-gradient">Everguard</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto text-elegant leading-relaxed">
            When it comes to corporate intelligence and investigation services, 
            <span className="font-semibold text-gray-900"> experience and reliability</span> matter. 
            Here's what sets us apart in the competitive landscape of 
            <span className="font-semibold text-gray-900"> professional investigations</span>.
          </p>
        </motion.div>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons?.map((reason, index) => {
            const Icon = reason?.icon
            return (
              <motion.div
                key={reason?.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card-premium h-full rounded-2xl p-8 text-center group-hover:scale-[1.02] transition-all duration-500">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-20 h-20 everguard-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow"
                  >
                    {Icon && <Icon className="h-10 w-10 text-white" />}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-premium group-hover:text-red-700 transition-colors duration-300">
                    {reason?.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed text-elegant group-hover:text-gray-800 transition-colors duration-300">
                    {reason?.description}
                  </p>
                  
                  {/* Decorative element */}
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={inView ? { width: '60px' } : {}}
                    transition={{ delay: (index * 0.1) + 0.5, duration: 0.8 }}
                    className="h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full mx-auto mt-6 group-hover:from-red-500 group-hover:to-red-700 transition-all duration-300"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
