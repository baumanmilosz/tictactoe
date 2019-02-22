var boxes = document.querySelectorAll('.box');
const firstRowBoxes = [...document.querySelectorAll('.first-row > .box')];
const secondRowBoxes = [...document.querySelectorAll('.second-row > .box')];
const thirdRowBoxes = [...document.querySelectorAll('.third-row > .box')];
const winner = document.querySelector('.winner');
// winner.style.display = "none";

let oddPlayer = true;

function move() {
  if (this.classList.contains('circle') || this.classList.contains('cross')) return;
  oddPlayer ? this.classList.add('circle') : this.classList.add('cross');
  oddPlayer = !oddPlayer;

  if (firstRowBoxes.every(box => box.classList.contains('circle')) || secondRowBoxes.every(box => box.classList.contains('circle')) || thirdRowBoxes.every(box => box.classList.contains('circle'))) {
    console.log('CIRCLE');
    boxes.forEach(box => box.removeEventListener('click', move));
  }

  if (firstRowBoxes.every(box => box.classList.contains('cross')) || secondRowBoxes.every(box => box.classList.contains('cross')) || thirdRowBoxes.every(box => box.classList.contains('cross'))) {
    console.log('CROSS');
    boxes.forEach(box => box.addEventListener('click', move));
  }
}

boxes.forEach(box => box.addEventListener('click', move));




