<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>百度doc</title>

    <!-- jquery -->
    <script type="text/javascript" charset="utf-8" src=lib/jquery-1.11.1.min.js></script>

    <!-- editword -->
    <script type="text/javascript" charset="utf-8" src="parser/import.js"> </script>

    <!-- public.css -->
    <link rel="stylesheet" href="assets/style/public.css"/>
    <link rel="stylesheet" href="assets/style/viewer.css"/>

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

<div class="main">

<div class="container">

    <div class="content">

    <?php
    if (isset($_POST['content'])) {
        echo $_POST['content'];
    } else {
        ?>
        <p style="font-size:18px;line-height:115%;padding-bottom:0px;padding-top:32px;outlineLvl:9;font-size:29px;line-height:200%;padding-bottom:22px;padding-top:22px;outlineLvl:0;text-align:justify;">
            目录
        </p>
        <p style="line-height:115%;padding-bottom:6px;text-align:justify;">
            <span style="color:#0000FF;text-decoration:underline;">标题1居中，颜色红色</span><span style="display:none;"> &nbsp; &nbsp;1</span>
        </p>
        <p style="line-height:115%;padding-bottom:6px;text-align:justify;">
            <span style="color:#0000FF;text-decoration:underline;">标题1对于“插入”选项卡上的库</span><span style="display:none;"> &nbsp; &nbsp;3</span>
        </p>
        <p style="line-height:115%;padding-bottom:6px;margin-left:14px;text-align:justify;text-indent:24px;">
            <span style="color:#0000FF;text-decoration:underline;">标题二 在设计时都充分考虑了其中的项与文档整体外观的协调性。</span><span style="display:none;"> &nbsp; &nbsp;3</span>
        </p>
        <p style="text-align:justify;"></p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <h1 style="outlineLvl:0;text-align:justify;text-align:center;">
            标题1居中，<span style="color:#FF0000;">颜色红色</span>
        </h1>
        <p style="font-size:21px;">
            <strong style="font-size:21px;background:green;text-decoration:underline;">第一部分，字体基本格式</strong>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <strong style="text-decoration:underline;">BIU对于“插入”选项卡上的库，在设计时都充分考虑了其中的项与文档整体外观的协调性。 您可以使用这些库来插入表格、页眉、页脚、列表、封面以及其他文档构建基块。 您创建的图片、图表或关系图也将与当前的文档外观协调一致。</strong>
        </p>
        <p style="text-align:justify;">
            <span style="color:#00B050;font-size:20px;">小三字体，绿色在“开始”选项卡上，通过从快速样式库中为所选文本选择一种外观，您可以方便地更改文档中所选文本的格式。您还可以使用“开始”选项卡上的其他控件来直接设置文本格式。大多数控件都允许您选择是使用当前主题外观，还是使用某种直接指定的格式</span>。
        </p>
        <p style="text-decoration:line-through;">
            <span style="text-decoration:line-through;">删除线若要更改文档的整体外观，请在“页面布局”选项卡上选择新的“主题”元素。若要更改快速样式库中的可用外观，请使用“更改当前快速样式集”命令。主题库和快速样式库都提供了重置命令，因而您总是能够将文档外观还原为当前模板所包含的原始外观。</span>
        </p>
        <p style="font-size:24px;valign:sup;">
            <span style="font-size:24px;">上下标X</span><sub>2 fdjks</sub><sup>fdfdfdffdfd</sup>
        </p>
        <p style="text-align:justify;">
            <span style="text-decoration:underline;">波浪线的方式打法倒萨发生大发的发送解放路口撒酒疯垃圾分类吉萨浪费点卡来说 </span>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <span style="background:green;">这个地方有背景</span>
        </p>
        <p style="text-align:justify;">
            <span style="background:#d8d8d8;">这处的字体有底纹</span>
        </p>
        <p style="text-align:justify;">
            <span style="border:1px solid #000000;">字符边框</span>
        </p>
        <p style="font-size:24px;">
            <span style="font-size:24px;">带圈字符</span>
        </p>
        <p style="text-decoration:line-through;">
            <span style="text-decoration:line-through;">对于“插入”选项卡上的库，在设计时都充分考虑了其中的项与文档整体外观的协调性。 您可以使用这些库来插入表格、页眉、页脚、列表、封面以及其他文档构建基块。 您创建的图片、图表或关系图也将与当前的文档外观协调一致。</span>
        </p>
        <p style="text-align:justify;">
            高级-》缩放200%。在“开始”选项卡上，通过从快速样式库中为所选文本选择一种外观，您可以方便地更改文档中所选文本的格式。您还可以使用“开始”选项卡上的其他控件来直接设置文本格式。大多数控件都允许您选择是使用当前主题外观，还是使用某种直接指定的格式。
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="font-size:24px;">
            <strong style="font-size:24px;background:green;">第二部分：段落样式</strong>
        </p>
        <p style="text-indent:2em;text-align:justify;text-indent:0em;padding-left:28px;">
            <span style="font-family:Wingdings;">	</span>项目符号对于“插入”选项卡;
        </p>
        <p style="text-indent:2em;text-align:justify;text-indent:0em;padding-left:28px;">
            <span style="font-family:Wingdings;">	</span>上的库，在设计时都;
        </p>
        <p style="text-indent:2em;text-align:justify;text-indent:0em;padding-left:28px;">
            <span style="font-family:Wingdings;">	</span>充分考虑了其中的项
        </p>
        <p style="text-indent:2em;text-align:justify;text-indent:0em;padding-left:28px;">
            1)	编号与文档整体外观的协调性。
        </p>
        <p style="text-indent:2em;text-align:justify;text-indent:0em;padding-left:28px;">
            2)	您可以使用这些库来插入表格；
        </p>
        <p style="text-indent:2em;text-align:justify;text-indent:0em;padding-left:28px;">
            3)	页眉、页脚、列表、封面以及其他文档构建基块。
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-indent:2em;text-align:justify;text-indent:0em;padding-left:28px;">
            1	多级列表您创建的图片、图表或关系图也将与当前的文档外观协调一致。
        </p>
        <p style="text-indent:2em;text-align:justify;text-indent:0em;padding-left:37px;">
            1.1	在“开始”选项卡上，通过从快速样式库中为所选文本选择一种外观；
        </p>
        <p style="text-indent:2em;text-align:justify;text-indent:0em;padding-left:37px;">
            1.1.1	您可以方便地更改文档中所选文本的格式。
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p>
            居左，居中，居右您还可以使用“开始”选项卡上的其他控件来直接设置文本格式。
        </p>
        <p style="text-align:center;">
            大多数控件都允许您选择是使用当前主题外观。
        </p>
        <p style="text-align:right;">
            若要更改文档的整体外观
        </p>
        <p style="text-align:justify;">
            分散对齐请在“页面布局”选项卡上选择新的“主题”元素。
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="line-height:200%;">
            行距2.0若要更改快速样式库中的可用外观，请使用“更改当前快速样式集”命令。主题库和快速样式库都提供了重置命令，因而您总是能够将文档外观还原为当前模板所包含的原始外观。
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="padding-bottom:16px;text-indent:2em;">
            <strong>首行缩进，段后行距增加12磅 </strong>对于“插入”选项卡上的库，在设计时都充分考虑了其中的项与文档整体外观的协调性。 您可以使用这些库来插入表格、页眉、页脚、列表、封面以及其他文档构建基块。 您创建的图片、图表或关系图也将与当前的文档外观协调一致。
        </p>
        <p style="text-align:justify;">
            在“开始”选项卡上，通过从快速样式库中为所选文本选择一种外观，您可以方便地更改文档中所选文本的格式。您还可以使用“开始”选项卡上的其他控件来直接设置文本格式。大多数控件都允许您选择是使用当前主题外观，还是使用某种直接指定的格式。
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="font-size:21px;">
            <strong style="font-size:21px;background:green;">第三部分，样式style</strong>
        </p>
        <h1 style="outlineLvl:0;text-align:justify;">
            标题1对于“插入”选项卡上的库
        </h1>
        <h2 style="outlineLvl:1;text-align:justify;">
            标题二 在设计时都充分考虑了其中的项与文档整体外观的协调性。
        </h2>
        <blockquote style="border-bottom:1px solid #4F81BD;padding-bottom:18px;padding-top:13px;margin-left:62px;margin-right:62px;text-align:justify;">
            明显引用：您可以使用这些库来插入表格、页眉、页脚、列表、封面以及其他文档构建基块。 您创建的图片、图表或关系图也将与当前的文档外观协调一致。
        </blockquote>
        <p style="font-weight:700;text-transform:uppercase;color:#C0504D;letter-spacing:0px;text-decoration:underline;">
            <strong style="text-transform:uppercase;color:#C0504D;letter-spacing:0px;text-decoration:underline;">明显参考：在“开始”选项卡上，通过从快速样式库中为所选文本选择一种外观；</strong>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="font-size:18px;">
            <strong style="font-size:18px;background:green;">第四部分：插入各种元素</strong><strong style="font-size:18px;">。</strong>
        </p>
        <p style="text-align:justify;">
            表格样式
        </p>
        <table style="color:#76923C;margin-left:0px;border-top:1px solid #9BBB59;border-bottom:1px solid #9BBB59;cellpadding:0px 7px 0px 7px;margin-left:0px;cellpadding:0px 7px 0px 7px;border-collapse:collapse;border:none;">
            <tbody>
            <tr style="font-weight:700;border-top:1px solid #9BBB59;border-left:none;border-bottom:1px solid #9BBB59;border-right:none;border-insideH:none;border-insideV:none;vertical-align:top;" class="firstRow">
                <td style="width:189px;vertical-align:top;padding:0px 7px 0px 7px;border-top:1px solid #9BBB59;border-left:none;border-bottom:none;border-right:none;">
                    <p style="text-align:justify;">
                        1
                    </p>
                </td>
                <td style="width:189px;vertical-align:top;padding:0px 7px 0px 7px;border-top:1px solid #9BBB59;border-left:none;border-bottom:none;border-right:none;">
                    <p style="line-height:100%;padding-bottom:0px;padding-top:0px;">
                        3
                    </p>
                </td>
                <td style="width:189px;vertical-align:top;padding:0px 7px 0px 7px;border-top:1px solid #9BBB59;border-left:none;border-bottom:none;border-right:none;">
                    <p style="line-height:100%;padding-bottom:0px;padding-top:0px;">
                        风景大煞风景拉萨
                    </p>
                </td>
            </tr>
            <tr style="border-left:none;border-right:none;border-insideH:none;border-insideV:none;background:#E6EED5;vertical-align:top;">
                <td style="width:189px;vertical-align:top;padding:0px 7px 0px 7px;font-weight:700;border-top:none;border-left:none;border-bottom:1px solid #9BBB59;border-right:none;">
                    <p style="text-align:justify;">
                        2
                    </p>
                </td>
                <td style="width:189px;vertical-align:top;padding:0px 7px 0px 7px;border-top:none;border-left:none;border-bottom:1px solid #9BBB59;border-right:none;">
                    <p style="text-align:justify;">
                        4
                    </p>
                </td>
                <td style="width:189px;vertical-align:top;padding:0px 7px 0px 7px;border-top:none;border-left:none;border-bottom:1px solid #9BBB59;border-right:none;">
                    <p style="text-align:justify;">
                        风景大煞风景拉萨快递放假
                    </p>
                </td>
            </tr>
            <tr style="height:0;">
                <td style="width:189px;border:none;"></td>
                <td style="width:189px;border:none;"></td>
                <td style="width:189px;border:none;"></td>
            </tr>
            </tbody>
        </table>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <table style="margin-left:0px;border-top:1px solid #000000;border-left:1px solid #000000;border-bottom:1px solid #000000;border-right:1px solid #000000;border-insideH:1px solid #000000;border-insideV:1px solid #000000;cellpadding:0px 7px 0px 7px;margin-left:0px;cellpadding:0px 7px 0px 7px;border-collapse:collapse;border:none;">
            <tbody>
            <tr style="height:34px;" class="firstRow">
                <td style="width:142px;vertical-align:top;padding:0px 7px 0px 7px;border-top:1px solid #000000;border-left:1px solid #000000;border-bottom:1px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:justify;">
                        高度0.9
                    </p>
                </td>
                <td style="width:142px;vertical-align:top;padding:0px 7px 0px 7px;border-top:1px solid #000000;border-left:none;border-bottom:1px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:justify;">
                        <br/>
                    </p>
                </td>
                <td style="width:142px;vertical-align:top;padding:0px 7px 0px 7px;border-top:4px solid #000000;border-left:none;border-bottom:1px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:justify;">
                        <br/>
                    </p>
                </td>
                <td style="width:142px;vertical-align:middle;padding:0px 7px 0px 7px;border-top:1px solid #000000;border-left:none;border-bottom:1px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:right;">
                        文字对齐方式右
                    </p>
                </td>
            </tr>
            <tr style="height:34px;">
                <td style="width:142px;vertical-align:top;padding:0px 7px 0px 7px;border-top:none;border-left:1px solid #000000;border-bottom:1px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:justify;">
                        <br/>
                    </p>
                </td>
                <td style="width:142px;vertical-align:top;padding:0px 7px 0px 7px;border-top:none;border-left:none;border-bottom:1px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:justify;">
                        <br/>
                    </p>
                </td>
                <td style="width:142px;vertical-align:top;padding:0px 7px 0px 7px;border-top:none;border-left:none;border-bottom:1px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:justify;">
                        <br/>
                    </p>
                </td>
                <td style="width:142px;vertical-align:top;padding:0px 7px 0px 7px;border-top:none;border-left:none;border-bottom:1px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:justify;">
                        <br/>
                    </p>
                </td>
            </tr>
            <tr style="height:34px;">
                <td colspan="2" style="width:284px;vertical-align:top;padding:0px 7px 0px 7px;border-top:none;border-left:1px solid #000000;border-bottom:1px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:justify;">
                        合并单元格
                    </p>
                </td>
                <td style="width:142px;vertical-align:top;padding:0px 7px 0px 7px;border-top:none;border-left:none;border-bottom:4px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:justify;">
                        <br/>
                    </p>
                </td>
                <td style="width:142px;vertical-align:top;padding:0px 7px 0px 7px;border-top:none;border-left:none;border-bottom:1px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:justify;">
                        <br/>
                    </p>
                </td>
            </tr>
            <tr style="height:34px;">
                <td style="width:142px;vertical-align:top;padding:0px 7px 0px 7px;border-top:none;border-left:1px solid #000000;border-bottom:1px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:justify;">
                        <br/>
                    </p>
                </td>
                <td style="width:142px;vertical-align:top;padding:0px 7px 0px 7px;border-top:none;border-left:none;border-bottom:1px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:justify;">
                        <br/>
                    </p>
                </td>
                <td style="width:142px;vertical-align:top;padding:0px 7px 0px 7px;border-top:4px solid #000000;border-left:none;border-bottom:1px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:justify;">
                        <br/>
                    </p>
                </td>
                <td style="width:142px;vertical-align:top;padding:0px 7px 0px 7px;border-top:none;border-left:none;border-bottom:1px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:justify;">
                        <br/>
                    </p>
                </td>
            </tr>
            <tr style="height:34px;">
                <td colspan="2" style="width:284px;vertical-align:top;padding:0px 7px 0px 7px;border-top:none;border-left:1px solid #000000;border-bottom:1px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:justify;">
                        <br/>
                    </p>
                </td>
                <td style="width:142px;vertical-align:top;padding:0px 7px 0px 7px;border-top:none;border-left:none;border-bottom:1px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:justify;">
                        <br/>
                    </p>
                </td>
                <td style="width:142px;vertical-align:top;padding:0px 7px 0px 7px;border-top:none;border-left:none;border-bottom:1px solid #000000;border-right:1px solid #000000;">
                    <p style="text-align:justify;">
                        <br/>
                    </p>
                </td>
            </tr>
            <tr style="height:0;">
                <td style="width:142px;border:none;"></td>
                <td style="width:142px;border:none;"></td>
                <td style="width:142px;border:none;"></td>
                <td style="width:142px;border:none;"></td>
            </tr>
            </tbody>
        </table>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            表一：这里有题注
        </p>
        <p style="font-family:黑体;font-size:13px;text-align:justify;">
            图表 1
        </p>
        <p style="text-align:justify;">
            图片
        </p>
        <p style="text-align:justify;">
            Jpg，居中
        </p>
        <p style="text-align:center;">
            <img width="140.00" height="120.00" src="http://cq01-rdqa-pool150.cq01.baidu.com:8989/rtcs/image?md5sum=convert_7911b418908fe4888c1da8f6eca4af26&l=webapp&ipr={&quot;t&quot;:&quot;img&quot;,&quot;w&quot;:&quot;140.00&quot;,&quot;h&quot;:&quot;120.00&quot;,&quot;dataType&quot;:&quot;jpg&quot;,&quot;c&quot;:&quot;word\/media\/image1.jpg&quot;}"/>
        </p>
        <p style="text-align:center;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            紧密型环绕
        </p>
        <p style="text-align:justify;">
            <img width="440.00" height="268.00" src="http://cq01-rdqa-pool150.cq01.baidu.com:8989/rtcs/image?md5sum=convert_7911b418908fe4888c1da8f6eca4af26&l=webapp&ipr={&quot;t&quot;:&quot;img&quot;,&quot;w&quot;:&quot;440.00&quot;,&quot;h&quot;:&quot;268.00&quot;,&quot;dataType&quot;:&quot;gif&quot;,&quot;c&quot;:&quot;word\/media\/image2.gif&quot;}"/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            您可以方便地更改文档中所选文本的格式。您还可以使用“开始”选项卡上的其他控件来直接设置文本格式。大多数控件都允许您选择是使用当前主题外观，还是使用某种直接指定的格式。
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            剪贴画
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <img width="211.00" height="262.33" src="http://cq01-rdqa-pool150.cq01.baidu.com:8989/rtcs/image?md5sum=convert_7911b418908fe4888c1da8f6eca4af26&l=webapp&ipr={&quot;t&quot;:&quot;img&quot;,&quot;w&quot;:&quot;211.00&quot;,&quot;h&quot;:&quot;262.33&quot;,&quot;dataType&quot;:&quot;wmf&quot;,&quot;c&quot;:&quot;word\/media\/image3.wmf&quot;}"/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            Smartart，形状
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <img width="96.00" height="64.32" src="http://cq01-rdqa-pool150.cq01.baidu.com:8989/rtcs/image?md5sum=convert_7911b418908fe4888c1da8f6eca4af26&l=webapp&ipr={&quot;t&quot;:&quot;img&quot;,&quot;w&quot;:&quot;96.00&quot;,&quot;h&quot;:&quot;64.32&quot;,&quot;dataType&quot;:null,&quot;c&quot;:&quot;&quot;}"/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <img width="553.73" height="323.00" src="http://cq01-rdqa-pool150.cq01.baidu.com:8989/rtcs/image?md5sum=convert_7911b418908fe4888c1da8f6eca4af26&l=webapp&ipr={&quot;t&quot;:&quot;img&quot;,&quot;w&quot;:&quot;553.73&quot;,&quot;h&quot;:&quot;323.00&quot;,&quot;dataType&quot;:null,&quot;c&quot;:&quot;&quot;}"/>
        </p>
        <p style="text-align:justify;">
            图表
        </p>
        <p style="text-align:justify;">
            <img width="553.73" height="323.00" src="http://cq01-rdqa-pool150.cq01.baidu.com:8989/rtcs/image?md5sum=convert_7911b418908fe4888c1da8f6eca4af26&l=webapp&ipr={&quot;t&quot;:&quot;img&quot;,&quot;w&quot;:&quot;553.73&quot;,&quot;h&quot;:&quot;323.00&quot;,&quot;dataType&quot;:null,&quot;c&quot;:&quot;&quot;}"/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            超链接
        </p>
        <p style="text-align:justify;">
            <span style="color:#0000FF;text-decoration:underline;">wenku.baidu.com</span>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            文本框，竖排
        </p>
        <p style="text-align:justify;">
            <obj data="[object Object],[object Object]"></obj>
        </p>
        <p style="text-align:justify;">
            <obj data="[object Object]"></obj>
        </p>
        <p style="font-size:58px;line-height:200%;">
            <span style="font-size:58px;">若</span>
        </p>
        <p style="text-align:justify;">
            要更改文档的整体外观，这里有书签shuqian，请在“页面布局”选项卡上选择新的“主题”元素。若要更改快速样式库中的可用外观，请使用“更改当前快速样式集”命令。主题库和快速样式库都提供了重置命令，因而您总是能够将文档外观还原为当前模板所包含的原始外观。
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            日期和时间2012年8月17日星期五
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            文档对象
        </p>
        <p style="text-align:justify;">
            <img width="480" height="360.4" src="http://cq01-rdqa-pool150.cq01.baidu.com:8989/rtcs/image?md5sum=convert_7911b418908fe4888c1da8f6eca4af26&l=webapp&ipr={&quot;t&quot;:&quot;img&quot;,&quot;w&quot;:480,&quot;h&quot;:360.4,&quot;dataType&quot;:&quot;emf&quot;,&quot;c&quot;:&quot;word\/media\/image4.emf&quot;}"/>
        </p>
        <p style="text-align:justify;">
            <img src="http://cq01-rdqa-pool150.cq01.baidu.com:8989/rtcs/math?md5sum=convert_7911b418908fe4888c1da8f6eca4af26&math=01b21f4e645d2c013b8a3778f51f6cfe"/>
        </p>
        <p style="font-size:18px;">
            <span style="font-size:18px;">特殊符号※◎</span>
        </p>
        <p style="text-align:justify;">
            编号（255）：CCLV （13）XIII<br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="font-size:21px;">
            <strong style="font-size:21px;background:green;">第五部分：页面设置</strong>
        </p>
        <p style="text-align:justify;">
            对于“插入”选项卡上的库，在设计时都充分考虑了其中的项与文档整体外观的协调性。
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            您可以使用这些库来插入表格、页眉、页脚、列表、封面以及其他文档构建基块。 您创建的图片、图表或关系图也将与当前的文档外观协调一致。
        </p>
        <p style="text-align:justify;">
            在“开始”选项卡上，通过从快速样式库中为所选文本选择一种外观，您可以方便地更改文档中所选文本的格式。您还可以使用“开始”选项卡上的其他控件来直接设置文本格式。大多数控件都允许您选择是使用当前主题外观，还是使用某种直接指定的格式。
        </p>
        <p style="text-align:justify;">
            若要更改文档的整体外观，请在“页面布局”选项卡上选择新的“主题”元素。若要更改快速样式库中的可用外观，请使用“更改当前快速样式集”命令。主题库和快速样式库都提供了重置命令，因而您总是能够将文档外观还原为
        </p>
        <p style="text-align:justify;">
            在“开始”选项卡上，通过从快速样式库中为所选文本选择一种外观，您可以方便地更改文档中所选文本的格式
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="font-size:34px;">
            <span style="font-size:34px;">若要更改文档的整体外观，请在“页面布局”选项卡上选择新的“主题”元素。若要更改快速样式库中的可用外观，请使用“更改当前快速样式集”命令。主题库和快速样式库都提供了重置命令，因而您总是能够将文档外观还原为当前模板所包含的原始外观。</span>
        </p>
        <p style="font-size:34px;">
            <span style="font-size:34px;">对于“插入”选项卡上的库，在设计时都充分考虑了其中的项与文档整体外观的协调性。 您可以使用这些库来插入表格、页眉、页脚、列表、封面以及其他文档构建、图表或关系图也将与当前的文档外观协调一致。</span><br/>
        </p>
        <p style="font-size:24px;">
            <span style="font-size:24px;">脚注</span>
        </p>
        <p style="font-size:24px;">
            <br/>
        </p>
        <p style="text-align:justify;">
            在“开始”选项卡上，通过从快速样式库中为所选文本选择一种外观，您可以方便地更改文档中所选文本的格式。您还可以使用“开始”选项卡上的其他控件来直接设置文本格式。大多数控件都允许您选择是使用当前主题外观，还是使用某种直接指定的格式。
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            <br/>
        </p>
        <p style="text-align:justify;">
            若要更改文档的整体外观，请在“页面布局”选项卡上选择新的“主题”元素。若要更改快速样式库中的可用外观，请使用“更改当前快速样式集”命令。主题库和快速样式库都提供了重置命令，因而您总是能够将文档外观还原为当前模板所包含的原始外观。
        </p>
        <p style="text-align:justify;">
            对于“插入”选项卡上的库，在设计时都充分考虑了其中的项与文档整体外观的协调性。 您可以使用这些库来插入表格、页眉、页脚、列表、封面以及其他文档构建基块。 您创建的图片、图表或关系图也将与当前的文档外观协调一致。
        </p>
        <p style="text-align: justify;">
            <br/>
        </p>
    <?php } ?>
    </div>

</div>

</div>

<div class="footer">
    @ 百度ueditor版权所有
</div>

</body>
</html>
