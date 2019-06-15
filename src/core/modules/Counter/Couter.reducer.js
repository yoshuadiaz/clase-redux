const initialState = {
  value: 0
}

function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case "sumar uno":
      return {
        ...state, value: state.value + 1
      }
      case "restar uno":
        return {
          ...state, value: state.value - 1
        }
        default:
          return state
  }
}

export default CounterReducer