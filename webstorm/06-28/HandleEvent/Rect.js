/**
 * Created by mac on 16/6/28.
 */
window.ucai = window.ucai || {};

(function () {

    function Rect(width,height) {
        this._width = width;
        this._height = height;

        this._x = 0;
        this._y = 0;
        this._regX = 0;
        this._regY = 0;
        this._color = "#ff0000";
        this._rotation = 0;
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
        regX:{
            set:function (value) {
                this._regX = value;
            },
            get:function () {
                return this._regX;
            }
        },
        regY:{
            set:function (value) {
                this._regY = value;
            },
            get:function () {
                return this._regY;
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
        width:{
            set:function (value) {
                this._width = value;
            },
            get:function () {
                return this._width;
            }
        },
        height:{
            set:function (value) {
                this._height = value;
            },
            get:function () {
                return this._height;
            }
        },
        rotation:{
            set:function (value) {
                this._rotation = value;
            },
            get:function () {
                return this._rotation;
            }
        }

    });

    /**
     *
     * @param context2d {CanvasRenderingContext2D}
     */
    Rect.prototype.draw = function (context2d) {
        context2d.save();
        context2d.fillStyle = this._color;
        context2d.translate(this._x,this._y);
        context2d.rotate(this._rotation);
        context2d.fillRect(-this._regX,-this._regY,this._width,this._height);
        context2d.restore();
    };

    ucai.Rect = Rect;

})();