FUIToolbar.registerBlock('history clipboard font paragraph style' +
    ' page char link music image video attachment map code table formula comment' +
    ' editmode directory preview print search' +
    ' table mergecells cellinfo' +
    ' drafts wordcount import export coordination share' +
    ' help about', function(toolbar, editor, name){

    var config = FUIToolbar.BlockConfig[name],
        buttons = config['buttons'],
        option = $.extend({
                'className': 'wo-block wo-block-' + name,
                'layout': 'top'
            }, config['option']);

    var block = new FUI.LabelPanel(option);

    var i, j, line, item, itemUI, panel;
    for (i = 0; line = buttons[i]; i++) {
        if ($.isArray(line)) {
            panel = new FUI.Panel({
                'className': 'wo-line wo-line-' + (i + 1)
            });
            for (j = 0; item = line[j]; j++) {
                itemUI = FUIToolbar.getRisteredWidgetUI(toolbar, editor, item);
                if (itemUI) {
                    panel.appendWidget(itemUI);
                    block.appendWidget(panel);
                }
            }
        } else {
            itemUI = FUIToolbar.getRisteredWidgetUI(toolbar, editor, line);
            if (itemUI) {
                block.appendWidget(itemUI);
            }
        }
    }

    return block;

});