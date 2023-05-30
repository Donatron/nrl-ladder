import React, { useState } from 'react'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Ladder from './components/Ladder/Ladder'
import LadderType from './components/LadderType/LadderType'
import Layout from './components/Layout/Layout'

import './app.css'

const App = () => {
  const [ladderType, setLadderType] = useState('standard')

  return (
    <Layout>
      <Header />
      <LadderType setLadderType={setLadderType} />
      <Ladder ladderType={ladderType}/>
      <Footer />
    </Layout>
  )
}

export default App