(function(){

    var EditorExtend = {
        setWkContent: function(bdjson){
            var me = this, output, root, html;

            me.fireEvent('beforesetwkcontent', bdjson );

            //解析bdjson
            output = UE.parseDoc( bdjson);
            root = output.node;
            //应用文档输出规则
            me.filterWkInputRule(root);
            html = root.toHtml();
            me.setContent(html);

            me.fireEvent('aftersetwkcontent', html);
        },
        /**
         * 添加文档输入过滤
         * @param rule
         */
        addWkInputRule: function (rule) {
            if (this.outputRules === undefined) {
                this.outputRules = [];
            }
            this.wkInputRules.push(rule);
        },
        /**
         * 执行文档输入过滤
         * @param root
         */
        filterWkInputRule: function (root) {
            if (this.wkInputRules) {
                for (var i = 0, ci; ci = this.wkInputRules[i++];) {
                    ci.call(this, root)
                }
            }
        }
    };

    UE.utils.extend(UE.Editor.prototype, EditorExtend);

})();