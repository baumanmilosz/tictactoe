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

let oddPlayer = true;

function move() {
  if (this.classList.contains('circle') || this.classList.contains('cross')) return;
  if (oddPlayer) {
    this.classList.add('circle');
  } else {
    this.classList.add('cross');
  }
  oddPlayer = !oddPlayer;

  if ()
}

boxes.forEach(box => box.addEventListener('click', move));