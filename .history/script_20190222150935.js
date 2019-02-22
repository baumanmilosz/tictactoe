const boxes = document.querySelectorAll('.box');
const firstRowBoxes = document.querySelectorAll('.first-row > .box');

let oddPlayer = true;

const yourTurn = () => {
  if (box.classList.contains('circle') || box.classList.contains('cross')) return;
  oddPlayer ? box.classList.add('circle') : box.classList.add('cross');
  oddPlayer = !oddPlayer;
}

boxes.forEach(box => box.addEventListener('click', yourTurn));

firstRowBoxes.forEach(box => box.addEventListener('click', () => console.log('fr')));

