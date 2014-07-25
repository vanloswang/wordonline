<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>百度doc</title>

    <!-- lib/jquery -->
    <script type="text/javascript" charset="utf-8" src=lib/jquery-1.11.1.min.js></script>

    <!-- lib/ueditor & src/ueditor ueditor fix -->
    <script type="text/javascript" charset="utf-8" src="lib/ueditor/ueditor.config.js"></script>
    <script type="text/javascript" charset="utf-8" src="lib/ueditor/ueditor.all.js"></script>
    <script type="text/javascript" charset="utf-8" src="lib/ueditor/lang/zh-cn/zh-cn.js"></script>
    <script type="text/javascript" charset="utf-8" src="src/ueditor/import.js"></script>
    <link rel="stylesheet" href="assets/style/ueditor/fix-ueditor.css"/>

    <!-- lib/webuploader -->
    <script type="text/javascript" charset="utf-8" src="lib/webuploader/webuploader.flashonly.js"></script>
    <link rel="stylesheet" href="lib/webuploader/webuploader.css"/>

    <!-- lib/fui & src/toolbar -->
    <script src="lib/jhtmls.min.js"></script>
    <script src="lib/fui/fui.all.js"></script>
    <link rel="stylesheet" type="text/css" href="lib/fui/theme/default/fui.css">
    <script src="src/toolbar/import.js"></script>
    <link rel="stylesheet" href="assets/style/toolbar/toolbar.css"/>

    <!-- src/parser wordconverter -->
    <script type="text/javascript" charset="utf-8" src="src/parser/import.js"> </script>

    <!-- wordonline -->
    <script src="js/wordonline.js"></script>
    <link rel="stylesheet" href="assets/style/public.css"/>

</head>
<body>

<div class="header">
    <div class="left">
        <a class="guide logo" href="#">Baidu Word</a>
        <a class="guide active" href="#">编辑文档</a>
        <a class="guide" href="#">我的文档</a>
        <a class="guide" href="#">我的分享</a>
    </div>
    <div class="right">
        <span class="avatar"></span>
        <a href="http://i.baidu.com" target="_blank">Jinqn</a>
        <a href="#">注销</a>
    </div>
</div>

<div id="toolbar0" class="toolbar0"></div>
<div id="toolbar" class="toolbar"></div>

<div class="main">
    <div class="container editor">
        <script id="wordeditor" class="wordeditor" type="text/plain" style="width:900px;height:600px;"></script>
    </div>
</div>

<div class="footer">
    @ 百度ueditor版权所有
</div>

</body>
</html>