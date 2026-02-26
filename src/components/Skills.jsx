import React, { useEffect, useRef, useState } from 'react'
import { skills } from '../data/skills'

function Progress({ value, animate }){
  return (
    <div className="progress" aria-hidden>
      <i style={{width: animate ? `${value}%` : '0%'}} />
    </div>
  )
}

export default function Skills(){
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(ref.current)
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="section" id="skills" ref={ref}>
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
              <Progress value={s.pct} animate={visible} />
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
              <Progress value={s.pct} animate={visible} />
            </div>
          ))}
        </div>

        <div className="skill-card">
          <div className="skill-title">Growing MERN Stack</div>
          <div className={`stack-list ${visible ? 'visible' : ''}`}>
            {skills.mern.map(s=> (
              <div key={s} style={{padding:'6px 0'}}>{s}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
