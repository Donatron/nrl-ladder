import {
  GET_OFFICIAL_LADDER_SUCCESS,
  GET_NO_BYE_POINTS_SUCCESS,
  GET_WIN_PERCENTAGE
} from '../actions'

const initialState = {
  officialLadder: [],
  percentageWins: [],
  noByePoints: [],
  round: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_OFFICIAL_LADDER_SUCCESS:
      return {
        ...state,
        officialLadder: action.payload.data,
        round: action.payload.round
      }
    case GET_NO_BYE_POINTS_SUCCESS:
      return {
        ...state,
        noByePoints: action.payload
      }
    case GET_WIN_PERCENTAGE:
      return {
        ...state,
        percentageWins: action.payload
      }
    default:
      return state
  }
}