FUIToolbar.registerWidgetHandler('link music', function(toolbar, editor, name){

    var option = $.extend({
        'className': 'wo-btn wo-btn-' + name
    }, FUIToolbar.WidgetConfig[name]);

    var button = new FUI.ToggleButton(option);

    button.on('click', function(type, evt){
        console.log('TODO: open ' + name + ' dialog');
    });

    editor.on('selectionchange', function (){
        var state = editor.queryCommandState(name);
        button[state == -1 ? 'disable':'enable']();
        button[state == 1 ? 'press':'bounce']();
    });

    return button;

});
