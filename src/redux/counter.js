// Action types
const INCREASE_COUNTER = 'INCREASE_COUNTER'
const DECREASE_COUNTER = 'DECREASE_COUNTER'

// Action creators
export const increaseCounter = inc => ({
  type: INCREASE_COUNTER,
  step: inc,
})
export const decreaseCounter = dec => ({
  type: DECREASE_COUNTER,
  step: dec,
})

// Reducer
const initial = {
  counter: 0,
}
const reducer = (state = initial, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { counter: state.counter + action.step }
    case DECREASE_COUNTER:
      return { counter: state.counter - action.step }
    default:
      return state
  }
}
export default reducer
