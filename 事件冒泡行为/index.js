/**
 * Created by mac on 16/6/19.
 */
(function () {
    function Main() {
        this.findElements();
        this.addEventListeners();
    }
    
    Main.prototype.findElements=function () {
        this._a=document.getElementById('a');
        this._b=document.getElementById('b');
        this._c=document.getElementById('c');

    };
    
    Main.prototype.addEventListeners=function () {
        this._a.addEventListener("click", function (event){
            console.log("a.click");
        },true);
        this._b.addEventListener("click", function (event){
            console.log("b.click");
        },true);
        this._c.addEventListener("click", function (event){
            console.log("c.click");
        },true);

    };

    new Main();
})();

// addEventListener()    监听事件方法
// element.addEventListener(event, function, useCapture)
//
// event      字符串，指定事件名。
//
// function   指定要事件触发时执行的函数。
//
// useCapture  true - 事件句柄在捕获阶段执行
//             false- false- 默认。事件句柄在冒泡阶段执行