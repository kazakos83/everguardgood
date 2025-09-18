"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { toast } from 'sonner'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    urgency: 'medium',
    message: '',
    budget: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create FormData for Netlify Forms
      const netlifyFormData = new FormData()
      netlifyFormData.append('form-name', 'contact')
      netlifyFormData.append('name', formData.name)
      netlifyFormData.append('email', formData.email)
      netlifyFormData.append('phone', formData.phone)
      netlifyFormData.append('company', formData.company)
      netlifyFormData.append('service', formData.service)
      netlifyFormData.append('urgency', formData.urgency)
      netlifyFormData.append('message', formData.message)
      netlifyFormData.append('budget', formData.budget)

      // Submit to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(netlifyFormData as any).toString()
      })

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll contact you within 24 hours.')
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          urgency: 'medium',
          message: '',
          budget: ''
        })

        // Also create a backup email to Everguard
        const serviceDisplay = {
          'corporate-intelligence': 'Corporate Intelligence',
          'insurance-investigations': 'Insurance Investigations',
          'osint': 'OSINT Services',
          'skip-tracing': 'Skip Tracing',
          'surveillance': 'Surveillance',
          'background-checks': 'Background Checks',
          'other': 'Other Services'
        }[formData.service] || 'General Inquiry'

        const urgencyDisplay = {
          'low': 'Low - Within 2 weeks',
          'medium': 'Medium - Within 1 week', 
          'high': 'High - Within 48 hours',
          'urgent': 'Urgent - Within 24 hours'
        }[formData.urgency] || 'Medium Priority'

        const inquiryId = `INQ-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

        const emailBody = `
🚨 NEW ${formData.urgency.toUpperCase()} PRIORITY INQUIRY - EVERGUARD INTELLIGENCE

INQUIRY ID: ${inquiryId}
SUBMITTED: ${new Date().toLocaleString('en-AU')}

═══════════════════════════════════════════════════════════════

📋 CONTACT INFORMATION:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}

═══════════════════════════════════════════════════════════════

🎯 SERVICE DETAILS:
Service Required: ${serviceDisplay}
Urgency Level: ${urgencyDisplay}
Estimated Budget: ${formData.budget ? {
          'under-5k': 'Under $5,000',
          '5k-10k': '$5,000 - $10,000',
          '10k-25k': '$10,000 - $25,000',
          '25k-50k': '$25,000 - $50,000',
          'over-50k': 'Over $50,000',
          'discuss': 'Prefer to discuss'
        }[formData.budget] || 'Not specified' : 'Not specified'}

═══════════════════════════════════════════════════════════════

💬 PROJECT DETAILS:
${formData.message}

═══════════════════════════════════════════════════════════════

⚡ ACTION REQUIRED:
${formData.urgency === 'urgent' ? '🔴 URGENT: Respond within 24 hours' : 
  formData.urgency === 'high' ? '🟡 HIGH PRIORITY: Respond within 48 hours' : 
  '🟢 Standard response time applies'}

Reply to: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
        `.trim()

        // Create backup mailto link for Everguard
        const everguardEmail = 'info@everguardgroup.com.au'
        const subject = `🚨 New ${formData.urgency.toUpperCase()} Priority Inquiry - ${formData.name}`
        const mailtoLink = `mailto:${everguardEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`
        
        // Open email client as backup
        setTimeout(() => {
          window.open(mailtoLink, '_blank')
        }, 1000)

      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again or call us directly at 1800-EVERGUARD.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-gray-900">
                Request a Consultation
              </CardTitle>
              <p className="text-gray-600 mt-4">
                Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Hidden Netlify form for bot detection */}
              <form name="contact" netlify="true" hidden>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <input type="tel" name="phone" />
                <input type="text" name="company" />
                <input type="text" name="service" />
                <input type="text" name="urgency" />
                <textarea name="message"></textarea>
                <input type="text" name="budget" />
              </form>

              <form onSubmit={handleSubmit} className="space-y-6" name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData?.name || ''}
                      onChange={(e) => handleInputChange('name', e?.target?.value || '')}
                      required
                      className="pl-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData?.email || ''}
                      onChange={(e) => handleInputChange('email', e?.target?.value || '')}
                      required
                      className="pl-4"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData?.phone || ''}
                      onChange={(e) => handleInputChange('phone', e?.target?.value || '')}
                      className="pl-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData?.company || ''}
                      onChange={(e) => handleInputChange('company', e?.target?.value || '')}
                      className="pl-4"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required</Label>
                    <Select value={formData?.service || ''} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="bg-white border-gray-300" name="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="select-content bg-white border border-gray-300 shadow-lg z-50">
                        <SelectItem value="corporate-intelligence" className="select-item">Corporate Intelligence</SelectItem>
                        <SelectItem value="insurance-investigations" className="select-item">Insurance Investigations</SelectItem>
                        <SelectItem value="osint" className="select-item">OSINT Services</SelectItem>
                        <SelectItem value="skip-tracing" className="select-item">Skip Tracing</SelectItem>
                        <SelectItem value="surveillance" className="select-item">Surveillance</SelectItem>
                        <SelectItem value="background-checks" className="select-item">Background Checks</SelectItem>
                        <SelectItem value="other" className="select-item">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="service" value={formData.service} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select value={formData?.urgency || 'medium'} onValueChange={(value) => handleInputChange('urgency', value)}>
                      <SelectTrigger className="bg-white border-gray-300" name="urgency">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="select-content bg-white border border-gray-300 shadow-lg z-50">
                        <SelectItem value="low" className="select-item">Low - Within 2 weeks</SelectItem>
                        <SelectItem value="medium" className="select-item">Medium - Within 1 week</SelectItem>
                        <SelectItem value="high" className="select-item">High - Within 48 hours</SelectItem>
                        <SelectItem value="urgent" className="select-item">Urgent - Within 24 hours</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="urgency" value={formData.urgency} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget (Optional)</Label>
                  <Select value={formData?.budget || ''} onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger className="bg-white border-gray-300" name="budget">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="select-content bg-white border border-gray-300 shadow-lg z-50">
                      <SelectItem value="under-5k" className="select-item">Under $5,000</SelectItem>
                      <SelectItem value="5k-10k" className="select-item">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k" className="select-item">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k" className="select-item">$25,000 - $50,000</SelectItem>
                      <SelectItem value="over-50k" className="select-item">Over $50,000</SelectItem>
                      <SelectItem value="discuss" className="select-item">Prefer to discuss</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="budget" value={formData.budget} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData?.message || ''}
                    onChange={(e) => handleInputChange('message', e?.target?.value || '')}
                    placeholder="Please provide details about your investigation requirements, including any specific objectives, timelines, or special considerations..."
                    required
                    className="pl-4"
                  />
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-red-800 mb-1">Confidentiality Guaranteed</p>
                      <p className="text-red-700">
                        All information shared is treated with the strictest confidentiality. 
                        We're licensed, professional, and fully insured.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full everguard-gradient text-white hover:opacity-90 text-lg py-6 group"
                >
                  <div className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                </Button>

                <p className="text-center text-sm text-gray-600">
                  By submitting this form, you agree to our confidentiality terms. 
                  We'll respond within 24 hours during business days.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm