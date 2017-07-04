operate = true;
//获取一下id
var resultDom = document.getElementById("result");
//点击计算器执行函数
function command(num){
    var str = resultDom.value;
    str = (str == "0" ? "":str);
    str += num;
    resultDom.value = str;
}
function tools(p,m){
    // if(operate){
        var num = resultDom.value;
        num = (num == "0" ? "":num);
        resultDom.value = num + p;
        // operate = false;
    // }
}
function equal(m){
    var result = resultDom.value;
    var r = eval(result);
    resultDom.value =r;
}
function clearzero(){
    resultDom.value=0;

}
function del(m){

    var str = resultDom.value;

    str = str.substring(0,str.length - 1);
    str = (str == "" ? 0 : str);


    resultDom.value = str;


}