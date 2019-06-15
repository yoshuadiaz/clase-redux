import {
  combineReducers
} from 'redux'
import Counter from './Counter/Couter.reducer'
import Message from './Message/Message.reducer'

export default combineReducers({
  Counter,
  Message
})