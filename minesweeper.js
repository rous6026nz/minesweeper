document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {row: 0, col: 0, isMine: false, hidden: true},
    {row: 0, col: 1, isMine: false, hidden: true},
    {row: 0, col: 2, isMine: true, hidden: true},
    {row: 0, col: 3, isMine: false, hidden: true},
    {row: 1, col: 0, isMine: false, hidden: true},
    {row: 1, col: 1, isMine: true, hidden: true},
    {row: 1, col: 2, isMine: false, hidden: true},
    {row: 1, col: 3, isMine: false, hidden: true},
    {row: 2, col: 0, isMine: true, hidden: true},
    {row: 2, col: 1, isMine: false, hidden: true},
    {row: 2, col: 2, isMine: true, hidden: true},
    {row: 2, col: 3, isMine: false, hidden: true},
    {row: 3, col: 0, isMine: true, hidden: true},
    {row: 3, col: 1, isMine: false, hidden: true},
    {row: 3, col: 2, isMine: false, hidden: true},
    {row: 3, col: 3, isMine: true, hidden: true}
  ]
};

function startGame () {

  // Loop through board cells objects.
  for(let i = 0; i < board.cells.length; i ++) {

    // For each cell add a property surroundingMines with the returned value of the countSurroundingMines method.
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }

  // Don't remove this function call: it makes the game work!
  lib.initBoard()

  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  for(let i = 0; i < board.cells.length; i ++) {
    if(board.cells[i].isMine === true && board.cells[i].isMarked !== true || board.cells[i].isMine === false && board.cells[i].hidden === true) {
      return;
    } 
  }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  // Get the surrounding cell count for every cell.
  let surrounding = lib.getSurroundingCells(cell.row, cell.col);

  // Counter binding to track mine cells.
  let count = 0;

  // Loop through each surrounding cell counting the number of mines.
  for(let i = 0; i < surrounding.length; i ++) {

    // Check if the current cell is a mine.
    if(surrounding[i].isMine === true ) {

      // Increase the counter.
      count ++;
    }
  }

  // Return to counter.
  return count;
}

