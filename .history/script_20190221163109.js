const boxes = document.querySelectorAll('.box');

const oddPlayer = true;

boxes.forEach(box => box.addEventListener('click', () => {
  oddPlayer ? box.classList.add('.circle') : box.classList.add('.cross')

}));