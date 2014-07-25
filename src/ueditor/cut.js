/**
 * 剪切命令
 */

UE.plugin.register('cut',function(){
    var me = this;

    return {
        commands:{
            'cut':{
                execCommand:function () {
                    if (!me.document.execCommand('cut')) {
                        alert("浏览器不支持,请使用 'Ctrl + x'");
                    }
                }
            }
        }
    }
});