/**
 * Created by mac on 16/6/19.
 */
//普通的监听事件
// (function () {
//     function Main() {
//         this.findElements();
//     }
//     Main.prototype.findElements=function () {
//         this._linkClick=document.getElementById('linkClick');
//         this._linkClick.onclick=function (event) {
//             console.log(event);
//            // this._linkClick.onclick = null;
//         }
//             //.bind(this);
//     }
//     new Main();
// })();

//bind(this)函数
// (function () {
//     function Main() {
//         this.findElements();
//     }
//     Main.prototype.findElements=function () {
//         this._linkClick=document.getElementById('linkClick');
//         this._linkClick.onclick=function (event) {
//             console.log(event);
//
//             this._linkClick.onclick = null;
//
//         }.bind(this);
//     }
//     new Main();
// })();

//TODO  要弄懂bind(this)的意思
// 输出结果:通过bind(this)函数,结果点击事件只触发一下


(function () {

    function Main() {
        this.findElements();
        // this.addListeners1();
        this.addListeners2();
    }

    Main.prototype.findElements = function () {
        this._linkClickMe = document.getElementById("linkClick");
    };

    Main.prototype.addListeners1 = function () {
        this._linkClickMe.onclick = function (event) {
            console.log(event);

            this._linkClickMe.onclick = null;
        }.bind(this);
    };

    Main.prototype.addListeners2 = function () {
        this._linkClickMe.addEventListener("click", function (event) {
            console.log("link clicked 1");

            event.target.removeEventListener("click", arguments.callee);
        });

        this._linkClickMe.addEventListener("click", function (event) {
            console.log("link clicked 2");
        });
    };

    new Main();
})();