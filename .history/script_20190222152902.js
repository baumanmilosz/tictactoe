const boxes = document.querySelectorAll('.box');
const firstRowBoxes = [...document.querySelectorAll('.first-row > .box')];
console.log(firstRowBoxes);

let oddPlayer = true;

boxes.forEach(box => box.addEventListener('click', () => {
  if (box.classList.contains('circle') || box.classList.contains('cross')) return;
  oddPlayer ? box.classList.add('circle') : box.classList.add('cross');
  oddPlayer = !oddPlayer;
  console.log(firstRowBoxes);
  console.log(firstRowBoxes[1]);
}));

firstRowBoxes.forEach(box => box.addEventListener('click', () => {

}));

if (firstRowBoxes[1].classList.contains('box circle')) {
  console.log('WIN');
}

