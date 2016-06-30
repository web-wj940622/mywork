/**
 * Created by mac on 16/6/27.
 */
(function () {
    
    function Main() {
        
        this._canvas = document.getElementById('canvas');
        this._context2d =this._canvas.getContext('2d');

        this.addListeners();
    }
    Main.prototype.mouseDown = function (event) {
        // console.log(event.layerX,event.layerY);
        this._context2d.moveTo(event.layerX,event);   // 根据起始点的不同会有不同的效果
        
        this._canvas.onmousemove = function (e) {
            this._context2d.lineTo(e.layerX,e.layerY);
            this._context2d.stroke();
        }.bind(this);
    };
    
    
    Main.prototype.mouseUp = function (event) {
        this._canvas.onmousemove = null;
    };


    Main.prototype.addListeners =function () {
        this._canvas.onmousedown = this.mouseDown.bind(this);
        this._canvas.onmouseup = this.mouseUp.bind(this);
        
    };


    
    
    
    new Main();
    
})();