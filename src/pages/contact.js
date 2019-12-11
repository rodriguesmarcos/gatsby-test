import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import DefaultLayout from '../components/_Layouts/Default'

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          email
        }
      }
    }
  `)

  const { email } = data.site.siteMetadata

  return (
    <DefaultLayout>
      <h1>Contact</h1>
      <p>
        Send me a hello via <a href={`mailto:${email}`}>{email}</a>
      </p>
    </DefaultLayout>
  )
}

export default ContactPage
