import React from "react"
import { Link } from "react-router-dom"

const Home = props => (
  <div>
    <h1>Soy el home</h1>
    <p>
      En esta página vamos a ver lo que es un contador, pasa a verlo en{" "}
      <Link to="/contador">Ir al Contador</Link>
      <hr />
      <small>
        Pst pst el contador vale actualmente: --valor del contador--
      </small>
    </p>
  </div>
)

export default Home
