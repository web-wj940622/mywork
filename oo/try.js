/**
 * Created by mac on 16/6/21.
 */
(function () {
    function Try(name) {
        return {
            __proto__: new ucai.Human(name),
            
            
            woshou:function (name) {
                console.log(this._name + "hahahaha");
            }
            
        }
        //继承的第三种方式    将函数写在function _proto_下面

    }
    // Try.prototype = new ucai.Human();
    //
    // Try.prototype.woshou = function(){
    //
    //     console.log(this._name +  "我要发财啦");
    // }
    //
    ucai.Try=Try;

})();