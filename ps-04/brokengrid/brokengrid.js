var w = 504;
var h = 504;


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function drawgrid(){
  for (var x = 0; x <= w; x += 42) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
  }

  for (x = 0; x <= h; x += 42) {
    ctx.moveTo(0, x);
    ctx.lineTo(w, x);
  }

  ctx.strokeStyle = "white";
  ctx.lineWidth=3;
  ctx.stroke();
}


function drawgrey() {
  ctx.fillStyle = "gray";
  ctx.fillRect(0, 0, 504, 504);
  for (var x = 0; x <= w; x += 42) {

    ctx.fillStyle = "lightgray";
    ctx.fillRect(x, x, x + 42, x+42);
  }
}


drawgrey();
drawgrid();
