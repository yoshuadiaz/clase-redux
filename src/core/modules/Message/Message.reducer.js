const initialState = {
  value: "Hello world"
}

function Message(state = initialState, action) {
  switch (action.type) {
    case 'update message':
      return {
        ...state, value: action.payload
      }
      default:
        return state
  }
}

export default Message