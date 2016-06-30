/**
 * Created by mac on 16/6/24.
 */
(function () {
    
    var p,targetContainer,currentDragged;

    function getElements() {
        p = document.getElementById('p');
        targetContainer = document.getElementById('target-container');
    }
   
    // function implement() {
    //     p.ondragstart =function (event) {
    //         currentDragged = p;
    //     };
    //     targetContainer.ondragover = function (event) {
    //         //阻止事件默认行为,默认不接受拖入元素,阻止后可接受拖入元素
    //         event.preventDefault();
    //     };
    //
    //     targetContainer.ondrop = function (event) {
    //
    //         targetContainer.appendChild(currentDragged);
    //     }
    //
    //
    // }
    


    function init() {
        
        getElements();
        p.ondragstart = function (event) {
            event.dataTransfer.setData("domId",this.id);
        };
        
        // console.log(document.querySelectorAll(".container"));
        // document.querySelectorAll(".container").foreach(function (item) {
        //     item._acceptDrop = true;
        // })

        
        
        // var result = document.querySelectorAll(".container");
        var result = document.getElementsByClassName("container");
        for(var i=0;i<result.length;i++){
            result[i].acceptDrop = true;
        }

    }
    
    
    init();
    
})();