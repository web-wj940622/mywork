/**
 * Created by mac on 16/6/25.
 */
window.ucai =window.ucai || {};
(function () {

    /**
     * 根据Ini文件内容创建一个Ini对象
     * @param str {String} ini文件内容
     * @constructor
     */
    function Ini(str) {
        var pNode = /\[(.*)\]/g;
        var pkv = /(.*)=(.*)/g;
        
        
        while(true){
            var result = pNode.exec(str);
            if(result){
                // console.log(result);
                var nodeName = result[1];
                this[nodeName] = {};

                var startIndex = result.index + result[0].length;
                var endIndex = str.indexOf("[",startIndex);

                //如果索引不到,则说明此节点是最后一个,所以将结束位置赋以 字符串长度
                if(endIndex == -1){
                    endIndex = str.length;
                }

                //substr(起始位置,截取长度)
                //substring(起始位置,结束位置)
                var nodeContent = str.substring(startIndex,endIndex);

                while(true){
                    var kvResult =pkv.exec(nodeContent);

                    if(kvResult){
                        this[nodeName][kvResult[1].trim()] = kvResult[2].trim();
                        //.trim()     去掉字符串首尾空格
                    }
                    else{
                        break;
                    }
                }

            }
            else{
                break;
            }
        }
        
        
    }
    

    ucai.Ini = Ini;
})();