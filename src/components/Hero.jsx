import React, { useEffect, useState } from 'react'

export default function Hero(){
  const [mounted,setMounted] = useState(false)
  useEffect(()=>{setMounted(true)},[])

  return (
    <section className="hero section" id="hero">
      <div className={`hero-inner ${mounted ? 'mounted' : ''}`}>
        <h1>Anisa Binte Faruk</h1>
        <p className="title">Computer Science Student | MERN Stack Enthusiast</p>
        <p className="lead">I am a disciplined Computer Science student with a structured approach to learning and building. I’m passionate about full-stack development, focused on long-term growth through consistent practice, thoughtful problem solving, and building meaningful web projects.</p>
        <div className="cta">
          <a className="button" href="#projects">View Projects</a>
        </div>
      </div>
    </section>
  )
}
