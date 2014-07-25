(function(){

    var fontfamily = {
            'clazz': 'InputMenu',
            'id': 'fontfamily',
            'className': 'wo-input-menu-fontfamily',
            'text': '字体格式',
            'input': {
                'placeholder': '字体格式'
            },
            'menu': {
                'items': [
                    {
                        'className': 'ext-songti',
                        'label': '宋体',
                        'value': '宋体1'
                    },
                    {
                        'className': 'ext-songti',
                        'label': '宋体',
                        'value': '宋体'
                    },
                    {
                        'className': 'ext-yahei',
                        'label': '微软雅黑',
                        'value': '微软雅黑'
                    },
                    {
                        'className': 'ext-kaiti',
                        'label': '楷体',
                        'value': '楷体'
                    },
                    {
                        'className': 'ext-calibri-light',
                        'label': 'Calibri Light',
                        'value': 'Calibri Light'
                    },
                    {
                        'className': 'ext-arial',
                        'label': 'Arial',
                        'value': 'Arial'
                    },
                    {
                        'className': 'ext-symbol',
                        'label': 'Symbol',
                        'value': 'Symbol'
                    },
                    {
                        'className': 'ext-times',
                        'label': 'Times',
                        'value': 'Times'
                    },
                    {
                        'className': 'ext-times-new-roman',
                        'label': 'Times New Roman',
                        'value': 'Times New Roman'
                    }
                ]
            }
        },
        fontsize = {
            'clazz': 'InputMenu',
            'id': 'fontsize',
            'className': 'wo-input-menu-fontsize',
            'text': '字号',
            'input': {
                'placeholder': '字号'
            },
            'menu': {
                'items': ['8px', '9px', '10px', '11px', '12px', '14px', '16px', '18px', '20px', '24px', '26px', '36px', '48px', '72px']
            }
        },
        paragraph = {
            'clazz': 'InputMenu',
            'id': 'paragraph',
            'className': 'wo-input-menu-paragraph',
            'text': '段落格式',
            'input': {
                'placeholder': '段落格式'
            },
            'menu': {
                'items': [
                    {
                        'className': 'ext-p',
                        'label': '段落',
                        'value': 'p'
                    },
                    {
                        'className': 'ext-blockquote',
                        'label': '引用',
                        'value': 'blockquote'
                    },
                    {
                        'className': 'ext-h1',
                        'label': '标题1',
                        'value': 'h1'
                    },
                    {
                        'className': 'ext-h2',
                        'label': '标题2',
                        'value': 'h2'
                    },
                    {
                        'className': 'ext-h3',
                        'label': '标题3',
                        'value': 'h3'
                    },
                    {
                        'className': 'ext-h4',
                        'label': '标题4',
                        'value': 'h4'
                    },
                    {
                        'className': 'ext-h5',
                        'label': '标题5',
                        'value': 'h5'
                    },
                    {
                        'className': 'ext-h6',
                        'label': '标题6',
                        'value': 'h6'
                    }
                ]
            }
        },
        fontstyle = {
            'clazz': 'DropPanel',
            'id': 'fontstyle',
            'className': 'wo-drop-panel wo-drop-panel-fontstyle',
            'button': {
                'className': 'fui-drop-panel-down'
            },
            'content': {
            },
            'widgets': [{
                'clazz': 'Buttonset',
                'id': 'fontstyle-selector',
                'selected': 2,
                'buttons': [
                    {
                        'text': '标准',
                        'pressed': true,
                        'icon': 'assets/images/fontstyle/style_01.png'
                    },
                    {
                        'text': '无间隔',
                        'icon': 'assets/images/fontstyle/style_02.png'
                    },
                    {
                        'text': '标题1',
                        'icon': 'assets/images/fontstyle/style_03.png'
                    },
                    {
                        'text': '标题2',
                        'icon': 'assets/images/fontstyle/style_04.png'
                    },
                    {
                        'text': '标题3',
                        'icon': 'assets/images/fontstyle/style_05.png'
                    },
                    {
                        'text': '标题4',
                        'icon': 'assets/images/fontstyle/style_06.png'
                    },
                    {
                        'text': '标题5',
                        'icon': 'assets/images/fontstyle/style_07.png'
                    },
                    {
                        'text': '标题6',
                        'icon': 'assets/images/fontstyle/style_08.png'
                    },
                    {
                        'text': '标题7',
                        'icon': 'assets/images/fontstyle/style_09.png'
                    },
                    {
                        'text': '标题8',
                        'icon': 'assets/images/fontstyle/style_10.png'
                    },
                    {
                        'text': '标题9',
                        'icon': 'assets/images/fontstyle/style_11.png'
                    },
                    {
                        'text': '标题',
                        'icon': 'assets/images/fontstyle/style_12.png'
                    },
                    {
                        'text': '副标题',
                        'icon': 'assets/images/fontstyle/style_13.png'
                    },
                    {
                        'text': '不明显强调',
                        'icon': 'assets/images/fontstyle/style_14.png'
                    },
                    {
                        'text': '强调',
                        'icon': 'assets/images/fontstyle/style_15.png'
                    },
                    {
                        'text': '明显强调',
                        'icon': 'assets/images/fontstyle/style_16.png'
                    },
                    {
                        'text': '书籍标题',
                        'icon': 'assets/images/fontstyle/style_17.png'
                    },
                    {
                        'text': '列出段落',
                        'icon': 'assets/images/fontstyle/style_18.png'
                    },
                    {
                        'text': 'caption',
                        'icon': 'assets/images/fontstyle/style_19.png'
                    },
                    {
                        'text': 'toc1',
                        'icon': 'assets/images/fontstyle/style_20.png'
                    },
                    {
                        'text': 'toc2',
                        'icon': 'assets/images/fontstyle/style_21.png'
                    },
                    {
                        'text': 'toc3',
                        'icon': 'assets/images/fontstyle/style_22.png'
                    },
                    {
                        'text': 'TOC Heading',
                        'icon': 'assets/images/fontstyle/style_23.png'
                    }
                ]
            }]
        },
        unorderedlist = {
            'clazz': 'ButtonMenu',
            'id': 'unorderedlist',
            'className': 'wo-btnmenu-unorderedlist',
            'text': '编号',
            'buttons': [
                {
                    'className': 'fui-button-menu-button'
                },
                {
                    'className': 'fui-button-menu-down'
                }
            ],
            'menu': {
                'items': [ '圆点', '实心点', '方框' ]
            }
        },
        orderedlist = {
            'clazz': 'ButtonMenu',
            'id': 'orderedlist',
            'className': 'wo-btnmenu-orderedlist',
            'text': '编号',
            'buttons': [
                {
                    'className': 'fui-button-menu-button'
                },
                {
                    'className': 'fui-button-menu-down'
                }
            ],
            'menu': {
                'items': [{
                    'className': 'bw-paragraph-ol-decimal',
                    'label': '1., 2., 3., 4.,'
                }, {
                    'className': 'bw-paragraph-ul-lower-alpha',
                    'label': 'a., b., c., d.,'
                }, {
                    'className': 'bw-paragraph-ul-lower-roman',
                    'label': 'i., ii., iii., iv.,'
                }, {
                    'className': 'bw-paragraph-ul-upper-alpha',
                    'label': 'A., B., C., D.,'
                }, {
                    'className': 'bw-paragraph-ul-upper-roman',
                    'label': 'I., II., III., IV.,'
                }]
            }
        },
        rowspacingtop = {
            'clazz': 'ButtonMenu',
            'id': 'rowspacingtop',
            'className': 'wo-btnmenu-rowspacingtop',
            'text': '段前距',
            'buttons': [
                {
                    'className': 'fui-button-menu-button'
                },
                {
                    'className': 'fui-button-menu-down'
                }
            ],
            'menu': {
                'items': [5, 10, 15, 20, 25]
            }
        },
        rowspacingbottom = {
            'clazz': 'ButtonMenu',
            'id': 'rowspacingbottom',
            'className': 'wo-btnmenu-rowspacingbottom',
            'text': '段后距',
            'buttons': [{
                'className': 'fui-button-menu-button'
            }, {
                'className': 'fui-button-menu-down'
            }],
            'menu': {
                'items': [5, 10, 15, 20, 25]
            }
        },
        lineheight = {
            'clazz': 'ButtonMenu',
            'id': 'lineheight',
            'className': 'wo-btnmenu-lineheight',
            'text': '行高',
            'buttons': [{
                'className': 'fui-button-menu-button'
            }, {
                'className': 'fui-button-menu-down'
            }],
            'menu': {
                'items': [1, 1.5, 1.75, 2, 3, 4, 5]
            }
        };

    /* 设置 tab 标题 */
    FUIToolbar.Config.buttons.push({
        'className': 'wo-tabs-btn',
        'label': '编辑'
    });

    /* 设置 tab 内容 */
    FUIToolbar.Config.panels.push({
        'className': 'fui-tab-content fui-tab-content-edit',
        'widgets': [{
            'clazz': 'LabelPanel',
            'id': 'blockhistory',
            'className': 'wo-block wo-blockhistory',
            'label': '历史记录',
            'layout': 'top',
            'widgets': [{
                'clazz': 'Panel',
                'className': 'wo-line',
                'widgets': [{
                    'clazz': 'Button',
                    'id': 'undo',
                    'className': 'wo-btn wo-btn-undo',
                    'text': '撤销',
                    'label': '撤销'
                }, {
                    'clazz': 'Button',
                    'id': 'redo',
                    'className': 'wo-btn wo-btn-redo',
                    'text': '恢复',
                    'label': '恢复'
                }]
            }, {
                'clazz': 'Panel',
                'className': 'wo-line',
                'widgets': [{
                    'clazz': 'Button',
                    'id': 'drafts1',
                    'className': 'wo-btn wo-btn-drafts',
                    'text': '草稿箱',
                    'label': '草稿箱',
                    'layout': 'bottom'
                }]
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockclipboard',
            'className': 'wo-block wo-blockclipboard',
            'label': '剪贴板',
            'layout': 'top',
            'widgets': [{
                'clazz': 'Panel',
                'className': 'wo-line',
                'break': true,
                'widgets': [{
                    'clazz': 'Button',
                    'id': 'copy',
                    'className': 'wo-btn wo-btn-copy',
                    'text': '复制',
                    'label': '复制'
                }, {
                    'clazz': 'Button',
                    'id': 'cut',
                    'className': 'wo-btn wo-btn-cut',
                    'text': '剪切',
                    'label': '剪切'
                }]
            }, {
                'clazz': 'Panel',
                'className': 'wo-line',
                'widgets': [{
                    'clazz': 'Button',
                    'id': 'paste',
                    'className': 'wo-btn wo-btn-paste',
                    'text': '粘贴',
                    'label': '粘贴',
                    'layout': 'bottom'
                }]
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockfont',
            'className': 'wo-block wo-blockfont',
            'label': '字体',
            'layout': 'top',
            'break': true,
            'widgets': [{
                'clazz': 'Panel',
                'className': 'wo-line wo-line-1',
                'widgets': [fontfamily, {
                    'clazz': 'Button',
                    'id': 'removeformat',
                    'className': 'wo-btn wo-btn-removeformat',
                    'label': '清除格式',
                    'text': '清除格式'
                }, {
                    'clazz': 'Button',
                    'id': 'autotypeset',
                    'className': 'wo-btn wo-btn-autotypeset',
                    'label': '自动格式化',
                    'text': '自动格式化'
                }, {
                    'clazz': 'Button',
                    'id': 'formatmatch',
                    'className': 'wo-btn wo-btn-formatmatch',
                    'label': '格式刷',
                    'text': '格式刷'
                }]
            }, {
                'clazz': 'Panel',
                'className': 'wo-line wo-line-2',
                'widgets': [fontsize,{
                    'clazz': 'Button',
                    'id': 'upsize',
                    'className': 'wo-btn wo-btn-upsize',
                    'text': '增大字体'
                }, {
                    'clazz': 'Button',
                    'id': 'downsize',
                    'className': 'wo-btn wo-btn-downsize',
                    'text': '缩小字体'
                }, {
                    'clazz': 'Button',
                    'id': 'subscript',
                    'className': 'wo-btn wo-btn-subscript',
                    'text': '上标'
                }, {
                    'clazz': 'Button',
                    'id': 'superscript',
                    'className': 'wo-btn wo-btn-superscript',
                    'text': '下标'
                }, {
                    'clazz': 'Button',
                    'id': 'bold',
                    'className': 'wo-btn wo-btn-bold',
                    'text': '加粗'
                }, {
                    'clazz': 'Button',
                    'id': 'italic',
                    'className': 'wo-btn wo-btn-italic',
                    'text': '倾斜'
                }, {
                    'clazz': 'Button',
                    'id': 'underline',
                    'className': 'wo-btn wo-btn-underline',
                    'text': '下划线'
                }, {
                    'clazz': 'Button',
                    'id': 'strikethrough',
                    'className': 'wo-btn wo-btn-strikethrough',
                    'text': '删除线'
                }]
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockparagraph',
            'className': 'wo-block wo-blockparagraph',
            'label': '段落',
            'layout': 'top',
            'break': true,
            'widgets': [{
                'clazz': 'Panel',
                'className': 'wo-line wo-line-1',
                'widgets': [{
                    'clazz': 'Button',
                    'id': 'justifyleft',
                    'className': 'wo-btn wo-btn-justifyleft',
                    'text': '向左对齐'
                }, {
                    'clazz': 'Button',
                    'id': 'justifycenter',
                    'className': 'wo-btn wo-btn-justifycenter',
                    'text': '居中对齐'
                }, {
                    'clazz': 'Button',
                    'id': 'justifyright',
                    'text': '向右对齐'
                }, {
                    'clazz': 'Button',
                    'id': 'justifyjustify',
                    'className': 'wo-btn wo-btn-justifyjustify',
                    'text': '两端对齐'
                }, {
                    'clazz': 'Button',
                    'id': 'blockquote',
                    'className': 'wo-btn wo-btn-blockquote',
                    'text': '引用'
                }, paragraph]
            }, {
                'clazz': 'Panel',
                'className': 'wo-line wo-line-2',
                'widgets': [
                    unorderedlist,
                    orderedlist,
                    rowspacingtop,
                    rowspacingbottom,
                    lineheight
                ]
            }]
        }, {
            'clazz': 'LabelPanel',
            'id': 'blockstyle',
            'className': 'wo-block wo-blockstyle',
            'label': '样式',
            'layout': 'top',
            'widgets': [fontstyle]
        }]
    });

})();
