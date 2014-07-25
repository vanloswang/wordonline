FUIToolbar.registerWidgetHandler('fontstyle', function(toolbar, editor, name){

    var option = $.extend({
            'className': 'wo-drop-panel wo-drop-panel-' + name
        }, FUIToolbar.WidgetConfig[name]),
        buttonsetOption = $.extend({
            'className': 'wo-' + name + '-buttonset'
        }, FUIToolbar.WidgetConfig[name + '-buttonset']);

    var dropPanel = new FUI.DropPanel(option);
    var buttonSet = new FUI.Buttonset(buttonsetOption);

    dropPanel.appendWidget(buttonSet);

    return dropPanel;

});
