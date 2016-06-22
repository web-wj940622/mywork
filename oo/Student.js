/**
 * Created by mac on 16/6/21.
 */
(function () {
    
    function Student(name) {
        ucai.Human.call(this,name);
        // ucai.Human.apply(this, arguments);      //继承的两种方式

    }
    Student.prototype = new ucai.Human();

    Student.prototype.sayhi = function () {
        console.log(this._name + " 你好");
    }

    
    ucai.Student = Student;
    
})();