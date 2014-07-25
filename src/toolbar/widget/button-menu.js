FUIToolbar.registerWidgetHandler('unorderedlist orderedlist rowspacingtop rowspacingbottom lineheight', function(toolbar, editor, name){

    var option = $.extend({
        'className': 'wo-' + name
    }, FUIToolbar.WidgetConfig[name]);

    var buttonMenu = new FUI.ButtonMenu(option);

    return buttonMenu;

});
