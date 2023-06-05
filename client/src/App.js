import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getOfficialLadder } from './actions'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Ladder from './components/Ladder/Ladder'
import LadderType from './components/LadderType/LadderType'
import Layout from './components/Layout/Layout'

import './app.css'

const App = () => {
  const dispatch = useDispatch()
  const [ladderType, setLadderType] = useState('standard')

  useEffect(() => {
    dispatch(getOfficialLadder())
  }, [])

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