import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getOfficialLadder,setLoading } from './actions'

import Error from './components/Error/Error'
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
  const { error: { message: errorMessage } } = useSelector(state => state.error)

  useEffect(() => {
    dispatch(setLoading(true))
    dispatch(getOfficialLadder())
  }, [])
  

  return (
    <Layout>
      <Header />
      { errorMessage && !isLoading ? <Error message={errorMessage} /> : null }
      { !errorMessage && isLoading ? <Loading /> : null }
      {
        !isLoading && !errorMessage ? (
          <>
            <LadderType setLadderType={setLadderType} />
            <Ladder ladderType={ladderType}/>
          </>
          ) : null
      }
      <Footer />
    </Layout>
  )
}

export default App