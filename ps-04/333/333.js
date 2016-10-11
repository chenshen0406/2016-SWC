var w = 1332;
var h = 1332;


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function drawlines(){
  for (var x = 0; x <= w; x += 8) {
    ctx.moveTo(x/2, x);
    ctx.lineTo(1332- x, x+8);
  }

   for (var x = 0; x <= w; x += 8) {
     ctx.moveTo(1332- x, x+8);
    ctx.lineTo(x/2+4, x+8);
  }


  ctx.strokeStyle = "black";
  ctx.lineWidth=1;
  ctx.stroke();
}



drawlines();
