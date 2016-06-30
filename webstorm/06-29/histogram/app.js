/**
 * Created by mac on 16/6/29.
 */
/**
 * {HTMLCanvasElement}
 */
(function () {
    
    function Main() {
        this._MAX_VALUE = 120;
        this._data={"html": {"chrome": 90, "firefox": 89, "ie": 10},
                    "css": {"chrome": 95, "firefox": 96, "ie": 5},
                    "js": {"chrome": 98, "firefox": 95, "ie": 4}};
        
        this._context2d = document.getElementById('canvas').getContext('2d');

        this._html = this.objChange(this._data.html);
        this._css = this.objChange(this._data.css);
        this._js = this.objChange(this._data.js);
        // console.log(this._html);
        this.drawRect(this._html,10);
        this.drawRect(this._css,160);
        this.drawRect(this._js,310);

    }
    //对象转换成数组
    Main.prototype.objChange = function (obj) {
        var arr = [];
        for (var item in obj) {
            arr.push(obj[item]);
        }
            return arr;
    };
    
    Main.prototype.drawRect = function (arr,x) {
        for(var i=0;i<arr.length;i++){
            // console.log(arr[i]);
            //上方留高度写标题
            var y = (400-20) * (1- arr[i]/this._MAX_VALUE);
            switch(i){
                case 0: this._context2d.fillStyle = "lightblue";break;
                case 1: this._context2d.fillStyle = "lightgreen";break;
                case 2: this._context2d.fillStyle = "orange";break;
            }
            this._context2d.fillRect(x+20*i,y,15,400-y);
            this._context2d.stroke();
        }
    };
    
    new Main();
})();