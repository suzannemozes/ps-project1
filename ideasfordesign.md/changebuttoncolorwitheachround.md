*change button color with each round
//html
<p id="para">Some text here</p>
  <button onclick="changeColor('blue');">blue</button>
  <button onclick="changeColor('red');">red</button>
//js
function changeColor(newColor) {
  const elem = document.getElementById('para');
  elem.style.color = newColor;
}

*