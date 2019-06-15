import {
  actionTypes
} from './Counter.actions'

const initialState = {
  value: 0
}

function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.PLUS_ONE:
      return {
        ...state, value: state.value + 1
      }
      case actionTypes.REM_ONE:
        return {
          ...state, value: state.value - 1
        }
        default:
          return state
  }
}

export default CounterReducer