function confirmFunction() {
    if(window.confirm('設定ファイルへ移動しますか？')){
        location.href = "./php/info.php";
    }else{
        // window.alert('キャンセルされました');
    }
}