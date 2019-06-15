import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import Home from "./pages/Home"
import Counter from "./pages/Counter"

ReactDOM.render(
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
  </BrowserRouter>,
  document.getElementById("root")
)
