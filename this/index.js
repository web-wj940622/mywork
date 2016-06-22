/**
 * Created by mac on 16/6/20.
 */


(function () {

    // console.log(arguments.callee);    //访问函数本身
    //
    //
    // function Human(name) {
    //     this._name = name;
    // }
    //
    // var a = new Human("王捷");
    //
    // var hello = function () {
    //     console.log("hello "+ this._name);
    // }.bind(a);
    //
    //
    //
    // hello();           //传的是可变参数


    // setTimeout(function () {
    //     console.log(this);
    // },1000);

//todo  要理解这段代码
    function Human(name) {
        this._name=name;

        this.hello=function (){
        (function (a) {
            var count=0;
            var id=setInterval(function () {
                console.log(a._name + " say hello");

                count++;
                if (count > 5) {
                    clearInterval(id);
                }
            },1000);
        })(this);
    };
}

    var h = new Human("wuduo");
    h.hello();

    
    // var div=document.getElementById('div');
    // div.onclick=function (event) {
    //     console.log(this);
    // }
    // onclick是div的成员函数,因此this 指向的是整个 div框
    // 1.window
    // 2.函数执行时 window对象
    // 3.附加 上下文对象
    // 4.常规回调函数   默认情况下window对象




})();


