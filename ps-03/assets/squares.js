var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext('2d');

console.log(canvas);
console.log(drawingPad);


drawingPad.fillStyle = "lightgrey";
drawingPad.fillRect(75, 75, 350, 350);

drawingPad.fillStyle = "grey";
drawingPad.fillRect(50, 50, 25, 25);
drawingPad.fillRect(425, 50, 25, 25);
drawingPad.fillRect(50, 425, 25, 25);
drawingPad.fillRect(425, 425, 25, 25);
drawingPad.fillRect(175, 175, 150, 150);

drawingPad.fillStyle = "black";
drawingPad.fillRect(0, 0, 50, 50);
drawingPad.fillRect(450, 0, 50, 50);
drawingPad.fillRect(0, 450, 50, 50);
drawingPad.fillRect(450, 450, 50, 50);
drawingPad.fillRect(225, 225, 50, 50);

function buttonClicked() {
  document.getElementById("datefield").innerHTML = Date();
}
