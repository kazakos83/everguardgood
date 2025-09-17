
"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Clock, MapPin, Shield, Award, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      primary: '1800-EVERGUARD',
      secondary: '+61 1800 383 742',
      description: '24/7 emergency hotline available'
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'info@everguardgroup.com.au',
      secondary: 'urgent@everguard.com.au',
      description: 'Response within 24 hours guaranteed'
    }
  ]

  const coverage = [
    'New South Wales',
    'Victoria',
    'Queensland',
    'Western Australia',
    'South Australia',
    'Tasmania',
    'Northern Territory',
    'Australian Capital Territory'
  ]

  const guarantees = [
    'Licensed & Professional Operations',
    '100% Confidentiality',
    '24/7 Emergency Response',
    'Australia-wide Coverage',
    'Licensed & Insured',
    'Court-Ready Reports'
  ]

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Contact Information
            </h2>
            <p className="text-gray-300">
              Multiple ways to reach our expert team for immediate assistance
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods?.map((method) => {
              const Icon = method?.icon
              return (
                <Card key={method?.title} className="bg-white bg-opacity-10 border-0 hover:bg-opacity-20 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 everguard-gradient rounded-lg flex items-center justify-center">
                        {Icon && <Icon className="h-6 w-6 text-white" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{method?.title}</h3>
                        <div className="space-y-1 mb-2">
                          <div className="text-red-300 font-semibold">{method?.primary}</div>
                          <div className="text-gray-300 text-sm">{method?.secondary}</div>
                        </div>
                        <p className="text-gray-400 text-sm">{method?.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Operating Hours */}
          <Card className="bg-white bg-opacity-10 border-0">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 everguard-gradient rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">Operating Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Monday - Friday:</span>
                      <span className="text-white">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Saturday:</span>
                      <span className="text-white">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sunday:</span>
                      <span className="text-white">Emergency Only</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span className="text-red-300">Emergency Line:</span>
                      <span className="text-red-300">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Coverage Areas */}
          <Card className="bg-white bg-opacity-10 border-0">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 everguard-gradient rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">Service Coverage</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {coverage?.map((state) => (
                      <div key={state} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-400" />
                        <span className="text-gray-300 text-sm">{state}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Guarantees */}
          <Card className="bg-white bg-opacity-10 border-0">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 everguard-gradient rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">Our Guarantees</h3>
                  <div className="space-y-2">
                    {guarantees?.map((guarantee) => (
                      <div key={guarantee} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-400" />
                        <span className="text-gray-300 text-sm">{guarantee}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="bg-red-900 bg-opacity-50 border border-red-600">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Emergency Situations</h3>
              <p className="text-red-200 mb-4 text-sm">
                For urgent matters requiring immediate attention, call our 24/7 emergency line
              </p>
              <Button
                asChild
                className="everguard-gradient text-white hover:opacity-90 font-semibold"
              >
                <a href="tel:+61-1800-EVERGUARD">Call Emergency Line</a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactInfo
