/**
 * 剪切命令
 */

UE.plugin.register('cut',function(){
    var me = this,
        sizes = [8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 26, 36, 48, 72];

    return {
        commands:{
            'upsize':{
                execCommand:function () {
                    var size = parseInt(me.queryCommandValue('fontsize'));
                    for (var i = 0; i < sizes.length; i++) {
                        if (sizes[i] > size) {
                            me.execCommand('fontsize', sizes[i] + 'px');
                            break;
                        }
                    }
                }
            },
            'downsize':{
                execCommand:function () {
                    var size = parseInt(me.queryCommandValue('fontsize'));
                    for (var i = sizes.length - 1; i >= 0; i--) {
                        if (sizes[i] < size) {
                            me.execCommand('fontsize', sizes[i] + 'px');
                            break;
                        }
                    }
                }
            }
        }
    }
});