/**
 * Created by mac on 16/6/27.
 */
(function () {

    function Main() {
        /**
         *
         * @type {HTMLCanvasElement}
         * @private
         */
        // canvas 图形接口 2d-CPU  3d-显卡
        this._canvas = document.getElementById('canvas');
        this._context2d = this._canvas.getContext('2d');

        // this.drawRect();
        // this.drawCircle();
        // this.drawLines();
        // this.drawText();
        this.drawImg();

    }

    Main.prototype.drawRect =function () {

        this._context2d.fillStyle = "#ff0000";
        this._context2d.fillRect(10,10,200,100);
        
        this._context2d.lineWidth =10;
        this._context2d.strokeRect(10,10,200,100);

    };

    Main.prototype.drawCircle = function () {
        this._context2d.beginPath();
        this._context2d.arc(100,50,40,0,Math.PI*2,true);
        this._context2d.closePath();
        this._context2d.stroke();

        this._context2d.beginPath();
        this._context2d.arc(100,100,40,0,Math.PI);
        this._context2d.closePath();
        this._context2d.stroke();

        this._context2d.beginPath();
        this._context2d.moveTo(200,100);
        this._context2d.arc(200,100,40,0,Math.PI/2);
        this._context2d.closePath();
        this._context2d.stroke();
    };

    Main.prototype.drawLines = function () {
        // 贝塞尔曲线
        // this._context2d.moveTo(100,100);
        // this._context2d.quadraticCurveTo(150,0,200,100);
        // this._context2d.stroke();

        this._context2d.beginPath();
        this._context2d.moveTo(100,100);
        this._context2d.lineTo(100,200);
        this._context2d.lineTo(200,200);
        this._context2d.closePath();
        this._context2d.stroke();
    };

    Main.prototype.drawText =function () {
        this._context2d.font = "bold 32px Courier";
        this._context2d.fillStyle = "#ff00ff";
        this._context2d.fillText("你好Javascript",0,32);
    };

    Main.prototype.drawImg = function () {
        var img = document.createElement('img');
        img.onload = function () {
            this._context2d.drawImage(img,0,0);
            // this._context2d.drawImage(img,0,0,300);
            // this._context2d.drawImage(img,0,0,110);
        }.bind(this);
        img.onerror = function () {
            console.log("无法加载图片");
        };
        img.src="photo.jpg";
    };


    new Main();
})();
