import React, { useState } from 'react'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e && e.preventDefault()
    const to = 'the.abfanisa@gmail.com'
    const mailSubject = encodeURIComponent(subject || `Hello from ${name || 'your portfolio visitor'}`)
    const bodyLines = []
    if (name) bodyLines.push(`Name: ${name}`)
    if (email) bodyLines.push(`Email: ${email}`)
    if (message) bodyLines.push('\n' + message)
    const body = encodeURIComponent(bodyLines.join('\n'))
    // open default mail client
    window.location.href = `mailto:${to}?subject=${mailSubject}&body=${body}`
  }

  return (
    <section className="section contact" id="contact">
      <div className="contact-grid">
        <div className="contact-left">
          <h2 className="contact-title"><span className="contact-highlight">Wanna be in touch?</span></h2>
          <p className="contact-subtitle">We'd love to hear from you.</p>

          <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-row">
              <input className="input" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} />
              <input className="input" placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} />
            </div>
            <div className="form-row">
              <input className="input" placeholder="Subject" value={subject} onChange={e=>setSubject(e.target.value)} />
            </div>
            <div className="form-row">
              <textarea className="input" rows={6} placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} />
            </div>
            <div className="send-container" style={{marginTop:18}}>
              <button type="submit" className="button send-mail">Send Message</button>
            </div>
          </form>
        </div>

        <aside className="contact-right">
          <div className="info-card">
            <div className="info-label">Email</div>
            <a className="info-value" href="mailto:the.abfanisa@gmail.com">the.abfanisa@gmail.com</a>
          </div>

          <div className="info-card">
            <div className="info-label">Location</div>
            <div className="info-value">Sylhet, Bangladesh</div>
          </div>

          <div className="info-card whatsapp">
            <div className="info-label">WhatsApp</div>
            <div className="info-value">+880 1319632951</div>
          </div>

          <div className="connect">
            <div className="connect-title">Connect with me</div>
            <div className="connect-grid">
              <a className="connect-btn" href="https://github.com/theanisa">GitHub</a>
              <a className="connect-btn" href="https://www.linkedin.com/in/anisa-binte-faruk-652876292/">LinkedIn</a>
              <a className="connect-btn" >Facebook</a>
              <a className="connect-btn" href="https://www.instagram.com/the.abfanisa/">Instagram</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
