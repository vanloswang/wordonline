FUIToolbar.registerWidgetHandler('forecolor backcolor', function(toolbar, editor, name){

    var option = $.extend({
            'className': 'wo-btn wo-btn-' + name
        }, FUIToolbar.WidgetConfig[name]),
        pickerOption = FUIToolbar.WidgetConfig['colorpicker'];

    var colorpicker = new FUI.ColorPicker(pickerOption);

    var button = new FUI.Button(option);
    colorpicker.attachTo(button);

    colorpicker.on('selectcolor', function(type, color){
        editor.execCommand(name, color);
    });

    editor.on('selectionchange', function (){
        var state = editor.queryCommandState(name);
        button[state == -1 ? 'disable':'enable']();
    });

    return button;

});
