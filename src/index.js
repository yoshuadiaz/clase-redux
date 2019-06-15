import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./containers/Home.Container"
import Counter from "./pages/Counter.page"
import { createStore } from "redux"
import { Provider } from "react-redux"

const initialState = {
  counter: 0,
  menssage: "Coman frutas y verduras"
}
function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case "sumar uno":
      return { ...state, counter: state.counter + 1 }
    case "restar uno":
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}

const store = createStore(
  CounterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contador" component={Counter} />
        <Route>
          <h1>404</h1>
          <p>¡¡¡Eso ni existe!!!</p>
          <p>Te voy a acusar con mi mamá</p>
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
