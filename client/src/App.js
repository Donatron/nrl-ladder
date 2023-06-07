import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getOfficialLadder,setLoading } from './actions'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Ladder from './components/Ladder/Ladder'
import LadderType from './components/LadderType/LadderType'
import Layout from './components/Layout/Layout'
import Loading from './components/Loading/Loading'

import './app.css'

const App = () => {
  const dispatch = useDispatch()
  const [ladderType, setLadderType] = useState('standard')
  const { isLoading } = useSelector(state => state.loading)

  useEffect(() => {
    dispatch(setLoading(true))
    dispatch(getOfficialLadder())
  }, [])
  

  return (
    <Layout>
      <Header />
      {
        !isLoading ? (
          <>
            <LadderType setLadderType={setLadderType} />
            <Ladder ladderType={ladderType}/>
          </>
          ) : <Loading />
      }
      <Footer />
    </Layout>
  )
}

export default App