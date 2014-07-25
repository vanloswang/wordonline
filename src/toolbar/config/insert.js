(function(){

    /* 设置 tab 标题 */
    FUIToolbar.Config.buttons.push({
        'className': 'wo-tabs-btn',
        'label': '插入'
    });

    /* 设置 tab 内容 */
    FUIToolbar.Config.panels.push({
        'className': 'fui-tab-content fui-tab-content-insert',
        'widgets': [{
            'clazz': 'LabelPanel',
            'id': 'blockpage',
            'className': 'wo-block wo-blockpage',
            'layout': 'top',
            'label': '页',
            'widgets': [{
                'clazz': 'Button',
                'id': 'horizontal',
                'className': 'wo-btn wo-btn-horizontal',
                'text': '分页符',
                'label': '分页符',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockchar',
            'className': 'wo-block wo-blockchar',
            'layout': 'top',
            'label': '字符',
            'widgets': [{
                'clazz': 'Button',
                'id': 'spechars',
                'className': 'wo-btn wo-btn-spechars',
                'text': '字符',
                'label': '字符',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blocklink',
            'className': 'wo-block wo-blocklink',
            'layout': 'top',
            'label': '链接',
            'break': true,
            'widgets': [{
                'clazz': 'Button',
                'id': 'insertlink',
                'className': 'wo-btn wo-btn-insertlink',
                'text': '添加链接',
                'label': '添加链接'
            }, {
                'clazz': 'Button',
                'id': 'unlink',
                'className': 'wo-btn wo-btn-unlink',
                'text': '取消链接',
                'label': '取消链接'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockimage',
            'className': 'wo-block wo-blockimage',
            'layout': 'top',
            'label': '图片',
            'widgets': [{
                'clazz': 'Button',
                'id': 'insertimage',
                'className': 'wo-btn wo-btn-insertimage',
                'text': '图片',
                'label': '图片',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockmusic',
            'className': 'wo-block wo-blockmusic',
            'layout': 'top',
            'label': '音乐',
            'widgets': [{
                'clazz': 'Button',
                'id': 'insertmusic',
                'className': 'wo-btn wo-btn-insertmusic',
                'text': '音乐',
                'label': '音乐',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockvideo',
            'className': 'wo-block wo-blockvideo',
            'layout': 'top',
            'label': '视频',
            'widgets': [{
                'clazz': 'Button',
                'id': 'insertvideo',
                'className': 'wo-btn wo-btn-insertvideo',
                'text': '视频',
                'label': '视频',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockattachment',
            'className': 'wo-block wo-blockattachment',
            'layout': 'top',
            'label': '附件',
            'widgets': [{
                'clazz': 'Button',
                'id': 'attachment',
                'className': 'wo-btn wo-btn-attachment',
                'text': '附件',
                'label': '附件',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockmap',
            'className': 'wo-block wo-blockmap',
            'layout': 'top',
            'label': '地图',
            'break': true,
            'widgets': [{
                'clazz': 'Button',
                'id': 'staticmap',
                'className': 'wo-btn wo-btn-staticmap',
                'text': '静态地图',
                'label': '静态地图'
            }, {
                'clazz': 'Button',
                'id': 'activemap',
                'className': 'wo-btn wo-btn-activemap',
                'text': '动态地图',
                'label': '动态地图'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockcode',
            'className': 'wo-block wo-blockcode',
            'layout': 'top',
            'label': '代码',
            'widgets': [{
                'clazz': 'Button',
                'id': 'insertcode',
                'className': 'wo-btn wo-btn-insertcode',
                'text': '代码',
                'label': '代码',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blocktable',
            'className': 'wo-block wo-blocktable',
            'layout': 'top',
            'label': '表格',
            'widgets': [{
                'clazz': 'TablePicker',
                'id': 'inserttable1',
                'button': {
                    'className': 'wo-btn wo-btn-inserttable',
                    'text': '表格',
                    'label': '表格',
                    'layout': 'bottom'
                }
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockformula',
            'className': 'wo-block wo-blockformula',
            'layout': 'top',
            'label': '公式',
            'widgets': [{
                'clazz': 'Button',
                'id': 'inserttable',
                'className': 'wo-btn wo-btn-insertformula',
                'text': '公式',
                'label': '公式',
                'layout': 'bottom'
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockcomment',
            'className': 'wo-block wo-blockcomment',
            'layout': 'top',
            'label': '批注',
            'widgets': [{
                'clazz': 'Button',
                'id': 'insertcomment',
                'className': 'wo-btn wo-btn-insertcomment',
                'text': '批注',
                'label': '批注',
                'layout': 'bottom'
            }]
        }]
    });

})();
