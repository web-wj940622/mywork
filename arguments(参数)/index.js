/**
 * Created by mac on 16/6/20.
 */

// 输出最大值。   可变参数
(function () {

    function max() {
        console.log(arguments);

        var arr=[];
        for(var i=0;i<arguments.length;i++){
            arr.push(arguments[i]);

        }

        arr.sort(function (a,b) {
            if(a<b){
                return 1;
            }
            if(a>b){
                return -1;
            }
            return 0;            //a<b (1)  b会被排列到a之前
        });

        alert(arr);
    }


    max(1,2,3,4,5,6,-1,10);

})();