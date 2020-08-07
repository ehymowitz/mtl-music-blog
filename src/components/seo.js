import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO({ title, description, image, article }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname}`,
  }

  //TODO: update url, default photo when ready

  return (
    <Helmet defer={false} title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      {site.siteMetadata.defaultImage === seo.image
        ? <meta name="image" content={seo.image} />
        : <meta name="image" content={`https:${seo.image}`} />
      }

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {site.siteMetadata.defaultImage === seo.image
        ? <meta property="og:image" content={seo.image} />
        : <meta property="og:image" content={`https:${seo.image}`} />
      }

      {seo.url && <meta property="og:url" content={seo.url} />}

      {article
        ? <meta property="og:type" content="article" />
        : <meta property="og:type" content="website" />
      }
    </Helmet>
  )
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`
