
import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest) {
  try {
    // Check if environment variables are set
    if (!process.env.SENDGRID_API_KEY) {
      return NextResponse.json({ 
        error: 'SENDGRID_API_KEY is missing',
        config: {
          hasApiKey: false,
          hasFromEmail: !!process.env.SENDGRID_FROM_EMAIL,
          hasToEmail: !!process.env.SENDGRID_TO_EMAIL,
          fromEmail: process.env.SENDGRID_FROM_EMAIL || 'not set',
          toEmail: process.env.SENDGRID_TO_EMAIL || 'not set'
        }
      }, { status: 400 })
    }

    if (!process.env.SENDGRID_FROM_EMAIL) {
      return NextResponse.json({ 
        error: 'SENDGRID_FROM_EMAIL is missing' 
      }, { status: 400 })
    }

    if (!process.env.SENDGRID_TO_EMAIL) {
      return NextResponse.json({ 
        error: 'SENDGRID_TO_EMAIL is missing' 
      }, { status: 400 })
    }

    // Set API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    // Test email
    const msg = {
      to: process.env.SENDGRID_TO_EMAIL,
      from: {
        email: process.env.SENDGRID_FROM_EMAIL,
        name: 'Everguard Intelligence Test'
      },
      subject: 'SendGrid Test Email - Everguard Intelligence',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #DC2626;">SendGrid Test Email</h2>
            <p>This is a test email to verify your SendGrid configuration is working correctly.</p>
            <p><strong>Test Details:</strong></p>
            <ul>
              <li>From: ${process.env.SENDGRID_FROM_EMAIL}</li>
              <li>To: ${process.env.SENDGRID_TO_EMAIL}</li>
              <li>Time: ${new Date().toISOString()}</li>
            </ul>
            <p style="color: #10B981;">✅ If you received this email, your SendGrid configuration is working!</p>
          </div>
        </div>
      `
    }

    const result = await sgMail.send(msg)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Test email sent successfully',
      messageId: result[0].headers['x-message-id'],
      config: {
        fromEmail: process.env.SENDGRID_FROM_EMAIL,
        toEmail: process.env.SENDGRID_TO_EMAIL
      }
    })
    
  } catch (error: any) {
    console.error('SendGrid test error:', error)
    
    return NextResponse.json({ 
      error: 'Failed to send test email',
      details: error.message,
      code: error.code,
      statusCode: error.response?.status,
      body: error.response?.body
    }, { status: 500 })
  }
}
