// 这里写过文档解析的过滤规则
UE.plugins['docparserfilters'] = function (){
    var me = this,
        utils = UE.utils,
        inputFilters = [];

    function keys(o) {
        var a = [];
        utils.each(o, function(v, k){
            a.push(k);
        });
        return a;
    }

    function addinputFilters(fn) {
        inputFilters.push(fn);
    }

    // 清除 styleName 的 style 属性
    me.addInputRule(function(root){
        root.traversal(function (node) {
            utils.each(inputFilters, function (filter, k){
                if (node.parentNode) {
                    return filter.call(me, node);
                }
            });
        });
    });

    // 处理 h1-h6
    addinputFilters(function(node){
        var style;
        if (node.type == 'element' && (style = node.getAttr('style')) &&'h1;h2;h3;h4;h5;h6;h7;'.indexOf(node.tagName + ';') != -1) {
            removeParaSizeStyle(node);
            node.traversal(function (child) {
                removeParaSizeStyle(child);
            });
        }

        function removeParaSizeStyle(node){
            var style = node.getAttr('style');
            if (node.type == 'element' && style) {
                style = style.replace(/font-size:[^;]*;/g, ''). //font-size
                    replace(/font-weight:[^;]*;/g, ''). //font-weight
                    replace(/margin(-[\w]+)?:[^;]*;/g, ''). //margin
                    replace(/padding(-[\w]+)?:[^;]*;/g, ''). //padding
                    replace(/line-height:[^;]*;/g, ''); //line-height
                node.setAttr('style', style);
            }
        }
    });

    // p 标签根据 style 里的 styleName 转换为 引用段落
    addinputFilters(function (node) {
        if (node.type == 'element' && node.tagName == 'p') {
            var style;
            if ((style = node.getAttr('style')) && style.match(/styleName:[^;]*quote;[^;]*;/i)) {
                node.tagName = 'blockquote';
            }
        }
    });

    // 处理段落 p
    addinputFilters(function(node){

        var style;
        if (node.type == 'element' && (style = node.getAttr('style'))) {

            // 清除 text-align:left;
            style = utils.trim(style.replace(/text-align:[\s]*left;/g, ''));

            // 清除 font-size:14px
            style = utils.trim(style.replace(/font-size:[\s]*14px;/g, ''));
            node.setAttr('style', style);
        }

    });

    // 清除空的和无属性的 span 标签
    addinputFilters(function(node){

        if (node.type == 'element' && node.tagName == 'span') {

            // 清除空的 span
            if (node.children.length == 0) {
                node.parentNode.removeChild(node);
            }

            // 清除无属性的 span 标签
            if (node.parentNode && keys(node.attrs).length == 0 && !node.getData()) {
                while (node.children[0] !== undefined) {
                    node.parentNode.insertBefore(node.children[0], node);
                }
                node.parentNode.removeChild(node);
            }
        }

    });

    // 合并相同属性的 span 标签
    addinputFilters(function (node) {

        if (node.type == 'element' && node.tagName == 'span') {
            var isSame, next;
            while (next = node.nextSibling()) {
                if (next && next.type == 'element' && next.tagName == node.tagName) {
                    if (keys(node.attrs).length == keys(next.attrs).length) {
                        isSame = true;
                        utils.each(node.attrs, function(v, i){
                            if (next.attrs[i] !== undefined && next.attrs[i] != v) {
                                isSame = false;
                                return false;
                            }
                        });
                    } else {
                        isSame = false;
                    }

                    if (isSame) {
                        while (next.children[0] !== undefined) {
                            node.appendChild(next.children[0]);
                        }
                        next.parentNode.removeChild(next);
                        continue;
                    }
                }
                break;
            }
        }

    });

    // 根据样式转换内联标签
    addinputFilters(function (node) {

        var style, tagName;
        if (node.type == 'element' && node.tagName == 'span' && (style = node.getAttr('style'))) {
            // valign:sup; 或 valign:sub; 转换为 sup 或 sub 标签
            style = utils.trim(style.replace(/valign:[\s]*(sup|sub);/g, function (str, type) {
                tagName = type;
                return '';
            }));
            if (tagName) {
                style = style.replace(/font-size:[\s]*[\d]+px;/g, '');
            }

            // font-style:italic; 转换为 em 标签
            style = utils.trim(style.replace(/font-style:[\s]*italic;/g, function (str) {
                tagName = 'em';
                return '';
            }));

            // font-weight:700; 转换为 strong 标签
            style = utils.trim(style.replace(/font-weight:[\s]*([\d]+);/g, function (str, val) {
                if (parseInt(val) >= 700) {
                    tagName = 'strong';
                    return '';
                }
                return '';
            }));

            if (tagName) {
                node.tagName = tagName;
            }

            node.setAttr('style', style);

        }

    });

    // 清除 style 的 styleName 属性
    addinputFilters(function removeStyleName(node){
        var style;
        if (node.type == 'element' && (style = node.getAttr('style'))) {
            style = utils.trim(style.replace(/styleName:[\s\S]+?(;|$)/g, ''));
            node && node.setAttr('style', style);
        }
    });

};
