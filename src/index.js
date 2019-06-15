import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom"
import Home from "./containers/Home.Container"
import Counter from "./containers/Counter.container"
import Message from "./containers/Message.container"
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from "./core/modules/rootReducer"

let store

if (process.env.NODE_ENV === "development") {
  store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
} else {
  store = createStore(rootReducer)
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {" "}
      {process.env.NODE_ENV}{" "}
      <NavLink
        exact
        to="/"
        activeStyle={{
          color: "red"
        }}
      >
        Home{" "}
      </NavLink>{" "}
      <NavLink
        to="/contador"
        activeStyle={{
          color: "red"
        }}
      >
        Contador{" "}
      </NavLink>{" "}
      <NavLink
        to="/message"
        activeStyle={{
          color: "red"
        }}
      >
        Message{" "}
      </NavLink>{" "}
      <Switch>
        <Route exact path="/" component={Home} />{" "}
        <Route path="/contador" component={Counter} />{" "}
        <Route path="/message" component={Message} />{" "}
        <Route>
          <h1> 404 </h1> <p> ¡¡¡Eso ni existe!!! </p>{" "}
          <p> Te voy a acusar con mi mamá </p>{" "}
        </Route>{" "}
      </Switch>{" "}
    </BrowserRouter>{" "}
  </Provider>,
  document.getElementById("root")
)
