import React from 'react'
import './Contact.css'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className="contact-page-container">
      <div className='contact-title'>Would love to hear from you!</div>
        <ContactForm />
    </div>
  )
}

export default Contact