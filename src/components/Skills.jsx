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
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const carouselCards = [
    ...skills.technical.map(category => ({ title: category.title, items: category.items })),
    { title: 'Growing MERN Stack', items: skills.mern }
  ]
  const trackCards = [...carouselCards, ...carouselCards]

  return (
    <section className="section" id="skills" ref={ref}>
      <h2>Skills</h2>
      <p className="section-subtitle">Technical Skills</p>
      <div className="skills-carousel">
        <div className="skills-track">
          {trackCards.map((card, index) => (
            <div className="skill-card" key={`${card.title}-${index}`}>
              <div className="skill-title">{card.title}</div>
              <div className={`stack-list ${visible ? 'visible' : ''}`}>
                {card.items.map(item => (
                  <div key={`${card.title}-${item}`} style={{padding:'6px 0'}}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
