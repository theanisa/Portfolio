import React from 'react'
import { skills } from '../data/skills'

function Progress({ value }){
  return (
    <div className="progress" aria-hidden>
      <i style={{width: `${value}%`}} />
    </div>
  )
}

export default function Skills(){
  return (
    <section className="section" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <div className="skill-title">Core Languages</div>
          {skills.core.map(s=> (
            <div key={s.name} style={{marginBottom:10}}>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:13}}>
                <span>{s.name}</span>
                <span className="muted-list">{s.pct}%</span>
              </div>
              <Progress value={s.pct} />
            </div>
          ))}
        </div>

        <div className="skill-card">
          <div className="skill-title">Frontend</div>
          {skills.frontend.map(s=> (
            <div key={s.name} style={{marginBottom:10}}>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:13}}>
                <span>{s.name}</span>
                <span className="muted-list">{s.pct}%</span>
              </div>
              <Progress value={s.pct} />
            </div>
          ))}
        </div>

        <div className="skill-card">
          <div className="skill-title">Growing MERN Stack</div>
          <div className="muted-list">
            {skills.mern.map(s=> (
              <div key={s} style={{padding:'6px 0'}}>{s}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
