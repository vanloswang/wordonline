/**
 * 文库文档资源解析
 * Date: 14-06-16
 * Time: 上午10:21
 */
(function(){
    var uNode = UE.uNode;
    var utils = UE.utils;
    var DEBUG = false;

    //标签白名单
    var TagList = UE._wk_whitelist;
    //标签名mapping
    var ATTR = {
            tagName: 't',
            className: 'r',
            children: 'c'
        };


    /**
     * 转换函数
     * @param source 源数据
     * @return HTML String, 符合w3c 规范的html字符串片段
     */
    function transform( source ) {

        var tagName = source[ ATTR['tagName'] ],
            classNames = source[ ATTR['className'] ],
            children = source[ ATTR['children'] ],
            _selfFn = arguments.callee,
            node = null;

        //合法性检测
        if( !isLegalTag( tagName ) ) {
            if( DEBUG ) {
                throw new Error( 'Illegal tag, tag name is: ' + tagName );
            } else {
                return null;
            }
        }

        node = new uNode({
            type:'element',
            children:[],
            tagName: tagName
        });

        classNames && node.setAttr('class', Array.isArray(classNames) ? classNames.join(" ") : classNames );

        setValidAttr( node, source );

        if(children) {
            if( utils.isArray( children ) ) {
                children.forEach( function( childSource ){
                    var childNode = _selfFn( childSource );
                    childNode && node.appendChild( childNode );
                } );
            } else if( utils.isString( children ) ) {
                node.appendChild(new uNode({
                    'type':'text',
                    'data':utils.unhtml(children || '')
                }));
            } else if( utils.isObject( children ) ) {
                var childNode = _selfFn( children );
                childNode && node.appendChild( childNode );
            } else {
                throw new Error('unkonw child type');
            }
        }

        return node;

    }

    /**
     * 给定的标签名是否是合法的标签名
     * 依赖白名单来进行判断
     * @param tagName 表签名
     * @return <boolean> 是否合法
     */
    function isLegalTag( tagName ) {
        return tagName in TagList;
    }

    /**
     * 给node应用样式
     * 如果不存在指定的样式, 则什么也不做
     * @param node 节点
     * @param styleMap class和样式对应
     * @param baseStyle 标签名称和class对应
     */
    function applyStyle( node, styleMap, baseStyle) {
        var classNames, i, mapKeys, styleStr, unTransClassNames = [], styleArr = [];

        //按标签名应用样式
        if (node.type == 'element' && (mapKeys = baseStyle[node.tagName.toLowerCase()])) {
            for (i = 0; i < mapKeys.length; i++) {
                if (mapKeys[i] in styleMap) {
                    styleStr = node.getAttr('style') || '';
                    styleStr = utils.trim(styleStr) && styleStr.substr(styleStr.length - 1) != ';' ? (styleStr + ';'):styleStr;
                    styleStr = styleStr + styleMap[mapKeys[i]];
                    node.setAttr('style', styleStr);
                }
            }
        }

        //按class应用样式
        classNames = node.getAttr('class');
        classNames = classNames ? utils.trim( classNames ).split(/\s+/):[];
        if (classNames && classNames.length) {
            for (i = 0; i < classNames.length; i++) {
                var className = classNames[i];
                if (className in styleMap) {
                    styleArr.push(styleMap[className]);
                } else {
                    unTransClassNames.push(className);
                }
            }

            styleStr = (styleArr.join(';') + ';').replace(/(^;)/, '').replace(/;{2,}/g, ';');
            styleStr && node.setAttr('style', styleStr);

            if( unTransClassNames.length ) {
                node.setAttr( 'class', unTransClassNames.join(" ") );
            } else {
                node.setAttr('class');
            }
        }

        /* 对孩子节点应用样式 */
        if (node.type == 'element') {
            for (i = 0; i < node.children.length; i++) {
                applyStyle(node.children[i], styleMap, baseStyle);
            }
        }

    }

    function formatStyle(styles) {
        var res = {};

        utils.each(styles, function(style, i){
            var styleArr = [];
            utils.each(style, function(val, key){
                if (/[\d\.]+px/.test(val)) {
                    val = val.replace(/[\d]+\.[\d]*px/g, function(a){
                        return parseInt(a) + 'px';
                    });
                }
                styleArr.push(utils.trim('' + key) + ':' + utils.trim('' + val));
            });
            res[i] = (styleArr.join(';') + ';').replace(/(^;)/, '').replace(/;{2,}/g, ';');
            if (res[i][0] == ';') console.log(res[i]);
        });
        return res;
    }

    /**
     * 通过给定的源数据验证该node节点的属性, 如果该属性符合规则(通过白名单来确定), 则附加该属性到节点上, 否则, 抛弃该属性
     * @param node 需要附加属性的节点
     * @param source 源数据
     * @returns node, 返回作为第一个参数传递进来的node节点, 该节点可能包含有属性值
     */
    function setValidAttr( node, source ) {
        var attrList = TagList[ node.tagName ],
            __trans = attrList['__trans'];

        utils.each(source, function(attrValue, attrName){
            if( attrName.indexOf('__') === 0 ) {
                return;
            }
            //属性转换
            if( __trans && __trans[ attrName ] ) {
                var tmp = source[ attrName ];
                delete source[ attrName ];
                attrName = __trans[ attrName ];
                source[ attrName ] = tmp;
                tmp = null;
            }
            if( attrList[ attrName ] ) {
                node.setAttr( attrName, source[ attrName ] + "" );
            }
        });
    }

    /**
     * 装换word内容成html内容
     * @param doc
     * @return String 转换后的字符串
     */
    UE.parseDoc = function(doc){
        var node, htmlArr = [], htmlStr = '', root;
        if (doc) {
            doc = utils.isArray(doc) ? doc:[doc];
            root = new uNode({
                type:'element',
                children:[],
                tagName: 'div'
            });
            for (var i = 0; i < doc.length; i++) {
                //bdjson转换成uNode对象
                node = transform( doc[i] );
                //应用样式到node
                applyStyle(node, formatStyle(doc[i].style), doc[i].baseStyle);
                //插入到根节点
                root.children.push(node);
                //node转换成html
                htmlArr.push(node.toHtml());
            }
            htmlStr = htmlArr.join('');
        } else {
            alert('文档解析出错');
        }

        return {
            html: htmlStr,
            node: root
        };
    };

})();
