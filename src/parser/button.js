UE.registerUI('editword',function(editor, uiName){

    var me = editor;

    UE.I18N['zh-cn']['labelMap']['editword'] = '编辑word文档';

    var btn = new UE.ui.Button({
        name:uiName,
        title:uiName,
        cssRules :'background-position: -301px -40px;',
        onclick:function () { }
    });

    editor.addListener('ready', function() {
        var b = btn.getDom('body'),
            iconSpan = b.children[0];
        editor.afterConfigReady(function(){
            initWordBtn(iconSpan);
        });
    });

    function initWordBtn(containerBtn){
        var timestrap = (+new Date()).toString(36),
            w = containerBtn.offsetWidth || 20,
            h = containerBtn.offsetHeight || 20,
            homeUrl = me.options.UEDITOR_HOME_URL,
            //actionUrl = editor.getActionUrl(editor.getOpt('fileActionName')),
            //actionUrl = homeUrl + 'php/word.php',
            //actionUrl = 'http://cq01-rdqa-pool150.cq01.baidu.com:8989/rtcs/convert?pn=1&rn=-1',
            actionUrl = 'http://convert.wenku.baidu.com/rtcs/convert?pn=1&rn=-1',
            fileVal = 'file',
            btnIframe = document.createElement('iframe'),
            btnIframeId = 'edui_upload_' + timestrap,
            btnStyle = 'display:block;width:' + w + 'px;height:' + h + 'px;min-width:20px;min-height:20px;overflow:hidden;border:0;margin:0;padding:0;position:absolute;top:0;left:0;filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity: 0;opacity: 0;cursor:pointer;';

        UE.dom.domUtils.on(btnIframe, 'load', function(){

            var win = window.open('', btnIframeId, ''),
                doc = win.document;
            doc.open();
            doc.write('<!DOCTYPE html>' +
            '<html>' +
            '<head>' +
            '<script type="text/javascript" src="' + homeUrl + 'third-party/jquery-1.10.2.min.js"></script>' +
            '<script src="' + homeUrl + 'third-party/webuploader/webuploader.flashonly.js"></script>' +
            '<link rel="stylesheet" type="text/css" href="' + homeUrl + 'third-party/webuploader/webuploader.css">' +
            '</head>' +
            '<body>' +
            '<div id="uploadBtn_' + timestrap + '" style="' + btnStyle + '"></div>' +
            '<script type="text/javascript">' +
            'var uploader = WebUploader.create({\n' +
            '    pick: {\n' +
            '        id: "#uploadBtn_' + timestrap + '",\n' +
            '        multiple: false\n' +
            '    },\n' +
            '    accept: {\n' +
            '        title: "word文档",\n' +
            '        extensions: "doc,docx",\n' +
            '        mimeTypes: "application/msword"\n' +
            '    },\n' +
            '    fileSingleSizeLimit: 5120000,\n' +
            '    swf: "' + homeUrl + 'third-party/webuploader/Uploader.swf",\n' +
            '    server: "' + actionUrl + '",\n'+
            '    fileVal: "' + fileVal + '",\n' +
            '    duplicate: true\n' +
            '});\n' +
            'uploader.on("filesQueued", function(files){\n' +
            '    uploader.upload();\n' +
            '});\n' +
            'uploader.on("all", function(type, file, ret){\n' +
            '    var handler = parent.UE["__uploaderEvents_' + timestrap + '"];\n' +
            '    return handler.apply(uploader, arguments);\n' +
            '});\n' +
            '</script>' +
            '</body>' +
            '</html>');
            doc.close();

        });

        UE['__uploaderEvents_' + timestrap] = function () {
            var args = UE.utils.extend([], arguments);
            args[0] = 'uploader_' + args[0];
            return me.fireEvent.apply(me, args);
        };
        me.on('uploader_filesQueued', function (type, files) {
            if (files && files[0]) {
                var msgContent = files[0] && files[0].ext == 'doc' ? '.doc文档耗时较长，正在解析...':'正在解析...';
                ue.trigger('showmessage', {
                    'id': files[0].id,
                    'type': 'info',
                    'content': msgContent,
                    'keepshow': true
                });
            }
        });
        me.on('uploader_uploadSuccess', function (type, file, r) {

            var bdjson,
                fileId = file.id;

            try {
                bdjson = eval('(' + r._raw + ')');
            } catch (e) {
                    showErrorMessage(file);
                return;
            }

            if (bdjson['document.xml'] && bdjson['document.xml'].length && bdjson['status'] && bdjson['status']['success']) {
                ue.trigger('updatemessage', fileId, {
                    'type': 'success',
                    'content': '解析成功!',
                    'timeout': 2000
                });
                ue.setWkContent(bdjson['document.xml']);
            } else {
                showErrorMessage(file);
            }

        });
        me.on('uploader_uploadError', function (type, file) {
            showErrorMessage(file);
        });
        me.on('uploader_error', function (type, error, file) {
            if (error == 'F_EXCEED_SIZE') {
                ue.trigger('showmessage', {
                    'id': file.id,
                    'type': 'error',
                    'content': '上传文档大小超出了 5MB 的限制！'
                });
            }
        });

        function showErrorMessage(file){
            debugger;
            ue.trigger('updatemessage', file.id, {
                'type': 'error',
                'content': file.ext == 'doc' ? '文档解析出错，请重试或转成docx格式再上传。':'文档解析出错，请重试。',
                'timeout': 2000
            });
        }

        btnIframe.name = btnIframe.id = btnIframeId;
        btnIframe.style.cssText = btnStyle;
        containerBtn.appendChild(btnIframe);

    }

    return btn;

});