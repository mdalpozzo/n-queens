/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  // get empty board
  var solution = new Board({n: n}); //fixme
  
  //outerloop for rows
  for (var i = 0; i < n; i++) {
    //innerloop for columns
    for (var j = 0; j < n; j++) {
      solution.togglePiece(i, j);
      
      if (solution.hasColConflictAt(j) === true) {
        solution.togglePiece(i, j);
      } else {
        break;
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var solutionCount = 0; //fixme
  
  // var recursion = function (boardObj, currentRow) {
  //   // for every col
  //   for (var i = 0; i < n; i++) {
  //     // reset currentRow to [0]
  //     var reset = new Array(n);
  //     reset.fill(0);
  //     boardObj.set(currentRow, reset);
  //     // put rook in next place
  //     boardObj.togglePiece(currentRow, i);
  //     // if conflict, undo
  //     if (boardObj.hasColConflictAt(i)) {
  //       boardObj.togglePiece(currentRow, i);
  //     // else if we're at the end, count++ and return from function call
  //     } else if (currentRow === n - 1) {
  //       solutionCount++;
  //       return;
  //     // otherwise recurse on a copy of current board and start from next row
  //     } else {
  //       recursion(new Board(boardObj.rows()), currentRow + 1);
  //     }
  //   }
  // };
  
  // recursion(new Board({n: n}), 0);
  
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n: n});
  var solutionFound = false;
  var recursion = function (boardObj, currentRow) {
    if (solutionFound === true) {
      return;
    }
    // for every col
    for (var i = 0; i < n; i++) {
      // reset currentRow to [0]
      var reset = new Array(n);
      reset.fill(0);
      boardObj.set(currentRow, reset);
      // put queen in next place
      boardObj.togglePiece(currentRow, i);
      // if conflict, undo
      if (boardObj.hasAnyQueenConflictsOn(currentRow, i)) {
        boardObj.togglePiece(currentRow, i);
      // else if we're at the end, count++ and return from function call
      } else if (currentRow === n - 1) {
        // here in the logic, we've found a solution
        solution = boardObj;
        solutionFound = true;
        return;
      // otherwise recurse on a copy of current board and start from next row
      } else {
        //not sure about returning recursive call
        recursion(new Board(boardObj.rows()), currentRow + 1);
      }      
    }
  };
  
  recursion(new Board({n: n}), 0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution.rows()));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
