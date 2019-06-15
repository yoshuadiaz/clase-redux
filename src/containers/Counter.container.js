import {
  connect
} from 'react-redux'
import Counter from '../pages/Counter.page'
import {
  actionTypes
} from '../core/modules/Counter/Counter.actions'

const mapStateToProps = (state) => ({
  counter: state.Counter.value
})

const mapDispatchToProps = (dispatch) => ({
  sumarUno: () => dispatch({
    type: actionTypes.PLUS_ONE
  }),
  restarUno: () => dispatch({
    type: actionTypes.REM_ONE
  }),
  copla: () => dispatch({
    type: "Quiero algo de los panchos"
  })
})


export default connect(mapStateToProps, mapDispatchToProps)(Counter)