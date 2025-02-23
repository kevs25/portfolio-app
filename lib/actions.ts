'use server'

import {z} from 'zod';
import { ContactFormSchema } from './schemas';
import { Resend } from 'resend'
import ContactFormEmail from '@/emails/contact-form-email'
import React from 'react'

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
    const result = ContactFormSchema.safeParse(data)
  
    if (result.error) {
      return { error: result.error.format() }
    }
  
    try {
      const { name, email, message } = result.data
      const { error : ownerError } = await resend.emails.send({
        from: 'Kevin Daniel <noreply@skevindaniel.com>',
        to: ["kevindaniel200225@gmail.com"],
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: React.createElement(ContactFormEmail, { name, email, message }) 
      })
      if (ownerError) {
        throw new Error('Failed to send email to owner')
      }
      const { error : userError } = await resend.emails.send({
        from: 'Kevin Daniel <noreply@skevindaniel.com>',
        to: [email],
        subject: 'Thank you for reaching out!',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: React.createElement(ContactFormEmail, { name, email, message }) 
      })
      if (userError) {
        throw new Error('Failed to send email to owner')
      }
  
      return { success: true }
    } catch (error) {
      return { error }
    }
  }