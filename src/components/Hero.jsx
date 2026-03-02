import React, { useEffect, useState } from 'react'

export default function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="hero-inner">
        <div className="hero-grid">
          <div className="hero-left">
            <h1 className="hero-heading">
              <span className="heading-prefix">Hi, I'm</span>
              <span className="heading-name">Anisa</span>
            </h1>
            <h2 className="hero-subheading">
              I am a <span className="highlight">MERN Stack</span> Enthusiast
            </h2>
            <p className="hero-description">
              Exploring how technology can solve real problems and scale beyond
              borders.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="button primary">
                Contact Me
              </a>
              <a href="/resume.pdf" className="button outline underline">
                Resume
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image">
              <img
                src="/images/avatar.png"
                alt="line-art illustration of woman in hijab"
              />
              <span className="badge">OPEN FOR WORK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

