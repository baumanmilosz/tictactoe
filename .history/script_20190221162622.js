const boxes = document.querySelectorAll('.box');

const move = () => {
  console.log('a');
}

boxes.forEach(box => box.addEventListener('click', move));