/**
 * Created by mac on 16/6/29.
 */
(function () {

    config = {CIRCLE_X:200,CIRCLE_Y:200,CIRCLE_R:100};
    
    function Main() {
        this._data = [
            {name:"Android",value:0.5,fillcolor:"#ff0000"},
            {name:"iOS",value:0.4,fillcolor:"#00ff00"},
            {name:"JavaME",value:0.06,fillcolor:"#0000ff"},
            {name:"windowsPhone",value:0.04,fillcolor:"#ffff00"}
        ];
        
        this._context2d=document.getElementById('canvas').getContext('2d');
        this.drawData();
        this.addListeners();
    }

    Main.prototype.addListeners = function () {

        var c = this._context2d.canvas;

        c.onclick = function () {
            var requestFullScreen = c.requestFullScreen;
            if (!requestFullScreen) {
                requestFullScreen = c.webkitRequestFullScreen;
            }
            if (!requestFullScreen) {
                requestFullScreen = c.mozRequestFullScreen;
            }
            if (requestFullScreen) {
                requestFullScreen.call(c);
            } else {
                alert("你的浏览器不支持全屏");
            }
        }
    };

    Main.prototype.drawData = function () {
        //绘制饼图
        var lastvalue = 0;    //起始位置
        for(var i=0;i<this._data.length;i++){
            var item = this._data[i];
            var value = item.value * Math.PI * 2;
            var currentValue = lastvalue + value;
            this._context2d.beginPath();
            this._context2d.moveTo(config.CIRCLE_X,config.CIRCLE_Y);
            this._context2d.arc(config.CIRCLE_X,config.CIRCLE_Y,config.CIRCLE_R,lastvalue,currentValue);
            this._context2d.closePath();
            this._context2d.fillStyle = item.fillcolor;
            this._context2d.fill();
            
            lastvalue = currentValue;
        
        }    
    };

    new Main();
})();