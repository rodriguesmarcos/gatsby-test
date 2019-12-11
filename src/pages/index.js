import React from 'react'
import { Link } from 'gatsby'

import DefaultLayout from '../components/_Layouts/Default'
import Head from '../components/Head'

const IndexPage = () => {
  return (
    <DefaultLayout>
      <Head title="Home" />
      <h1>Hello,</h1>
      <h2>
        I'm Marcos, a full-stack developer living in beautiful Rio de Janeiro
      </h2>

      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </DefaultLayout>
  )
}

export default IndexPage
