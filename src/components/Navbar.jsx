import React, { useEffect, useState } from 'react'

export default function Navbar(){
  const [scrolled,setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="brand">Anisa B. Faruk</div>
      <nav className="nav-links" aria-label="Main Navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
