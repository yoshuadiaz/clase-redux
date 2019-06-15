import React from "react"

const Message = props => (
  <div>
    <h1>El Mensaje es: {props.mensaje}</h1>
    <hr />
    <button
      onClick={() => props.mensajeActualizado("Que ondita con el pandita")}
    >
      MSG 1
    </button>
    <button
      onClick={() => props.mensajeActualizado("Que pasotes con los zapatotes")}
    >
      MSG 2
    </button>
    <button
      onClick={() => props.mensajeActualizado("Y que agarra y que me dice")}
    >
      MSG 3
    </button>
  </div>
)

export default Message
