(function(){

    var _FUIBlocks = {};
    var _FUIHandler = {};

    var FUIToolbar = window.FUIToolbar = {
        getToolbar: function(targetId, editor){
            return new Toolbar(targetId, editor);
        },
        registerBlock: function(blockName, fn, index, editorId){
            $.each(blockName.split(/\s+/), function (i, name) {
                _FUIBlocks[name] = {
                    id : editorId,
                    execFn:fn,
                    index:index
                };
            });
        },
        registerWidgetHandler: function(widgetName, fn){
            $.each(widgetName.split(/\s+/), function (i, name) {
                _FUIHandler[name] = fn;
            });
        }
    };

    var Toolbar = function (targetId, editor){
        this.targetId = targetId;
        this.editor = editor;

        this.$toolbar = null;
        this.$tabList = null;
        this.$tabContent = null;

        this.init();
    };

    Toolbar.prototype = {
        init: function(){
            this.initContainer();
            this.initTabs();
        },
        initContainer: function (){
            this.$toolbar = $('#' + this.targetId);
            this.$tabList = $('<div class="tab-list"></div>').appendTo(this.$toolbar);
            this.$tabContent = $('<div class="tab-content"></div>').appendTo(this.$toolbar);
        },
        /* 设置导航菜单 */
        initTabs: function (){

            /* 初始化文件菜单选项 */
            this.initFileTab();

            /* 初始化其他菜单选项 */
            this.tabwidget = FUI.Creator.parse(FUIToolbar.Config);
            this.tabwidget.appendButtonTo(this.$tabList[0]);
            this.tabwidget.appendPanelTo(this.$tabContent[0]);

            /* 分别初始化其他菜单事件 */
            this.initTabEvents();

        },
        /* 初始化 文件 tab */
        initFileTab: function (){
            /* 设置文件菜单按钮 */
            this.fileButton = new FUI.Button({
                label: "文件"
            });
            this.fileButton.appendTo(this.$tabList[0]);
        },
        /* 初始化 tab 事件 */
        initTabEvents: function (){
            var me = this;
            FUIToolbar.ConfigTraveller(function(node){

                var handler = _FUIHandler[node.clazz],
                    widget = FUI.widgets[node.id];
                if (handler && widget) {
                    handler.call(me, node, widget, me.editor);
                }
            });

        }
    };

})();