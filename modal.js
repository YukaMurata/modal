$(function () {

// モーダルウィンドウが開くときの処理	
    $(".modal_1").click(function () {
        $("#modal01").fadeIn();
        $(".overlay").fadeIn();
        $(this).addClass("open");
        return false;
    });

// モーダルウィンドウが閉じるときの処理	
    $(".modalclose").click(function () {
        $("#modal01").fadeOut();
        $(".overlay").fadeOut();
        return false;
    });


});