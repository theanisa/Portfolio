import React from 'react'
export default function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="hero-inner">
        <div className="hero-grid">
          <div className="hero-right">
            <div className="hero-image">
              <img
                src="/images/pic-2.png"
                alt="portrait of Anisa"
              />
            </div>
          </div>
          <div className="hero-left">
            <h1 className="hero-heading">
              <span className="heading-prefix">Hi, I'm</span>
              <span className="heading-name">Anisa</span>
            </h1>
            <p className="hero-subheading">I am a <span className="highlight">MERN Stack</span> Enthusiast</p>
            <p className="hero-description">
              Exploring how technology can solve real problems and scale beyond
              borders.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="button primary">
                Contact Me
              </a>
              <a href="https://docs.google.com/document/d/1Ezx1-1ceIQs9paGkKQqC_34lUkjTSmgst1PkYG4BJzw/edit?usp=sharing" className="button outline underline" target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

