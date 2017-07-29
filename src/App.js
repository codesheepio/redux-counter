import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './containers/Counter'
import counterReducer from './redux/counter'

const store = createStore(
  counterReducer,
  /* initial state , */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const App = () =>
  <Provider store={store}>
    <Counter />
  </Provider>
export default App
