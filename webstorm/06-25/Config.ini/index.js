/**
 * Created by mac on 16/6/25.
 */
(function () {

    function init() {

        $.get("app.ini").done(function (data) {
            var ini = new ucai.Ini(data);
            console.log(ini);
        })
    }

    init();
})();
