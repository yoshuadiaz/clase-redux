import {
  connect
} from 'react-redux'
import Message from '../pages/Message.page'

const mapStateToProps = state => ({
  mensaje: state.message
})

const mapDispatchToProps = dispatch => ({
  mensajeActualizado: (msg) => dispatch({
    type: "update message",
    payload: msg
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Message)