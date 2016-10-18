var w = 660;
var h = 660;


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "black";

var color;
var setColor = function(hue, saturation, lightness) {
  var colorString = "hsl("+hue+", "+saturation+"%,"+lightness+"%)";
  ctx.strokeStyle = colorString;
};


function drawlines(){
  for (var x = 0; x < 320; x += 20) {
    ctx.beginPath();
    var lFraction=x/320;
    setColor(0, 0, lFraction*100)
    ctx.moveTo(0, x);
    ctx.lineTo(x, x);
      ctx.stroke();
  }
  for (x = 320; x <= w; x += 20) {
    ctx.beginPath();
    var lFraction=(640-x)/320;
    setColor(0, 0, lFraction*100);
    ctx.moveTo(0, x);
    ctx.lineTo(640-x, x);
    ctx.stroke();
  }

  //ctx.strokeStyle = "black";
  ctx.lineWidth=3;
  ctx.stroke();
}



drawlines();
