import React from "react";
import boxes from "./boxes"
import Box from "./Box"
import style from "./style.css"

export default function App() {
  const [squares, setSquares] = React.useState(boxes) 


function toggle(id) {
  setSquares(prevSquares => {
    return prevSquares.map((square) => {
      return square.id === id? {...square, on: !square.on} : square
    })
  })
}


  const squaresElements = squares.map(square => (
    <Box 
    key={square.id} 
    id={square.id}
    on={square.on} 
    toggle={toggle}
     />
  ))
  return (
    <div>
      {squaresElements}
    </div>
    
  )
}