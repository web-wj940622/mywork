/**
 * Created by mac on 16/6/24.
 */
(function () {

    function init() {

        // var p = /(foo) (bar) \1 \2/;
        // var x = "foo bar foo bar";
        // var result = p.exec(x);
        // console.log(result);


        str = "abbb34eftab0modabbbbb6";
        var reg = /a(b)+(\d+)/i;// then test: var reg = /a(b)+(/d+)/ig
        var arr = str.exec(reg);   //TODO  尝试exec 以及 match 之间的区别
        for(var i = 0; i < arr.length; i++){
            document.write(arr[i] + "---->"); //根据返回结果可知如果有g全局,那么返回所有匹配[abbb34,ab0,abbbbb6]
                                              //如果没有g全局,那么返回数组arr[0]为匹配的完整字串后面是括号里的捕获[abbb34,b,34];
        }
        document.write('<br>'+'/a(b)+(\d+)/i;');
    }

    init();

})();