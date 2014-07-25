(function(){

    /* 设置 tab 标题 */
    FUIToolbar.Config.buttons.push({
        'className': 'wo-tabs-btn',
        'label': '帮助'
    });

    /* 设置 tab 内容 */
    FUIToolbar.Config.panels.push({
        'className': 'fui-tab-content fui-tab-content-edit',
        'widgets': [{
            'clazz': 'LabelPanel',
            'label': '帮助',
            'id': 'blockhelp',
            'className': 'wo-block wo-block-help',
            'layout': 'top',
            'widgets': [{
                'clazz': 'Button',
                'id': 'interduction',
                'className': 'wo-btn wo-btn-interduction',
                'layout': 'bottom',
                'text': '使用说明',
                'label': '使用说明'
            }, {
                'clazz': 'Button',
                'id': 'shortcutkey',
                'className': 'wo-btn wo-btn-shortcutkey',
                'layout': 'bottom',
                'text': '快捷键说明',
                'label': '快捷键说明'
            }]
        }, {
            'clazz': 'LabelPanel',
            'label': '关于',
            'id': 'blockabout',
            'className': 'wo-block wo-block-about',
            'layout': 'top',
            'break': true,
            'widgets': [{
                'clazz': 'Button',
                'id': 'aboutus',
                'className': 'wo-btn wo-btn-aboutus',
                'layout': 'bottom',
                'text': '关于我们',
                'label': '关于我们'
            }]
        }]
    });

})();
