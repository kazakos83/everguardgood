
"use client"

import { motion } from 'framer-motion'
import { Search, Shield, Eye, Users, FileSearch, AlertTriangle } from 'lucide-react'

const ServiceHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 text-red-100"
      >
        <Shield className="h-16 w-16" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-16 text-red-100"
      >
        <Search className="h-12 w-12" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Professional
            <br />
            <span className="everguard-text-gradient">Investigation</span>
            <br />
            Services
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive investigation and intelligence solutions tailored to meet the unique 
            needs of insurance companies, corporate enterprises, and government agencies
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto pt-8">
            {[
              { icon: Shield, label: 'Corporate Intelligence' },
              { icon: FileSearch, label: 'Insurance Claims' },
              { icon: Search, label: 'OSINT Services' },
              { icon: Users, label: 'Skip Tracing' },
              { icon: Eye, label: 'Surveillance' },
              { icon: AlertTriangle, label: 'Background Checks' }
            ]?.map((item, index) => {
              const Icon = item?.icon
              return (
                <motion.div
                  key={item?.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 everguard-gradient rounded-lg flex items-center justify-center mb-2">
                    {Icon && <Icon className="h-6 w-6 text-white" />}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item?.label}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceHero
