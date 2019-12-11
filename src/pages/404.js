import React from 'react'
import { Link } from 'gatsby'

import DefaultLayout from '../components/_Layouts/Default'

const NotFound = () => {
  return (
    <DefaultLayout>
      <h1>404 Not found</h1>

      <p>
        <Link to="/">Visit Home</Link>
      </p>
    </DefaultLayout>
  )
}

export default NotFound
