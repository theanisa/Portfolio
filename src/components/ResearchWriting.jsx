import React from 'react'

export default function ResearchWriting(){
  return (
    <>
      <section className="research-hero section" id="research">
        <div className="research-grid">
          <div className="research-images">
            <div className="research-shelf research-top">
              <img src="/images/topshelf.png" alt="Top shelf" />
            </div>
            <div className="research-shelf research-bottom">
              <img src="/images/bottomshelf.png" alt="Bottom shelf" />
            </div>
          </div>
          
          <div className="research-content">
            <h2>Research & Writing</h2>
            <p style={{marginBottom:12,color:'#6b7280'}}>Selected research and writing.</p>
            <div className="blog-list">
              <article>
                <a href="https://medium.com/@the.abfanisa/play-with-ai-dont-let-it-play-you-4c4d32468556" target="_blank" rel="noopener noreferrer">
                  Play with AI, Don’t Let It Play You
                </a>
                <p className="blog-summary">Thoughts on interacting with artificial intelligence responsibly.</p>
              </article>
              <article>
                <a href="https://medium.com/@the.abfanisa/the-productive-programmer-a-roadmap-for-modern-developers-8e9ba8cde9ad" target="_blank" rel="noopener noreferrer">
                  The Productive Programmer: A Roadmap for Modern Developers
                </a>
                <p className="blog-summary">A guide to staying productive in modern development workflows.</p>
              </article>
            </div>
            <div className="research-actions">
              <a className="link-btn" href="/placeholder.pdf" target="_blank" rel="noopener noreferrer">View Research Paper</a>
              <a className="link-btn" href="https://medium.com/@the.abfanisa" target="_blank" rel="noopener noreferrer">Read My All Blogs</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
