import React from 'react'
import { projects } from '../data/projects'
import Reveal from './Reveal'

export default function Projects(){
  return (
    <>
      <section className="projects-hero" id="projects">
        <div className="projects-hero-inner"></div>
      </section>
      
      <section className="section projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(p=> (
            <Reveal key={p.id}>
              <article className="project">
                <h3>{p.title}</h3>
                <p style={{color:'#6b7280'}}>{p.description}</p>
                <div className="tech">{p.tech.join(' • ')}</div>
                <div style={{marginTop:12,display:'flex',gap:'12px'}}>
                  <a className="button github-link" href={p.github}>View on GitHub</a>
                  {p.live && (
                    <a className="button outline" href={p.live} target="_blank" rel="noopener noreferrer">Live Preview</a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
