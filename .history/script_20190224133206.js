var boxes = document.querySelectorAll('.box');
// const firstRowBoxes = [...document.querySelectorAll('.first-row > .box')];
// const secondRowBoxes = [...document.querySelectorAll('.second-row > .box')];
// const thirdRowBoxes = [...document.querySelectorAll('.third-row > .box')];
const winner = document.querySelector('.winner');

winner.style.display = "none";

const player1 = 'circle';
const player2 = 'cross';

const combinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

let oddRound = true;

function turn() {
  if (this.classList.contains(player1) || this.classList.contains(player2)) return;
  const turn = oddRound ? player1 : player2;
  this.classList.add(turn);
  oddRound = !oddRound;
  console.log(turn);
}

boxes.forEach(box => box.addEventListener('click', turn));