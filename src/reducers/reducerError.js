import { RESET_ERRORS, SET_ERRORS } from "../actions"

const initialState = {
  error: {
    message: null
  } 
}

export default (state = initialState, action) => {
  switch(action.type) {
    case RESET_ERRORS:
      return initialState
    case SET_ERRORS:
      return {
        ...state,
        error: {
          ...initialState.error,
          message: action.payload.message
        }
      }
    default:
      return state
  }
}