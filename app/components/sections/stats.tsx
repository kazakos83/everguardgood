
"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from '@/components/animated-counter'
import { CheckCircle, Users, Building, Award } from 'lucide-react'

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const stats = [
    {
      icon: CheckCircle,
      number: 500,
      suffix: '+',
      label: 'Cases Completed',
      description: 'Successful investigations delivered'
    },
    {
      icon: Users,
      number: 100,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Satisfied customers across Australia'
    },
    {
      icon: Building,
      number: 8,
      suffix: '/8',
      label: 'States & Territories',
      description: 'Complete Australia coverage'
    },
    {
      icon: Award,
      number: 15,
      suffix: '+',
      label: 'Years Experience',
      description: 'Industry expertise and knowledge'
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl"
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
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20"
          >
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-red-100">Our Achievements</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-premium">
            Proven Track <span className="bg-gradient-to-r from-red-400 to-red-200 bg-clip-text text-transparent">Record</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto text-elegant leading-relaxed">
            Numbers that speak to our 
            <span className="font-semibold text-white"> unwavering commitment</span> to excellence and 
            <span className="font-semibold text-white"> exceptional client satisfaction</span>
          </p>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat, index) => {
            const Icon = stat?.icon
            return (
              <motion.div
                key={stat?.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="text-center group"
              >
                <div className="card-glass bg-white/5 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 group-hover:scale-105 h-full min-h-[320px] flex flex-col justify-center border border-white/10 hover:border-white/20 shadow-2xl hover:shadow-glow">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="mb-6"
                  >
                    {Icon && (
                      <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    )}
                  </motion.div>
                  
                  <div className="mb-4">
                    <AnimatedCounter 
                      end={stat?.number || 0} 
                      suffix={stat?.suffix || ''} 
                      className="font-bold text-5xl md:text-6xl bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent text-premium mb-3"
                    />
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-200 transition-colors duration-300">
                      {stat?.label}
                    </h3>
                    <p className="text-gray-300 text-sm text-elegant group-hover:text-gray-200 transition-colors duration-300">
                      {stat?.description}
                    </p>
                  </div>
                  
                  {/* Decorative bottom line */}
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={inView ? { width: '50%' } : {}}
                    transition={{ delay: (index * 0.15) + 0.8, duration: 0.8 }}
                    className="h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full mx-auto mt-auto group-hover:from-red-300 group-hover:to-red-500 transition-all duration-300"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-red-100 max-w-2xl mx-auto">
            Our commitment to excellence and client satisfaction has made us the trusted choice 
            for investigation services across Australia
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
