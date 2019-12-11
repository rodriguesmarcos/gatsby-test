import React from 'react'

import Header from '../../Header'
import Footer from '../../Footer'

import GlobalStyles from '../../../styles/global'

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout
