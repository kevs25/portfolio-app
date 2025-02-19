import ContactForm from '@/components/contact-form'
import React from 'react'

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
        <div className="container max-w-3xl">
            <h2 className="title">Let&apos;s get Connected</h2>
            <ContactForm />
        </div>
    </section>
  )
}
