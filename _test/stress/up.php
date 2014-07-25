<?php
error_reporting(E_ALL);

function sendFile($post_data, $post_url){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $post_url);
    curl_setopt($curl, CURLOPT_POST, true );
    curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array(
        "Origin" => "http://convert.wenku.baidu.com",
        "Host" => "convert.wenku.baidu.com",
        "Referer" => "http://jinqn.baidu.com/editword/test/bingfa/"
    ));
    curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36");
    curl_setopt($curl, CURLOPT_REFERER, "http://jinqn.baidu.com/");
    $result = curl_exec($curl);
    $error = curl_error($curl);
    curl_close($curl);
    print_r($error);
    return $error ? $error : $result;
}

// $url = "http://cq01-rdqa-pool150.cq01.baidu.com:8989/rtcs/convert?pn=1&rn=-1";
// $url = "http://cq02-iknow-ortcs00.cq02.baidu.com:8080/rtcs/convert?pn=1&rn=-1";
$url = "http://convert.wenku.baidu.com/rtcs/convert?pn=1&rn=-1&xxxxxxx";
$data = array( "file"  => "@1.docx" );

var_dump(sendFile($data,$url));

?>