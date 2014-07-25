FUIToolbar.registerWidgetHandler('fontfamily fontsize paragraph', function(toolbar, editor, name){

    var option = $.extend({
        'className': 'wo-input-menu wo-input-menu-' + name
    }, FUIToolbar.WidgetConfig[name]);

    var buttonMenu = new FUI.InputMenu(option);

    buttonMenu.on('select', function(type, info){
        editor.execCommand(name, getValueByInfo(name, info));
    });

    editor.on('selectionchange', function (){
        var state = editor.queryCommandValue(name);
    });

    function getValueByInfo(name, info){
        var value = '';
        if (name == 'fontsize' && $.isNumeric(info.value)) {
            value = info.value + 'px';
        } else if (name == 'paragraph') {
            debugger;
            value = info.value;
        } else {
            value = info.value;
        }
        return value;
    }

    return buttonMenu;

});
