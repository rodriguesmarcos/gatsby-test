import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'

import DefaultLayout from '../../components/_Layouts/Default'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      thumb {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      slug
      title
      publishedDate(fromNow: true, locale: "pt-br")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const { contentfulBlogPost: post } = props.data
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        console.log(node)
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US']['url']
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <DefaultLayout>
      {post.thumb && <Img fluid={post.thumb.fluid} />}
      <p>{post.publishedDate}</p>
      <h1>{post.title}</h1>

      {documentToReactComponents(post.body.json, options)}
      {/* <div dangerouslySetInnerHTML={{ __html: post.html }}></div> */}
    </DefaultLayout>
  )
}

export default Blog
