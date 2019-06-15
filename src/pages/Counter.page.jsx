import React from "react"

const Counter = props => (
  <div>
    <h1>El contador vale: {props.counter}</h1>
    <hr />
    <button>Sumar 1</button>
    <button>Restar 1</button>
  </div>
)

export default Counter
