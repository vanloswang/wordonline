FUIToolbar.registerWidgetHandler('Button', function(option, widget, editor){

    var m, cmd = option._cmd;

    /* justify 额外处理 */
    if ((m = cmd.match(/^justify([\w]+)$/)) && m.length) {
        widget.on('click', function(){
            editor.execCommand('justify', m[1]);
        });
    } else {
        widget.on('click', function(){
            editor.execCommand(cmd);
        });
    }

    editor.on('selectionchange', function (){
        var state = editor.queryCommandState(cmd);
        widget[state == -1 ? 'disable':'enable']();
        widget[state == 1 ? 'addClass':'removeClass']('fui-button-pressed');
    });

    return widget;

});
