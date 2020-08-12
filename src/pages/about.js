import React from 'react'
import Layout from '../components/fixed/layout'
import SEO from '../components/seo'

export default function About() {
  return(
    <Layout>
    <SEO title="About" description="About the project"/>
    <div className="about-container">
      <div className="about-text-wrapper">
        <h2>
          The Sound Gap was founded to bridge the gap between musicians, creators, and listeners. We see a gap in people listening to music and wanting to know more about who made it, why, and what does it mean to them?
        </h2>
        <h2>
          We want to tell the stories, inspirations, and intentions behind artists’ sounds undistorted by the media and preconceptions, so that we feel more connected to to the music and the creators feel more heard.
        </h2>
      </div>
      <div className="about-photo-grid">
        <div className="about">
          <img
            className="fit-picture"
            src="/media/examples/grapefruit-slice-332-332.jpg"
          />
          <p>test</p>
        </div>
        <div className="about">
          <img
            className="fit-picture"
            src="/media/examples/grapefruit-slice-332-332.jpg"
          />
          <p>test</p>
        </div>
      </div>
    </div>
    </Layout>
  )
}
