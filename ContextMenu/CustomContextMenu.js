/**
 * Created by mac on 16/6/20.
 */
window.ucai =window.ucai||{};
(function () {

    function CustomContextMenu() {
            this._node = document.createElement("div");
            this._node.style.position = "fixed";
            this._node.style.backgroundColor = "#dddddd";

            this._ul = document.createElement("ul");
            this._node.appendChild(this._ul);
    }
    Object.defineProperty(CustomContextMenu.prototype,"node",{
        get:function () {
            return this._node;
        }
    });

    CustomContextMenu.prototype.addItem = function (item) {
        this._ul.appendChild(item.node);
    }

    CustomContextMenu.prototype.showMenu = function (x,y) {
        if(CustomContextMenu._currentMenu){
            CustomContextMenu._currentMenu.hide();
        }

        CustomContextMenu._currentMenu = this;
        this._node.style.display = "block";
        this._node.style.left = x + "px";
        this._node.style.top = y + "px";

        document.onmouseup = function (event) {
            if(event.button == 0){                          //event.button 用来判断鼠标按键,左键为0,右键为2
                this.hide();
            }
        }.bind(this);
    };
                                         //TODO 闭包和 .bind(this) 的应用及区别
                                        //document.onmouseup/click  等事件时,要用绑定函数.bind(this)
                                        //document.addEventListener("mousemove",function (event) {}
                                        //添加事件监听器时,要用 闭包 function(self){} ,通过self来获取到函数中this 的对象


    CustomContextMenu.prototype.hide = function () {
        this._node.style.display = "none";
    };

    ucai.CustomContextMenu = CustomContextMenu;


})();