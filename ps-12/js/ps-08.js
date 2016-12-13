var ctx = document.getElementById("walk").getContext('2d');

var beginX = 250;
var beginY = 250;

var clearScreen = function() {
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,500,500);
};
var drawDot = function (x, y) {
  clearScreen();
  var size = 30;
ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
  ctx.strokeStyle = ''
  beginY = beginY + 31;
  if(beginY > 100) {
    beginX = beginX + 200;
  }else if (beginY > 200) {
      beginX = beginX + 100;
  }else if (beginY > 300) {
    beginX = beginX + 50;
}
  if(beginY > 500) {
    beginY = 0;
    beginX = beginX + 31;
  }
  if (beginX > 500) {
    beginX = 0;
  }
  ctx.fillRect(beginX, beginY, size, size);
};

setInterval(drawDot, 100);
