/**
 * Created by mac on 16/7/16.
 */
(function () {

    var btn_hidden,header_offcanvas,offcanvas_bar;

    function main() {
        getElements();
        
        btn_hidden.onclick =function () {
            // btn_hidden.style.display="none";
            header_offcanvas.style.display ="block";
        };

        header_offcanvas.onclick =function () {
            header_offcanvas.style.display ="none";
        }
    }

    function getElements() {
        btn_hidden =document.getElementById('btn-hidden');                      //侧边栏按钮
        header_offcanvas = document.getElementById('header-offcanvas');         //遮罩层
        // offcanvas_bar =document.getElementById('offcanvas-bar');        //侧边栏 主要内容  TODO 暂时无法添加动画效果
    }

    main();
})();