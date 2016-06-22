/**
 * Created by mac on 16/6/21.
 */
(function () {
    
    function Human(name,age) {
        
        this._name=name;
        this._age = age;
        
        this.sayhello=function () {
            console.log(this._name + " 你好");
        }
        
        
    }

    Human.prototype.sayhi = function () {
        console.log(this._name + " 你好a");
    }

    ucai.Human = Human;
    
})();