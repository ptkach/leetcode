/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {

  if (!board) return;

  var yl = board.length;

  if (yl === 0) return;

  var xl = board[0].length,
      q = [];

  var fill = function (x, y) {

    if (
      x < 0 ||
      y < 0 ||
      x > xl - 1 ||
      y > yl - 1 ||
      board[y][x] !== 'O'
      ) {
      return;
    }

    q.push({
      x: x,
      y: y
    });
    board[y][x] = '?'
  };

  var bfs = function (x, y) {

    fill(x, y);

    while (q.length > 0) {
      var curr = q.shift();
      fill(curr.x + 1, curr.y);
      fill(curr.x - 1, curr.y);
      fill(curr.x, curr.y + 1);
      fill(curr.x, curr.y - 1);
    }

  };

  var i, j;

  for (i = 0 ; i < xl ; i++) {
    if (board[0][i] === 'O') {
      bfs(i, 0);
    }

    if (board[yl - 1][i] === 'O') {
      bfs(i, yl - 1);
    }
  }

  for (i = 1 ; i < yl - 1 ; i++) {
    if (board[i][0] === 'O') {
      bfs(0, i);
    }

    if (board[i][xl - 1] === 'O') {
      bfs(xl - 1, i);
    }
  }

  for (i = 0 ; i < yl ; i++) {
    for (j = 0 ; j < xl ; j++) {
      if (board[i][j] === '?') {
        board[i][j] = 'O';
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }

  }

};

// 9/25/2016
var solve = function(board) {
  const q = [];
  const yl = board.length;
  const xl = board[0].length;
  const bfs = (x, y) => {
    if (
      x < 0 ||
      y < 0 ||
      x > xl ||
      y > yl ||
      board[y][x] !== 'O'
    ) {
      return;
    }
    q.push({ x, y });
    board[y][x] === '?';
    while (q.length) {
      const { x: xa, y: ya } = q.shift();
      bfs(xa + 1, ya);
      bfs(xa - 1, ya);
      bfs(xa, ya + 1);
      bfs(xa, ya - 1);
    }
  };

  for (let x = 0; x < xl; x++) {
    if (board[0][x] === 'O') {
      bfs(x, 0);
    }
  }

  for (let x = 0; x < xl; x++) {
    if (board[yl - 1][x] === 'O') {
      bfs(x, yl - 1);
    }
  }

  for (let y = 0; y < yl; y++) {
    if (board[y][0] === 'O') {
      bfs(0, y);
    }
  }

  for (let y = 0; y < yl; y++) {
    if (board[y][xl - 1] === 'O') {
      bfs(xl - 1, y);
    }
  }

  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (board[y][x] === '?') {
        board[y][x] = 'O';
      } else if (board[y][x] === 'O') {
        board[y][x] = 'X';
      }
    }
  }

};
