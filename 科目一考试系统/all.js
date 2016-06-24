/**
 * Created by mac on 16/6/23.
 */
var i=0;
(function () {

    function Main() {
            $.get("Questions.json").done(function (data) {

                var title = document.getElementById('title');
                var a = document.getElementById('a');
                var b = document.getElementById('b');
                var c = document.getElementById('c');
                var d = document.getElementById('d');

                // console.log(data[i].right);
                var right = data[i].right;
                var length=data.length;

                //----------------按钮单选绑定----------------
                function Disabled() {
                    for(var m=0;m<radioTags.length;m++){
                        radioTags[m].disabled = 'disabled';
                    }
                }
                //----------------按钮单选解除----------------
                function Abled() {
                    for(var n=0;n<radioTags.length;n++){
                        radioTags[n].disabled = '';
                    }
                }
                //----------------题目创建------------------
                function test(i) {
                    title.innerHTML = (i+1) + data[i]['title'];
                    a.innerHTML = data[i]['a'];
                    b.innerHTML = data[i]['b'];
                    c.innerHTML = data[i]['c'];
                    d.innerHTML = data[i]['d'];
                }
                test(i);

                //-----------------校对答案------------------
                var radioTags = document.getElementsByTagName('input');
                var keys = document.getElementById('box2');
                for(var j=0;j<radioTags.length;j++){
                    (function (arg) {
                        radioTags[arg].onclick =function () {
                            var right = data[i].right;

                            Disabled();
                            if(radioTags[arg].value == right){
                                keys.innerHTML = "恭喜你,答对了!";
                            }
                            else{
                                keys.innerHTML = "你答错了! 标准答案是"  + right ;
                            }
                        }
                    })(j);
                }
                //-----------------清空按钮------------------
                function clear() {
                    for(var k=0;k<radioTags.length;k++){
                        radioTags[k].checked = '';
                    }
                }

                //-----------------下一题--------------------
                var next = document.getElementById('next');
                next.onclick = function () {
                    if(i==length-1){
                        alert("已是最后一题!");
                    }
                    else
                    {
                        Abled();
                        clear();
                        keys.innerHTML ='';
                        i += 1;
                        test(i);
                    }
                };

                //-----------------上一题--------------------
                var back = document.getElementById('back');
                back.onclick = function () {
                    if(i==0){
                        alert("已是第一题!")
                    }
                    else {
                        Abled();
                        clear();
                        keys.innerHTML ='';
                        i -= 1;
                        test(i);

                    }
                };

                //-----------------本题解释--------------------
                var explain = document.getElementById('explain');
                explain.onclick = function () {
                    var xx = data[i].desc;
                    alert(xx);
                }

            });
        
    }

    new Main();
})();