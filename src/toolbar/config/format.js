(function () {

    function travelConfig(node, callback) {
        if (!node) return;
        callback(node);

        var children = (node.clazz === 'Tabs' ? node.panels:node.widgets);
        if (children && children.length) {
            for (var i = 0; i < children.length; i++) {
                travelConfig(children[i], callback);
            }
        }

    }

    /* 遍历 config */
    FUIToolbar.ConfigTraveller = function (callback) {
        travelConfig(FUIToolbar.Config, callback);
    };

    /* 设置 _cmd 值 */
    FUIToolbar.ConfigTraveller(function (node) {

        if (node.clazz && node.id) {

            /* 设置 _cmd 值 */
            node._cmd = node._cmd || node.id;

            /* TODO: 设置的 className */

        }

    });

})();
