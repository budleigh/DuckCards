import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from '../reducers/index'

export default function configureStore(preloadedState) {
  const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, createLogger())
  )

  return store
}
