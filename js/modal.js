$(function () {
    var modaldata;
    var $modal = $('.modal');
    var $overlay = $('.overlay');



    function addEvent() {
        var def = $.Deferred();
        $('.button').click(function () {
            modaldata = $(this).attr('data-modal');
            openmodal(modaldata);
            def.resolve();
        });
        return def.promise();
    }

    function openmodal() {
        $('.modal[data-modal="'+ modaldata + '"], .overlay').fadeIn();

    }

    function bindEvent() {
        $modal.add($overlay).add($('.modalclose')).click(function () {
            $modal.add($overlay).fadeOut();
        });
    }

    function init(){
        addEvent()
        .then(function(){
            bindEvent();
        });
    }

    init();

});