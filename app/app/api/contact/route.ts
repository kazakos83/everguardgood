
import { NextRequest, NextResponse } from 'next/server'
import { sendAdminNotification, sendClientAcknowledgment } from '@/lib/sendgrid'

export const dynamic = "force-dynamic"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    const {
      name,
      email,
      phone,
      company,
      service,
      urgency,
      message,
      budget
    } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Generate unique inquiry ID for tracking
    const inquiryId = `INQ-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Prepare email data
    const emailData = {
      name,
      email,
      phone,
      company,
      service,
      urgency,
      message,
      budget,
      inquiryId
    }

    // Send emails (don't let email failures stop the form submission)
    const emailPromises = [
      sendAdminNotification(emailData),
      sendClientAcknowledgment(emailData)
    ]

    // Send emails in parallel and log results
    const emailResults = await Promise.allSettled(emailPromises)
    
    const adminEmailResult = emailResults[0]
    const clientEmailResult = emailResults[1]

    // Log email results for debugging
    if (adminEmailResult.status === 'rejected') {
      console.error('Admin email failed:', {
        error: adminEmailResult.reason,
        config: {
          hasApiKey: !!process.env.SENDGRID_API_KEY,
          hasFromEmail: !!process.env.SENDGRID_FROM_EMAIL,
          hasToEmail: !!process.env.SENDGRID_TO_EMAIL,
          fromEmail: process.env.SENDGRID_FROM_EMAIL,
          toEmail: process.env.SENDGRID_TO_EMAIL
        }
      })
    }
    if (clientEmailResult.status === 'rejected') {
      console.error('Client email failed:', {
        error: clientEmailResult.reason,
        clientEmail: emailData.email
      })
    }

    // Return success if at least admin email is sent
    const adminEmailSent = adminEmailResult.status === 'fulfilled' && adminEmailResult.value?.success
    const clientEmailSent = clientEmailResult.status === 'fulfilled' && clientEmailResult.value?.success

    if (!adminEmailSent && !clientEmailSent) {
      throw new Error('Failed to send notification emails')
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      inquiryId,
      emailStatus: {
        adminEmailSent,
        clientEmailSent
      }
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}
