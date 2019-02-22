const boxes = document.querySelectorAll('.box');
const firstRowBoxes = [...document.querySelectorAll('.first-row > .box')];
console.log(firstRowBoxes)

let oddPlayer = true;

boxes.forEach(box => box.addEventListener('click', () => {
  if (box.classList.contains('circle') || box.classList.contains('cross')) return;
  oddPlayer ? box.classList.add('circle') : box.classList.add('cross');
  oddPlayer = !oddPlayer;
}));

firstRowBoxes.forEach(box => box.addEventListener('click', () => {

}));

if (firstRowBoxes.classList.contains('circle') || firstRowBoxes.classList.contains('cross')) {
  console.log('WIN');
}

