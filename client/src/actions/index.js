import axios from 'axios'

export const GET_NO_BYE_POINTS_SUCCESS = 'GET_NO_BYE_POINTS_SUCCESS'
export const GET_OFFICIAL_LADDER = 'GET_OFFICIAL_LADDER'
export const GET_OFFICIAL_LADDER_SUCCESS = 'GET_OFFICIAL_LADDER_SUCCESS'
export const GET_WIN_PERCENTAGE= 'GET_WIN_PERCENTAGE'
export const SET_ERRORS = 'SET_ERRORS'
export const SET_LOADING = 'SET_LOADING'

export const getOfficialLadder = () => async dispatch => {
  let apiUrl
  if(process.env.NODE_ENV === 'development') {
    apiUrl = 'http://localhost:8080'
  } else {
    apiUrl = 'yettobedetermined'
  }

  const response = await axios.get(apiUrl)

  dispatch({
    type: GET_OFFICIAL_LADDER_SUCCESS,
    payload: response.data
  })
  dispatch(setLoading(false))
  dispatch(getNoByePoints(response.data.data))
  dispatch(getPercentageWins(response.data.data))
}

const getNoByePoints = (data) => dispatch => {
  const noyByePoints = data.map((el) => ({
    ...el,
    points: el.points - (el.byes * 2)
  }))
    .sort((a, b) => {
      return (parseInt(a.points) > parseInt(b.points))
        && (parseInt(a.pointsDiff) < parseInt(b.pointsDiff)) ? -1 : 1
    })

  dispatch({
    type: GET_NO_BYE_POINTS_SUCCESS,
    payload: noyByePoints
  })
}

const getPercentageWins = (data) => dispatch => {
  const percentageWins = data.map((el) => ({
    ...el,
    winPercentage: ((el.wins / el.gamesPlayed) * 100).toFixed(2)
  }))
    .sort((a, b) => {
      return (a.winPercentage > b.winPercentage)
        && parseInt(a.pointsDiff) < parseInt(b.pointsDiff) ? -1 : 1
    })

  dispatch({
    type: GET_WIN_PERCENTAGE,
    payload: percentageWins
  })
}

export const setLoading = (isLoading) => dispatch => {
  return dispatch({
    type: SET_LOADING,
    payload: isLoading
  })
}