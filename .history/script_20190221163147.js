const boxes = document.querySelectorAll('.box');

let oddPlayer = true;

boxes.forEach(box => box.addEventListener('click', () => {
  console.log('as');
  oddPlayer ? box.classList.add('.circle') : box.classList.add('.cross');
  oddPlayer = !oddPlayer;
}));