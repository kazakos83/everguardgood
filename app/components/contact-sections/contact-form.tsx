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
      // Create the email body with all form details
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

      const budgetDisplay = {
        'under-5k': 'Under $5,000',
        '5k-10k': '$5,000 - $10,000',
        '10k-25k': '$10,000 - $25,000',
        '25k-50k': '$25,000 - $50,000',
        'over-50k': 'Over $50,000',
        'discuss': 'Prefer to discuss'
      }[formData.budget] || 'Not specified'

      // Generate inquiry ID
      const inquiryId = `INQ-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

      // Create detailed email body for Everguard
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
Estimated Budget: ${budgetDisplay}

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

This inquiry was submitted through the Everguard Intelligence website contact form.
      `.trim()

      // Create mailto link for Everguard notification
      const everguardEmail = 'info@everguardgroup.com.au'
      const subject = `🚨 New ${formData.urgency.toUpperCase()} Priority Inquiry - ${formData.name}`
      const mailtoLink = `mailto:${everguardEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`

      // Create client confirmation email
      const clientEmailBody = `
Dear ${formData.name},

Thank you for contacting Everguard Intelligence. We have successfully received your inquiry regarding ${serviceDisplay} and will respond ${urgencyDisplay.toLowerCase()}.

Your Inquiry Details:
- Service: ${serviceDisplay}
- Priority Level: ${urgencyDisplay}
- Reference ID: ${inquiryId}

What Happens Next?
• Our team will review your requirements within 2 hours
• We'll prepare a detailed proposal and quote
• One of our senior investigators will contact you directly
• We'll schedule a confidential consultation at your convenience

Need Immediate Assistance?
24/7 Emergency Line: 1800-EVERGUARD
Email: info@everguardgroup.com.au

🔒 Confidentiality Assured: All communications are treated with the strictest confidentiality in accordance with our professional and licensing standards.

Best regards,
The Everguard Intelligence Team
Premier Corporate Investigation Services Australia
      `.trim()

      const clientMailtoLink = `mailto:${formData.email}?subject=${encodeURIComponent('Thank you for contacting Everguard Intelligence')}&body=${encodeURIComponent(clientEmailBody)}`

      // Open both email clients
      window.open(mailtoLink, '_blank')
      
      // Small delay then open client email
      setTimeout(() => {
        window.open(clientMailtoLink, '_blank')
      }, 1000)

      toast.success('Form submitted successfully! Email clients opened for sending notifications.')
      
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

    } catch (error) {
      toast.error('Failed to process form. Please try calling us directly at 1800-EVERGUARD.')
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
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
                      <SelectTrigger className="bg-white border-gray-300">
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
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select value={formData?.urgency || 'medium'} onValueChange={(value) => handleInputChange('urgency', value)}>
                      <SelectTrigger className="bg-white border-gray-300">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="select-content bg-white border border-gray-300 shadow-lg z-50">
                        <SelectItem value="low" className="select-item">Low - Within 2 weeks</SelectItem>
                        <SelectItem value="medium" className="select-item">Medium - Within 1 week</SelectItem>
                        <SelectItem value="high" className="select-item">High - Within 48 hours</SelectItem>
                        <SelectItem value="urgent" className="select-item">Urgent - Within 24 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget (Optional)</Label>
                  <Select value={formData?.budget || ''} onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger className="bg-white border-gray-300">
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
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
                        <span>Processing...</span>
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