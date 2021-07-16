const hexColorItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const changeColorBtn = document.getElementById('change-color-btn');
const colorCodeSpan = document.querySelector('.color-code');

changeColorBtn.addEventListener('click', function () {
  let hexColor = "#";
  for (let a = 0; a < 6; a++){
    hexColor += hexColorItems[getRandomNumber()];
  }

  document.body.style.backgroundColor = hexColor;
  colorCodeSpan.textContent = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hexColorItems.length);
}