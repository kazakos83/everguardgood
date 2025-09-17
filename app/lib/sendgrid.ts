

import sgMail from '@sendgrid/mail'

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  urgency?: string
  message: string
  budget?: string
  inquiryId?: string
}

// Email template for admin notification
const getAdminEmailTemplate = (data: ContactFormData) => {
  const urgencyColor = {
    'low': '#10B981',
    'medium': '#F59E0B', 
    'high': '#EF4444',
    'urgent': '#DC2626'
  }[data.urgency || 'medium']

  const serviceDisplay = {
    'corporate-intelligence': 'Corporate Intelligence',
    'insurance-investigations': 'Insurance Investigations',
    'osint': 'OSINT Services',
    'skip-tracing': 'Skip Tracing',
    'surveillance': 'Surveillance',
    'background-checks': 'Background Checks',
    'other': 'Other Services'
  }[data.service || 'other'] || 'General Inquiry'

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission - Everguard Intelligence</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { text-align: center; border-bottom: 3px solid #DC2626; padding-bottom: 20px; margin-bottom: 30px; }
        .logo { color: #DC2626; font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        .urgency-badge { display: inline-block; padding: 5px 15px; border-radius: 20px; color: white; font-weight: bold; font-size: 12px; text-transform: uppercase; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
        .info-item { background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #DC2626; }
        .info-label { font-weight: bold; color: #DC2626; margin-bottom: 5px; }
        .message-section { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px; }
        .cta-button { display: inline-block; background: #DC2626; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">EVERGUARD INTELLIGENCE</div>
          <h2 style="margin: 0; color: #333;">New Contact Form Submission</h2>
          <span class="urgency-badge" style="background-color: ${urgencyColor};">
            ${data.urgency?.toUpperCase()} PRIORITY
          </span>
        </div>

        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Contact Information</div>
            <strong>${data.name}</strong><br>
            <a href="mailto:${data.email}" style="color: #DC2626;">${data.email}</a><br>
            ${data.phone ? `📞 ${data.phone}` : 'No phone provided'}
          </div>
          
          <div class="info-item">
            <div class="info-label">Business Details</div>
            ${data.company ? `<strong>${data.company}</strong><br>` : 'No company provided<br>'}
            Service: <strong>${serviceDisplay}</strong><br>
            ${data.budget ? `Budget: <strong>${data.budget}</strong>` : 'Budget not specified'}
          </div>
        </div>

        <div class="message-section">
          <div class="info-label" style="margin-bottom: 15px;">Project Details:</div>
          <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
        </div>

        <div style="text-align: center;">
          <a href="mailto:${data.email}?subject=Re: Your inquiry to Everguard Intelligence" class="cta-button">
            Respond to Client
          </a>
        </div>

        <div class="footer">
          <p><strong>Inquiry ID:</strong> ${data.inquiryId || 'N/A'}</p>
          <p>This inquiry was submitted through the Everguard Intelligence website contact form.</p>
          <p style="color: #DC2626; font-weight: bold;">⚡ ${data.urgency === 'urgent' ? 'URGENT: Respond within 24 hours' : data.urgency === 'high' ? 'HIGH PRIORITY: Respond within 48 hours' : 'Standard response time applies'}</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Email template for client acknowledgment
const getClientEmailTemplate = (data: ContactFormData) => {
  const serviceDisplay = {
    'corporate-intelligence': 'Corporate Intelligence',
    'insurance-investigations': 'Insurance Investigations', 
    'osint': 'OSINT Services',
    'skip-tracing': 'Skip Tracing',
    'surveillance': 'Surveillance',
    'background-checks': 'Background Checks',
    'other': 'Other Services'
  }[data.service || 'other'] || 'General Inquiry'

  const responseTime = {
    'urgent': 'within 24 hours',
    'high': 'within 48 hours',
    'medium': 'within 1 business day',
    'low': 'within 2 business days'
  }[data.urgency || 'medium']

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank you for contacting Everguard Intelligence</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { text-align: center; border-bottom: 3px solid #DC2626; padding-bottom: 20px; margin-bottom: 30px; }
        .logo { color: #DC2626; font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        .highlight-box { background: linear-gradient(135deg, #DC2626, #B91C1C); color: white; padding: 20px; border-radius: 10px; text-align: center; margin: 20px 0; }
        .info-box { background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #DC2626; margin: 20px 0; }
        .contact-info { background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">EVERGUARD INTELLIGENCE</div>
          <h2 style="margin: 0; color: #333;">Thank You for Your Inquiry</h2>
        </div>

        <p>Dear ${data.name},</p>
        
        <p>Thank you for contacting Everguard Intelligence. We have successfully received your inquiry regarding <strong>${serviceDisplay}</strong> and will respond ${responseTime}.</p>

        <div class="highlight-box">
          <h3 style="margin: 0 0 10px 0;">Your Inquiry Details</h3>
          <p style="margin: 0;"><strong>Service:</strong> ${serviceDisplay}</p>
          <p style="margin: 5px 0 0 0;"><strong>Priority Level:</strong> ${(data.urgency || 'medium').charAt(0).toUpperCase() + (data.urgency || 'medium').slice(1)} Priority</p>
          ${data.inquiryId ? `<p style="margin: 5px 0 0 0;"><strong>Reference ID:</strong> ${data.inquiryId}</p>` : ''}
        </div>

        <div class="info-box">
          <h4 style="color: #DC2626; margin-top: 0;">What Happens Next?</h4>
          <ul style="margin: 0; padding-left: 20px;">
            <li>Our team will review your requirements within 2 hours</li>
            <li>We'll prepare a detailed proposal and quote</li>
            <li>One of our senior investigators will contact you directly</li>
            <li>We'll schedule a confidential consultation at your convenience</li>
          </ul>
        </div>

        <div class="contact-info">
          <h4 style="color: #DC2626; margin-top: 0;">Need Immediate Assistance?</h4>
          <p style="margin: 0;"><strong>24/7 Emergency Line:</strong> <a href="tel:+61-1800-EVERGUARD" style="color: #DC2626;">1800-EVERGUARD</a></p>
          <p style="margin: 10px 0 0 0;"><strong>Email:</strong> <a href="mailto:info@everguardgroup.com.au" style="color: #DC2626;">info@everguardgroup.com.au</a></p>
        </div>

        <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border: 1px solid #fecaca; margin: 20px 0;">
          <p style="margin: 0; color: #991b1b;"><strong>🔒 Confidentiality Assured:</strong> All communications are treated with the strictest confidentiality in accordance with our professional and licensing standards.</p>
        </div>

        <div class="footer">
          <p>Best regards,<br><strong>The Everguard Intelligence Team</strong></p>
          <p>Premier Corporate Investigation Services Australia</p>
          <p style="font-size: 12px; color: #999;">This is an automated confirmation email. Please do not reply to this email address.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Send admin notification email
export const sendAdminNotification = async (data: ContactFormData) => {
  if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM_EMAIL || !process.env.SENDGRID_TO_EMAIL) {
    console.warn('SendGrid configuration missing, skipping admin email')
    return { success: false, error: 'Email configuration missing' }
  }

  const msg = {
    to: process.env.SENDGRID_TO_EMAIL,
    from: {
      email: process.env.SENDGRID_FROM_EMAIL,
      name: 'Everguard Intelligence Website'
    },
    subject: `🚨 New ${data.urgency?.toUpperCase()} Priority Inquiry - ${data.name}`,
    html: getAdminEmailTemplate(data),
  }

  try {
    await sgMail.send(msg)
    return { success: true }
  } catch (error) {
    console.error('SendGrid admin email error:', error)
    return { success: false, error: error }
  }
}

// Send client acknowledgment email
export const sendClientAcknowledgment = async (data: ContactFormData) => {
  if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM_EMAIL) {
    console.warn('SendGrid configuration missing, skipping client email')
    return { success: false, error: 'Email configuration missing' }
  }

  const msg = {
    to: data.email,
    from: {
      email: process.env.SENDGRID_FROM_EMAIL,
      name: 'Everguard Intelligence'
    },
    subject: 'Thank you for contacting Everguard Intelligence - We\'ll respond within 24 hours',
    html: getClientEmailTemplate(data),
  }

  try {
    await sgMail.send(msg)
    return { success: true }
  } catch (error) {
    console.error('SendGrid client email error:', error)
    return { success: false, error: error }
  }
}

