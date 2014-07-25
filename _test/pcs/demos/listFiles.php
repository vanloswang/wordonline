<?php

require_once '../libs/BaiduPCS.class.php';
//请根据实际情况更新$access_token与$appName参数
$access_token = '52.16964bd5807dea4ccbd882b5c98430b2.2592000.1406778745.587478742-2246711';
//应用目录名
$appName = 'kityminder';
//应用根目录
$root_dir = '/apps' . '/' . $appName . '/';

//文件路径，此处列出的是应用根目录
$path = $root_dir;
//根据time排序
$by = 'time';
//升序或降序
$order = 'asc';
//记录区间
$limit = '0-9';

$pcs = new BaiduPCS($access_token);
$result = $pcs->listFiles($path, $by, $order, $limit);
echo $result;
?>