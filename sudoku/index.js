// Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

// Sudoku rules:

// Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

//   Rows:


// There are 9 rows in a traditional Sudoku puzzle.Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row.In other words, there can not be any rows that are identical.

// In the illustration the numbers 5, 3, 1, and 2 are the "givens".They can not be changed.The remaining numbers in black are the numbers that you fill in to complete the row.

//   Columns:


// There are 9 columns in a traditional Sudoku puzzle.Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column.Each column will be unique as a result.

// In the illustration the numbers 7, 2, and 6 are the "givens".They can not be changed.You fill in the remaining numbers as shown in black to complete the column.

//   Regions


// A region is a 3x3 box like the one shown to the left.There are 9 regions in a traditional Sudoku puzzle.

// Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region.Each region will differ from the other regions.

// In the illustration the numbers 1, 2, and 8 are the "givens".They can not be changed.Fill in the remaining numbers as shown in black to complete the region.

// Valid board example:


function doneOrNot(board) {
  let result = 'Finished!';
  if (board.length !== 9) return result = 'Try again!'
  let diagonal = [[], [], [], [], [], [], [], [], []];
  for (let i = 0; i < board.length; i++) {
    let column = [];
    let row = [];
    for (let o = 0; o < board.length; o++) {
      if (board[i][o] === 0 || board[o][i] === 0) result = 'Try again!';

      if (row.indexOf(board[i][o]) === -1) row.push(board[i][o])
      else if (row.indexOf(board[i][o]) !== -1) result = 'Try again!';

      if (column.indexOf(board[o][i]) === -1) column.push(board[o][i]);
      else if (column.indexOf(board[o][i]) !== -1) result = 'Try again!';

      if (diagonal.indexOf(board[o][i]) !== -1) result = 'Try again!';
      i < 3 && o < 3 ? diagonal[0].push(board[o][i]) : diagonal;
      i >= 3 && i < 6 && o < 3 ? diagonal[1].push(board[o][i]) : diagonal;
      i >= 6 && o < 3 ? diagonal[2].push(board[o][i]) : diagonal;
      i < 3 && o >= 3 && o < 6 ? diagonal[3].push(board[o][i]) : diagonal;
      i >= 3 && i < 6 && o >= 3 && o < 6 ? diagonal[4].push(board[o][i]) : diagonal;
      i >= 6 && o >= 3 && o < 6 ? diagonal[5].push(board[o][i]) : diagonal;
      i < 3 && o >= 6 ? diagonal[6].push(board[o][i]) : diagonal;
      i >= 3 && i < 6 && o >= 6 ? diagonal[7].push(board[o][i]) : diagonal;
      i >= 6 && o >= 6 ? diagonal[8].push(board[o][i]) : diagonal;
    }
  }

  if (loopThrou(diagonal) === false) result = 'Try again!';
  return result;
}

function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function loopThrou(array) {
  for (let i = 0; i < array.length; i++) {
    if (sum(array[i]) !== 45) return false;
  }
  return true;
}

//   console.log(doneOrNot([ [ 1, 3, 2, 5, 7, 9, 4, 6, 8 ],
//   [ 4, 9, 8, 2, 6, 1, 3, 7, 5 ],
//   [ 7, 5, 6, 3, 8, 4, 2, 1, 9 ],
//   [ 6, 4, 3, 1, 5, 8, 7, 9, 2 ],
//   [ 5, 2, 1, 7, 9, 3, 8, 4, 6 ],
//   [ 9, 8, 7, 4, 2, 6, 5, 3, 1 ],
//   [ 2, 1, 4, 9, 3, 5, 6, 8, 7 ],
//   [ 3, 6, 5, 8, 1, 7, 9, 2, 4 ],
//   [ 8, 7, 9, 6, 4, 2, 1, 3, 5 ] ]))

  // 1 = i < 3 && o <3
  // 2 = i >= 3 && i < 6 && o < 3
  // 3 = i > 6 && o < 3
  // 4 = i < 3 && o > 3 && o < 6
  // 5 = i >3 && i < 6 && o > 3 && o < 6
  // 6 = i > 6 && o > 3 && o < 6
  // 7 = i < 3 && o > 6
  // 8 = i > 3 && i < 6 && o > 6
  // 9 = i > 6 && o > 6

