const boxes = document.querySelectorAll('.box');
const firstRowBoxes = [...document.querySelectorAll('.first-row > .box')];
const secondRowBoxes = [...document.querySelectorAll('.second-row > .box')];
const thirdRowBoxes = [...document.querySelectorAll('.third-row > .box')];

let oddPlayer = true;

boxes.forEach(box => box.addEventListener('click', () => {
  if (box.classList.contains('circle') || box.classList.contains('cross')) return;
  oddPlayer ? box.classList.add('circle') : box.classList.add('cross');
  oddPlayer = !oddPlayer;

  console.log(firstRowBoxes);

  if (firstRowBoxes.every(box => box.classList.contains('circle')) || secondRowBoxes.every(box => box.classList.contains('circle')) || thirdRowBoxes.every(box => box.classList.contains('circle'))) {
    console.log('CIRCLE');
    boxes.removeEventListener('click');
  }

  if (firstRowBoxes.every(box => box.classList.contains('cross')) || secondRowBoxes.every(box => box.classList.contains('cross')) || thirdRowBoxes.every(box => box.classList.contains('cross'))) {
    console.log('CROSS');
  }


}));




