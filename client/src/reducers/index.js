import { combineReducers } from "redux";

import ErrorReducer from './reducerError'
import LoadingReducer from './reducerLoading'
import LadderReducer from './reducerLadder'

const rootReducer = combineReducers({
  error: ErrorReducer,
  loading: LoadingReducer,
  ladder: LadderReducer,
})

export default rootReducer;