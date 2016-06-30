/**
 * Created by mac on 16/6/29.
 */
(function () {

    function Main() {
        this._context2d = document.getElementById('canvas').getContext('2d');
        /**
         *
         * @type {HTMLVideoElement}
         * @private
         */
        this._video = document.createElement('video');
        this._video.autoplay=true;
        this._video.src = "cool.mp4";



        this.render();
    }


    Main.prototype.render = function () {

        this._context2d.drawImage(this._video, 0, 0);

        // var imageWidth = Math.round(this._video.videoWidth);
        // var imageHeight = Math.round(this._video.videoHeight);
        // console.log(imageHeight);

        var imageWidth = 480;
        var imageHeight = 480;
        var originImageData = this._context2d.getImageData(0,0,imageWidth,imageHeight);
        this.BlackAndWhite(originImageData,imageWidth,imageHeight);

        requestAnimationFrame(this.render.bind(this));

    };

    Main.prototype.BlackAndWhite = function (originImageData,imageWidth,imageHeight) {
        var blackAndWhiteImageData =this._context2d.createImageData(imageWidth,imageHeight);
        for(var i=0;i<originImageData.data.length;i+=4){
            var color =(originImageData.data[i] + originImageData.data[i+1] + originImageData.data[i+2])/3;
            blackAndWhiteImageData.data[i] =color;
            blackAndWhiteImageData.data[i+1] =color;
            blackAndWhiteImageData.data[i+2] =color;
            blackAndWhiteImageData.data[i+3] =255;
        }
        this._context2d.putImageData(blackAndWhiteImageData,500,0);

    };


    new Main();
})();