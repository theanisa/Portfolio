import React from 'react'

export default function Contact(){

  return (
    <section className="section contact" id="contact">
      <div className="contact-grid">
        <div className="contact-left">
          <h2 className="contact-title"><span className="contact-highlight">Wanna be in touch?</span></h2>
          <p className="contact-subtitle">I'd love to hear from you.</p>

          <div className="contact-info">
            <div className="info-card">
              <div className="info-label">Email</div>
              <a className="info-value" href="mailto:the.abfanisa@gmail.com">the.abfanisa@gmail.com</a>
            </div>

            <div className="info-card">
              <div className="info-label">Location</div>
              <div className="info-value">Sylhet, Bangladesh</div>
            </div>
          </div>
        </div>

        <aside className="contact-right">
          <div className="connect">
            <div className="connect-title">Connect with me</div>
            <div className="connect-grid">
              <a className="connect-btn" href="https://github.com/theanisa">GitHub</a>
              <a className="connect-btn" href="https://www.linkedin.com/in/anisa-binte-faruk-652876292/">LinkedIn</a>
              <a className="connect-btn" href="https://www.facebook.com/">Facebook</a>
              <a className="connect-btn" href="https://www.instagram.com/the.abfanisa/">Instagram</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
