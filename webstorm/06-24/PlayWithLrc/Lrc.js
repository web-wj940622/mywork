/**
 * Created by mac on 16/6/24.
 */
window.ucai = window.ucai || {};

(function () {
    /**
     * 创建一个Lrc对象
     * @param lrcString  {String}同步歌词字符串
     * @constructor
     */
    function Lrc(lrcString) {

        this.data={};

        var lines = lrcString.split('\n');

        (function (self) {
            lines.forEach(function (line) {
                var startIndex = -1;
                startIndex = line.indexOf("[");     //查找 [
                if(startIndex!= -1){
                    var minStr = line.substr(startIndex + 1 ,2);
                    var min = parseInt(minStr);

                    var secStr = line.substr(startIndex + 4 ,2);
                    var sec = parseInt(secStr);

                    self.data[min * 60 + sec ] = line.substr(startIndex + 10);
                }
            })

        })(this);
    }

    Lrc.prototype.getContent = function (timeTag) {
        return this.data[timeTag];
    };

    ucai.Lrc = Lrc;
    
})();