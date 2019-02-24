var boxes = document.querySelectorAll('.box');
const player1 = 'circle';
const player2 = 'cross';
let oddRound = true;

const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

const combinations = [
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

  function showWinner(winPlayer) {
    const whoWinner = document.querySelector('.winner');

    winner.style.display = 'block';
    winner.textContent = `Winner: ${winner} !`;
    boxes.forEach(box => box.removeEventListener('click', turn));
    setTimeout(() => window.location.reload(), 4000);
  }

  result.forEach((box, index) => moves[box] ? moves[box].push(index) : null);

  combinations.forEach(combination => {
    if (combination.every(index => moves[player1].indexOf(index) > -1)) {
      showWinner(player1);
    }
    if (combination.every(index => moves[player2].indexOf(index) > -1)) {
      showWinner(player2);
    }
  })
}

boxes.forEach(box => box.addEventListener('click', turn));