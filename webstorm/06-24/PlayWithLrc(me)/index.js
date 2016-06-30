/**
 * Created by mac on 16/6/19.
 */
(function () {

    /**
     * @type {HTMLMediaElement}
     */
    var audio;
    var btnGetTime;

    function Main() {
        audio = document.getElementById("audio");
        btnGetTime = document.getElementById("btn-get-time");

        btnGetTime.addEventListener("click",function(event){
            console.log(audio.currentTime);
        });
    }
    Main();

})();


(function () {

    function init() {
        $.get("song.lrc").done(function (data) {
            var words=data.split('\n');

            var audio = document.getElementById("audio");
            function getTime() {
                var time_real=audio.currentTime;
                 // console.log(Math.round(time_real));


                for(var i=0;i<words.length;i++){
                    var minute = words[i].slice(2,3)*1;         //获取分钟数
                    var second = words[i].slice(4,6)*1;         //获取秒钟数
                    var length_w=words[i].length;             //获取每条歌词记录的长度
                    var word=words[i].slice(10,length_w);     //截取其中的歌词部分
                    var time_song=minute*60+second;
                    // console.log(time_song);
                    if (time_song == Math.round(time_real)) {
                        console.log(word);
                    }

                }




                setTimeout(getTime,100);
            }
            getTime();



            // console.log(data);
        }).fail(function(){
            console.error("加载失败");
        });
    }
    init();
})();





// (function () {
//
//     var lyric;
//     var j=0;
//     var box = document.getElementById('box');
//     function init() {
//         $.get("song.lrc").done(function (data) {
//             //console.log(data);
//             lyric = data.split('\n');
//             var l_lrc = lyric.length;
//             var playtime;
//             var lyricnew=[];
//             var lyric_new=[];
//             var checkTime=[];
//             for(var i =0 ;i<l_lrc;i++){
//
//                 playtime=lyric[i].split('');
//                 checkTime[i]=[playtime[1]+playtime[2]+playtime[4]+playtime[5]];
//                 for(var k=10;k<playtime.length;k++){
//                     lyricnew[k-10]=playtime[k];
//                 }
//                 var text=lyricnew.join('');
//                 lyricnew=[];
//                 lyric_new[i]=text;
//             }
//             //console.log(checkTime);
//             var audio = document.getElementById('audio');
//             function getTime(){
//                 var sec = audio.currentTime;
//                 var min = (sec-(sec%60))/60;
//                 sec = sec - min*60;
//                 if(min<10){
//                     min='0'+min;
//                 }
//
//                 sec=sec-sec%1;
//                 if(sec<10){
//                     sec='0'+sec;
//                 }
//                 var realTime=min+sec;
//
//
//                 //  console.log(realTime,'..checkTime...',checkTime[j],'....j......',j);
//                 if(checkTime[j]==realTime && j<checkTime.length){
//
//
//                     box.innerHTML=lyric_new[j]+'<br>'+'<p style="color:gray;">'+lyric_new[j+1]+'</p><p style="color:lightgray">'+lyric_new[j+2]+'</p>';
//                     j++;
//                     // console.log(j);
//
//                 }
//                 setTimeout(getTime,500);
//             }
//             getTime();
//
//
//         }).fail(function () {
//             console.error("加载失败");
//         });
//
//     }
//
//     init();
// })();
