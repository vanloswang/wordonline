(function(){

    FUIToolbar.TabConfig = [
        {
            'name': 'edit',
            'title': '编辑',
            'blocks': ['history', 'clipboard', 'font', 'paragraph', 'style'],
            'panel': {
                'className': 'fui-tab-content'
            }
        }, {
            'name': 'edit',
            'title': '插入',
            'blocks': ['page', 'char', 'link', 'music', 'image', 'video', 'attachment', 'map', 'code', 'table', 'formula', 'comment'],
            'panel': {
                'className': 'fui-tab-content'
            }
        }, {
            'name': 'table',
            'title': '表格',
            'blocks': ['table', 'mergecells', 'cellinfo'],
            'panel': {
                'className': 'fui-tab-content'
            }
        }, {
            'name': 'view',
            'title': '视图',
            'blocks': ['editmode', 'directory', 'preview', 'print', 'search'],
            'panel': {
                'className': 'fui-tab-content'
            }
        }, {
            'name': 'tool',
            'title': '工具',
            'blocks': ['drafts', 'wordcount', 'import', 'export', 'coordination', 'share'],
            'panel': {
                'className': 'fui-tab-content'
            }
        }, {
            'name': 'help',
            'title': '帮助',
            'blocks': ['help', 'about'],
            'panel': {
                'className': 'fui-tab-content'
            }
        }
    ];

    FUIToolbar.BlockConfig = {

        /* 编辑相关块 */
        'history':{
            'buttons': [['undo', 'redo']],
            'option': {
                'break': true,
                'label': '历史记录'
            }
        },
        'clipboard':{
            'buttons': [
                ['copy', 'cut'],
                ['paste']
            ],
            'option': {
                'label': '剪贴板'
            }
        },
        'font':{
            'buttons': [
                ['fontfamily', 'removeformat', 'autotypeset', 'formatmatch'],
                ['fontsize', 'upsize', 'downsize', 'subscript', 'superscript',
                    'bold', 'italic', 'underline', 'strikethrough', 'forecolor', 'backcolor']
            ],
            'option': {
                'label': '字体',
                'break': true
            }
        },
        'paragraph':{
            'buttons': [
                ['justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', 'blockquote', 'paragraph'],
                ['unorderedlist', 'orderedlist', 'rowspacingtop', 'rowspacingbottom', 'lineheight']
            ],
            'option': {
                'label': '段落',
                'break': true
            }
        },
        'style':{
            'buttons': ['fontstyle'],
            'option': {
                'label': '样式'
            }
        },

        /* 插入相关块 */
        'page': {
            'buttons': [],
            'option': {
                'label': '页'
            }
        },
        'char': {
            'buttons': [],
            'option': {
                'label': '字符'
            }
        },
        'link': {
            'buttons': [['link'], ['unlink']],
            'option': {
                'label': '链接',
                'break': true
            }
        },
        'music': {
            'buttons': [['music']],
            'option': {
                'label': '音乐'
            }
        },
        'image': {
            'buttons': [
                ['insertimage'],
                ['emotion', 'scrawl', 'imageonline', 'imageupload', 'imagesearch']
            ],
            'option': {
                'label': '图片'
            }
        },
        'video': {
            'buttons': [],
            'option': {
                'label': '视频'
            }
        },
        'attachment': {
            'buttons': [],
            'option': {
                'label': '附件'
            }
        },
        'map': {
            'buttons': [],
            'option': {
                'label': '地图'
            }
        },
        'code': {
            'buttons': [],
            'option': {
                'label': '代码'
            }
        },
        'table': {
            'buttons': [],
            'option': {
                'label': '表格'
            }
        },
        'formula': {
            'buttons': [],
            'option': {
                'label': '公式'
            }
        },
        'comment': {
            'buttons': [],
            'option': {
                'label': '批注'
            }
        },

        /* 表格相关块 */
        'mergecells': {
            'buttons': [['inserttable']],
            'option': {
                'label': '合并单元格'
            }
        },
        'cellinfo': {
            'buttons': [],
            'option': {
                'label': '单元格'
            }
        },

        /* 视图相关块 */
        'editmode': {
            'buttons': ['visualmode', 'codemode'],
            'option': {
                'label': '编辑模式'
            }
        },
        'directory': {
            'buttons': [],
            'option': {
                'label': '目录'
            }
        },
        'preview': {
            'buttons': [],
            'option': {
                'label': '预览'
            }
        },
        'print': {
            'buttons': [],
            'option': {
                'label': '打印'
            }
        },
        'search': {
            'buttons': [],
            'option': {
                'label': '搜索'
            }
        },

        /* 工具相关块 */
        'drafts': {
            'buttons': [],
            'option': {
                'label': '草稿箱'
            }
        },
        'wordcount': {
            'buttons': [],
            'option': {
                'label': '字数统计'
            }
        },
        'import': {
            'buttons': [],
            'option': {
                'label': '导入'
            }
        },
        'export': {
            'buttons': [],
            'option': {
                'label': '导出'
            }
        },
        'coordination': {
            'buttons': [],
            'option': {
                'label': '协同'
            }
        },
        'share': {
            'buttons': [],
            'option': {
                'label': '分享'
            }
        },

        /* 帮助相关块 */
        'help': {
            'buttons': [],
            'option': {
                'label': '帮助'
            }
        },
        'about': {
            'buttons': [],
            'option': {
                'label': '关于'
            }
        }
    };

    FUIToolbar.WidgetConfig = {
        'undo': {
            'text': '撤销'
        }, 'redo': {
            'text': '恢复'
        }, 'copy': {
            'label': '复制',
            'text': '复制'
        }, 'cut': {
            'label': '剪切',
            'text': '剪切'
        }, 'paste': {
            'label': '粘贴',
            'text': '粘贴',
            'layout': 'bottom'
        }, 'removeformat': {
            'label': '清除格式',
            'text': '清除格式'
        }, 'autotypeset': {
            'label': '自动格式化',
            'text': '自动格式化'
        }, 'formatmatch': {
            'label': '格式刷',
            'text': '格式刷'
        }, 'upsize': {
            'text': '增大字体'
        }, 'downsize': {
            'text': '缩小字体'
        }, 'suberscript': {
            'text': '上标'
        }, 'superscript': {
            'text': '下标'
        }, 'bold': {
            'text': '加粗'
        }, 'italic': {
            'text': '倾斜'
        }, 'underline': {
            'text': '下划线'
        }, 'strikethrough': {
            'text': '删除线'
        }, 'colorpicker': {
            'clearText': '清除颜色',
            'commonText': '通用颜色',
            'standardText': '标准颜色',
            'resize': 'none'
        }, 'forecolor': {
            'text': '文字颜色',
            'icon': {
            },
            'layout': 'left'
        }, 'backcolor': {
            'text': '背景颜色',
            'icon': {
            },
            'layout': 'left'
        }, 'unorderedlist': {
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
        }, 'orderedlist': {
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
                'items': ['数字', '小写英文字母', '小写希腊字母', '大写英文字母', '大写希腊字母']
            }
        }, 'rowspacingtop': {
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
        }, 'rowspacingbottom': {
            'text': '段后距',
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
        }, 'lineheight': {
            'text': '行高',
            'buttons': [
                {
                    'className': 'fui-button-menu-button'
                },
                {
                    'className': 'fui-button-menu-down'
                }
            ],
            'menu': {
                'items': [1, 1.5, 1.75, 2, 3, 4, 5]
            }
        }, 'justifyleft': {
            'text': '引用'
        }, 'justifycenter': {
            'text': '引用'
        }, 'justifyright': {
            'text': '引用'
        }, 'justifyjustify': {
            'text': '引用'
        }, 'blockquote': {
            'text': '引用'
        }, 'fontfamily': {
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
        }, 'fontsize': {
            'text': '字号',
            'input': {
                'placeholder': '字号'
            },
            'menu': {
                'items': ['8px', '9px', '10px', '11px', '12px', '14px', '16px', '18px', '20px', '24px', '26px', '36px', '48px', '72px']
            }
        }, 'paragraph': {
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
        }, 'fontstyle': {
            'button': {
                'className': 'fui-drop-panel-down'
            },
            'content': {
                'width': 397,
                'height': 317,
                'margin': 0,
                'padding': 0
            },
            'padding': 0
        }, 'fontstyle-buttonset': {
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
        },

        /* 插入相关 */
        'link': {
            'text': '添加链接',
            'label': '添加链接'
        },
        'unlink': {
            'text': '取消链接',
            'label': '取消链接'
        },
        'music': {
            'text': '插入音乐',
            'label': '插入音乐',
            'layout': 'bottom'
        },

        /* 表格相关 */
        'inserttable': {
            'button': {
                'text': '插入表格',
                'label': '插入表格',
                'layout': 'bottom'
            }
        }
    };

})();