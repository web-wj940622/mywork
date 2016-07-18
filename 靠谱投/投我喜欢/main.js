/**
 * Created by mac on 16/7/15.
 */
(function () {

    var more,less, filter, hidden_place;

    function main() {
        getElements();
        addListeners();
    }

    function getElements() {
        more = document.getElementById('more');
        less = document.getElementById('less');
        filter = document.getElementById('filter');
        hidden_place = document.getElementsByClassName('hidden');
    }

    function addListeners() {
        more.onclick = function () {
            filter.style.height = 210 + "px";
            more.style.display ="none";
            less.style.display = "block";
            for(var i=0;i<hidden_place.length;i++){
                hidden_place[i].style.display = "block";
            }
        };
        less.onclick = function () {
            filter.style.height = 144 + "px";
            more.style.display ="block";
            less.style.display = "none";
            for(var i=0;i<hidden_place.length;i++){
                hidden_place[i].style.display = "none";
            }
        }
    }

    main();
})();