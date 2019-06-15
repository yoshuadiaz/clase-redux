import {
  actionTypes
} from './Message.actions'

const initialState = {
  value: "Hello world"
}

function Message(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_MESSAGE:
      return {
        ...state, value: action.payload
      }
      default:
        return state
  }
}

export default Message