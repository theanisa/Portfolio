import React, { useEffect, useState } from 'react'

export default function Hero(){
  const [mounted,setMounted] = useState(false)
  const [greeting, setGreeting] = useState('')
  const fullGreeting = 'Hi — Anisa here!'

  useEffect(()=>{setMounted(true)},[])

  // typing animation for greeting
  useEffect(() => {
    let i = 0
    let id
    if (mounted) {
      id = setInterval(() => {
        i++
        setGreeting(fullGreeting.slice(0, i))
        if (i >= fullGreeting.length) clearInterval(id)
      }, 80)
    }
    return () => clearInterval(id)
  }, [mounted])

  return (
    <section className="hero section" id="hero">
      <div className={`hero-inner ${mounted ? 'mounted' : ''}`}>
        <div className="hero-grid">
          <div className="hero-left">
            <div className="kicker">— MERN STACK DEVELOPER</div>
            <h1 className="hero-name">Hi, I'm <span className="accent-name">Anisa</span></h1>
            <p className="role-line">I am a <span className="accent">MERN Stack Enthusiast</span><span className="cursor">|</span></p>
            <p className="lead">Exploring how technology can solve real problems and scale beyond borders.</p>

            <div className="hero-cta">
              <a className="button primary" href="#contact">Contact Me</a>
              <a className="button outline" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image" aria-hidden>
              <img src="/images/avatar.png" alt="Anisa" />
            </div>
            <div className="image-badge">OPEN FOR WORK</div>
          </div>
        </div>
      </div>
    </section>
  )
}
