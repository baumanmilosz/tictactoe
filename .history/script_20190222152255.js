const boxes = document.querySelectorAll('.box');
const firstRowBoxes = [...document.querySelectorAll('.first-row > .box')];
console.log(firstRowBoxes);

let oddPlayer = true;

boxes.forEach(box => box.addEventListener('click', () => {
  if (box.classList.contains('circle') || box.classList.contains('cross')) return;
  oddPlayer ? box.classList.add('circle') : box.classList.add('cross');
  oddPlayer = !oddPlayer;
  console.log(firstRowBoxes);
}));

firstRowBoxes.forEach(box => box.addEventListener('click', () => {

}));

if (firstRowBoxes[1].classList.contains('circle') && firstRowBoxes[2].classList.contains('circle') && firstRowBoxes[3].classList.contains('circle')) {
  console.log('WIN');
}
