var boxes = document.querySelectorAll('.box');
const firstRowBoxes = [...document.querySelectorAll('.first-row > .box')];
const secondRowBoxes = [...document.querySelectorAll('.second-row > .box')];
const thirdRowBoxes = [...document.querySelectorAll('.third-row > .box')];

let oddPlayer = true;

boxes.forEach(box => box.addEventListener('click', move));




