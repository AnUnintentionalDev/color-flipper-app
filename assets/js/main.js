const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const changeColorBtn = document.getElementById('change-color-btn');
const colorCodeSpan = document.querySelector('.color-code');

changeColorBtn.addEventListener('click', function () { 
  const randomNumber = getRandomNumber() ;
  document.body.style.backgroundColor = colors[randomNumber];
  colorCodeSpan.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}