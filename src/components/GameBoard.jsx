
export default function GameBoard({onSelectBox, board}) {
  // let gameBoard = intialGameBoard;

  // for(const turn of turns){ 
  //   const {square, player} = turn;
  //   const {row, col} = square;
  //   gameBoard[row][col]=player;
  // }

    // const [gameBoard, setGameBoard] = useState(intialGameBoard)
    
    // function handleSelectBox(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         //By doing this we can create deep copy of prevGameBoard
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            
    //         //By using this we can create a shallow copy of prevGameBoard
    //         // const updatedGameBoard = [...prevGameBoard]

    //         //The global structuredClone() method creates a deep clone of a given value
    //         // const updatedGameBoard = structuredClone(prevGameBoard)
    //         updatedGameBoard[rowIndex][colIndex]=activePlayerSymbol
    //         return updatedGameBoard
    //     })
    //     onSelectBox();
    // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectBox(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
