import React from 'react'

export default function Contact(){
  return (
    <section className="section" id="contact">
      <h2>Contact</h2>
      <div className="contact-grid">
        <input className="input" placeholder="Your name" />
        <input className="input" placeholder="Your email" />
        <textarea className="input" rows="4" placeholder="Message"></textarea>
        <div>
          <button className="button submit">Send Message</button>
        </div>
      </div>
    </section>
  )
}
