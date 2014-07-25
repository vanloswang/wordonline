/**
 * 开发版本的文件导入
 */
(function (){
    var paths  = [
            'toolbar.js',
            'config/tab.js',
            'config/edit.js',
            'config/insert.js',
            'config/table.js',
            'config/view.js',
            'config/tool.js',
            'config/help.js',
            'config/format.js',
//            'widget/block.js',
            'widget/button.js',
//            'widget/input-menu.js',
//            'widget/button-menu.js',
//            'widget/drop-panel.js',
//            'widget/colorpicker.js',
            'widget/tablepicker.js',
//            'widget/dialog.js'
        ],
        baseURL = getBaseBir();

    for (var i=0,pi;pi = paths[i++];) {
        document.write('<script type="text/javascript" src="'+ baseURL + pi +'"></script>');
    }

    function getBaseBir(){
        var srcipts = document.getElementsByTagName('script'),
            src = srcipts[srcipts.length - 1].src;

        if (src) {
            var a = document.createElement('a');
            a.href = src;
            a.href = a.href;
            return a.protocol + '//' + a.host + a.pathname.substr(0, a.pathname.lastIndexOf('/') + 1);
        }
        return '';
    }

})();
