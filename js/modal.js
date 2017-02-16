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

        $('.modalclose, .overlay').click(function () {
            if(isAnimation){
                return;
            }

            closeModal();
        });
    }

    function openmodal() {
        isAnimation = true;
        $('.modal[data-modal="'+ modaldata + '"], .overlay').velocity('fadeIn',{
            complete:function(){
               isAnimation = false;
           }
       });
    }

    function closeModal(){
        isAnimation = true;
        $modal.velocity('fadeOut');
        $overlay.velocity('fadeOut',{
            complete:function(){
               isAnimation = false;
           }
       });
    }

    addEvent();
});