/**
 * Created by mac on 16/6/24.
 */
(function () {
    function App() {
        /**
         *
         * @type {HTMLMediaElement}
         * @private
         */
        this._audio = document.getElementById('audio');
        this._lrcContainer = document.getElementById('lrc-container');

        this.loadLrc();
        
        (function (self) {
            setInterval(function () {

                if(self._lrc){
                    var content = self._lrc.getContent(Math.round(self._audio.currentTime));
                    if(content){
                        self._lrcContainer.innerHTML = content;
                    }
                }
            },1000);

        })(this);


    }


    /**
     * 加载同步歌词文件
     */
    App.prototype.loadLrc = function () {
        (function (self) {
            $.get("song.lrc").done(function (data) {
                self._lrc = new ucai.Lrc(data);
            })
        })(this);

    };


    new App();
})();