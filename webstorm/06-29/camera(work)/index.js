/**
 * Created by mac on 16/6/30.
 */
(function () {

    function Main() {
        this._video = document.getElementById('video');
        this._takephoto = document.getElementById('take-photo');
        this._canvas = document.getElementById('canvas');
        this._context2d = this._canvas.getContext('2d');
        this.showCamera();
        this.addListeners();
    }
    Main.prototype.addListeners = function () {
        this._takephoto.onclick=function () {
            this._context2d.drawImage(this._video,0,0);
            var url = this._canvas.toDataURL();
            this._a = document.createElement('img');
            this._a.src = url;
            this._a.style.width = 150 + "px";
            this._a.style.height =100 +"px";
            this._cotainer = document.getElementById('container');
            this._cotainer.appendChild(this._a);
        }.bind(this);
    };

    Main.prototype.showCamera = function () {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        navigator.getUserMedia({video:true},function (stream) {

            var url = URL.createObjectURL(stream);
            this._video.src = url;
            this._video.play();
        }.bind(this),function (error) {
            console.error("无法获取设备");
            console.error(error);
            alert("您拒绝了使用本机设备");
        });
    };

    new Main();
})();