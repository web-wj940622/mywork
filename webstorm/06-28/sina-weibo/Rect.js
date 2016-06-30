/**
 * Created by mac on 16/6/28.
 */
window.ucai = window.ucai || {};

(function () {

    function Rect(r) {
        this._r = r;

        this._x = 0;
        this._y = 0;
        this._regX = 0;
        this._regY = 0;
        this._color ="#ffffff";
    }
    Object.defineProperties(Rect.prototype,{
        x:{
            set:function (value) {
                this._x = value;
            },
            get:function () {
                // return this._x ? this._x : 0;
                return this._x;
            }
        },
        y:{
            set:function (value) {
                this._y = value;
            },
            get:function () {
                return this._y;
            }
        },
        color:{
            set:function (value) {
                this._color = value;
            },
            get:function () {
                return this._color;
            }
        },
        r:{
            set:function (value) {
                this._r = value;
            },
            get:function () {
                return this._r;
            }
        }

    });
    
    Rect.prototype.draw = function (context2d) {
        context2d.save();
        // context2d.fillStyle = this._color;
        context2d.globalAlpha = 0.5;
        context2d.translate(this._x, this._y);
        context2d.beginPath();
        context2d.arc(100, 100, this._r, 0, Math.PI * 2);
        context2d.fill();
        context2d.closePath();
        context2d.restore();

    };
    ucai.Rect = Rect;
})();