import React from 'react'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Ladder from './components/Ladder/Ladder'
import Layout from './components/Layout/Layout'

import './app.css'

const App = () => {
  return (
    <Layout>
      <Header />
      <Ladder />
      <Footer />
    </Layout>
  )
}

export default App