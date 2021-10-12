/* eslint-disable import/no-anonymous-default-export */
import {createStore, applyMiddleware, compose} from "redux"
import rootReducer from "./reducer"

import thunk from "redux-thunk"
import {persistStore} from "redux-persist"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )
  const persistor = persistStore(store)
  return {store, persistor}
}
