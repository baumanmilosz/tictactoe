var boxes = document.querySelectorAll('.box');
// const firstRowBoxes = [...document.querySelectorAll('.first-row > .box')];
// const secondRowBoxes = [...document.querySelectorAll('.second-row > .box')];
// const thirdRowBoxes = [...document.querySelectorAll('.third-row > .box')];
const winner = document.querySelector('.winner');

winner.style.display = "none";

const combinations = [
  [[1, 1], [1, 2], [1, 3]], [[2, 1], [2, 2], [2, 3]], [[3, 1], [3, 2], [3, 3]],
  [[1, 1], [2, 1], [3, 1]], [[1, 2], [2, 2], [3, 2]], [[1, 3], [2, 3], [3, 3]]
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
  console.log(this.dataset);
}

boxes.forEach(box => box.addEventListener('click', move));