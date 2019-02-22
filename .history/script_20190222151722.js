const boxes = document.querySelectorAll('.box');
const firstRowBoxes = document.querySelectorAll('.first-row > .box');
console.log(firstRowBoxes);

let oddPlayer = true;

boxes.forEach(box => box.addEventListener('click', () => {
  if (box.classList.contains('circle') || box.classList.contains('cross')) return;
  oddPlayer ? box.classList.add('circle') : box.classList.add('cross');
  oddPlayer = !oddPlayer;
}));

firstRowBoxes.forEach(box => box.addEventListener('click', () => {
  if (box[1].classList.contains('circle') && box[2].classList.contains('circle')) {
    console.log('WIN');
  }
}));



