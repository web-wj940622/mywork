/**
 * Created by mac on 16/6/21.
 */
window.ucai=window.ucai||{};
(function () {
    function Eyeball() {
        this._node=document.createElement("div");
        this._node.className = "eyeball";

        this._ORIGIN_LEFT = 15;
        this._ORIGIN_TOP = 15;
        this._R = 14;

        this._left = this._ORIGIN_LEFT;
        this._top = this._ORIGIN_TOP;

        this.addListeners();
    }

    Object.defineProperties(Eyeball.prototype,{
        left:{
            get:function () {
                return this._left;
            },
            set:function (value) {
                this._left = value;

                this._node.style.left= this._left + "px";
            }
        },
        top:{
            get:function () {
                return this._top;
            },
            set:function (value) {
                this._top = value;

                this._node.style.top= this._top + "px";
            }
        },
        node:{
            get:function () {
                return this._node;
            }
        },
        globalOriginLeft:{
            get:function () {
                if(!this._globalOriginLeft){
                    var rect = this.boundingRect;
                    this._globalOriginLeft = rect.left;
                }
                return this._globalOriginLeft;
            }
        },
        globalOriginTop:{
            get:function () {
                if(!this._globalOriginTop){
                    var rect = this.boundingRect;
                    this._globalOriginTop = rect.top;
                }
                return this._globalOriginTop;
            }
        },
        boundingRect:{
            get:function () {
                if(!this._boundingRect){
                    this._boundingRect = this._node.getBoundingClientRect();
                    //TODO    牢记    getBoundingClientRect()   获取当前节点的绝对位置
                }
                return this._boundingRect;
            }
        }
    });

        //对鼠标添加一个 事件监听器 , 从而获取到鼠标的位置,从而求出跟随眼球的相应位置
    Eyeball.prototype.addListeners = function () {
        //添加一个 闭包, 用self 来获取到函数内部this的对象
        (function (self) {
        document.addEventListener("mousemove",function (event) {
                var dy = event.pageY - self.globalOriginTop;
                var dx = event.pageX - self.globalOriginLeft;
                //pageX 和 pageY  代表了鼠标指针所在的位置

                var angle = Math.atan(dy / dx);
                //求出鼠标指针与节点之间的角度(这里的节点node为眼球,利用getbongingClientRect获取绝对位置,眼球初始位置居中)
                var r = dx >= 0 ? 1 : -1;
                //判断鼠标指针在眼球中心的 左侧还是右侧


                self.left = self._ORIGIN_LEFT + Math.cos(angle) * self._R *r;
                self.top = self._ORIGIN_TOP + Math.sin(angle) * self._R *r;
                //得出眼球变化的位置关系,得到跟随鼠标相应的坐标

            });
        })(this);
    };

    ucai.Eyeball=Eyeball;
})();