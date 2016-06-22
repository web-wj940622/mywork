/**
 * Created by mac on 16/6/21.
 */
(function () {

    function Man(name) {
        ucai.Human.call(this,name);
    }

    Man.prototype = new ucai.Human();

    Man.prototype.FallInLove = function (woman) {
        console.log(this._name + " love " + woman._name + woman._age);
    }





    ucai.Man = Man;

})();