const boxes = document.querySelectorAll('.box');
const firstRowBoxes = [...document.querySelectorAll('.first-row > .box')];
// console.log(firstRowBoxes.classList.contains);

let oddPlayer = true;

boxes.forEach(box => box.addEventListener('click', () => {
  if (box.classList.contains('circle') || box.classList.contains('cross')) return;
  oddPlayer ? box.classList.add('circle') : box.classList.add('cross');
  oddPlayer = !oddPlayer;

  console.log(firstRowBoxes[0]);
  console.log(firstRowBoxes[1]);
  console.log(firstRowBoxes[2]);
  console.log(firstRowBoxes[1].dir);
}));

firstRowBoxes.forEach(box => box.addEventListener('click', () => {

}));

if (firstRowBoxes[0].classList.contains('box.circle') && firstRowBoxes[1].classList.contains('box.circle') && firstRowBoxes[2].classList.contains('box.circle')) {
  console.log('WIN');
}

