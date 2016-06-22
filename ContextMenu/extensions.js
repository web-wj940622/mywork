/**
 * Created by mac on 16/6/20.
 */
(function () {

    // Object.prototype.isUseCustomContextMenu = function () {
    //     return this._useCustomContextMenu;
    // }
    // 与下方get set 方法等价

    Object.defineProperties(HTMLElement.prototype,{
        //HTMLElement 对象继承了 Node 和 Element 对象的标准属性
       useCustomContextMenu:{                                  //是否使用右键默认菜单
            get:function () {
                return this._useCustomContextMenu;
            },
            set:function(value){
                this._useCustomContextMenu = value;
                if(this._useCustomContextMenu){
                    this.oncontextmenu = function(event){
                        event.preventDefault();               //取消事件的默认行为

                    if(this.customContextMenu){
                        this.customContextMenu.showMenu(event.clientX,event.clientY);
                        }
                    }.bind(this);


                    //TODO   show my custom contextmenu


                }
                else{
                        this.oncontextmenu = null;
                    }
                }
            },
            customContextMenu:{
                get:function () {
                    return this._customContextMenu;
                },
                set:function (value) {
                    if(this._customContextMenu){
                        document.body.removeChild(this._customContextMenu);
                    }

                    this._customContextMenu = value;

                    if(this._customContextMenu){
                        document.body.appendChild(this._customContextMenu.node);
                        this._customContextMenu.hide();

                    }

                }
            }
        
        
        });

})();