import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ResearchWriting from './components/ResearchWriting'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main id="main">
        <Reveal><Hero /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><ResearchWriting /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </div>
  )
}
