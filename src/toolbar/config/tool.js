(function(){

    /* 设置 tab 标题 */
    FUIToolbar.Config.buttons.push({
        'className': 'wo-tabs-btn',
        'label': '工具'
    });

    /* 设置 tab 内容 */
    FUIToolbar.Config.panels.push({
        'className': 'fui-tab-content fui-tab-content-edit',
        'widgets': [{
            'clazz': 'LabelPanel',
            'id': 'blockdrafts',
            'className': 'wo-block wo-blockdrafts',
            'layout': 'top',
            'label': '草稿箱',
            'widgets': [{
                'clazz': 'Button',
                'id': 'drafts1',
                'className': 'wo-btn wo-btn-drafts',
                'text': '草稿箱',
                'label': '草稿箱',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockwordcount',
            'className': 'wo-block wo-blockwordcount',
            'layout': 'top',
            'label': '字数统计',
            'widgets': [{
                'clazz': 'Button',
                'id': 'wordcount',
                'className': 'wo-btn wo-btn-wordcount',
                'text': '字数统计',
                'label': '字数统计',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockimport',
            'className': 'wo-block wo-blockimport',
            'layout': 'top',
            'label': '导入',
            'widgets': [{
                'clazz': 'Button',
                'id': 'importword',
                'className': 'wo-btn wo-btn-importword',
                'text': '导入word',
                'label': '导入word',
                'layout': 'bottom'
            }, {
                'clazz': 'Button',
                'id': 'importtxt',
                'className': 'wo-btn wo-btn-importtxt',
                'text': '导入txt',
                'label': '导入txt',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockexport',
            'className': 'wo-block wo-blockexport',
            'layout': 'top',
            'label': '导出',
            'widgets': [{
                'clazz': 'Button',
                'id': 'exportword',
                'className': 'wo-btn wo-btn-exportword',
                'text': '导出word',
                'label': '导出word',
                'layout': 'bottom'
            }, {
                'clazz': 'Button',
                'id': 'exportpdf',
                'className': 'wo-btn wo-btn-exportpdf',
                'text': '导出pdf',
                'label': '导出pdf',
                'layout': 'bottom'
            }, {
                'clazz': 'Button',
                'id': 'exporttxt',
                'className': 'wo-btn wo-btn-exporttxt',
                'text': '导出txt',
                'label': '导出txt',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockcoordination',
            'className': 'wo-block wo-blockcoordination',
            'layout': 'top',
            'label': '协同',
            'widgets': [{
                'clazz': 'Button',
                'id': 'coordination',
                'className': 'wo-btn wo-btn-coordination',
                'text': '共享给好友',
                'label': '共享给好友',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockshare',
            'className': 'wo-block wo-blockshare',
            'layout': 'top',
            'label': '分享',
            'widgets': [{
                'clazz': 'Button',
                'id': 'share',
                'className': 'wo-btn wo-btn-share',
                'text': '分享',
                'label': '分享',
                'layout': 'bottom'
            }]
        }]
    });

})();
