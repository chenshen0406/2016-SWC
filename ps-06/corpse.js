var myCanvas = document.getElementById('corpse');
var drawingPad = myCanvas.getContext('2d');

var circleDegrees = 2 * Math.PI;
var y0  = 0;
var y1 = 240;
var y2 = 480;
var height = y3 = 720;
var x0 = 0;
var x1 = 125; // left connection
var x2 = 275; // right connection
var width = x3 = 400;
var horizontalCenter = 200; // centerLine

var chenshen0406 = {};

var drawImage = function(filename, ctx, x, y) {
  var img = document.createElement("img");
  img.src = filename;
  img.addEventListener("load", function() {
    ctx.drawImage(img, x, y);
    //ctx.drawImage(ctx, file,x,y)
  });
}

chenshen0406.drawGrid = function(ctx) {
  ctx.beginPath();
  ctx.moveTo(x1,y0);
  ctx.lineTo(x1,y3);

  ctx.moveTo(x2,y0);
  ctx.lineTo(x2,y3);

  ctx.moveTo(x1,y0);
  ctx.lineTo(x1,y3);

  ctx.moveTo(x0,y1);
  ctx.lineTo(x3,y1);

  ctx.moveTo(x0,y2);
  ctx.lineTo(x3,y2);
  ctx.stroke();
}


chenshen0406.drawTop = function(ctx) {
  // draw a round head:
  // ctx.beginPath();
  // ctx.arc(horizontalCenter, 120, 120, 0, circleDegrees);
  // ctx.fill();
  drawImage('https://chenshen0406.github.io/2016-SWC/ps-06/head.jpg', ctx, 0, 0);
};

chenshen0406.drawMiddle = function(ctx) {
drawImage('https://chenshen0406.github.io/2016-SWC/ps-06/body.jpg', ctx, 0, 240);
}
chenshen0406.drawBottom = function(ctx) {
drawImage('https://chenshen0406.github.io/2016-SWC/ps-06/legs.jpg', ctx, 0, 480);
}
chenshen0406.drawCorpse = function(ctx) {
  chenshen0406.drawTop(ctx);
  chenshen0406.drawMiddle(ctx);
  chenshen0406.drawBottom(ctx);

};

window.chenshen0406 = chenshen0406;
