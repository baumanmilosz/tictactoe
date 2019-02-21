const boxes = document.querySelectorAll('.box');

const oddPlayer = true;

boxes.forEach(box => box.addEventListener('click', () => box.classList.toggle('cross')));