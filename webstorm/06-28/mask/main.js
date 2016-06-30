/**
 * Created by mac on 16/6/28.
 */
(function () {

    function Main() {

        this._context2d = document.getElementById('canvas').getContext('2d');

        var img = new Image();
        img.onload = function () {
            this.draw(img);
        }.bind(this);
        img.src="photo.jpg";
        
        // this.draw();
        
    }

    Main.prototype.draw = function (img) {
        var g = this._context2d;

        g.beginPath();
        g.arc(120,80,75,0,Math.PI*2);

        g.fill();
        g.closePath();
        g.clip();
        //clip() 方法用当前剪切路径来剪切当前路径，然后使用剪切后的路径作为新的剪切路径。
        //即做出了覆盖效果
        g.drawImage(img,0,0);
        
        
        
        // g.beginPath();
        // g.rect(0,0,400,400);
        // g.fillStyle="#ff0000";
        // g.fill();
        // g.closePath();
        
    };


    new Main();
})();