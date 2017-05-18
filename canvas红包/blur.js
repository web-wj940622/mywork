/*
 获取移动端屏幕尺寸
 */
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

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
var LeftMargin = 0;
var TopMargin = 0;
image.src = 'image2.jpg';
image.onload = function (e) {
    $('#blur-div').css({'width': canvasWidth + 'px', 'height': canvasHeight + 'px'});

    LeftMargin = (image.width - canvas.width) / 2;
    TopMargin = (image.height - canvas.height) / 2;

    $('#blur-image').css({
        'width': image.width + 'px',
        'height': image.height + 'px',
        'top': String(-TopMargin) + 'px',
        'left': String(-LeftMargin) + 'px'
    });

    initCanvas();
};

/*
 初始化Canvas幕布
 */
function initCanvas() {
    var theLeft = LeftMargin < 0 ? -LeftMargin : 0;
    var theTop = TopMargin < 0 ? -TopMargin : 0;
    clippingRegion = {
        x: Math.random() * (canvasWidth - 2 * radius - 2 * theLeft) + radius + theLeft,
        y: Math.random() * (canvasHeight - 2 * radius - 2 * theTop) + radius + theTop,
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
    context.drawImage(image,
        Math.max(LeftMargin, 0), Math.max(TopMargin, 0),
        Math.min(canvas.width, image.width), Math.min(canvas.height, image.height),
        LeftMargin < 0 ? -LeftMargin : 0, TopMargin < 0 ? -TopMargin : 0,
        Math.min(canvas.width, image.width), Math.min(canvas.height, image.height));
    context.restore();
}

/*
 动画形式显示整张图片
 */
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

/*
 重置Canvas幕布
 */
function reset() {
    initCanvas();
}

/*
 添加监听事件，禁止手机屏幕滑动
 */
canvas.addEventListener('touchstart', function (e) {
    e.preventDefault();
});