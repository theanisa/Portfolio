import React from 'react'
import { projects } from '../data/projects'

export default function Projects(){
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(p=> (
          <article className="project" key={p.id}>
            <h3>{p.title}</h3>
            <p style={{color:'#6b7280'}}>{p.description}</p>
            <div className="tech">{p.tech.join(' • ')}</div>
            <div style={{marginTop:12}}>
              <a className="button" href={p.github}>View on GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
