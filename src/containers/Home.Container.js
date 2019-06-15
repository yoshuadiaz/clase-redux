import {
  connect
} from 'react-redux'
import Home from '../pages/Home.page'

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = (dispatch) => ({
  sumarUno: () => dispatch({
    type: 'sumar uno'
  }),
  restarUno: () => dispatch({
    type: 'restar uno'
  }),
  carmenSalinas: () => dispatch({
    type: 'Ay mijito'
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)