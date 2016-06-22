/**
 * Created by mac on 16/6/21.
 */
(function () {

    function Woman(name,age) {
        ucai.Human.call(this,name,age);

    }
    Woman.prototype = new ucai.Human();

    ucai.Woman = Woman;
})();
