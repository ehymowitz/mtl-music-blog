import React from 'react'
import Layout from '../components/fixed/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

export default function About({data}) {

  return(
    <Layout>
      <SEO title="About" description="About the project"/>
      <div className="about-container">
        <div className="about-text-wrapper">
          <h1>ABOUT</h1>
          <h2>
            The Sound Gap was founded to bridge the gap between musicians, creators, and listeners. We see a gap in people listening to music and wanting to know more about who made it, why, and what does it mean to them?
          </h2>
          <h2>
            We want to tell the stories, inspirations, and intentions behind artists’ sounds undistorted by the media and preconceptions, so that we feel more connected to to the music and the creators feel more heard.
          </h2>
        </div>
        <div className="about-team-wrapper">
          <h1>THE TEAM</h1>
          <div className="about-photo-grid">
            <div>
              <Img
                fluid={{...data.elie.edges[0].node.childImageSharp.fluid, aspectRatio: 21 / 15}}
                alt={data.elie.edges[0].node.name}
                style={{margin: "30px", overflow: "hidden"}}
              />
              <small style={{position: "relative", bottom:"30px", fontFamily: "Ubuntu, sans-serif", color: "grey"}}>photo cred to Terry Hughes</small>
              <h3>{data.elie.edges[0].node.name.toUpperCase()}</h3>
              <p>
                Hi! I'm Elie. Ayla and I are working on "The Sound Gap" together. I'm in charge of making the website, so any thing you like on here, feel free to let me know! I'm a working musician in Montreal by night and a web developer by day. To see more of my coding work check out <a href="https://www.hymowitz.org">my portfolio</a>, and you'll see some of the music I play too! Happy reading :)
              </p>
            </div>
            <div>
              <Img
                fluid={{...data.ayla.edges[0].node.childImageSharp.fluid, aspectRatio: 21 / 15}}
                alt={data.ayla.edges[0].node.name}
                style={{margin: "30px", overflow: "hidden"}}
              />
              <h3>{data.ayla.edges[0].node.name.toUpperCase()}</h3>
              <p>
                Hey! I'm Ayla, I am the founder and co-creator of "The Sound Gap". I wanted to create a platform/ collective where we get to know the people behind the music, beyond projections, and not-interesting questions, and to bridge the gap between what is heard and what is created. I am a musician and studied Music Technology at school. Currently singing/ songwriting. "The Sound Gap" for me is a way to share the stories and intentions behind music and musicians I love, to spark stimulating conversations about music, and to have an excuse to listen to more music :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const aboutQuery = graphql`
  query aboutQuery {
    ayla: allFile(filter: {relativePath: {regex: "/Ayla/"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
    elie: allFile(filter: {relativePath: {regex: "/Elie/"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  }
`
