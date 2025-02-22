import ContactForm from '@/components/contact-form'
import React from 'react'

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
        <div className="container max-w-3xl animate-form-load delay-300 translate-y-[300%] fill-mode-forwards">
            <h2 className="title">Let&apos;s get Connected</h2>
            <ContactForm />
        </div>
    </section>
  )
}
