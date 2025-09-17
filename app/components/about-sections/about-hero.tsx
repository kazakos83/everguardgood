
"use client"

import { motion } from 'framer-motion'
import { Award, Shield, Users, CheckCircle } from 'lucide-react'

const AboutHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
              <Award className="h-4 w-4" />
              <span>Established Leader in Corporate Intelligence</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              About
              <br />
              <span className="everguard-text-gradient">Everguard</span>
              <br />
              Intelligence
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              For over 15 years, Everguard Intelligence has been Australia's trusted partner 
              in corporate investigation and intelligence services. We combine traditional 
              investigative techniques with cutting-edge technology to deliver comprehensive 
              solutions for our clients.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                <div className="text-gray-600">Cases Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 everguard-gradient rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional investigation and intelligence services that empower our 
                clients to make informed decisions, mitigate risks, and protect their interests 
                with the highest standards of professionalism and confidentiality.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 everguard-gradient rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Promise</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We are committed to delivering accurate, timely, and actionable intelligence 
                while maintaining the strictest standards of confidentiality and ethical conduct 
                in all our operations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
