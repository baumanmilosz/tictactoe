var boxes = document.querySelectorAll('.box');
const player1 = 'circle';
const player2 = 'cross';
var p1counter = 0;
var p2counter = 0;
let oddRound = true;

const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

const winCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

function turn() {
  const { row, col } = this.dataset;

  if (this.classList.contains(player1) || this.classList.contains(player2)) return;
  const turn = oddRound ? player1 : player2;
  this.classList.add(turn);
  board[row][col] = turn;
  oddRound = !oddRound;

  check();
}

function check() {

  const result = board.reduce((total, row) => total.concat(row));

  let moves = {
    'circle': [],
    'cross': []
  };

  result.forEach((box, index) => moves[box] ? moves[box].push(index) : null);

  winCombinations.forEach(winCombination => {
    if (winCombination.every(index => moves[player1].indexOf(index) > -1)) {
      p1counter++
      console.log(p1counter);
      if (p1counter === 3) {
        showWinner(player1);
      }
    }
    if (winCombination.every(index => moves[player2].indexOf(index) > -1)) {
      showWinner(player2);
    } else {
      console.log('as');
    }
  })
}

function showWinner(winPlayer) {
  const whoWinner = document.querySelector('.winner');

  let winner = null;
  if (winPlayer === player1) {
    winner = '1';
  } else if (winPlayer === player2) {
    winner = '2';
  } else {
    winner = '3';
  }
  console.log(winner);

  whoWinner.style.display = 'block';
  whoWinner.textContent = `Winner: ${winner}!`;
  boxes.forEach(box => box.removeEventListener('click', turn));
  setTimeout(() => window.location.reload(), 4000);
}

boxes.forEach(box => box.addEventListener('click', turn));