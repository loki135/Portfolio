import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

export async function POST(request: NextRequest) {
  // Check if environment variables are set
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Missing email configuration - EMAIL_USER or EMAIL_PASS not set');
    return NextResponse.json(
      { 
        message: 'Server configuration error - Email credentials not configured',
        error: 'Missing EMAIL_USER or EMAIL_PASS environment variables'
      },
      { status: 500 }
    );
  }

  try {
    console.log('Contact form request received');
    // Parse request body
    const body = await request.json();
    console.log('Request body parsed:', { name: body.name, email: body.email, subject: body.subject });
    // Validate request body
    const validatedData = contactSchema.parse(body);
    const { name, email, subject, message } = validatedData;
    console.log('Data validated successfully');

    // Create transporter
    console.log('Creating email transporter...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log('Email transporter created');

    // Send email
    console.log('Sending email...');
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Use your email as sender (more secure)
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // Set reply-to as the contact form email
      subject: `[Portfolio Contact] ${subject}`,
      text: `\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    console.log('Email sent successfully');

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          message: 'Invalid form data',
          errors: error.errors 
        },
        { status: 400 }
      );
    }
    // Return more detailed error information for debugging
    return NextResponse.json(
      { 
        message: 'Failed to send email. Please try again later.',
        error: error instanceof Error ? error.message : 'Unknown error',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
} 