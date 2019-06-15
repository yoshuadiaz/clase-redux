import {
  connect
} from 'react-redux'
import Home from '../pages/Home.page'
import {
  plusOne,
  remOne
} from '../core/modules/Counter/Counter.actions'
import {
  updateMessage
} from '../core/modules/Message/Message.actions'

const mapStateToProps = (state) => {
  return {
    counter: state.Counter.value
  }
}
const mapDispatchToProps = (dispatch) => ({
  sumarUno: () => dispatch(plusOne()),
  restarUno: () => dispatch(remOne()),
  carmenSalinas: () => dispatch(updateMessage('Ay mijito'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)