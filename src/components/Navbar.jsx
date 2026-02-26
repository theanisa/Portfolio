import React, { useEffect, useState } from 'react'

export default function Navbar(){
  const [scrolled,setScrolled] = useState(false)
  const [mobileMenuOpen,setMobileMenuOpen] = useState(false)

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="brand">abf</div>
      <nav className="nav-links" aria-label="Main Navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="mobile-menu-btn" onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      {mobileMenuOpen && (
        <nav className="mobile-nav" aria-label="Mobile Navigation">
          <a href="#about" onClick={()=>setMobileMenuOpen(false)}>About</a>
          <a href="#skills" onClick={()=>setMobileMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={()=>setMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={()=>setMobileMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  )
}
