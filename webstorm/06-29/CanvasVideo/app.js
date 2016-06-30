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

        this._context2d.drawImage(this._video,0,0);

        requestAnimationFrame(this.render.bind(this));

    };


    new Main();
})();