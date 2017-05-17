var canvasWidth = 800;
var canvasHeight = 600;

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var image = new Image();
var radius = 50;
var clippingRegion = {
    x: -1,
    y: -1,
    r: radius
};
image.src = 'image.jpg';
image.onload = function (e) {
    initCanvas();
};

function initCanvas() {
    clippingRegion = {
        x: Math.random() * (canvasWidth - 2 * radius) + 50,
        y: Math.random() * (canvasHeight - 2 * radius) + 50,
        r: radius
    };
    draw(image, clippingRegion);
}

function setClippingRegion(clippingRegion) {
    context.beginPath();
    context.arc(clippingRegion.x, clippingRegion.y, clippingRegion.r, 0, Math.PI * 2, false);
    context.clip();
}

function draw(image) {
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    context.save();
    setClippingRegion(clippingRegion);
    context.drawImage(image, 0, 0);
    context.restore();
}

function show() {
    var theAnimation = setInterval(function () {
        console.log('animation');
        clippingRegion.r += 20;
        if (clippingRegion.r > 2 * Math.max(canvas.width, canvas.height)) {
            clearInterval(theAnimation);
        }
        draw(image, clippingRegion);
    }, 30)
}

function reset() {
    initCanvas();
}