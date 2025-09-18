const sgMail = require('@sendgrid/mail')

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    }
  }

  try {
    const data = JSON.parse(event.body)
    
    const {
      name,
      email,
      phone,
      company,
      service,
      urgency,
      message,
      budget
    } = data

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({ error: 'Name, email, and message are required' })
      }
    }

    // Check if SendGrid is configured
    if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM_EMAIL || !process.env.SENDGRID_TO_EMAIL) {
      console.error('SendGrid configuration missing')
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({ error: 'Email service not configured' })
      }
    }

    // Initialize SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    // Generate unique inquiry ID
    const inquiryId = `INQ-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Service display mapping
    const serviceDisplay = {
      'corporate-intelligence': 'Corporate Intelligence',
      'insurance-investigations': 'Insurance Investigations',
      'osint': 'OSINT Services',
      'skip-tracing': 'Skip Tracing',
      'surveillance': 'Surveillance',
      'background-checks': 'Background Checks',
      'other': 'Other Services'
    }[service] || 'General Inquiry'

    // Urgency color mapping
    const urgencyColor = {
      'low': '#10B981',
      'medium': '#F59E0B', 
      'high': '#EF4444',
      'urgent': '#DC2626'
    }[urgency] || '#F59E0B'

    // Admin email template
    const adminEmailHtml = `
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
              ${urgency.toUpperCase()} PRIORITY
            </span>
          </div>

          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">Contact Information</div>
              <strong>${name}</strong><br>
              <a href="mailto:${email}" style="color: #DC2626;">${email}</a><br>
              ${phone ? `📞 ${phone}` : 'No phone provided'}
            </div>
            
            <div class="info-item">
              <div class="info-label">Business Details</div>
              ${company ? `<strong>${company}</strong><br>` : 'No company provided<br>'}
              Service: <strong>${serviceDisplay}</strong><br>
              ${budget ? `Budget: <strong>${budget}</strong>` : 'Budget not specified'}
            </div>
          </div>

          <div class="message-section">
            <div class="info-label" style="margin-bottom: 15px;">Project Details:</div>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="text-align: center;">
            <a href="mailto:${email}?subject=Re: Your inquiry to Everguard Intelligence" class="cta-button">
              Respond to Client
            </a>
          </div>

          <div class="footer">
            <p><strong>Inquiry ID:</strong> ${inquiryId}</p>
            <p>This inquiry was submitted through the Everguard Intelligence website contact form.</p>
            <p style="color: #DC2626; font-weight: bold;">⚡ ${urgency === 'urgent' ? 'URGENT: Respond within 24 hours' : urgency === 'high' ? 'HIGH PRIORITY: Respond within 48 hours' : 'Standard response time applies'}</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Client email template
    const responseTime = {
      'urgent': 'within 24 hours',
      'high': 'within 48 hours',
      'medium': 'within 1 business day',
      'low': 'within 2 business days'
    }[urgency] || 'within 1 business day'

    const clientEmailHtml = `
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

          <p>Dear ${name},</p>
          
          <p>Thank you for contacting Everguard Intelligence. We have successfully received your inquiry regarding <strong>${serviceDisplay}</strong> and will respond ${responseTime}.</p>

          <div class="highlight-box">
            <h3 style="margin: 0 0 10px 0;">Your Inquiry Details</h3>
            <p style="margin: 0;"><strong>Service:</strong> ${serviceDisplay}</p>
            <p style="margin: 5px 0 0 0;"><strong>Priority Level:</strong> ${urgency.charAt(0).toUpperCase() + urgency.slice(1)} Priority</p>
            <p style="margin: 5px 0 0 0;"><strong>Reference ID:</strong> ${inquiryId}</p>
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

    // Prepare emails
    const adminEmail = {
      to: process.env.SENDGRID_TO_EMAIL,
      from: {
        email: process.env.SENDGRID_FROM_EMAIL,
        name: 'Everguard Intelligence Website'
      },
      subject: `🚨 New ${urgency.toUpperCase()} Priority Inquiry - ${name}`,
      html: adminEmailHtml
    }

    const clientEmail = {
      to: email,
      from: {
        email: process.env.SENDGRID_FROM_EMAIL,
        name: 'Everguard Intelligence'
      },
      subject: 'Thank you for contacting Everguard Intelligence - We\'ll respond within 24 hours',
      html: clientEmailHtml
    }

    // Send emails
    const emailResults = await Promise.allSettled([
      sgMail.send(adminEmail),
      sgMail.send(clientEmail)
    ])

    const adminEmailResult = emailResults[0]
    const clientEmailResult = emailResults[1]

    // Check results
    const adminEmailSent = adminEmailResult.status === 'fulfilled'
    const clientEmailSent = clientEmailResult.status === 'fulfilled'

    if (adminEmailResult.status === 'rejected') {
      console.error('Admin email failed:', adminEmailResult.reason)
    }
    if (clientEmailResult.status === 'rejected') {
      console.error('Client email failed:', clientEmailResult.reason)
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully',
        inquiryId,
        emailStatus: {
          adminEmailSent,
          clientEmailSent
        }
      })
    }
    
  } catch (error) {
    console.error('Contact form error:', error)
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ error: 'Failed to submit contact form. Please try again.' })
    }
  }
}