import {
  connect
} from 'react-redux'
import Counter from '../pages/Counter.page'

const mapStateToProps = (state) => ({
  counter: state.Counter.value
})

const mapDispatchToProps = (dispatch) => ({
  sumarUno: () => dispatch({
    type: "sumar uno"
  }),
  restarUno: () => dispatch({
    type: "restar uno"
  }),
  copla: () => dispatch({
    type: "Quiero algo de los panchos"
  })
})


export default connect(mapStateToProps, mapDispatchToProps)(Counter)