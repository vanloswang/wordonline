FUIToolbar.registerWidgetHandler('TablePicker', function(option, widget, editor){

    var name = option._cmd || option.id;

    widget.on('pickerselect', function(type, info){
        editor.execCommand('inserttable', {
            'border': 1,
            'numCols': info.col,
            'numRows': info.row,
            'tdvalign': 'top'
        });

    });

    editor.on('selectionchange', function (){
        var state = editor.queryCommandState(name);
        widget[state == -1 ? 'disable':'enable']();
    });

    return widget;

});
