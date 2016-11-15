var ctx = document.getElementById("walk").getContext('2d');
var height = 500;
var width = 500;
var points = [];
var numPoints = 100;
var img = new Image();
img.src = '111.png';

img.onload = function () {
    var pattern = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 500, 500);
};

var wrap = function (point) {
    if (point.x > width) {
        point.x = 0;
        point.y = point.y + 11;
    }
    if (point.y > height) {
        point.y = 0;
    }
    if (point.y < 0) {
        point.y = height;
    }

};

var move = function (p) {
    var speed = p.speed;
    var direction = Math.random();
    if (direction < 0.70) { // move up
        p.y = p.y + speed / 15;
    } else if (direction < 0.80) {
        p.x = p.x + speed / 15;
    } else if (direction < 0.90) {
        p.y = p.y + speed / 15;
    } else {
        p.x = p.x + speed / 15;
    }
};

var drawPoints = function () {
    img.onload();

    ctx.strokeStyle = '';

    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        move(point);
        wrap(point);
        ctx.fillStyle = "white";
        var circle = new Path2D();
        circle.arc(point.x, point.y, 0.5 * point.size, 0, 2 * Math.PI);
        ctx.fill(circle);
    }
    requestAnimationFrame(drawPoints);
};

var makePoints = function () {
    for (var i = 0; i < numPoints; i++) {
        var size = Math.random() * 15;
        var x = Math.random() * width;
        var speed = 10 + size;
        points.push({
            x: x,
            y: 0,
            size: size,
            speed: speed
        });
    }
};

makePoints();
requestAnimationFrame(drawPoints);
