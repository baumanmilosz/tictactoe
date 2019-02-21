const boxes = document.querySelectorAll('.box');

const move = () => {
  box.classList.add('cross');
}

boxes.forEach(box => box.addEventListener('click', () => box.classList.toggle('cross'));