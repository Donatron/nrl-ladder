import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './src/reducers'

import App from './src/App'

let store;
const composeEnhancers = window.__REDUX_DEVTOOLS_ExTENSION_COMPOSE__ || compose

if (process.env.NODE_ENV === 'production') {
    store = createStore(reducers, applyMiddleware(thunk))
} else {
    store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
}

ReactDom.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
)