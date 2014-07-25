(function(){

    /* 设置 tab 标题 */
    FUIToolbar.Config.buttons.push({
        'className': 'wo-tabs-btn',
        'label': '视图'
    });

    /* 设置 tab 内容 */
    FUIToolbar.Config.panels.push({
        'className': 'fui-tab-content fui-tab-content-edit',
        'widgets': [{
            'clazz': 'LabelPanel',
            'id': 'blockeditmode',
            'className': 'wo-block wo-blockeditmode',
            'layout': 'top',
            'label': '编辑模式',
            'widgets': [{
                'clazz': 'Button',
                'id': 'source',
                'className': 'wo-btn wo-btn-source',
                'text': '源码模式',
                'label': '源码模式',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockdirectory',
            'className': 'wo-block wo-blockdirectory',
            'layout': 'top',
            'label': '目录',
            'widgets': [{
                'clazz': 'Button',
                'id': 'directory',
                'className': 'wo-btn wo-btn-directory',
                'text': '显示目录',
                'label': '显示目录',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blocksearch',
            'className': 'wo-block wo-blocksearch',
            'layout': 'top',
            'label': '批注',
            'widgets': [{
                'clazz': 'Button',
                'id': 'showcomment',
                'className': 'wo-btn wo-btn-showcomment',
                'text': '显示批注',
                'label': '显示批注',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockpreview',
            'className': 'wo-block wo-blockpreview',
            'layout': 'top',
            'label': '预览',
            'widgets': [{
                'clazz': 'Button',
                'id': 'preview',
                'className': 'wo-btn wo-btn-preview',
                'text': '预览文档',
                'label': '预览文档',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockprint',
            'className': 'wo-block wo-blockprint',
            'layout': 'top',
            'label': '打印',
            'widgets': [{
                'clazz': 'Button',
                'id': 'print',
                'className': 'wo-btn wo-btn-print',
                'text': '打印文档',
                'label': '打印文档',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blocksearch',
            'className': 'wo-block wo-blocksearch',
            'layout': 'top',
            'label': '搜索',
            'widgets': [{
                'clazz': 'Button',
                'id': 'search',
                'className': 'wo-btn wo-btn-search',
                'text': '查找替换',
                'label': '查找替换',
                'layout': 'bottom'
            }]
        }]
    });

})();
