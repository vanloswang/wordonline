(function(){

    /* 设置 tab 标题 */
    FUIToolbar.Config.buttons.push({
        'className': 'wo-tabs-btn',
        'label': '表格'
    });

    /* 设置 tab 内容 */
    FUIToolbar.Config.panels.push({
        'className': 'fui-tab-content fui-tab-content-table',
        'widgets': [{
            'clazz': 'LabelPanel',
            'id': 'blocktable',
            'className': 'wo-block wo-blocktable',
            'layout': 'top',
            'label': '表格',
            'widgets': [{
                'clazz': 'Panel',
                'widgets': [{
                    'clazz': 'TablePicker',
                    'id': 'inserttable2',
                    '_cmd': 'inserttable',
                    'button': {
                        'className': 'wo-btn wo-btn-inserttable',
                        'text': '插入表格',
                        'label': '插入表格',
                        'layout': 'bottom'
                    }
                }, {
                    'clazz': 'Button',
                    'id': 'deletetable',
                    'className': 'wo-btn wo-btn-deletetable',
                    'text': '删除表格',
                    'label': '删除表格',
                    'layout': 'bottom'
                }]
            }, {
                'clazz': 'Panel',
                'break': true,
                'widgets': [{
                    'clazz': 'Panel',
                    'widgets': [{
                        'clazz': 'Button',
                        'id': 'insertrow',
                        'className': 'wo-btn wo-btn-insertrow',
                        'text': '插入行'
                    }, {
                        'clazz': 'Button',
                        'id': 'insertcol',
                        'className': 'wo-btn wo-btn-insertcol',
                        'text': '插入列'
                    }]
                }, {
                    'clazz': 'Panel',
                    'widgets': [{
                        'clazz': 'Button',
                        'id': 'deleterow',
                        'className': 'wo-btn wo-btn-deleterow',
                        'text': '删除行'
                    }, {
                        'clazz': 'Button',
                        'id': 'deletecol',
                        'className': 'wo-btn wo-btn-deletecol',
                        'text': '删除列'
                    }]
                }]
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockmergecells',
            'className': 'wo-block wo-blockmergecells',
            'layout': 'top',
            'label': '合并单元格',
            'break': 'true',
            'widgets': [{
                'clazz': 'Panel',
                'widgets': [{
                    'clazz': 'Button',
                    'id': 'mergecells',
                    'className': 'wo-btn wo-btn-mergecells',
                    'text': '合并单元格'
                }, {
                    'clazz': 'Button',
                    'id': 'mergedown',
                    'className': 'wo-btn wo-btn-mergedown',
                    'text': '向下合并单元格'
                }, {
                    'clazz': 'Button',
                    'id': 'mergeright',
                    'className': 'wo-btn wo-btn-mergeright',
                    'text': '向右合并单元格'
                }]
            }, {
                'clazz': 'Panel',
                'widgets': [{
                    'clazz': 'Button',
                    'id': 'splittocells',
                    'className': 'wo-btn wo-btn-splittocells',
                    'text': '拆分单元格'
                }, {
                    'clazz': 'Button',
                    'id': 'splittocols',
                    'className': 'wo-btn wo-btn-splittocols',
                    'text': '单元格拆分成列'
                }, {
                    'clazz': 'Button',
                    'id': 'splittorows',
                    'className': 'wo-btn wo-btn-splittorows',
                    'text': '单元格拆分成行'
                }]
            }]
        }/*, {
            'clazz': 'LabelPanel',
            'id': 'blockcellinfo',
            'className': 'wo-block wo-blockcellinfo',
            'layout': 'top',
            'label': '单元格'
        }*/]
    });

})();
