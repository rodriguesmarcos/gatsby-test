import React from 'react'
import { Link } from 'gatsby'

import DefaultLayout from '../components/_Layouts/Default'

const AboutPage = () => {
  return (
    <DefaultLayout>
      <h1>About</h1>
      <p>
        Some text about me, <Link to="/contact">contact me</Link>
      </p>
    </DefaultLayout>
  )
}

export default AboutPage
