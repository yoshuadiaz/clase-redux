import React from "react"

const Counter = props => (
  <div>
    <h1>El contador vale: {props.counter}</h1>
    <hr />
    <button onClick={props.sumarUno}>Sumar 1</button>
    <button onClick={props.restarUno}>Restar 1</button>
    <button onClick={props.copla}>Echate otra maistro!</button>
  </div>
)

export default Counter
