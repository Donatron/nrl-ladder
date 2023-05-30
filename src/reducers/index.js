import { combineReducers } from "redux";

import NRLReducer from './reducer_nrl'

const rootReducer = combineReducers({
  nrl: NRLReducer,
})

export default rootReducer;