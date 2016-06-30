/**
 * Created by mac on 16/6/25.
 */
/**
 * Created by mac on 16/6/24.
 */
(function () {

    var currentMp3;

    document.ondragover = function (e) {
        e.preventDefault();
    };
    document.ondrop =function (e) {
        e.preventDefault();
        var files = e.dataTransfer.files;
        if(files && files.length) {

            for(var i=0;i<files.length;i++){
                if(files[i].type = "audio/mp3"){
                    var reader = new FileReader();
                    //读取文件完成以后执行该事件
                    reader.onload = function () {
                        // if(currentMp3){
                        //     currentMp3.parentNode.removeChild(currentMp3);
                        // }
                        // currentMp3 = document.createElement("audio");
                        // currentMp3.src = reader.result;
                        // document.body.appendChild(currentMp3);

                        currentMp3 = document.createElement('source');
                        currentMp3.src = reader.result;
                        var audio = document.getElementById('audio');
                        audio.appendChild(currentMp3);

                    };
                    //开始读取文件
                    reader.readAsDataURL(files[i]);
                    var list = document.getElementById('list');
                    var param = document.createElement('li');
                    param.innerHTML = files[i].name;
                    list.appendChild(param);
                    // audio.play();

                }
            }
        }

    };
    

})();