$(function(){

    var ue = UE.getEditor('wordeditor', {
        'toolbars':[[]],
        'initialStyle': 'body{padding: 50px 80px!important;}',
        'initialContent': '<p style="color: #999;font-size:12px;">欢迎使用 baidu word!</p>',
        'autoClearinitialContent': 'true',
        'focus': true
    });

    ue.ready(function(){
        //$.get('data.json', function(bdjson){
        //    ue.setWkContent(bdjson['document.xml']);
        //});
        initToolbar('toolbar', ue);
        initUploader('toolbar', ue);

    });

    /* 初始化工具栏 */
    function initToolbar(targetId, editor){
        FUIToolbar.getToolbar(targetId, editor);
    }

    /* 初始化工具栏右边的按钮 */
    function initUploader(targetId, editor){

        $('#' + targetId + ' .tab-list').append('<div class="right">' +
        '<a class="menuitem upload" id="upload">导入word文档</a>' +
        '<a class="menuitem" href="viewer.php" target="_blank">预览</a>' +
        '<a class="menuitem">保存</a>' +
        '<a class="menuitem">分享</a>' +
        '</div>');

        var uploader = WebUploader.create({
            pick: {
                id: "#upload",
                multiple: false
            },
            accept: {
                title: "word文档",
                extensions: "doc,docx",
                mimeTypes: "application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            },
            fileSingleSizeLimit: 5120000,
            swf: ue.options.UEDITOR_HOME_URL + 'third-party/webuploader/Uploader.swf',
            //server: 'http://cq01-rdqa-pool150.cq01.baidu.com:8989/rtcs/convert?pn=1&rn=-1',
            server: 'http://convert.wenku.baidu.com/rtcs/convertzip?pn=1&rn=-1&zip=true',
            //server: 'http://convert.wenku.baidu.com/rtcs/convert?pn=1&rn=-1',
            fileVal: 'file',
            duplicate: true
        });

        uploader.on('filesQueued', function(files){
            uploader.upload();
            uploader.disable();
        });

        uploader.on('uploadFinished', function(files){
            setTimeout(function () {
                uploader.enable();
            },2000);
        });

        uploader.on('all', function(){
            var args = $.extend([], arguments);
            args[0] = 'uploader_' + args[0];
            return editor.fireEvent.apply(editor, args);
        });

    }

    window.ue = ue;

});