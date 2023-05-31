import { combineReducers } from "redux";

import ErrorReducer from './reducer_error'
import LoadingReducer from './reducer_loading'
import NRLReducer from './reducer_nrl'

const rootReducer = combineReducers({
  error: ErrorReducer,
  loading: LoadingReducer,
  nrl: NRLReducer,
})

export default rootReducer;