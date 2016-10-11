var w = 504;
var h = 504;


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function draw(){
  for (var x = 0; x <= w; x += 42) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
  }

  for (x = 0; x <= h; x += 42) {
    ctx.moveTo(0, x);
    ctx.lineTo(w, x);
  }

  for (var i = 0; i <= w; i += 42) {
    for (var j = 0; j <= h; j+= 42) {
      var option = Math.floor(Math.random() * 4); //0-3
      switch(option) {
      case 0:
        ctx.moveTo(i, j);
        ctx.lineTo(i + 42, j+ 42);
        break;
      case 1:
        ctx.moveTo(i + 42, j);
        ctx.lineTo(i, j+ 42);
        break;
      case 2:
        ctx.moveTo(i, j);
        ctx.lineTo(i + 42, j+ 42);
        ctx.moveTo(i + 42, j);
        ctx.lineTo(i, j+ 42);
        break;
      case 3:
        break;
      default:
        break;
      }
    }
  }

  ctx.strokeStyle = "black";
  ctx.lineWidth=5;
  ctx.stroke();
}

draw();

  ctx.strokeStyle = "black";
  ctx.lineWidth=5;
  ctx.stroke();
}

draw();

function buttonClicked() {
  document.getElementById("datefield").innerHTML = Date();
}
