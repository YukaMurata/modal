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

        $('.modalclose, .modal').click(function () {
            if(isAnimation){
                return;
            }

            closeModal();
        });

        $('.modal_content').click(function(e){
            e.stopPropagation();
        });
    }

    function openmodal() {
        isAnimation = true;
        $overlay.velocity('fadeIn');
        $('.modal[data-modal="'+ modaldata + '"]').velocity('fadeIn',{
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