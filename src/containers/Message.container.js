import {
  connect
} from 'react-redux'
import Message from '../pages/Message.page'
import {
  updateMessage
} from '../core/modules/Message/Message.actions'

const mapStateToProps = state => ({
  mensaje: state.Message.value
})

const mapDispatchToProps = dispatch => ({
  mensajeActualizado: (msg) => dispatch(updateMessage(msg))
})

export default connect(mapStateToProps, mapDispatchToProps)(Message)