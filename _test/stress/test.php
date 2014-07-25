<script>
    //创建一个ajaxRequest对象
    var fnStr = 'XMLHttpRequest()';
    try {
        new ActiveXObject("Msxml2.XMLHTTP");
        fnStr = 'ActiveXObject(\'Msxml2.XMLHTTP\')';
    } catch (e) {
        try {
            new ActiveXObject("Microsoft.XMLHTTP");
            fnStr = 'ActiveXObject(\'Microsoft.XMLHTTP\')'
        } catch (e) {
        }
    }
    var creatAjaxRequest = new Function('return new ' + fnStr);
    var xhr = creatAjaxRequest();

    xhr.open('GET', '1.docx');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            console.log(xhr.responseText.length);
            var file = new File();
            debuggger;
        }
    };
    xhr.send();

</script>