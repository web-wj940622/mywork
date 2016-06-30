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
           var file=files[0];
                if(file.type = "audio/mp3"){
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
                    reader.readAsDataURL(file);
                    var list = document.getElementById('list');
                    var param = document.createElement('li');
                    param.innerHTML = file.name;
                    list.appendChild(param);
                    // audio.play();

                }
        }

    };

})();