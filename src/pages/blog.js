import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import DefaultLayout from '../components/_Layouts/Default'

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
            title
            publishedDate(fromNow: true)
            createdAt
          }
        }
      }
    }
  `)

  return (
    <DefaultLayout>
      <h1>Blog</h1>
      <p>Posts will show up here later on</p>

      <ol>
        {posts.allContentfulBlogPost.edges.map(({ node: p }) => (
          <li key={p.slug}>
            <Link to={`blog/${p.slug}`}>
              <h2>{p.title}</h2>
              <span>{p.publishedDate}</span>
            </Link>
          </li>
        ))}
      </ol>
    </DefaultLayout>
  )
}

export default BlogPage
