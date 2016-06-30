/**
 * Created by mac on 16/6/25.
 */
(function () {

    function Main() {
        this.getElements();
        this.addListeners();
    }

    Main.prototype.getElements = function () {
        this._playlistContainer = document.getElementById("playlist-container");
        this._playlist =document.getElementById("playlist");
        this._player = document.getElementById('player');
    };

    /**
     * 根据拖入的文件创建一个ul列表
     * @param files
     * @param ulNode {HTMLlistElement}
     */
    Main.prototype.createPlaylistByFilesIn = function (files,ulNode) {
        (function (self,ulNode) {
            function songSelectedHandler(file) {

                var reader = new FileReader();
                reader.onload =function () {
                    self._player.src = reader.result;
                };
                    
                reader.readAsDataURL(file);
            }

            for(var i=0;i<files.length;i++){
                var file = files[i];

                // if(file.type == "audio/mp3"){
                switch (file.type){
                    case "audio/mp3":
                    case "audio/mpeg":

                        var song = new ucai.Song(file);
                        song.onselect = songSelectedHandler;
                        ulNode.appendChild(song.node);
                }
            }

        })(this,ulNode);
    };

    Main.prototype.addListeners = function () {
        (function (self) {
            document.ondragover =function (event) {
                event.preventDefault();
            };
            document.ondrop = function (event) {
                event.preventDefault();

                var files = event.dataTransfer.files;
                self.createPlaylistByFilesIn(files,self._playlist);
            }
        })(this);

    };

    new Main();

})();