import React from "react"
import { Link } from "react-router-dom"

const Home = props => (
  <div>
    <h1>Soy el home</h1>
    <p>
      En esta página vamos a ver lo que es un contador, pasa a verlo en{" "}
      <Link to="/contador">Ir al Contador</Link>
    </p>
    <hr />
    <small>Pst pst el contador vale actualmente: {props.counter}</small>

    <button onClick={props.sumarUno}>Sumar 1</button>
    <button onClick={props.restarUno}>Restar 1</button>
    <button onClick={props.carmenSalinas}>Carmelizar</button>
  </div>
)

export default Home
