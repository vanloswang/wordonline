<?php
function shareFileByUid($fsid, $uid)
{
    $fsid = intval($fsid);
    if ($fsid <= 0) {
        return false;
    }
    //构建请求header信息
    $header = array('pathinfo' => '/internal/share/set',);
    //构建请求体
    $req = array();
    $req['fid_list'] = json_encode(array($fsid));
    $req['uid'] = intval($uid);
    $req['schannel'] = 0;

    //分享途径，0复制链接，1weibo，2邮件，3短信
    $req['channel_list'] = json_encode(array());
    //发起请求，ral需要配置为form形式
    $panRes = ral('PanShare', 'post', $req, rand(), $header);
    if ($panRes === false) {
        echo("share file failed when talk to pan in ral. fsid[$fsid] errno[" . ral_get_errno() . "]");
        return false;
    }

    //解析返回结果
    $panDecode = json_decode($panRes, true);

    if ($panDecode === false) {
        echo("decode share file result failed. fsid[$fsid] res[$panRes]");
        return false;
    }

    //操作失败
    if ($panDecode['errno'] != 0) {
        echo("share file failed when talk to pan. fsid[$fsid] errno[{$panDecode['errno']}]");
        return false;
    }

    return $panRes;
}

?>