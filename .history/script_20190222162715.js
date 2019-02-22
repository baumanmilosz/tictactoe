var boxes = document.querySelectorAll('.box');
const firstRowBoxes = [...document.querySelectorAll('.first-row > .box')];
const secondRowBoxes = [...document.querySelectorAll('.second-row > .box')];
const thirdRowBoxes = [...document.querySelectorAll('.third-row > .box')];
const winner = document.querySelector('.winner');

winner.style.display = "none";

let oddPlayer = true;

function move() {
  if (this.classList.contains('circle') || this.classList.contains('cross')) return;
  oddPlayer ? this.classList.add('circle') : this.classList.add('cross');
  oddPlayer = !oddPlayer;

  // ROWS
  if (firstRowBoxes.every(box => box.classList.contains('circle')) || secondRowBoxes.every(box => box.classList.contains('circle')) || thirdRowBoxes.every(box => box.classList.contains('circle'))) {
    winner.style.display = "block";
    winner.textContent = "CIRCLE WIN";
    boxes.forEach(box => box.removeEventListener('click', move));
  }
  if (firstRowBoxes.every(box => box.classList.contains('cross')) || secondRowBoxes.every(box => box.classList.contains('cross')) || thirdRowBoxes.every(box => box.classList.contains('cross'))) {
    winner.style.display = "block";
    winner.textContent = "CROSS WIN";
    boxes.forEach(box => box.removeEventListener('click', move));
  }

  // COLUMNS
  if (firstRowBoxes[0].classList.contains('circle') && secondRowBoxes[0].classList.contains('circle') && thirdRowBoxes[0].classList.contains('circle')) {
    winner.style.display = "block";
    winner.textContent = "CIRCLE WIN";
  }

  if (firstRowBoxes[1].classList.contains('circle') && secondRowBoxes[1].classList.contains('circle') && thirdRowBoxes[1].classList.contains('circle')) {
    winner.style.display = "block";
    winner.textContent = "CIRCLE WIN";
  }

  if (firstRowBoxes[2].classList.contains('circle') && secondRowBoxes[2].classList.contains('circle') && thirdRowBoxes[2].classList.contains('circle')) {
    winner.style.display = "block";
    winner.textContent = "CIRCLE WIN";
  }

  if (firstRowBoxes[0].classList.contains('cross') && secondRowBoxes[0].classList.contains('cross') && thirdRowBoxes[0].classList.contains('cross')) {
    winner.style.display = "block";
    winner.textContent = "CROSS WIN";
  }

  if (firstRowBoxes[1].classList.contains('cross') && secondRowBoxes[1].classList.contains('cross') && thirdRowBoxes[1].classList.contains('cross')) {
    winner.style.display = "block";
    winner.textContent = "CROSS WIN";
  }

  if (firstRowBoxes[2].classList.contains('cross') && secondRowBoxes[2].classList.contains('cross') && thirdRowBoxes[2].classList.contains('cross')) {
    winner.style.display = "block";
    winner.textContent = "CROSS WIN";
  }

  // DIAGONAL

  if (firstRowBoxes[0].classList.contains('circle') && secondRowBoxes[1].classList.contains('circle') && thirdRowBoxes[2].classList.contains('circle')) {
    winner.style.display = "block";
    winner.textContent = "CIRCLE WIN";
  }

  if (firstRowBoxes[0].classList.contains('cross') && secondRowBoxes[1].classList.contains('cross') && thirdRowBoxes[2].classList.contains('cross')) {
    winner.style.display = "block";
    winner.textContent = "CROSS WIN";
  }

  if (firstRowBoxes[2].classList.contains('circle') && secondRowBoxes[1].classList.contains('circle') && thirdRowBoxes[0].classList.contains('circle')) {
    winner.style.display = "block";
    winner.textContent = "CIRCLE WIN";
  }

  if (firstRowBoxes[2].classList.contains('cross') && secondRowBoxes[1].classList.contains('cross') && thirdRowBoxes[0].classList.contains('cross')) {
    winner.style.display = "block";
    winner.textContent = "CROSS WIN";
  }

}
boxes.forEach(box => box.addEventListener('click', move));




