$(function () {
    var modaldata;
    var $modal = $('.modal');
    var $overlay = $('.overlay');
    var isAnimation = false;



    function addEvent() {
        $('.button').click(function () {

            if(isAnimation){
                return;
            }

            modaldata = $(this).attr('data-modal');
            openmodal(modaldata);
            
        });
    }

    function openmodal() {
        isAnimation = true;
        $('.modal[data-modal="'+ modaldata + '"], .overlay').fadeIn(function(){
            isAnimation = false;
        });

    }

    function bindEvent() {
        $modal.add($overlay).add($('.modalclose')).click(function () {

            if(isAnimation){
                return;
            }

            closeModal();
        });
    }

    function closeModal(){
        isAnimation = true;
        $modal.add($overlay).fadeOut(function(){
            isAnimation = false;
        });
    }

    function init(){
        addEvent();
        bindEvent();
    }

    init();

});