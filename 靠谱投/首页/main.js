/**
 * Created by mac on 16/7/12.
 */
(function () {

    var nav_hidden_btn, canvas_list, canvas;
    var arr = [];
    arr[0] = "../img/01.jpeg";
    arr[1] = "../img/02.jpeg";
    arr[2] = "../img/03.jpeg";
    arr[3] = "../img/04.jpeg";
    arr[4] = "../img/05.jpeg";

    function main() {
        getElements();

        nav_hidden_btn.onclick = function () {
            nav_hidden_btn.style.display = 'none';
            canvas_list.style.display = 'block';
            canvas.style.display = 'block';

        };

        canvas.onclick = function () {
            nav_hidden_btn.style.display = 'block';
            canvas_list.style.display = 'none';
            canvas.style.display = 'none';
        };

        imgCircle();

    }

    function getElements() {
        nav_hidden_btn = document.getElementById('nav-hidden-btn');
        canvas_list = document.getElementById('canvas-list');
        canvas = document.getElementById('canvas');
    }

    function imgCircle() {
        var i = 1;
        function Circle() {

            var picture = document.getElementById('lunbo-pic');
            var selector = document.getElementsByClassName('slider-area-selection');
            picture.src = arr[i];
            for (var j = 0; j < arr.length; j++) {
                selector[j].style.backgroundColor = "#d8d8d8";
                (function (arg) {
                    selector[arg].onclick =function () {
                        picture.src = arr[arg];
                        selector[arg].style.backgroundColor="#FD5D5D";
                        for(var m=0;m<arr.length;m++){
                            if(m!=arg){
                                selector[m].style.backgroundColor="#d8d8d8";
                            }
                        }
                        i=arg;
                    }
                })(j);
            }
            selector[i].style.backgroundColor = "#FD5D5D";

            if (i != arr.length - 1) {
                i += 1;
            }
            else {
                i = 0;
            }
        }
        setInterval(Circle, 2000);
    }

    // function getPictureId(i) {
    //     var picture = document.getElementById('lunbo-pic');
    //     // console.log(picture.src);
    //     //http://localhost:63342/webstorm/Actual%20Combat%20Project/%E9%9D%A0%E8%B0%B1%E6%8A%95/img/01.jpeg
    //     var pKv = /\d{1}.jpeg/g;
    //     var result = pKv.exec(picture.src);
    //     var id = result.slice(0,1)[0].slice(0,1);
    //     // console.log(id);
    //     var prev = document.getElementById('prev');
    //     var next = document.getElementById('next');
    //     prev.onclick = function () {
    //         if(id!=0){
    //             id-=1;
    //             picture.src=arr[id];
    //         }
    //         else{
    //             id=arr.length-1;
    //             picture.src=arr[arr.length-1];
    //         }
    //         i=id;
    //     }
    // }

    main();
})();