var w = 660;
var h = 660;


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function drawlines(){
  for (var x = 0; x < 320; x += 20) {
    ctx.moveTo(0, x);
    ctx.lineTo(x, x);
  }

  for (x = 320; x <= w; x += 20) {
    ctx.moveTo(0, x);
    ctx.lineTo(640-x, x);
  }

  ctx.strokeStyle = "black";
  ctx.lineWidth=3;
  ctx.stroke();
}



drawlines();
