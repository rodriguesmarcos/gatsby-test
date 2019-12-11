import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
  const metadata = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title: siteTitle } = metadata.site.siteMetadata

  return <Helmet title={` ${title} | ${siteTitle}`} />
}

export default Head
