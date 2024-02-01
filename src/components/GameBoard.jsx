import { useState } from "react";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(intialGameBoard)
    
    function handleSelectBox(rowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            //By doing this we can create deep copy of prevGameBoard
            // const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            
            //By using this we can create a shallow copy of prevGameBoard
            // const updatedGameBoard = [...prevGameBoard]

            //The global structuredClone() method creates a deep clone of a given value
            const updatedGameBoard = structuredClone(prevGameBoard)
            updatedGameBoard[rowIndex][colIndex]="X"
            return updatedGameBoard
        })
    }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectBox(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
