const boxes = document.querySelectorAll('.box');
let firstRowBoxes = document.querySelectorAll('.first-row > .box');

let oddPlayer = true;

boxes.forEach(box => box.addEventListener('click', () => {
  if (box.classList.contains('circle') || box.classList.contains('cross')) return;
  oddPlayer ? box.classList.add('circle') : box.classList.add('cross');
  oddPlayer = !oddPlayer;
}));

firstRowBoxes.forEach(box => box.addEventListener('click', () => console.log('fr')));

if (firstRowBoxes.contains('circle') || firstRowBoxes.contains('cross')) {
  console.log('WIN')
}

